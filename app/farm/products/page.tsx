import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { FARM_PRODUCTS } from '@/content/farm';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('farm');

export const metadata = pageMetadata({
  title: 'Products',
  description:
    'Eggs, broilers, pigs, tilapia and catfish, compound feed and composted manure from God’s Plan Farm.',
  path: '/farm/products',
  company,
});

export default function FarmProductsPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Products"
        title="What the farm sells"
        lede="Sold by arrangement rather than off a shelf — volumes, formats and delivery are agreed per buyer."
      />

      <Section tone="white">
        <p className="mb-10 max-w-3xl rounded-sm border-l-2 border-accent bg-cream-50 py-4 pl-5 text-sm text-ink-600">
          Availability varies by production cycle, and prices move with input costs, so we quote per
          order rather than publish a price list. Ask and you will get a price the same week.
        </p>

        <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {FARM_PRODUCTS.map((product) => (
            <article key={product.id} id={product.id} className="scroll-mt-28 bg-white p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-h3">{product.name}</h2>
                <p className="text-sm text-accent">{product.availability}</p>
              </div>
              <p className="mt-3 max-w-3xl text-ink-600">{product.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {product.sizeOptions.map((size) => (
                  <li
                    key={size}
                    className="rounded-full border border-line bg-cream-50 px-3 py-1 text-sm text-ink-600"
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Place an order"
        body="Regular buyers get a standing order and an agreed delivery route. One-off orders are fine too."
        primary={{ href: '/farm/partner', label: 'Order or enquire' }}
        secondary={{ href: '/farm/feed-division', label: 'Feed division' }}
      />
    </>
  );
}
