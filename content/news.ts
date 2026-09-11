import type { NewsPost } from './types';

/**
 * Newsroom.
 *
 * Seeded with announcements the group can stand behind today — formation,
 * planning milestones and recruitment. No performance claims, no impact
 * numbers, and nothing describing a facility as open. Replace or extend as
 * real news lands; the shape matches `newsPosts/{postId}` in Firestore.
 */
export const NEWS_POSTS: NewsPost[] = [
  {
    id: 'group-structure',
    slug: 'six-companies-one-group',
    companyId: null,
    title: 'Six companies, one group: how God’s Plan is structured',
    excerpt:
      'The group sets out its operating structure — six businesses, each with its own master plan and its own board discipline.',
    publishedAt: '2026-06-18',
    body: [
      'God’s Plan Group of Company is organised as a holding group around six operating businesses: the Foundation, Hotels, Tech, Media House, the Sunflower Factory and the Farm.',
      'Each company holds its own master plan with a 10–20 year horizon, its own management and its own capital requirement. The group provides shared services — finance, brand, legal and technology — and holds the companies to a single reporting standard.',
      'The businesses are at deliberately different stages. Farm, Media House and Tech have begun operating activity. The Sunflower Factory and Hotels are in planning and pre-development. The Foundation is building out its programme portfolio alongside the long-range Development City master plan.',
      'This site labels the stage of every venture it describes. Where something has not been built, it is described as planned.',
    ],
  },
  {
    id: 'agri-school-curriculum',
    slug: 'agri-school-curriculum-published',
    companyId: 'farm',
    title: 'Agri School publishes its first curriculum',
    excerpt:
      'Six practical courses covering poultry, piggery, aquaculture, feed production, agribusiness management and agricultural entrepreneurship.',
    publishedAt: '2026-05-02',
    body: [
      'God’s Plan Farm has published the first curriculum for its Agri School: six practical courses taught on the working farm rather than in a classroom model.',
      'The courses cover poultry production, piggery management, aquaculture, feed production, agribusiness management and agricultural entrepreneurship. Each is built around the same principle — a graduate should be able to run the unit they trained on.',
      'Enrolment is by application. Intake dates, fees and class sizes are confirmed with each applicant directly.',
    ],
  },
  {
    id: 'sunflower-feasibility',
    slug: 'sunflower-factory-enters-feasibility',
    companyId: 'sunflower-factory',
    title: 'Sunflower Factory enters detailed feasibility',
    excerpt:
      'Site selection, crushing capacity and the contract-farming model move into detailed study ahead of any construction decision.',
    publishedAt: '2026-04-11',
    body: [
      'The Sunflower Factory project has moved into detailed feasibility. The study covers site selection, crushing and refining capacity, packaging lines, utilities and the agronomy of the contract-farming network that would supply it.',
      'No construction has started and no equipment has been ordered. A construction decision follows the feasibility outcome and the financing that depends on it.',
      'Farmers and cooperatives interested in the offtake programme can register their interest now so the agronomy team can plan seed supply and extension support around real acreage.',
    ],
  },
  {
    id: 'tech-academy-cohort',
    slug: 'tech-academy-opens-applications',
    companyId: 'tech',
    title: 'Tech Academy opens applications for its first cohort',
    excerpt:
      'Applications open for software engineering and cybersecurity tracks, taught alongside live client delivery.',
    publishedAt: '2026-03-06',
    body: [
      'God’s Plan Tech has opened applications for the first Academy cohort, with tracks in software engineering and cybersecurity fundamentals.',
      'The Academy teaches against live delivery work rather than exercises: trainees sit with the delivery team and contribute to real systems under review.',
      'Places are limited by the number of engineers available to supervise. Applications are assessed on aptitude rather than prior qualifications.',
    ],
  },
  {
    id: 'foundation-development-city',
    slug: 'development-city-master-plan',
    companyId: 'foundation',
    title: 'Foundation sets out the Development City master plan',
    excerpt:
      'A six-zone master plan covering education, health, technology, agriculture, industry and community — presented as a long-range roadmap.',
    publishedAt: '2026-01-22',
    body: [
      'God’s Plan Foundation has set out the master plan for God’s Plan Development City: an integrated campus organised into six zones — education, health, technology and innovation, agriculture, industry and community.',
      'The plan is a long-range roadmap measured in decades. It is contingent on land assembly, statutory approvals, financing and phased construction, none of which are complete.',
      'The Foundation is publishing the plan now so partners, donors and public authorities can engage with it early, and so the sequencing can be argued about in the open rather than settled behind closed doors.',
    ],
  },
];
