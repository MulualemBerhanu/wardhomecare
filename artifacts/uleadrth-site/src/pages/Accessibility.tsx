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
              <h2 className="tracking-tight mb-6">Our commitment</h2>
              <p>
                ULeadRTH intends for this public website to be usable by as many people as possible. Accessibility is an ongoing effort. We aim to align with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as the site’s content and features evolve toward launch.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Measures in place</h2>
              <p>The current website includes measures such as:</p>
              <ul className="text-ink-soft font-light text-lg space-y-2 list-disc pl-6 mb-8">
                <li>Semantic landmarks, headings, and skip-to-content navigation</li>
                <li>Keyboard access for primary navigation, including the mobile menu and FAQ accordion</li>
                <li>Visible focus styles on interactive controls</li>
                <li>Respect for system-level reduced-motion preferences</li>
                <li>Text alternatives on content images; decorative header imagery marked appropriately</li>
              </ul>
              
              <h2 className="tracking-tight mt-12 mb-6">Known limitations</h2>
              <p>
                This preview may still have gaps, including incomplete alternative text on some reused photography, limited third-party content testing, and no live feedback channel yet. We will continue to review pages as copy, media, and interactive features are finalized.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Compatibility</h2>
              <p>
                The site is intended to work with current major browsers and common assistive technologies. Experiences may vary by device, browser version, and assistive technology configuration.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Feedback</h2>
              <p>
                We welcome reports of accessibility barriers. A dedicated email address and phone number for accessibility feedback will be published before launch. Until then, this preview site has no working public communication channel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
