import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { CrestWatermark } from '@/components/brand/Logo';
import { Section, SectionHeader } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { StatusPill } from '@/components/ui/StatusPill';
import { Grid, Stat } from '@/components/ui/Bits';
import { listCompanies, listNews } from '@/lib/cms';
import { GROUP, GROUP_VALUES } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Home',
  description: GROUP.intro,
  path: '/',
});

export default function HomePage() {
  const companies = listCompanies();
  const news = listNews({ limit: 3 });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(110% 80% at 12% 0%, rgba(201,162,39,0.28) 0%, rgba(11,31,58,0) 55%), radial-gradient(90% 70% at 95% 100%, rgba(47,111,237,0.18) 0%, rgba(11,31,58,0) 60%)',
          }}
        />
        <CrestWatermark className="-right-32 top-4" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          {/* Full lockup — homepage hero and footer only. */}
          <Logo variant="full" onDark crestSize={92} />
          <h1 className="mt-12 max-w-4xl text-display-lg text-white">
            Six companies. One long-range plan.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-white/75 sm:text-xl">{GROUP.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/companies" size="lg">
              Explore the companies
            </ButtonLink>
            <ButtonLink href="/invest" variant="onDark" size="lg">
              Invest &amp; partner
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section tone="white">
        <SectionHeader
          eyebrow="Our companies"
          title="Six companies, one vision"
          lede="Each business runs to its own master plan and its own timetable. The label on each card is its real-world stage today."
        />
        <Grid cols={3}>
          {companies.map((company) => (
            <LinkCard
              key={company.slug}
              href={`/${company.slug}`}
              eyebrow={company.sector}
              title={company.name}
              body={company.summary}
              accent={company.accent.color}
              footer={<StatusPillInline status={company.status} />}
            />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="Where the group stands"
          title="What exists today"
          lede="The honest version. These are counts of the group's own structure and plans, not performance claims — we will publish operating results once there are audited ones to publish."
        />
        <Grid cols={4}>
          <Stat
            value="6"
            label="Operating companies"
            note="Constituted within the group, each with its own master plan."
          />
          <Stat
            value="3"
            label="Trading at some scale"
            note="Farm, Media House and Tech have begun operating activity."
          />
          <Stat
            value="2"
            label="In pre-development"
            note="Sunflower Factory and Hotels are in planning and feasibility."
          />
          <Stat
            value="10–20 yrs"
            label="Planning horizon"
            note="The span each company's master plan is written against."
          />
        </Grid>
        <p className="mt-10 max-w-3xl rounded-sm border-l-2 border-gold-500 bg-white py-4 pl-5 text-sm text-ink-600">
          {GROUP.disclosure}
        </p>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="What we hold to" title="Five values, six companies" />
        <Grid cols={3}>
          {GROUP_VALUES.map((value) => (
            <div key={value.title} className="border-t border-line pt-5">
              <h3 className="text-h3">{value.title}</h3>
              <p className="mt-3 text-sm text-ink-600">{value.body}</p>
            </div>
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Newsroom" title="Latest from the group" />
          <Link
            href="/newsroom"
            className="mb-10 text-sm font-medium text-navy-900 underline underline-offset-4 hover:text-accent-ink"
          >
            All news &rarr;
          </Link>
        </div>
        <Grid cols={3}>
          {news.map((post) => (
            <LinkCard
              key={post.id}
              href={`/newsroom/${post.slug}`}
              eyebrow={new Date(post.publishedAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
              title={post.title}
              body={post.excerpt}
              footer="Read"
            />
          ))}
        </Grid>
      </Section>

      <CTABanner
        eyebrow="Invest & partner"
        title="Partner with the group"
        body="Whether you are considering a development stake, an offtake agreement, a supply relationship or a grant, one gateway reaches every company in the group."
        primary={{ href: '/invest', label: 'Start a conversation' }}
        secondary={{ href: '/about', label: 'About the group' }}
      />
    </>
  );
}

function StatusPillInline({ status }: { status: Parameters<typeof StatusPill>[0]['status'] }) {
  return <StatusPill status={status} />;
}
