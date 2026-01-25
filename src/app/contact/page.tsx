import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/Container';
import { siteConfig } from '@/data/siteConfig';

import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Yakra.lk for product inquiries, bulk orders, or Yakra Glamp early-access requests.'
};

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl text-forest-100">Contact Yakra</h1>
          <p className="mt-4 text-sm leading-relaxed text-forest-100/70 sm:text-base">
            Send a product inquiry, ask about delivery, or request early access for Yakra Glamp. This is
            a frontend-only site for now—your message will open in your email app or WhatsApp.
          </p>

          <div className="mt-8 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-soft">
            <ContactForm />
          </div>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-soft">
            <div className="relative aspect-[4/5]">
              <Image src="/media/contact.svg" alt="Contact Yakra" fill className="object-cover" priority />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
          </div>

          <div className="mt-6 grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-forest-100/70">
            <div>
              <div className="text-xs font-medium tracking-widest text-accent-500/90">EMAIL</div>
              <a href={`mailto:${siteConfig.contact.email}`} className="mt-1 block text-forest-100 hover:underline">
                {siteConfig.contact.email}
              </a>
            </div>
            <div>
              <div className="text-xs font-medium tracking-widest text-accent-500/90">WHATSAPP</div>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappE164.replace('+', '')}`}
                className="mt-1 block text-forest-100 hover:underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="text-xs font-medium tracking-widest text-accent-500/90">LOCATION</div>
              <div className="mt-1 text-forest-100">{siteConfig.contact.address}</div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href={siteConfig.social.instagram} className="hover:text-forest-100">
                Instagram
              </a>
              <a href={siteConfig.social.facebook} className="hover:text-forest-100">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
