/** Group-level facts, contact details and shared copy for the corporate hub. */

export const GROUP = {
  name: "God's Plan Group of Company",
  shortName: "God's Plan Group",
  tagline: 'Built on Faith • Driven by Excellence',
  mission:
    'To build enterprises that create opportunity — in development, hospitality, technology, media, agro-industry and agriculture — and to run them to a standard that outlasts us.',
  intro:
    "God's Plan Group of Company is a holding group of six businesses. Each is guided by its own long-range master plan, and each is at a different stage of that plan: some are trading, some are being built, and some are still on the drawing board. This site says plainly which is which.",
  // Group-wide honesty note, surfaced on the hub home and companies grid.
  disclosure:
    'Several of the ventures described on this site are long-range plans rather than operating businesses. Where a page describes something that has not been built yet, it is labelled as planned or in development. Nothing here is an offer of securities or a promise of returns.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@godsplangroup.com',
  phone: '+237 000 000 000',
  address: {
    line1: 'Group Corporate Office',
    line2: 'Douala, Littoral Region',
    country: 'Cameroon',
  },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
  ],
} as const;

export const GROUP_VALUES = [
  {
    title: 'Faith',
    body: 'Every venture begins with conviction and a long horizon. We plan in decades, not quarters.',
  },
  {
    title: 'Integrity',
    body: 'We describe what exists as it exists. Ambition is stated as ambition, never dressed up as achievement.',
  },
  {
    title: 'Excellence',
    body: 'One standard across six companies: work that holds up to inspection by the people it serves.',
  },
  {
    title: 'Community',
    body: 'Each business is measured partly by what it leaves behind — jobs trained, farmers paid, students taught.',
  },
  {
    title: 'Stewardship',
    body: 'Capital, land and trust are held on behalf of others. We account for all three.',
  },
] as const;

/**
 * Leadership. Names are withheld until the client confirms titles and
 * biographies for publication — see README §"Content still to be confirmed".
 */
export const LEADERSHIP_NOTE =
  'Leadership profiles are being finalised for publication and will be added here once confirmed.';

export const GROUP_TIMELINE = [
  {
    period: 'Phase 1',
    title: 'Formation',
    body: 'The group is constituted around six master plans, each with its own 10–20 year horizon and its own operating discipline.',
  },
  {
    period: 'Phase 2',
    title: 'First operating businesses',
    body: 'Agriculture, media and technology begin trading at small scale, funding the group and proving its operating model.',
  },
  {
    period: 'Phase 3',
    title: 'Industrial build-out',
    body: 'Processing capacity — sunflower oil, feed manufacturing — moves from plan to plant.',
  },
  {
    period: 'Phase 4',
    title: 'Development City and hospitality',
    body: "The Foundation's development zones and the flagship hotel enter construction, subject to land, finance and permitting.",
  },
] as const;
