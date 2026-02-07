'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { siteConfig } from '@/data/siteConfig';
import { cn } from '@/lib/cn';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/organics', label: 'Organics' },
  { href: '/glamp', label: 'Glamp' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const activeHref = useMemo(() => {
    if (!pathname) return '/';
    if (pathname.startsWith('/organics')) return '/organics';
    return pathname;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-forest-950/70 backdrop-blur supports-[backdrop-filter]:bg-forest-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group relative inline-flex items-center">
          <div className="relative h-8 w-24">
            <Image
              src={siteConfig.logoImage}
              alt="Yakra.lk"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm text-forest-100/75 transition hover:text-forest-100 hover:bg-white/5',
                  isActive && 'text-forest-100 bg-white/5'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-forest-100/80 transition hover:bg-white/5 hover:text-forest-100 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-forest-950/80 px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm text-forest-100/80 transition hover:bg-white/5 hover:text-forest-100',
                    isActive && 'bg-white/5 text-forest-100'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
