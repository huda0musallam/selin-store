import { Link } from 'react-router'
import type { Product } from '../../types/product.ts'
import { getCategoryById, getProductBadge } from '../../utils/catalog.ts'
import { paths } from '../../utils/paths.ts'
import { Badge } from '../ui/Badge.tsx'
import { ImageWithFallback } from '../ui/ImageWithFallback.tsx'
import { Price } from '../ui/Price.tsx'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryById(product.categoryId)
  const badge = getProductBadge(product)

  return (
    <article className="product-card">
      <div className="product-card__media">
        {product.image ? (
          <ImageWithFallback src={product.image} alt={product.imageAlt ?? product.name} loading="lazy" className="product-card__image" />
        ) : (
          <span className="product-card__empty-photo" aria-hidden="true">Photo coming soon</span>
        )}
        {badge && (
          <Badge variant={badge.variant} className="product-card__badge">
            {badge.label}
          </Badge>
        )}
      </div>

      <div className="product-card__body">
        {category && <p className="product-card__category">{category.name}</p>}
        <h3 className="product-card__title">
          {/* The link stretches over the whole card (see CSS) */}
          <Link to={paths.product(product.slug)} className="product-card__link">
            {product.name}
          </Link>
        </h3>
        <Price price={product.price} originalPrice={product.originalPrice} />
      </div>
    </article>
  )
}
