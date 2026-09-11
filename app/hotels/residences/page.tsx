import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Disclosure } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { RESIDENCES_POINTS } from '@/content/hotels';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'Branded Residences',
  description:
    'Privately owned, hotel-serviced residences planned within the God’s Plan Hotels flagship. Not currently for sale.',
  path: '/hotels/residences',
  company,
});

export default function ResidencesPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="Residences"
        title="A home inside the house"
        lede="Privately owned apartments and villas within the property, serviced by the hotel."
        status="planning"
      />

      <Section tone="white">
        <div className="mb-12">
          <Disclosure title="Not a sales offering">
            <p>
              No residence is being marketed, sold or reserved, and no deposit is being taken. There
              is no price list, no floor plan release and no reservation process open.
            </p>
            <p>
              Registering interest below places you on a contact list. It creates no right to buy and
              no obligation on either side. A sales process, if and when one opens, would proceed
              under separate documentation and the applicable property and consumer law.
            </p>
          </Disclosure>
        </div>

        <SectionHeader eyebrow="The concept" title="How branded residences would work here" />
        <Grid cols={2}>
          {RESIDENCES_POINTS.map((point) => (
            <FeatureItem key={point.title} title={point.title} body={point.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <FormPanel
          title="Register your interest"
          description="We will contact you if and when a sales process opens. Nothing is reserved by registering, and you can ask us to remove you at any time."
        >
          <InquiryForm
            type="invest"
            companyId="hotels"
            submitLabel="Register interest"
            messageLabel="Anything you would like us to know?"
            messagePlaceholder="The kind of residence you would be interested in, and your timeframe."
            showOrganisation
            extraFields={[
              {
                name: 'residenceType',
                label: 'Type of interest',
                type: 'select',
                required: true,
                options: ['Apartment', 'Villa', 'Either', 'Investment / letting pool'],
              },
              { name: 'timeframe', label: 'Your timeframe', placeholder: 'e.g. within 3 years' },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
