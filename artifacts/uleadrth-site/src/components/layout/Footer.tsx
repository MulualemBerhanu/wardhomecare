import { Link } from 'wouter';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink text-paper pt-24 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 text-paper mb-8" data-testid="link-footer-home">
              <span className="w-10 h-10 flex items-center justify-center bg-clay text-paper rounded-full">
                <Leaf size={20} strokeWidth={1.5} />
              </span>
              <span className="font-sans font-bold tracking-widest uppercase text-sm">ULeadRTH</span>
            </Link>
            <p className="font-serif text-2xl lg:text-3xl leading-snug mb-8 max-w-md text-balance text-sand">
              A place to heal. A path to move forward.
            </p>
            <p className="text-sand/70 text-sm max-w-sm leading-relaxed">
              Compassionate residential treatment and supportive care centered around the whole person.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="font-sans font-bold tracking-widest text-xs uppercase mb-6 text-clay-soft">Organization</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-sand hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sand hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/approach" className="text-sand hover:text-white transition-colors">Our Approach</Link></li>
              <li><Link href="/life-at-uleadrth" className="text-sand hover:text-white transition-colors">Life Here</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-sans font-bold tracking-widest text-xs uppercase mb-6 text-clay-soft">Support</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/resources" className="text-sand hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/faq" className="text-sand hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sand hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-sand/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-sand/50">
          <p>© {new Date().getFullYear()} ULeadRTH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-sand transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-sand transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
