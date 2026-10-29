import { Container } from '../components/layout/Container.tsx'
import { ButtonLink } from '../components/ui/Button.tsx'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import { paths } from '../utils/paths.ts'
import './ComingSoonPage.css'

/** Shown for pages that are planned but not built yet (shop, cart, etc.). */
export function ComingSoonPage() {
  usePageTitle('Coming soon')

  return (
    <Container className="coming-soon">
      <h1 className="coming-soon__title">This page is on its way</h1>
      <p className="coming-soon__text">
        We're still stitching this part of the store together. Please check back soon.
      </p>
      <ButtonLink to={paths.home}>Back to the homepage</ButtonLink>
    </Container>
  )
}
