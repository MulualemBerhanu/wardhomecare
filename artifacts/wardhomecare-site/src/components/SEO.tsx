import { useEffect } from 'react';
import { useLocation } from 'wouter';

import { BRAND } from '@/lib/brand';

const DEFAULT_OG_IMAGE = '/images/og-ward.jpg';
const SITE_NAME = BRAND.displayName;

interface SEOProps {
  title: string;
  description: string;
  noindex?: boolean;
  image?: string;
  imageAlt?: string;
}

function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const origin =
    import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ||
    (typeof window !== 'undefined' ? window.location.origin : '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return origin ? `${origin}${normalized}` : normalized;
}

function updateMeta(name: string, content: string, isProperty = false) {
  const selector = isProperty
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`;
  let meta = document.querySelector(selector);
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    meta = document.createElement('meta');
    if (isProperty) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
}

function updateCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function SEO({
  title,
  description,
  noindex,
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Ward Home Care — 24-hour residential services in Salem, Oregon',
}: SEOProps) {
  const [location] = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const path = location === '/' ? '/' : location;
    const canonical = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = fullTitle;

    updateMeta('description', description);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:site_name', SITE_NAME, true);
    updateMeta('og:url', canonical, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:image:alt', imageAlt, true);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);
    updateMeta('twitter:image:alt', imageAlt);
    updateCanonical(canonical);

    if (noindex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
    }
  }, [title, description, noindex, image, imageAlt, location]);

  return null;
}
