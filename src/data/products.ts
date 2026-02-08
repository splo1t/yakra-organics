export type ProductCategory = 'Dehydrated Powders' | 'Microgreens';

export type BuyingOption = {
  id: string;
  label: string;
  price: number;
  bestFor: string;
  priceSubtext: string;
  isMostPopular?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  tags: string[];
  shortDescription: string;
  description: string;
  priceLkr: number;
  buyingOptions?: BuyingOption[];
  images: string[];
  usage: string;
  storage: string;
  shelfLife: string;
  nutritionalBenefits?: string;
  featured?: boolean;
};

export const categories: ProductCategory[] = ['Dehydrated Powders', 'Microgreens'];

export const products: Product[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ADD YOUR PRODUCTS BELOW
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Each product MUST have its own buyingOptions array with unique prices.
  // Do NOT share buyingOptions between products - prices vary per product!
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: 'yakra-red-amaranth-microgreens',
    slug: 'red-amaranth-microgreens',
    name: 'Red Amaranth Microgreens: The Vibrant Superfood',
    category: 'Microgreens',
    tags: ['microgreens', 'red', 'amaranth', 'antioxidant', 'superfood', 'fresh'],
    shortDescription: 'Famous for their stunning deep fuchsia-red color and delicate, earthy flavor.',
    description: 'Red Amaranth microgreens are the "jewels" of the microgreen world. Famous for their stunning deep fuchsia-red color and delicate, earthy flavor, they are a favorite for health enthusiasts who refuse to compromise on taste or aesthetics.',
    nutritionalBenefits: `Massive Antioxidant Boost: High in Betacyanins, the pigments that give them their red color, which help fight oxidative stress and boost immunity.\nBone Strength: An exceptional source of Vitamin K, vital for bone health and proper blood clotting.\nSkin & Vision: Rich in Vitamins C and E, which promote radiant skin and support long-term eye health.\nNatural Energy: Packed with Iron, Magnesium, and Potassium to support heart health and maintain energy levels throughout the day.\nThe 40x Rule: Contains up to 40 times more vital nutrients compared to the mature amaranth plant.`,
    priceLkr: 1100,
    buyingOptions: [
      {
        id: 'single-tray',
        label: 'Single Live Tray',
        price: 1100,
        bestFor: 'One-time trial or a healthy gift',
        priceSubtext: 'One-time purchase'
      },
      {
        id: 'intro-offer',
        label: 'Introductory Offer',
        price: 850,
        bestFor: 'First-time customers (Limited Batch)',
        priceSubtext: 'Limited time for first-time customers'
      },
      {
        id: 'monthly-subscription',
        label: 'Monthly Subscription',
        price: 3400,
        bestFor: '4 Trays (1 per week) - Best Value',
        priceSubtext: 'Includes 4 trays (1 per week)',
        isMostPopular: true
      }
    ],
    images: ['/products/red-amaranth-microgreens/1.png'],
    usage: `The Signature Garnish: Sprinkle over creamy soups, pasta, or grilled fish to add a pop of vibrant color.\nPremium Toasts: Top your avocado or cream cheese toast with a generous handful of red amaranth for a gourmet breakfast.\nPower Salads: Mix with other greens for a nutrient-dense base or use as a colorful topper for a "Yakra" style power bowl.\nSmoothie Boost: Blend into your morning smoothie for an invisible nutrient kick without changing the flavor profile.`,
    storage: `Temperature: Store harvested greens in the refrigerator at 1°C to 4°C.\nMoisture Control: Keep them in an airtight container lined with a dry paper towel to absorb excess moisture and prevent wilting.\nThe Live Advantage: If you have the Yakra Live Tray, harvest only what you need. Keep the tray in a cool spot with indirect sunlight for the freshest experience.\nRinse Before Use: Only rinse gently in cold water right before consumption to maintain maximum shelf life.`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.',
    featured: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 4): Product[] {
  const featured = products.filter((p) => p.featured);
  return (featured.length ? featured : products).slice(0, limit);
}
