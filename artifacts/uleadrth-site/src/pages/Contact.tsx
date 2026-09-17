import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Start a conversation with ULeadRTH about our supportive residential environment." 
      />
      
      <PageHeader 
        title="Let's Begin" 
        eyebrow="Contact"
        description="There is no need to have the perfect words. Tell us a little about what you are looking for, and we will share what comes next."
      />

      <section className="py-24 lg:py-32 bg-paper text-ink relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="font-serif text-3xl lg:text-4xl mb-6">A quiet first step.</h2>
                <p className="text-ink-soft text-lg leading-relaxed mb-10 text-balance">
                  Share only what feels comfortable. This is a simple expression of interest, not a commitment or an emergency service.
                </p>
                
                <div className="p-6 bg-sand border border-ink/5 flex gap-4 items-start">
                  <Info className="text-clay flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                  <div>
                    <h3 className="font-sans font-bold tracking-widest text-xs uppercase text-clay mb-2">Privacy Note</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      Please do not include sensitive medical information or diagnoses in this initial form. A member of our team will share more details about our environment during our first conversation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-moss p-10 lg:p-16 text-paper min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-paper/20 flex items-center justify-center mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="font-serif text-3xl mb-4">Message Not Sent</h3>
                  <p className="text-lg text-paper/90 leading-relaxed max-w-md">
                    This demonstration form is not connected to a live inbox, and no message was transmitted. Once finalized, inquiries will be routed to our team.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm font-bold tracking-widest uppercase border-b border-paper/50 pb-1 hover:border-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-moss rounded-sm"
                  >
                    Return to form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-white p-8 lg:p-12 shadow-sm border border-ink/5">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="font-sans font-bold tracking-widest text-xs uppercase text-ink-soft">
                        First Name <span className="text-clay">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="bg-sand/30 border border-ink/10 px-4 py-3 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/20 transition-all font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="font-sans font-bold tracking-widest text-xs uppercase text-ink-soft">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="bg-sand/30 border border-ink/10 px-4 py-3 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/20 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-sans font-bold tracking-widest text-xs uppercase text-ink-soft">
                        Email Address <span className="text-clay">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="bg-sand/30 border border-ink/10 px-4 py-3 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/20 transition-all font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="font-sans font-bold tracking-widest text-xs uppercase text-ink-soft">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="bg-sand/30 border border-ink/10 px-4 py-3 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/20 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="role" className="font-sans font-bold tracking-widest text-xs uppercase text-ink-soft">
                      I am contacting you as... <span className="text-clay">*</span>
                    </label>
                    <select 
                      id="role" 
                      required
                      defaultValue=""
                      className="bg-sand/30 border border-ink/10 px-4 py-3 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/20 transition-all font-sans appearance-none rounded-none"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="self">A prospective resident</option>
                      <option value="family">A family member or loved one</option>
                      <option value="professional">A referring professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-sans font-bold tracking-widest text-xs uppercase text-ink-soft">
                      What would you like us to know? <span className="text-clay">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      required
                      rows={6}
                      className="bg-sand/30 border border-ink/10 px-4 py-3 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/20 transition-all font-sans resize-y"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="bg-ink text-paper w-full md:w-auto px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-clay transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
