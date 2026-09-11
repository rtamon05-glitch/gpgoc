import { ButtonLink } from './Button';

export function CTABanner({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  tone = 'navy',
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  tone?: 'navy' | 'cream';
}) {
  const onDark = tone === 'navy';
  return (
    <section className={onDark ? 'bg-navy-700 text-white' : 'bg-cream-50'}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${onDark ? 'text-gold-300' : 'text-accent-ink'}`}>
              {eyebrow}
            </p>
          ) : null}
          <h2 className={`text-h2 ${onDark ? 'text-white' : ''}`}>{title}</h2>
          <p className={`mt-4 ${onDark ? 'text-white/75' : 'text-ink-600'}`}>{body}</p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <ButtonLink href={primary.href} variant="primary" size="lg">
            {primary.label}
          </ButtonLink>
          {secondary ? (
            <ButtonLink href={secondary.href} variant={onDark ? 'onDark' : 'secondary'} size="lg">
              {secondary.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
