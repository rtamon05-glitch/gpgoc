import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { IMPACT_NOTE } from '@/content/foundation';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('foundation');

export const metadata = pageMetadata({
  title: 'Impact',
  description:
    'How God’s Plan Foundation intends to measure and report impact — and why it is not publishing beneficiary numbers yet.',
  path: '/foundation/impact',
  company,
});

const MEASURES = [
  {
    title: 'Students retained',
    body: 'Not scholarships awarded — students who were still in school a year later. The first number is the easy one; the second is the one that matters.',
  },
  {
    title: 'Graduates in work',
    body: 'Trainees from the Agri School and Tech Academy in paid work or running their own enterprise twelve months after finishing.',
  },
  {
    title: 'Farmer income',
    body: 'Change in income for smallholders in the support programme, measured against farmers outside it in the same season.',
  },
  {
    title: 'Cost per outcome',
    body: 'What each retained student or employed graduate actually cost the Foundation, published alongside the outcome rather than buried.',
  },
];

export default function ImpactPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Impact"
        title="What we will report, and when"
        lede="The Foundation would rather publish nothing than publish a number it cannot stand behind."
      />

      <Section tone="white" width="narrow">
        <p className="rounded-sm border-l-2 border-accent bg-cream-50 py-5 pl-6 text-ink-600">
          {IMPACT_NOTE}
        </p>
        <div className="mt-10">
          <SectionHeader eyebrow="Why this page is short" title="Impact reporting has a credibility problem" />
          <Prose>
            <p>
              Development work is full of numbers that sound impressive and mean very little. People
              reached. Lives touched. Materials distributed. They are counts of activity, not of
              change, and they are almost never checked.
            </p>
            <p>
              So the Foundation is starting with the definition rather than the number. Below is what
              we intend to measure, with the awkward version of each metric chosen on purpose. Those
              figures go up here once there are enough of them to mean something, alongside audited
              annual reports.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="Our measures" title="Four things we will count" />
        <div className="grid gap-6 sm:grid-cols-2">
          {MEASURES.map((measure) => (
            <div key={measure.title} className="rounded-sm border border-line bg-white p-6">
              <h3 className="text-h3">{measure.title}</h3>
              <p className="mt-3 text-sm text-ink-600">{measure.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="Stories" title="Beneficiary stories" />
        <Prose>
          <p>
            We will publish stories from the people the programmes serve — with their consent, in
            their own words, and named only if they want to be named. We are not going to write them
            in advance.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Fund something measurable"
        body="Gifts are recorded against a named programme, so what you funded is what gets reported on."
        primary={{ href: '/foundation/donate', label: 'Support a programme' }}
        secondary={{ href: '/foundation/programs', label: 'See the programmes' }}
      />
    </>
  );
}
