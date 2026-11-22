import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { CampaignImage, Magnetic, RevealText } from '@/components/home/motion';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

const VALUES = ['Compassionate', 'Respectful', 'Person-centered', 'High-quality'] as const;

const STANDARDS = [
  {
    index: '01',
    title: 'With the person, and the team.',
    body: 'WHC is dedicated to providing the utmost quality of life to individuals with intellectual/developmental disabilities (I/DD) and/or mental health disorders who reside in home-like supported environments by maintaining communication directly with the individuals and all members of each individual’s team.',
  },
  {
    index: '02',
    title: 'Above the requirement.',
    body: 'WHC, its leaders, and employees know and follow the laws and rules set by the Oregon Administrative Rules (OARs). At WHC, we strive to go above and beyond the requirements of Home and Community Based Services (HCBS) by providing a person-centered emphasis to each individual.',
  },
  {
    index: '03',
    title: 'Someone here, overnight.',
    body: 'Our staff are trained to support individuals with I/DD and co-occurring mental health diagnoses, including trauma histories and behavioral health crises. DSPs are on-site around the clock with awake overnight coverage. No one is alone with a need they can’t meet.',
  },
] as const;

const PATH = [
  { label: 'Public health', value: 'More than 10 years', note: 'Ethiopian health institutions' },
  { label: 'Oregon care', value: 'Since 2018', note: 'Caregiver and DSP' },
  { label: 'This agency', value: 'December 2020', note: 'Executive Director' },
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
      <PageProgress />
      <CurveDefs />
      <AboutHero />
      <Agency />
      <Standards />
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
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '8%']);
  const waveY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['18%', '-28%']);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-night text-paper">
      <motion.div className="absolute inset-[-6%]" style={{ y: imageY }}>
        <CampaignImage
          folder="about"
          name="hero"
          priority
          alt="A sunlit living room with a stone fireplace, a sofa, and houseplants"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-night/25" />
      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="container-wide w-full pb-28 pt-32">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.34em] text-paper/75">About</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(56px,8vw,120px)] leading-[0.88] tracking-tight">
            <RevealText immediate>Who we</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              are.
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

function Agency() {
  return (
    <section className="bg-ivory pb-24 pt-8 text-ink lg:pb-36 lg:pt-12">
      <div className="container-wide grid items-end gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Our agency</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>A state-licensed</RevealText>
            <RevealText delay={0.1} className="italic">
              agency.
            </RevealText>
          </h2>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ink-soft">
            Ward Home Care, Inc. (WHC) is a state-licensed agency that provides 24-hour residential services for intellectually and developmentally disabled (I/DD) adults, and/or adults with diverse health conditions, including those with co-occurring mental health needs.
          </p>
        </div>
        <div className="grid grid-cols-5 items-end gap-4 lg:col-span-5 lg:col-start-8">
          <div className="col-span-3 overflow-hidden rounded-[1.75rem]">
            <div className="aspect-[3/4]">
              <CampaignImage folder="about" name="dining" alt="A wooden dining table set with ceramic bowls and a vase of greenery" />
            </div>
          </div>
          <div className="col-span-2 mb-10 overflow-hidden rounded-[1.5rem]">
            <div className="aspect-[3/4]">
              <CampaignImage folder="about" name="bedroom" alt="A bed with linen bedding beside a wooden chair and a window" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section className="bg-ivory pb-28 text-ink lg:pb-40">
      <div className="container-wide border-t border-ink/15">
        {STANDARDS.map((item) => (
          <article key={item.index} className="grid gap-6 border-b border-ink/15 py-10 lg:grid-cols-12 lg:py-14">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss lg:col-span-2">{item.index}</p>
            <h2 className="font-serif text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-tight lg:col-span-4">
              <RevealText>{item.title}</RevealText>
            </h2>
            <p className="text-base font-light leading-relaxed text-ink-soft lg:col-span-5 lg:col-start-8">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide pb-28 lg:pb-40">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Leadership</p>
        <h2 className="mt-4 max-w-4xl font-serif text-[clamp(48px,6vw,92px)] leading-[0.9] tracking-tight">
          <RevealText>Abraham Zewoldie</RevealText>
          <RevealText delay={0.1} className="italic text-[0.42em] text-ivory/80">
            Executive Director
          </RevealText>
        </h2>
        <ul className="mt-12 grid gap-8 border-t border-ivory/15 pt-8 sm:grid-cols-3">
          {PATH.map((item) => (
            <li key={item.label}>
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-sand">{item.label}</p>
              <p className="mt-2 font-serif text-3xl leading-none">{item.value}</p>
              <p className="mt-2 text-sm font-light text-ivory/70">{item.note}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-6 text-base font-light leading-relaxed text-ivory/80 lg:grid-cols-3">
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
      <div className="container-wide grid gap-16 pb-24 lg:grid-cols-2 lg:pb-32">
        <article>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Mission</p>
          <h2 className="mt-4 font-serif text-[clamp(36px,4vw,56px)] leading-[1.02] tracking-tight">
            <RevealText>Dignity, independence,</RevealText>
            <RevealText delay={0.1} className="italic">
              and meaningful opportunity.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft">
            Our mission is to enhance the well-being and quality of life for the individuals we serve through compassion and person-centered support where individuals can live with dignity, independence, choice, and meaningful opportunities.
          </p>
        </article>
        <article>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Vision</p>
          <h2 className="mt-4 font-serif text-[clamp(36px,4vw,56px)] leading-[1.02] tracking-tight">
            <RevealText>Trusted support.</RevealText>
            <RevealText delay={0.1} className="italic">
              Lasting impact.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ink-soft">
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
        <h2 className="mt-4 max-w-4xl font-serif text-[clamp(36px,4.6vw,68px)] leading-[0.98] tracking-tight">
          <RevealText>We are here to make every resident feel valued, safe, and at home.</RevealText>
        </h2>
        <ul className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <li key={value} className="bg-paper px-1 py-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-moss">0{index + 1}</p>
              <p className="mt-4 font-serif text-[clamp(28px,2.4vw,36px)] italic leading-none">{value}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ink-soft">
          Through compassionate, respectful, person-centered, and high-quality residential care.
        </p>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-28 text-ivory lg:py-40">
      <div className="container-wide">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Who we serve</p>
        <h2 className="mt-5 max-w-4xl font-serif text-[clamp(40px,5.4vw,80px)] leading-[0.95] tracking-tight">
          <RevealText>24-hour support for adults with</RevealText>
          <RevealText delay={0.1} className="italic">
            intellectual and developmental disabilities.
          </RevealText>
        </h2>
        <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-ivory/75">
          Our residential care homes provide 24-hour support and supervision for adults with intellectual and developmental disabilities (I/DD).
        </p>
        <Magnetic className="mt-10">
          <Link
            href="/admissions"
            className="group inline-flex items-center gap-3 border-b border-ivory/40 pb-1 text-[11px] font-medium uppercase tracking-[0.24em]"
          >
            Admissions
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}
