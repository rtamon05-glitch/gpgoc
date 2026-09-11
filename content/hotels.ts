/**
 * God's Plan Hotels.
 *
 * The whole company is at `planning` stage: there is no property, nothing is
 * bookable and no membership is on sale. Every page in this section therefore
 * describes a development concept and says so. Copy here is written in the
 * conditional ("would", "is designed to") rather than the present tense.
 */

export const FLAGSHIP_CONCEPT = {
  keys: '300+',
  keysNote: 'Guest keys in the concept brief, including suites and a presidential residence.',
  restaurants: '4',
  restaurantsNote: 'Distinct dining concepts in the brief, plus in-room and banqueting.',
  residences: 'Branded',
  residencesNote: 'Privately owned residences serviced by the hotel, under the same brand.',
  convention: 'Convention',
  conventionNote: 'A convention and events centre sized for regional conferences.',
};

export const DINING_CONCEPTS = [
  {
    id: 'royal-table',
    name: 'The Royal Table',
    kind: 'Signature fine dining',
    body: 'The flagship room: a tasting-led menu, a serious wine programme and a kitchen designed to be seen. The concept the rest of the food operation is judged against.',
  },
  {
    id: 'international',
    name: 'International Brasserie',
    kind: 'All-day dining',
    body: 'Breakfast through late service for house guests and residents. Broad menu, consistent execution, open every day the hotel is open.',
  },
  {
    id: 'african-heritage',
    name: 'African Heritage',
    kind: 'Regional cuisine',
    body: 'Cameroonian and West African cooking taken as seriously as the fine-dining room takes French technique — sourced regionally, cooked by chefs who grew up with it.',
  },
  {
    id: 'sky',
    name: 'Sky Restaurant & Bar',
    kind: 'Rooftop',
    body: 'The public face of the property: rooftop bar and grill, open to non-residents, designed to be the reason people who are not staying come in.',
  },
];

export const WELLNESS_FACILITIES = [
  {
    title: 'Destination spa',
    body: 'Treatment suites, hammam and thermal circuit, with a treatment menu built around regional botanicals rather than an imported brand list.',
  },
  {
    title: 'Fitness centre',
    body: 'Full gym floor, studio space for classes, and personal training — sized for residents and members, not just house guests.',
  },
  {
    title: 'Pools',
    body: 'A main outdoor pool, a quiet adults-only pool and an indoor lap pool, so the three uses stop competing with each other.',
  },
  {
    title: 'Wellness programming',
    body: 'Multi-day retreat programmes combining treatment, movement and nutrition, run in low season when the property has capacity.',
  },
];

export const MEMBERSHIP_TIERS = [
  {
    name: 'Silver',
    positioning: 'Local membership',
    benefits: [
      'Access to the fitness centre and pools',
      'Member rates on dining',
      'Priority booking for restaurant tables',
      'Invitations to member events',
    ],
  },
  {
    name: 'Gold',
    positioning: 'Full club',
    benefits: [
      'Everything in Silver',
      'Full spa access with member treatment rates',
      'Preferential room rates for guests you book',
      'Reserved parking',
    ],
  },
  {
    name: 'Platinum',
    positioning: 'Resident member',
    benefits: [
      'Everything in Gold',
      'Annual room-night allocation',
      'Private event allowance',
      'Named concierge contact',
    ],
  },
  {
    name: 'Royal',
    positioning: 'By invitation',
    benefits: [
      'Everything in Platinum',
      'Access to the presidential residence for private use, subject to availability',
      'Guaranteed availability windows',
      'Bespoke arrangements agreed individually',
    ],
  },
];

export const EVENT_SPACES = [
  {
    title: 'Grand ballroom',
    body: 'A pillar-free ballroom sized for a full wedding banquet or a plenary conference session, divisible into three.',
  },
  {
    title: 'Convention centre',
    body: 'Breakout rooms, exhibition space and the technical infrastructure a regional conference actually needs — power, rigging, connectivity.',
  },
  {
    title: 'Garden ceremony lawn',
    body: 'An outdoor ceremony setting with a wet-weather alternative planned alongside it rather than improvised.',
  },
  {
    title: 'Private dining rooms',
    body: 'Smaller rooms for board dinners and family celebrations, served from the signature kitchen.',
  },
];

export const RESIDENCES_POINTS = [
  {
    title: 'Owned, not rented',
    body: 'Privately owned apartments and villas within the property, sold freehold or on long lease, subject to the tenure available at the site.',
  },
  {
    title: 'Hotel-serviced',
    body: 'Housekeeping, maintenance, security and concierge provided by the hotel under a management agreement.',
  },
  {
    title: 'Optional rental programme',
    body: 'Owners may place their residence into the hotel’s letting pool when not in use, on terms agreed in the management agreement.',
  },
  {
    title: 'Not yet for sale',
    body: 'No residence is being marketed or reserved. Registrations of interest are recorded so owners can be contacted when a sales process opens.',
  },
];
