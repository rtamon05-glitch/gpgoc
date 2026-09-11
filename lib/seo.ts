import type { Metadata } from 'next';
import { GROUP } from '@/content/group';
import { COMPANIES } from '@/content/companies';
import type { Company } from '@/content/types';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://godsplangroup.com').replace(
  /\/$/,
  '',
);

/**
 * Builds page metadata with a canonical URL and an OG image.
 *
 * OG images are generated per page by `app/opengraph-image.tsx` routes where
 * present; otherwise Next falls back to the nearest ancestor, which keeps each
 * subsidiary on its own accent colour.
 */
export function pageMetadata({
  title,
  description,
  path,
  company,
}: {
  title: string;
  description: string;
  path: string;
  company?: Company;
}): Metadata {
  const fullTitle = company ? `${title} | ${company.name}` : `${title} | ${GROUP.shortName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: GROUP.name,
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

/** JSON-LD helper. Rendered through a <script type="application/ld+json">. */
export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: GROUP.name,
    alternateName: GROUP.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.svg`,
    slogan: GROUP.tagline,
    description: GROUP.intro,
    email: GROUP.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: GROUP.address.line1,
      addressLocality: GROUP.address.line2,
      addressCountry: GROUP.address.country,
    },
    sameAs: GROUP.social.map((s) => s.href),
    subOrganization: COMPANIES.map((c) => ({
      '@type': 'Organization',
      name: c.name,
      url: `${SITE_URL}/${c.slug}`,
    })),
  };
}

/**
 * Per-subsidiary schema.
 *
 * Companies that are not operating yet are deliberately typed as a plain
 * `Organization` rather than `Hotel` or `LocalBusiness`: emitting `Hotel`
 * markup for a property that does not exist invites search engines to surface
 * it as a bookable place.
 */
export function companySchema(company: Company) {
  const specificType: Record<string, string> = {
    foundation: 'NGO',
    'media-house': 'LocalBusiness',
    tech: 'Organization',
    farm: 'LocalBusiness',
  };
  const type = company.status === 'operational' ? (specificType[company.id] ?? 'Organization') : 'Organization';

  return {
    '@context': 'https://schema.org',
    '@type': company.id === 'foundation' ? 'NGO' : type,
    name: company.name,
    url: `${SITE_URL}/${company.slug}`,
    description: company.summary,
    slogan: company.tagline,
    parentOrganization: { '@type': 'Organization', name: GROUP.name, url: SITE_URL },
  };
}

export function breadcrumbSchema(items: { href: string; label: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
