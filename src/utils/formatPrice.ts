const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

/** Formats a dollar amount for display, e.g. 34 → "$34.00". */
export function formatPrice(amount: number): string {
  return priceFormatter.format(amount)
}
