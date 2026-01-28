# Yakra.lk - Premium Organics & Glamping Website

A sleek, premium, e-commerce-style frontend for **Yakra.lk** (Yakra Organics + Yakra Glamp). Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

The site will be available at `http://localhost:3000`

---

## 📂 Project Structure

```
├── public/                  # Static assets
│   ├── media/              # Brand images (hero, contact, icons)
│   └── products/           # Product images by slug
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page with form
│   │   ├── glamp/          # Coming soon page
│   │   ├── organics/       # Products listing and search
│   │   │   └── [slug]/     # Dynamic product pages
│   │   ├── layout.tsx      # Root layout with header/footer
│   │   └── page.tsx        # Home page
│   ├── components/          # Reusable UI components
│   ├── data/               # Site and product data
│   │   ├── products.ts     # Product catalog
│   │   └── siteConfig.ts   # Brand, contact, and social settings
│   └── lib/                # Utility functions
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

---

## 🎨 Color Palette (Dark Forest Theme)

The site uses a custom dark forest color palette:
- **forest-950**: Main background (#0a120f)
- **forest-100**: Primary text (#e8ece9)
- **accent-500**: Accent color (#84a98c)

---

## ⚙️ Configuration Guide

### 1. Site Branding & Contact Info

All site-wide settings are in `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: 'Yakra.lk',
  description: 'Your description here',
  siteUrl: 'https://yakra.lk',
  heroImage: '/media/hero.svg',

  // 📧 Contact Information
  contact: {
    email: 'hello@yakra.lk',
    phoneDisplay: '+94 77 123 4567',
    address: 'Sri Lanka'
  },

  // 🔗 Social Media Links
  social: {
    instagram: 'https://instagram.com/yakra',
    facebook: 'https://facebook.com/yakra'
  }
} as const;
```

#### Changing Contact Details

**Email Address:**
```typescript
contact: {
  email: 'your-email@example.com',  // ← Change this
  // ...
}
```

**Phone Display:**
```typescript
contact: {
  phoneDisplay: '+94 77 987 6543',  // ← Change this (shown to users)
  // ...
}
```

**Note:** For WhatsApp functionality, update the centralized WhatsApp number in `src/data/whatsapp.ts` (see section 3 below).

**Physical Address:**
```typescript
contact: {
  address: '123 Street Name, Colombo, Sri Lanka',  // ← Change this
  // ...
}
```

#### Changing Instagram URL

Navigate to `src/data/siteConfig.ts` and update:

```typescript
social: {
  instagram: 'https://instagram.com/yourusername',  // ← Change this
  facebook: 'https://facebook.com/yourpage'
}
```

The Instagram URL is used in two places:
1. **Contact page** (`src/app/contact/page.tsx`) - Shown in the contact section
2. **Footer** (`src/components/SiteFooter.tsx`) - Social media icon link

#### Changing Facebook URL

Navigate to `src/data/siteConfig.ts` and update:

```typescript
social: {
  instagram: 'https://instagram.com/yourusername',
  facebook: 'https://facebook.com/yourpage'  // ← Change this
}
```

The Facebook URL is used in two places:
1. **Contact page** (`src/app/contact/page.tsx`) - Shown in the contact section
2. **Footer** (`src/components/SiteFooter.tsx`) - Social media icon link

**Note:** You don't need to edit the footer or contact page files directly. Just update `siteConfig.ts` and changes will reflect everywhere automatically.

#### Changing Footer Contact Info

The footer automatically pulls contact info from `siteConfig.ts`. To change what appears in the footer:

```typescript
// In src/data/siteConfig.ts
contact: {
  email: 'new-email@example.com',        // ← Footer will use this
  phoneDisplay: '+94 11 234 5678',        // ← Footer will use this
  address: 'New Address, Sri Lanka'       // ← Footer will use this
}
```

To change the WhatsApp number used by the footer link, update `WHATSAPP_NUMBER` in `src/data/whatsapp.ts`.

### 2. Hero Image

The hero section background image is set in `src/data/siteConfig.ts`:

```typescript
heroImage: '/media/hero.svg',  // ← Change this filename
```

**Steps to change:**
1. Place your new hero image in `public/media/`
2. Update the `heroImage` value with your new filename
3. The image can be SVG, JPG, PNG, or WebP format

### 3. WhatsApp Number Configuration

All WhatsApp links throughout the site use a single centralized configuration in `src/data/whatsapp.ts`:

```typescript
// WhatsApp number in E.164 format without the + symbol
// Format: country code + number (e.g., 94771234567 for Sri Lanka)
export const WHATSAPP_NUMBER = '94771234567';
```

**To change the WhatsApp number:**
1. Open `src/data/whatsapp.ts`
2. Update the `WHATSAPP_NUMBER` constant with your number in international format (no + symbol)
3. Example: For Sri Lankan number +94 77 123 4567, use: `'94771234567'`

This number is automatically used for:
- WhatsApp Order buttons on product pages (with buying options)
- WhatsApp inquiry buttons on regular product pages
- WhatsApp links in the footer
- WhatsApp links on the contact page
- Contact form WhatsApp submission

### 4. Product Management

All product data is stored in `src/data/products.ts`. No database needed!

#### Adding a New Product

```typescript
{
  id: 'yakra-new-product',
  slug: 'new-product',
  name: 'New Product Name',
  category: 'Dehydrated Powders',  // or 'Microgreens'
  tags: ['tag1', 'tag2', 'tag3'],
  shortDescription: 'Brief one-line description',
  description: 'Full detailed description of the product...',
  priceLkr: 4500,
  images: ['/products/new-product/1.svg', '/products/new-product/2.svg'],
  usage: 'How to use this product...',
  storage: 'Storage instructions...',
  shelfLife: 'Shelf life information...',
  featured: true  // Optional: show on homepage
}
```

#### Product Images

1. Create a folder in `public/products/` with the product slug: `public/products/new-product/`
2. Add your product images to that folder
3. Reference them in the product's `images` array

#### Product Categories

Available categories are defined in `src/data/products.ts`:

```typescript
export type ProductCategory = 'Dehydrated Powders' | 'Microgreens';
export const categories: ProductCategory[] = ['Dehydrated Powders', 'Microgreens'];
```

To add a new category:
1. Update the `ProductCategory` type
2. Add the category name to the `categories` array

#### Search Tags

The search functionality uses product tags. Make sure to include relevant tags:

```typescript
tags: ['moringa', 'green', 'smoothie', 'immunity', 'energy'],
```

Users can search by any of these tags on the organics page and product detail pages.

#### Buying Options (Pricing Plans) + WhatsApp Ordering

Some products (e.g., microgreens) support **buying options** (pricing plans). When a product has buying options:
- The product page shows a **“Choose an option”** selector
- The displayed price updates instantly when the option changes
- The **Order on WhatsApp** button opens WhatsApp with a pre-filled message containing:
  - selected option name
  - product name
  - current page URL
  - selected price

Buying options are defined in `src/data/products.ts` using this structure:

```ts
export type BuyingOption = {
  id: string;
  label: string;
  price: number;
  bestFor: string;
  priceSubtext: string;
  isMostPopular?: boolean;
};
```

A product can include options like this:

```ts
import { defaultMicrogreensBuyingOptions } from '@/data/products';

{
  id: 'yakra-sunflower-microgreens',
  slug: 'sunflower-microgreens',
  name: 'Sunflower Microgreens',
  category: 'Microgreens',
  tags: ['microgreens', 'sunflower'],
  shortDescription: '...',
  description: '...',
  priceLkr: 1150,
  buyingOptions: defaultMicrogreensBuyingOptions,
  images: ['/products/sunflower-microgreens/1.svg'],
  usage: '...',
  storage: '...',
  shelfLife: '...'
}
```

To add/edit the options and prices:
1. Open `src/data/products.ts`
2. Edit `defaultMicrogreensBuyingOptions` (or create a new options array for a specific product)
3. Update:
   - `label` (what shows in the selector)
   - `bestFor` (helper text under the selector)
   - `price` (used for the dynamic price display)
   - `priceSubtext` (small text shown under the price)
   - `isMostPopular` (adds a subtle “Most Popular” badge)

#### WhatsApp message generation

The WhatsApp order message is generated on click using this exact format:

```text
Hi! I'd like to order the {option} of {productName}.
Price: LKR {price}
Product: {url}
```

Line breaks are preserved by URL-encoding the message before opening WhatsApp.

---

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with 100dvh height
- Featured products (4 items)
- Quick links to Organics and Glamp sections

### Organics Page (`/organics`)
- Full product catalog with search and filters
- Search by product name or tags
- Filter by category
- Product cards with images and pricing:
  - Products **with** buying options: display all 3 prices + "Most Popular" badge
  - Products **without** buying options: display single price

### Product Detail Page (`/organics/[slug]`)
- Dynamic pages generated from product data
- Product gallery with multiple images
- Full description, usage, storage, and shelf-life info
- Buying option selector (for products with pricing plans) with instant price updates
- **Order on WhatsApp** button with a pre-filled message (includes option + price + page URL)
- Search all products functionality
- Related products section (shows 3 products from same category)

### Contact Page (`/contact`)
- Contact form for inquiries
- Direct email and WhatsApp links
- Social media links (Instagram, Facebook)
- Business address and phone display
- Email/display info from `src/data/siteConfig.ts`
- WhatsApp number for links from `src/data/whatsapp.ts`

### Footer
- Site-wide footer on all pages
- Quick navigation links
- Contact information (email, WhatsApp, address)
- Social media icons (Instagram, Facebook)
- Email/display info from `src/data/siteConfig.ts`
- WhatsApp number for links from `src/data/whatsapp.ts`

---

## 🛠️ Development Notes

### Client vs Server Components

- **Default:** All pages are server components for better SEO
- **Client components** (marked with `'use client'`) are used for:
  - Interactive search functionality
  - Contact form with state
  - Product filtering

### SEO & Metadata

Each page includes proper metadata for SEO:
- Title and description
- Open Graph tags for social sharing
- Structured data (JSON-LD) for products
- Sitemap and robots.txt

### Styling

- Uses Tailwind CSS utility classes
- Custom colors defined in `tailwind.config.ts`
- Follows the dark forest aesthetic
- Responsive design for mobile, tablet, and desktop

---

## 📱 Key Features

### Search Functionality
- Search by product name
- Search by tags (e.g., "moringa", "smoothie", "fresh")
- Category filtering
- Available on both organics listing and product detail pages

### Related Products
- Automatically shows 3 related products on product detail pages
- Related based on category (same category as current product)
- Appears before the footer

### Contact Integration
- WhatsApp integration with pre-filled messages (ordering + inquiries)
- Email integration with pre-filled subjects and body
- WhatsApp number centrally managed in `src/data/whatsapp.ts`

---

## 🚀 Deployment

This is a frontend-only site and can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables (Optional)

No environment variables are required for basic functionality. All configuration is in `src/data/siteConfig.ts`.

---

## 📝 Common Tasks

### Update Homepage Featured Products

Edit `src/data/products.ts` and set `featured: true` on products you want to show:

```typescript
{
  // ... product details
  featured: true  // ← Add this to show on homepage
}
```

### Change Hero Section Height

The hero section is currently set to `100dvh` (full viewport height). To change this, edit `src/app/page.tsx`:

```typescript
<section className="relative min-h-[100dvh] overflow-hidden">
  // ↑ Change 100dvh to your preferred height (e.g., 80dvh, 600px, etc.)
```

### Customize Navigation Links

The footer navigation links are in `src/components/SiteFooter.tsx`:

```typescript
const links = [
  { href: '/', label: 'Home' },
  { href: '/organics', label: 'Organics' },
  { href: '/glamp', label: 'Glamp' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
```

---

## 🐛 Troubleshooting

### Images Not Showing
- Ensure images are in the correct folder under `public/`
- Check file paths in configuration
- Verify image formats are supported (SVG, JPG, PNG, WebP)

### WhatsApp Link Not Working
- Check that `WHATSAPP_NUMBER` in `src/data/whatsapp.ts` is in the correct format (international format without + symbol)
- Example: `94771234567` (for Sri Lanka)
- Verify the number doesn't have spaces or special characters
- Test by clicking a WhatsApp link to see if it opens properly

### Search Not Finding Products
- Check that tags are properly set on products
- Ensure search query matches product name or tags exactly (case-insensitive)
- Clear browser cache if needed

---

## 📄 License

This project is proprietary and confidential.

---

## 🤝 Support

For questions or issues, refer to the code comments or contact the development team.

---

**Built with ❤️ for Yakra.lk**
