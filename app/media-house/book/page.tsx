import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { FormPanel } from '@/components/forms/FormPanel';
import { BookingForm } from '@/components/forms/BookingForm';
import { requireCompany } from '@/lib/cms';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('media-house');

export const metadata = pageMetadata({
  title: 'Book Us',
  description:
    'Request a scoped quote from God’s Plan Media House — production, livestreaming, event production or equipment hire.',
  path: '/media-house/book',
  company,
});

export default function BookPage() {
  return (
    <>
      <Hero
        eyebrow="Book us"
        title="Tell us the date and the outcome"
        lede="We will come back with a scoped quote: crew, kit, days, deliverables and what is excluded."
      />

      <Section tone="white">
        <FormPanel
          title="Request a quote"
          aside={
            <div className="space-y-6">
              <div className="rounded-sm border border-line bg-cream-50 p-6">
                <h3 className="text-h3">What helps us quote fast</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-600">
                  <li>The date, or the window you are working in</li>
                  <li>Where it is, and whether we need to travel</li>
                  <li>What you need at the end — a film, a stream, stills, all three</li>
                  <li>Roughly what you can spend</li>
                </ul>
              </div>
              <div className="rounded-sm border border-line p-6">
                <h3 className="text-h3">Urgent?</h3>
                <p className="mt-3 text-sm text-ink-600">
                  For a date inside two weeks, email{' '}
                  <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
                    {GROUP.email}
                  </a>{' '}
                  and put the date in the subject line.
                </p>
              </div>
            </div>
          }
        >
          <BookingForm />
        </FormPanel>
      </Section>
    </>
  );
}
