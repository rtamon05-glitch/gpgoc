import { Section } from '@/components/ui/Section';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Terms of use',
  description: "Terms governing use of the God's Plan Group of Company website.",
  path: '/legal/terms',
});

export default function TermsPage() {
  return (
    <Section tone="white" width="narrow">
      <h1 className="text-display">Terms of use</h1>
      <span className="gp-rule mt-6" />
      <div className="mt-8 space-y-6 text-ink-600">
        <p className="rounded-sm border border-gold-500/50 bg-gold-100/40 p-5 text-sm text-navy-900">
          <strong>Draft for legal review.</strong> These terms must be reviewed by counsel before
          launch.
        </p>

        <h2 className="text-h2">About this site</h2>
        <p>
          This website is published by {GROUP.name}. It describes the group and its six companies,
          including ventures that are planned or in development rather than operating.
        </p>

        <h2 className="text-h2">Forward-looking statements</h2>
        <p>
          Descriptions of facilities, products, services and programmes that have not yet been built
          are plans, not commitments. They depend on land, financing, statutory approval, feasibility
          outcomes and construction — any of which may change the plan or stop it. Where a page
          describes something that does not exist today, it is labelled as planned or in development.
        </p>

        <h2 className="text-h2">Not an offer</h2>
        <p>
          Nothing on this site is an offer to sell or a solicitation of an offer to buy any security
          or investment product, and nothing here should be relied on as investment, legal, tax or
          financial advice. No return is promised, projected or guaranteed.
        </p>

        <h2 className="text-h2">Enquiries and bookings</h2>
        <p>
          Submitting an enquiry form does not create a contract. Prices, availability and terms for
          any product, service or course are agreed separately in writing.
        </p>

        <h2 className="text-h2">Intellectual property</h2>
        <p>
          The God&apos;s Plan name, crest and wordmark, and the content of this site, belong to the
          group and may not be reproduced without permission.
        </p>

        <h2 className="text-h2">Contact</h2>
        <p>
          Questions about these terms:{' '}
          <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
            {GROUP.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
