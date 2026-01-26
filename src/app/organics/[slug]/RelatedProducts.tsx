import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/data/products';

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

export function RelatedProducts({ currentProduct, allProducts }: RelatedProductsProps) {
  const relatedProducts = allProducts
    .filter((p) => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="font-display text-3xl text-forest-100">You may also like</h2>
      <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
        More {currentProduct.category.toLowerCase()} similar to {currentProduct.name}.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
