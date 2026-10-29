import { paths } from '../../utils/paths.ts'
import { Container } from '../layout/Container.tsx'
import { ButtonLink } from '../ui/Button.tsx'
import { ImageWithFallback } from '../ui/ImageWithFallback.tsx'
import './PromoBanner.css'

export function PromoBanner() {
  return (
    <section className="promo" aria-labelledby="promo-title">
      <Container>
        <div className="promo__card">
          <div className="promo__content">
            <p className="promo__eyebrow">Limited time</p>
            <h2 id="promo-title" className="promo__title">
              The Sleepy Time Collection
            </h2>
            <p className="promo__text">
              Up to 20% off sleep sacks, crib sheets, and night lights — everything
              for calmer evenings and cozier nights.
            </p>
            <ButtonLink to={paths.category('sleep')} size="lg">
              Shop the collection
            </ButtonLink>
          </div>

          <div className="promo__art">
            <ImageWithFallback
              src="/images/promo-blanket-baby.jpg"
              alt="A mother cuddling her baby wrapped in a blanket"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
