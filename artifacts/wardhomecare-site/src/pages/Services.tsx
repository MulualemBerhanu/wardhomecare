import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { CampaignImage, Magnetic, RevealText } from '@/components/home/motion';
import { SUPPORT_SERVICES } from '@/lib/brand';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

const FACTS = [
  { label: 'First home', value: 'November 2020', note: 'Marion County' },
  { label: 'Homes open', value: 'Three', note: 'Care homes operational' },
  { label: 'Neighborhoods', value: 'Northeast Salem', note: 'Quiet residential streets' },
] as const;

export default function Services() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/services/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="What We Do"
        description="Ward Home Care provides 24-hour residential services and person-centered support for adults with I/DD in Northeast Salem neighborhoods."
      />
      <PageProgress />
      <CurveDefs />
      <ServicesHero />
      <OurHomes />
      <TheRecord />
      <SupportServices />
      <NextStep />
    </>
  );
}

function ServicesHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '8%']);
  const waveY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['18%', '-28%']);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-night text-paper">
      <motion.div className="absolute inset-[-6%]" style={{ y: imageY }}>
        <CampaignImage
          folder="services"
          name="hero"
          priority
          alt="A chair and a wooden table beside tall windows looking onto trees"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/10 to-night/30" />
      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="container-wide w-full pb-28 pt-32">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.34em] text-paper/75">What we do</p>
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(52px,7vw,108px)] leading-[0.9] tracking-tight">
            <RevealText immediate>24-Hour</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              Residential Services.
            </RevealText>
          </h1>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-ivory" />
        <motion.div style={{ y: waveY }} className="relative">
          <OrganicSectionBottom fill={IVORY} variant="wave" />
        </motion.div>
      </div>
    </section>
  );
}

function OurHomes() {
  return (
    <section className="bg-ivory pb-20 pt-8 text-ink lg:pb-28 lg:pt-12">
      <div className="container-wide grid items-end gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Our homes</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>More than a residence.</RevealText>
            <RevealText delay={0.1} className="italic">
              A place to call home.
            </RevealText>
          </h2>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ink-soft">
            Our homes are in established Northeast Salem neighborhoods: a quiet residential setting with comfortable shared spaces and private bedrooms, easy access to community resources, recreation, parks, day programs, shopping, close to medical providers, and the rhythms of ordinary city life.
          </p>
        </div>
        <div className="grid grid-cols-5 items-end gap-4 lg:col-span-5 lg:col-start-8">
          <div className="col-span-3 overflow-hidden rounded-[1.75rem]">
            <div className="aspect-[3/4]">
              <CampaignImage folder="services" name="garden" alt="A garden path in soft daylight" />
            </div>
          </div>
          <div className="col-span-2 mb-10 overflow-hidden rounded-[1.5rem]">
            <div className="aspect-[3/4]">
              <CampaignImage folder="services" name="bedroom" alt="A bed with linen bedding in warm daylight" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheRecord() {
  return (
    <section className="bg-ivory pb-28 text-ink lg:pb-40">
      <div className="container-wide">
        <ul className="grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <li key={fact.label}>
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-moss">{fact.label}</p>
              <p className="mt-2 font-serif text-3xl leading-none">{fact.value}</p>
              <p className="mt-2 text-sm font-light text-ink-soft">{fact.note}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-8 text-base font-light leading-relaxed text-ink-soft lg:grid-cols-2">
          <p>
            Our homes are loving, caring, and empowering of independence through person-centered support services and continuous training for our DSPs to provide safe care for individuals with intellectual and/or developmental disabilities. Staff in all of our homes go above and beyond to meet each individual’s needs and goals—plus loads of fun. Residents enjoy getting out into the community on a daily basis.
          </p>
          <div className="space-y-5">
            <p>
              WHC opened the first 24-hour care home in Marion County in November 2020. Expanding residential living for I/DD adults we can support in the community has been a priority. Currently, three care homes are operational, each designed to promote belonging, personal comfort, safety, and independence.
            </p>
            <p className="text-ink">Specific addresses are shared during the referral process for appropriate placement and admission discussions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportServices() {
  return (
    <section className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide pb-28 lg:pb-40">
        <div className="max-w-3xl">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Residential support services</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>A home,</RevealText>
            <RevealText delay={0.1} className="italic">
              not an institution.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-ivory/75">
            We believe a residential care home should feel like a home, not an institution. Trained and dedicated staff provide around-the-clock assistance based on each individual’s needs, preferences, goals, and Individual Support Plan (ISP).
          </p>
        </div>
        <ol className="mt-14 border-t border-ivory/15">
          {SUPPORT_SERVICES.map((item, index) => (
            <li key={item} className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-ivory/15 py-6 sm:gap-10 sm:py-8">
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-sand">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-[clamp(28px,3.2vw,44px)] leading-none tracking-tight">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function NextStep() {
  return (
    <section className="relative bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-24" />
      <div className="container-wide grid items-center gap-14 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="overflow-hidden rounded-[1.75rem] lg:col-span-5">
          <div className="aspect-[4/5]">
            <CampaignImage folder="services" name="breakfast" alt="A bowl of fruit and grain beside a mug on a wooden table" />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Next</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,68px)] leading-[0.95] tracking-tight">
            <RevealText>See if a home</RevealText>
            <RevealText delay={0.1} className="italic">
              is the right fit.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft">
            Admission decisions are based on individual needs, preferences, the home’s ability to provide appropriate services, and applicable state requirements. Referrals are accepted through Marion County IDD.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            <Magnetic>
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-3 border-b border-ink/25 pb-1 text-[11px] font-medium uppercase tracking-[0.24em]"
              >
                Admissions
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/connect"
                className="group inline-flex items-center gap-3 border-b border-ink/25 pb-1 text-[11px] font-medium uppercase tracking-[0.24em]"
              >
                Contact us
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
