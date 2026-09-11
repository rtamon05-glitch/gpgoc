import type { ElementType, ReactNode } from 'react';

type Tone = 'white' | 'cream' | 'navy' | 'charcoal' | 'accent-soft';

const TONES: Record<Tone, string> = {
  white: 'bg-white text-ink-900',
  cream: 'bg-cream-50 text-ink-900',
  navy: 'bg-navy-900 text-white',
  charcoal: 'bg-charcoal-800 text-white',
  'accent-soft': 'bg-accent-soft text-ink-900',
};

/**
 * Standard vertical rhythm + max width for every band on the site. Pages never
 * set their own padding, so spacing stays consistent across all six
 * subsidiaries.
 */
export function Section({
  tone = 'white',
  id,
  className,
  children,
  as: Tag = 'section',
  width = 'default',
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  as?: ElementType;
  width?: 'default' | 'narrow' | 'wide';
}) {
  const max =
    width === 'narrow' ? 'max-w-3xl' : width === 'wide' ? 'max-w-[88rem]' : 'max-w-6xl';
  return (
    <Tag id={id} className={`${TONES[tone]} ${className ?? ''}`}>
      <div className={`mx-auto ${max} px-5 py-16 sm:px-8 sm:py-20 lg:py-24`}>{children}</div>
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  onDark = false,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  onDark?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <header className={`mb-10 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            onDark ? 'text-gold-300' : 'text-accent-ink'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-h2 ${onDark ? 'text-white' : ''}`}>{title}</h2>
      <span className={`gp-rule mt-5 ${align === 'center' ? 'mx-auto' : ''}`} />
      {lede ? (
        <p className={`mt-5 text-lg ${onDark ? 'text-white/75' : 'text-ink-600'}`}>{lede}</p>
      ) : null}
    </header>
  );
}
