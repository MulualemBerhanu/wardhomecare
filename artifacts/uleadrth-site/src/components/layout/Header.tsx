import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuFirstItemRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

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

  useEffect(() => {
    let focusTimer: number | undefined;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      focusTimer = window.setTimeout(() => {
        menuFirstItemRef.current?.focus();
      }, reduceMotion ? 0 : 100);
      document.querySelectorAll<HTMLElement>('main, footer').forEach((element) => {
        element.inert = true;
      });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      if (focusTimer !== undefined) {
        window.clearTimeout(focusTimer);
      }
      document.body.style.overflow = '';
      document.querySelectorAll<HTMLElement>('main, footer').forEach((element) => {
        element.inert = false;
      });
    };
  }, [mobileMenuOpen, reduceMotion]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }

      if (e.key === 'Tab' && mobileMenuOpen) {
        const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/approach', label: 'Approach' },
    { href: '/life-at-uleadrth', label: 'Life Here' },
  ];

  const isDarkBg = !isScrolled && !mobileMenuOpen;
  const logoOnDark = isDarkBg || mobileMenuOpen;
  
  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
          isScrolled ? "bg-paper/90 backdrop-blur-xl border-b border-ink/5 py-4 shadow-sm" : "bg-transparent py-8"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
              "z-50 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm transition-colors duration-300",
              logoOnDark ? "text-paper" : "text-ink"
            )}
            data-testid="link-home"
          >
            <span className="font-serif text-3xl italic tracking-tight">ULeadRTH</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-sans text-sm font-medium tracking-[0.12em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm link-editorial",
                  location === link.href 
                    ? (isDarkBg ? "text-clay-soft" : "text-clay") 
                    : (isDarkBg ? "text-paper/80 hover:text-paper" : "text-ink/70 hover:text-ink")
                )}
                data-testid={`link-desktop-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className={cn(
                "relative overflow-hidden px-8 py-3 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-full group",
                isDarkBg 
                  ? "bg-paper text-ink hover:bg-paper-bright" 
                  : "bg-ink text-paper hover:bg-ink-soft"
              )}
              data-testid="link-desktop-contact"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact
              </span>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            ref={menuButtonRef}
            className={cn(
              "lg:hidden z-50 relative p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm",
              logoOnDark ? "text-paper" : "text-ink"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            ref={mobileMenuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main Navigation"
            initial={reduceMotion ? false : { y: "-100%" }}
            animate={{ y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="fixed inset-0 bg-ink z-40 flex flex-col lg:hidden"
          >
            <div className="flex-1 container-wide pt-40 pb-12 flex flex-col justify-between overflow-y-auto">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.href} 
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { delay: 0.3 + (i * 0.1), duration: 0.6, ease: "easeOut" }}
                  >
                    <Link 
                      href={link.href}
                      ref={i === 0 ? menuFirstItemRef : null}
                      className="font-serif text-5xl sm:text-6xl text-paper hover:text-clay-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-8 focus-visible:ring-offset-ink rounded-sm inline-block italic"
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={reduceMotion ? { duration: 0 } : { delay: 0.8, duration: 0.6 }}
                className="mt-12 flex flex-col gap-8"
              >
                <div className="h-px bg-paper/20 w-full" />
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center text-ink bg-paper px-8 py-5 text-sm font-medium tracking-[0.2em] uppercase hover:bg-clay-soft hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-full"
                  data-testid="link-mobile-contact"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
