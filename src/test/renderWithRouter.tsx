import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from '../routes.tsx'

/** Renders a single component inside an in-memory router (so <Link> works). */
export function renderWithRouter(ui: ReactElement) {
  const router = createMemoryRouter([{ path: '*', element: ui }])
  return render(<RouterProvider router={router} />)
}

/** Renders the real app routes, starting at the given URL. */
export function renderApp(url = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [url] })
  return { router, ...render(<RouterProvider router={router} />) }
}
