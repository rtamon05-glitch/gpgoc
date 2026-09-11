import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, Stat, Prose, FeatureItem, Disclosure } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { FLAGSHIP_CONCEPT } from '@/content/hotels';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'The Flagship',
  description:
    'The flagship development concept for God’s Plan Hotels: 300+ keys, a presidential residence, four dining concepts and a convention centre — in planning, not built.',
  path: '/hotels/flagship',
  company,
});

const ROOM_TYPES = [
  { title: 'Deluxe rooms', body: 'The base product, specified above the regional standard rather than at it — the room most guests will judge the house on.' },
  { title: 'Executive suites', body: 'Separate living space, designed for guests staying a week rather than a night.' },
  { title: 'Signature suites', body: 'The top of the standard inventory: private terrace, dedicated service, sized for entertaining.' },
  { title: 'Presidential residence', body: 'A self-contained residence at the top of the house with its own arrival, security arrangement and staffing.' },
];

export default function FlagshipPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="The flagship"
        title="One property, planned to a standard the region has not been offered"
        lede="The design brief for God’s Plan Hotels’ first property."
        status="planning"
      />

      <Section tone="white">
        <div className="mb-12">
          <Disclosure title="Nothing here is bookable">
            <p>
              The flagship is a development concept. The site, the approvals and the financing are not
              all in place, and construction has not started. Room types, counts and facilities below
              are from the design brief and will change as the project develops.
            </p>
          </Disclosure>
        </div>

        <SectionHeader eyebrow="Scale" title="The numbers in the brief" />
        <Grid cols={4}>
          <Stat value={FLAGSHIP_CONCEPT.keys} label="Guest keys" note={FLAGSHIP_CONCEPT.keysNote} />
          <Stat value="1" label="Presidential residence" note="Self-contained, with its own arrival and service arrangement." />
          <Stat value={FLAGSHIP_CONCEPT.restaurants} label="Dining concepts" note={FLAGSHIP_CONCEPT.restaurantsNote} />
          <Stat value="3" label="Pools" note="Main, adults-only and indoor lap pool." />
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="Accommodation" title="How the house is laid out" />
        <Grid cols={2}>
          {ROOM_TYPES.map((room) => (
            <FeatureItem key={room.title} title={room.title} body={room.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="Standard" title="What “ultra-luxury” has to mean here" />
        <Prose>
          <p>
            Ultra-luxury is an easy label and a hard specification. In this brief it means four
            concrete things, each of which costs money at the point it would be easiest to save it.
          </p>
          <p>
            Space per key, above the ratio a developer would choose to maximise room count. Materials
            specified to survive twenty years of tropical humidity rather than five. Staff-to-key
            ratios set at the level the service model actually needs. And a back of house sized
            properly, because the guest experience fails first in the corridors nobody sees.
          </p>
          <p>
            Those decisions are being made now, at brief stage, because they are the ones that cannot
            be retrofitted later.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Talk to the development team"
        body="Development capital, hotel operators and technical partners — the brief is still open."
        primary={{ href: '/hotels/invest', label: 'Development enquiry' }}
        secondary={{ href: '/hotels/dining', label: 'The dining concepts' }}
      />
    </>
  );
}
