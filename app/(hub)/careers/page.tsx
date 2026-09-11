import Link from 'next/link';
import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { listCompanies } from '@/lib/cms';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Careers',
  description:
    "Careers across God's Plan Group — engineering, agriculture, production, hospitality development and foundation programmes.",
  path: '/careers',
});

const WHAT_WE_OFFER = [
  {
    title: 'Real responsibility, early',
    body: 'The companies are young. People who can run something end up running it, rather than waiting a decade for the chance.',
  },
  {
    title: 'Training that is funded, not promised',
    body: 'The Tech Academy and the Agri School are part of the group, not a perk bolted on. Staff train through them.',
  },
  {
    title: 'Work that stays in the region',
    body: 'The point of building here is that the jobs, the skills and the supply chains stay here.',
  },
];

export default function CareersPage() {
  const companies = listCompanies();
  return (
    <>
      <Hero
        eyebrow="Careers"
        title="Build something that outlasts you"
        lede="We are not going to pretend there is a long list of open roles. Hiring happens company by company as each one reaches the stage that needs the role."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Why here" title="What the group offers" />
        <Grid cols={3}>
          {WHAT_WE_OFFER.map((item) => (
            <FeatureItem key={item.title} title={item.title} body={item.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader
          eyebrow="Open roles"
          title="Where hiring happens"
          lede="Vacancies are posted by the company that needs them. Tech publishes its engineering roles on its own careers page; the rest hire through the group."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {companies.map((company) => (
            <li key={company.slug} className="rounded-sm border border-line bg-white p-6">
              <h3 className="text-h3">{company.name}</h3>
              <p className="mt-2 text-sm text-ink-600">{company.sector}</p>
              <Link
                href={company.slug === 'tech' ? '/tech/careers' : `/${company.slug}`}
                className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-accent-ink"
              >
                {company.slug === 'tech' ? 'Tech careers' : `Visit ${company.shortName}`} &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <FormPanel
          title="Register your interest"
          description="No vacancy that fits? Tell us what you do and which company you would want to do it in. We keep applications on file and come back to them when a role opens."
        >
          <InquiryForm
            type="contact"
            companyId={null}
            submitLabel="Register interest"
            messageLabel="Tell us about your experience"
            messagePlaceholder="What you do, where you have done it, and what you would want to build here."
            extraFields={[
              {
                name: 'company',
                label: 'Which company?',
                type: 'select',
                required: true,
                options: [...companies.map((c) => c.name), 'Open to any'],
              },
              { name: 'discipline', label: 'Your discipline', placeholder: 'e.g. poultry husbandry, back-end engineering' },
              { name: 'portfolio', label: 'Portfolio or profile URL', placeholder: 'https://' },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
