import { describe, expect, it } from 'vitest'
// "?raw" asks Vite to import the file's text instead of applying it as CSS
import tokens from './tokens.css?raw'

// The palette defined in design.md, mapped to its CSS variable name
const designPalette: Record<string, string> = {
  '--color-primary': '#b97882',
  '--color-primary-hover': '#985d67',
  '--color-soft-pink': '#f5e6e7',
  '--color-warm-cream': '#faf7f2',
  '--color-white': '#ffffff',
  '--color-text': '#302a29',
  '--color-text-secondary': '#77706c',
  '--color-border': '#e9e2dc',
  '--color-sale': '#b84f4f',
  '--color-success': '#4f7d5b',
}

describe('design tokens', () => {
  it.each(Object.entries(designPalette))(
    'defines %s as %s',
    (name, value) => {
      expect(tokens).toContain(`${name}: ${value};`)
    },
  )

  it('uses Nunito for headings and Inter for body text', () => {
    expect(tokens).toMatch(/--font-heading: 'Nunito',/)
    expect(tokens).toMatch(/--font-body: 'Inter',/)
  })

  it('caps content width at 1280px', () => {
    expect(tokens).toContain('--container-max: 1280px;')
  })
})
