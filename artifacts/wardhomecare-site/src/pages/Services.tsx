import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { CampaignImage, EASE, RevealText } from '@/components/home/motion';
import { SUPPORT_SERVICES } from '@/lib/brand';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

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
      <CurveDefs />
      <ServicesHero />
      <OurHomes />
      <SupportServices />
      <HomeLikeCare />
    </>
  );
}

function ServicesHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 14]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -16]);

  return (
    <section ref={ref} className="relative bg-night text-ivory">
      <div className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: photoY }}>
          <motion.div
            className="h-full w-full"
            initial={{ scale: reduce ? 1 : 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0.3 : 1.4, ease: EASE }}
          >
            <CampaignImage
              folder="services"
              name="hero"
              priority
              alt="Warm residential living space with natural light"
              className="scale-105"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/20 to-transparent" />
        <motion.div style={{ y: copyY }} className="relative z-10 flex h-full flex-col justify-end pb-28">
          <div className="container-wide">
            <RevealText immediate delay={0.4} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
              02 / What We Do
            </RevealText>
            <h1 className="mt-5 font-serif text-[clamp(52px,7vw,110px)] leading-[0.9] tracking-tight">
              <RevealText immediate delay={0.55}>
                24-Hour
              </RevealText>
              <RevealText immediate delay={0.7} className="italic">
                Residential Services.
              </RevealText>
            </h1>
            <RevealText immediate delay={0.9} className="mt-6 max-w-lg text-base font-light leading-relaxed text-ivory/85">
              Our homes: more than a residence. A place to call home.
            </RevealText>
          </div>
        </motion.div>
      </div>
      <OrganicSectionBottom fill={IVORY} variant="lift" className="relative z-10 -mt-16 md:-mt-24" />
    </section>
  );
}

function OurHomes() {
  return (
    <section className="bg-ivory pb-28 pt-6 text-ink lg:pb-36">
      <div className="container-wide grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Our homes</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>A place to</RevealText>
            <RevealText delay={0.1} className="italic">
              call home.
            </RevealText>
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              Our homes are in established Northeast Salem neighborhoods: a quiet residential setting with comfortable shared spaces and private bedrooms, easy access to community resources, recreation, parks, day programs, shopping, close to medical providers, and the rhythms of ordinary city life.
            </p>
            <p>
              Our homes are loving, caring, and empowering of independence through person-centered support services and continuous training for our DSPs to provide safe care for individuals with intellectual and/or developmental disabilities. Staff in all of our homes go above and beyond to meet each individual’s needs and goals—plus loads of fun. Residents enjoy getting out into the community on a daily basis.
            </p>
            <p>
              WHC opened the first 24-hour care home in Marion County in November 2020. Expanding residential living for I/DD adults we can support in the community has been a priority. Currently, three care homes are operational, each designed to promote belonging, personal comfort, safety, and independence.
            </p>
            <p className="italic text-ink">
              Specific addresses are shared during the referral process for appropriate placement and admission discussions.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="aspect-[3/4] overflow-hidden">
            <CampaignImage
              folder="services"
              name="garden"
              alt="Garden and residential setting in soft daylight"
            />
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
      <div className="container-wide grid gap-12 pb-32 lg:grid-cols-12 lg:pb-40">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
            Residential support services
          </p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>Support shaped</RevealText>
            <RevealText delay={0.12} className="italic">
              around each person.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/75">
            We believe a residential care home should feel like a home, not an institution. Trained and dedicated staff provide around-the-clock assistance based on each individual’s needs, preferences, goals, and Individual Support Plan (ISP).
          </p>
        </div>
        <ol className="space-y-0 lg:col-span-6 lg:col-start-7">
          {SUPPORT_SERVICES.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[auto_1fr] gap-5 border-b border-ivory/15 py-5 first:border-t"
            >
              <span className="font-serif text-xl text-ivory/45">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-2xl leading-snug sm:text-3xl">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HomeLikeCare() {
  return (
    <section className="relative bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-24" />
      <div className="container-wide grid items-center gap-12 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] overflow-hidden">
            <CampaignImage
              folder="services"
              name="breakfast"
              alt="A table set for a quiet shared meal"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Person-centered</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,64px)] leading-[0.95] tracking-tight">
            <RevealText>Home-like support,</RevealText>
            <RevealText delay={0.12} className="italic">
              not an institution.
            </RevealText>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">
            Around-the-clock assistance is guided by each individual’s needs, preferences, goals, and ISP—so every day can feel meaningful, safe, and connected to community life.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-500 hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
            >
              Admissions
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-500 hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
