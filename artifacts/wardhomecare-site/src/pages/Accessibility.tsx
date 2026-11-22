import { SEO } from '@/components/SEO';
import { CurveDefs } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { PosterHero } from '@/components/home/PosterHero';
import { RevealText } from '@/components/home/motion';
import { CONTACT } from '@/lib/brand';

const MEASURES = [
  'Semantic landmarks, headings, and skip-to-content navigation',
  'Keyboard access for primary navigation, including the mobile menu and FAQ accordion',
  'Visible focus styles on interactive controls',
  'Respect for system-level reduced-motion preferences',
  'Text alternatives on content images; decorative imagery marked appropriately',
] as const;

export default function Accessibility() {
  return (
    <>
      <SEO
        title="Accessibility"
        description="Read Ward Home Care’s commitment to providing an accessible and inclusive public website experience."
      />
      <PageProgress />
      <CurveDefs />
      <PosterHero
        label="Commitment"
        folder="approach"
        name="door"
        alt="A wooden chair beside an open arched doorway looking onto a garden"
        title={
          <>
            <RevealText immediate>Accessibility</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              Statement
            </RevealText>
          </>
        }
      />
      <section className="bg-ivory pb-28 pt-8 text-ink lg:pb-40 lg:pt-12">
        <div className="container-wide max-w-4xl space-y-12">
          <article>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Our commitment</h2>
            <p className="mt-4 text-base font-light leading-relaxed text-ink-soft">
              Ward Home Care, Inc. intends for this public website to be usable by as many people as possible. Accessibility is an ongoing effort. We aim to align with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
            </p>
          </article>
          <article className="border-t border-ink/10 pt-10">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Measures in place</h2>
            <p className="mt-4 text-base font-light leading-relaxed text-ink-soft">The current website includes measures such as:</p>
            <ul className="mt-6 space-y-3">
              {MEASURES.map((item) => (
                <li key={item} className="text-base font-light leading-relaxed text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="border-t border-ink/10 pt-10">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Known limitations</h2>
            <p className="mt-4 text-base font-light leading-relaxed text-ink-soft">
              This site may still have gaps, including incomplete alternative text on some photography and limited third-party content testing. We continue to review pages as copy, media, and interactive features evolve.
            </p>
          </article>
          <article className="border-t border-ink/10 pt-10">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Compatibility</h2>
            <p className="mt-4 text-base font-light leading-relaxed text-ink-soft">
              The site is intended to work with current major browsers and common assistive technologies. Experiences may vary by device, browser version, and assistive technology configuration.
            </p>
          </article>
          <article className="border-t border-ink/10 pt-10">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Feedback</h2>
            <p className="mt-4 text-base font-light leading-relaxed text-ink-soft">
              We welcome reports of accessibility barriers. Please contact us at{' '}
              <a className="link-editorial pb-1" href={CONTACT.emailHref}>
                {CONTACT.email}
              </a>{' '}
              or{' '}
              <a className="link-editorial pb-1" href={CONTACT.phoneHref.office}>
                {CONTACT.phones.office}
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
