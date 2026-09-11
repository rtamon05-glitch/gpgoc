import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { LinkCard } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { StatusNote } from '@/components/ui/StatusPill';
import { requireCompany } from '@/lib/cms';
import { FARM_DIVISIONS } from '@/content/farm';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('farm');

export const metadata = pageMetadata({
  title: 'God’s Plan Farm',
  description: company.summary,
  path: '/farm',
  company,
});

export default function FarmPage() {
  return (
    <>
      <Hero
        eyebrow="God’s Plan Farm"
        title="Producing Food. Producing Farmers. Producing the Future."
        lede="Poultry, pigs and fish, a feed mill that supplies them, and a school that teaches every part of it on the working farm."
        status={company.status}
        actions={
          <>
            <ButtonLink href="/farm/products" size="lg">
              What we sell
            </ButtonLink>
            <ButtonLink href="/farm/agri-school" variant="onDark" size="lg">
              The Agri School
            </ButtonLink>
          </>
        }
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Divisions"
          title="Five divisions that need each other"
          lede="The feed mill is the hinge: it feeds the livestock, it sells to other farms, and it is what the school teaches people to run."
        />
        <Grid cols={3}>
          {FARM_DIVISIONS.map((division) => (
            <FeatureItem key={division.id} title={division.title} body={division.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="The model" title="Why the feed mill decides everything" />
            <Prose>
              <p>
                Feed is somewhere between sixty and seventy per cent of the cost of raising a bird, a
                pig or a fish. A farm that buys feed is a farm whose margin is set by somebody else,
                and that somebody else raises prices exactly when input costs bite hardest.
              </p>
              <p>
                Milling our own changes the arithmetic. It also produces something to sell — feed goes
                out to farms across the region — and it creates the ingredient loop with the group&apos;s
                Sunflower Factory, whose press cake is a protein input the mill would otherwise buy in.
              </p>
              <p>
                And it gives the Agri School something real to teach on. A course in feed production
                taught next to a working mill is a different proposition from one taught off a
                whiteboard.
              </p>
            </Prose>
          </div>
          <div className="space-y-6">
            <StatusNote status={company.status} />
            <LinkCard
              href="/farm/agri-school"
              title="Agri School"
              body="Six practical courses: poultry, piggery, fish, feed production, agribusiness management and agricultural entrepreneurship."
              footer="See the courses"
            />
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Explore" title="Where to next" />
        <Grid cols={3}>
          <LinkCard href="/farm/products" title="Products" body="Eggs, broilers, pigs, fish, compound feed and composted manure." footer="See the catalogue" />
          <LinkCard href="/farm/feed-division" title="Feed division" body="Poultry, pig and fish rations milled on site, plus custom formulation." footer="See the feed lines" />
          <LinkCard href="/farm/partner" title="Partner with us" body="Feed buyers, produce buyers, cooperatives and training partners." footer="Start a conversation" />
        </Grid>
      </Section>

      <CTABanner
        eyebrow="Buy or learn"
        title="Order produce, or learn to produce it"
        body="Regular supply for buyers, and a place on a course for anyone who would rather run their own."
        primary={{ href: '/farm/partner', label: 'Talk to us' }}
        secondary={{ href: '/farm/agri-school', label: 'Enrol on a course' }}
      />
    </>
  );
}
