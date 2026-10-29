import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithRouter } from '../../test/renderWithRouter.tsx'
import { Header } from './Header.tsx'

describe('Header', () => {
  it('has labelled links for search, wishlist, and cart', () => {
    renderWithRouter(<Header />)

    expect(screen.getByRole('link', { name: 'Search' })).toHaveAttribute('href', '/search')
    expect(screen.getByRole('link', { name: 'Wishlist' })).toHaveAttribute('href', '/wishlist')
    expect(screen.getByRole('link', { name: 'Shopping cart' })).toHaveAttribute('href', '/cart')
  })

  it('lists every category in the main navigation', () => {
    renderWithRouter(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveTextContent('Shop All')
    expect(nav).toHaveTextContent('Bath & Care')
    expect(nav).toHaveTextContent('Accessories')
  })

  it('opens the mobile menu, moves focus into it, and closes with Escape', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Close menu')
    expect(screen.getByRole('link', { name: 'Shop All' })).toHaveFocus()

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Sleep' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
