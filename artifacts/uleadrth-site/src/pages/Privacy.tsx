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
              <p>
                <strong>Pre-launch notice:</strong> This preliminary statement describes the current public preview only. It will be replaced with a final policy before the website begins collecting personal information through any live inquiry channel.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Who we are</h2>
              <p>
                ULeadRTH is developing a residential support concept. Organizational controller details, a privacy contact address, and any registered business identifiers will be published on this page before launch.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">What this preview collects</h2>
              <p>
                This website is informational. There is no active inquiry form, account system, or newsletter signup. The preview does not intentionally transmit or store personal information you submit through site forms, because no such forms are live.
              </p>
              <p>
                Like most websites, hosting and delivery infrastructure may automatically process technical data such as IP address, browser type, and requested pages in server logs. Those logs, if retained by a host, are used for security and operations—not for marketing profiles—and retention depends on the hosting provider’s settings.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Cookies and analytics</h2>
              <p>
                This preview does not currently load third-party advertising or marketing pixels. If analytics, session tools, or essential cookies are introduced later, this policy will list what is used, why, and how long related data is kept.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">How we would use information later</h2>
              <p>
                When a secure inquiry channel is approved, information you choose to send (such as name, email, and message content) would be used only to respond to your inquiry and related follow-up—never sold. Exact retention periods, processors, and international transfer details will be stated before that channel goes live.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Your rights</h2>
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or restrict certain personal data, or to object to particular uses. The process and contact for those requests will be published with the final policy. Until then, there is no live channel on this site for privacy requests.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Children</h2>
              <p>
                This public website is not directed at children under 13, and we do not knowingly collect personal information from children through this preview.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Changes</h2>
              <p>
                When this notice is updated, the revised version will appear on this page. Material changes related to collection or a live inquiry system will be reflected before those features launch.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Contact</h2>
              <p>
                A designated privacy contact will be listed here before launch. There is currently no working public communication channel on this site.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
