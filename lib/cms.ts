import { COMPANIES, COMPANY_BY_SLUG, getCompany } from '@/content/companies';
import { NEWS_POSTS } from '@/content/news';
import type { Company, NewsPost } from '@/content/types';

/**
 * Content access layer.
 *
 * Every page reads content through this module and never imports a `content/*`
 * file directly for list/lookup operations. Today it resolves against the
 * local modules; moving to Firestore means changing the bodies here (and
 * making the callers `await`) without touching a single page component.
 */

export function listCompanies(): Company[] {
  return COMPANIES;
}

export function findCompany(slug: string): Company | undefined {
  return COMPANY_BY_SLUG[slug];
}

export function requireCompany(slug: string): Company {
  return getCompany(slug);
}

export function listNews({ companyId, limit }: { companyId?: string | null; limit?: number } = {}): NewsPost[] {
  const posts = [...NEWS_POSTS]
    .filter((post) => (companyId === undefined ? true : post.companyId === companyId))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return typeof limit === 'number' ? posts.slice(0, limit) : posts;
}

export function findNewsPost(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}
