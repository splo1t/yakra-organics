import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/data/siteConfig';

import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});

const fontDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="min-h-screen bg-forest-950 font-sans text-forest-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-forest-950 focus:px-4 focus:py-2 focus:text-sm focus:text-forest-100 focus:ring-1 focus:ring-white/10"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
