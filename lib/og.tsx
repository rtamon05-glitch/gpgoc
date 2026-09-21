import { ImageResponse } from 'next/og';
import { STATUS_META } from './status';
import type { CompanyStatus } from '@/content/types';

/**
 * Shared Open Graph card.
 *
 * One generator behind every `opengraph-image` route so the cards read as a
 * set. Each subsidiary supplies its own accent, matching the accent contract
 * the site itself uses — a new company needs a three-line route file, not a
 * new design.
 *
 * Drawn with layout and colour rather than a display face: `ImageResponse`
 * cannot see the `next/font` files, and fetching a webfont at request time
 * would make every card depend on a third-party host being up.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const NAVY = '#0b1f3a';
const NAVY_SOFT = '#142a4d';
const CREAM = '#faf7f0';

export function ogImage({
  eyebrow,
  title,
  accent,
  status,
  footer,
}: {
  eyebrow: string;
  title: string;
  /**
   * The company's dark-ground accent (`accent.onDark`), not its display
   * colour: the display blue and green measure 3.6:1 and 3.4:1 against this
   * navy and read as muddy at thumbnail size.
   */
  accent: string;
  status?: CompanyStatus;
  footer?: string;
}) {
  const statusLabel = status ? STATUS_META[status].label : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: NAVY,
          backgroundImage: `radial-gradient(900px 500px at 8% -10%, ${accent}38 0%, ${NAVY}00 60%), linear-gradient(140deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)`,
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent rule — the one element that differs per subsidiary. */}
        <div style={{ display: 'flex', width: 132, height: 6, background: accent }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: accent,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 22,
              fontSize: title.length > 52 ? 64 : 78,
              lineHeight: 1.08,
              color: '#ffffff',
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {statusLabel ? (
            <div
              style={{
                display: 'flex',
                marginTop: 30,
                alignSelf: 'flex-start',
                border: `2px solid ${accent}`,
                borderRadius: 999,
                padding: '9px 22px',
                fontSize: 22,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              {statusLabel}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(255,255,255,0.16)',
            paddingTop: 26,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 30, color: CREAM, letterSpacing: 2 }}>
              GOD&apos;S PLAN
            </div>
            <div style={{ display: 'flex', fontSize: 18, color: 'rgba(250,247,240,0.62)', letterSpacing: 6 }}>
              GROUP OF COMPANY
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 20, color: 'rgba(250,247,240,0.62)' }}>
            {footer ?? 'Built on Faith · Driven by Excellence'}
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
