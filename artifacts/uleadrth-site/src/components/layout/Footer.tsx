import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-ink text-paper pt-32 pb-12 selection:bg-clay selection:text-paper">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="z-50 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm transition-colors duration-300 text-paper mb-12">
              <span className="font-serif text-4xl italic tracking-tight group-hover:text-clay-soft transition-colors">ULeadRTH</span>
            </Link>
            <p className="font-serif text-3xl lg:text-4xl leading-snug mb-8 max-w-md text-balance text-paper">
              A place to land. A path to move forward.
            </p>
            <p className="text-paper/60 text-lg max-w-sm leading-relaxed font-light">
              A thoughtful residential support concept centered around the whole person.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="font-sans font-medium tracking-[0.2em] text-[10px] uppercase mb-8 text-sand">Organization</h3>
            <ul className="flex flex-col gap-5">
              <li><Link href="/" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Home</Link></li>
              <li><Link href="/about" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">About Us</Link></li>
              <li><Link href="/services" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Services</Link></li>
              <li><Link href="/approach" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Our Approach</Link></li>
              <li><Link href="/life-at-uleadrth" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Life Here</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-sans font-medium tracking-[0.2em] text-[10px] uppercase mb-8 text-sand">Support</h3>
            <ul className="flex flex-col gap-5">
              <li><Link href="/resources" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Resources</Link></li>
              <li><Link href="/faq" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">FAQ</Link></li>
              <li><Link href="/contact" className="text-paper/70 hover:text-paper text-sm transition-colors link-editorial pb-1">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-paper/15 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-paper/70 font-light tracking-wide">
          <p>© {new Date().getFullYear()} ULeadRTH. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-paper transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-paper transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
