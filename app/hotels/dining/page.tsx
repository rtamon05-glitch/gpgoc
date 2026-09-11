import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Bits';
import { StatusPill } from '@/components/ui/StatusPill';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { DINING_CONCEPTS } from '@/content/hotels';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'Dining',
  description:
    'Four dining concepts planned for the God’s Plan Hotels flagship: The Royal Table, International Brasserie, African Heritage and the Sky Restaurant & Bar.',
  path: '/hotels/dining',
  company,
});

export default function DiningPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="Dining"
        title="Four rooms, four different arguments"
        lede="A hotel with one good restaurant has a restaurant. A hotel with four that each justify themselves has a food operation."
        status="planning"
      />

      <Section tone="white">
        <p className="mb-10 rounded-sm border-l-2 border-accent bg-cream-50 py-4 pl-5 text-sm text-ink-600">
          These are concepts from the design brief. No restaurant is open and none is taking
          reservations.
        </p>

        <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {DINING_CONCEPTS.map((concept) => (
            <article key={concept.id} id={concept.id} className="scroll-mt-28 bg-white p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {concept.kind}
                  </p>
                  <h2 className="mt-2 text-h3">{concept.name}</h2>
                </div>
                <StatusPill status="planning" />
              </div>
              <p className="mt-4 max-w-3xl text-ink-600">{concept.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Sourcing" title="Where the food would come from" />
        <Prose>
          <p>
            The brief specifies regional sourcing wherever the quality is there — and it is there for
            more of the menu than the regional hotel market currently assumes. Produce, protein and
            fish come from within the country wherever a supplier can meet the spec consistently.
          </p>
          <p>
            Some of that supply would come from inside the group: the Farm for eggs, poultry and fish,
            the Sunflower Factory for oil. That is a genuine advantage and also a genuine risk, so the
            kitchen holds the same specification for internal suppliers as for external ones, and
            buys elsewhere if the spec is not met.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Partner on the food operation"
        body="We are interested in talking to chefs and restaurant operators early, while the kitchens are still drawings."
        primary={{ href: '/hotels/invest', label: 'Register interest' }}
        secondary={{ href: '/hotels/events-weddings', label: 'Events & weddings' }}
      />
    </>
  );
}
