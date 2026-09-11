import { Hero } from '@/components/ui/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Grid, Prose, Disclosure } from '@/components/ui/Bits';
import { LinkCard } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/Button';
import { CTABanner } from '@/components/ui/CTABanner';
import { requireCompany } from '@/lib/cms';
import { pageMetadata } from '@/lib/seo';

const company = requireCompany('sunflower-factory');

export const metadata = pageMetadata({
  title: 'God’s Plan Sunflower Factory',
  description: company.summary,
  path: '/sunflower-factory',
  company,
});

export default function SunflowerPage() {
  return (
    <>
      <Hero
        eyebrow="God’s Plan Sunflower Factory"
        title="From Our Fields to Your Table."
        lede="A sunflower crushing and refining plant in planning, designed to be supplied by the farmers around it rather than by an import queue."
        status={company.status}
        actions={
          <>
            <ButtonLink href="/sunflower-factory/farmers" size="lg">
              Farmer partnership
            </ButtonLink>
            <ButtonLink href="/sunflower-factory/wholesale" variant="onDark" size="lg">
              Trade enquiry
            </ButtonLink>
          </>
        }
      />

      <Section tone="white">
        <div className="mb-12">
          <Disclosure title="Please read — the plant is not built">
            <p>
              God&apos;s Plan Sunflower Factory is in detailed feasibility. No plant has been
              constructed, no oil is being pressed or bottled, and no product is on sale.
            </p>
            <p>
              The product line, sizes and specifications on these pages describe what is planned.
              Trade and farmer enquiries register interest so the project can be planned around real
              demand and real acreage — they are not orders and no supply is committed.
            </p>
          </Disclosure>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader eyebrow="The plan" title="Why build the mill where the seed grows" />
            <Prose>
              <p>
                The region grows sunflower and imports sunflower oil. Seed leaves as a raw commodity
                at commodity prices; refined oil comes back in a bottle at a margin someone else
                keeps. The value added in between happens somewhere other than here.
              </p>
              <p>
                A crushing and refining plant sited among the farms closes that loop. The farmer gets
                a contracted buyer at an agreed price. The press cake — the protein left after
                extraction — goes straight into the group&apos;s own feed mill instead of being
                shipped away. And the oil on the shelf is milled a few hours from where the seed was
                cut.
              </p>
              <p>
                That is the whole argument. It depends on the feasibility study, the financing and the
                farmer network all holding up, which is exactly what is being tested now.
              </p>
            </Prose>
          </div>
          <div className="space-y-6">
            <LinkCard
              href="/sunflower-factory/farmers"
              title="Farmers"
              body="Contracted prices agreed before planting, seed and inputs supplied, and collection from agreed points."
              footer="Join the programme"
            />
            <LinkCard
              href="/sunflower-factory/wholesale"
              title="Trade buyers"
              body="Supermarkets, distributors, manufacturers and export buyers — register interest for first supply."
              footer="Register interest"
            />
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader eyebrow="Explore" title="The plan in detail" />
        <Grid cols={3}>
          <LinkCard href="/sunflower-factory/products" title="Product line" body="Retail bottles from 500 ml to 5 L, catering packs, bulk, crude oil and seed cake." footer="See the range" />
          <LinkCard href="/sunflower-factory/quality" title="Quality & process" body="Intake through to filling, and the quality commitments the plant is being designed around." footer="See the process" />
          <LinkCard href="/sunflower-factory/farmers" title="Farmer partnership" body="Contract farming built so the farmer is not the party carrying all the risk." footer="See the terms" />
        </Grid>
      </Section>

      <CTABanner
        eyebrow="Get involved early"
        title="Farmers and buyers shape the plant"
        body="Registered acreage and registered demand are what turn a feasibility study into a financing case."
        primary={{ href: '/sunflower-factory/farmers', label: 'Register as a farmer' }}
        secondary={{ href: '/sunflower-factory/wholesale', label: 'Register as a buyer' }}
      />
    </>
  );
}
