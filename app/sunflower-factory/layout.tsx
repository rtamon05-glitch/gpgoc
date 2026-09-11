import type { ReactNode } from 'react';
import { SubsidiaryShell } from '@/components/layout/SubsidiaryShell';
import { requireCompany } from '@/lib/cms';
import { companySchema, jsonLd } from '@/lib/seo';

const company = requireCompany('sunflower-factory');

export default function SunflowerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(companySchema(company))} />
      <SubsidiaryShell company={company}>{children}</SubsidiaryShell>
    </>
  );
}
