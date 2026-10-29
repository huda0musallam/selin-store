import { useEffect, useRef, useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router'
import { categories } from '../../data/categories.ts'
import { paths } from '../../utils/paths.ts'
import { Wordmark } from '../ui/Wordmark.tsx'
import { Container } from './Container.tsx'
import './Header.css'

const DESKTOP_QUERY = '(min-width: 1024px)'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  // While the mobile menu is open: move focus into it, close it with Escape,
  // and close it if the window grows to desktop width.
  useEffect(() => {
    if (!isMenuOpen) return

    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    const desktop = window.matchMedia?.(DESKTOP_QUERY)
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }
    desktop?.addEventListener('change', handleResize)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktop?.removeEventListener('change', handleResize)
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <Container className="site-header__bar">
        <div className="site-header__start">
          <button
            ref={toggleRef}
            type="button"
            className="icon-link site-header__menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <Link to={paths.search} className="icon-link" aria-label="Search">
            <Search aria-hidden="true" />
          </Link>
        </div>

        <Wordmark size="lg" />

        <div className="site-header__end">
          <Link to={paths.wishlist} className="icon-link" aria-label="Wishlist">
            <Heart aria-hidden="true" />
          </Link>
          <Link to={paths.cart} className="icon-link" aria-label="Shopping cart">
            <ShoppingBag aria-hidden="true" />
          </Link>
        </div>
      </Container>

      <nav
        id="site-nav"
        className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
        aria-label="Main"
      >
        <Container>
          <ul className="site-nav__list">
            <li>
              <NavLink
                ref={firstLinkRef}
                to={paths.shop}
                end
                className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                onClick={closeMenu}
              >
                Shop All
              </NavLink>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  to={paths.category(category.id)}
                  className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {category.navLabel}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  )
}
