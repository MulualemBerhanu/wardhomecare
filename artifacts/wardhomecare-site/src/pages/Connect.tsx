import { useState, type FormEvent } from 'react';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionTop } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { PosterHero } from '@/components/home/PosterHero';
import { CampaignImage, RevealText } from '@/components/home/motion';
import { CONTACT } from '@/lib/brand';

const IVORY = '#f3efe6';

export default function Connect() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Ward Home Care or apply to join our team. Main office in Salem, Oregon. Email info@wardhomecare.org."
      />
      <PageProgress />
      <CurveDefs />
      <PosterHero
        label="Contact us"
        folder="contact"
        name="hero"
        alt="Quiet wood-paneled room ready for conversation"
        title={
          <>
            <RevealText immediate>Let’s start</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              a conversation.
            </RevealText>
          </>
        }
      />
      <ContactDetails />
      <ConnectForm />
    </>
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
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft">
            Reach our team for referrals, questions, or volunteering.
          </p>
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
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Cell phone</p>
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
              </ul>
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Home phone</p>
              <a className="mt-3 inline-block text-base font-light link-editorial pb-1" href={CONTACT.phoneHref.home}>
                {CONTACT.phones.home}
              </a>
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Home fax</p>
              <p className="mt-3 text-base font-light text-ink-soft">{CONTACT.phones.homeFax}</p>
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
            A note to the office
          </p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,64px)] leading-[0.95] tracking-tight">
            <RevealText>Tell us a little</RevealText>
            <RevealText delay={0.1} className="italic">
              about yourself.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft">
            Use this form for a referral, a question, or volunteering. To apply for work, complete the employment application on the{' '}
            <Link href="/careers" className="link-editorial pb-1">
              Careers
            </Link>{' '}
            page, or call us directly.
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
