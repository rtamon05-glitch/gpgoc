import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { requireCompany } from '@/lib/cms';

const company = requireCompany('farm');

export const alt = `${company.name} — ${company.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage({
    eyebrow: company.shortName,
    title: company.tagline,
    accent: company.accent.onDark,
    status: company.status,
    footer: company.sector,
  });
}
