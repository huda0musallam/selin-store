import { describe, expect, it } from 'vitest'
import type { Product } from '../types/product.ts'
import {
  getBestSellers,
  getDiscountPercent,
  getNewArrivals,
  getProductBadge,
} from './catalog.ts'

const baseProduct: Product = {
  id: 'test',
  slug: 'test-product',
  name: 'Test Product',
  categoryId: 'toys',
  price: 32,
  shortDescription: 'A product for tests.',
  tone: 'cream',
}

describe('getDiscountPercent', () => {
  it('returns the rounded percentage off', () => {
    expect(getDiscountPercent({ ...baseProduct, originalPrice: 40 })).toBe(20)
  })

  it('returns null when there is no discount', () => {
    expect(getDiscountPercent(baseProduct)).toBeNull()
    expect(getDiscountPercent({ ...baseProduct, originalPrice: 32 })).toBeNull()
  })
})

describe('getProductBadge', () => {
  it('shows a sale badge before a new badge', () => {
    expect(
      getProductBadge({ ...baseProduct, originalPrice: 40, isNew: true }),
    ).toEqual({ label: '20% off', variant: 'sale' })
  })

  it('shows a new badge for new products', () => {
    expect(getProductBadge({ ...baseProduct, isNew: true })).toEqual({
      label: 'New',
      variant: 'new',
    })
  })

  it('shows no badge otherwise', () => {
    expect(getProductBadge(baseProduct)).toBeNull()
  })
})

describe('collections', () => {
  it('returns only new products, up to the limit', () => {
    const items = getNewArrivals(4)
    expect(items).toHaveLength(4)
    expect(items.every((product) => product.isNew)).toBe(true)
  })

  it('returns only best sellers, up to the limit', () => {
    const items = getBestSellers(4)
    expect(items).toHaveLength(4)
    expect(items.every((product) => product.isBestSeller)).toBe(true)
  })
})
