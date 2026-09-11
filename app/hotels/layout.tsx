import type { ReactNode } from 'react';
import { SubsidiaryShell } from '@/components/layout/SubsidiaryShell';
import { requireCompany } from '@/lib/cms';
import { companySchema, jsonLd } from '@/lib/seo';

const company = requireCompany('hotels');

export default function HotelsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/*
        Typed as a plain Organization, not schema.org/Hotel: the property does
        not exist, and Hotel markup would invite search engines to present it
        as a bookable place. See lib/seo.ts.
      */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(companySchema(company))} />
      <SubsidiaryShell company={company}>{children}</SubsidiaryShell>
    </>
  );
}
