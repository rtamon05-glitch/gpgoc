import { GROUP } from '@/content/group';

/**
 * Brand lockups.
 *
 * Usage rules from the brand guide are enforced here rather than left to each
 * page: the full lockup (crest + wordmark + tagline) is only used by the
 * homepage hero and the footer; everywhere else uses the crest alone or the
 * crest with a compact wordmark. The crown/globe gradient is never recoloured —
 * only the wordmark switches to white on dark grounds.
 */

const GOLD_STOPS = (
  <>
    <stop offset="0%" stopColor="#E4C765" />
    <stop offset="55%" stopColor="#C9A227" />
    <stop offset="100%" stopColor="#9C7A16" />
  </>
);

export function Crest({
  size = 40,
  className,
  gradientId = 'gpCrestGold',
}: {
  size?: number;
  className?: string;
  gradientId?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          {GOLD_STOPS}
        </linearGradient>
      </defs>
      <circle cx="60" cy="70" r="38" fill="#0B1F3A" />
      <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.6" opacity="0.75">
        <circle cx="60" cy="70" r="38" />
        <ellipse cx="60" cy="70" rx="15" ry="38" />
        <path d="M22 70h76M27 52h66M27 88h66" />
      </g>
      <path
        d="M30 36 L40 48 L50 28 L60 44 L70 28 L80 48 L90 36 L86 56 L34 56 Z"
        fill={`url(#${gradientId})`}
        stroke="#9C7A16"
        strokeWidth="1"
      />
      <circle cx="30" cy="34" r="3.4" fill={`url(#${gradientId})`} />
      <circle cx="60" cy="25" r="3.8" fill={`url(#${gradientId})`} />
      <circle cx="90" cy="34" r="3.4" fill={`url(#${gradientId})`} />
      <text
        x="60"
        y="83"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="30"
        fontWeight="700"
        fill={`url(#${gradientId})`}
      >
        GP
      </text>
    </svg>
  );
}

type LogoProps = {
  /** `full` includes the tagline — homepage hero and footer only. */
  variant?: 'full' | 'compact' | 'crest';
  /** Switches the wordmark (never the crest) to white for dark grounds. */
  onDark?: boolean;
  className?: string;
  crestSize?: number;
};

export function Logo({
  variant = 'compact',
  onDark = false,
  className,
  crestSize,
}: LogoProps) {
  const size = crestSize ?? (variant === 'full' ? 84 : 40);
  const wordColor = onDark ? 'text-white' : 'text-navy-900';
  const subColor = onDark ? 'text-white/75' : 'text-navy-700';

  if (variant === 'crest') {
    return <Crest size={size} className={className} gradientId="gpCrestOnly" />;
  }

  return (
    /* `min-clear-space` padding equals the crown height — brand minimum. */
    <span className={`inline-flex items-center gap-3 ${className ?? ''}`}>
      <Crest size={size} gradientId={variant === 'full' ? 'gpGoldFull' : 'gpGoldCompact'} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold tracking-wide ${wordColor} ${
            variant === 'full' ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'
          }`}
        >
          GOD&apos;S PLAN
        </span>
        <span
          className={`font-display ${subColor} ${
            variant === 'full'
              ? 'mt-1 text-sm tracking-[0.32em] sm:text-base'
              : 'mt-0.5 text-[0.6rem] tracking-[0.22em] sm:text-[0.65rem]'
          }`}
        >
          GROUP OF COMPANY
        </span>
        {variant === 'full' ? (
          <span className="mt-3 border-t-2 border-gold-500 pt-2 font-display text-xs tracking-[0.14em] text-gold-500 sm:text-sm">
            {GROUP.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}

/**
 * Oversized crest used as a low-contrast background watermark. Decorative
 * only — hidden from assistive technology and from print.
 */
export function CrestWatermark({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none opacity-[0.045] print:hidden ${className ?? ''}`}
    >
      <Crest size={420} gradientId="gpWatermark" />
    </div>
  );
}
