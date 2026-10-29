import type { LucideIcon } from 'lucide-react'
import type { Tone } from '../../types/product.ts'
import './PlaceholderArt.css'

interface PlaceholderArtProps {
  icon: LucideIcon
  tone: Tone
  className?: string
}

/**
 * Soft, original stand-in artwork used until real product photos are added.
 * It is decorative, so it is hidden from screen readers.
 */
export function PlaceholderArt({ icon: Icon, tone, className }: PlaceholderArtProps) {
  return (
    <div
      className={['placeholder-art', `placeholder-art--${tone}`, className]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <span className="placeholder-art__circle">
        <Icon className="placeholder-art__icon" strokeWidth={1.25} />
      </span>
    </div>
  )
}
