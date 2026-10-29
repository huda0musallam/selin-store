import { Truck } from 'lucide-react'
import './AnnouncementBar.css'

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p className="announcement-bar__text">
        <Truck size={16} aria-hidden="true" />
        Free shipping on orders over $75 · Easy 30-day returns
      </p>
    </div>
  )
}
