import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose, Disclosure } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { AI_APPLICATIONS } from '@/content/tech';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('tech');

export const metadata = pageMetadata({
  title: 'AI',
  description:
    'Applied machine learning from God’s Plan Tech — document processing, forecasting, quality inspection and internal assistants.',
  path: '/tech/ai',
  company,
});

export default function AIPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Applied AI"
        title="AI where it earns its place"
        lede="Four applications that pay for themselves, rather than a capability in search of a use case."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Applications" title="Where it actually helps" />
        <Grid cols={2}>
          {AI_APPLICATIONS.map((application) => (
            <FeatureItem key={application.title} title={application.title} body={application.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Position" title="Where it does not help" />
        <Prose>
          <p>
            A model is a good fit when the task is repetitive, the inputs are messy, a wrong answer
            is survivable and a human can check the output. Invoice extraction fits. Grading produce
            fits.
          </p>
          <p>
            It is a bad fit when the decision is rare, the stakes are high, or nobody can tell from
            the output whether it was right. In those cases the honest answer is a rules engine, a
            better form, or a person — and we will say so before quoting for a model.
          </p>
          <p>
            Anything we build that produces an answer a person will act on is built to cite its
            source, so the person can check it. That is a requirement, not a feature.
          </p>
        </Prose>
        <div className="mt-10">
          <Disclosure title="Data handling">
            <p>
              Client data used to build or evaluate a model is handled under the engagement&apos;s
              confidentiality terms, is not used to train anything for another client, and is deleted
              or returned at the end of the engagement on request.
            </p>
          </Disclosure>
        </div>
      </Section>

      <CTABanner
        title="Have a candidate use case?"
        body="Describe the task and the volume. We will tell you whether machine learning is the right tool before we quote for it."
        primary={{ href: '/contact', label: 'Ask us' }}
        secondary={{ href: '/tech/software', label: 'Software engineering' }}
      />
    </>
  );
}
