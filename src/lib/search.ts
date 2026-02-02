import type { Product } from '@/data/products';

export function getSearchSuggestions(products: Product[], query: string): string[] {
  const normalizedQuery = query.trim().toLowerCase();
  
  if (!normalizedQuery) return [];

  // Extract all possible search terms from products
  const allTerms = new Set<string>();
  
  products.forEach(product => {
    // Add product name
    allTerms.add(product.name.toLowerCase());
    
    // Add individual words from product name
    product.name.split(/\s+/).forEach(word => {
      if (word.length > 2) allTerms.add(word.toLowerCase());
    });
    
    // Add tags
    product.tags.forEach(tag => allTerms.add(tag.toLowerCase()));
  });

  // Filter suggestions that match the query
  const matchingSuggestions = Array.from(allTerms)
    .filter(term => term.includes(normalizedQuery))
    .sort((a, b) => {
      // Sort by relevance (exact matches first, then starting matches)
      if (a.startsWith(normalizedQuery) && !b.startsWith(normalizedQuery)) return -1;
      if (!a.startsWith(normalizedQuery) && b.startsWith(normalizedQuery)) return 1;
      return a.localeCompare(b);
    });

  return matchingSuggestions.slice(0, 5);
}

export function getPopularSearchTerms(): string[] {
  return [
    'moringa',
    'microgreens',
    'powder',
    'smoothie',
    'fresh',
    'organic',
    'superfood',
    'antioxidant',
    'healthy'
  ];
}