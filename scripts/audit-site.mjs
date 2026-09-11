/**
 * Post-build site audit.
 *
 * Serves the production build and checks the things that are cheap to break
 * and expensive to notice: dead routes, duplicate or missing headings, missing
 * meta descriptions, unlabelled form controls, and the enquiry endpoint's
 * contract. Run via `npm run audit`; CI runs it on every push and PR.
 */
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const PORT = Number(process.env.AUDIT_PORT ?? 3400);
const BASE = `http://127.0.0.1:${PORT}`;

/**
 * Refuse to run if something else already holds the port.
 *
 * Without this the audit silently grades whichever server happens to be
 * listening — including a stale one from an earlier run — and reports a pass
 * for a build it never looked at.
 */
function assertPortFree(port) {
  return new Promise((resolve, reject) => {
    const probe = createServer();
    probe.once('error', (err) =>
      reject(
        new Error(
          err.code === 'EADDRINUSE'
            ? `Port ${port} is already in use. Stop that process, or set AUDIT_PORT to a free port.`
            : `Could not probe port ${port}: ${err.message}`,
        ),
      ),
    );
    probe.once('listening', () => probe.close(() => resolve()));
    probe.listen(port, '127.0.0.1');
  });
}

const failures = [];
const fail = (msg) => failures.push(msg);

async function get(path) {
  const res = await fetch(BASE + path);
  return { status: res.status, body: await res.text() };
}

let serverExited = null;

async function waitForServer(timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    // If our own server died, stop — otherwise we would poll until some
    // unrelated process answers and audit that instead.
    if (serverExited) {
      throw new Error(`Server exited before becoming ready (${serverExited}).\n${serverLog.slice(-2000)}`);
    }
    try {
      const res = await fetch(BASE + '/');
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await sleep(500);
  }
  throw new Error(`Server did not become ready on ${BASE} within ${timeoutMs}ms`);
}

await assertPortFree(PORT);

/*
 * Spawn the Next binary directly rather than through `npx`, and in its own
 * process group. Killing an `npx` wrapper leaves the real `next-server`
 * grandchild running, which then holds the port and makes the *next* run
 * audit a stale build.
 */
const nextBin = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url));
const server = spawn(process.execPath, [nextBin, 'start', '-p', String(PORT)], {
  stdio: ['ignore', 'pipe', 'pipe'],
  env: process.env,
  detached: true,
});
let serverLog = '';
server.stdout.on('data', (d) => (serverLog += d));
server.stderr.on('data', (d) => (serverLog += d));
server.on('exit', (code, signal) => {
  serverExited = `code ${code}, signal ${signal}`;
});

try {
  await waitForServer();

  // --- Routes -------------------------------------------------------------
  const { body: sitemapXml } = await get('/sitemap.xml');
  const paths = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');

  if (paths.length < 40) fail(`sitemap has only ${paths.length} URLs — expected the full site`);

  let controlCount = 0;

  for (const path of paths) {
    const { status, body } = await get(path);
    if (status !== 200) {
      fail(`${path} returned ${status}`);
      continue;
    }

    const h1s = (body.match(/<h1[\s>]/g) ?? []).length;
    if (h1s !== 1) fail(`${path} has ${h1s} <h1> elements (expected exactly 1)`);

    if (!/name="description"/.test(body)) fail(`${path} has no meta description`);

    for (const img of body.match(/<img[^>]*>/g) ?? []) {
      if (!/\salt=/.test(img)) fail(`${path} has an <img> without alt text`);
    }

    // Every form control needs a programmatic label (WCAG 3.3.2).
    const labelled = new Set([...body.matchAll(/<label[^>]*\sfor="([^"]+)"/g)].map((m) => m[1]));
    for (const m of body.matchAll(/<(?:input|select|textarea)\b[^>]*>/g)) {
      const tag = m[0];
      controlCount += 1;
      const id = /\sid="([^"]+)"/.exec(tag)?.[1];
      const hasAria = /\saria-label(?:ledby)?=/.test(tag);
      if (!(id && labelled.has(id)) && !hasAria) {
        fail(`${path} has an unlabelled form control: ${tag.slice(0, 100)}`);
      }
    }
  }

  // --- Enquiry endpoint contract -----------------------------------------
  const post = (payload) =>
    fetch(BASE + '/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

  const invalid = await post({ type: 'contact', name: 'A', email: 'nope', message: 'short' });
  if (invalid.status !== 422) fail(`bad input returned ${invalid.status}, expected 422`);

  const unknownType = await post({
    type: 'not-a-type',
    name: 'Test Person',
    email: 't@example.com',
    message: 'A long enough message body for validation.',
  });
  if (unknownType.status !== 422) fail(`unknown type returned ${unknownType.status}, expected 422`);

  // A honeypot hit must look identical to success, or bots learn the filter.
  const honeypot = await post({
    type: 'contact',
    name: 'Bot',
    email: 'b@example.com',
    message: 'A long enough message body for validation.',
    company_website: 'http://spam.example',
  });
  if (honeypot.status !== 200) fail(`honeypot returned ${honeypot.status}, expected 200`);

  if (serverExited) {
    fail(`Server exited mid-audit (${serverExited}) — results are not trustworthy.`);
  }

  console.log(
    `Audited ${paths.length} routes and ${controlCount} form controls.`,
  );
} catch (error) {
  fail(`audit crashed: ${error.message}\n${serverLog.slice(-2000)}`);
} finally {
  // Negative pid kills the whole process group, not just the leader.
  try {
    if (server.pid && !serverExited) process.kill(-server.pid, 'SIGTERM');
  } catch {
    /* already gone */
  }
}

if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const f of failures) console.error('  ✗ ' + f);
  process.exit(1);
}
console.log('✓ Site audit passed.');
