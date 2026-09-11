import Link from 'next/link';
import type { ReactNode } from 'react';

export function Card({
  children,
  className,
  onDark = false,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border p-6 ${
        onDark ? 'border-white/15 bg-white/[0.04]' : 'border-line bg-white'
      } ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

/** Card whose whole surface is a link. Used by the companies grid and indexes. */
export function LinkCard({
  href,
  eyebrow,
  title,
  body,
  footer,
  accent,
  onDark = false,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  body: string;
  footer?: ReactNode;
  accent?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col rounded-sm border p-7 transition-colors ${
        onDark
          ? 'border-white/15 bg-white/[0.03] hover:border-gold-500/70'
          : 'border-line bg-white hover:border-accent'
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 rounded-t-sm"
        style={{ background: accent ?? 'var(--gp-accent)' }}
      />
      {eyebrow ? (
        <span
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${
            onDark ? 'text-white/55' : 'text-ink-400'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h3 className={`text-h3 ${onDark ? 'text-white' : ''}`}>{title}</h3>
      <p className={`mt-3 flex-1 text-sm ${onDark ? 'text-white/70' : 'text-ink-600'}`}>{body}</p>
      <span
        className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${
          onDark ? 'text-gold-300' : 'text-navy-900'
        }`}
      >
        {footer ?? 'Explore'}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
