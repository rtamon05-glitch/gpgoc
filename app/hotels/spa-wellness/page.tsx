import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { WELLNESS_FACILITIES } from '@/content/hotels';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'Spa & Wellness',
  description:
    'The destination spa, fitness centre, pools and retreat programming planned for the God’s Plan Hotels flagship.',
  path: '/hotels/spa-wellness',
  company,
});

export default function SpaPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="Spa & wellness"
        title="A spa people would travel for"
        lede="Planned as a destination in its own right rather than an amenity bolted onto the room count."
        status="planning"
      />

      <Section tone="white">
        <p className="mb-10 rounded-sm border-l-2 border-accent bg-cream-50 py-4 pl-5 text-sm text-ink-600">
          In planning. No facility is open and no treatment or membership can be booked.
        </p>
        <SectionHeader eyebrow="Facilities" title="What is in the brief" />
        <Grid cols={2}>
          {WELLNESS_FACILITIES.map((facility) => (
            <FeatureItem key={facility.title} title={facility.title} body={facility.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Approach" title="Why three pools instead of one big one" />
        <Prose>
          <p>
            Most hotel pools try to be three things at once — a family pool, a quiet pool and a
            serious swimmer&apos;s pool — and end up being none of them. Families feel watched,
            couples feel crowded, and anyone who wants to swim lengths gives up by the second
            circuit.
          </p>
          <p>
            Separating the three costs footprint. It is the single clearest example of the trade the
            brief keeps making: spend the space now, or spend the next twenty years apologising for
            it.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Spa operators and practitioners"
        body="We would rather involve spa operators at brief stage than hand them a finished building."
        primary={{ href: '/hotels/invest', label: 'Register interest' }}
        secondary={{ href: '/hotels/membership', label: 'Membership tiers' }}
      />
    </>
  );
}
