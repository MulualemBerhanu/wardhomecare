import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/motion';
import { CONTACT } from '@/lib/brand';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Review Ward Home Care’s public website privacy notice and information-handling practices."
      />
      <PageHeader title="Privacy Policy" eyebrow="Legal" />
      
      <section className="py-32 bg-paper text-ink min-h-[50vh]">
        <div className="container-narrow">
          <Reveal>
            <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-h2:text-4xl prose-p:text-ink-soft prose-p:font-light prose-p:leading-relaxed max-w-none">
              <p>
                This statement describes how Ward Home Care, Inc. (WHC) handles information related to this public website.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Who we are</h2>
              <p>
                Ward Home Care, Inc. is a state-licensed residential services agency. Our main office is at {CONTACT.addressLines.join(', ')}. Privacy-related questions may be sent to{' '}
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">What this website collects</h2>
              <p>
                This website is primarily informational. The Connect form opens your email application to send a message to {CONTACT.email}; the website itself does not store those submissions.
              </p>
              <p>
                Like most websites, hosting and delivery infrastructure may automatically process technical data such as IP address, browser type, and requested pages in server logs. Those logs, if retained by a host, are used for security and operations—not for marketing profiles—and retention depends on the hosting provider’s settings.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Cookies and analytics</h2>
              <p>
                This site does not currently load third-party advertising or marketing pixels. If analytics, session tools, or essential cookies are introduced later, this policy will list what is used, why, and how long related data is kept.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">How we use information you send</h2>
              <p>
                Information you choose to send by email or phone (such as name, email, and message content) is used only to respond to your inquiry, employment interest, or related follow-up—never sold.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Your rights</h2>
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or restrict certain personal data, or to object to particular uses. Contact us at {CONTACT.email} to make a request.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Children</h2>
              <p>
                This public website is not directed at children under 13, and we do not knowingly collect personal information from children through this site.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Changes</h2>
              <p>
                When this notice is updated, the revised version will appear on this page.
              </p>
              
              <h2 className="tracking-tight mt-12 mb-6">Contact</h2>
              <p>
                {CONTACT.director}, {CONTACT.title}<br />
                {CONTACT.organization}<br />
                {CONTACT.addressLines.join(', ')}<br />
                <a href={CONTACT.emailHref}>{CONTACT.email}</a><br />
                <a href={CONTACT.phoneHref.office}>{CONTACT.phones.office}</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
