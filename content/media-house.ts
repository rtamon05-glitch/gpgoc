import type { PortfolioItem, RentalEquipment } from './types';

/**
 * God's Plan Media House.
 *
 * Portfolio entries below describe the *kind* of work the house takes on and
 * are marked as such — they are not client case studies. Real credits go in
 * only once the client has cleared them; see README §"Content still to be
 * confirmed". Equipment is quote-based, so no rate card is published.
 */

export const MEDIA_SERVICES = [
  {
    id: 'video',
    title: 'Video production',
    body: 'Corporate films, brand pieces, documentary and commercials — scripting through to grade and delivery in the formats you actually need.',
  },
  {
    id: 'photography',
    title: 'Photography',
    body: 'Event, editorial, portrait and product. Shot, selected and retouched, with the full set of rushes handed over.',
  },
  {
    id: 'livestream',
    title: 'Livestreaming',
    body: 'Multi-camera live production with vision mixing, graphics and redundant encoding, to your platform or ours.',
  },
  {
    id: 'broadcast',
    title: 'TV & film production',
    body: 'Longer-form work: series production, broadcast inserts and film, with the production management that keeps a schedule honest.',
  },
  {
    id: 'events',
    title: 'Event production',
    body: 'Staging, sound, lighting and screens — the technical side of conferences, launches, concerts and ceremonies.',
  },
  {
    id: 'stage',
    title: 'Mobile stage',
    body: 'A transportable stage with rigging and power for outdoor events, delivered, built and operated by our crew.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'corporate-film',
    title: 'Corporate brand film',
    category: 'Video production',
    client: 'Representative of work we take on',
    date: 'Ongoing',
    description:
      'A three-to-five minute company film: interviews, operations coverage, original music and a graded master delivered in broadcast, web and social cuts.',
  },
  {
    id: 'conference-live',
    title: 'Multi-camera conference stream',
    category: 'Livestreaming',
    client: 'Representative of work we take on',
    date: 'Ongoing',
    description:
      'Four-camera live production with vision mixing, lower-thirds, presentation feed capture and a recorded master for post.',
  },
  {
    id: 'wedding',
    title: 'Wedding film and stills',
    category: 'Video production',
    client: 'Representative of work we take on',
    date: 'Ongoing',
    description:
      'Full-day coverage by a film and stills team, cut to a highlight film and a full ceremony edit, with an album-ready stills selection.',
  },
  {
    id: 'documentary',
    title: 'Documentary short',
    category: 'TV & film',
    client: 'Representative of work we take on',
    date: 'Ongoing',
    description:
      'Research, location filming over several weeks, archive clearance and a festival-length cut.',
  },
  {
    id: 'product-stills',
    title: 'Product photography',
    category: 'Photography',
    client: 'Representative of work we take on',
    date: 'Ongoing',
    description:
      'Studio product shoots for packaging and e-commerce, including cut-outs and lifestyle sets.',
  },
  {
    id: 'concert',
    title: 'Outdoor concert production',
    category: 'Event production',
    client: 'Representative of work we take on',
    date: 'Ongoing',
    description:
      'Mobile stage, line-array sound, lighting rig, LED wall and a live-recorded multitrack of the performance.',
  },
];

export const PORTFOLIO_CATEGORIES = Array.from(
  new Set(PORTFOLIO_ITEMS.map((item) => item.category)),
);

export const RENTAL_EQUIPMENT: RentalEquipment[] = [
  {
    id: 'cinema-camera',
    name: 'Cinema camera bodies',
    category: 'Cameras',
    availability: 'Quote on request',
    description: 'Super-35 and full-frame cinema bodies with media, batteries and a basic support kit.',
  },
  {
    id: 'lenses',
    name: 'Cine and photo lenses',
    category: 'Cameras',
    availability: 'Quote on request',
    description: 'Prime sets and zooms, with matte box, filters and follow focus available alongside.',
  },
  {
    id: 'led-panels',
    name: 'LED lighting panels',
    category: 'Lighting',
    availability: 'Quote on request',
    description: 'Bi-colour and RGB panels with stands, softboxes and diffusion.',
  },
  {
    id: 'hmi',
    name: 'HMI and tungsten fixtures',
    category: 'Lighting',
    availability: 'Quote on request',
    description: 'Larger fixtures for daylight fill and interior setups, with distribution and cabling.',
  },
  {
    id: 'audio-kit',
    name: 'Location audio kit',
    category: 'Audio',
    availability: 'Quote on request',
    description: 'Radio mics, boom and shotgun mics, field recorder and a mixer.',
  },
  {
    id: 'pa',
    name: 'PA and line array',
    category: 'Audio',
    availability: 'Quote on request',
    description: 'Event sound reinforcement with monitors, desk and an operator.',
  },
  {
    id: 'led-wall',
    name: 'LED screens and walls',
    category: 'Screens',
    availability: 'Quote on request',
    description: 'Modular indoor and outdoor LED panels with processing and rigging.',
  },
  {
    id: 'mobile-stage',
    name: 'Mobile stage',
    category: 'Staging',
    availability: 'Quote on request',
    description: 'Transportable stage with roof, rigging points, power distribution and crew.',
  },
  {
    id: 'grip',
    name: 'Grip and support',
    category: 'Grip',
    availability: 'Quote on request',
    description: 'Tripods, sliders, gimbals, jib arm, stands and sandbags.',
  },
];

export const RENTAL_CATEGORIES = Array.from(new Set(RENTAL_EQUIPMENT.map((item) => item.category)));

export const RENTAL_TERMS = [
  'Rentals are quoted per day, with reduced rates for multi-day and weekly hires.',
  'Kit can be hired dry (you collect and operate) or wet (our crew operates it). Some items are crew-only.',
  'A refundable deposit and proof of identity are required for dry hire.',
  'Damage, loss and late return are charged at replacement or repair cost — the terms are set out in the hire agreement before you sign it.',
  'Availability is confirmed on quote. Nothing is held until a quote is accepted.',
];
