import type { ReactNode } from 'react'
import './Container.css'

interface ContainerProps {
  className?: string
  children: ReactNode
}

/** Centers content and limits it to the maximum page width (about 1280px). */
export function Container({ className, children }: ContainerProps) {
  return (
    <div className={['container', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
