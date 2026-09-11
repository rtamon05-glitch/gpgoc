/**
 * Shared content types.
 *
 * These mirror the Firestore schema in §6 of the project brief. Content lives
 * in `content/*.ts` today and is read through `lib/cms.ts`, so swapping the
 * local modules for Firestore later is a change in one file, not in the pages.
 */

/**
 * Real-world execution stage of a company or programme.
 *
 * This drives every "is it built yet?" label on the site. The editorial rule
 * for the whole project: present tense is reserved for `operational`; anything
 * else is written as roadmap. See `lib/status.ts` for the rendered wording.
 */
export type CompanyStatus = 'planning' | 'in-development' | 'operational';

export type NavLink = {
  href: string;
  label: string;
};

export type ValueItem = {
  title: string;
  body: string;
};

export type Company = {
  /** Firestore `companies/{companyId}` */
  id: string;
  /** URL segment under the site root */
  slug: string;
  name: string;
  shortName: string;
  sector: string;
  tagline: string;
  /** One-paragraph description used on the hub grid and in metadata. */
  summary: string;
  status: CompanyStatus;
  /** Layered on top of the base navy/gold system. */
  accent: {
    /** Primary accent colour. */
    color: string;
    /** Tint used for soft backgrounds and badges. */
    soft: string;
    /** Text colour that reads accessibly on `color`. */
    contrast: string;
    /**
     * Darkened variant used for accent-coloured *text* on light grounds.
     * The display `color` fails WCAG AA as small text; this clears 4.5:1 on
     * both white and cream. See styles/tokens.css.
     */
    ink: string;
  };
  /** `dark` subsidiaries invert the shell chrome (Hotels). */
  mood: 'light' | 'dark';
  /** Section navigation rendered by SubsidiaryShell. */
  nav: NavLink[];
  vision: string;
  mission: string;
  coreValues: ValueItem[];
};

export type Program = {
  id: string;
  companyId: string;
  title: string;
  description: string;
  stage: CompanyStatus;
};

export type Product = {
  id: string;
  companyId: string;
  name: string;
  description: string;
  sizeOptions?: string[];
  /** Free-text: pricing is quote-based across the group. */
  availability?: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  description: string;
};

export type RentalEquipment = {
  id: string;
  name: string;
  category: string;
  /** Quote-based; see `content/media-house.ts` for why no rate card is published. */
  availability: string;
  description: string;
};

export type NewsPost = {
  id: string;
  slug: string;
  /** `null` = group-wide. */
  companyId: string | null;
  title: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
};

export type Course = {
  id: string;
  companyId: string;
  title: string;
  duration: string;
  format: string;
  description: string;
  outcomes: string[];
};

/** The five inquiry types every form on the site funnels into. */
export type InquiryType = 'donate' | 'invest' | 'book' | 'wholesale' | 'enroll' | 'contact';
