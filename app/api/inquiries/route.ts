import { NextResponse } from 'next/server';
import { submitInquiry, validateInquiry } from '@/lib/inquiries';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Single endpoint behind every form on the site.
 *
 * Responses are deliberately explicit about whether the enquiry was stored:
 * a form must never show a success message for a submission that went nowhere.
 */

/** Best-effort in-memory throttle. Replace with Firebase App Check or a shared store when deployed behind more than one instance. */
const RATE_LIMIT = { windowMs: 60_000, max: 5 };
const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Malformed request body.' }, { status: 400 });
  }

  // Honeypot: a real browser never fills a hidden field. Answer 200 so bots
  // cannot distinguish a rejection from a success.
  const honeypot = (body as Record<string, unknown>)?.company_website;
  if (typeof honeypot === 'string' && honeypot.length > 0) {
    return NextResponse.json({ stored: true }, { status: 200 });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please wait a minute and try again.' },
      { status: 429 },
    );
  }

  const validated = validateInquiry(body);
  if (!validated.ok) {
    return NextResponse.json({ errors: validated.errors }, { status: 422 });
  }

  const result = await submitInquiry(validated.value);
  if (result.stored) {
    return NextResponse.json({ stored: true, id: result.id }, { status: 201 });
  }

  return NextResponse.json(
    {
      stored: false,
      reason: result.reason,
      error:
        result.reason === 'not-configured'
          ? 'Our enquiry system is not connected yet, so this form could not record your message. Please email us directly and we will respond.'
          : 'We could not record your message just now. Please try again, or email us directly.',
    },
    { status: 503 },
  );
}
