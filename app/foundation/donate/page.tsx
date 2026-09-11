import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { FormPanel } from '@/components/forms/FormPanel';
import { DonateForm } from '@/components/forms/DonateForm';
import { Grid, FeatureItem, Disclosure } from '@/components/ui/Bits';
import { requireCompany } from '@/lib/cms';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('foundation');

export const metadata = pageMetadata({
  title: 'Donate',
  description:
    'Sponsor a scholarship, a classroom, a hospital bed or a training place with God’s Plan Foundation.',
  path: '/foundation/donate',
  company,
});

const SPONSORSHIPS = [
  {
    title: 'Sponsor a scholarship',
    body: 'One student, one academic year: fees, materials and transport, paid directly to the school. You are told which year group your gift covered.',
  },
  {
    title: 'Sponsor a classroom',
    body: 'Furniture, boards, books and basic teaching materials for one classroom — the difference between a room and a room children can learn in.',
  },
  {
    title: 'Sponsor a hospital bed',
    body: 'Equipment and consumables for one bed in the planned health facility. Held in a restricted fund until that facility can use it.',
  },
  {
    title: 'Sponsor a training place',
    body: 'One place on an Agri School or Tech Academy course for a candidate who cannot pay the fee.',
  },
];

export default function DonatePage() {
  return (
    <>
      <Hero
        eyebrow="Give"
        title="Sponsor something specific"
        lede="Every gift is recorded against a named programme, and the Foundation tells you what it paid for."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Ways to give" title="Four sponsorships, one general fund" />
        <Grid cols={2}>
          {SPONSORSHIPS.map((item) => (
            <FeatureItem key={item.title} title={item.title} body={item.body} />
          ))}
        </Grid>
        <div className="mt-10">
          <Disclosure title="Restricted gifts to planned facilities">
            <p>
              Some sponsorships — a hospital bed, for instance — relate to facilities that have not
              been built. Gifts of that kind are held in a restricted fund and are not spent on
              anything else. If a facility does not proceed, you will be contacted and asked whether
              to redirect your gift or have it returned.
            </p>
          </Disclosure>
        </div>
      </Section>

      <Section tone="cream">
        <FormPanel
          title="Pledge your support"
          description="Online card and mobile-money giving is being connected and is not live yet. Tell us what you intend to give and the Foundation will contact you with payment instructions and a receipt."
          aside={
            <div className="space-y-6">
              <div className="rounded-sm border border-line bg-white p-6">
                <h3 className="text-h3">Prefer to speak to someone?</h3>
                <p className="mt-3 text-sm text-ink-600">
                  Write to{' '}
                  <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
                    {GROUP.email}
                  </a>{' '}
                  and a member of the Foundation team will call you back.
                </p>
              </div>
              <div className="rounded-sm border border-line bg-white p-6">
                <h3 className="text-h3">Giving as an organisation?</h3>
                <p className="mt-3 text-sm text-ink-600">
                  Corporate giving, grants and concessional funding are handled through the group
                  partnership route.
                </p>
                <a href="/invest" className="mt-4 inline-block text-sm underline underline-offset-4">
                  Invest &amp; partner &rarr;
                </a>
              </div>
            </div>
          }
        >
          <DonateForm />
        </FormPanel>
      </Section>
    </>
  );
}
