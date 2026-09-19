import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/motion';

export default function Accessibility() {
  return (
    <>
      <SEO
        title="Accessibility"
        description="Read ULeadRTH's commitment to providing an accessible and inclusive public website experience."
      />
      <PageHeader title="Accessibility Statement" eyebrow="Commitment" />
      
      <section className="py-32 bg-paper text-ink min-h-[50vh]">
        <div className="container-narrow">
          <Reveal>
            <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-h2:text-4xl prose-p:text-ink-soft prose-p:font-light prose-p:leading-relaxed max-w-none">
              <h2 className="tracking-tight mb-6">Our Commitment</h2>
              <p>
                 ULeadRTH intends for this public website to be usable by as many people as possible. Accessibility is an ongoing effort, and the site will continue to be reviewed as its content and features evolve.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Measures to support accessibility</h2>
               <p>The current website includes measures such as:</p>
              <ul className="text-ink-soft font-light text-lg space-y-2 list-disc pl-6 mb-8">
                <li>Provide clear keyboard navigation and focus states.</li>
                <li>Respect system-level preferences, such as reduced motion.</li>
                <li>Use semantic HTML and ARIA roles where appropriate.</li>
              </ul>
              
              <h2 className="tracking-tight mt-12 mb-6">Feedback</h2>
              <p>
                 A dedicated email address and phone number for accessibility feedback will be published before launch. Until then, the website contact form is a visual preview and does not transmit messages.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
