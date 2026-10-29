import { Link } from 'react-router'
import { categories } from '../../data/categories.ts'
import { footerLinkGroups } from '../../data/navigation.ts'
import { paths } from '../../utils/paths.ts'
import { Wordmark } from '../ui/Wordmark.tsx'
import { Container } from './Container.tsx'
import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Wordmark />
            <p className="site-footer__tagline">
              Gentle, thoughtfully made essentials for babies and little ones —
              chosen with care for growing families.
            </p>
          </div>

          <nav className="site-footer__group" aria-labelledby="footer-shop">
            <h2 id="footer-shop" className="site-footer__heading">
              Shop
            </h2>
            <ul className="site-footer__links">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={paths.category(category.id)}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {footerLinkGroups.map((group) => {
            const headingId = `footer-${group.title.toLowerCase().replace(/\s+/g, '-')}`
            return (
              <nav key={group.title} className="site-footer__group" aria-labelledby={headingId}>
                <h2 id={headingId} className="site-footer__heading">
                  {group.title}
                </h2>
                <ul className="site-footer__links">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          })}
        </div>

        <div className="site-footer__bottom">
          <p>© {CURRENT_YEAR} Selin Baby Store</p>
          <p>Demo store — no real orders or payments are processed.</p>
        </div>
      </Container>
    </footer>
  )
}
