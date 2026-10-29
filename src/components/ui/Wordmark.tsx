import { Link } from 'react-router'
import { paths } from '../../utils/paths.ts'
import './Wordmark.css'

interface WordmarkProps {
  size?: 'md' | 'lg'
}

/** The Selin text logo, linking back to the homepage. */
export function Wordmark({ size = 'md' }: WordmarkProps) {
  return (
    <Link to={paths.home} className={`wordmark wordmark--${size}`} aria-label="Selin home">
      selin
    </Link>
  )
}
