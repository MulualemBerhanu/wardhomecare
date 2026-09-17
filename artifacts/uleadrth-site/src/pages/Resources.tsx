import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export default function Resources() {
  return (
    <>
      <SEO 
        title="Resources & Information" 
        description="General educational information and guidance regarding supportive residential care and person-centered approaches." 
      />
      
      <PageHeader 
        title="Resources" 
        eyebrow="Helpful Information"
        description="General guidance for individuals and families exploring supportive residential options."
      />

      <section className="py-24 lg:py-32 bg-paper text-ink min-h-[50vh]">
        <div className="container-wide">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-serif text-2xl lg:text-3xl leading-snug mb-6">
              Finding the right environment can take time.
            </p>
            <p className="text-ink-soft text-lg">
              The information provided here is intended as a general starting point for those exploring residential support. 
              <strong> Please note that this content is for educational purposes only and does not constitute medical, clinical, or professional advice.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            <div className="flex flex-col gap-6">
              <div className="bg-sand p-8 border border-ink/5 flex-1">
                <h3 className="font-serif text-2xl mb-4">Questions to Ask a Provider</h3>
                <p className="text-ink-soft mb-6 leading-relaxed">
                  When exploring supportive living options, it can be helpful to ask questions that clarify the environment's approach:
                </p>
                <ul className="space-y-3 text-ink-soft text-sm">
                  <li className="flex gap-3"><span className="text-clay mt-1">•</span> What is the daily rhythm of the house?</li>
                  <li className="flex gap-3"><span className="text-clay mt-1">•</span> How do staff support independence rather than doing things for residents?</li>
                  <li className="flex gap-3"><span className="text-clay mt-1">•</span> How is community and belonging fostered?</li>
                  <li className="flex gap-3"><span className="text-clay mt-1">•</span> What are the expectations for engaging with external providers?</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 border-t-4 border-moss shadow-sm flex-1">
                <h3 className="font-serif text-2xl mb-4">Understanding Person-Centered Support</h3>
                <p className="text-ink-soft mb-4 leading-relaxed">
                  Person-centered support shifts the focus from a "one-size-fits-all" program to a more individualized approach. It prioritizes:
                </p>
                <ul className="space-y-3 text-ink-soft text-sm">
                  <li><strong>Dignity of Risk:</strong> Allowing individuals the space to try, succeed, and sometimes experience safe setbacks.</li>
                  <li><strong>Collaboration:</strong> Making decisions with individuals rather than for them.</li>
                  <li><strong>Holistic View:</strong> Recognizing that a comfortable environment and social connection are as vital as practical skills.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:col-span-2">
              <div className="bg-ink text-paper p-8 lg:p-12">
                <h3 className="font-serif text-2xl lg:text-3xl mb-6 text-sand">Preparing for an Initial Conversation</h3>
                <div className="grid md:grid-cols-2 gap-8 text-sand/80">
                  <p className="leading-relaxed">
                    The first step in seeking residential support is usually an exploratory conversation. To make the most of it, consider jotting down what a "good day" looks like for you (or your loved one) right now, and what you hope a good day might look like in the future.
                  </p>
                  <p className="leading-relaxed">
                    Be prepared to discuss what kind of environment feels calming, what activities bring a sense of purpose, and where practical support is most desired. There are no wrong answers—this context helps determine if a particular community's rhythm is a mutual fit.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-24 max-w-2xl mx-auto text-center border-t border-ink/10 pt-16">
            <h3 className="font-serif text-2xl mb-4">Seeking specific details?</h3>
            <p className="text-ink-soft mb-8">
              If you have specific questions about ULeadRTH's approach or environment, we encourage you to reach out directly.
            </p>
            <a href="/contact" className="inline-flex text-sm font-bold tracking-widest uppercase text-ink border-b border-ink pb-1 hover:text-clay hover:border-clay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm">
              Contact our team
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
