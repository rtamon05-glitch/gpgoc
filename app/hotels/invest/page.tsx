import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Disclosure } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'Development & Investment',
  description:
    'Development capital, operating partnerships and technical partners for the God’s Plan Hotels flagship project.',
  path: '/hotels/invest',
  company,
});

const PARTNER_TYPES = [
  {
    title: 'Development capital',
    body: 'Equity or structured capital into the flagship project, at a stage where the use of funds and the construction sequence are defined.',
  },
  {
    title: 'Hotel operator',
    body: 'An operating partner to run the property, or a management agreement with an established house. The brief is deliberately still open on this.',
  },
  {
    title: 'Technical partners',
    body: 'Design, engineering, kitchen, spa and audiovisual specialists who want to be involved while the drawings are still drawings.',
  },
  {
    title: 'Land and site partners',
    body: 'Landowners and public-sector partners with a site that fits the brief.',
  },
];

export default function HotelsInvestPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="Development & investment"
        title="Get involved while the brief is still open"
        lede="The most useful partners arrive before the concrete does."
        status="planning"
      />

      <Section tone="white">
        <SectionHeader eyebrow="Who we want to hear from" title="Four kinds of partner" />
        <Grid cols={2}>
          {PARTNER_TYPES.map((item) => (
            <FeatureItem key={item.title} title={item.title} body={item.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <div className="mb-12">
          <Disclosure title="Important — please read before enquiring">
            <p>
              Nothing on this page or anywhere in this section is an offer to sell, or a solicitation
              of an offer to buy, any security, investment product or property interest. No return is
              promised, projected or guaranteed.
            </p>
            <p>
              The flagship project is subject to site acquisition, statutory planning approval,
              environmental authorisation, financing and construction. None of these is complete, and
              the project may be delayed, restructured or not proceed.
            </p>
            <p>
              Any investment would proceed only under separate written documentation, subject to the
              regulatory requirements of the relevant jurisdiction, and after your own independent
              legal, tax and financial advice.
            </p>
          </Disclosure>
        </div>

        <FormPanel
          title="Development enquiry"
          description="Tell us what you would bring. We reply to every serious enquiry."
          aside={
            <div className="rounded-sm border border-line bg-white p-6">
              <h3 className="text-h3">Direct contact</h3>
              <p className="mt-3 text-sm text-ink-600">
                Development enquiries reach the group office at{' '}
                <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
                  {GROUP.email}
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-ink-600">
                Please do not send confidential material with a first enquiry — confidentiality
                arrangements are agreed before either side shares anything sensitive.
              </p>
            </div>
          }
        >
          <InquiryForm
            type="invest"
            companyId="hotels"
            showOrganisation
            messageLabel="What would you like to discuss?"
            messagePlaceholder="Your role, what you would bring, indicative size and timeline."
            extraFields={[
              {
                name: 'partnerType',
                label: 'Type of partner',
                type: 'select',
                required: true,
                options: [...PARTNER_TYPES.map((p) => p.title), 'Other'],
              },
              { name: 'indicativeSize', label: 'Indicative size', placeholder: 'Optional — a range is fine' },
              { name: 'timeline', label: 'Your timeline', placeholder: 'e.g. next 12 months' },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
