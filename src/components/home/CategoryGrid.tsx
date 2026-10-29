import { Link } from 'react-router'
import { categories } from '../../data/categories.ts'
import { countProductsInCategory } from '../../utils/catalog.ts'
import { paths } from '../../utils/paths.ts'
import { Section } from '../layout/Section.tsx'
import { ImageWithFallback } from '../ui/ImageWithFallback.tsx'
import './CategoryGrid.css'

export function CategoryGrid() {
  return (
    <Section
      id="categories"
      title="Shop by category"
      description="From the very first outfit to bedtime stories — find just what you need."
    >
      <ul className="category-grid">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={paths.category(category.id)}
              className={`category-tile${category.id === 'clothing' ? ' category-tile--featured' : ''}`}
            >
              <ImageWithFallback src={category.image} alt={category.imageAlt ?? ''} loading="lazy" className="category-tile__art" />
              <span className="category-tile__content">
                <span className="category-tile__name">{category.name}</span>
                <span className="category-tile__count">
                  {countProductsInCategory(category.id)} products
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
