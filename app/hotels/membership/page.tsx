import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose, Disclosure } from '@/components/ui/Bits';
import { StatusPill } from '@/components/ui/StatusPill';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { MEMBERSHIP_TIERS } from '@/content/hotels';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'God’s Plan Privilege',
  description:
    'The four planned membership tiers for God’s Plan Hotels — Silver, Gold, Platinum and Royal. Not yet on sale.',
  path: '/hotels/membership',
  company,
});

export default function MembershipPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="God’s Plan Privilege"
        title="A club as well as a hotel"
        lede="Four tiers designed so the property is used by the city it sits in, not only by people passing through it."
        status="planning"
      />

      <Section tone="white">
        <div className="mb-12">
          <Disclosure title="Membership is not on sale">
            <p>
              No membership can be purchased and no fee is being collected. Tiers, benefits and
              pricing below are from the design brief and will change before any membership is
              offered.
            </p>
          </Disclosure>
        </div>

        <SectionHeader
          eyebrow="Tiers"
          title="Four tiers, one direction of travel"
          lede="Each tier includes everything in the tier below it. Pricing has not been set."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-sm border border-line bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {tier.positioning}
              </p>
              <h3 className="mt-2 text-h3">{tier.name}</h3>
              <ul className="mt-5 flex-1 space-y-3 text-sm text-ink-600">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-xs text-ink-400">
                Pricing to be set. Not currently available.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <StatusPill status="planning" />
        </div>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Why membership" title="The economics of an empty Tuesday" />
        <Prose>
          <p>
            A luxury hotel that depends entirely on travellers is busy in season and hollow out of it.
            The staff it trained in March are underused in September, and the standard slips because
            nobody practises.
          </p>
          <p>
            Membership fills that gap with people who live nearby — the gym at seven in the morning,
            the brasserie on a Wednesday, the pool on a Sunday. It keeps the operation sharp and the
            room rate honest, and it means the property belongs to its city rather than sitting
            behind a gate in it.
          </p>
        </Prose>
      </Section>

      <Section tone="white">
        <FormPanel
          title="Join the waiting list"
          description="Tell us which tier interests you and we will contact you when memberships open. Nothing is charged and nothing is reserved."
        >
          <InquiryForm
            type="contact"
            companyId="hotels"
            submitLabel="Join the list"
            messageLabel="Anything you would like us to know?"
            extraFields={[
              {
                name: 'tier',
                label: 'Tier of interest',
                type: 'select',
                required: true,
                options: [...MEMBERSHIP_TIERS.map((t) => t.name), 'Not sure yet'],
              },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
