import { categories } from '../data/categories.ts'
import { products } from '../data/products.ts'
import type {
  Category,
  CategoryId,
  Product,
  ProductBadgeInfo,
} from '../types/product.ts'

export function getCategoryById(id: CategoryId): Category | undefined {
  return categories.find((category) => category.id === id)
}

export function getNewArrivals(limit?: number): Product[] {
  return products.filter((product) => product.isNew).slice(0, limit)
}

export function getBestSellers(limit?: number): Product[] {
  return products.filter((product) => product.isBestSeller).slice(0, limit)
}

export function countProductsInCategory(id: CategoryId): number {
  return products.filter((product) => product.categoryId === id).length
}

/** Whole-number discount, e.g. price 32 / original 40 → 20. */
export function getDiscountPercent(product: Product): number | null {
  if (!product.originalPrice || product.originalPrice <= product.price) {
    return null
  }
  return Math.round((1 - product.price / product.originalPrice) * 100)
}

/** A sale badge takes priority over a "New" badge. */
export function getProductBadge(product: Product): ProductBadgeInfo | null {
  const discount = getDiscountPercent(product)
  if (discount !== null) {
    return { label: `${discount}% off`, variant: 'sale' }
  }
  if (product.isNew) {
    return { label: 'New', variant: 'new' }
  }
  return null
}
