import 'server-only';
import { getDb, isFirebaseConfigured } from './firebase';
import type { InquiryType } from '@/content/types';

/**
 * Every form on the site funnels into a single `inquiries` collection, keyed by
 * `companyId` + `type`, so the group can route and report on enquiries in one
 * place. See §8 of the project brief for the routing table.
 */

export const INQUIRY_TYPES: InquiryType[] = [
  'donate',
  'invest',
  'book',
  'wholesale',
  'enroll',
  'contact',
];

export type InquiryInput = {
  companyId: string | null;
  type: InquiryType;
  name: string;
  email: string;
  phone?: string;
  organisation?: string;
  subject?: string;
  message: string;
  /** Free-form extras a particular form collects (amount, dates, equipment list). */
  details?: Record<string, string>;
};

export type ValidationResult =
  | { ok: true; value: InquiryInput }
  | { ok: false; errors: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX = { name: 120, email: 200, phone: 40, organisation: 160, subject: 200, message: 5000 };

function str(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateInquiry(raw: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const body = (raw ?? {}) as Record<string, unknown>;

  const type = str(body.type) as InquiryType;
  if (!INQUIRY_TYPES.includes(type)) errors.type = 'Unknown enquiry type.';

  const name = str(body.name);
  if (name.length < 2) errors.name = 'Please tell us your name.';
  else if (name.length > MAX.name) errors.name = 'That name is too long.';

  const email = str(body.email);
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  else if (email.length > MAX.email) errors.email = 'That email address is too long.';

  const message = str(body.message);
  if (message.length < 10) errors.message = 'Please give us a little more detail (10 characters or more).';
  else if (message.length > MAX.message) errors.message = 'Please keep your message under 5,000 characters.';

  const phone = str(body.phone);
  if (phone.length > MAX.phone) errors.phone = 'That phone number is too long.';

  const organisation = str(body.organisation);
  if (organisation.length > MAX.organisation) errors.organisation = 'That organisation name is too long.';

  const subject = str(body.subject);
  if (subject.length > MAX.subject) errors.subject = 'That subject is too long.';

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const details: Record<string, string> = {};
  if (body.details && typeof body.details === 'object') {
    for (const [key, value] of Object.entries(body.details as Record<string, unknown>)) {
      const v = str(value);
      if (v) details[key.slice(0, 60)] = v.slice(0, 1000);
    }
  }

  return {
    ok: true,
    value: {
      companyId: str(body.companyId) || null,
      type,
      name,
      email,
      phone: phone || undefined,
      organisation: organisation || undefined,
      subject: subject || undefined,
      message,
      details: Object.keys(details).length ? details : undefined,
    },
  };
}

export type SubmitResult =
  | { stored: true; id: string }
  | { stored: false; reason: 'not-configured' | 'write-failed' };

/** Writes the enquiry to `inquiries/{inquiryId}`. */
export async function submitInquiry(input: InquiryInput): Promise<SubmitResult> {
  const db = getDb();
  if (!db) {
    // Logged so a submission is never lost in a staging environment, but the
    // caller still reports honestly that it was not stored.
    console.warn('[inquiries] Firestore is not configured; enquiry not stored.', {
      type: input.type,
      companyId: input.companyId,
    });
    return { stored: false, reason: 'not-configured' };
  }

  try {
    const doc = await db.collection('inquiries').add({
      ...input,
      status: 'new',
      submittedAt: new Date().toISOString(),
      source: 'website',
    });
    return { stored: true, id: doc.id };
  } catch (error) {
    console.error('[inquiries] Firestore write failed.', error);
    return { stored: false, reason: 'write-failed' };
  }
}

export { isFirebaseConfigured };
