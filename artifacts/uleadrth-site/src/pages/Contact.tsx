import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/motion';
import { Leaf } from 'lucide-react';
import { Link } from 'wouter';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Contact details for ULeadRTH will be published here before launch. Inquiries are not accepted through this preview site." 
      />
      
      <PageHeader 
        title="Contact" 
        eyebrow="Get in Touch"
        description="A public inquiry channel is not open yet. Confirmed contact details will appear here before the website launches."
      />

      <section className="py-32 lg:py-48 bg-paper text-ink relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-sand-light/50 p-10 lg:p-16 border border-sand">
                  <h2 className="font-serif text-3xl lg:text-4xl mb-4 tracking-tight">Not accepting inquiries yet</h2>
                  <p className="text-ink-soft mb-8 font-light text-lg leading-relaxed">
                    This page is a placeholder until a secure delivery method and organizational contact details are approved. Nothing you enter elsewhere on this site is transmitted or stored.
                  </p>
                  <p className="text-ink-soft mb-12 font-light text-lg leading-relaxed">
                    In the meantime, you can learn more about the developing model on our approach and services pages.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      href="/approach"
                      className="inline-flex items-center justify-center bg-ink text-paper px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-clay transition-all duration-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
                    >
                      Our Approach
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center border border-ink/20 text-ink px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase hover:border-ink transition-all duration-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
                    >
                      Services
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.2} className="sticky top-40">
                <div className="mb-16">
                  <div className="w-12 h-12 rounded-full bg-clay text-paper flex items-center justify-center mb-8">
                    <Leaf size={20} strokeWidth={1} />
                  </div>
                  <h3 className="font-serif text-3xl mb-6 tracking-tight">Before Launch</h3>
                  <p className="text-ink-soft text-lg font-light leading-relaxed mb-4">
                    Confirmed organizational contact details and any public location information will be added here before the website launches.
                  </p>
                  <p className="text-ink-soft text-lg font-light leading-relaxed italic">
                    Please do not use this preview site for urgent or sensitive information.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-3xl mb-6 tracking-tight">What to Expect</h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="text-clay font-serif italic text-xl mt-1">01.</div>
                      <p className="text-ink-soft font-light">No inquiry form is active on this preview.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="text-clay font-serif italic text-xl mt-1">02.</div>
                      <p className="text-ink-soft font-light">A real enquiry channel will be clearly identified when available.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="text-clay font-serif italic text-xl mt-1">03.</div>
                      <p className="text-ink-soft font-light">Service details will be confirmed during a future conversation.</p>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
