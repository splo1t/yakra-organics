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

## 📝 EDITING GUIDE - Everything You Need to Know

This guide is organized by what you want to edit. Find your task below and follow the simple instructions.

### Quick Reference: Where to Edit What

| What to Edit | File | Key Concept |
|--------------|------|-------------|
| Add new products | `src/data/products.ts` | Each product has its own unique `buyingOptions` with custom prices |
| Change product prices | `src/data/products.ts` | Find the product, edit its `buyingOptions` array |
| Contact info (email, phone, address) | `src/data/siteConfig.ts` | Site-wide configuration |
| WhatsApp number | `src/data/whatsapp.ts` | Single number for all WhatsApp links |
| Hero image | `src/data/siteConfig.ts` | Update `heroImage` path |
| Colors/styling | `tailwind.config.ts` | Modify theme colors |
| Navigation links | `src/components/SiteHeader.tsx` | Edit `navItems` array |

---

### 1. Want to Edit Products? (Add/Remove/Change)

**Where to edit:** `src/data/products.ts`

This file contains ALL product data. Add or modify products here—no database needed.

#### Adding a New Product

Each product has its own unique buying options with different prices. When adding a new product, you must define its buying options inline:

```typescript
{
  id: 'unique-product-id',
  slug: 'url-friendly-name',
  name: 'Product Name Displayed to Users',
  category: 'Microgreens',  // or 'Dehydrated Powders'
  tags: ['tag1', 'tag2', 'tag3'],  // For search functionality
  shortDescription: 'Brief one-line description for cards',
  description: 'Full detailed description...',
  nutritionalBenefits: 'Optional nutritional info...',  // Optional field
  priceLkr: 1100,  // Base price (usually matches your first buying option)
  buyingOptions: [
    {
      id: 'single-tray',
      label: 'Single Live Tray',
      price: 1100,  // ← Set YOUR price for this product
      bestFor: 'One-time trial or a healthy gift',
      priceSubtext: 'One-time purchase'
    },
    {
      id: 'intro-offer',
      label: 'Introductory Offer',
      price: 850,  // ← Set YOUR price for this product
      bestFor: 'First-time customers (Limited Batch)',
      priceSubtext: 'Limited time for first-time customers'
    },
    {
      id: 'monthly-subscription',
      label: 'Monthly Subscription',
      price: 3400,  // ← Set YOUR price for this product
      bestFor: '4 Trays (1 per week) - Best Value',
      priceSubtext: 'Includes 4 trays (1 per week)',
      isMostPopular: true  // ← Only ONE option should have this
    }
  ],
  images: ['/products/url-friendly-name/1.svg'],
  usage: 'How to use...',
  storage: 'Storage instructions...',
  shelfLife: 'Shelf life info...',
  featured: true  // Set true to show on homepage
}
```

#### Important Notes:
- **slug** must match the folder name in `public/products/`
- **tags** are used for search—include relevant keywords
- **nutritionalBenefits** is optional but displays nicely on product pages
- **usage** and **storage** text supports line breaks with `\n`
- **Each product MUST have its own `buyingOptions` array** with unique prices
- Only ONE buying option per product should have `isMostPopular: true`
- The `priceLkr` field is optional but recommended (typically matches your default option)

#### Product Images

1. Create folder: `public/products/your-product-slug/`
2. Add images (SVG, JPG, PNG, or WebP)
3. Reference in product: `images: ['/products/your-product-slug/1.svg']`

#### Current Product Structure

The site currently has **1 product**: Red Amaranth Microgreens

To add more products, simply add them to the `products` array in `src/data/products.ts`.

#### Example: Adding Multiple Products with Different Prices

Here's how you might add two products with different pricing:

```typescript
export const products: Product[] = [
  {
    id: 'yakra-red-amaranth-microgreens',
    name: 'Red Amaranth Microgreens: The Vibrant Superfood',
    // ... other fields ...
    buyingOptions: [
      { id: 'single-tray', label: 'Single Live Tray', price: 1100, ... },
      { id: 'intro-offer', label: 'Introductory Offer', price: 850, ... },
      { id: 'monthly-subscription', label: 'Monthly Subscription', price: 3400, ... }
    ]
  },
  {
    id: 'yakra-broccoli-microgreens',
    name: 'Broccoli Microgreens: The Nutrient Powerhouse',
    // ... other fields ...
    buyingOptions: [
      { id: 'single-tray', label: 'Single Live Tray', price: 950, ... },   // Different price!
      { id: 'intro-offer', label: 'Introductory Offer', price: 750, ... },  // Different price!
      { id: 'monthly-subscription', label: 'Monthly Subscription', price: 3000, ... }  // Different price!
    ]
  }
];
```

Notice how each product has its own `buyingOptions` array with completely different prices!

---

### 2. Want to Change Prices for Existing Products?

**Where to edit:** `src/data/products.ts`

Find the specific product in the `products` array and edit its `buyingOptions`:

```typescript
{
  id: 'yakra-red-amaranth-microgreens',
  // ... other product fields ...
  buyingOptions: [
    {
      id: 'single-tray',
      label: 'Single Live Tray',
      price: 1200,  // ← Edit this price
      bestFor: 'One-time trial or a healthy gift',
      priceSubtext: 'One-time purchase'
    },
    {
      id: 'intro-offer',
      label: 'Introductory Offer',
      price: 950,  // ← Edit this price
      bestFor: 'First-time customers (Limited Batch)',
      priceSubtext: 'Limited time for first-time customers'
    },
    {
      id: 'monthly-subscription',
      label: 'Monthly Subscription',
      price: 3800,  // ← Edit this price
      bestFor: '4 Trays (1 per week) - Best Value',
      priceSubtext: 'Includes 4 trays (1 per week)',
      isMostPopular: true
    }
  ],
  // ... other product fields ...
}
```

**Key Rules:**
- Each product has its own independent set of buying options with unique prices
- Only one option per product should have `isMostPopular: true`
- The option with `isMostPopular: true` is automatically selected by default
- The dropdown only shows option names (no prices inside dropdown)
- Price updates instantly when user changes selection
- "Most Popular" badge appears as a small, premium tag

---

### 3. Want to Change Contact Information?

**Where to edit:** `src/data/siteConfig.ts`

```typescript
export const siteConfig = {
  name: 'Yakra.lk',
  description: 'Your description here',
  siteUrl: 'https://yakra.lk',
  heroImage: '/media/hero.svg',

  contact: {
    email: 'hello@yakra.lk',              // ← Edit email
    phoneDisplay: '+94 77 123 4567',       // ← Edit phone (shown to users)
    address: 'Sri Lanka'                   // ← Edit address
  },

  social: {
    instagram: 'https://instagram.com/yakra',  // ← Edit Instagram
    facebook: 'https://facebook.com/yakra'      // ← Edit Facebook
  }
} as const;
```

**What changes automatically:**
- Email appears in footer and contact page
- Phone appears in footer
- Address appears in footer and contact page
- Social links appear in footer and contact page

---

### 4. Want to Change the WhatsApp Number?

**Where to edit:** `src/data/whatsapp.ts`

```typescript
// WhatsApp number in E.164 format without the + symbol
// Example: For +94 77 123 4567, use: '94771234567'
export const WHATSAPP_NUMBER = '94771234567';
```

**Where it's used:**
- Product page "Order via WhatsApp" buttons
- Footer WhatsApp link
- Contact page WhatsApp link

---

### 5. Want to Change the Hero Image (Home Page Background)?

**Where to edit:** `src/data/siteConfig.ts`

```typescript
heroImage: '/media/hero.svg',  // ← Change this filename
```

**Steps:**
1. Place your new image in `public/media/`
2. Update the filename in `siteConfig.ts`
3. Hero is set to `100dvh` height with full background cover

**Image requirements:**
- SVG, JPG, PNG, or WebP format
- The image scales nicely on mobile and desktop
- Background covers entire hero area automatically

---

### 6. Want to Edit Site-Wide Styling (Colors, etc.)?

**Where to edit:** `tailwind.config.ts`

```typescript
theme: {
  extend: {
    colors: {
      forest: {
        950: '#0a120f',  // Main background
        100: '#e8ece9',  // Primary text
        // ... other forest shades
      },
      accent: {
        500: '#84a98c',  // Accent color (buttons, links)
      }
    }
  }
}
```

---

### 7. Want to Change WhatsApp Message Format?

**Where to edit:** `src/components/BuyingOptionSelector.tsx`

Find the `onOrder` function:

```typescript
function onOrder() {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const message = `I'd like to order ${selectedOption.label} of ${productName}.\nProduct: ${url}`;

  window.open(getWhatsAppUrl(message), '_blank', 'noreferrer');
}
```

**Current format:**
```
I'd like to order {Option Name} of {Product Name}.
Product: {URL}
```

Line breaks are preserved with `\n`.

---

### 8. Want to Change Navigation Links?

**Where to edit:** `src/components/SiteHeader.tsx`

```typescript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/organics', label: 'Organics' },
  { href: '/glamp', label: 'Glamp' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
```

---

### 9. Product Page Content Sections

The product page displays these sections in order:

1. **Back button** - Links to /organics
2. **Search bar** - Full product search (placed after navbar)
3. **Product gallery** - Shows product images
4. **Product name** - From product.name
5. **Category badge & tags**
6. **Buying option selector** - If product has buyingOptions
7. **Description** - From product.description
8. **Nutritional Benefits** - From product.nutritionalBenefits (optional)
9. **How to Enjoy** - From product.usage
10. **Storage & Handling** - From product.storage
11. **Shelf-life** - From product.shelfLife
12. **Need help choosing?** - Contact CTA section
13. **Related products** - Shows products from same category

---

## 📂 Project Structure (For Reference)

```
├── public/                    # Static assets
│   ├── media/                 # Brand images (hero, contact, icons)
│   └── products/              # Product images
│       └── red-amaranth-microgreens/  # Product folders (by slug)
├── src/
│   ├── app/                   # Next.js pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── glamp/             # Coming soon page
│   │   ├── organics/          # Product listing & search
│   │   │   └── [slug]/        # Individual product pages
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page (hero here)
│   ├── components/            # Reusable UI components
│   │   ├── ProductCard.tsx    # Product card for listings
│   │   ├── BuyingOptionSelector.tsx  # Price plan selector
│   │   ├── SiteHeader.tsx     # Navigation
│   │   └── SiteFooter.tsx     # Footer
│   └── data/                  # ALL editable data
│       ├── products.ts        # ← Products (each with unique buying options)
│       ├── siteConfig.ts      # ← Site branding & contact info
│       └── whatsapp.ts        # ← WhatsApp number
```

---

## 🎨 Design System

- **Theme:** Dark forest aesthetic
- **Primary background:** `forest-950` (#0a120f)
- **Primary text:** `forest-100` (#e8ece9)
- **Accent color:** `accent-500` (#84a98c)
- **Hero height:** `100dvh` (full viewport height)
- **Product card aspect ratio:** 4:3
- **Responsive:** Mobile-first design

---

## 📄 Pages Overview

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero + featured products + section links |
| Organics | `/organics` | Full product catalog with search & filters |
| Product Detail | `/organics/[slug]` | Individual product with buying options |
| Contact | `/contact` | Contact form + contact info |
| About | `/about` | About page |
| Glamp | `/glamp` | Coming soon page |

---

## 🛠️ Key Features

### Search Functionality
- Search by product name
- Search by tags (e.g., "red", "antioxidant", "fresh")
- Filter by category
- Available on organics page and product detail pages

### WhatsApp Ordering
- "Order via WhatsApp" button on product pages
- Pre-filled message includes:
  - Selected option label
  - Product name
  - Current page URL
- Message format:
  ```
  I'd like to order {Option} of {Product}.
  Product: {URL}
  ```

### Buying Options
- Each product has its own unique buying options with custom prices
- Dropdown selector shows only option names
- Price updates instantly on selection
- "Most Popular" badge highlights the best option
- Default selection is the option with `isMostPopular: true`
- Prices vary per product - no shared pricing across products

---

## 🚀 Deployment

This is a frontend-only site. Deploy to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting**

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

No environment variables required—all config is in code.

---

## ❓ Common Questions

### How do I add a new product?
Edit `src/data/products.ts`, add to the `products` array. Each product must have its own `buyingOptions` array with unique prices. See section 1 above.

### How do I change prices for a specific product?
Find the product in `src/data/products.ts` and edit the prices in its `buyingOptions` array. Each product has its own independent pricing. See section 2 above.

### How do I add more images to a product?
1. Add images to `public/products/your-product-slug/`
2. Update the `images` array in the product data

### How do I remove the "Most Popular" badge?
Set `isMostPopular: false` on all options, or remove the property entirely.

### Where do I edit the email address?
Edit `src/data/siteConfig.ts`. See section 3 above.

### Where do I change the WhatsApp number?
Edit `src/data/whatsapp.ts`. See section 4 above.

### Do all products need the same buying options?
No! Each product can have completely different prices for each buying option. You customize prices individually for every product.

---

## 📝 License

This project is proprietary and confidential.

---

**Built with ❤️ for Yakra.lk**
