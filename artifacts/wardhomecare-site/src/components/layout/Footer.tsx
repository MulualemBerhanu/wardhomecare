import { Link } from 'wouter';
import { BrandLogo } from '@/components/BrandLogo';
import { BRAND, CONTACT, NAV } from '@/lib/brand';

export function Footer() {
  return (
    <footer className="bg-night text-paper pt-28 pb-12 selection:bg-clay selection:text-paper">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" aria-label="Ward Home Care home" className="z-50 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm transition-colors duration-300 text-paper mb-12">
              <BrandLogo markClassName="h-12 sm:h-14" className="group-hover:opacity-90 transition-opacity" />
            </Link>
            <p className="font-serif text-3xl lg:text-4xl leading-snug mb-8 max-w-md text-balance text-paper">
              A place to Belong.
              <span className="block italic">A Life to Thrive.</span>
            </p>
            <p className="text-paper/60 text-lg max-w-sm leading-relaxed font-light">
              {BRAND.tagline}
            </p>
            <p className="mt-6 text-paper/50 text-sm font-light leading-relaxed">
              {CONTACT.addressLines.join(', ')}
              <span className="block mt-1">{CONTACT.email}</span>
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="font-sans font-medium tracking-[0.2em] text-[10px] uppercase mb-8 text-sand">Organization</h3>
            <ul className="flex flex-col gap-5">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-sans font-medium tracking-[0.2em] text-[10px] uppercase mb-8 text-sand">Support</h3>
            <ul className="flex flex-col gap-5">
              <li><Link href="/resources" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Resources</Link></li>
              <li><Link href="/faq" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">FAQ</Link></li>
              <li><Link href="/connect" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-paper/15 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-paper/70 font-light tracking-wide">
          <p>© {new Date().getFullYear()} {BRAND.legalName} All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-paper transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-paper transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
