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
    description:
      'Red Amaranth microgreens are the "jewels" of the microgreen world. Famous for their stunning deep fuchsia-red color and delicate, earthy flavor, they are a favorite for health enthusiasts who refuse to compromise on taste or aesthetics.',
    nutritionalBenefits: `Massive Antioxidant Boost: High in Betacyanins, the pigments that give them their red color, which help fight oxidative stress and boost immunity.\nBone Strength: An exceptional source of Vitamin K, vital for bone health and proper blood clotting.\nSkin & Vision: Rich in Vitamins C and E, which promote radiant skin and support long-term eye health.\nNatural Energy: Packed with Iron, Magnesium, and Potassium to support heart health and maintain energy levels throughout the day.\nThe 40x Rule: Contains up to 40 times more vital nutrients compared to the mature amaranth plant.`,
    priceLkr: 1100,
    buyingOptions: [
      {
        id: 'single-live-tray',
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
  },

  {
    id: 'yakra-pea-shoots-microgreens',
    slug: 'pea-shoots',
    name: 'Pea Shoots: The Crunchy Protein Powerhouse',
    category: 'Microgreens',
    tags: ['microgreens', 'pea', 'shoots', 'protein', 'crunchy', 'fitness', 'fresh'],
    shortDescription:
      'Delicate young pea vines with curly tendrils and a refreshing sweet taste like sugar snap peas.',
    description:
      'Pea Shoots are the delicate young vines of the green pea plant. Known for their beautiful curly tendrils and a refreshing, sweet taste that mimics fresh sugar snap peas, they are the ultimate choice for health enthusiasts and gourmet home cooks.',
    nutritionalBenefits: `High Plant-Based Protein: Notably high in protein, ideal for muscle recovery and sustained energy.\nImmune Boosting: Packed with Vitamin C (up to seven times more than blueberries) and Vitamin A to strengthen natural defenses.\nHeart & Bone Health: High in Vitamin K and folic acid to support healthy blood circulation and bone density.\nRich in Fiber: Helps digestion and keeps you feeling full longer.\nAntioxidant Dense: High levels of phytonutrients that help reduce inflammation after workouts.`,
    priceLkr: 1150,
    buyingOptions: [
      {
        id: 'single-live-tray',
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
        bestFor: '4 Trays (1 per week) - Most Popular',
        priceSubtext: 'Includes 4 trays (1 per week)',
        isMostPopular: true
      }
    ],
    images: ['/products/pea-shoots/1.png'],
    usage: `The Power Salad: Use as the main green for a hearty salad or mix with Red Amaranth for color contrast.\nStir-fry Topping: Add to stir-fries or pasta after cooking to keep crunch and nutrients.\nProtein Smoothies: A handful adds mild sweetness and a protein boost post-workout.\nPremium Sandwiches: Better crunch and flavor than lettuce in wraps and burgers.`,
    storage: `Temperature: Store harvested shoots in the refrigerator at 1°C to 4°C.\nMoisture Control: Keep in an airtight container or reusable bag with a dry paper towel to prevent wilting.\nHarvesting (Live Tray): Cut stems just above the first set of leaves.\nPre-use Rinse: Rinse gently in cold water only right before use.`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.',
    featured: true
  },

  {
    id: 'yakra-radish-microgreens',
    slug: 'radish-microgreens',
    name: 'Radish Microgreens: The Zesty Detox Powerhouse',
    category: 'Microgreens',
    tags: ['microgreens', 'radish', 'peppery', 'detox', 'vitamin-c', 'crunchy', 'fresh'],
    shortDescription: 'Crisp texture with a bold, peppery flavor—adds a spicy crunch and a nutritional punch.',
    description:
      'Radish microgreens are the "spice of life" in the Yakra Organics collection. With their crisp texture and a bold, peppery flavor similar to a mature radish, they are a favorite for those who want to add both flavor and a powerful nutritional punch to their daily diet.',
    nutritionalBenefits: `High in Vitamin C: Boosts immunity and supports healthy, glowing skin.\nDigestive Support: Rich in natural enzymes that aid digestion and gut health.\nWeight Management: Very low calorie but nutrient-dense—great for fitness plans.\nDetoxification: Contains compounds that support liver function and detox.\nEssential Minerals: Source of Calcium, Iron, and Magnesium for metabolic health.`,
    priceLkr: 1050,
    buyingOptions: [
      {
        id: 'single-live-tray',
        label: 'Single Live Tray',
        price: 1050,
        bestFor: 'One-time trial / Flavor boost',
        priceSubtext: 'One-time purchase'
      },
      {
        id: 'intro-offer',
        label: 'Introductory Offer',
        price: 850,
        bestFor: 'First-time customers (Limited time)',
        priceSubtext: 'Limited time for first-time customers'
      },
      {
        id: 'monthly-subscription',
        label: 'Monthly Subscription',
        price: 3200,
        bestFor: '4 Trays (1 per week) - Best Value',
        priceSubtext: 'Includes 4 trays (1 per week)',
        isMostPopular: true
      }
    ],
    images: ['/products/radish-microgreens/1.png'],
    usage: `The Spicy Topper: Add to omelets or scrambled eggs for a zesty boost.\nPremium Burgers & Sandwiches: Replace lettuce for a sophisticated peppery bite.\nSalad Enhancer: Mix with milder greens like Pea Shoots for balance.\nSushi & Wraps: Great crisp texture for rolls and healthy wraps.`,
    storage: `Temperature: Store harvested greens in the refrigerator at 1°C to 4°C.\nMoisture Control: Airtight container or glass jar with a dry paper towel to prevent sogginess.\nThe Live Advantage: Harvest by snipping just above the root line; best harvested within 10–12 days.\nRinse Before Use: Rinse gently in cold water right before consumption.`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  },

  {
    id: 'yakra-beet-microgreens',
    slug: 'beet-microgreens',
    name: 'Beet Microgreens: The Earthy Stamina Booster',
    category: 'Microgreens',
    tags: ['microgreens', 'beet', 'stamina', 'nitrates', 'heart-health', 'antioxidant', 'fresh'],
    shortDescription:
      'Vibrant ruby stems and dark green leaves with a mild sweet-earthy beet flavor—perfect for energy and endurance.',
    description:
      'Beet microgreens are as beautiful as they are nutritious. Featuring vibrant ruby-red stems and contrasting dark green leaves, they carry a mild, sweet, and earthy flavor that captures the essence of a mature beetroot in a concentrated, delicate form.',
    nutritionalBenefits: `Boosts Stamina: Rich in natural nitrates to improve blood flow and oxygen delivery—great pre-workout.\nHeart Health: Supports healthy blood pressure and cardiovascular function.\nImmune Support: High in Vitamins C and A for immunity and skin.\nMineral Rich: Iron, Zinc, and Magnesium for energy metabolism and bone health.\nDetoxifying Agents: Betalains help neutralize toxins and provide antioxidant protection.`,
    priceLkr: 1200,
    buyingOptions: [
      {
        id: 'single-live-tray',
        label: 'Single Live Tray',
        price: 1200,
        bestFor: 'Gourmet cooking / Trial',
        priceSubtext: 'One-time purchase'
      },
      {
        id: 'intro-offer',
        label: 'Introductory Offer',
        price: 950,
        bestFor: 'First-time customers (Limited Batch)',
        priceSubtext: 'Limited time for first-time customers'
      },
      {
        id: 'monthly-subscription',
        label: 'Monthly Subscription',
        price: 3600,
        bestFor: '4 Trays (1 per week) - Best Value',
        priceSubtext: 'Includes 4 trays (1 per week)',
        isMostPopular: true
      }
    ],
    images: ['/products/beet-microgreens/1.png'],
    usage: `The Fitness Salad: Mix with Pea Shoots for a high-protein, high-nitrate salad.\nGourmet Toasts: Layer over goat cheese or labneh on sourdough.\nJuices & Smoothies: Blend into green juice for earthy sweetness + natural energy.\nPlating & Garnish: Perfect garnish for risotto, pasta, or roasted vegetables.`,
    storage: `Temperature: Store harvested greens in the refrigerator at 1°C to 4°C.\nMoisture Control: Airtight container with a dry paper towel (delicate greens).\nThe Live Advantage: Snip just above the growing medium; best harvested at ~2–3 inches tall.\nRinse Before Use: Rinse gently in cold water right before serving.`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  },

  {
    id: 'yakra-arugula-microgreens',
    slug: 'arugula-microgreens',
    name: 'Arugula: The Peppery Mediterranean Powerhouse',
    category: 'Microgreens',
    tags: ['microgreens', 'arugula', 'rocket', 'peppery', 'vitamin-k', 'detox', 'fresh'],
    shortDescription:
      'Delicate leaves with a nutty-peppery kick—small but mighty, perfect for bold flavor lovers.',
    description:
      'Arugula microgreens (also known as Rocket) are small but mighty. They pack a much punchier, more complex flavor than their mature counterparts. With their delicate green leaves and a signature nutty-peppery kick, they are the ultimate choice for those who love bold flavors.',
    nutritionalBenefits: `Bone Health Hero: Exceptionally high in Vitamin K for bone density and strength.\nNatural Detoxifier: Glucosinolates help liver detox and protect from oxidative stress.\nEye & Skin Care: Rich in Vitamin A (beta-carotene) for vision and glowing skin.\nHealthy Circulation: Folate (B9) and Calcium support blood flow and muscle function.\nHydration & Low Calorie: High water content and very low calorie—guilt-free flavor booster.`,
    priceLkr: 1100,
    buyingOptions: [
      {
        id: 'single-live-tray',
        label: 'Single Live Tray',
        price: 1100,
        bestFor: 'Gourmet home cooking',
        priceSubtext: 'One-time purchase'
      },
      {
        id: 'intro-offer',
        label: 'Introductory Offer',
        price: 900,
        bestFor: 'First-time trials (Limited time)',
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
    images: ['/products/arugula-microgreens/1.png'],
    usage: `The Gourmet Pizza Topper: Sprinkle after baking for an Italian restaurant vibe.\nPasta & Risotto: Stir into warm dishes just before serving.\nPremium Sandwiches: Zesty layer for roast beef sandwiches or chicken wraps.\nArugula Pesto: Blend with olive oil and walnuts for a spicy twist.`,
    storage: `Temperature: Store harvested arugula in the refrigerator at 1°C to 4°C.\nMoisture Control: Very delicate—keep in airtight container with a dry paper towel.\nThe Live Advantage: Harvest only what you need; best when leaves are ~2 inches tall.\nRinse Before Use: Rinse gently in cold water right before consumption.`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  },

  {
    id: 'yakra-red-cabbage-microgreens',
    slug: 'red-cabbage-microgreens',
    name: 'Red Cabbage: The Ultimate Antioxidant Giant',
    category: 'Microgreens',
    tags: ['microgreens', 'red-cabbage', 'antioxidant', 'anthocyanins', 'immunity', 'fresh'],
    shortDescription:
      'Stunning violet-to-red stems with a mild sweet cabbage flavor—maximum nutrient “bang for your buck.”',
    description:
      'Red Cabbage microgreens are the "superheroes" of the functional food world. They are famous for their stunning violet-to-red stems and a mild, slightly sweet cabbage flavor. If you are looking for the maximum nutritional "bang for your buck," this is the green to choose.',
    nutritionalBenefits: `Vitamin C Powerhouse: Up to 40x more Vitamin C than mature cabbage—supports collagen and immunity.\nEye & Skin Protection: High in Vitamin A (lutein/zeaxanthin) for eye and skin health.\nHeart Health: Anthocyanins help reduce cardiovascular disease risk.\nDigestive Healing: Source of Vitamin U (S-Methylmethionine) that supports gut lining.\nAnti-Inflammatory: Helps reduce inflammation and supports recovery.`,
    priceLkr: 1100,
    buyingOptions: [
      {
        id: 'single-live-tray',
        label: 'Single Live Tray',
        price: 1100,
        bestFor: 'Health-focused individuals',
        priceSubtext: 'One-time purchase'
      },
      {
        id: 'intro-offer',
        label: 'Introductory Offer',
        price: 900,
        bestFor: 'First-time trial (Limited time)',
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
    images: ['/products/red-cabbage-microgreens/1.png'],
    usage: `The Rainbow Salad: Mix with Beet and Amaranth for a multi-colored antioxidant salad.\nBreakfast Boost: Pile onto poached eggs or an omelet.\nSmoothie Secret: Add a handful to fruit smoothies for a vitamin boost.\nTaco & Wrap Topper: Crunchy colorful layer for tacos, wraps, and burgers.`,
    storage: `Temperature: Store harvested greens in the refrigerator at 1°C to 4°C.\nMoisture Control: Airtight container with a dry paper towel; keep dry for crispness.\nThe Live Advantage: Harvest by snipping near the base; ready within ~10–14 days.\nRinse Before Use: Rinse gently in cold water right before eating.`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  },

  {
    id: 'yakra-sunflower-shoots-microgreens',
    slug: 'sunflower-shoots',
    name: 'Sunflower Shoots: The Nutty Protein Powerhouse',
    category: 'Microgreens',
    tags: ['microgreens', 'sunflower', 'shoots', 'protein', 'crunchy', 'energy', 'fresh'],
    shortDescription:
      'Large succulent leaves with a rich nutty flavor and satisfying crunch—hearty enough to be a main ingredient.',
    description:
      'Sunflower microgreens are a crowd favorite because of their large, succulent leaves and a rich, nutty flavor. Unlike smaller microgreens, sunflower shoots are hearty and provide a satisfying "crunch," making them feel more like a main ingredient than just a garnish.',
    nutritionalBenefits: `Complete Protein Source: High-quality plant protein for muscle repair.\nBrain & Nerve Health: B-complex vitamins (folate, B6) support brain function and reduce stress.\nHealthy Fats: Essential fatty acids support heart health and vitamin absorption.\nStrong Immunity: Vitamin C, E, and Selenium provide antioxidant protection.\nBone Strength: Magnesium and Calcium support bones and muscle contractions.`,
    priceLkr: 1050,
    buyingOptions: [
      {
        id: 'single-live-tray',
        label: 'Single Live Tray',
        price: 1050,
        bestFor: 'Daily nutrition / Snacking',
        priceSubtext: 'One-time purchase'
      },
      {
        id: 'intro-offer',
        label: 'Introductory Offer',
        price: 850,
        bestFor: 'First-time trials (Limited time)',
        priceSubtext: 'Limited time for first-time customers'
      },
      {
        id: 'monthly-subscription',
        label: 'Monthly Subscription',
        price: 3200,
        bestFor: '4 Trays (1 per week) - Best Value',
        priceSubtext: 'Includes 4 trays (1 per week)',
        isMostPopular: true
      }
    ],
    images: ['/products/sunflower-shoots/1.png'],
    usage: `The "Main" Salad: Use as the primary base instead of lettuce.\nNutty Smoothies: Great with bananas and peanut butter in a high-protein smoothie.\nHealthy Snacking: Eat raw straight from the tray as a crunchy alternative to chips.\nSandwiches & Burgers: Better texture and “bite” than traditional greens.\nStir-Fry Garnish: Add just before serving for a fresh nutty finish.`,
    storage: `Temperature: Store harvested shoots in the refrigerator at 1°C to 4°C.\nMoisture Control: Airtight container with a dry paper towel.\nThe Live Advantage: Harvest at the base before true leaves appear to avoid bitterness.\nRinse Before Use: Rinse gently in cold water right before eating (remove seed hulls).`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  },

  {
    id: 'yakra-fenugreek-microgreens',
    slug: 'fenugreek-microgreens',
    name: 'Fenugreek: The Ancient Medicinal Powerhouse',
    category: 'Microgreens',
    tags: ['microgreens', 'fenugreek', 'medicinal', 'metabolic', 'iron', 'blood-sugar', 'fresh'],
    shortDescription:
      'Functional-food microgreens with a savory depth—supports metabolism while leveling up curries and salads.',
    description:
      'Fenugreek microgreens are the ultimate "functional food" in the Yakra Organics collection. Widely respected in traditional medicine, these microgreens provide a concentrated dose of nutrients that support metabolic health while adding a unique, savory depth to your meals.',
    nutritionalBenefits: `Blood Sugar Regulation: 4-hydroxyisoleucine may help stimulate insulin secretion and support healthy blood sugar.\nHormonal Balance: Traditionally known to support healthy testosterone and lactation/hormonal health.\nDigestive Aid: Fiber + anti-inflammatory compounds soothe digestion and reduce bloating.\nCholesterol Control: Helps support healthy LDL and triglycerides.\nIron Rich: Natural iron source to combat fatigue and support oxygen flow.`,
    priceLkr: 1000,
    buyingOptions: [
      {
        id: 'single-live-tray',
        label: 'Single Live Tray',
        price: 1000,
        bestFor: 'Medicinal use / Cooking',
        priceSubtext: 'One-time purchase'
      },
      {
        id: 'intro-offer',
        label: 'Introductory Offer',
        price: 800,
        bestFor: 'First-time trial (Limited time)',
        priceSubtext: 'Limited time for first-time customers'
      },
      {
        id: 'monthly-subscription',
        label: 'Monthly Subscription',
        price: 3000,
        bestFor: '4 Trays (1 per week) - Best Value',
        priceSubtext: 'Includes 4 trays (1 per week)',
        isMostPopular: true
      }
    ],
    images: ['/products/fenugreek-microgreens/1.png'],
    usage: `The Curry Finisher: Sprinkle over dhal curry, chicken curry, or potato tempered right before serving.\nHealthy Paratha & Roti: Chop and mix into roti/paratha dough for a nutritious twist.\nSavory Salads: Mix with sweeter greens like Pea Shoots or Beet to balance bitterness.\nTraditional Mallum Style: Toss with fresh coconut and lime for a nutrient-packed mallum.`,
    storage: `Temperature: Store harvested greens in the refrigerator at 1°C to 4°C.\nMoisture Control: Airtight container with a dry paper towel to keep crisp.\nThe Live Advantage: Harvest by snipping near the base when first two heart-shaped leaves appear.\nRinse Before Use: Rinse gently in cold water right before consumption.`,
    shelfLife: 'Best enjoyed within 5–7 days under refrigeration.'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // DEHYDRATED POWDERS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  {
    id: 'yakra-curry-leaves-powder',
    slug: 'curry-leaves-powder',
    name: 'Yakra Pure Curry Leaves Powder: The Essence of Vitality',
    category: 'Dehydrated Powders',
    tags: ['powder', 'curry-leaves', 'herbal', 'detox', 'digestion', 'hair', 'skin', 'sri-lankan'],
    shortDescription:
      'Slow-dehydrated curry leaves powder that preserves color, essential oils, and potent nutrients—daily vitality in a jar.',
    description:
      'Yakra Curry Leaves Powder is crafted using a specialized slow-dehydration process that preserves the vibrant green color, essential oils, and potent nutrients of fresh organic curry leaves. It is a convenient way to bring the legendary medicinal benefits of this Sri Lankan superfood into your daily life.',
    nutritionalBenefits: `Hair & Skin Health: Antioxidants and beta-carotene support hair follicles and radiant skin.\nDigestive Mastery: Supports digestion and a healthy gut environment.\nCholesterol & Blood Sugar Support: Traditionally used to support healthy cholesterol and regulate blood glucose.\nInternal Detox: Carbazole alkaloids support liver health and detox pathways.\nVitamin Rich: Concentrated Vitamins A, B, C, E plus Iron and Calcium.`,
    priceLkr: 650,
    buyingOptions: [
      {
        id: '50g-premium-jar',
        label: '50g Premium Jar',
        price: 650,
        bestFor: 'Trials / Small households',
        priceSubtext: 'Premium glass jar'
      },
      {
        id: '100g-value-pack',
        label: '100g Value Pack',
        price: 1150,
        bestFor: 'Daily users / Health enthusiasts',
        priceSubtext: 'Best for daily use',
        isMostPopular: true
      },
      {
        id: 'bundle-2x100g',
        label: 'Bundle Offer',
        price: 2100,
        bestFor: '2 x 100g Packs - Best Value',
        priceSubtext: 'Bundle savings'
      }
    ],
    images: ['/products/curry-leaves-powder/1.png'],
    usage: `The Morning Tonic: Mix 1/2 tsp into warm water or buttermilk.\nSuperfood Smoothies: Add ~1 tsp to green smoothies.\nGourmet Seasoning: Sprinkle on roasted veg, popcorn, or omelets.\nTraditional Cooking: Add to dhal/meat/fish curries near the end.\nNutrient-Rich Roti: Mix into flour for Pol Roti or Chapati.`,
    storage: `Keep it Dark & Cool: Store in a cool, dry place away from sunlight.\nAirtight Container: Close lid tightly after every use.\nMoisture Warning: Avoid moisture to preserve aroma and potency.`,
    shelfLife: '6–12 months when stored correctly.'
  },

  {
    id: 'yakra-thebu-leaves-powder',
    slug: 'thebu-leaves-powder',
    name: 'Yakra Pure Thebu Leaves Powder: The Natural Glucose Regulator',
    category: 'Dehydrated Powders',
    tags: ['powder', 'thebu', 'herbal', 'blood-sugar', 'metabolism', 'liver', 'fiber', 'sri-lankan'],
    shortDescription:
      'Premium Thebu leaves powder made with low-temperature dehydration—supports metabolism and blood sugar balance.',
    description:
      'Yakra Thebu Leaves Powder is a premium herbal supplement crafted from 100% organic Thebu leaves. Through our specialized low-temperature dehydration process, we ensure that the potent medicinal properties of the fresh leaf are preserved in a convenient, concentrated form.',
    nutritionalBenefits: `Blood Sugar Management: Traditionally recognized for improving insulin sensitivity.\nLiver Support: Helps protect and detoxify the liver.\nDigestive Health: Natural digestive aid that supports appetite and comfort.\nAnti-Inflammatory: Supports reduced internal inflammation and joint comfort.\nRich in Fiber: Helps gut health and supports healthy weight management.`,
    priceLkr: 750,
    buyingOptions: [
      {
        id: '50g-premium-jar',
        label: '50g Premium Jar',
        price: 750,
        bestFor: 'One-month medicinal trial',
        priceSubtext: 'Premium glass jar'
      },
      {
        id: '100g-value-pack',
        label: '100g Value Pack',
        price: 1350,
        bestFor: 'Daily glucose management',
        priceSubtext: 'Best for routine use',
        isMostPopular: true
      },
      {
        id: 'bundle-elderly-care-2x100g',
        label: 'Elderly Care Bundle',
        price: 2500,
        bestFor: '2 x 100g Packs - Recommended Value',
        priceSubtext: 'Bundle savings'
      }
    ],
    images: ['/products/thebu-leaves-powder/1.png'],
    usage: `The Morning Health Shot: Mix 1/2 tsp in warm water, drink ~30 mins before breakfast.\nHerbal Tea: Stir into hot water, steep 2 minutes.\nPorridge & Smoothies: Add to Kola Kanda or green smoothies.\nFood Sprinkles: Lightly sprinkle over salads or mix into sambols.`,
    storage: `Seal Tight: Keep container airtight; avoid air/moisture.\nAvoid Sunlight: Store in a cool, dark cupboard.\nPurity Guarantee: No additives/preservatives—keep it dry and sealed.`,
    shelfLife: '6–12 months when stored airtight in a cool, dark place.'
  },

  {
    id: 'yakra-pandan-leaves-powder',
    slug: 'pandan-leaves-powder',
    name: 'Yakra Pure Pandan Leaves Powder: The Vanilla of the East',
    category: 'Dehydrated Powders',
    tags: ['powder', 'pandan', 'rampe', 'aromatic', 'baking', 'tea', 'wellness', 'sri-lankan'],
    shortDescription:
      'Aromatic Rampe (Pandan) powder with nutty-vanilla notes—natural flavor, color, and calming wellness.',
    description:
      'Yakra Pandan Powder is a premium, aromatic superfood made from 100% natural Sri Lankan Rampe leaves. Using our signature low-temperature dehydration process, we capture the soul of the fresh leaf—its heavenly nutty-vanilla aroma and its deep medicinal properties—in a versatile, easy-to-use powder.',
    nutritionalBenefits: `Stress & Anxiety Relief: Traditionally used for calm and better sleep.\nDetoxification: Natural diuretic supports kidneys and toxin flush.\nBlood Pressure Support: Traditionally used to support healthy blood pressure.\nNatural Pain Relief: Anti-inflammatory compounds may soothe discomfort.\nSkin Health: Antioxidants support repair and youthful glow.`,
    priceLkr: 600,
    buyingOptions: [
      {
        id: '50g-premium-jar',
        label: '50g Premium Jar',
        price: 600,
        bestFor: 'Home bakers and tea lovers',
        priceSubtext: 'Premium glass jar'
      },
      {
        id: '100g-value-pack',
        label: '100g Value Pack',
        price: 1050,
        bestFor: 'Daily cooking and large batches',
        priceSubtext: 'Best for frequent use',
        isMostPopular: true
      },
      {
        id: 'bundle-aromatic-2x100g',
        label: 'The Aromatic Bundle',
        price: 1900,
        bestFor: '2 x 100g Packs - Best Value',
        priceSubtext: 'Bundle savings'
      }
    ],
    images: ['/products/pandan-leaves-powder/1.png'],
    usage: `Natural Food Coloring & Flavor: Use in cakes, pancakes, muffins, cookies.\nAromatic Rice: Add ~1/2 tsp to rice cooker.\nPandan Latte or Tea: Stir into warm milk (dairy/coconut) or hot water.\nSmoothie Enhancer: Great in pineapple/coconut smoothies.\nCurry Base: Add a pinch toward the end of cooking for authentic aroma.`,
    storage: `Aromatherapy in a Jar: Keep lid tightly sealed to protect volatile oils.\nCool & Dry: Store in a cool, dark place to preserve color and scent.\nPure & Natural: No artificial fragrances or dyes—keep it sealed and dry.`,
    shelfLife: '6–12 months when stored sealed in a cool, dark place.'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 4): Product[] {
  const featured = products.filter((p) => p.featured);
  return (featured.length ? featured : products).slice(0, limit);
}
