import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Accordion } from '@/components/ui/Accordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { RENTAL_EQUIPMENT, RENTAL_CATEGORIES, RENTAL_TERMS } from '@/content/media-house';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('media-house');

export const metadata = pageMetadata({
  title: 'Equipment Rental',
  description:
    'Cameras, lenses, lighting, location audio, PA, LED screens, grip and a mobile stage for hire from God’s Plan Media House.',
  path: '/media-house/equipment-rental',
  company,
});

export default function EquipmentRentalPage() {
  const byCategory = RENTAL_CATEGORIES.map((category) => ({
    category,
    items: RENTAL_EQUIPMENT.filter((item) => item.category === category),
  }));

  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Equipment rental"
        title="Hire the kit, with or without the crew"
        lede="Everything we shoot with is available to hire. Some of it comes with an operator, because some of it should."
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Catalogue"
          title="What is available"
          lede="Availability is confirmed on quote. Pricing depends on duration, crew and whether you need delivery, so we quote rather than publish a rate card."
        />
        <Accordion
          items={byCategory.map(({ category, items }) => ({
            title: category,
            meta: `${items.length} ${items.length === 1 ? 'line' : 'lines'}`,
            body: (
              <ul className="divide-y divide-line">
                {items.map((item) => (
                  <li key={item.id} className="flex flex-wrap items-start justify-between gap-4 py-4">
                    <div className="max-w-xl">
                      <p className="font-medium text-ink-900">{item.name}</p>
                      <p className="mt-1 text-sm text-ink-600">{item.description}</p>
                    </div>
                    <p className="text-sm text-accent-ink">{item.availability}</p>
                  </li>
                ))}
              </ul>
            ),
          }))}
        />
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Terms" title="How hire works" />
        <ul className="space-y-4">
          {RENTAL_TERMS.map((term) => (
            <li key={term} className="flex gap-4 text-ink-600">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>{term}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner
        title="Check availability"
        body="Tell us the dates and the list, and we will come back with a quote and confirm what is free."
        primary={{ href: '/media-house/book', label: 'Request a quote' }}
        secondary={{ href: '/media-house/services', label: 'Hire us with the kit' }}
      />
    </>
  );
}
