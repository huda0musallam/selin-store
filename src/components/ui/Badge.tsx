import type { ReactNode } from 'react'
import './Badge.css'

interface BadgeProps {
  variant: 'sale' | 'new'
  className?: string
  children: ReactNode
}

export function Badge({ variant, className, children }: BadgeProps) {
  return (
    <span className={['badge', `badge--${variant}`, className].filter(Boolean).join(' ')}>
      {children}
    </span>
  )
}
