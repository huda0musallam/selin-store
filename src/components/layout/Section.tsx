import { useId } from 'react'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Container } from './Container.tsx'
import './Section.css'

interface SectionProps {
  title: string
  description?: string
  /** Optional "View all" style link shown beside the heading */
  action?: { label: string; to: string }
  /** Background: plain white (default) or warm cream */
  tone?: 'default' | 'cream'
  id?: string
  children: ReactNode
}

/** A homepage-style section with a heading, optional link, and content. */
export function Section({
  title,
  description,
  action,
  tone = 'default',
  id,
  children,
}: SectionProps) {
  const headingId = useId()

  return (
    <section
      id={id}
      className={`section section--${tone}`}
      aria-labelledby={headingId}
    >
      <Container>
        <div className="section__header">
          <div className="section__heading">
            <h2 id={headingId} className="section__title">
              {title}
            </h2>
            {description && <p className="section__description">{description}</p>}
          </div>
          {action && (
            <Link to={action.to} className="section__action">
              {action.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          )}
        </div>
        {children}
      </Container>
    </section>
  )
}
