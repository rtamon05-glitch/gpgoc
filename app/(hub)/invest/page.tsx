import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, Disclosure, FeatureItem } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { StatusPill } from '@/components/ui/StatusPill';
import { listCompanies } from '@/lib/cms';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Invest & Partner',
  description:
    "One gateway for investment, partnership, offtake and supply conversations across all six God's Plan Group companies.",
  path: '/invest',
});

const OPPORTUNITY_TYPES = [
  {
    title: 'Development capital',
    body: 'Equity or structured capital into a specific project — the flagship hotel, the crushing plant, the feed mill — at a stage where the use of funds is defined.',
  },
  {
    title: 'Offtake and supply',
    body: 'Long-term purchase agreements for oil, feed, eggs or protein, or supply agreements into the group as a vendor.',
  },
  {
    title: 'Joint venture',
    body: 'Operating partnerships where a partner brings technical capability the group does not yet have in-house.',
  },
  {
    title: 'Grant and concessional funding',
    body: 'Development finance and philanthropic capital directed at the Foundation’s programmes and the Agri School.',
  },
];

export default function InvestPage() {
  const companies = listCompanies();
  return (
    <>
      <Hero
        eyebrow="Invest & partner"
        title="Partner with the group"
        lede="One route into six companies. Tell us which conversation you want to have and we will put the right people in the room."
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="What we are looking for"
          title="Four kinds of conversation"
          lede="Different companies need different things. These are the four shapes most partnerships take."
        />
        <Grid cols={2}>
          {OPPORTUNITY_TYPES.map((item) => (
            <FeatureItem key={item.title} title={item.title} body={item.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="Stage matters"
          title="Know what you would be investing in"
          lede="Capital requirements differ enormously between a company that is trading and one still in feasibility. Here is the honest map."
        />
        <ul className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {companies.map((company) => (
            <li key={company.slug} className="grid gap-3 bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-display text-lg text-navy-900">{company.name}</p>
                <p className="mt-1 max-w-2xl text-sm text-ink-600">{company.summary}</p>
              </div>
              <StatusPill status={company.status} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <div className="mb-12">
          <Disclosure title="Important — please read before enquiring">
            <p>
              Nothing on this website is an offer to sell, or a solicitation of an offer to buy, any
              security or investment product. No return is promised, projected or guaranteed, and
              capital placed in early-stage development projects can be lost in full.
            </p>
            <p>
              Several of the projects described are subject to land assembly, statutory approval,
              feasibility outcomes and financing that are not yet complete. A project may be delayed,
              restructured or not proceed at all.
            </p>
            <p>
              Any investment would proceed only under separate written documentation, subject to the
              applicable regulatory requirements of the jurisdiction concerned, and after your own
              independent legal, tax and financial advice.
            </p>
          </Disclosure>
        </div>

        <FormPanel
          title="Start a conversation"
          description="Tell us which company interests you and what you would bring. We reply to every serious enquiry."
          aside={
            <div className="rounded-sm border border-line bg-cream-50 p-6">
              <h3 className="text-h3">Prefer to write directly?</h3>
              <p className="mt-3 text-sm text-ink-600">
                Investment and partnership enquiries reach the group office at{' '}
                <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
                  {GROUP.email}
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-ink-600">
                Please do not send confidential material with a first enquiry — we will agree
                confidentiality arrangements before either side shares anything sensitive.
              </p>
            </div>
          }
        >
          <InquiryForm
            type="invest"
            companyId={null}
            showOrganisation
            submitLabel="Send enquiry"
            messageLabel="What would you like to discuss?"
            messagePlaceholder="The company or project, the kind of partnership, indicative size and your timeline."
            extraFields={[
              {
                name: 'company',
                label: 'Which company?',
                type: 'select',
                required: true,
                options: [...companies.map((c) => c.name), 'The group as a whole', 'Not sure yet'],
              },
              {
                name: 'partnershipType',
                label: 'Type of partnership',
                type: 'select',
                required: true,
                options: [
                  'Development capital',
                  'Offtake or supply',
                  'Joint venture',
                  'Grant or concessional funding',
                  'Other',
                ],
              },
              {
                name: 'indicativeSize',
                label: 'Indicative size',
                placeholder: 'Optional — a range is fine',
              },
              { name: 'timeline', label: 'Your timeline', placeholder: 'e.g. next 6 months' },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
