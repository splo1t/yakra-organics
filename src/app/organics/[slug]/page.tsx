import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ButtonAnchor, ButtonLink } from '@/components/Button';
import { BuyingOptionSelector } from '@/components/BuyingOptionSelector';
import { Container } from '@/components/Container';
import { ProductGallery } from '@/components/ProductGallery';
import { products, getProductBySlug, categories } from '@/data/products';
import { siteConfig } from '@/data/siteConfig';
import { formatLkr } from '@/lib/format';

import { ProductSearch } from './ProductSearch';
import { RelatedProducts } from './RelatedProducts';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `/organics/${product.slug}`
    },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      images: product.images.slice(0, 1).map((url) => ({ url }))
    }
  };
}

export default function ProductPage({ params }: { params: Params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const mailtoSubject = `Yakra.lk inquiry — ${product.name}`;
  const mailtoBody = [
    'Hello Yakra,',
    '',
    `I would like to inquire about: ${product.name}.`,
    '',
    'Please share pricing, availability, and delivery details.',
    '',
    'Thank you.'
  ].join('\n');

  const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    mailtoSubject
  )}&body=${encodeURIComponent(mailtoBody)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((src) => `${siteConfig.siteUrl.replace(/\/$/, '')}${src}`),
    brand: {
      '@type': 'Brand',
      name: 'Yakra'
    },
    category: product.category,
    offers: product.buyingOptions?.length
      ? product.buyingOptions.map((option) => ({
          '@type': 'Offer',
          priceCurrency: 'LKR',
          price: option.price,
          availability: 'https://schema.org/InStock',
          name: option.label
        }))
      : {
          '@type': 'Offer',
          priceCurrency: 'LKR',
          price: product.priceLkr,
          availability: 'https://schema.org/InStock'
        }
  };

  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-6 text-sm text-forest-100/70">
        <ButtonLink href="/organics" variant="ghost" className="px-0">
          ← Back to Organics
        </ButtonLink>
      </div>

      <div className="mt-10 mb-10">
        <ProductSearch products={products} categories={categories} />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name} />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-forest-400/15 px-2 py-1 text-xs text-forest-100/80 ring-1 ring-forest-300/20">
              {product.category}
            </span>
            <div className="text-xs text-forest-100/60">
              Tags: {product.tags.slice(0, 6).join(', ')}
            </div>
          </div>

          <h1 className="mt-4 font-display text-4xl text-forest-100">{product.name}</h1>

          {product.buyingOptions ? (
            <BuyingOptionSelector productName={product.name} buyingOptions={product.buyingOptions} />
          ) : (
            <div className="mt-4">
              <div className="text-lg font-medium text-forest-100">{formatLkr(product.priceLkr)}</div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonAnchor href={mailtoUrl} variant="secondary">
                  Email to order
                </ButtonAnchor>
              </div>
            </div>
          )}

          <p className="mt-4 text-sm leading-relaxed text-forest-100/75">{product.description}</p>

          {product.nutritionalBenefits ? (
            <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
              <h2 className="text-sm font-medium text-forest-100">
                Nutritional Benefits (Health & Vitality)
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-100/70 whitespace-pre-line">
                {product.nutritionalBenefits}
              </p>
            </div>
          ) : null}

          <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
            <div>
              <h2 className="text-sm font-medium text-forest-100">How to Enjoy (Culinary Inspiration)</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-100/70 whitespace-pre-line">
                {product.usage}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-sm font-medium text-forest-100">Storage & Handling</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-100/70 whitespace-pre-line">
                {product.storage}
              </p>
            </div>
            {product.shelfLife ? (
              <div className="mt-6">
                <h2 className="text-sm font-medium text-forest-100">Shelf-life</h2>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                  {product.shelfLife}
                </p>
              </div>
            ) : null}
          </div>

          <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-6">
            <h2 className="font-display text-2xl text-forest-100">Need help choosing?</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
              Tell us what you&apos;re looking for—wellness goals, taste preferences, or menu ideas—and we&apos;ll
              suggest the best fit.
            </p>
            <div className="mt-5">
              <ButtonLink href="/contact" variant="secondary">
                Contact Yakra
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentProduct={product} allProducts={products} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Container>
  );
}
