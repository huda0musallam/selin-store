import type { CategoryId } from '../types/product.ts'

// Central place for app URLs, so links stay consistent as pages are added.
export const paths = {
  home: '/',
  shop: '/shop',
  search: '/search',
  wishlist: '/wishlist',
  cart: '/cart',
  newArrivals: '/shop?collection=new',
  bestSellers: '/shop?collection=best-sellers',
  category: (id: CategoryId) => `/shop?category=${id}`,
  product: (slug: string) => `/product/${slug}`,
}
