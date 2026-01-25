import type { Metadata } from 'next';

import { Container } from '@/components/Container';
import { categories, products } from '@/data/products';

import { ProductExplorer } from './ProductExplorer';

export const metadata: Metadata = {
  title: 'Organics',
  description:
    'Explore Yakra Organics dehydrated powders and microgreens. Search by product name or tags and send an inquiry to order.'
};

export default function OrganicsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl text-forest-100">Yakra Organics</h1>
        <p className="mt-3 text-sm leading-relaxed text-forest-100/70">
          Browse dehydrated powders and microgreens. Search by product name or tags, and open a
          product page to inquire.
        </p>
      </div>

      <div className="mt-10">
        <ProductExplorer products={products} categories={categories} />
      </div>
    </Container>
  );
}
