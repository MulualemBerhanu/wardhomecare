import { ReactNode, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Header } from './Header';
import { Footer } from './Footer';

export function Shell({ children }: { children: ReactNode }) {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-sand selection:text-ink">
      <div className="noise-overlay" />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-ink focus:text-paper focus:top-0 focus:left-0 focus:outline-none">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 w-full bg-paper">
        {children}
      </main>
      <Footer />
    </div>
  );
}
