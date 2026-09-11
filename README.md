# God's Plan Group of Company — website

Corporate hub plus six subsidiary sections, built on one design system and one
content model.

**Built on Faith • Driven by Excellence**

---

## The editorial rule this project is built around

Several of the group's ventures are long-range plans rather than operating
businesses. The site is built so it cannot quietly blur that line:

- Every company carries a `status` of `planning`, `in-development` or
  `operational` in `content/companies.ts`. Programmes, product lines and
  roadmap phases carry their own stage too.
- `<StatusPill>` and `<StatusNote>` (`components/ui/StatusPill.tsx`) render that
  stage wherever a venture is described. They read from one table in
  `lib/status.ts`, so the wording is consistent everywhere.
- **Present tense is reserved for `operational`.** Anything else is written in
  the conditional — "is designed to", "would", "is planned". The whole Hotels
  section is written this way, because the company is in pre-development.
- Nothing that has not been built is bookable, purchasable or reservable. The
  forms on those pages register interest, and say so on the page.
- Structured data follows the same rule: a company that is not operating is
  typed as a plain `Organization`, never `Hotel` or `LocalBusiness`, so search
  engines are not invited to present it as a real place (`lib/seo.ts`).

If you change a `status` value, re-read that section's copy. The tense has to
move with it.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

Node 22+. Copy `.env.example` to `.env.local` and fill in what you have — the
site runs fully without any of it (see "Degradation" below).

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16, App Router, TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Fonts | Playfair Display (display) + Inter (body), via `next/font` |
| Content | Typed modules in `content/`, read through `lib/cms.ts` |
| Forms | One API route → Firestore `inquiries` collection |
| Analytics | GA4 / Firebase Analytics, loaded only when configured |
| Rendering | Every marketing page is statically prerendered |

## Layout

```
app/
  (hub)/          Corporate hub: home, about, companies, invest,
                  newsroom (+ [slug]), careers, contact
  foundation/     hotels/  tech/  media-house/  sunflower-factory/  farm/
                  Each has a layout.tsx that wraps SubsidiaryShell and
                  emits that company's JSON-LD
  api/inquiries/  The single endpoint behind every form
  legal/          Privacy and terms (DRAFT — see below)
  sitemap.ts  robots.ts  not-found.tsx  icon.svg
components/
  layout/         Nav, Footer, SubsidiaryShell, Analytics
  ui/             Button, Section, Card, Hero, CTABanner, Accordion,
                  StatusPill, Bits (Stat, Grid, Steps, Prose, Disclosure…)
  forms/          InquiryForm (the shared one), DonateForm, BookingForm,
                  FormPanel
  brand/          Logo, Crest, CrestWatermark
content/          Typed content per company + group, news, shared types
lib/              cms, seo, firebase, inquiries, payments, analytics, status
styles/tokens.css Brand tokens — the single source of colour truth
public/brand/     logo.svg, crest.svg
```

### Design system

`styles/tokens.css` holds the palette; `app/globals.css` re-exports it to
Tailwind through `@theme`. Per-subsidiary accents work by contract:
`SubsidiaryShell` sets `--gp-accent`, `--gp-accent-soft` and
`--gp-accent-contrast` on its wrapper, and every accent-aware component reads
only those. Adding a seventh company needs no component changes — just an entry
in `content/companies.ts`.

Brand lockup rules are enforced in `components/brand/Logo.tsx` rather than left
to each page: the full lockup (crest + wordmark + tagline) appears only on the
homepage hero and in the footer, and the crown/globe gradient is never
recoloured — only the wordmark switches to white on dark grounds.

### Content

Pages never import a `content/*` module for lookups; they go through
`lib/cms.ts`. Moving to Firestore means rewriting the bodies of those functions
(and awaiting them) without touching a page component. The content types in
`content/types.ts` already mirror the Firestore collections:
`companies`, `programs`, `products`, `portfolioItems`, `rentalEquipment`,
`inquiries`, `newsPosts`.

### Forms

Every form on the site is `components/forms/InquiryForm.tsx` with different
`fields` and `type`. A new form is a data change, not a new component. All of
them POST to `/api/inquiries`, which validates, rate-limits per IP, drops
honeypot submissions, and writes to `inquiries/{inquiryId}` with `companyId`,
`type` and `status: 'new'`.

| Form | Page | `type` |
|---|---|---|
| Donate / sponsor | `/foundation/donate` | `donate` |
| Investment | `/invest`, `/hotels/invest`, `/hotels/residences` | `invest` |
| Booking / quote | `/media-house/book` | `book` |
| Wholesale / farmer | `/sunflower-factory/*`, `/farm/partner` | `wholesale` |
| Course enrolment | `/farm/agri-school`, `/tech/academy` | `enroll` |
| General contact | `/contact`, `/careers`, `/hotels/membership` | `contact` |

### Degradation — deliberate, and important

When Firestore credentials are absent, the API returns **503 with a plain
explanation** and the form tells the visitor their message was not recorded and
gives them an email address. It does not show a success message for a
submission that went nowhere. Same principle in `lib/payments.ts`: the
EmmanuelPay adapter refuses rather than pretending a charge succeeded, and the
donate page is presented as a pledge form until the gateway is connected.

If you wire up Firestore, nothing else needs to change.

---

## Before launch

### Content still to be confirmed with the client

These are placeholders written to be defensible, not invented facts. Each needs
the client's sign-off or replacement:

- **Leadership** — `content/group.ts` (`LEADERSHIP_NOTE`). No names published.
- **Contact details** — phone and address in `content/group.ts` are
  placeholders. Social links point at platform roots.
- **Company statuses** — `content/companies.ts`. Set conservatively from the
  brief; confirm each against reality before launch, and adjust the section's
  tense if any changes.
- **Media House portfolio** — `content/media-house.ts` describes the *kinds* of
  work the house takes on and says so on the page. Replace with real credits
  once clients clear them.
- **Foundation impact figures** — none published, by design
  (`content/foundation.ts`, `IMPACT_NOTE`). Publish only what can be evidenced.
- **Newsroom** — five seed posts describing decisions, not results. Replace as
  real news lands.
- **Legal pages** — `/legal/privacy` and `/legal/terms` are drafts and are
  labelled as such on the page. They must go to counsel.

### Assets not yet supplied

- **Photography and video.** Heroes currently use CSS gradients with a crest
  watermark. This is deliberate: shipping stock photography of a hotel that has
  not been built would undercut the status labels. `next/image` and the CDN
  remote patterns are configured (`next.config.ts`) — drop real assets into the
  heroes when they are licensed.
- **Foundation prospectus PDF.** `/foundation/prospectus` is a print-optimised
  page with a print/save-as-PDF action, which stays in sync with the site. If a
  designed PDF is supplied, put it in `public/` and point the button at it.
- **OG images.** Metadata is wired; per-subsidiary `opengraph-image` routes can
  be added under each section folder.

### Configuration

Set these in the hosting environment:

- `NEXT_PUBLIC_SITE_URL` — drives canonical URLs, `sitemap.xml` and `robots.txt`.
- `FIREBASE_SERVICE_ACCOUNT_JSON` (or the three `FIREBASE_*` fields) — server-side
  writes to `inquiries`. Without it, forms report honestly that they are not connected.
- `NEXT_PUBLIC_GA_ID` — analytics; nothing loads without it.
- `EMMANUELPAY_*` — see `lib/payments.ts` for the one function to implement.
- `NEXT_PUBLIC_CONTACT_EMAIL` — the fallback address shown when a form fails.

The per-IP rate limit in `app/api/inquiries/route.ts` is in-memory and therefore
per-instance. Behind more than one instance, move it to Firebase App Check or a
shared store.

---

## What has been verified

Against a production build served locally:

- All 49 sitemap URLs return 200.
- Every page has exactly one `<h1>` and a unique meta description.
- All 122 form controls across the site have an associated `<label for>`.
- No horizontal overflow and no console errors at 1440 / 768 / 375 px across
  twelve representative pages.
- The inquiries endpoint returns 422 with per-field errors on bad input, 503
  with an honest message when Firestore is unconfigured, and 200 for honeypot
  submissions so bots cannot detect the rejection.
- No "guaranteed returns" phrasing anywhere; the financial-technology
  disclosures render as intended.

Not yet done: a Lighthouse run (needs a deployed URL for a meaningful
Performance score), and real cross-browser/device testing.
