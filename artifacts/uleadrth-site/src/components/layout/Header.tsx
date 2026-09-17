import { Link, useLocation } from 'wouter';
import { Leaf, Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuFirstItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Accessibility and focus management for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Slight delay to allow transition before focusing
      setTimeout(() => {
        menuFirstItemRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/approach', label: 'Our Approach' },
    { href: '/life-at-uleadrth', label: 'Life Here' },
    { href: '/resources', label: 'Resources' },
  ];

  // The hero/headers are dark, so non-scrolled header should be light text
  const isDarkBg = !isScrolled && !mobileMenuOpen;
  
  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 py-4 shadow-sm" : "bg-transparent py-6"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
              "flex items-center gap-3 z-50 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm",
              isDarkBg ? "text-paper" : "text-ink"
            )}
            data-testid="link-home"
          >
            <span className={cn(
              "w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300",
              isDarkBg ? "bg-paper text-ink group-hover:bg-clay group-hover:text-paper" : "bg-ink text-paper group-hover:bg-clay group-hover:text-paper"
            )}>
              <Leaf size={16} strokeWidth={1.5} />
            </span>
            <span className="font-sans font-bold tracking-widest uppercase text-xs">ULeadRTH</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-sans text-sm font-medium tracking-wide uppercase link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm",
                  location === link.href 
                    ? (isDarkBg ? "text-clay-soft" : "text-clay") 
                    : (isDarkBg ? "text-paper/90 hover:text-paper" : "text-ink hover:text-ink-soft")
                )}
                data-testid={`link-desktop-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className={cn(
                "flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wider uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm",
                isDarkBg 
                  ? "bg-paper text-ink hover:bg-clay-soft hover:text-ink" 
                  : "bg-ink text-paper hover:bg-clay"
              )}
              data-testid="link-desktop-contact"
            >
              Get Started <ArrowUpRight size={16} />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            ref={menuButtonRef}
            className={cn(
              "lg:hidden z-50 relative p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm",
              (isDarkBg || mobileMenuOpen) ? "text-paper" : "text-ink"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation"
        inert={!mobileMenuOpen}
        className={cn(
          "fixed inset-0 bg-ink z-40 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:hidden",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex-1 container-wide pt-32 pb-12 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <div 
                key={link.href} 
                className={cn(
                  "transition-all duration-300",
                  mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: mobileMenuOpen ? `${100 + i * 50}ms` : '0ms' }}
              >
                <Link 
                  href={link.href}
                  ref={i === 0 ? menuFirstItemRef : null}
                  className="font-serif text-4xl sm:text-5xl text-paper hover:text-clay-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-8 focus-visible:ring-offset-ink rounded-sm inline-block"
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <div 
            className={cn(
              "mt-12 transition-all duration-300 flex flex-col gap-6",
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}
          >
            <div className="h-px bg-paper/20 w-full" />
            <Link 
              href="/contact"
              className="inline-flex items-center justify-between text-ink bg-paper px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-clay-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-sm"
              data-testid="link-mobile-contact"
            >
              Get Started <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
