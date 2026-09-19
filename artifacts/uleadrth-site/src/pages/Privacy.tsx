import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/motion';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Review ULeadRTH's preliminary public website privacy notice and information-handling practices."
      />
      <PageHeader title="Privacy Policy" eyebrow="Legal" />
      
      <section className="py-32 bg-paper text-ink min-h-[50vh]">
        <div className="container-narrow">
          <Reveal>
            <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-h2:text-4xl prose-p:text-ink-soft prose-p:font-light prose-p:leading-relaxed max-w-none">
              <p><strong>Pre-launch notice:</strong> This preliminary statement will be replaced with a final policy before the website begins collecting information.</p>
              
              <h2 className="tracking-tight mt-12 mb-6">Introduction</h2>
              <p>
                 This page describes the current public preview. It does not make claims about future collection, retention, or disclosure practices that have not yet been finalized.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Information Collection</h2>
              <p>
                 The website is currently informational. The contact form is disabled, does not transmit information, and should not be used for sensitive or urgent details.
              </p>
              
               <h2 className="tracking-tight mt-12 mb-6">Future Policy</h2>
              <p>
                 Final organizational contact details, information-handling practices, retention periods, service providers, and privacy-request channels will be published before any live enquiry system is introduced.
              </p>
              
               <h2 className="tracking-tight mt-12 mb-6">Questions</h2>
              <p>
                 A designated privacy contact will be listed here before launch. The current demonstration form does not provide a working communication channel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
