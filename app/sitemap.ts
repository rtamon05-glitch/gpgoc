import type { MetadataRoute } from 'next';
import { listCompanies, listNews } from '@/lib/cms';
import { SITE_URL } from '@/lib/seo';

const HUB_PATHS = [
  '',
  '/about',
  '/companies',
  '/invest',
  '/newsroom',
  '/careers',
  '/contact',
  '/legal/privacy',
  '/legal/terms',
];

/**
 * Covers the hub, every subsidiary section page (taken from each company's own
 * nav so a new page is listed the moment it is added to `content/companies.ts`)
 * and every news post.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const hub = HUB_PATHS.map((path) => ({
    url: `${SITE_URL}${path || '/'}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const subsidiaries = listCompanies().flatMap((company) =>
    company.nav.map((link) => ({
      url: `${SITE_URL}${link.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: link.href === `/${company.slug}` ? 0.9 : 0.6,
    })),
  );

  const news = listNews().map((post) => ({
    url: `${SITE_URL}/newsroom/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...hub, ...subsidiaries, ...news];
}
