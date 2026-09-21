import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { listCompanies } from '@/lib/cms';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/layout/Analytics';
import { GROUP } from '@/content/group';
import { jsonLd, organizationSchema, SITE_URL } from '@/lib/seo';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${GROUP.name} — ${GROUP.tagline}`,
    template: `%s | ${GROUP.shortName}`,
  },
  description: GROUP.intro,
  applicationName: GROUP.name,
  keywords: [
    "God's Plan Group",
    'Cameroon',
    'foundation',
    'hospitality development',
    'agro-industry',
    'technology',
    'media production',
  ],
  openGraph: {
    type: 'website',
    siteName: GROUP.name,
    locale: 'en_GB',
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
};

/** Slimmed at the server boundary — see NavCompany in components/layout/Nav.tsx. */
const navCompanies = listCompanies().map((c) => ({
  slug: c.slug,
  name: c.name,
  sector: c.sector,
  accent: c.accent.color,
}));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
        <Nav companies={navCompanies} />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
