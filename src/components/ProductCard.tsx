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

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-medium text-forest-100">
            {typeof product.priceLkr === 'number' ? formatLkr(product.priceLkr) : 'Inquire for price'}
          </div>
          <div className="text-sm text-accent-500 group-hover:text-accent-500/90">View</div>
        </div>
      </div>
    </Link>
  );
}
