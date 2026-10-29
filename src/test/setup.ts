// Runs before every test file.
// Adds DOM matchers such as toBeInTheDocument() to Vitest's expect().
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// jsdom doesn't implement scrolling; the router's scroll restoration calls it.
window.scrollTo = () => {}

// Remove rendered components after each test so tests don't affect each other.
afterEach(() => {
  cleanup()
})
