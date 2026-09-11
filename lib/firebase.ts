import 'server-only';
import { cert, getApp, getApps, initializeApp, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

/**
 * Server-side Firebase.
 *
 * Returns `null` when no credentials are configured rather than throwing, so
 * the site builds and runs in a bare checkout. Callers must handle `null` —
 * see `lib/inquiries.ts`, which reports an un-stored submission to the user
 * instead of silently dropping it.
 */

const APP_NAME = 'gpgoc-admin';

function readServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      return {
        projectId: parsed.project_id ?? parsed.projectId,
        clientEmail: parsed.client_email ?? parsed.clientEmail,
        privateKey: (parsed.private_key ?? parsed.privateKey ?? '').replace(/\\n/g, '\n'),
      };
    } catch {
      console.error('[firebase] FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON — ignoring it.');
      return null;
    }
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!projectId || !clientEmail || !privateKey) return null;
  return { projectId, clientEmail, privateKey };
}

export function isFirebaseConfigured(): boolean {
  return readServiceAccount() !== null;
}

function getAdminApp(): App | null {
  const credentials = readServiceAccount();
  if (!credentials) return null;
  const existing = getApps().find((a) => a.name === APP_NAME);
  if (existing) return getApp(APP_NAME);
  return initializeApp({ credential: cert(credentials), projectId: credentials.projectId }, APP_NAME);
}

export function getDb(): Firestore | null {
  const app = getAdminApp();
  return app ? getFirestore(app) : null;
}
