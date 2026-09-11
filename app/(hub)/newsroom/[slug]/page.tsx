import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/ui/Bits';
import { listCompanies, listNews, findNewsPost } from '@/lib/cms';
import { jsonLd, pageMetadata, SITE_URL } from '@/lib/seo';
import { GROUP } from '@/content/group';

export function generateStaticParams() {
  return listNews().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findNewsPost(slug);
  if (!post) return pageMetadata({ title: 'Not found', description: '', path: '/newsroom' });
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/newsroom/${post.slug}`,
  });
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findNewsPost(slug);
  if (!post) notFound();

  const company = post.companyId
    ? listCompanies().find((c) => c.id === post.companyId)
    : undefined;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/newsroom/${post.slug}`,
    publisher: { '@type': 'Organization', name: GROUP.name, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <Section tone="white" width="narrow" as="article">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/newsroom', label: 'Newsroom' },
            { href: `/newsroom/${post.slug}`, label: post.title },
          ]}
        />
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-ink-400">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span className="text-accent">{company ? company.name : 'Group-wide'}</span>
        </div>
        <h1 className="mt-4 text-display">{post.title}</h1>
        <span className="gp-rule mt-6" />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-600">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {company ? (
          <p className="mt-10 border-t border-line pt-6 text-sm">
            More about{' '}
            <Link href={`/${company.slug}`} className="underline underline-offset-4">
              {company.name}
            </Link>
            .
          </p>
        ) : null}
      </Section>
    </>
  );
}
