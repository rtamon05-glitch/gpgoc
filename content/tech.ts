import type { CompanyStatus } from './types';

/**
 * God's Plan Tech.
 *
 * Compliance note: the brief requires that all financial-technology copy —
 * forex, blockchain, payments — carries explicit risk disclosure and contains
 * no language implying guaranteed or projected returns. Nothing in this file
 * should describe a trading service, an investment product, or a yield.
 * Blockchain and exchange work is described as research and roadmap only.
 */

export const TECH_DIVISIONS: {
  id: string;
  title: string;
  body: string;
  stage: CompanyStatus;
  href?: string;
}[] = [
  {
    id: 'software',
    title: 'Software engineering',
    body: 'Custom systems for the group and for external clients: web and mobile applications, internal tools, integrations and the unglamorous back-office software businesses actually run on.',
    stage: 'in-development',
    href: '/tech/software',
  },
  {
    id: 'ai',
    title: 'Applied AI',
    body: 'Practical machine-learning work where it earns its place — document processing, forecasting, quality inspection — rather than AI added to a product for the announcement.',
    stage: 'in-development',
    href: '/tech/ai',
  },
  {
    id: 'forex-research',
    title: 'Financial technology research',
    body: 'Research into market-data tooling and analytics. This is a research function. It is not a trading service, it manages no client money, and it offers no investment product.',
    stage: 'planning',
    href: '/tech/blockchain-fintech',
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    body: 'Early-stage research into distributed-ledger applications for supply-chain traceability within the group. No token, no exchange and no live product.',
    stage: 'planning',
    href: '/tech/blockchain-fintech',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    body: 'Security review, threat modelling and hardening for the group’s own systems and for clients. Part of every engagement rather than an upsell after one.',
    stage: 'in-development',
  },
  {
    id: 'academy',
    title: 'Academy',
    body: 'Training in software engineering and cybersecurity, taught alongside live delivery work rather than in a classroom apart from it.',
    stage: 'in-development',
    href: '/tech/academy',
  },
];

export const SOFTWARE_SERVICES = [
  {
    title: 'Product engineering',
    body: 'Web and mobile applications built end to end — discovery, design, build, deploy and the part everyone forgets, maintenance.',
  },
  {
    title: 'Internal systems',
    body: 'The operational software a business runs on: inventory, scheduling, field reporting, approvals. Less glamorous than a product, considerably more useful.',
  },
  {
    title: 'Integration',
    body: 'Connecting systems that were never designed to talk to each other — payment providers, accounting packages, legacy databases.',
  },
  {
    title: 'Support and maintenance',
    body: 'Ongoing ownership of systems we built, with a named engineer and an agreed response time.',
  },
];

export const AI_APPLICATIONS = [
  {
    title: 'Document processing',
    body: 'Extracting structured data from invoices, delivery notes and forms — the highest-value, lowest-drama application of machine learning in most businesses.',
  },
  {
    title: 'Demand forecasting',
    body: 'Forecasting for the group’s own agricultural and feed operations, where a week of warning changes what gets planted or milled.',
  },
  {
    title: 'Quality inspection',
    body: 'Vision models for grading and defect detection on processing lines, as an assistant to a human inspector rather than a replacement for one.',
  },
  {
    title: 'Internal assistants',
    body: 'Retrieval systems over a company’s own documentation, built so answers cite their source and can be checked.',
  },
];

export const FINTECH_ROADMAP: { phase: string; title: string; body: string; stage: CompanyStatus }[] = [
  {
    phase: 'Phase 1',
    title: 'Research and regulatory mapping',
    body: 'Understand the applicable regulatory perimeter — including the CEMAC framework administered by COSUMAF and BEAC — before any product design begins. This is where the division is today.',
    stage: 'in-development',
  },
  {
    phase: 'Phase 2',
    title: 'Internal traceability pilot',
    body: 'A closed, internal pilot applying distributed-ledger techniques to supply-chain traceability between the Farm, the Sunflower Factory and their buyers. No public network, no token.',
    stage: 'planning',
  },
  {
    phase: 'Phase 3',
    title: 'Licensed product design',
    body: 'Any consumer- or business-facing financial product would be designed only after the applicable licence and regulatory approvals are secured. Nothing is designed on the assumption of approval.',
    stage: 'planning',
  },
  {
    phase: 'Phase 4',
    title: 'Supervised launch',
    body: 'A launch decision would follow licensing, independent security audit and supervisory sign-off — not the other way round.',
    stage: 'planning',
  },
];

export const ACADEMY_COURSES = [
  {
    id: 'software-foundations',
    title: 'Software engineering foundations',
    duration: '16 weeks',
    format: 'Full-time, in person',
    description:
      'Programming fundamentals, version control, testing and working in a team. Trainees sit with the delivery team and contribute to real systems under review.',
    outcomes: [
      'Build and ship a small application end to end',
      'Work confidently in Git with a review process',
      'Write tests that catch real regressions',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity fundamentals',
    duration: '12 weeks',
    format: 'Full-time, in person',
    description:
      'Threat modelling, secure configuration, common vulnerability classes and incident response basics, taught against systems that are actually deployed.',
    outcomes: [
      'Threat-model a system and document the findings',
      'Identify and remediate common vulnerability classes',
      'Run a basic incident response process',
    ],
  },
  {
    id: 'data',
    title: 'Data and applied AI',
    duration: '12 weeks',
    format: 'Part-time, evenings',
    description:
      'Working with data honestly: collection, cleaning, analysis, and where machine learning helps and where it does not.',
    outcomes: [
      'Clean and analyse a real dataset',
      'Train and evaluate a simple model',
      'Judge when a machine-learning approach is the wrong tool',
    ],
  },
];

export const TECH_ROLES = [
  {
    title: 'Software engineers',
    body: 'Mid and senior engineers who have shipped and maintained real systems. We hire for judgement, not for a framework list.',
  },
  {
    title: 'Security engineers',
    body: 'People who can threat-model a system and then do the unglamorous work of fixing what they found.',
  },
  {
    title: 'Data engineers',
    body: 'Pipelines, warehousing and the discipline to keep data trustworthy across the group’s six companies.',
  },
  {
    title: 'Academy instructors',
    body: 'Practising engineers who want to teach part of their week. Teaching is a paid part of the role, not a favour.',
  },
];
