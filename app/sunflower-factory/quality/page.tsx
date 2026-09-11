import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Steps, Prose } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { PROCESS_STEPS, QUALITY_COMMITMENTS } from '@/content/sunflower-factory';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('sunflower-factory');

export const metadata = pageMetadata({
  title: 'Quality & Process',
  description:
    'How the planned God’s Plan Sunflower Factory would run: intake, extraction, refining, quality control and filling — and the quality commitments behind it.',
  path: '/sunflower-factory/quality',
  company,
});

export default function QualityPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Quality & process"
        title="Seed in one end, a coded bottle out the other"
        lede="Six stages, each with a check that can be evidenced afterwards."
        status="planning"
      />

      <Section tone="white">
        <SectionHeader eyebrow="Process" title="How the plant would run" />
        <Steps steps={PROCESS_STEPS} />
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="Commitments"
          title="What the design is being held to"
          lede="Certification follows construction — but the commitments are being designed in now, because retrofitting traceability into a running plant is far harder than building it in."
        />
        <Grid cols={2}>
          {QUALITY_COMMITMENTS.map((item) => (
            <FeatureItem key={item.title} title={item.title} body={item.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="Why it matters" title="Edible oil is a trust product" />
        <Prose>
          <p>
            A household buying cooking oil cannot test it. They cannot see adulteration, they cannot
            measure free fatty acid, and by the time a bad batch shows itself it is already on the
            stove. The whole category runs on trust, which is precisely why it is a category with
            adulteration problems.
          </p>
          <p>
            The answer is not a claim on a label. It is a batch code that traces back to an intake
            lot, a retained sample that can be tested when someone complains, and a published
            specification the plant can be held to. Those three things are cheap to design in and
            almost impossible to add later.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Trade buyers: ask for the specification"
        body="Draft product specifications and the planned certificate-of-analysis format are available to serious trade enquiries."
        primary={{ href: '/sunflower-factory/wholesale', label: 'Request the specification' }}
        secondary={{ href: '/sunflower-factory/products', label: 'See the product line' }}
      />
    </>
  );
}
