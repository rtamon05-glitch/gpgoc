import { STATUS_META } from '@/lib/status';
import type { CompanyStatus } from '@/content/types';

const TONE_CLASS = {
  planning: 'border-ink-400/40 bg-ink-400/10 text-ink-600',
  building: 'border-gold-500/50 bg-gold-100/60 text-navy-900',
  live: 'border-[#5c7a3d]/50 bg-[#e8eddf] text-[#3f5529]',
} as const;

const TONE_CLASS_DARK = {
  planning: 'border-white/25 bg-white/10 text-white/80',
  building: 'border-gold-300/60 bg-gold-500/15 text-gold-300',
  live: 'border-[#9dbb77]/60 bg-[#9dbb77]/15 text-[#c3dba1]',
} as const;

/**
 * The site's central honesty device: a visible stage label wherever a company,
 * programme or facility is described.
 */
export function StatusPill({
  status,
  onDark = false,
  className,
}: {
  status: CompanyStatus;
  onDark?: boolean;
  className?: string;
}) {
  const meta = STATUS_META[status];
  const tone = onDark ? TONE_CLASS_DARK[meta.tone] : TONE_CLASS[meta.tone];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${tone} ${className ?? ''}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {meta.label}
    </span>
  );
}

/** Full-width explanatory banner that spells out what the stage means. */
export function StatusNote({ status, onDark = false }: { status: CompanyStatus; onDark?: boolean }) {
  const meta = STATUS_META[status];
  return (
    <p
      className={`rounded-sm border-l-2 border-accent py-3 pl-4 text-sm ${
        onDark ? 'bg-white/[0.04] text-white/75' : 'bg-cream-50 text-ink-600'
      }`}
    >
      <span className="font-semibold">{meta.label}.</span> {meta.description}
    </p>
  );
}
