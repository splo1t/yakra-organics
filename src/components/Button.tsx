import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentProps } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  variant?: Variant;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-forest-400/20 text-forest-100 ring-1 ring-forest-300/30 hover:bg-forest-400/30 hover:ring-forest-200/30',
  secondary:
    'bg-white/5 text-forest-100 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/15',
  ghost: 'text-forest-100 hover:bg-white/5'
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 disabled:opacity-50 disabled:pointer-events-none';

export function Button({
  variant = 'primary',
  className,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(baseClasses, variantClasses[variant], className)} {...props} />;
}

export function ButtonLink({
  variant = 'primary',
  className,
  href,
  ...props
}: CommonProps & Omit<ComponentProps<typeof Link>, 'className' | 'href'> & { href: string }) {
  return (
    <Link href={href} className={cn(baseClasses, variantClasses[variant], className)} {...props} />
  );
}

export function ButtonAnchor({
  variant = 'primary',
  className,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn(baseClasses, variantClasses[variant], className)} {...props} />;
}
