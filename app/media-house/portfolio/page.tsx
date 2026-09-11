import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { PortfolioGrid } from './PortfolioGrid';
import { requireCompany } from '@/lib/cms';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/content/media-house';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('media-house');

export const metadata = pageMetadata({
  title: 'Portfolio',
  description:
    'The kinds of work God’s Plan Media House takes on — film, photography, livestreaming, documentary and event production.',
  path: '/media-house/portfolio',
  company,
});

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio"
        title="The work we take on"
        lede="Filter by category to see the shape of each kind of job — crew, deliverables and what you end up holding."
      />

      <Section tone="white">
        <p className="mb-10 max-w-3xl rounded-sm border-l-2 border-accent bg-cream-50 py-4 pl-5 text-sm text-ink-600">
          <strong>About this page.</strong> These entries describe the kinds of work the house takes
          on, not named client projects. Client credits and showreel footage go up as each client
          clears them — we would rather show six honest descriptions than six borrowed logos.
        </p>
        <PortfolioGrid items={PORTFOLIO_ITEMS} categories={PORTFOLIO_CATEGORIES} />
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Showreel" title="Want to see actual footage?" />
        <Prose>
          <p>
            We keep a current reel and a set of full-length pieces that clients have cleared for
            sharing. They are not published here, because several were made under confidentiality
            terms that allow us to show them individually but not to post them.
          </p>
          <p>
            Ask, and we will send you the reel and whichever full pieces are closest to what you are
            planning.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Ask for the reel"
        body="Tell us what you are planning and we will send the closest examples we are cleared to share."
        primary={{ href: '/media-house/book', label: 'Request the reel' }}
        secondary={{ href: '/media-house/services', label: 'See the services' }}
      />
    </>
  );
}
