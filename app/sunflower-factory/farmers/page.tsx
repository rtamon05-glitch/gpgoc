import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { FARMER_PROGRAM } from '@/content/sunflower-factory';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('sunflower-factory');

export const metadata = pageMetadata({
  title: 'Farmer Partnership',
  description:
    'Contract farming with God’s Plan Sunflower Factory — price agreed before planting, seed and inputs supplied, agronomy support and guaranteed collection.',
  path: '/sunflower-factory/farmers',
  company,
});

export default function FarmersPage() {
  return (
    <>
      <Hero
        eyebrow="Farmer partnership"
        title="A buyer who commits before you plant"
        lede="The plant only works if the farmers around it do well out of it. That is not sentiment — a mill with no reliable seed supply is scrap metal."
      />

      <Section tone="white">
        <SectionHeader eyebrow="The programme" title="What the partnership offers" />
        <Grid cols={2}>
          {FARMER_PROGRAM.map((item) => (
            <FeatureItem key={item.title} title={item.title} body={item.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Honest terms" title="What we are not promising" />
        <Prose>
          <p>
            The plant has not been built. Registering with the programme now does not guarantee a
            contract, and it does not guarantee a price — those come when the project reaches the
            stage of signing contracts for a specific season.
          </p>
          <p>
            What registering does is put your acreage on the map. The feasibility study and the
            financing case both depend on knowing how much seed can realistically be delivered and
            from where. Farmers who register early are the ones the agronomy team plans seed supply
            and extension visits around, and the first approached when contracting opens.
          </p>
        </Prose>
      </Section>

      <Section tone="white">
        <FormPanel
          title="Register your interest"
          description="Tell us where you farm and how much land you could put into sunflower. An estimate is fine."
        >
          <InquiryForm
            type="wholesale"
            companyId="sunflower-factory"
            submitLabel="Register as a grower"
            messageLabel="Tell us about your farm"
            messagePlaceholder="What you grow now, what support would help most, and any questions about the programme."
            showOrganisation
            extraFields={[
              {
                name: 'farmerType',
                label: 'Are you registering as…',
                type: 'select',
                required: true,
                options: ['An individual farmer', 'A cooperative or farmer group', 'A commercial estate'],
              },
              { name: 'location', label: 'Where do you farm?', placeholder: 'Village, division or region', required: true },
              { name: 'hectares', label: 'Land available for sunflower', placeholder: 'e.g. 3 hectares' },
              {
                name: 'experience',
                label: 'Grown sunflower before?',
                type: 'select',
                options: ['Yes, regularly', 'Yes, once or twice', 'No, but interested'],
              },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
