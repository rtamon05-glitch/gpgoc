import { Section, SectionHeader } from '@/components/ui/Section';
import { Hero } from '@/components/ui/Hero';
import { ButtonLink } from '@/components/ui/Button';
import { Logo } from '@/components/brand/Logo';
import { StatusPill } from '@/components/ui/StatusPill';
import { PrintButton } from './PrintButton';
import { requireCompany } from '@/lib/cms';
import { PROSPECTUS_SECTIONS, DEVELOPMENT_CITY_ZONES, FOUNDATION_PROGRAMS } from '@/content/foundation';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('foundation');

export const metadata = pageMetadata({
  title: 'Prospectus',
  description:
    'A summary prospectus for God’s Plan Foundation — who we are, what we run today, the Development City master plan, and how to support it.',
  path: '/foundation/prospectus',
  company,
});

/**
 * Prospectus.
 *
 * Published as a print-optimised web page rather than a PDF download: the
 * designed PDF has not been supplied, and a page that prints correctly is more
 * useful — and stays in sync with the rest of the site — than a stale
 * attachment. Swap in a real PDF at `/public/foundation-prospectus.pdf` and
 * point the button at it when artwork arrives.
 */
export default function ProspectusPage() {
  return (
    <>
      <div className="print:hidden">
        <Hero
          tone="cream"
          eyebrow="Prospectus"
          title="God’s Plan Foundation — summary prospectus"
          lede="Everything a prospective donor or partner needs on two printed pages."
          actions={
            <>
              <PrintButton />
              <ButtonLink href="/foundation/donate" variant="secondary" size="lg">
                Support a programme
              </ButtonLink>
            </>
          }
        />
      </div>

      <Section tone="white" width="narrow" as="article">
        <header className="hidden print:mb-8 print:block">
          <Logo variant="full" crestSize={64} />
        </header>

        <SectionHeader eyebrow="Summary prospectus" title="God’s Plan Foundation" />

        <div className="space-y-8">
          {PROSPECTUS_SECTIONS.map((section) => (
            <section key={section.title}>
              <h3 className="text-h3">{section.title}</h3>
              <p className="mt-2 text-ink-600">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 border-t border-line pt-10">
          <h3 className="text-h3">Programmes and their stage</h3>
          <ul className="mt-4 space-y-3">
            {FOUNDATION_PROGRAMS.map((program) => (
              <li key={program.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
                <span className="text-ink-900">{program.title}</span>
                <StatusPill status={program.stage} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-line pt-10">
          <h3 className="text-h3">Development City — the six zones</h3>
          <p className="mt-2 text-sm text-ink-400">
            All six zones are in planning. None has been built.
          </p>
          <ul className="mt-4 space-y-3">
            {DEVELOPMENT_CITY_ZONES.map((zone) => (
              <li key={zone.id}>
                <p className="font-medium text-ink-900">{zone.title}</p>
                <p className="text-sm text-ink-600">{zone.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-12 border-t border-line pt-8 text-sm text-ink-600">
          <p className="font-medium text-ink-900">Contact</p>
          <p className="mt-1">
            {GROUP.address.line1}, {GROUP.address.line2}, {GROUP.address.country}
          </p>
          <p>{GROUP.email}</p>
          <p className="mt-5 text-xs text-ink-400">{GROUP.disclosure}</p>
        </footer>
      </Section>
    </>
  );
}
