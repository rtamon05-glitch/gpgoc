import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose, Disclosure } from '@/components/ui/Bits';
import { StatusPill } from '@/components/ui/StatusPill';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { DEVELOPMENT_CITY_ZONES, DEVELOPMENT_CITY_DEPENDENCIES } from '@/content/foundation';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('foundation');

export const metadata = pageMetadata({
  title: 'God’s Plan Development City',
  description:
    'A six-zone master plan covering education, health, technology, agriculture, industry and community — presented as a long-range roadmap, not built infrastructure.',
  path: '/foundation/development-city',
  company,
});

export default function DevelopmentCityPage() {
  return (
    <>
      <Hero
        eyebrow="Long-range plan"
        title="God’s Plan Development City"
        lede="Six zones on one campus, designed so that a graduate, a patient, a farmer and a manufacturer are all served within the same footprint."
        status="planning"
      />

      <Section tone="white">
        <div className="mb-12">
          <Disclosure title="What this page is">
            <p>
              This is a master plan. None of the facilities described below has been built. There is
              no construction on site, no completion date, and no facility here that can be visited,
              enrolled in or admitted to.
            </p>
            <p>
              We publish it at this stage deliberately: partners, public authorities and donors can
              engage with the sequencing while it is still open to argument, rather than after it is
              fixed.
            </p>
          </Disclosure>
        </div>

        <SectionHeader
          eyebrow="The idea"
          title="Why a campus, rather than six separate projects"
          lede="The zones are only worth building together."
        />
        <Prose>
          <p>
            A technical college is worth more next to the factory that hires from it. A hospital is
            worth more next to the nursing school that staffs it. A processing plant is worth more
            next to the farms that feed it and the storage that holds the output.
          </p>
          <p>
            Built separately, each of these is a decent project with a leaky boundary — graduates
            commute away, produce spoils in transit, clinics cannot recruit. Built together, the
            boundaries close. That adjacency is the whole argument for the City, and it is why the
            plan is presented as one thing rather than six.
          </p>
        </Prose>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="The zones" title="Six zones, one footprint" />
        <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {DEVELOPMENT_CITY_ZONES.map((zone) => (
            <article key={zone.id} id={zone.id} className="scroll-mt-28 bg-white p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-h3">{zone.title}</h3>
                <StatusPill status="planning" />
              </div>
              <p className="mt-3 max-w-3xl text-ink-600">{zone.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {zone.includes.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-cream-50 px-3 py-1 text-xs text-ink-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow="What has to happen first"
          title="The plan depends on all of this"
          lede="None of it is complete. Any one of these could change the plan or stop it."
        />
        <ul className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {DEVELOPMENT_CITY_DEPENDENCIES.map((item, i) => (
            <li key={item} className="flex items-start gap-4 bg-white p-5">
              <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="pt-1 text-ink-600">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner
        eyebrow="Development City"
        title="Bring capability, not only capital"
        body="The zones that need partners most are the ones the Foundation cannot operate alone — the hospital and the schools."
        primary={{ href: '/invest', label: 'Discuss a partnership' }}
        secondary={{ href: '/foundation/prospectus', label: 'Read the prospectus' }}
      />
    </>
  );
}
