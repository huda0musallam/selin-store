import type { LucideIcon } from 'lucide-react'

/** Soft background colors used for placeholder artwork (see tokens.css tints). */
export type Tone = 'blush' | 'pink' | 'cream' | 'sage' | 'sand'

export type CategoryId =
  | 'clothing'
  | 'newborn'
  | 'feeding'
  | 'bath-care'
  | 'sleep'
  | 'toys'
  | 'accessories'

export interface Category {
  id: CategoryId
  name: string
  /** Shorter label for the header navigation */
  navLabel: string
  description: string
  icon: LucideIcon
  tone: Tone
  image: string
  imageAlt?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  categoryId: CategoryId
  /** Price in US dollars */
  price: number
  /** Price before a sale; only set when the product is discounted */
  originalPrice?: number
  isNew?: boolean
  isBestSeller?: boolean
  shortDescription: string
  tone: Tone
  /** Optional icon for the placeholder art; defaults to the category icon */
  icon?: LucideIcon
  /** Optional local photo path; a neutral fallback is shown when no photo is available. */
  image?: string
  imageAlt?: string
}

export interface ProductBadgeInfo {
  label: string
  variant: 'sale' | 'new'
}
