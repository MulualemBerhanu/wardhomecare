import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CurveDefs } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { PosterHero } from '@/components/home/PosterHero';
import { RevealText } from '@/components/home/motion';
import { CONTACT } from '@/lib/brand';

const PLACES = [
  {
    index: '01',
    title: 'Crisis support',
    body: 'Ward Home Care is not a crisis center. If you or a loved one are experiencing an immediate medical or psychiatric emergency, please use these national resources.',
  },
  {
    index: '02',
    title: 'Referrals',
    body: 'We accept referrals through Marion County IDD. Admission decisions consider individual needs, preferences, home capacity, and applicable state requirements.',
  },
  {
    index: '03',
    title: 'Main office',
    body: '',
  },
] as const;

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources & Support"
        description="Helpful information and external resources related to residential support and crisis services."
      />
      <PageProgress />
      <CurveDefs />
      <PosterHero
        label="Resources"
        folder="life"
        name="books"
        alt="A stack of books and a sprig of leaves on a wooden table in a sunlit living room"
        title={
          <>
            <RevealText immediate>Information</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              & Support
            </RevealText>
          </>
        }
      />
      <section className="bg-ivory pb-28 pt-8 text-ink lg:pb-40 lg:pt-12">
        <div className="container-wide">
          <p className="max-w-xl text-base font-light leading-relaxed text-ink-soft">
            Finding the right support can feel overwhelming. Below are general national resources and ways to reach Ward Home Care.
          </p>
          <ol className="mt-16">
            {PLACES.map((place) => (
              <li key={place.index} className="grid gap-6 border-t border-ink/10 py-10 lg:grid-cols-12 lg:py-14">
                <p className="font-serif text-xl text-ink/30 lg:col-span-2">{place.index}</p>
                <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-tight lg:col-span-4">{place.title}</h2>
                <div className="lg:col-span-5 lg:col-start-8">
                  {place.index === '01' ? <Crisis /> : null}
                  {place.index === '02' ? <Referrals body={place.body} /> : null}
                  {place.index === '03' ? <Office /> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function Crisis() {
  return (
    <>
      <p className="text-base font-light leading-relaxed text-ink-soft">
        Ward Home Care is not a crisis center. If you or a loved one are experiencing an immediate medical or psychiatric emergency, please use these national resources.
      </p>
      <ul className="mt-6 space-y-4 text-base font-light leading-relaxed">
        <li>
          <a className="link-editorial pb-1" href="tel:988">
            988
          </a>
          <span className="text-ink-soft"> — National Suicide & Crisis Lifeline</span>
        </li>
        <li>
          <a className="link-editorial pb-1" href="tel:911">
            911
          </a>
          <span className="text-ink-soft"> — Emergency Services</span>
        </li>
        <li>
          <a className="link-editorial pb-1" href="sms:741741?body=HOME">
            Text HOME to 741741
          </a>
          <span className="text-ink-soft"> — Crisis Text Line</span>
        </li>
      </ul>
    </>
  );
}

function Referrals({ body }: { body: string }) {
  return (
    <>
      <p className="text-base font-light leading-relaxed text-ink-soft">{body}</p>
      <Link href="/admissions" className="mt-6 inline-block font-sans text-[11px] font-medium uppercase tracking-[0.2em] link-editorial pb-1">
        Admissions details
      </Link>
    </>
  );
}

function Office() {
  return (
    <>
      <p className="text-base font-light leading-relaxed text-ink-soft">
        {CONTACT.addressLines[0]}
        <br />
        {CONTACT.addressLines[1]}
      </p>
      <a href={CONTACT.emailHref} className="mt-4 inline-block text-base font-light link-editorial pb-1">
        {CONTACT.email}
      </a>
      <Link href="/connect" className="mt-6 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] link-editorial pb-1">
        Contact us
      </Link>
    </>
  );
}
