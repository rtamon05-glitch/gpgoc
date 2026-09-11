import type { CompanyStatus } from './types';

/**
 * God's Plan Foundation.
 *
 * Every item carries its own `stage`: the Foundation runs some activity today
 * while the Development City remains a long-range master plan, and the page
 * must never blur the two.
 */

export const FOUNDATION_PROGRAMS: {
  id: string;
  title: string;
  description: string;
  stage: CompanyStatus;
}[] = [
  {
    id: 'scholarships',
    title: 'Scholarship fund',
    description:
      'Fees, materials and transport for students who would otherwise drop out. Awarded per student per year, with the school paid directly rather than the family reimbursed.',
    stage: 'in-development',
  },
  {
    id: 'skills',
    title: 'Vocational skills placements',
    description:
      'Places on the group’s own training programmes — the Agri School and the Tech Academy — funded for candidates who cannot pay fees.',
    stage: 'in-development',
  },
  {
    id: 'community-health',
    title: 'Community health outreach',
    description:
      'Periodic screening and referral clinics run with local health workers, concentrating on conditions that are cheap to catch early and expensive to catch late.',
    stage: 'planning',
  },
  {
    id: 'farmer-support',
    title: 'Smallholder farmer support',
    description:
      'Seed, extension advice and a route to market for smallholders, delivered alongside the Sunflower Factory’s contract-farming programme.',
    stage: 'planning',
  },
  {
    id: 'youth-enterprise',
    title: 'Youth enterprise grants',
    description:
      'Small grants and mentoring for first businesses, with mentoring drawn from the operating companies rather than bought in.',
    stage: 'planning',
  },
];

export const DEVELOPMENT_CITY_ZONES = [
  {
    id: 'education',
    title: 'Education zone',
    body: 'Primary through tertiary provision on one campus, with the vocational schools sited next to the industries that would employ their graduates.',
    includes: ['Primary and secondary schools', 'Technical college', 'Teacher training', 'Library and resource centre'],
  },
  {
    id: 'health',
    title: 'Health zone',
    body: 'A district-scale hospital with outpatient, maternity and diagnostic capacity, plus a nursing school attached to it.',
    includes: ['General hospital', 'Maternity unit', 'Diagnostic imaging', 'Nursing school'],
  },
  {
    id: 'technology',
    title: 'Technology & innovation zone',
    body: 'Workspace, connectivity and power reliable enough to run a software business from, co-located with the Tech Academy.',
    includes: ['Innovation hub', 'Data centre capacity', 'Academy campus', 'Incubator space'],
  },
  {
    id: 'agriculture',
    title: 'Agriculture zone',
    body: 'Demonstration farms, storage and processing sited so that what is grown nearby can be handled without leaving the zone.',
    includes: ['Demonstration farms', 'Cold storage', 'Processing units', 'Extension services'],
  },
  {
    id: 'industry',
    title: 'Industrial zone',
    body: 'Serviced plots, shared utilities and logistics for light manufacturing, including the group’s own agro-processing plants.',
    includes: ['Serviced industrial plots', 'Shared utilities', 'Logistics yard', 'Workshops'],
  },
  {
    id: 'community',
    title: 'Community zone',
    body: 'Housing, worship, sport and market space — the part that decides whether the rest of it becomes a place people live or a place people commute to.',
    includes: ['Housing', 'Place of worship', 'Sports facilities', 'Market square'],
  },
];

export const DEVELOPMENT_CITY_DEPENDENCIES = [
  'Land assembly and secure title across the full master-plan footprint',
  'Statutory planning approval and environmental authorisation',
  'Utilities: grid connection, water and wastewater, road access',
  'Financing for each phase, secured before that phase starts',
  'Operating partners for the hospital and the schools',
];

export const IMPACT_NOTE =
  'The Foundation does not publish impact numbers it cannot evidence. Beneficiary counts, outcomes and independently verified stories will be published here as programmes reach the scale where the numbers mean something — and audited annual reports alongside them.';

export const PROSPECTUS_SECTIONS = [
  {
    title: 'Who we are',
    body: 'God’s Plan Foundation is the development arm of God’s Plan Group of Company. It exists to build the institutions — schools, clinics, training capacity — that let a community keep its own talent.',
  },
  {
    title: 'What we do today',
    body: 'A scholarship fund and funded training places within the group’s own schools, with community health outreach and smallholder support in preparation.',
  },
  {
    title: 'The long-range plan',
    body: 'God’s Plan Development City: a six-zone campus covering education, health, technology, agriculture, industry and community. It is a master plan measured in decades and contingent on land, approvals and finance.',
  },
  {
    title: 'How we are funded',
    body: 'Donations and sponsorships, group contributions from the operating companies, and — as programmes mature — grant and concessional funding.',
  },
  {
    title: 'How to support us',
    body: 'Sponsor a scholarship, a classroom, a hospital bed or a training place; give to the general fund; or partner with us on a programme where you bring capability as well as capital.',
  },
  {
    title: 'What we will not claim',
    body: 'We publish the stage of every programme and every zone. Nothing described as planned is presented as built, and we do not publish beneficiary numbers we cannot evidence.',
  },
];
