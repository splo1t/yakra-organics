'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import { cn } from '@/lib/cn';

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open || safeImages.length === 0) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight' && safeImages.length > 1)
        setActiveIndex((i) => (i + 1) % safeImages.length);
      if (e.key === 'ArrowLeft' && safeImages.length > 1)
        setActiveIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    };

    document.addEventListener('keydown', onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, safeImages.length]);

  const active = safeImages[activeIndex] ?? safeImages[0];

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-soft"
        aria-label="Open product images"
      >
        <div className="relative aspect-square">
          {active ? (
            <Image
              src={active}
              alt={alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : null}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
      </button>

      {safeImages.length > 1 ? (
        <div className="mt-3 flex gap-3 overflow-auto pb-1">
          {safeImages.map((src, idx) => (
            <button
              type="button"
              key={`${src}-${idx}`}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                'relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border bg-white/5',
                idx === activeIndex ? 'border-accent-500/60' : 'border-white/5 hover:border-white/10'
              )}
              aria-label={`Select image ${idx + 1}`}
            >
              <Image src={src} alt={alt} fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0"
            aria-label="Close"
          />

          <div className="relative z-10 w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-forest-950 shadow-soft">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                {active ? (
                  <Image
                    src={active}
                    alt={alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                ) : null}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/70 text-forest-100 ring-1 ring-white/10 hover:bg-forest-950"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {safeImages.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => setActiveIndex((i) => (i - 1 + safeImages.length) % safeImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/70 text-forest-100 ring-1 ring-white/10 hover:bg-forest-950"
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeWidth="2" d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((i) => (i + 1) % safeImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/70 text-forest-100 ring-1 ring-white/10 hover:bg-forest-950"
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeWidth="2" d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </>
            ) : null}

            <div className="mt-3 flex items-center justify-between text-xs text-white/70">
              <div>
                Image {Math.min(activeIndex + 1, safeImages.length)} of {safeImages.length}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-white/5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
