'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/data/products';
import { formatLkr } from '@/lib/format';

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <Link
      href={`/organics/${product.slug}`}
      className="group overflow-hidden rounded-xl border border-white/5 bg-white/5 shadow-soft transition hover:border-white/10 hover:bg-white/7"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-base text-forest-100">{product.name}</h3>
          <span className="shrink-0 rounded-md bg-forest-400/15 px-2 py-1 text-[11px] text-forest-100/80 ring-1 ring-forest-300/20">
            {product.category}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-forest-100/70">
          {product.shortDescription}
        </p>

        {product.buyingOptions ? (
          <div className="mt-4">
            <div className="grid gap-1.5">
              {product.buyingOptions.map((option) => (
                <div key={option.id} className="flex items-baseline justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-forest-100/70">{option.label}</span>
                    {option.isMostPopular ? (
                      <span className="rounded-full bg-accent-500/10 px-1.5 py-0.5 text-[9px] font-medium tracking-wide text-accent-500 ring-1 ring-accent-500/20">
                        Popular
                      </span>
                    ) : null}
                  </div>
                  <span className="font-medium text-forest-100">{formatLkr(option.price)}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-right text-xs text-accent-500 group-hover:text-accent-500/90">
              View options →
            </div>
          </div>
        ) : (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm font-medium text-forest-100">{formatLkr(product.priceLkr)}</div>
            <div className="text-sm text-accent-500 group-hover:text-accent-500/90">View</div>
          </div>
        )}
      </div>
    </Link>
  );
}
