import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { StatusPill } from '@/components/ui/StatusPill';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { FOUNDATION_PROGRAMS } from '@/content/foundation';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('foundation');

export const metadata = pageMetadata({
  title: 'Programmes',
  description:
    'Scholarships, funded training places, community health outreach and smallholder support — with the stage of each programme stated.',
  path: '/foundation/programs',
  company,
});

export default function ProgramsPage() {
  const running = FOUNDATION_PROGRAMS.filter((p) => p.stage !== 'planning');
  const preparing = FOUNDATION_PROGRAMS.filter((p) => p.stage === 'planning');

  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Programmes"
        title="What we fund, and how far along it is"
        lede="Five programmes. Two have money moving through them; three are being designed and are not open to applicants yet."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Running" title="Programmes under way" />
        <Grid cols={2}>
          {running.map((program) => (
            <FeatureItem
              key={program.id}
              title={program.title}
              body={program.description}
              meta={<StatusPill status={program.stage} />}
            />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="In preparation"
          title="Programmes being designed"
          lede="Listed so partners can engage with them early. None of these is accepting applicants yet."
        />
        <Grid cols={3}>
          {preparing.map((program) => (
            <FeatureItem
              key={program.id}
              title={program.title}
              body={program.description}
              meta={<StatusPill status={program.stage} />}
            />
          ))}
        </Grid>
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="How we choose" title="How programmes get picked" />
        <Prose>
          <p>
            A programme has to pass three tests before the Foundation funds it. It has to address
            something the community itself names as a problem. It has to be deliverable at the scale
            we can actually fund, rather than a pilot that never becomes anything. And it has to
            leave capacity behind — a trained person, a working institution — rather than a one-off
            distribution.
          </p>
          <p>
            That rules out a lot of well-meant work. It is why the list is short, and why we would
            rather it stayed short and honest.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Fund a programme"
        body="Choose the programme your gift goes to, or let the Foundation direct it where the need is greatest."
        primary={{ href: '/foundation/donate', label: 'Give to a programme' }}
        secondary={{ href: '/contact', label: 'Talk to the team' }}
      />
    </>
  );
}
