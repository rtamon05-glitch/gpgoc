import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { ButtonLink } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { StatusNote, StatusPill } from '@/components/ui/StatusPill';
import { LinkCard } from '@/components/ui/Card';
import { requireCompany } from '@/lib/cms';
import { FOUNDATION_PROGRAMS, DEVELOPMENT_CITY_ZONES } from '@/content/foundation';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('foundation');

export const metadata = pageMetadata({
  title: 'God’s Plan Foundation',
  description: company.summary,
  path: '/foundation',
  company,
});

export default function FoundationPage() {
  return (
    <>
      <Hero
        eyebrow="God’s Plan Foundation"
        title="Building People. Transforming Communities. Creating the Future."
        lede={company.summary}
        status={company.status}
        actions={
          <>
            <ButtonLink href="/foundation/donate" size="lg">
              Support a programme
            </ButtonLink>
            <ButtonLink href="/foundation/development-city" variant="onDark" size="lg">
              See the Development City plan
            </ButtonLink>
          </>
        }
      />

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="Vision & mission" title={company.vision} />
            <Prose>
              <p>{company.mission}</p>
              <p>
                The Foundation works on two clocks at once. On the short clock it funds scholarships
                and training places — things that change a specific person&apos;s year. On the long
                clock it is master-planning God&apos;s Plan Development City, a campus that would put
                education, health, technology, agriculture and industry within walking distance of
                each other.
              </p>
              <p>
                The two are not the same thing and this site does not pretend they are. The
                programmes are real work happening now. The City is a plan.
              </p>
            </Prose>
          </div>
          <div className="space-y-6">
            <StatusNote status={company.status} />
            <div className="rounded-sm border border-line p-6">
              <h3 className="text-h3">Core values</h3>
              <ul className="mt-4 space-y-4">
                {company.coreValues.map((value) => (
                  <li key={value.title}>
                    <p className="font-medium text-ink-900">{value.title}</p>
                    <p className="mt-1 text-sm text-ink-600">{value.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="Programmes"
          title="What the Foundation is doing now"
          lede="Each programme is labelled with its own stage. Two are running; three are in preparation."
        />
        <Grid cols={3}>
          {FOUNDATION_PROGRAMS.map((program) => (
            <FeatureItem
              key={program.id}
              title={program.title}
              body={program.description}
              meta={<StatusPill status={program.stage} />}
            />
          ))}
        </Grid>
        <div className="mt-10">
          <ButtonLink href="/foundation/programs" variant="secondary">
            More about the programmes
          </ButtonLink>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow="Long-range plan"
          title="God’s Plan Development City"
          lede="Six zones on one campus. A master plan measured in decades — not a set of buildings that exist."
        />
        <Grid cols={3}>
          {DEVELOPMENT_CITY_ZONES.slice(0, 6).map((zone) => (
            <LinkCard
              key={zone.id}
              href={`/foundation/development-city#${zone.id}`}
              title={zone.title}
              body={zone.body}
              footer="See the zone"
            />
          ))}
        </Grid>
      </Section>

      <CTABanner
        eyebrow="Support the Foundation"
        title="Sponsor a scholarship, a classroom or a bed"
        body="Every gift is recorded against a named programme, and the Foundation reports back on what it paid for."
        primary={{ href: '/foundation/donate', label: 'Give to the Foundation' }}
        secondary={{ href: '/foundation/prospectus', label: 'Read the prospectus' }}
      />
    </>
  );
}
