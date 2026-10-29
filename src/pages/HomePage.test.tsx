import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderApp } from '../test/renderWithRouter.tsx'

describe('HomePage', () => {
  it('shows the hero headline as the only level-one heading', () => {
    renderApp('/')

    const h1s = screen.getAllByRole('heading', { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0]).toHaveTextContent('Soft beginnings for your little one')
  })

  it('shows every homepage section in order', () => {
    renderApp('/')

    const sectionTitles = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)

    expect(sectionTitles.slice(0, 4)).toEqual([
      'Shop by category',
      'New arrivals',
      'Best sellers',
      'The Sleepy Time Collection',
    ])
  })

  it('shows all seven categories and four products in each collection', () => {
    renderApp('/')

    const categories = screen.getByRole('region', { name: 'Shop by category' })
    expect(within(categories).getAllByRole('listitem')).toHaveLength(7)

    const newArrivals = screen.getByRole('region', { name: 'New arrivals' })
    expect(within(newArrivals).getAllByRole('article')).toHaveLength(4)

    const bestSellers = screen.getByRole('region', { name: 'Best sellers' })
    expect(within(bestSellers).getAllByRole('article')).toHaveLength(4)
  })

  it('sets the page title', () => {
    renderApp('/')
    expect(document.title).toBe('Selin Baby Store')
  })

  it('shows a "coming soon" page for pages not built yet', async () => {
    const user = userEvent.setup()
    renderApp('/')

    await user.click(screen.getByRole('link', { name: 'Shopping cart' }))

    expect(
      screen.getByRole('heading', { level: 1, name: 'This page is on its way' }),
    ).toBeInTheDocument()
  })
})
