import { Section } from '@/components/ui/Section';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy notice',
  description: "How God's Plan Group of Company handles the personal data submitted through this website.",
  path: '/legal/privacy',
});

export default function PrivacyPage() {
  return (
    <Section tone="white" width="narrow">
      <h1 className="text-display">Privacy notice</h1>
      <span className="gp-rule mt-6" />
      <div className="mt-8 space-y-6 text-ink-600">
        <p className="rounded-sm border border-gold-500/50 bg-gold-100/40 p-5 text-sm text-navy-900">
          <strong>Draft for legal review.</strong> This notice describes what the website actually
          does today. It has not yet been reviewed by counsel against the data-protection law of
          every jurisdiction the group operates in, and must be before launch.
        </p>

        <h2 className="text-h2">What we collect</h2>
        <p>
          The only personal data this website collects is what you type into one of its enquiry
          forms: your name, email address, and optionally your phone number, organisation and any
          details specific to that form — for example the course you want to enrol on, or the dates
          you need a crew.
        </p>

        <h2 className="text-h2">Why we collect it</h2>
        <p>
          To answer your enquiry, and to route it to the company it concerns. We do not sell it, and
          we do not add you to a marketing list on the strength of an enquiry.
        </p>

        <h2 className="text-h2">Where it goes</h2>
        <p>
          Submissions are stored in the group&apos;s Firestore database and are visible to the staff
          of the company your enquiry concerns and to the group office. Where an enquiry involves a
          payment, the payment itself is handled by our payment processor, which holds the card or
          mobile-money details — we do not.
        </p>

        <h2 className="text-h2">Analytics</h2>
        <p>
          If analytics is enabled, this site uses Google Analytics 4 to count page views and form
          submissions in aggregate. It is not used to identify individual visitors.
        </p>

        <h2 className="text-h2">How long we keep it</h2>
        <p>
          Enquiries are retained while they are live and for a reasonable period afterwards for
          record-keeping. Ask us to delete yours and we will, unless we are required to keep it.
        </p>

        <h2 className="text-h2">Your rights</h2>
        <p>
          You can ask what we hold about you, ask us to correct it, or ask us to delete it. Write to{' '}
          <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
            {GROUP.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
