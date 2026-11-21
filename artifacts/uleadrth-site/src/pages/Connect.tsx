import { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { CampaignImage, EASE, RevealText } from '@/components/home/motion';
import { CAREERS, CONTACT } from '@/lib/brand';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

export default function Connect() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/contact/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="Connect"
        description="Contact Ward Home Care or apply to join our team. Main office in Salem, Oregon. Email info@wardhomecare.org."
      />
      <CurveDefs />
      <ConnectHero />
      <ContactDetails />
      <Careers />
      <ConnectForm />
    </>
  );
}

function ConnectHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 12]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -14]);

  return (
    <section ref={ref} className="relative bg-night text-ivory">
      <div className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: photoY }}>
          <motion.div
            className="h-full w-full"
            initial={{ scale: reduce ? 1 : 1.035 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0.3 : 1.5, ease: EASE }}
          >
            <CampaignImage
              folder="contact"
              name="hero"
              priority
              alt="Quiet wood-paneled room ready for conversation"
              className="scale-105"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/20 to-transparent" />
        <motion.div style={{ y: copyY }} className="relative z-10 flex h-full flex-col justify-end pb-28">
          <div className="container-wide">
            <RevealText immediate delay={0.4} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
              04 / Connect
            </RevealText>
            <h1 className="mt-5 font-serif text-[clamp(52px,7vw,110px)] leading-[0.9] tracking-tight">
              <RevealText immediate delay={0.55}>
                Let’s start
              </RevealText>
              <RevealText immediate delay={0.7} className="italic">
                a conversation.
              </RevealText>
            </h1>
            <RevealText immediate delay={0.9} className="mt-6 max-w-lg text-base font-light leading-relaxed text-ivory/85">
              Reach our team for referrals, questions, employment, or volunteering.
            </RevealText>
          </div>
        </motion.div>
      </div>
      <OrganicSectionBottom fill={IVORY} variant="lift" className="relative z-10 -mt-16 md:-mt-24" />
    </section>
  );
}

function ContactDetails() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ivory pb-28 pt-6 text-ink lg:pb-36">
      <div className="container-wide grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Contact us</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>{CONTACT.director}</RevealText>
            <RevealText delay={0.1} className="italic text-[0.55em]">
              {CONTACT.title}
            </RevealText>
          </h2>
          <p className="mt-4 font-serif text-2xl text-ink-soft">{CONTACT.organization}</p>
        </div>
        <div className="space-y-8 lg:col-span-6 lg:col-start-7">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Main office</p>
            <p className="mt-3 text-lg font-light leading-relaxed">
              {CONTACT.addressLines[0]}
              <br />
              {CONTACT.addressLines[1]}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Phone</p>
              <ul className="mt-3 space-y-2 text-base font-light">
                <li>
                  <a className="link-editorial pb-1" href={CONTACT.phoneHref.cellPrimary}>
                    {CONTACT.phones.cellPrimary}
                  </a>
                </li>
                <li>
                  <a className="link-editorial pb-1" href={CONTACT.phoneHref.cellSecondary}>
                    {CONTACT.phones.cellSecondary}
                  </a>
                </li>
                <li>
                  <a className="link-editorial pb-1" href={CONTACT.phoneHref.office}>
                    Office {CONTACT.phones.office}
                  </a>
                </li>
                <li className="text-ink-soft">Fax {CONTACT.phones.fax}</li>
              </ul>
            </div>
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Email</p>
              <a className="mt-3 inline-block text-lg font-light link-editorial pb-1" href={CONTACT.emailHref}>
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers" className="relative scroll-mt-24 bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid gap-14 pb-32 lg:grid-cols-12 lg:pb-40">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Careers</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>{CAREERS.headline}</RevealText>
          </h2>
          <p className="mt-4 font-serif text-2xl italic text-ivory/85">{CAREERS.subhead}</p>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/75">{CAREERS.intro}</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-sand">Perks</p>
            <ul className="mt-5 space-y-3">
              {CAREERS.perks.map((perk) => (
                <li key={perk} className="flex gap-3 text-base font-light leading-relaxed text-ivory/85">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-ivory/40" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-sand">Requirements</p>
            <ul className="mt-5 space-y-3">
              {CAREERS.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-base font-light leading-relaxed text-ivory/85">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-ivory/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectForm() {
  const [status, setStatus] = useState<'idle' | 'opened'>('idle');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get('firstName') || '').trim();
    const lastName = String(data.get('lastName') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    const mailto = `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus('opened');
  }

  return (
    <section id="apply" className="relative scroll-mt-24 bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-24" />
      <div className="container-wide grid gap-14 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">
            Staffing & volunteering
          </p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,64px)] leading-[0.95] tracking-tight">
            <RevealText>Tell us a little</RevealText>
            <RevealText delay={0.1} className="italic">
              about yourself.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft">
            If you would like to volunteer or work for WHC, review the perks and applicant requirements above. Use this form to introduce yourself, or call us directly for more information.
          </p>
          <p className="mt-4 text-base font-light">
            Phone:{' '}
            <a className="link-editorial pb-1" href={CONTACT.phoneHref.cellPrimary}>
              {CONTACT.phones.cellPrimary}
            </a>
          </p>
          <div className="mt-10 aspect-[4/3] overflow-hidden">
            <CampaignImage
              folder="contact"
              name="table"
              alt="A table with a cup and books in warm sunlight"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 lg:col-span-6 lg:col-start-7"
          noValidate={false}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="First Name" name="firstName" required autoComplete="given-name" />
            <Field label="Last Name" name="lastName" required autoComplete="family-name" />
          </div>
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <Field label="Subject" name="subject" required />
          <label className="block">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-moss">
              Message <span className="text-clay">*</span>
            </span>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-3 w-full border border-ink/15 bg-transparent px-4 py-3 text-base font-light text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-ink px-10 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-500 hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
          >
            Submit
          </button>
          {status === 'opened' && (
            <p className="text-sm font-light leading-relaxed text-ink-soft" role="status">
              Your email app should open with a message to {CONTACT.email}. If it does not, please email us directly.
            </p>
          )}
          <p className="text-sm font-light leading-relaxed text-ink-soft">
            This form opens your email client to send a message to {CONTACT.email}. Nothing is stored on this website.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-moss">
        {label} {required ? <span className="text-clay">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-3 w-full border border-ink/15 bg-transparent px-4 py-3 text-base font-light text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
      />
    </label>
  );
}
