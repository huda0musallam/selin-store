# Selin Baby Store — Design System

## Brand direction

Selin is a frontend-only baby and children's essentials boutique. The visual identity is premium, warm, cheerful, and playful: vivid, distinguishable color accents and candid photography balanced with generous whitespace, clear layouts, and calm typography. Keep the experience trustworthy and easy for busy parents.

## Color palette and use

Define colors as CSS custom properties. Use the bright pastel palette as intentional accents across section bands, category cards, image mats, badges, and controls. Keep the page background predominantly white and warm cream; avoid washing the full page in one pink or beige tone.

- Blush pink: `#F4BFD0`
- Butter yellow: `#F5D45E`
- Mint green: `#A8DFC3`
- Sky blue: `#9DD8F0`
- Coral: `#F27A63`
- Deep coral (text and emphasis): `#9F3F32`
- Lilac (occasional supporting accent): `#CBB8E8`
- Primary rose: `#B97882`
- Deep rose: `#985D67`
- Warm cream: `#FAF7F2`
- White: `#FFFFFF`
- Main text: `#302A29`
- Secondary text: `#77706C`
- Border: `#E9E2DC`
- Sale: `#B84F4F`
- Success: `#4F7D5B`

Use dark, high-contrast text on pastel fills. Primary buttons use deep rose with white text; secondary actions may use mint or white with dark text. Use deep coral for emphasis and links where it meets contrast needs. Sale labels use dark coral or sale red with white; new labels use a light accent with dark text. Preserve visible keyboard focus rings.

## Photography and image sources

- Keep images bright and natural, with a consistent editorial feel and intentional crops. Use real photography rather than decorative placeholder illustrations.
- The palette frames photography rather than tinting every tile: category imagery has landscape crops; product cards share 3:4 frames; hero and promotion imagery have wider, responsive crops.
- Match images to what the category or product actually is. Show garments or babies wearing garments for clothing, feeding tools or feeding moments for feeding, real toys for toys, and grouped essentials for kits when possible.
- Current local JPEG assets live in `public/images/` and are referenced with root-relative `/images/...` paths. Local files avoid runtime dependence on remote image hosts. `ImageWithFallback` retains a calm neutral fallback for load failures.
- Meaningful images have descriptive alt text. Alt text describes only what the image depicts, not unshown contents of a named product.
- Asset source pages are recorded below for traceability. This is not a claim that any image is licensed or cleared for commercial use; verify rights before commercial deployment.

### Current asset sources and known gaps

- Hero mother and baby: [Unsplash source page](https://unsplash.com/photos/smiling-woman-carrying-baby-RWgE9_lKj_Y) (`hero-mother-baby.jpg`)
- Clothing category baby in knitwear: [Unsplash source page](https://unsplash.com/photos/a-baby-wearing-a-white-knitted-outfit-and-booties-4vJk0dt8TNw) (`category-clothing.jpg`)
- Newborn category: [Unsplash source page](https://unsplash.com/photos/newborn-baby-wearing-a-white-hat-and-pink-dress-zYhtFl4mC70) (`category-newborn.jpg`)
- Feeding category: [Unsplash source page](https://unsplash.com/photos/person-feeding-baby-from-feeding-bottle-TCYj_UxoIUY) (`category-feeding.jpg`)
- Bath category: [Unsplash source page](https://unsplash.com/photos/girl-covered-with-white-towel-UvZzgPeDl60) (`category-bath-care.jpg`)
- Sleep category: [Unsplash source page](https://unsplash.com/photos/a-baby-is-sleeping-in-a-white-crib-kitq4DQ4kPA) (`category-sleep.jpg`)
- Toys category: [Unsplash source page](https://unsplash.com/photos/wooden-shape-sorter-toy-with-colorful-blocks-E1shiIGT8Oo) (`category-toys.jpg`)
- Accessories category: [Unsplash source page](https://unsplash.com/photos/closeup-photo-of-white-shoes-9BMvbnkwVZ0) (`category-accessories-white-shoes.jpg`)
- Bodysuit: [Unsplash source page](https://unsplash.com/photos/baby-in-white-onesie-lying-on-white-textile-nfF-8tF5gsc) (`product-bodysuit.jpg`)
- Romper: [Unsplash source page](https://unsplash.com/photos/smiling-baby-in-grey-romper-OJOE587CWuE) (`product-romper.jpg`)
- Knit cardigan: [Pexels source page](https://www.pexels.com/photo/baby-in-white-sweater-sitting-on-the-floor-3965550/) (`product-cardigan-pexels.jpg`)
- Hospital starter kit: [Pexels source page](https://www.pexels.com/photo/black-and-white-striped-baby-outfit-flat-lay-34121887/) (`product-hospital-set-pexels.jpg`). The photo shows an outfit, hat, and shoes, but not the listed mittens or swaddle; treat it as a representative image until a full-kit photograph is available.
- Hat and mitten set: [Unsplash source page](https://unsplash.com/photos/a-baby-wearing-a-blue-knitted-hat-and-diaper-6WACFa0qy9s) (`product-hat-mittens.jpg`). The image shows a hat but does not show the included mittens; a set-specific photo is still needed.
- Swaddle: [Unsplash source page](https://unsplash.com/photos/a-newborn-baby-sleeps-peacefully-on-a-soft-blanket-NfE2M4Z9rME) (`product-swaddle.jpg`)
- Suction plate: [Unsplash source page](https://unsplash.com/photos/a-childs-plate-with-two-spoons-and-a-spoon-rest-on-a-stove-ioGJcLOoTPU) (`product-suction-plate.jpg`)
- Glass bottle set: [Unsplash source page](https://unsplash.com/photos/a-baby-bottle-sitting-next-to-a-cup-8yDbxoPySYM) (`product-glass-bottles.jpg`). This is a single bottle, not a glass bottle set; replace with a verified, accurate set photo before presenting it as an exact product image.
- Promotion mother and baby: [Unsplash source page](https://unsplash.com/photos/a-woman-holding-a-baby-wrapped-in-a-blanket-6GyuYSV6CIE) (`promo-blanket-baby.jpg`)

## Typography and layout

- Headings: Nunito; body and interface: Inter, both with sensible fallbacks.
- Maintain a clear heading hierarchy and comfortable readable sizes.
- Limit content width to approximately 1280px, use generous whitespace, and base spacing on multiples of 4px.
- Use CSS Grid for product collections and flexible layouts for navigation and product information.
- Keep section spacing deliberate so the homepage feels polished without unnecessary length.

## Header and homepage

The shared header includes the Selin wordmark, product category navigation, search, wishlist, and shopping bag. Keep the shipping announcement compact on warm cream so it reads as supporting information rather than a second header. Pair it with a small rose delivery icon and centered, readable copy.

Use the existing “selin” text wordmark in Nunito with a refined bold weight, close letter spacing, and deep rose color. It is styled text, not a custom font or vector logo. Keep the wordmark optically centered between balanced icon groups. Use restrained category spacing, a subtle hover color, a clear active underline on desktop, and visible keyboard focus. Keep the mobile menu accessible and prevent header controls from wrapping at narrow widths.

Preserve the existing homepage sections and develop them incrementally: announcement bar; header and navigation; hero; shop by category; new arrivals; best sellers; promotional collection; featured essentials; social gallery; footer. Do not build all sections in one task.

## Cards and controls

Category cards pair distinct photography with clear category names and counts. Product cards can show product photography, name, price, optional original price, sale or new badge, and wishlist control. Keep product information visible on mobile.

The homepage “Shop by category” section uses a photo-led Bento Grid: Baby Clothing is the featured tile, with the other six categories arranged as supporting tiles. Use consistent image crops, a restrained dark photo gradient behind white labels, and small palette-colored count pills for contrast. Keep the real category links, existing category data, and counts. At narrow mobile widths, the featured tile spans the grid and supporting tiles use two readable columns; tablet uses four columns, and wide desktop uses five columns to create a balanced two-row composition.

Use consistent primary, secondary, and text buttons. Provide subtle hover states, clear labels, visible focus states, comfortable touch targets, and accessible form controls.

## Responsive design and accessibility

- Support mobile from 320px, tablet from 768px, and desktop from 1024px.
- Use responsive CSS and prevent horizontal overflow.
- Use semantic HTML, descriptive alt text, keyboard-accessible controls, readable contrast, and proper form labels.
- Respect reduced-motion preferences.

## Design consistency

Use reusable components and design tokens. Avoid excessive shadows, animation, clutter, and unnecessary gradients. Keep the result photo-led, colorful, cohesive, and suitable for a premium baby store.
