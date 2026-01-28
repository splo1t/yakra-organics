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
  featured?: boolean;
};

export const categories: ProductCategory[] = ['Dehydrated Powders', 'Microgreens'];

// Default buying options for microgreens products
export const defaultMicrogreensBuyingOptions: BuyingOption[] = [
  {
    id: 'single-tray',
    label: 'Single Live Tray',
    price: 1150,
    bestFor: 'One-time trial / Gift',
    priceSubtext: 'One-time purchase'
  },
  {
    id: 'intro-offer',
    label: 'Introductory Offer',
    price: 950,
    bestFor: 'First-time customers (Limited time)',
    priceSubtext: 'Limited time for first-time customers'
  },
  {
    id: 'monthly-subscription',
    label: 'Monthly Subscription',
    price: 3600,
    bestFor: '4 Trays (1 per week) — Most Popular',
    priceSubtext: 'Includes 4 trays (1 per week)',
    isMostPopular: true
  }
];

export const products: Product[] = [
  {
    id: 'yakra-moringa-leaf-powder',
    slug: 'moringa-leaf-powder',
    name: 'Moringa Leaf Powder',
    category: 'Dehydrated Powders',
    tags: ['moringa', 'green', 'smoothie', 'immunity', 'energy'],
    shortDescription: 'A clean, vibrant green powder made from gently dehydrated moringa leaves.',
    description:
      'Yakra Moringa Leaf Powder is produced from carefully selected leaves, dried at low temperatures to preserve color and aroma. Ideal for daily wellness routines—smoothies, juices, yogurt, or warm water.',
    priceLkr: 3900,
    images: ['/products/moringa-leaf-powder/1.svg', '/products/moringa-leaf-powder/2.svg'],
    usage:
      'Add 1–2 teaspoons to smoothies, fruit juice, yogurt, or warm water. Start small and adjust to taste.',
    storage:
      'Keep sealed in a cool, dry place away from sunlight. Use a dry spoon to avoid moisture.',
    shelfLife: 'Best within 9–12 months from the packed date when stored properly.',
    featured: true
  },
  {
    id: 'yakra-ginger-powder',
    slug: 'ginger-powder',
    name: 'Ginger Powder',
    category: 'Dehydrated Powders',
    tags: ['ginger', 'spice', 'tea', 'warming', 'digestive'],
    shortDescription: 'Aromatic ginger powder with a warm, premium finish—perfect for tea and cooking.',
    description:
      'Yakra Ginger Powder is finely milled from dehydrated ginger for a consistent texture and bold aroma. Great for tea blends, marinades, soups, and everyday cooking.',
    priceLkr: 3200,
    images: ['/products/ginger-powder/1.svg'],
    usage: 'Mix into tea, honey water, soups, or curries. Start with 1/4–1/2 teaspoon per serving.',
    storage:
      'Store airtight in a cool, dry cupboard. Avoid moisture and strong odors for best freshness.',
    shelfLife: 'Best within 9–12 months from the packed date when stored properly.'
  },
  {
    id: 'yakra-beetroot-powder',
    slug: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'Dehydrated Powders',
    tags: ['beetroot', 'smoothie', 'latte', 'color', 'preworkout'],
    shortDescription: 'Naturally rich color and earthy sweetness—beautiful in smoothies and lattes.',
    description:
      'Yakra Beetroot Powder brings naturally vibrant color to your drinks and recipes. Use it for smoothies, yogurt bowls, or a café-style beet latte at home.',
    priceLkr: 3500,
    images: ['/products/beetroot-powder/1.svg', '/products/beetroot-powder/2.svg'],
    usage:
      'Blend 1 teaspoon into smoothies or mix into warm milk for a beet latte. Adjust sweetness as desired.',
    storage:
      'Reseal tightly after use and keep away from humidity. A dry spoon helps maintain quality.',
    shelfLife: 'Best within 9–12 months from the packed date when stored properly.',
    featured: true
  },
  {
    id: 'yakra-sunflower-microgreens',
    slug: 'sunflower-microgreens',
    name: 'Sunflower Microgreens',
    category: 'Microgreens',
    tags: ['microgreens', 'sunflower', 'salad', 'crunch', 'fresh'],
    shortDescription: 'Crunchy, nutty microgreens—premium freshness for salads, bowls, and sandwiches.',
    description:
      'Yakra Sunflower Microgreens add a crisp texture and clean flavor to your meals. Handled with care to keep them fresh, vibrant, and ready to elevate everyday dishes.',
    priceLkr: 1150,
    buyingOptions: defaultMicrogreensBuyingOptions,
    images: ['/products/sunflower-microgreens/1.svg'],
    usage: 'Rinse lightly if needed and add just before serving. Perfect for salads, wraps, bowls, and eggs.',
    storage:
      'Keep refrigerated and dry. Do not wash until ready to use. Avoid compressing to maintain texture.',
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  },
  {
    id: 'yakra-radish-microgreens',
    slug: 'radish-microgreens',
    name: 'Radish Microgreens',
    category: 'Microgreens',
    tags: ['microgreens', 'radish', 'peppery', 'garnish', 'fresh'],
    shortDescription: 'Peppery, bold microgreens—an elegant garnish with real flavor.',
    description:
      'Yakra Radish Microgreens offer a clean, peppery kick. Ideal for finishing dishes—soups, salads, sushi bowls, and modern Sri Lankan plates.',
    priceLkr: 1150,
    buyingOptions: defaultMicrogreensBuyingOptions,
    images: ['/products/radish-microgreens/1.svg', '/products/radish-microgreens/2.svg'],
    usage:
      'Use as a garnish or mix into salads. Add at the end to keep the texture crisp and the flavor fresh.',
    storage:
      'Refrigerate in the original container. Keep dry and avoid condensation for best results.',
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.',
    featured: true
  },
  {
    id: 'yakra-basil-microgreens',
    slug: 'basil-microgreens',
    name: 'Basil Microgreens',
    category: 'Microgreens',
    tags: ['microgreens', 'basil', 'aromatic', 'italian', 'premium'],
    shortDescription: 'Aromatic basil microgreens—luxury flavor for pasta, pizza, and salads.',
    description:
      'Yakra Basil Microgreens bring a refined aroma and a bright herbal finish. Great for contemporary plating and premium home cooking.',
    priceLkr: 1150,
    buyingOptions: defaultMicrogreensBuyingOptions,
    images: ['/products/basil-microgreens/1.svg'],
    usage: 'Scatter on finished dishes or mix into salads. Use as a final touch for maximum aroma.',
    storage:
      'Keep refrigerated, dry, and sealed. Avoid washing until serving to maintain quality.',
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 4): Product[] {
  const featured = products.filter((p) => p.featured);
  return (featured.length ? featured : products).slice(0, limit);
}
