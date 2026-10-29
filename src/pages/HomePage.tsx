import { CategoryGrid } from '../components/home/CategoryGrid.tsx'
import { Hero } from '../components/home/Hero.tsx'
import { PromoBanner } from '../components/home/PromoBanner.tsx'
import { Section } from '../components/layout/Section.tsx'
import { ProductGrid } from '../components/product/ProductGrid.tsx'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { getBestSellers, getNewArrivals } from '../utils/catalog.ts'
import { paths } from '../utils/paths.ts'

const PRODUCTS_PER_SECTION = 4

export function HomePage() {
  usePageTitle()

  return (
    <>
      <Hero />
      <CategoryGrid />
      <Section
        title="New arrivals"
        description="Fresh styles and essentials, just landed."
        action={{ label: 'View all', to: paths.newArrivals }}
        tone="cream"
      >
        <ProductGrid products={getNewArrivals(PRODUCTS_PER_SECTION)} />
      </Section>
      <Section
        title="Best sellers"
        description="The pieces parents come back for again and again."
        action={{ label: 'View all', to: paths.bestSellers }}
      >
        <ProductGrid products={getBestSellers(PRODUCTS_PER_SECTION)} />
      </Section>
      <PromoBanner />
    </>
  )
}
