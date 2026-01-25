import type { MetadataRoute } from 'next';

import { products } from '@/data/products';
import { siteConfig } from '@/data/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, '');

  const staticRoutes = ['/', '/organics', '/glamp', '/about', '/contact'].map((path) => ({
    url: `${base}${path}`,
    changefreq: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/organics/${p.slug}`,
    changefreq: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...productRoutes];
}
