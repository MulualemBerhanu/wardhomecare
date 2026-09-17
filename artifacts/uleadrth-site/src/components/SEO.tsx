import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  noindex?: boolean;
}

export function SEO({ title, description, noindex }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ULeadRTH`;
    document.title = fullTitle;
    
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
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
    };

    updateMeta('description', description);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('twitter:title', fullTitle, true);
    updateMeta('twitter:description', description, true);

    if (noindex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
    }
  }, [title, description, noindex]);

  return null;
}
