import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, Stat, Prose, Disclosure } from '@/components/ui/Bits';
import { LinkCard } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { FLAGSHIP_CONCEPT } from '@/content/hotels';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('hotels');

export const metadata = pageMetadata({
  title: 'God’s Plan Hotels',
  description: company.summary,
  path: '/hotels',
  company,
});

export default function HotelsPage() {
  return (
    <>
      <Hero
        tone="charcoal"
        eyebrow="God’s Plan Hotels"
        title="Where Luxury Meets Purpose."
        lede="An ultra-luxury hospitality company in development: a flagship property designed to earn an international reputation while employing, training and buying locally."
        status={company.status}
        actions={
          <>
            <ButtonLink href="/hotels/flagship" size="lg">
              The flagship concept
            </ButtonLink>
            <ButtonLink href="/hotels/invest" variant="onDark" size="lg">
              Development enquiry
            </ButtonLink>
          </>
        }
      />

      <Section tone="charcoal">
        <SectionHeader
          onDark
          eyebrow="Please read"
          title="This is a development concept"
        />
        <Prose onDark>
          <p>
            God&apos;s Plan Hotels is a company in pre-development. There is no open property. No room
            can be booked, no membership can be bought, no residence can be reserved, and no dining
            room is taking reservations.
          </p>
          <p>
            What follows is the design brief: the scale, the concepts and the standard the property is
            being planned to. It is published so that investors, operators and prospective partners
            can judge the ambition on its merits — not as an invitation to plan a stay.
          </p>
        </Prose>
      </Section>

      <Section tone="navy">
        <SectionHeader onDark eyebrow="The brief" title="What is being planned" />
        <Grid cols={4}>
          <Stat onDark value={FLAGSHIP_CONCEPT.keys} label="Guest keys" note={FLAGSHIP_CONCEPT.keysNote} />
          <Stat onDark value={FLAGSHIP_CONCEPT.restaurants} label="Dining concepts" note={FLAGSHIP_CONCEPT.restaurantsNote} />
          <Stat onDark value={FLAGSHIP_CONCEPT.residences} label="Residences" note={FLAGSHIP_CONCEPT.residencesNote} />
          <Stat onDark value={FLAGSHIP_CONCEPT.convention} label="Events centre" note={FLAGSHIP_CONCEPT.conventionNote} />
        </Grid>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow="The property"
          title="Six concepts within one house"
          lede="Each has its own brief, its own operating model and its own reason to exist beyond the room count."
        />
        <Grid cols={3}>
          <LinkCard href="/hotels/flagship" title="The Flagship" body="Scale, positioning and the presidential residence at the top of the house." footer="See the concept" />
          <LinkCard href="/hotels/dining" title="Dining" body="Four concepts: signature fine dining, all-day brasserie, African Heritage and a rooftop bar." footer="See the concepts" />
          <LinkCard href="/hotels/spa-wellness" title="Spa & Wellness" body="Destination spa, fitness floor, three pools and multi-day retreat programming." footer="See the plan" />
          <LinkCard href="/hotels/residences" title="Residences" body="Privately owned, hotel-serviced homes within the property." footer="See the plan" />
          <LinkCard href="/hotels/events-weddings" title="Events & Weddings" body="Ballroom, convention centre, ceremony lawn and private dining rooms." footer="See the spaces" />
          <LinkCard href="/hotels/membership" title="God’s Plan Privilege" body="Four membership tiers designed to make the property a club as well as a hotel." footer="See the tiers" />
        </Grid>
      </Section>

      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="Purpose" title="Why “luxury meets purpose” is not a slogan" />
            <Prose>
              <p>
                Luxury hospitality in the region has a familiar shape: an international brand, an
                imported management team, imported produce, and a staff ceiling somewhere around
                supervisor level. The money arrives and most of it leaves again.
              </p>
              <p>
                The brief for this property inverts that. Kitchen supply is specified regionally
                wherever the quality is there. Training is budgeted as capital expenditure, not as an
                overhead to be cut in a soft quarter. Senior operating roles are written as
                progression targets for people hired locally, with the timeline to get there written
                down.
              </p>
              <p>
                None of that lowers the standard. It is simply a different answer to where the
                standard comes from.
              </p>
            </Prose>
          </div>
          <div>
            <Disclosure title="Investment enquiries">
              <p>
                Nothing in this section is an offer of securities, a property offering or a promise of
                returns. Development capital conversations proceed under separate written
                documentation and applicable regulatory requirements.
              </p>
              <p>
                The project is subject to site acquisition, planning approval, financing and
                construction, none of which are complete.
              </p>
            </Disclosure>
          </div>
        </div>
      </Section>

      <CTABanner
        eyebrow="Development"
        title="Invest in the flagship project"
        body="Development capital, operating partnerships and technical partners for a property still early enough that the brief can change."
        primary={{ href: '/hotels/invest', label: 'Development enquiry' }}
        secondary={{ href: '/invest', label: 'Group partnerships' }}
      />
    </>
  );
}
