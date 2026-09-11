import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { StatusPill } from '@/components/ui/StatusPill';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { OIL_PRODUCTS } from '@/content/sunflower-factory';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('sunflower-factory');

export const metadata = pageMetadata({
  title: 'Products',
  description:
    'The planned product line for God’s Plan Sunflower Factory — retail bottles, catering packs, bulk and drum, crude oil and sunflower seed cake.',
  path: '/sunflower-factory/products',
  company,
});

export default function ProductsPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Products"
        title="The planned product line"
        lede="Five product families, from a 500 ml household bottle to a road tanker."
        status="planning"
      />

      <Section tone="white">
        <p className="mb-10 max-w-3xl rounded-sm border-l-2 border-accent bg-cream-50 py-4 pl-5 text-sm text-ink-600">
          <strong>Not yet available.</strong> These products are planned. Nothing below is in
          production or on sale, and sizes and specifications will be confirmed as the plant is
          engineered.
        </p>

        <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {OIL_PRODUCTS.map((product) => (
            <article key={product.id} id={product.id} className="scroll-mt-28 bg-white p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="text-h3">{product.name}</h2>
                <StatusPill status="planning" />
              </div>
              <p className="mt-3 max-w-3xl text-ink-600">{product.description}</p>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
                Planned formats
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
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
        title="Want to stock it?"
        body="Register interest now and we will come back to you when first production is scheduled."
        primary={{ href: '/sunflower-factory/wholesale', label: 'Trade enquiry' }}
        secondary={{ href: '/sunflower-factory/quality', label: 'Quality & process' }}
      />
    </>
  );
}
