import Link from 'next/link';

import { siteConfig } from '@/data/siteConfig';
import { Container } from '@/components/Container';

const links = [
  { href: '/', label: 'Home' },
  { href: '/organics', label: 'Organics' },
  { href: '/glamp', label: 'Glamp' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-forest-950/60">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-lg text-forest-100">Yakra.lk</div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-forest-100/70">
              Premium dehydrated powders and microgreens from Sri Lanka. Yakra Glamp is launching soon.
            </p>
          </div>

          <div>
            <div className="text-sm font-medium text-forest-100">Quick links</div>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-forest-100/70 hover:text-forest-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium text-forest-100">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-forest-100/70">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-forest-100">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${siteConfig.contact.whatsappE164.replace('+', '')}`} className="hover:text-forest-100">
                  WhatsApp {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-forest-100/80 hover:bg-white/10 hover:text-forest-100"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.75 6.25a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-forest-100/80 hover:bg-white/10 hover:text-forest-100"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.8v8h3.7Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-forest-100/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Yakra.lk. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-forest-100">
              Brand
            </Link>
            <Link href="/contact" className="hover:text-forest-100">
              Inquiries
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
