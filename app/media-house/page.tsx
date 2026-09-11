import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { LinkCard } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { StatusNote } from '@/components/ui/StatusPill';
import { requireCompany } from '@/lib/cms';
import { MEDIA_SERVICES } from '@/content/media-house';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('media-house');

export const metadata = pageMetadata({
  title: 'God’s Plan Media House',
  description: company.summary,
  path: '/media-house',
  company,
});

export default function MediaHousePage() {
  return (
    <>
      <Hero
        eyebrow="God’s Plan Media House"
        title="Telling the Stories That Move People."
        lede="Film, photography, live production and the kit to do all three. Booked by the day, quoted properly, delivered on the date we said."
        status={company.status}
        actions={
          <>
            <ButtonLink href="/media-house/book" size="lg">
              Request a quote
            </ButtonLink>
            <ButtonLink href="/media-house/portfolio" variant="onDark" size="lg">
              See the work
            </ButtonLink>
          </>
        }
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Services"
          title="Six things we do"
          lede="Most jobs are a combination of two or three of these. Tell us the outcome and we will put the right crew together."
        />
        <Grid cols={3}>
          {MEDIA_SERVICES.map((service) => (
            <FeatureItem key={service.id} title={service.title} body={service.body} />
          ))}
        </Grid>
        <div className="mt-10">
          <ButtonLink href="/media-house/services" variant="secondary">
            More about the services
          </ButtonLink>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="How we work" title="Live work either happens or it does not" />
            <Prose>
              <p>
                There is no partial credit on a live broadcast. The stream is up or it is not, the
                sound is there or it is not, and the client finds out at the same moment the audience
                does.
              </p>
              <p>
                So we plan for failure rather than hope against it: redundant encoding on every
                stream, spare bodies and glass in the van, a second audio path, and a crew briefed on
                what to do when the primary fails. It costs a little more on the quote and it is the
                reason we still get the second booking.
              </p>
              <p>
                On the post side, clients keep their rushes and their rights. We hand over the full
                card dump alongside the graded master. It is your footage.
              </p>
            </Prose>
          </div>
          <div className="space-y-6">
            <StatusNote status={company.status} />
            <div className="rounded-sm border border-line bg-white p-6">
              <h3 className="text-h3">Also available</h3>
              <p className="mt-3 text-sm text-ink-600">
                Cameras, lighting, audio, LED screens and a mobile stage are available to hire
                separately, with or without our crew.
              </p>
              <a
                href="/media-house/equipment-rental"
                className="mt-4 inline-block text-sm underline underline-offset-4"
              >
                Equipment rental &rarr;
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Explore" title="Where to next" />
        <Grid cols={3}>
          <LinkCard href="/media-house/portfolio" title="Portfolio" body="The kinds of work the house takes on, filterable by category." footer="See the work" />
          <LinkCard href="/media-house/equipment-rental" title="Equipment rental" body="Cameras, lighting, audio, screens, grip and the mobile stage." footer="See the catalogue" />
          <LinkCard href="/media-house/book" title="Book us" body="Outline the project and we will come back with a scoped quote and dates." footer="Request a quote" />
        </Grid>
      </Section>

      <CTABanner
        eyebrow="Book"
        title="Got a date in mind?"
        body="Crew and kit get committed early in busy season. The sooner you ask, the likelier the answer is yes."
        primary={{ href: '/media-house/book', label: 'Request a quote' }}
        secondary={{ href: '/media-house/services', label: 'See the services' }}
      />
    </>
  );
}
