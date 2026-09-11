import Link from 'next/link';
import type { ReactNode } from 'react';

/** Small repeated pieces shared across pages. */

export function Breadcrumbs({
  items,
  onDark = false,
}: {
  items: { href: string; label: string }[];
  onDark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 ? (
              <span aria-hidden="true" className={onDark ? 'text-white/35' : 'text-ink-400'}>
                /
              </span>
            ) : null}
            {i === items.length - 1 ? (
              <span aria-current="page" className={onDark ? 'text-white/70' : 'text-ink-600'}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`underline-offset-4 hover:underline ${onDark ? 'text-white/60' : 'text-ink-400'}`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * A figure for a single number.
 *
 * `note` is required on purpose: a bare number invites the reader to assume it
 * is a current result, so every figure has to say what it is and whether it is
 * measured or targeted.
 */
export function Stat({
  value,
  label,
  note,
  onDark = false,
}: {
  value: string;
  label: string;
  note: string;
  onDark?: boolean;
}) {
  return (
    <div className={`border-t pt-5 ${onDark ? 'border-white/20' : 'border-line'}`}>
      <p className={`font-display text-4xl ${onDark ? 'text-gold-300' : 'text-navy-900'}`}>{value}</p>
      <p className={`mt-2 text-sm font-medium ${onDark ? 'text-white' : 'text-ink-900'}`}>{label}</p>
      <p className={`mt-1 text-xs ${onDark ? 'text-white/55' : 'text-ink-400'}`}>{note}</p>
    </div>
  );
}

export function Grid({
  cols = 3,
  children,
  className,
}: {
  cols?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}) {
  const map = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  } as const;
  return <div className={`grid gap-6 ${map[cols]} ${className ?? ''}`}>{children}</div>;
}

export function FeatureItem({
  title,
  body,
  meta,
  onDark = false,
}: {
  title: string;
  body: string;
  meta?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className={`rounded-sm border p-6 ${onDark ? 'border-white/15 bg-white/[0.03]' : 'border-line bg-white'}`}>
      <h3 className={`text-h3 ${onDark ? 'text-white' : ''}`}>{title}</h3>
      {meta ? <div className="mt-3">{meta}</div> : null}
      <p className={`mt-3 text-sm ${onDark ? 'text-white/70' : 'text-ink-600'}`}>{body}</p>
    </div>
  );
}

/** Ordered process steps (extraction → refining → packaging, etc.). */
export function Steps({ steps, onDark = false }: { steps: { title: string; body: string }[]; onDark?: boolean }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className={`p-6 ${onDark ? 'bg-navy-900' : 'bg-white'}`}>
          <span className="font-display text-3xl text-accent">{String(i + 1).padStart(2, '0')}</span>
          <h3 className={`mt-3 text-h3 ${onDark ? 'text-white' : ''}`}>{step.title}</h3>
          <p className={`mt-2 text-sm ${onDark ? 'text-white/70' : 'text-ink-600'}`}>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Long-form prose block with the site's reading measure and rhythm. */
export function Prose({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <div
      className={`max-w-2xl space-y-5 text-base leading-relaxed ${onDark ? 'text-white/75' : 'text-ink-600'}`}
    >
      {children}
    </div>
  );
}

/**
 * Regulatory / risk disclosure. Used by Tech (financial technology), Hotels
 * and Invest, where the brief requires explicit language.
 */
export function Disclosure({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside
      className="rounded-sm border border-gold-500/50 bg-gold-100/40 p-6"
      aria-labelledby={`disclosure-${title.replace(/\W+/g, '-').toLowerCase()}`}
    >
      <h3
        id={`disclosure-${title.replace(/\W+/g, '-').toLowerCase()}`}
        className="text-base font-semibold uppercase tracking-[0.12em] text-navy-900"
      >
        {title}
      </h3>
      <div className="mt-3 space-y-3 text-sm text-ink-600">{children}</div>
    </aside>
  );
}
