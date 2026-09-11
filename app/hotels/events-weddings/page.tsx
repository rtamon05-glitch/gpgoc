import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { EVENT_SPACES } from '@/content/hotels';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'Events & Weddings',
  description:
    'Ballroom, convention centre, ceremony lawn and private dining rooms planned for the God’s Plan Hotels flagship.',
  path: '/hotels/events-weddings',
  company,
});

export default function EventsPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="Events & weddings"
        title="Rooms built for the day, not adapted for it"
        lede="A ballroom, a convention centre and a ceremony lawn, specified at design stage rather than carved out of leftover space."
        status="planning"
      />

      <Section tone="white">
        <p className="mb-10 rounded-sm border-l-2 border-accent bg-cream-50 py-4 pl-5 text-sm text-ink-600">
          In planning. No space can be booked and no date can be held.
        </p>
        <SectionHeader eyebrow="Spaces" title="What is in the brief" />
        <Grid cols={2}>
          {EVENT_SPACES.map((space) => (
            <FeatureItem key={space.title} title={space.title} body={space.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Detail" title="The parts nobody photographs" />
        <Prose>
          <p>
            Whether a wedding or a conference works has very little to do with the chandelier. It has
            to do with whether four hundred plates can leave a kitchen and arrive hot, whether a
            three-hundred-person room can be turned around between sessions, and whether the loading
            access lets a production crew in without walking through the lobby.
          </p>
          <p>
            Those things are decided on a drawing, years before anyone stands up to give a speech.
            They are being decided now, and the group&apos;s own Media House is in the room for the
            technical specification — rigging points, power, sightlines — because it is the company
            that would have to work in it.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Planning something for later?"
        body="We cannot take bookings, but we can keep you informed as the project develops."
        primary={{ href: '/contact', label: 'Register interest' }}
        secondary={{ href: '/media-house/services', label: 'Media House event production' }}
      />
    </>
  );
}
