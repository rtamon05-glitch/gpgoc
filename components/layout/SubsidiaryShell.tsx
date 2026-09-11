import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import type { Company } from '@/content/types';

/**
 * Wraps every page inside a subsidiary.
 *
 * Two jobs: publish the company's accent as CSS custom properties so every
 * accent-aware component picks it up without prop drilling, and render the
 * section's sub-navigation.
 */
export function SubsidiaryShell({
  company,
  children,
}: {
  company: Company;
  children: ReactNode;
}) {
  const style = {
    '--gp-accent': company.accent.color,
    '--gp-accent-soft': company.accent.soft,
    '--gp-accent-contrast': company.accent.contrast,
  } as CSSProperties;

  return (
    <div style={style} data-company={company.slug} data-mood={company.mood}>
      <SubsidiaryNav company={company} />
      {children}
    </div>
  );
}

function SubsidiaryNav({ company }: { company: Company }) {
  const dark = company.mood === 'dark';
  return (
    <nav
      aria-label={`${company.shortName} sections`}
      className={`border-b ${dark ? 'border-white/10 bg-charcoal-800' : 'border-line bg-cream-50'}`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-5 sm:px-8">
        <Link
          href={`/${company.slug}`}
          className={`flex-shrink-0 border-r py-4 pr-6 font-display text-sm font-semibold ${
            dark ? 'border-white/15 text-white' : 'border-line text-navy-900'
          }`}
        >
          {company.shortName}
        </Link>
        <ul className="flex items-center gap-1">
          {company.nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block whitespace-nowrap px-3 py-4 text-sm transition-colors ${
                  dark ? 'text-white/70 hover:text-gold-300' : 'text-ink-600 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
