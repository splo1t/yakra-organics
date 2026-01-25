import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'About Yakra',
  description:
    'Learn about Yakra—our mission, vision, and the premium, nature-inspired philosophy behind Yakra Organics and Yakra Glamp.'
};

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="font-display text-4xl text-forest-100">About Yakra</h1>
          <p className="mt-4 text-sm leading-relaxed text-forest-100/70 sm:text-base">
            Yakra is built around calm, premium living—where nature, quality, and minimal design meet.
            Today, Yakra Organics focuses on dehydrated powders and microgreens. Yakra Glamp is coming
            soon.
          </p>

          <div className="mt-10 grid gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
            <div>
              <h2 className="text-sm font-medium text-forest-100">Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                Offer premium, trustworthy products that fit modern routines—without compromising the
                calm and simplicity of nature.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-forest-100">Vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                Become a leading Sri Lankan premium brand for organics and nature-inspired experiences.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-forest-100">Founder / background</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                Founder story and imagery will be added soon. For now, this space is prepared for future
                content without breaking layout.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-soft">
          <div className="relative aspect-[4/5]">
            <Image src="/media/about.svg" alt="Yakra story" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-forest-950/70 p-5 backdrop-blur">
            <div className="text-sm font-medium text-forest-100">A premium brand built to last</div>
            <div className="mt-1 text-sm text-forest-100/70">
              Clean typography, calm spacing, and a structure ready to scale into full e-commerce.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
