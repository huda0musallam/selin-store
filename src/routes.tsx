import type { RouteObject } from 'react-router'
import { Layout } from './components/layout/Layout.tsx'
import { ComingSoonPage } from './pages/ComingSoonPage.tsx'
import { HomePage } from './pages/HomePage.tsx'

// All pages share the Layout (header + footer). Pages that aren't built yet
// fall through to the "coming soon" page.
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <ComingSoonPage /> },
    ],
  },
]
