import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose, Disclosure } from '@/components/ui/Bits';
import { StatusPill } from '@/components/ui/StatusPill';
import { ButtonLink } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { TECH_DIVISIONS } from '@/content/tech';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('tech');

export const metadata = pageMetadata({
  title: 'God’s Plan Tech',
  description: company.summary,
  path: '/tech',
  company,
});

export default function TechPage() {
  return (
    <>
      <Hero
        eyebrow="God’s Plan Tech"
        title="Building the Technology. Powering the Future."
        lede="Software delivery, applied AI and cybersecurity for the group and its clients — with an academy attached, because the constraint here has never been ambition."
        status={company.status}
        actions={
          <>
            <ButtonLink href="/tech/software" size="lg">
              What we build
            </ButtonLink>
            <ButtonLink href="/tech/academy" variant="onDark" size="lg">
              The Academy
            </ButtonLink>
          </>
        }
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Divisions"
          title="Six divisions, at three different stages"
          lede="Three are delivering work. Three are research. The labels say which is which."
        />
        <Grid cols={3}>
          {TECH_DIVISIONS.map((division) => (
            <FeatureItem
              key={division.id}
              title={division.title}
              body={division.body}
              meta={<StatusPill status={division.stage} />}
            />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="How we work" title="Shipped, not shown" />
            <Prose>
              <p>
                There is a particular failure mode in technology companies at this stage: describing
                a roadmap in the present tense. A research project becomes &ldquo;our platform&rdquo;,
                a prototype becomes &ldquo;our product&rdquo;, and by the time anyone checks, the gap
                between the website and the repository is embarrassing.
              </p>
              <p>
                So this section labels every division with its stage, and the financial-technology
                pages describe research as research. The software and AI work is real, has clients,
                and can be talked about specifically under NDA. The blockchain work is a study.
              </p>
              <p>
                The Academy exists for the same reason. Engineering capacity in the region is the
                actual constraint on everything the group wants to build, and you cannot recruit your
                way out of it — you have to train.
              </p>
            </Prose>
          </div>
          <div>
            <Disclosure title="Financial technology — please read">
              <p>
                God&apos;s Plan Tech does not offer trading services, investment products, portfolio
                management or financial advice. It does not accept or manage client funds.
              </p>
              <p>
                Its financial-technology work is research. No return is promised, projected or
                guaranteed, and no product described as a roadmap phase is available today.
              </p>
              <p>
                Any future financial product would be offered only under the licences and
                authorisations required in the relevant jurisdiction.
              </p>
            </Disclosure>
          </div>
        </div>
      </Section>

      <CTABanner
        eyebrow="Work with us"
        title="Need something built?"
        body="Software, applied AI or a security review — tell us the problem rather than the solution and we will tell you honestly whether we are the right people."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/tech/careers', label: 'Join the team' }}
      />
    </>
  );
}
