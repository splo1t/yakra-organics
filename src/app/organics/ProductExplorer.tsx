'use client';

import { useMemo, useState } from 'react';

import { ProductCard } from '@/components/ProductCard';
import type { Product, ProductCategory } from '@/data/products';

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function ProductExplorer({
  products,
  categories
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ProductCategory | 'All'>('All');

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

  return (
    <div>
      <div className="grid gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 shadow-soft sm:grid-cols-3">
        <div className="sm:col-span-2">
          <label className="text-xs font-medium text-forest-100/70" htmlFor="search">
            Search
          </label>
          <input
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product name or tags (e.g., moringa, smoothie, fresh)"
            className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 placeholder:text-forest-100/40 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-forest-100/70" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory | 'All')}
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

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="text-sm text-forest-100/70">
          Showing <span className="text-forest-100">{filtered.length}</span> of{' '}
          <span className="text-forest-100">{products.length}</span>
        </div>
        {query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="text-sm text-accent-500 hover:text-accent-500/90"
          >
            Clear search
          </button>
        ) : null}
      </div>

      {filtered.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-8 text-center">
          <div className="font-display text-2xl text-forest-100">No results</div>
          <p className="mt-2 text-sm text-forest-100/70">
            Try a different keyword or remove filters.
          </p>
        </div>
      )}
    </div>
  );
}
