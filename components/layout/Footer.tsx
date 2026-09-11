import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { COMPANIES } from '@/content/companies';
import { GROUP } from '@/content/group';

const HUB_COLUMN = [
  { href: '/about', label: 'About the Group' },
  { href: '/companies', label: 'Our Companies' },
  { href: '/invest', label: 'Invest & Partner' },
  { href: '/newsroom', label: 'Newsroom' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white/75">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            {/* Full lockup — homepage hero and footer only, per the brand rules. */}
            <Logo variant="full" onDark crestSize={72} />
            <p className="mt-7 max-w-sm text-sm">{GROUP.mission}</p>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {GROUP.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="underline-offset-4 hover:text-gold-300 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Group">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Group</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {HUB_COLUMN.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="underline-offset-4 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Companies">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Companies</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {COMPANIES.map((company) => (
                <li key={company.slug}>
                  <Link
                    href={`/${company.slug}`}
                    className="underline-offset-4 hover:text-white hover:underline"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Contact
            </h2>
            <address className="mt-5 space-y-1 text-sm not-italic">
              <p>{GROUP.address.line1}</p>
              <p>{GROUP.address.line2}</p>
              <p>{GROUP.address.country}</p>
              <p className="pt-2">
                <a href={`mailto:${GROUP.email}`} className="underline-offset-4 hover:text-white hover:underline">
                  {GROUP.email}
                </a>
              </p>
            </address>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-white/55">{GROUP.disclosure}</p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {GROUP.name}. All rights reserved.
            </p>
            <ul className="flex gap-5">
              <li>
                <Link href="/legal/privacy" className="underline-offset-4 hover:text-white hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="underline-offset-4 hover:text-white hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
