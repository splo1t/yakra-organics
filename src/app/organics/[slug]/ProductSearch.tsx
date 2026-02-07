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
      <div className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-2 shadow-soft lg:flex-row lg:items-center">
        <div className="relative flex-grow" ref={searchRef}>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-forest-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.35-4.65a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
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
              placeholder="Search organics..."
              className="h-10 w-full rounded-full border border-white/10 bg-forest-950/40 pl-10 pr-10 text-sm text-forest-100 placeholder:text-forest-200/60 transition focus:border-accent-500/60 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
            {query ? (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-400 transition hover:text-forest-600"
                aria-label="Clear search"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            ) : null}
            {showSuggestions && (suggestions.length > 0 || query.length === 0) && (
              <div className="absolute z-10 mt-2 w-full rounded-xl border border-forest-200/60 bg-white/95 shadow-lg">
                {query.length === 0 ? (
                  <div className="p-3">
                    <p className="mb-2 text-xs text-forest-500">Popular searches:</p>
                    <div className="flex flex-wrap gap-2">
                      {popularTerms.map(term => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => handleSelectSuggestion(term)}
                          className="rounded-full bg-forest-100 px-3 py-1 text-xs text-forest-700 transition hover:bg-forest-200"
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
                        className={`w-full px-4 py-2 text-left text-sm ${index === activeSuggestionIndex ? 'bg-forest-100/70' : 'hover:bg-forest-50'} text-forest-900`}
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

        <div className="flex flex-wrap gap-2 lg:flex-nowrap">
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as ProductCategory | 'All');
              setHasSearched(true);
            }}
            className="h-10 flex-grow rounded-full border border-white/10 bg-forest-950/60 px-4 py-2 text-sm text-forest-100 focus:outline-none focus:ring-2 focus:ring-accent-500/50 lg:w-44 lg:flex-none"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity')}
            className="h-10 flex-grow rounded-full border border-white/10 bg-forest-950/60 px-4 py-2 text-sm text-forest-100 focus:outline-none focus:ring-2 focus:ring-accent-500/50 lg:w-44 lg:flex-none"
          >
            <option value="name">Sort: Name</option>
            <option value="price">Sort: Price</option>
            <option value="popularity">Sort: Popularity</option>
          </select>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between px-2">
        <div className="text-[10px] uppercase tracking-wider text-forest-100/40">
          Showing <span className="text-forest-100/60">{sortedProducts.length}</span> of{' '}
          <span className="text-forest-100/60">{products.length}</span> products
        </div>
      </div>

      {shouldShowResults && sortedProducts.length ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
