import { Outlet, ScrollRestoration } from 'react-router'
import { AnnouncementBar } from './AnnouncementBar.tsx'
import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'
import './Layout.css'

/** The shared page shell: announcement bar, header, page content, footer. */
export function Layout() {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content" className="layout__main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
