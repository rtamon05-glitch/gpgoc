import type { CompanyStatus } from '@/content/types';

/**
 * Rendered wording for each execution stage.
 *
 * Deliberately blunt: the brief requires that the site never implies a
 * facility is open, a product is on sale, or a service is bookable before it
 * is. Every status pill on the site reads from this table.
 */
export const STATUS_META: Record<
  CompanyStatus,
  { label: string; description: string; tone: 'planning' | 'building' | 'live' }
> = {
  planning: {
    label: 'In planning',
    description:
      'Master-planning and pre-development. Nothing on this page is available to buy, book or visit yet.',
    tone: 'planning',
  },
  'in-development': {
    label: 'In development',
    description:
      'Under active build-out. Some activities have started; anything described as planned is not yet operating.',
    tone: 'building',
  },
  operational: {
    label: 'Operational',
    description: 'Trading today. Described in present tense because it exists today.',
    tone: 'live',
  },
};

export function statusLabel(status: CompanyStatus): string {
  return STATUS_META[status].label;
}
