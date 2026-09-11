import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose } from '@/components/ui/Bits';
import { FormPanel } from '@/components/forms/FormPanel';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { requireCompany } from '@/lib/cms';
import { AGRI_SCHOOL_COURSES } from '@/content/farm';
import { jsonLd, pageMetadata, SITE_URL } from '@/lib/seo';

const company = requireCompany('farm');

export const metadata = pageMetadata({
  title: 'Agri School',
  description:
    'Six practical agricultural courses taught on the working farm — poultry, piggery, fish farming, feed production, agribusiness management and agricultural entrepreneurship.',
  path: '/farm/agri-school',
  company,
});

/** Course catalogue markup so the courses can surface in search results. */
const courseListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'God’s Plan Agri School courses',
  itemListElement: AGRI_SCHOOL_COURSES.map((course, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Course',
      name: course.title,
      description: course.description,
      url: `${SITE_URL}/farm/agri-school#${course.id}`,
      provider: {
        '@type': 'Organization',
        name: 'God’s Plan Farm — Agri School',
        url: `${SITE_URL}/farm`,
      },
    },
  })),
};

export default function AgriSchoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(courseListSchema)} />

      <Hero
        eyebrow="Agri School"
        title="Taught on the farm that has to live with the results"
        lede="Six practical courses. No prior qualification required — we teach people who intend to farm, not people collecting certificates."
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="Courses"
          title="Six courses"
          lede="Intake dates, fees and class sizes are confirmed with each applicant. Classes are kept small because the teaching happens in the houses and at the ponds."
        />
        <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {AGRI_SCHOOL_COURSES.map((course) => (
            <article key={course.id} id={course.id} className="scroll-mt-28 bg-white p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-h3">{course.title}</h2>
                <p className="text-sm text-ink-400">
                  {course.duration} · {course.format}
                </p>
              </div>
              <p className="mt-3 max-w-3xl text-ink-600">{course.description}</p>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
                By the end you can
              </h3>
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
        <SectionHeader eyebrow="Approach" title="Why every course teaches the money" />
        <Prose>
          <p>
            Most agricultural training teaches husbandry and stops there. Graduates leave able to
            raise a healthy bird and unable to say whether the batch made a profit — and a farm that
            cannot answer that question closes within two seasons, however good the birds looked.
          </p>
          <p>
            So costing and record-keeping are taught inside every course, not left to the business
            module. On the poultry course you cost a batch. On the feed course you work out what a
            ration costs to make and what it returns. The husbandry is the easy half.
          </p>
          <p>
            Funded places are available through God&apos;s Plan Foundation for applicants who cannot
            pay fees. Say so on the form — it does not affect whether you are offered a place.
          </p>
        </Prose>
      </Section>

      <Section tone="white">
        <FormPanel
          title="Enrol on a course"
          description="Tell us which course and when you could start. We will come back with the next intake date, the fee and what to bring."
        >
          <InquiryForm
            type="enroll"
            companyId="farm"
            submitLabel="Apply for a place"
            messageLabel="Tell us about yourself"
            messagePlaceholder="What you farm now or intend to farm, and what you want to get out of the course."
            extraFields={[
              {
                name: 'course',
                label: 'Which course?',
                type: 'select',
                required: true,
                options: [...AGRI_SCHOOL_COURSES.map((c) => c.title), 'Not sure yet'],
              },
              { name: 'availability', label: 'When could you start?', placeholder: 'e.g. next intake' },
              {
                name: 'funding',
                label: 'Would you need a funded place?',
                type: 'select',
                options: ['Yes, I would need funding', 'No, I can pay fees', 'Not sure'],
                help: 'Funded places are supported by God’s Plan Foundation and do not affect selection.',
              },
            ]}
          />
        </FormPanel>
      </Section>
    </>
  );
}
