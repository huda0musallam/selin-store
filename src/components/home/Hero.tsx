import { Heart, Sparkles } from 'lucide-react'
import { paths } from '../../utils/paths.ts'
import { Container } from '../layout/Container.tsx'
import { ButtonLink } from '../ui/Button.tsx'
import { ImageWithFallback } from '../ui/ImageWithFallback.tsx'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">The new season collection</p>
          <h1 id="hero-title" className="hero__title">
            Soft beginnings for your little one
          </h1>
          <p className="hero__text">
            Thoughtfully made clothing, sleep, and care essentials — gentle on
            delicate skin and easy for busy parents.
          </p>
          <div className="hero__actions">
            <ButtonLink to={paths.newArrivals} size="lg">
              Shop new arrivals
            </ButtonLink>
            <ButtonLink to={paths.bestSellers} variant="secondary" size="lg">
              See best sellers
            </ButtonLink>
          </div>
        </div>

        <div className="hero__art">
          <ImageWithFallback
            className="hero__photo"
            src="/images/hero-mother-baby.jpg"
            alt="A mother holding her baby close and smiling"
            fetchPriority="high"
            loading="eager"
          />
          <span className="hero__sparkle" aria-hidden="true"><Sparkles /></span>
          <span className="hero__note">
            <Heart size={16} strokeWidth={2} aria-hidden="true" />
            Organic cotton, made to last
          </span>
        </div>
      </Container>
    </section>
  )
}
