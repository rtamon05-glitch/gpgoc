import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, FeatureItem, Prose } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { TECH_ROLES } from '@/content/tech';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('tech');

export const metadata = pageMetadata({
  title: 'Careers',
  description: 'Engineering, security, data and teaching roles at God’s Plan Tech.',
  path: '/tech/careers',
  company,
});

export default function TechCareersPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Careers"
        title="Engineers who want to build the thing and teach it"
        lede="A small team, real ownership, and a training academy you are expected to spend part of your week in."
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Roles"
          title="Who we are looking for"
          lede="We hire continuously against these shapes rather than posting individual vacancies."
        />
        <Grid cols={2}>
          {TECH_ROLES.map((role) => (
            <FeatureItem key={role.title} title={role.title} body={role.body} />
          ))}
        </Grid>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="How we hire" title="What the process looks like" />
        <Prose>
          <p>
            A conversation, a practical exercise close to the work you would actually do, and a
            session with the team you would join. No whiteboard algorithm puzzles, no unpaid
            multi-week project.
          </p>
          <p>
            We will tell you the salary range in the first conversation, and we will tell you within a
            week either way.
          </p>
        </Prose>
      </Section>

      <Section tone="white">
        <FormPanel
          title="Apply"
          description="Send us what you have built. A repository, a deployed thing, or a description of a system you own — all more useful than a CV."
        >
          <InquiryForm
            type="contact"
            companyId="tech"
            submitLabel="Send application"
            messageLabel="Tell us about your work"
            messagePlaceholder="What you have built, what you owned, and what you would want to work on here."
            extraFields={[
              {
                name: 'role',
                label: 'Which role?',
                type: 'select',
                required: true,
                options: [...TECH_ROLES.map((r) => r.title), 'Something else'],
              },
              { name: 'portfolio', label: 'Repository or portfolio URL', placeholder: 'https://' },
              { name: 'notice', label: 'Notice period', placeholder: 'e.g. 1 month' },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
