import { type ReactNode } from 'react';
import { SEO } from '@/components/SEO';
import { CurveDefs } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { PosterHero } from '@/components/home/PosterHero';
import { RevealText } from '@/components/home/motion';
import { CONTACT } from '@/lib/brand';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Review Ward Home Care’s public website privacy notice and information-handling practices."
      />
      <PageProgress />
      <CurveDefs />
      <PosterHero
        label="Legal"
        folder="contact"
        name="garden"
        alt="A wooden bench on a stone patio beside a glass-walled room and a fern garden"
        title={
          <>
            <RevealText immediate>Privacy</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              Policy
            </RevealText>
          </>
        }
      />
      <section className="bg-ivory pb-28 pt-8 text-ink lg:pb-40 lg:pt-12">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <p className="text-base font-light leading-relaxed text-ink-soft lg:col-span-4">
            This statement describes how Ward Home Care, Inc. (WHC) handles information related to this public website.
          </p>
          <div className="space-y-12 lg:col-span-7 lg:col-start-6">
            <Article title="Who we are">
              <p>
                Ward Home Care, Inc. is a state-licensed residential services agency. Our main office is at {CONTACT.addressLines.join(', ')}. Privacy-related questions may be sent to{' '}
                <a className="link-editorial pb-1" href={CONTACT.emailHref}>
                  {CONTACT.email}
                </a>
                .
              </p>
            </Article>
            <Article title="What this website collects">
              <p>
                This website is primarily informational. The contact form opens your email application to send a message to {CONTACT.email}. The Careers application is emailed to that same address. The website itself does not store either submission.
              </p>
              <p>
                Like most websites, hosting and delivery infrastructure may automatically process technical data such as IP address, browser type, and requested pages in server logs. Those logs, if retained by a host, are used for security and operations—not for marketing profiles—and retention depends on the hosting provider’s settings.
              </p>
            </Article>
            <Article title="Cookies and analytics">
              <p>
                This site does not currently load third-party advertising or marketing pixels. If analytics, session tools, or essential cookies are introduced later, this policy will list what is used, why, and how long related data is kept.
              </p>
            </Article>
            <Article title="How we use information you send">
              <p>
                Information you choose to send by email or phone (such as name, email, and message content) is used only to respond to your inquiry, employment interest, or related follow-up—never sold.
              </p>
            </Article>
            <Article title="Your rights">
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or restrict certain personal data, or to object to particular uses. Contact us at {CONTACT.email} to make a request.
              </p>
            </Article>
            <Article title="Children">
              <p>This public website is not directed at children under 13, and we do not knowingly collect personal information from children through this site.</p>
            </Article>
            <Article title="Changes">
              <p>When this notice is updated, the revised version will appear on this page.</p>
            </Article>
            <Article title="Contact">
              <p>
                {CONTACT.director}, {CONTACT.title}
                <br />
                {CONTACT.organization}
                <br />
                {CONTACT.addressLines.join(', ')}
                <br />
                <a className="link-editorial pb-1" href={CONTACT.emailHref}>
                  {CONTACT.email}
                </a>
                <br />
                <a className="link-editorial pb-1" href={CONTACT.phoneHref.office}>
                  {CONTACT.phones.office}
                </a>
              </p>
            </Article>
          </div>
        </div>
      </section>
    </>
  );
}

function Article({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="border-t border-ink/10 pt-8">
      <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base font-light leading-relaxed text-ink-soft">{children}</div>
    </article>
  );
}
