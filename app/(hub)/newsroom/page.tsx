import Link from 'next/link';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { listCompanies, listNews } from '@/lib/cms';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Newsroom',
  description: "Announcements and updates from across God's Plan Group of Company.",
  path: '/newsroom',
});

export default function NewsroomPage() {
  const posts = listNews();
  const companies = listCompanies();
  const companyName = (id: string | null) =>
    id ? (companies.find((c) => c.id === id)?.shortName ?? 'Group') : 'Group-wide';

  return (
    <>
      <Hero
        eyebrow="Newsroom"
        title="What the group is announcing"
        lede="Milestones, plans and appointments across the six companies. Announcements describe decisions taken, not results claimed."
      />

      <Section tone="white">
        <ul className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {posts.map((post) => (
            <li key={post.id} className="bg-white">
              <Link href={`/newsroom/${post.slug}`} className="group block p-7 hover:bg-cream-50">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-ink-400">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span className="text-accent">{companyName(post.companyId)}</span>
                </div>
                <h2 className="mt-3 text-h3 group-hover:text-accent">{post.title}</h2>
                <p className="mt-3 max-w-3xl text-sm text-ink-600">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
