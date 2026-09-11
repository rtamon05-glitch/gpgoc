import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { listCompanies } from '@/lib/cms';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description: "Contact God's Plan Group of Company — one enquiry form routed to the right company.",
  path: '/contact',
});

export default function ContactPage() {
  const companies = listCompanies();
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Talk to the group"
        lede="One form, routed to whichever of the six companies your enquiry concerns."
      />

      <Section tone="white">
        <FormPanel
          title="Send us a message"
          aside={
            <div className="space-y-8">
              <div className="rounded-sm border border-line bg-cream-50 p-6">
                <h3 className="text-h3">Group office</h3>
                <address className="mt-3 space-y-1 text-sm not-italic text-ink-600">
                  <p>{GROUP.address.line1}</p>
                  <p>{GROUP.address.line2}</p>
                  <p>{GROUP.address.country}</p>
                </address>
                <p className="mt-4 text-sm text-ink-600">
                  <a href={`mailto:${GROUP.email}`} className="underline underline-offset-4">
                    {GROUP.email}
                  </a>
                </p>
              </div>
              <div className="rounded-sm border border-line p-6">
                <h3 className="text-h3">Looking for something specific?</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-600">
                  <li>Donating or sponsoring — <a className="underline underline-offset-4" href="/foundation/donate">Foundation giving</a></li>
                  <li>Booking a crew — <a className="underline underline-offset-4" href="/media-house/book">Media House booking</a></li>
                  <li>Buying in bulk — <a className="underline underline-offset-4" href="/sunflower-factory/wholesale">wholesale &amp; export</a></li>
                  <li>Enrolling on a course — <a className="underline underline-offset-4" href="/farm/agri-school">Agri School</a></li>
                  <li>Investing — <a className="underline underline-offset-4" href="/invest">invest &amp; partner</a></li>
                </ul>
              </div>
            </div>
          }
        >
          <InquiryForm
            type="contact"
            companyId={null}
            showOrganisation
            messageLabel="Your message"
            extraFields={[
              {
                name: 'company',
                label: 'Which company is this about?',
                type: 'select',
                required: true,
                options: [...companies.map((c) => c.name), 'The group as a whole'],
              },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
