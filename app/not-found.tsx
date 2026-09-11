import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { listCompanies } from '@/lib/cms';

export default function NotFound() {
  return (
    <Section tone="white" width="narrow">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">404</p>
      <h1 className="mt-4 text-display">We could not find that page</h1>
      <span className="gp-rule mt-6" />
      <p className="mt-6 text-lg text-ink-600">
        The link may be out of date, or the page may have moved as a section was built out.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to the homepage</ButtonLink>
        <ButtonLink href="/companies" variant="secondary">
          All six companies
        </ButtonLink>
      </div>
      <ul className="mt-12 grid gap-2 border-t border-line pt-8 sm:grid-cols-2">
        {listCompanies().map((company) => (
          <li key={company.slug}>
            <a href={`/${company.slug}`} className="text-sm underline underline-offset-4 hover:text-accent">
              {company.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
