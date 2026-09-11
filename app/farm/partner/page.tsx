import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { PARTNER_TYPES, FARM_PRODUCTS } from '@/content/farm';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('farm');

export const metadata = pageMetadata({
  title: 'Partner With Us',
  description:
    'Feed buyers, produce buyers, cooperatives and training partners — work with God’s Plan Farm.',
  path: '/farm/partner',
  company,
});

export default function FarmPartnerPage() {
  return (
    <>
      <Hero
        eyebrow="Partner with us"
        title="Buy from us, or build something with us"
        lede="Standing orders for feed and produce, cooperative arrangements, and funded training places."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Who we work with" title="Four kinds of partner" />
        <Grid cols={2}>
          {PARTNER_TYPES.map((item) => (
            <FeatureItem key={item.title} title={item.title} body={item.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <FormPanel
          title="Start a conversation"
          description="Tell us what you need and how often. Regular buyers get an agreed delivery route and a standing price reviewed on a set cycle rather than renegotiated every order."
          aside={
            <div className="space-y-6">
              <div className="rounded-sm border border-line bg-white p-6">
                <h3 className="text-h3">Buying in volume?</h3>
                <p className="mt-3 text-sm text-ink-600">
                  Tell us the monthly quantity and where it goes. Delivery routes are planned around
                  standing orders, so volume genuinely changes the price.
                </p>
              </div>
              <div className="rounded-sm border border-line bg-white p-6">
                <h3 className="text-h3">Direct contact</h3>
                <p className="mt-3 text-sm text-ink-600">
                  <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
                    {GROUP.email}
                  </a>
                </p>
              </div>
            </div>
          }
        >
          <InquiryForm
            type="wholesale"
            companyId="farm"
            submitLabel="Send enquiry"
            messageLabel="What do you need?"
            messagePlaceholder="Products, quantities, how often, and where they need to go."
            showOrganisation
            extraFields={[
              {
                name: 'partnerType',
                label: 'What kind of partner are you?',
                type: 'select',
                required: true,
                options: [...PARTNER_TYPES.map((p) => p.title), 'Something else'],
              },
              {
                name: 'products',
                label: 'Products of interest',
                type: 'select',
                options: [...FARM_PRODUCTS.map((p) => p.name), 'Several — see message'],
              },
              { name: 'volume', label: 'Indicative monthly volume', placeholder: 'e.g. 40 trays a week' },
              { name: 'location', label: 'Delivery location', placeholder: 'Town or region' },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
