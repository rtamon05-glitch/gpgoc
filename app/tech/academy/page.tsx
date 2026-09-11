import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { ACADEMY_COURSES } from '@/content/tech';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('tech');

export const metadata = pageMetadata({
  title: 'Academy',
  description:
    'Software engineering, cybersecurity and applied data courses at the God’s Plan Tech Academy, taught alongside live delivery work.',
  path: '/tech/academy',
  company,
});

export default function AcademyPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Academy"
        title="Trained on real systems, under review"
        lede="Places are limited by how many engineers we have to supervise them. That is the honest constraint, and we would rather run small cohorts properly."
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Courses"
          title="Three courses"
          lede="Applications are assessed on aptitude, not on prior qualifications. Fees and intake dates are confirmed with each applicant."
        />
        <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {ACADEMY_COURSES.map((course) => (
            <article key={course.id} id={course.id} className="scroll-mt-28 bg-white p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-h3">{course.title}</h3>
                <p className="text-sm text-ink-400">
                  {course.duration} · {course.format}
                </p>
              </div>
              <p className="mt-3 max-w-3xl text-ink-600">{course.description}</p>
              <h4 className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
                By the end you can
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-sm text-ink-600">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" width="narrow">
        <SectionHeader eyebrow="Approach" title="Why we teach on live work" />
        <Prose>
          <p>
            A training course that runs on exercises produces people who are good at exercises. The
            gap between finishing a tutorial and being useful on a team is the part nobody teaches,
            and it is where most graduates stall.
          </p>
          <p>
            So trainees sit with the delivery team from early on and contribute to systems that have
            clients. Their work goes through the same review as everyone else&apos;s. It is slower
            for the team, and it is the only version of this that produces engineers rather than
            certificates.
          </p>
        </Prose>
      </Section>

      <Section tone="white">
        <FormPanel
          title="Apply for a place"
          description="Tell us which course and a little about yourself. No prior qualification is required — we assess on aptitude."
        >
          <InquiryForm
            type="enroll"
            companyId="tech"
            submitLabel="Submit application"
            messageLabel="Tell us about yourself"
            messagePlaceholder="What you have built or taught yourself so far, and why this course."
            extraFields={[
              {
                name: 'course',
                label: 'Which course?',
                type: 'select',
                required: true,
                options: [...ACADEMY_COURSES.map((c) => c.title), 'Not sure yet'],
              },
              {
                name: 'availability',
                label: 'When could you start?',
                placeholder: 'e.g. immediately, or from March',
              },
              {
                name: 'funding',
                label: 'Would you need a funded place?',
                type: 'select',
                options: ['Yes, I would need funding', 'No, I can pay fees', 'Not sure'],
                help: 'Funded places are supported by God’s Plan Foundation and are limited.',
              },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
