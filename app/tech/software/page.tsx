import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Steps, Prose } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { SOFTWARE_SERVICES } from '@/content/tech';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('tech');

export const metadata = pageMetadata({
  title: 'Software',
  description:
    'Product engineering, internal systems, integration and long-term maintenance from God’s Plan Tech.',
  path: '/tech/software',
  company,
});

const PROCESS = [
  { title: 'Understand', body: 'A short paid discovery. We would rather find out in two weeks that a project should not happen than in six months.' },
  { title: 'Shape', body: 'Scope, architecture and a delivery plan with the risky parts scheduled first, not last.' },
  { title: 'Build', body: 'Short cycles, working software at the end of each one, and a client who can see it rather than read about it.' },
  { title: 'Harden', body: 'Security review, load testing and the operational work that decides whether launch week is calm.' },
  { title: 'Launch', body: 'Deployment, monitoring, runbooks and training for the people who will operate it.' },
  { title: 'Maintain', body: 'A named engineer, an agreed response time, and ownership that does not end at handover.' },
];

export default function SoftwarePage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Software"
        title="Systems that still work in year three"
        lede="Most software is easy to launch and hard to live with. We optimise for the second one."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Services" title="What we build" />
        <Grid cols={2}>
          {SOFTWARE_SERVICES.map((service) => (
            <FeatureItem key={service.title} title={service.title} body={service.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="Process" title="How an engagement runs" />
        <Steps steps={PROCESS} />
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="Clients" title="What we can and cannot show you" />
        <Prose>
          <p>
            Most of our delivery work so far has been inside the group or under client
            confidentiality, which makes for a thin public portfolio and an honest one. We are not
            going to pad this page with logos we cannot name or case studies we cannot evidence.
          </p>
          <p>
            What we can do is talk specifically about the systems, walk you through the architecture,
            and — where the client agrees — introduce you to them. Ask, and we will arrange it.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Tell us the problem"
        body="Not the solution. The most useful first conversation is about what is going wrong, not what you have already decided to build."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/tech/ai', label: 'Applied AI' }}
      />
    </>
  );
}
