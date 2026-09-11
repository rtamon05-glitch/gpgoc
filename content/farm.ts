import type { Course } from './types';

/**
 * God's Plan Farm.
 *
 * The farm has operating divisions and the school has a published curriculum,
 * so parts of this section are written in the present tense. Where a division
 * is still being built — the feed mill at commercial scale — it is labelled.
 */

export const FARM_DIVISIONS = [
  {
    id: 'poultry',
    title: 'Poultry',
    body: 'Layers for table eggs and broilers for meat, run in batches so supply is continuous rather than seasonal.',
  },
  {
    id: 'piggery',
    title: 'Piggery',
    body: 'A breeding herd and finishing units, supplying live weight and carcass to butchers and processors.',
  },
  {
    id: 'aquaculture',
    title: 'Aquaculture',
    body: 'Pond and tank production of tilapia and catfish, harvested to order for freshness rather than held in stock.',
  },
  {
    id: 'feed',
    title: 'Feed manufacturing',
    body: 'Compound feed milled on site for the farm’s own livestock and for sale — the division that makes the rest of the economics work.',
  },
  {
    id: 'school',
    title: 'Agri School',
    body: 'Practical agricultural training taught on the working farm, across six courses.',
  },
];

export const FARM_PRODUCTS = [
  {
    id: 'eggs',
    name: 'Table eggs',
    description: 'Graded eggs from the layer houses, collected and packed daily.',
    sizeOptions: ['Tray of 30', 'Crate of 360'],
    availability: 'Available — collection or delivery on agreed routes',
  },
  {
    id: 'broilers',
    name: 'Broiler chickens',
    description: 'Live or dressed birds, sold by weight to butchers, caterers and households.',
    sizeOptions: ['Live weight', 'Dressed'],
    availability: 'Available in batches — order ahead for volume',
  },
  {
    id: 'pork',
    name: 'Pigs',
    description: 'Weaners, growers and finished pigs from the breeding herd.',
    sizeOptions: ['Weaner', 'Grower', 'Finished'],
    availability: 'By arrangement',
  },
  {
    id: 'fish',
    name: 'Tilapia and catfish',
    description: 'Harvested to order so the fish reaches you fresh rather than stored.',
    sizeOptions: ['Per kg', 'Bulk harvest'],
    availability: 'Harvest by arrangement',
  },
  {
    id: 'feed',
    name: 'Compound feed',
    description:
      'Layer mash, broiler starter, grower and finisher, pig feed and fish feed, milled on site.',
    sizeOptions: ['25 kg', '50 kg', 'Bulk'],
    availability: 'Available — bulk orders by arrangement',
  },
  {
    id: 'manure',
    name: 'Poultry manure',
    description: 'Composted manure for crop farmers and market gardeners.',
    sizeOptions: ['50 kg bags', 'Truck load'],
    availability: 'Available seasonally',
  },
];

export const FEED_LINES = [
  { title: 'Poultry feed', body: 'Broiler starter, grower and finisher, plus layer mash formulated for sustained lay.' },
  { title: 'Pig feed', body: 'Creep, weaner, grower and finisher rations matched to the growth stage.' },
  { title: 'Fish feed', body: 'Floating and sinking pellets in the sizes tilapia and catfish need through the cycle.' },
  { title: 'Custom formulation', body: 'Rations formulated to a buyer’s own specification where volume justifies a dedicated run.' },
];

export const AGRI_SCHOOL_COURSES: Course[] = [
  {
    id: 'poultry-production',
    companyId: 'farm',
    title: 'Poultry production',
    duration: '8 weeks',
    format: 'Part-time, on the farm',
    description:
      'Housing, brooding, feeding, vaccination, biosecurity and the record-keeping that tells you whether a batch made money.',
    outcomes: [
      'Run a batch of broilers or layers end to end',
      'Build and follow a vaccination and biosecurity programme',
      'Cost a batch and know your margin before you sell',
    ],
  },
  {
    id: 'piggery-management',
    companyId: 'farm',
    title: 'Piggery management',
    duration: '8 weeks',
    format: 'Part-time, on the farm',
    description:
      'Breeding, farrowing, weaning, housing and herd health, with the economics of each stage taught alongside the husbandry.',
    outcomes: [
      'Manage a breeding sow through a full cycle',
      'Recognise and respond to common herd health problems',
      'Plan housing and stocking for a given herd size',
    ],
  },
  {
    id: 'fish-farming',
    companyId: 'farm',
    title: 'Fish farming',
    duration: '6 weeks',
    format: 'Part-time, on the farm',
    description:
      'Pond and tank systems, water quality, stocking, feeding regimes and harvest planning for tilapia and catfish.',
    outcomes: [
      'Set up and manage a pond or tank system',
      'Test and correct water quality',
      'Plan stocking and harvest to meet a market window',
    ],
  },
  {
    id: 'feed-production',
    companyId: 'farm',
    title: 'Feed production',
    duration: '6 weeks',
    format: 'Part-time, on the farm',
    description:
      'Ingredients, formulation, milling, mixing and quality control — how to make feed that performs instead of feed that is merely cheap.',
    outcomes: [
      'Formulate a balanced ration from available ingredients',
      'Operate and maintain small-scale milling equipment',
      'Check feed quality and diagnose a poor-performing ration',
    ],
  },
  {
    id: 'agribusiness-management',
    companyId: 'farm',
    title: 'Agribusiness management',
    duration: '10 weeks',
    format: 'Part-time, evenings',
    description:
      'Costing, record-keeping, cash flow, market access and pricing — the reason most technically good farms still fail.',
    outcomes: [
      'Keep records an accountant or a lender would accept',
      'Build a cash-flow plan across a production cycle',
      'Price your product against your real cost of production',
    ],
  },
  {
    id: 'agricultural-entrepreneurship',
    companyId: 'farm',
    title: 'Agricultural entrepreneurship',
    duration: '12 weeks',
    format: 'Part-time, evenings',
    description:
      'Taking a farm enterprise from idea to operating business: planning, financing, compliance and growth.',
    outcomes: [
      'Write a business plan a lender will read',
      'Understand the licences and compliance your enterprise needs',
      'Plan a realistic first three years',
    ],
  },
];

export const PARTNER_TYPES = [
  {
    title: 'Feed buyers',
    body: 'Farms and cooperatives buying compound feed in volume, on standing orders with agreed delivery.',
  },
  {
    title: 'Produce buyers',
    body: 'Wholesalers, caterers, hotels and retailers taking eggs, poultry, pork or fish on regular supply.',
  },
  {
    title: 'Cooperatives',
    body: 'Farmer groups wanting training places, shared input purchasing or aggregated offtake.',
  },
  {
    title: 'Training partners',
    body: 'NGOs, public agencies and employers funding places on Agri School courses.',
  },
];
