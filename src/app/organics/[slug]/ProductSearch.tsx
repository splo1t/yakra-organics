'use client';

import { useMemo, useState, useRef } from 'react';

import { ProductCard } from '@/components/ProductCard';
import type { Product, ProductCategory } from '@/data/products';
import { getSearchSuggestions, getPopularSearchTerms } from '@/lib/search';

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function ProductSearch({
  products,
  categories
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ProductCategory | 'All'>('All');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('name');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    return getSearchSuggestions(products, query);
  }, [products, query]);

  const popularTerms = getPopularSearchTerms();

  const filtered = useMemo(() => {
    const q = normalize(query);
    const tokens = q.split(/\s+/).filter(Boolean);

    return products.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (!tokens.length) return true;

      const haystack = [p.name, ...p.tags].map(normalize).join(' ');
      return tokens.every((t) => haystack.includes(t));
    });
  }, [products, query, category]);

  const sortedProducts = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        const priceA = a.buyingOptions?.[0]?.price || a.priceLkr;
        const priceB = b.buyingOptions?.[0]?.price || b.priceLkr;
        return priceA - priceB;
      } else if (sortBy === 'popularity') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      return 0;
    });
  }, [filtered, sortBy]);

  const shouldShowResults = hasSearched && (query.trim() !== '' || category !== 'All');

  const handleSearch = () => {
    setHasSearched(true);
    setShowSuggestions(false);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setHasSearched(true);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setQuery('');
    setHasSearched(false);
  };

  return (
    <div>
      <h2 className="font-display text-3xl text-forest-100">Search Products</h2>
      <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
        Browse all products by name or tags. Find what you&apos;re looking for.
      </p>

      <div className="mt-6 grid gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 shadow-soft sm:grid-cols-3">
        <div className="sm:col-span-2" ref={searchRef}>
          <label className="text-xs font-medium text-forest-100/70" htmlFor="search">
            Search
          </label>
          <div className="relative mt-2">
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setActiveSuggestionIndex(prev => Math.min(prev + 1, suggestions.length - 1));
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setActiveSuggestionIndex(prev => Math.max(prev - 1, -1));
                } else if (e.key === 'Enter') {
                  e.preventDefault();
                  if (activeSuggestionIndex >= 0) {
                    handleSelectSuggestion(suggestions[activeSuggestionIndex]);
                    setActiveSuggestionIndex(-1);
                  } else {
                    handleSearch();
                  }
                }
              }}
              placeholder="Search by product name or tags (e.g., moringa, smoothie, fresh)"
              className="w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 placeholder:text-forest-100/40 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            />
            {showSuggestions && (suggestions.length > 0 || query.length === 0) && (
              <div className="absolute z-10 mt-1 w-full rounded-md border border-white/10 bg-forest-950/90 shadow-lg">
                {query.length === 0 ? (
                  <div className="p-3">
                    <p className="text-xs text-forest-100/70 mb-2">Popular searches:</p>
                    <div className="flex flex-wrap gap-2">
                      {popularTerms.map(term => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => handleSelectSuggestion(term)}
                          className="rounded-full bg-forest-800/50 px-3 py-1 text-xs text-forest-100 hover:bg-forest-700/50"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="max-h-48 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => handleSelectSuggestion(suggestion)}
                        onMouseEnter={() => setActiveSuggestionIndex(index)}
                        className={`w-full px-3 py-2 text-left text-sm ${index === activeSuggestionIndex ? 'bg-accent-500/20' : 'hover:bg-forest-800/50'} text-forest-100`}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-forest-100/70" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as ProductCategory | 'All');
              setHasSearched(true);
            }}
            className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
          >
            <option value="All">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-forest-100/70">
          Showing <span className="text-forest-100">{sortedProducts.length}</span> of{' '}
          <span className="text-forest-100">{products.length}</span> products
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')}
            className="rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
          >
            <option value="name">Sort by: Name</option>
            <option value="price">Sort by: Price (Low to High)</option>
            <option value="popularity">Sort by: Popularity</option>
          </select>
          {query ? (
            <button
              type="button"
              onClick={handleClearSearch}
              className="text-sm text-accent-500 hover:text-accent-500/90"
            >
              Clear search
            </button>
          ) : null}
        </div>
      </div>

      {shouldShowResults && sortedProducts.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : shouldShowResults && !sortedProducts.length ? (
        <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-8 text-center">
          <div className="font-display text-2xl text-forest-100">No results found</div>
          <p className="mt-2 text-sm text-forest-100/70">
            {query ? 'Try different keywords like "moringa", "smoothie", or "fresh"' : 'No products match your filters. Try removing some filters.'}
          </p>
          {query && (
            <div className="mt-4">
              <button
                type="button"
                onClick={handleClearSearch}
                className="text-sm text-accent-500 hover:text-accent-500/90"
              >
                Clear search and try again
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
