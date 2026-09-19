import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/motion';
import { Leaf } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Start a conversation with ULeadRTH about residential support and care options." 
      />
      
      <PageHeader 
        title="Start a Conversation" 
        eyebrow="Contact"
        description="If you are exploring residential support options for yourself or a loved one, we are here to listen and help you determine if ULeadRTH might be the right fit."
      />

      <section className="py-32 lg:py-48 bg-paper text-ink relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Form Side */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-sand-light/50 p-10 lg:p-16 border border-sand">
                  <h2 className="font-serif text-3xl lg:text-4xl mb-4 tracking-tight">Inquire</h2>
                  <p className="text-ink-soft mb-12 font-light">
                    This form is a visual preview only and does not transmit data.
                  </p>

                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="firstName" className="block text-[11px] font-medium tracking-[0.2em] uppercase text-ink/70">
                          First Name
                        </label>
                        <input 
                          type="text" 
                          id="firstName" 
                          disabled
                          className="w-full bg-transparent border-b border-ink/20 py-3 focus:border-clay outline-none transition-colors disabled:opacity-50 text-lg font-serif"
                          placeholder="Jane"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="lastName" className="block text-[11px] font-medium tracking-[0.2em] uppercase text-ink/70">
                          Last Name
                        </label>
                        <input 
                          type="text" 
                          id="lastName" 
                          disabled
                          className="w-full bg-transparent border-b border-ink/20 py-3 focus:border-clay outline-none transition-colors disabled:opacity-50 text-lg font-serif"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="block text-[11px] font-medium tracking-[0.2em] uppercase text-ink/70">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        disabled
                        className="w-full bg-transparent border-b border-ink/20 py-3 focus:border-clay outline-none transition-colors disabled:opacity-50 text-lg font-serif"
                        placeholder="jane@example.com"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="interest" className="block text-[11px] font-medium tracking-[0.2em] uppercase text-ink/70">
                        I am inquiring for
                      </label>
                      <select 
                        id="interest"
                        disabled
                        className="w-full bg-transparent border-b border-ink/20 py-3 focus:border-clay outline-none transition-colors disabled:opacity-50 text-lg font-serif appearance-none cursor-not-allowed"
                      >
                        <option value="">Myself</option>
                        <option value="family">A family member</option>
                        <option value="client">A client</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-[11px] font-medium tracking-[0.2em] uppercase text-ink/70">
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        disabled
                        rows={4}
                        className="w-full bg-transparent border-b border-ink/20 py-3 focus:border-clay outline-none transition-colors resize-none disabled:opacity-50 text-lg font-serif"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>

                    <button 
                      type="button"
                      disabled
                      className="mt-8 bg-ink text-paper px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-clay hover:text-paper transition-all duration-500 rounded-full cursor-not-allowed opacity-50 w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Info Side */}
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
                     Please do not use this preview form for urgent or sensitive information.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-3xl mb-6 tracking-tight">What to Expect</h3>
                  <ul className="space-y-6">
                     <li className="flex gap-4">
                       <div className="text-clay font-serif italic text-xl mt-1">01.</div>
                       <p className="text-ink-soft font-light">No information entered here is sent or stored.</p>
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
