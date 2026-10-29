export interface NavLinkItem {
  label: string
  to: string
}

export interface FooterLinkGroup {
  title: string
  links: NavLinkItem[]
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Help',
    links: [
      { label: 'Shipping & delivery', to: '/help/shipping' },
      { label: 'Returns & exchanges', to: '/help/returns' },
      { label: 'Size guide', to: '/help/size-guide' },
      { label: 'Contact us', to: '/help/contact' },
    ],
  },
  {
    title: 'About Selin',
    links: [
      { label: 'Our story', to: '/about' },
      { label: 'Materials & care', to: '/about/materials' },
      { label: 'Gift cards', to: '/gift-cards' },
    ],
  },
]
