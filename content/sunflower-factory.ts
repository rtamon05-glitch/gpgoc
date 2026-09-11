/**
 * God's Plan Sunflower Factory.
 *
 * The plant is in planning: no oil is being pressed, bottled or sold. Product
 * pages therefore describe the planned product line and say so, and the
 * wholesale form registers interest rather than taking orders.
 */

export const OIL_PRODUCTS = [
  {
    id: 'refined-bottled',
    name: 'Refined sunflower oil — retail bottles',
    description:
      'Fully refined, bleached and deodorised sunflower oil for household cooking, in PET bottles for supermarket and market-stall sale.',
    sizeOptions: ['500 ml', '1 L', '2 L', '3 L', '5 L'],
  },
  {
    id: 'catering',
    name: 'Catering packs',
    description:
      'The same refined oil in larger formats for restaurants, hotels, bakeries and institutional kitchens.',
    sizeOptions: ['10 L', '20 L jerrycan'],
  },
  {
    id: 'bulk',
    name: 'Bulk and drum',
    description:
      'Drummed and bulk supply for food manufacturers and distributors who repack under their own label.',
    sizeOptions: ['200 L drum', 'Flexitank / bulk road tanker'],
  },
  {
    id: 'crude',
    name: 'Crude sunflower oil',
    description:
      'Unrefined pressed oil for refiners and industrial buyers who run their own refining process.',
    sizeOptions: ['Bulk'],
  },
  {
    id: 'seedcake',
    name: 'Sunflower seed cake',
    description:
      'The protein-rich press cake left after extraction — a feed ingredient, and an input to God’s Plan Farm’s own feed mill.',
    sizeOptions: ['50 kg bags', 'Bulk'],
  },
];

export const PROCESS_STEPS = [
  { title: 'Intake & cleaning', body: 'Seed is weighed, sampled for moisture and oil content, then cleaned of stones, chaff and foreign matter.' },
  { title: 'Preparation', body: 'Dehulling and conditioning to bring the seed to the moisture and temperature the press needs.' },
  { title: 'Extraction', body: 'Mechanical pressing to separate crude oil from the cake, with the cake going on to the feed supply chain.' },
  { title: 'Refining', body: 'Degumming, neutralising, bleaching and deodorising to produce a stable, neutral cooking oil.' },
  { title: 'Quality control', body: 'Laboratory checks on free fatty acid, peroxide value, colour and moisture, with retained samples from every batch.' },
  { title: 'Filling & packing', body: 'Filling, capping, labelling and coding, with each pack carrying a batch code traceable back to intake.' },
];

export const QUALITY_COMMITMENTS = [
  {
    title: 'Batch traceability',
    body: 'Every pack carries a batch code that traces back through filling, refining and pressing to the intake lot and the cooperatives that supplied it.',
  },
  {
    title: 'Retained samples',
    body: 'A sample from every production batch is retained for the life of the product, so any complaint can be checked against what actually shipped.',
  },
  {
    title: 'Designed to recognised standards',
    body: 'The plant is being designed around HACCP principles and the applicable national and Codex standards for edible oils, with certification pursued before commercial sale.',
  },
  {
    title: 'Published specification',
    body: 'Free fatty acid, peroxide value, moisture and colour specifications will be published per product, and stated on the certificate of analysis supplied to trade buyers.',
  },
];

export const FARMER_PROGRAM = [
  {
    title: 'Price agreed before planting',
    body: 'Contracted offtake at a price agreed at the start of the season, not set against you after the harvest when you have nowhere else to take it.',
  },
  {
    title: 'Seed and input supply',
    body: 'Certified seed and inputs supplied at the start of the season, recovered from the crop payment rather than demanded up front.',
  },
  {
    title: 'Agronomy support',
    body: 'Field visits through the season from agronomists who are paid by yield outcome, not by input sales.',
  },
  {
    title: 'Cooperative-first',
    body: 'Contracts are written with cooperatives and farmer groups where they exist, so smallholders negotiate with the weight of the group behind them.',
  },
  {
    title: 'Guaranteed collection',
    body: 'Collection from agreed aggregation points, so a small farmer is not the one paying for transport to the plant.',
  },
];

export const WHOLESALE_BUYERS = [
  'Supermarkets and retail chains',
  'Wholesalers and distributors',
  'Hotels, restaurants and catering',
  'Food manufacturers',
  'Institutional buyers (schools, hospitals, camps)',
  'Export buyers',
];
