import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose, Disclosure } from '@/components/ui/Bits';
import { StatusPill } from '@/components/ui/StatusPill';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { FINTECH_ROADMAP } from '@/content/tech';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('tech');

export const metadata = pageMetadata({
  title: 'Blockchain & Financial Technology',
  description:
    'Research into distributed-ledger traceability and financial technology at God’s Plan Tech. Research and roadmap only — no trading service, no token, no investment product.',
  path: '/tech/blockchain-fintech',
  company,
});

export default function BlockchainFintechPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Blockchain & financial technology"
        title="A research division, described as one"
        lede="This page describes work in progress and a roadmap. There is no product here to buy, join or invest in."
        status="planning"
      />

      <Section tone="white">
        {/* Compliance requirement: the disclosure appears above the content it qualifies. */}
        <div className="mb-12">
          <Disclosure title="Risk disclosure — please read first">
            <p>
              <strong>No investment products.</strong> God&apos;s Plan Tech does not offer, and this
              page does not advertise, any trading service, investment product, portfolio-management
              service, savings product or financial advice. The division does not accept, hold or
              manage client funds.
            </p>
            <p>
              <strong>No returns are promised.</strong> Nothing here promises, projects or guarantees
              any return, yield or profit. Any suggestion to the contrary, from any source claiming to
              represent the group, should be treated as fraudulent and reported to us.
            </p>
            <p>
              <strong>No token and no exchange.</strong> The group has not issued a token, coin or
              digital asset of any kind, and operates no exchange. If you are offered one in the
              group&apos;s name, it is not ours.
            </p>
            <p>
              <strong>Regulated activity requires authorisation.</strong> Financial services in the
              CEMAC region are regulated — including by COSUMAF for capital-market activity and by
              BEAC for payment and monetary matters. Any future product would be offered only after
              the required licences and authorisations were obtained, and would be subject to the
              conditions attached to them.
            </p>
            <p>
              <strong>General risk.</strong> Trading foreign exchange and digital assets carries a
              high risk of loss, including total loss of capital, and is not suitable for everyone.
              Nothing on this site is financial, legal or tax advice. Seek independent professional
              advice before making any financial decision.
            </p>
          </Disclosure>
        </div>

        <SectionHeader
          eyebrow="What the division is"
          title="Research, and a slow route to anything else"
        />
        <Prose>
          <p>
            Financial technology is the part of this group most likely to be misrepresented — by
            enthusiasts, by impatient marketing, and by people using the name without permission. So
            this page is deliberately dull.
          </p>
          <p>
            What exists today is a small research function. It is mapping the regulatory perimeter,
            studying where distributed-ledger techniques would genuinely improve supply-chain
            traceability between the group&apos;s agricultural companies and their buyers, and
            building tooling for market data analysis.
          </p>
          <p>
            What does not exist: a trading desk, a managed fund, a payment product, a token, an
            exchange, or any service accepting money from the public. If and when any of that
            changes, it changes after a licence, not before one.
          </p>
        </Prose>
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="Roadmap"
          title="Four phases, in order"
          lede="Each phase depends on the previous one completing. Phase 1 is where the division is now. Nothing beyond it exists."
        />
        <ol className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {FINTECH_ROADMAP.map((phase) => (
            <li key={phase.phase} className="grid gap-4 bg-white p-6 sm:grid-cols-[11rem_1fr]">
              <div>
                <p className="font-display text-lg text-accent">{phase.phase}</p>
                <div className="mt-2">
                  <StatusPill status={phase.stage} />
                </div>
              </div>
              <div>
                <h3 className="text-h3">{phase.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="Fraud warning" title="If someone offers you a God’s Plan investment" />
        <Prose>
          <p>
            The group does not solicit investment through social media, messaging apps, or
            unsolicited calls. It does not operate an investment scheme, a trading programme or a
            token sale. It does not promise returns.
          </p>
          <p>
            If you are approached by anyone claiming otherwise in the group&apos;s name, do not send
            money. Tell us, and we will report it.
          </p>
        </Prose>
      </Section>

      <CTABanner
        eyebrow="Report or enquire"
        title="Questions about this division?"
        body="Including reports of anyone misusing the group’s name. We would rather hear about it early."
        primary={{ href: '/contact', label: 'Contact us' }}
        secondary={{ href: '/tech', label: 'Back to Tech' }}
      />
    </>
  );
}
