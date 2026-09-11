import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid } from '@/components/ui/Bits';
import { LinkCard } from '@/components/ui/Card';
import { StatusPill, StatusNote } from '@/components/ui/StatusPill';
import { listCompanies } from '@/lib/cms';
import { GROUP } from '@/content/group';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Our Companies',
  description:
    "The six companies of God's Plan Group — Foundation, Hotels, Tech, Media House, Sunflower Factory and Farm — and the real-world stage each has reached.",
  path: '/companies',
});

export default function CompaniesPage() {
  const companies = listCompanies();
  const byStatus = {
    operational: companies.filter((c) => c.status === 'operational'),
    'in-development': companies.filter((c) => c.status === 'in-development'),
    planning: companies.filter((c) => c.status === 'planning'),
  };

  return (
    <>
      <Hero
        eyebrow="Our companies"
        title="Six companies, six different starting lines"
        lede="Grouped below by how far along each one actually is, rather than by how impressive each one sounds."
      />

      <Section tone="white">
        <SectionHeader
          eyebrow="All six"
          title="The group at a glance"
          lede={GROUP.disclosure}
        />
        <Grid cols={3}>
          {companies.map((company) => (
            <LinkCard
              key={company.slug}
              href={`/${company.slug}`}
              eyebrow={company.sector}
              title={company.name}
              body={company.summary}
              accent={company.accent.color}
              footer={<StatusPill status={company.status} />}
            />
          ))}
        </Grid>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="By stage" title="What that means in practice" />
        <div className="space-y-10">
          {(['operational', 'in-development', 'planning'] as const).map((status) =>
            byStatus[status].length ? (
              <div key={status}>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <StatusPill status={status} />
                  <span className="text-sm text-ink-400">
                    {byStatus[status].length}{' '}
                    {byStatus[status].length === 1 ? 'company' : 'companies'}
                  </span>
                </div>
                <StatusNote status={status} />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {byStatus[status].map((company) => (
                    <li
                      key={company.slug}
                      className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-ink-600"
                    >
                      {company.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null,
          )}
        </div>
      </Section>
    </>
  );
}
