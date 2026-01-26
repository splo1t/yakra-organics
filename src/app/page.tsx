import Image from 'next/image';

import { ButtonLink } from '@/components/Button';
import { Container } from '@/components/Container';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Premium organics & microgreens',
  description:
    'Yakra.lk is a premium Sri Lankan brand for dehydrated powders, microgreens, and calm nature-inspired living. Browse products and send inquiries.'
};

export default function HomePage() {
  const featured = getFeaturedProducts(4);

  return (
    <div>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 md:bg-fixed"
          style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-forest-950/70 to-forest-950" />

        <Container className="relative flex min-h-[100dvh] flex-col justify-center py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest text-accent-500/90">
              Yakra Organics • Yakra Glamp
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight tracking-wide text-forest-100 sm:text-5xl">
              Premium, calm, nature-first products for modern living.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-forest-100/75 sm:text-lg">
              Dehydrated powders and microgreens crafted with care in Sri Lanka—designed to feel as
              premium as the lifestyle they support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/organics">View products</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 sm:grid-cols-3">
              <div>
                <div className="text-sm font-medium text-forest-100">Low-temp dried</div>
                <div className="mt-1 text-xs leading-relaxed text-forest-100/65">
                  Crafted to preserve aroma and color.
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-forest-100">Premium handling</div>
                <div className="mt-1 text-xs leading-relaxed text-forest-100/65">
                  Clean, minimal packaging and care.
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-sm font-medium text-forest-100">Built for inquiry</div>
                <div className="mt-1 text-xs leading-relaxed text-forest-100/65">
                  Quick WhatsApp and email ordering.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/5 bg-forest-950">
                  <Image src="/media/organics.svg" alt="Yakra Organics" fill className="object-cover" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-forest-100">Yakra Organics</h2>
                  <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                    Dehydrated powders and microgreens with a clean, premium finish—crafted for daily
                    routines.
                  </p>
                  <div className="mt-4">
                    <ButtonLink href="/organics" variant="ghost" className="px-0">
                      Explore products →
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/5 bg-forest-950">
                  <Image src="/media/glamp.svg" alt="Yakra Glamp" fill className="object-cover" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-forest-100">Yakra Glamp</h2>
                  <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                    A calm escape in nature. Premium glamping is coming soon—follow along and inquire
                    early.
                  </p>
                  <div className="mt-4">
                    <ButtonLink href="/glamp" variant="ghost" className="px-0">
                      Coming soon details →
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl text-forest-100">Featured products</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-forest-100/70">
                A curated selection—crafted to look and feel like a premium online store, while staying
                fast and frontend-only.
              </p>
            </div>
            <div className="hidden sm:block">
              <ButtonLink href="/organics" variant="secondary">
                View all
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <ButtonLink href="/organics" variant="secondary" className="w-full">
              View all products
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
