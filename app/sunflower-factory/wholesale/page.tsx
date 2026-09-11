import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Disclosure } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { WHOLESALE_BUYERS, OIL_PRODUCTS } from '@/content/sunflower-factory';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('sunflower-factory');

export const metadata = pageMetadata({
  title: 'Wholesale & Export',
  description:
    'Trade enquiries for God’s Plan Sunflower Factory — supermarkets, distributors, manufacturers, institutional and export buyers.',
  path: '/sunflower-factory/wholesale',
  company,
});

export default function WholesalePage() {
  return (
    <>
      <Hero
        eyebrow="Wholesale & export"
        title="Trade enquiries"
        lede="Registered demand is part of what gets the plant financed. Tell us what you would take and in what format."
      />

      <Section tone="white">
        <div className="mb-12">
          <Disclosure title="This is not an order">
            <p>
              The plant is in planning and there is no product available. Registering interest places
              no order, commits no supply on our side and no purchase on yours, and sets no price.
            </p>
            <p>
              What it does is give us a realistic picture of demand by format and by buyer type, which
              is directly useful to the feasibility study — and it puts you first in the queue when
              first production is scheduled.
            </p>
          </Disclosure>
        </div>

        <SectionHeader eyebrow="Who we are talking to" title="Buyer types" />
        <ul className="flex flex-wrap gap-2">
          {WHOLESALE_BUYERS.map((buyer) => (
            <li
              key={buyer}
              className="rounded-full border border-line bg-cream-50 px-4 py-2 text-sm text-ink-600"
            >
              {buyer}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <FormPanel
          title="Register your interest"
          description="Tell us the products and volumes you would expect to take, and we will come back with draft specifications and an indication of timing."
          aside={
            <div className="rounded-sm border border-line bg-white p-6">
              <h3 className="text-h3">Export buyers</h3>
              <p className="mt-3 text-sm text-ink-600">
                Export enquiries should note the destination market so we can check the labelling and
                certification requirements that would apply.
              </p>
              <p className="mt-4 text-sm text-ink-600">
                Direct contact:{' '}
                <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
                  {GROUP.email}
                </a>
              </p>
            </div>
          }
        >
          <InquiryForm
            type="wholesale"
            companyId="sunflower-factory"
            submitLabel="Register interest"
            messageLabel="What would you need?"
            messagePlaceholder="Products, formats, volumes, delivery terms and your target market."
            showOrganisation
            extraFields={[
              {
                name: 'buyerType',
                label: 'Buyer type',
                type: 'select',
                required: true,
                options: WHOLESALE_BUYERS,
              },
              {
                name: 'products',
                label: 'Products of interest',
                type: 'select',
                options: [...OIL_PRODUCTS.map((p) => p.name), 'Several — see message'],
              },
              { name: 'volume', label: 'Indicative monthly volume', placeholder: 'e.g. 5,000 L' },
              { name: 'market', label: 'Destination market', placeholder: 'Country or region' },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
