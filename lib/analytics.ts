'use client';

/**
 * Per-subsidiary event tracking.
 *
 * Thin wrapper over gtag so pages never touch `window` directly and every
 * event carries the company it happened in. No-ops when GA4 is not configured,
 * which is the case in local development.
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | 'inquiry_start'
  | 'inquiry_submit'
  | 'inquiry_error'
  | 'donate_start'
  | 'cta_click'
  | 'prospectus_download';

export function track(event: AnalyticsEvent, params: Record<string, string | number> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
