import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Prose, Steps } from '@/components/ui/Bits';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { MEDIA_SERVICES } from '@/content/media-house';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('media-house');

export const metadata = pageMetadata({
  title: 'Services',
  description:
    'Video production, photography, livestreaming, TV and film, event production and mobile stage from God’s Plan Media House.',
  path: '/media-house/services',
  company,
});

const PROCESS = [
  { title: 'Brief', body: 'What the film or the event is for, who it is for, and what success looks like. Usually a phone call.' },
  { title: 'Quote', body: 'A scoped quote: crew, kit, days, deliverables and what is excluded. No surprises on the invoice.' },
  { title: 'Prep', body: 'Recce, schedule, shot list or run of show, and a technical plan including the backups.' },
  { title: 'Shoot', body: 'The day itself, run by a producer who owns the schedule so the director can direct.' },
  { title: 'Post', body: 'Edit, grade, sound and graphics, with a defined number of review rounds agreed up front.' },
  { title: 'Deliver', body: 'Masters in the formats you need, plus your full rushes. You keep the footage and the rights.' },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        tone="cream"
        eyebrow="Services"
        title="What we do, and how a job runs"
        lede="Six services, one process. The process is the part clients actually buy."
      />

      <Section tone="white">
        <SectionHeader eyebrow="Services" title="In detail" />
        <div className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {MEDIA_SERVICES.map((service) => (
            <article key={service.id} id={service.id} className="scroll-mt-28 bg-white p-7">
              <h2 className="text-h3">{service.title}</h2>
              <p className="mt-3 max-w-3xl text-ink-600">{service.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="Process" title="How a booking runs" />
        <Steps steps={PROCESS} />
      </Section>

      <Section tone="white" width="narrow">
        <SectionHeader eyebrow="Pricing" title="Why there is no price list" />
        <Prose>
          <p>
            A two-camera interview in one room and a four-camera live broadcast with a stage build
            are both &ldquo;a day&rsquo;s filming&rdquo;, and they cost entirely different amounts.
            Published day rates would either be so high they scare off the simple jobs or so low they
            are meaningless on the complex ones.
          </p>
          <p>
            So we quote. Tell us the outcome, the date and roughly what you can spend, and you will
            get a scoped quote with the crew, the kit, the days and the exclusions written down.
          </p>
        </Prose>
      </Section>

      <CTABanner
        title="Get a quote"
        body="Outline the project and we will come back with crew, kit, days and a price."
        primary={{ href: '/media-house/book', label: 'Request a quote' }}
        secondary={{ href: '/media-house/equipment-rental', label: 'Hire kit only' }}
      />
    </>
  );
}
