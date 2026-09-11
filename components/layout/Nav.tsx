'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import { Logo } from '@/components/brand/Logo';
import { COMPANIES } from '@/content/companies';
import { buttonClass } from '@/components/ui/Button';

const HUB_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/companies', label: 'Companies' },
  { href: '/newsroom', label: 'Newsroom' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const menuId = useId();

  // Close the mobile menu on navigation so the panel never survives a route change.
  useEffect(() => {
    setOpen(false);
    setCompaniesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/85">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" aria-label="God's Plan Group of Company — home" className="flex-shrink-0">
          <Logo variant="compact" onDark crestSize={38} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCompaniesOpen(true)}
            onMouseLeave={() => setCompaniesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={companiesOpen}
              aria-haspopup="true"
              onClick={() => setCompaniesOpen((v) => !v)}
              className={`rounded-sm px-3 py-2 text-sm transition-colors ${
                isActive('/companies') ? 'text-gold-300' : 'text-white/85 hover:text-gold-300'
              }`}
            >
              Our Companies <span aria-hidden="true">▾</span>
            </button>
            {companiesOpen ? (
              <div className="absolute left-0 top-full w-80 rounded-sm border border-white/10 bg-navy-900 p-2 shadow-2xl">
                {COMPANIES.map((company) => (
                  <Link
                    key={company.slug}
                    href={`/${company.slug}`}
                    className="flex items-start gap-3 rounded-sm px-3 py-2.5 hover:bg-white/5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ background: company.accent.color }}
                    />
                    <span>
                      <span className="block text-sm font-medium text-white">{company.name}</span>
                      <span className="block text-xs text-white/55">{company.sector}</span>
                    </span>
                  </Link>
                ))}
                <Link
                  href="/companies"
                  className="mt-1 block border-t border-white/10 px-3 py-2.5 text-xs uppercase tracking-[0.16em] text-gold-300 hover:text-gold-500"
                >
                  All six companies &rarr;
                </Link>
              </div>
            ) : null}
          </div>

          {HUB_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-sm px-3 py-2 text-sm transition-colors ${
                isActive(link.href) ? 'text-gold-300' : 'text-white/85 hover:text-gold-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/invest" className={buttonClass('primary', 'sm', 'ml-3')}>
            Invest &amp; Partner
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-sm border border-white/30 px-3 py-2 text-sm text-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id={menuId} hidden={!open} className="border-t border-white/10 bg-navy-900 lg:hidden">
        <nav aria-label="Primary (mobile)" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/45">Our companies</p>
          <ul className="mb-5 space-y-1">
            {COMPANIES.map((company) => (
              <li key={company.slug}>
                <Link
                  href={`/${company.slug}`}
                  className="flex items-center gap-3 rounded-sm py-2 text-sm text-white/90"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full"
                    style={{ background: company.accent.color }}
                  />
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 border-t border-white/10 pt-4">
            {HUB_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-2 text-sm text-white/90">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/invest" className={buttonClass('primary', 'md', 'mt-4 w-full')}>
            Invest &amp; Partner
          </Link>
        </nav>
      </div>
    </header>
  );
}
