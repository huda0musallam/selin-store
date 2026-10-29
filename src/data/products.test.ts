import { describe, expect, it } from 'vitest'
import { categories } from './categories.ts'
import { products } from './products.ts'

// Guards against typos and mistakes when editing the mock catalog.
describe('mock catalog', () => {
  it('has unique product ids and slugs', () => {
    expect(new Set(products.map((p) => p.id)).size).toBe(products.length)
    expect(new Set(products.map((p) => p.slug)).size).toBe(products.length)
  })

  it('uses URL-safe slugs', () => {
    for (const product of products) {
      expect(product.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it('gives every category at least one product', () => {
    for (const category of categories) {
      expect(products.some((p) => p.categoryId === category.id)).toBe(true)
    }
  })

  it('only sets an original price when it is higher than the price', () => {
    for (const product of products) {
      expect(product.price).toBeGreaterThan(0)
      if (product.originalPrice !== undefined) {
        expect(product.originalPrice).toBeGreaterThan(product.price)
      }
    }
  })
})
