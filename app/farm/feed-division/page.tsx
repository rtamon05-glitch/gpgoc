import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose, Steps } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { FEED_LINES } from '@/content/farm';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('farm');

export const metadata = pageMetadata({
  title: 'Feed Division',
  description:
    'Compound poultry, pig and fish feed milled on site at God’s Plan Farm, plus custom formulation for volume buyers.',
  path: '/farm/feed-division',
  company,
});

const QC_STEPS = [
  { title: 'Ingredient intake', body: 'Every delivery sampled for moisture, foreign matter and visible mould before it is accepted.' },
  { title: 'Formulation', body: 'Rations formulated to the growth stage on the ingredients actually in store, not on a recipe from a textbook.' },
  { title: 'Milling & mixing', body: 'Grinding to the right particle size and mixing long enough for a genuinely homogeneous ration.' },
  { title: 'Batch records', body: 'Each batch recorded with its ingredients and inclusion rates, so a performance problem can be traced.' },
  { title: 'Retained samples', body: 'A sample kept from every batch, so a complaint can be tested against what actually shipped.' },
  { title: 'Field feedback', body: 'Performance data from our own houses and from buyers feeds back into the next formulation.' },
];

export default function FeedDivisionPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Feed division"
        title="Feed that performs, not feed that is merely cheap"
        lede="The cheapest bag of feed is usually the most expensive way to raise an animal."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Feed lines" title="What we mill" />
        <Grid cols={2}>
          {FEED_LINES.map((line) => (
            <FeatureItem key={line.title} title={line.title} body={line.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="Quality control"
          title="Six checks between ingredient and bag"
          lede="Feed quality problems show up weeks later as poor growth, and by then the batch is gone. Records are the only way to find the cause."
        />
        <Steps steps={QC_STEPS} />
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="The maths" title="Why price per bag is the wrong number" />
        <Prose>
          <p>
            Farmers compare feed on price per bag because it is the number printed on it. The number
            that decides whether a batch made money is feed conversion ratio — how many kilograms of
            feed it took to add a kilogram of animal.
          </p>
          <p>
            A ration that is ten per cent cheaper and converts fifteen per cent worse loses money on
            every bird, and the farmer often never finds out why. So we publish the inclusion
            rationale for each ration and encourage buyers to measure conversion rather than take our
            word for it.
          </p>
          <p>
            It is also, not coincidentally, the first thing the Agri School&apos;s feed production
            course teaches.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Buying feed in volume?"
        body="Standing orders, agreed delivery routes and custom formulation where the volume justifies a dedicated run."
        primary={{ href: '/farm/partner', label: 'Feed enquiry' }}
        secondary={{ href: '/farm/agri-school#feed-production', label: 'Learn to mill it' }}
      />
    </>
  );
}
