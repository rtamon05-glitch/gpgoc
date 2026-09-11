import type { Company } from './types';

/**
 * The six operating companies.
 *
 * `status` is the single most important field on this page: it decides the
 * tense every page in that subsidiary is written in. Change it only when the
 * client confirms the real-world stage has changed.
 */
export const COMPANIES: Company[] = [
  {
    id: 'foundation',
    slug: 'foundation',
    name: "God's Plan Foundation",
    shortName: 'Foundation',
    sector: 'NGO / Development',
    tagline: 'Building People. Transforming Communities. Creating the Future.',
    summary:
      "The group's development arm. It runs community programmes today and is master-planning God's Plan Development City — an integrated education, health, technology, agriculture and industry campus.",
    status: 'in-development',
    accent: { color: '#c9a227', soft: '#f6ecd2', contrast: '#0b1f3a', ink: '#7f6410' },
    mood: 'light',
    nav: [
      { href: '/foundation', label: 'Overview' },
      { href: '/foundation/programs', label: 'Programmes' },
      { href: '/foundation/development-city', label: 'Development City' },
      { href: '/foundation/impact', label: 'Impact' },
      { href: '/foundation/donate', label: 'Donate' },
      { href: '/foundation/prospectus', label: 'Prospectus' },
    ],
    vision:
      'Communities where a child can be educated, a patient treated, a farmer paid fairly and a graduate employed — without leaving home.',
    mission:
      'To build the institutions that make that possible, starting with the people who will run them.',
    coreValues: [
      { title: 'Dignity', body: 'Programmes are designed with beneficiaries, not for them.' },
      { title: 'Permanence', body: 'We build institutions meant to outlive their founders.' },
      { title: 'Accountability', body: 'Every donation is traceable to a named programme.' },
    ],
  },
  {
    id: 'hotels',
    slug: 'hotels',
    name: "God's Plan Hotels",
    shortName: 'Hotels',
    sector: 'Ultra-luxury hospitality',
    tagline: 'Where Luxury Meets Purpose.',
    summary:
      'A planned ultra-luxury hospitality company built around a flagship property with 300+ keys, signature dining, a destination spa and branded residences.',
    status: 'planning',
    accent: { color: '#c9a227', soft: '#efe6d0', contrast: '#0b1f3a', ink: '#7f6410' },
    mood: 'dark',
    nav: [
      { href: '/hotels', label: 'Overview' },
      { href: '/hotels/flagship', label: 'The Flagship' },
      { href: '/hotels/dining', label: 'Dining' },
      { href: '/hotels/spa-wellness', label: 'Spa & Wellness' },
      { href: '/hotels/residences', label: 'Residences' },
      { href: '/hotels/events-weddings', label: 'Events & Weddings' },
      { href: '/hotels/membership', label: 'Privilege' },
      { href: '/hotels/invest', label: 'Invest' },
    ],
    vision:
      'A property that earns an international reputation while employing, training and buying locally.',
    mission:
      'To design and develop hospitality of a standard the region has not yet been offered.',
    coreValues: [
      { title: 'Discretion', body: 'Service that anticipates rather than announces.' },
      { title: 'Craft', body: 'Materials, food and finish specified to last decades.' },
      { title: 'Local depth', body: 'A luxury house staffed and supplied from its own region.' },
    ],
  },
  {
    id: 'tech',
    slug: 'tech',
    name: "God's Plan Tech",
    shortName: 'Tech',
    sector: 'Software / AI / Blockchain / FinTech',
    tagline: 'Building the Technology. Powering the Future.',
    summary:
      'The engineering arm of the group: software delivery, applied AI, cybersecurity, financial-technology research and a training academy.',
    status: 'in-development',
    accent: { color: '#2f6fed', soft: '#e3ecfd', contrast: '#0b1f3a', ink: '#2a63d6' },
    mood: 'light',
    nav: [
      { href: '/tech', label: 'Overview' },
      { href: '/tech/software', label: 'Software' },
      { href: '/tech/ai', label: 'AI' },
      { href: '/tech/blockchain-fintech', label: 'Blockchain & FinTech' },
      { href: '/tech/academy', label: 'Academy' },
      { href: '/tech/careers', label: 'Careers' },
    ],
    vision:
      'Software built in the region, to the standard expected anywhere else, by engineers trained here.',
    mission:
      'To deliver working systems for the group and its clients, and to train the people who maintain them.',
    coreValues: [
      { title: 'Shipped, not shown', body: 'We describe products that run, and label research as research.' },
      { title: 'Security first', body: 'Threat modelling before feature work, on every engagement.' },
      { title: 'Teaching', body: 'Every project is expected to leave behind someone newly capable.' },
    ],
  },
  {
    id: 'media-house',
    slug: 'media-house',
    name: "God's Plan Media House",
    shortName: 'Media House',
    sector: 'Production / Broadcasting / Events',
    tagline: 'Telling the Stories That Move People.',
    summary:
      'Production and live-event company covering film and video, photography, livestreaming, event production and equipment rental.',
    status: 'in-development',
    accent: { color: '#c9a227', soft: '#f2e8cf', contrast: '#0b1f3a', ink: '#7f6410' },
    mood: 'light',
    nav: [
      { href: '/media-house', label: 'Overview' },
      { href: '/media-house/portfolio', label: 'Portfolio' },
      { href: '/media-house/services', label: 'Services' },
      { href: '/media-house/equipment-rental', label: 'Equipment Rental' },
      { href: '/media-house/book', label: 'Book Us' },
    ],
    vision: 'A production house the region books first, and trusts on live broadcast.',
    mission: 'To produce work that stands on its own, on schedule and on budget.',
    coreValues: [
      { title: 'Reliability', body: 'Live work either happens or it does not. We plan for the former.' },
      { title: 'Craft', body: 'Coverage, sound and grade treated as equally non-negotiable.' },
      { title: 'Ownership', body: 'Clients keep their rushes and their rights.' },
    ],
  },
  {
    id: 'sunflower-factory',
    slug: 'sunflower-factory',
    name: "God's Plan Sunflower Factory",
    shortName: 'Sunflower Factory',
    sector: 'Agro-industrial (edible oil)',
    tagline: 'From Our Fields to Your Table.',
    summary:
      'A planned sunflower crushing and refining plant producing bottled and bulk edible oil, supplied by a contract-farming network.',
    status: 'planning',
    accent: { color: '#5c7a3d', soft: '#e8eddf', contrast: '#0b1f3a', ink: '#506b35' },
    mood: 'light',
    nav: [
      { href: '/sunflower-factory', label: 'Overview' },
      { href: '/sunflower-factory/products', label: 'Products' },
      { href: '/sunflower-factory/quality', label: 'Quality & Process' },
      { href: '/sunflower-factory/farmers', label: 'Farmer Partnership' },
      { href: '/sunflower-factory/wholesale', label: 'Wholesale & Export' },
    ],
    vision: 'Edible oil milled where the seed is grown, at a price the region can carry.',
    mission:
      'To build the crushing, refining and bottling capacity — and the farmer network that feeds it.',
    coreValues: [
      { title: 'Traceability', body: 'Every batch traceable to the cooperatives that grew it.' },
      { title: 'Fair offtake', body: 'Contracted prices agreed before planting, not after harvest.' },
      { title: 'Food safety', body: 'Process designed to recognised food-safety standards from day one.' },
    ],
  },
  {
    id: 'farm',
    slug: 'farm',
    name: "God's Plan Farm",
    shortName: 'Farm',
    sector: 'Livestock, feed and agricultural training',
    tagline: 'Producing Food. Producing Farmers. Producing the Future.',
    summary:
      'Integrated livestock operation — poultry, piggery and aquaculture — with a feed mill and an agricultural school attached.',
    status: 'in-development',
    accent: { color: '#5c7a3d', soft: '#e8eddf', contrast: '#0b1f3a', ink: '#506b35' },
    mood: 'light',
    nav: [
      { href: '/farm', label: 'Overview' },
      { href: '/farm/products', label: 'Products' },
      { href: '/farm/feed-division', label: 'Feed Division' },
      { href: '/farm/agri-school', label: 'Agri School' },
      { href: '/farm/partner', label: 'Partner With Us' },
    ],
    vision: 'A farm that sells protein and produces farmers in the same year.',
    mission:
      'To run a commercially serious livestock operation and teach every part of it to the people around it.',
    coreValues: [
      { title: 'Animal welfare', body: 'Stocking density and husbandry set by welfare, not only yield.' },
      { title: 'Teach as you go', body: 'The school teaches on the working farm, not a model one.' },
      { title: 'Input control', body: 'Owning the feed mill is what makes the economics work.' },
    ],
  },
];

export const COMPANY_BY_SLUG: Record<string, Company> = Object.fromEntries(
  COMPANIES.map((c) => [c.slug, c]),
);

export function getCompany(slug: string): Company {
  const company = COMPANY_BY_SLUG[slug];
  if (!company) throw new Error(`Unknown company slug: ${slug}`);
  return company;
}
