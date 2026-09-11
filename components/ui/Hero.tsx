import type { ReactNode } from 'react';
import { CrestWatermark } from '@/components/brand/Logo';
import { StatusPill } from './StatusPill';
import type { CompanyStatus } from '@/content/types';

/**
 * Page hero.
 *
 * Background art is a CSS gradient rather than a photograph: the group has no
 * cleared photography yet, and shipping a placeholder stock image of a hotel
 * that has not been built would undercut the point of the status labels.
 * Swap `backgroundImage` in once real assets are licensed — see README.
 */
export function Hero({
  eyebrow,
  title,
  lede,
  status,
  tone = 'navy',
  actions,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  status?: CompanyStatus;
  tone?: 'navy' | 'charcoal' | 'cream';
  actions?: ReactNode;
  children?: ReactNode;
}) {
  const onDark = tone !== 'cream';
  const bg =
    tone === 'charcoal'
      ? 'bg-charcoal-800'
      : tone === 'cream'
        ? 'bg-cream-50'
        : 'bg-navy-900';

  return (
    <section className={`relative isolate overflow-hidden ${bg}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          background: onDark
            ? 'radial-gradient(120% 90% at 15% 0%, rgba(201,162,39,0.22) 0%, rgba(11,31,58,0) 58%)'
            : 'radial-gradient(120% 90% at 85% 0%, rgba(201,162,39,0.18) 0%, rgba(250,247,240,0) 60%)',
        }}
      />
      <CrestWatermark className="-right-24 -top-16" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        {eyebrow ? (
          <p
            className={`mb-4 text-xs font-semibold uppercase tracking-[0.26em] ${
              onDark ? 'text-gold-300' : 'text-accent-ink'
            }`}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={`max-w-4xl text-display ${onDark ? 'text-white' : 'text-navy-900'}`}
        >
          {title}
        </h1>
        {lede ? (
          <p className={`mt-6 max-w-2xl text-lg sm:text-xl ${onDark ? 'text-white/75' : 'text-ink-600'}`}>
            {lede}
          </p>
        ) : null}
        {status ? (
          <div className="mt-7">
            <StatusPill status={status} onDark={onDark} />
          </div>
        ) : null}
        {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
        {children}
      </div>
    </section>
  );
}
