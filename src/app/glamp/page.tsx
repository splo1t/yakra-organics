import type { Metadata } from 'next';
import Image from 'next/image';

import { ButtonLink } from '@/components/Button';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Yakra Glamp (Coming Soon)',
  description:
    'Yakra Glamp is a premium nature-inspired glamping concept in Sri Lanka. Coming soon—reach out to inquire or stay updated.'
};

export default function GlampPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium tracking-widest text-accent-500/90">COMING SOON</p>
          <h1 className="mt-4 font-display text-4xl text-forest-100 sm:text-5xl">Yakra Glamp</h1>
          <p className="mt-4 text-sm leading-relaxed text-forest-100/70 sm:text-base">
            A calm escape in nature—designed with the same premium, minimalist philosophy as Yakra
            Organics. This experience isn’t launched yet, but you can inquire early.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Inquire</ButtonLink>
            <ButtonLink href="/organics" variant="secondary">
              Explore Organics
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
            <div>
              <div className="text-sm font-medium text-forest-100">Forest-first comfort</div>
              <div className="mt-1 text-sm text-forest-100/70">
                Premium tents, calm lighting, and curated outdoor spaces.
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-forest-100">Slow, intentional living</div>
              <div className="mt-1 text-sm text-forest-100/70">
                A quiet experience—minimal clutter, maximum nature.
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-forest-100">Early-access inquiries</div>
              <div className="mt-1 text-sm text-forest-100/70">
                Reach out now to stay updated as dates and packages are announced.
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-soft">
          <div className="relative aspect-[4/5]">
            <Image src="/media/glamp.svg" alt="Yakra Glamp teaser" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </Container>
  );
}
