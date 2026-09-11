import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, Prose, Stat } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { GROUP, GROUP_TIMELINE, GROUP_VALUES, LEADERSHIP_NOTE } from '@/content/group';
import { listCompanies } from '@/lib/cms';
import { StatusPill } from '@/components/ui/StatusPill';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About the Group',
  description:
    "How God's Plan Group of Company is structured, what it values, and the long-range plan the six businesses are being built against.",
  path: '/about',
});

export default function AboutPage() {
  const companies = listCompanies();
  return (
    <>
      <Hero
        eyebrow="About"
        title="A holding group built around six master plans"
        lede="God's Plan Group of Company exists to build enterprises that outlast their founders — and to be straight about how far along each one actually is."
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="Our approach" title="Plan in decades. Report in the present tense." />
            <Prose>
              <p>
                Most groups of this shape are assembled by acquisition. This one was assembled around
                plans. Each of the six companies was written as a master plan first — a document with a
                10 to 20 year horizon, a capital requirement and a sequence — and only then
                constituted as a business.
              </p>
              <p>
                That has one awkward consequence, and we would rather name it than hide it: at any
                given moment most of what the group intends to build has not been built. The Hotels
                company is a development concept, not a hotel. The Sunflower Factory is a feasibility
                study, not a plant.
              </p>
              <p>
                So the rule across this site is simple. Present tense is reserved for things that
                exist today. Everything else is labelled as planned or in development, on the page
                where it is described. It costs us some marketing gloss and buys back something worth
                more.
              </p>
            </Prose>
          </div>
          <div className="space-y-6">
            <Stat value="6" label="Operating companies" note="Each with its own management and master plan." />
            <Stat value="5" label="Sectors" note="Development, hospitality, technology, media, agro-industry and agriculture." />
            <Stat value="1" label="Reporting standard" note="Shared finance, brand, legal and technology functions across all six." />
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="Values" title="What the group holds to" lede="Five values, applied identically across six very different businesses." />
        <Grid cols={3}>
          {GROUP_VALUES.map((value) => (
            <div key={value.title} className="rounded-sm border border-line bg-white p-6">
              <h3 className="text-h3">{value.title}</h3>
              <p className="mt-3 text-sm text-ink-600">{value.body}</p>
            </div>
          ))}
        </Grid>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow="Sequence"
          title="How the group is being built"
          lede="Phases, not dates. Each phase depends on the one before it clearing — and on land, finance and approvals that are not all secured."
        />
        <ol className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {GROUP_TIMELINE.map((phase) => (
            <li key={phase.period} className="grid gap-4 bg-white p-6 sm:grid-cols-[10rem_1fr]">
              <p className="font-display text-lg text-accent-ink">{phase.period}</p>
              <div>
                <h3 className="text-h3">{phase.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="The companies" title="Where each one stands today" />
        <ul className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {companies.map((company) => (
            <li key={company.slug} className="flex flex-wrap items-center justify-between gap-4 bg-white p-6">
              <div>
                <p className="font-display text-lg text-navy-900">{company.name}</p>
                <p className="mt-1 text-sm text-ink-600">{company.sector}</p>
              </div>
              <StatusPill status={company.status} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="Leadership" title="Who runs the group" />
        <p className="rounded-sm border border-line bg-cream-50 p-6 text-ink-600">{LEADERSHIP_NOTE}</p>
        <p className="mt-6 text-sm text-ink-400">
          For media enquiries about the group&apos;s leadership, contact{' '}
          <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
            {GROUP.email}
          </a>
          .
        </p>
      </Section>

      <CTABanner
        title="Work with the group"
        body="Investors, partners, suppliers and candidates all start in the same place."
        primary={{ href: '/invest', label: 'Invest & partner' }}
        secondary={{ href: '/careers', label: 'See careers' }}
      />
    </>
  );
}
