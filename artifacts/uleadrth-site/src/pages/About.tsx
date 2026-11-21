import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { CampaignImage, EASE, RevealText } from '@/components/home/motion';
const IVORY = '#f3efe6';
const FOREST = '#24302a';

const VALUES = [
  'Compassionate',
  'Respectful',
  'Person-centered',
  'High-quality',
] as const;

export default function About() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/about/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Ward Home Care, Inc.—a state-licensed agency providing 24-hour residential services for adults with I/DD in Salem, Oregon."
      />
      <CurveDefs />
      <AboutHero />
      <WhoWeAre />
      <Leadership />
      <MissionVision />
      <Values />
      <WhoWeServe />
    </>
  );
}

function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 16]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -18]);

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
              folder="about"
              name="hero"
              priority
              alt="Quiet residential interior with warm light"
              className="scale-105"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/20 to-transparent" />
        <motion.div style={{ y: copyY }} className="relative z-10 flex h-full flex-col justify-end pb-28">
          <div className="container-wide">
            <RevealText immediate delay={0.4} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
              01 / About
            </RevealText>
            <h1 className="mt-5 font-serif text-[clamp(56px,7vw,120px)] leading-[0.9] tracking-tight">
              <RevealText immediate delay={0.55}>
                Who we
              </RevealText>
              <RevealText immediate delay={0.7} className="italic">
                are.
              </RevealText>
            </h1>
            <RevealText immediate delay={0.9} className="mt-6 max-w-lg text-base font-light leading-relaxed text-ivory/85">
              A state-licensed agency dedicated to quality of life for adults with intellectual and developmental disabilities.
            </RevealText>
          </div>
        </motion.div>
      </div>
      <OrganicSectionBottom fill={IVORY} variant="lift" className="relative z-10 -mt-16 md:-mt-24" />
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-ivory pb-28 pt-6 text-ink lg:pb-36">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Our agency</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>Dedicated to</RevealText>
            <RevealText delay={0.1} className="italic">
              quality of life.
            </RevealText>
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              Ward Home Care, Inc. (WHC) is a state-licensed agency that provides 24-hour residential services for intellectually and developmentally disabled (I/DD) adults, and/or adults with diverse health conditions, including those with co-occurring mental health needs.
            </p>
            <p>
              WHC is dedicated to providing the utmost quality of life to individuals with intellectual/developmental disabilities (I/DD) and/or mental health disorders who reside in home-like supported environments by maintaining communication directly with the individuals and all members of each individual’s team.
            </p>
            <p>
              WHC, its leaders, and employees know and follow the laws and rules set by the Oregon Administrative Rules (OARs). At WHC, we strive to go above and beyond the requirements of Home and Community Based Services (HCBS) by providing a person-centered emphasis to each individual.
            </p>
            <p>
              Our staff are trained to support individuals with I/DD and co-occurring mental health diagnoses, including trauma histories and behavioral health crises. DSPs are on-site around the clock with awake overnight coverage. No one is alone with a need they can’t meet.
            </p>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="aspect-[3/4] overflow-hidden">
            <CampaignImage folder="about" name="plant" alt="Houseplant in warm residential light" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid gap-12 pb-32 lg:grid-cols-12 lg:pb-40">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Leadership</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>Abraham Zewoldie</RevealText>
            <RevealText delay={0.12} className="italic text-[0.55em]">
              Executive Director
            </RevealText>
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base font-light leading-relaxed text-ivory/80 lg:col-span-6 lg:col-start-7">
          <p>
            As the captain of the ship, Abraham brings steady leadership, guidance, and experience to steer the agency safely forward toward opportunity and growth. Abraham graduated with a Bachelor of Science (BSc) and Master of Public Health (MPH). After university, Abraham served as a public health expert in different settings in Ethiopian health institutions for more than 10 years.
          </p>
          <p>
            Abraham worked in an Adult Foster Home as a caregiver and in 24-hour residential services as a DSP in Oregon, providing supports to individuals with I/DD and/or mental health disorders since 2018. Abraham has served as Executive Director of Ward Home Care, Inc. since December 2020.
          </p>
          <p>
            His vision is to expand WHC while continuing to provide exceptional supports to everyone who lives in WHC, while also fostering a positive and rewarding workplace for employees. Abraham envisions WHC standing above the rest through education, training, kindness, high-quality supports, and thoughtful expansion.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="relative bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-24" />
      <div className="container-wide grid gap-16 pb-28 lg:grid-cols-2 lg:pb-36">
        <article>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Mission</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            <RevealText>Dignity, independence,</RevealText>
            <RevealText delay={0.1} className="italic">
              and meaningful opportunity.
            </RevealText>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">
            Our mission is to enhance the well-being and quality of life for the individuals we serve through compassion and person-centered support where individuals can live with dignity, independence, choice, and meaningful opportunities.
          </p>
        </article>
        <article>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Vision</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            <RevealText>Trusted support.</RevealText>
            <RevealText delay={0.1} className="italic">
              Lasting impact.
            </RevealText>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">
            Our vision is to become a trusted residential services organization recognized for exceptional support and lasting positive impact on the lives of the individuals and communities we serve.
          </p>
        </article>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-paper py-24 text-ink lg:py-32">
      <div className="container-wide">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Values</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(36px,4.5vw,64px)] leading-[0.95] tracking-tight">
          <RevealText>We are here to make every resident feel valued, safe, and at home.</RevealText>
        </h2>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft">
          Through compassionate, respectful, person-centered, and high-quality residential care.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <li key={value} className="border-t border-ink/15 pt-5 font-serif text-2xl italic">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-28 text-center text-ivory lg:py-40">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Who we serve</p>
      <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(36px,5vw,72px)] leading-[1.05] tracking-tight">
        <RevealText>24-hour support for adults with</RevealText>
        <RevealText delay={0.12} className="italic">
          intellectual and developmental disabilities.
        </RevealText>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-ivory/75">
        Our residential care homes provide 24-hour support and supervision for adults with intellectual and developmental disabilities (I/DD).
      </p>
      <Link
        href="/admissions"
        className="group mt-10 inline-flex items-center gap-3 border-b border-ivory/30 pb-1 text-sm tracking-wide"
      >
        Learn about admissions
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-night" />
    </section>
  );
}
