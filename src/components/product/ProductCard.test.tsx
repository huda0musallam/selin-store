import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithRouter } from '../../test/renderWithRouter.tsx'
import type { Product } from '../../types/product.ts'
import { ProductCard } from './ProductCard.tsx'

const product: Product = {
  id: 'test',
  slug: 'floral-muslin-dress',
  name: 'Floral Muslin Dress',
  categoryId: 'clothing',
  price: 32,
  originalPrice: 40,
  shortDescription: 'Light, airy muslin.',
  tone: 'pink',
}

describe('ProductCard', () => {
  it('links the product name to its details page', () => {
    renderWithRouter(<ProductCard product={product} />)

    expect(screen.getByRole('link', { name: 'Floral Muslin Dress' })).toHaveAttribute(
      'href',
      '/product/floral-muslin-dress',
    )
  })

  it('shows the sale price, original price, and discount badge', () => {
    const { container } = renderWithRouter(<ProductCard product={product} />)

    // Screen readers hear the hidden labels as part of the price line
    expect(container.querySelector('.price')).toHaveTextContent(
      'Sale price $32.00 Original price $40.00',
    )
    expect(screen.getByText('20% off')).toBeInTheDocument()
  })

  it('shows the category name', () => {
    renderWithRouter(<ProductCard product={product} />)

    expect(screen.getByText('Baby Clothing')).toBeInTheDocument()
  })

  it('shows a plain price and "New" badge for new, full-price products', () => {
    renderWithRouter(
      <ProductCard product={{ ...product, originalPrice: undefined, isNew: true }} />,
    )

    expect(screen.getByText('$32.00')).toBeInTheDocument()
    expect(screen.queryByText('Original price', { exact: false })).not.toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
  })
})
