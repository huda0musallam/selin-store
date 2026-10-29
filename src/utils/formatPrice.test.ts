import { describe, expect, it } from 'vitest'
import { formatPrice } from './formatPrice.ts'

describe('formatPrice', () => {
  it('formats whole dollars with two decimals', () => {
    expect(formatPrice(34)).toBe('$34.00')
  })

  it('formats cents', () => {
    expect(formatPrice(19.5)).toBe('$19.50')
  })

  it('adds thousands separators', () => {
    expect(formatPrice(1250)).toBe('$1,250.00')
  })
})
