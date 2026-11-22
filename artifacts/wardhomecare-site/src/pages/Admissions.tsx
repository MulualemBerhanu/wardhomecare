import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionTop } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { PosterHero } from '@/components/home/PosterHero';
import { CampaignImage, RevealText } from '@/components/home/motion';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

export default function Admissions() {
  return (
    <>
      <SEO
        title="Admissions"
        description="Admission decisions at Ward Home Care are based on individual needs, preferences, home capacity, and Oregon requirements. Referrals are accepted through Marion County IDD."
      />
      <PageProgress />
      <CurveDefs />
      <PosterHero
        label="Admissions"
        folder="life"
        name="hero"
        alt="Garden path and residential outdoor seating"
        title={
          <>
            <RevealText immediate>Finding the</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              right fit.
            </RevealText>
          </>
        }
      />
      <Process />
      <Nondiscrimination />
      <NextStep />
    </>
  );
}

function Process() {
  const points = [
    {
      title: 'Individual needs',
      body: 'We consider each person’s support needs, goals, and circumstances.',
    },
    {
      title: 'Person preferences',
      body: 'Placement discussions honor the individual’s preferences wherever possible.',
    },
    {
      title: 'Home ability to serve',
      body: 'We confirm that the home can provide appropriate services and supervision.',
    },
    {
      title: 'State requirements',
      body: 'Admissions follow applicable Oregon requirements and licensing standards.',
    },
  ] as const;

  return (
    <section className="bg-ivory pb-28 pt-6 text-ink lg:pb-36">
      <div className="container-wide grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">How decisions are made</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>Thoughtful</RevealText>
            <RevealText delay={0.1} className="italic">
              placement.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft">
            Admission decisions are based on individual needs, preferences, the home’s ability to provide appropriate services, and applicable state requirements. We accept referrals through Marion County IDD. Specific home addresses are shared during the referral process for appropriate placement and admission discussions.
          </p>
        </div>
        <ol className="space-y-0 lg:col-span-6 lg:col-start-7">
          {points.map((point, index) => (
            <li key={point.title} className="grid grid-cols-[auto_1fr] gap-5 border-b border-ink/10 py-6 first:border-t">
              <span className="font-serif text-xl text-ink/30">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">{point.title}</h3>
                <p className="mt-2 text-base font-light leading-relaxed text-ink-soft">{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Nondiscrimination() {
  return (
    <section className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide max-w-4xl pb-28 lg:pb-36">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Equal access</p>
        <h2 className="mt-4 font-serif text-[clamp(36px,4.5vw,64px)] leading-[0.95] tracking-tight">
          <RevealText>We do not discriminate.</RevealText>
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-ivory/80">
          We do not discriminate based on disability, race, color, national origin, sex, or other legally protected characteristics. We accept referrals through Marion County IDD.
        </p>
      </div>
    </section>
  );
}

function NextStep() {
  return (
    <section className="relative bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-24" />
      <div className="container-wide grid items-center gap-12 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] overflow-hidden">
            <CampaignImage folder="life" name="window" alt="Morning light through a residential window" />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Next step</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,64px)] leading-[0.95] tracking-tight">
            <RevealText>Ready to start</RevealText>
            <RevealText delay={0.1} className="italic">
              a conversation?
            </RevealText>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">
            Contact Ward Home Care to learn more about referrals, placement discussions, and how our homes may support the people you care about.
          </p>
          <Link
            href="/connect"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-500 hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
