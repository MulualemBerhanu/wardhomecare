import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { CampaignImage, EASE, RevealText, useSectionScroll } from '@/components/home/motion';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { Link } from 'wouter';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

const DAILY = [
  'Assistance with establishing morning and evening routines',
  'Support with personal organization and room care',
  'Meal preparation and culinary skill building',
  'Guidance in managing personal schedules and appointments',
];

const WELLNESS = [
  'Facilitation of restorative practices and gentle movement',
  'Support in recognizing and navigating stress triggers',
  'Space for creative expression and hobbies',
  'Encouragement in building sustainable sleep hygiene',
];

const COMMUNITY = [
  'Facilitated family communication and boundaries',
  'Support in navigating social interactions within the house',
  'Guided outings to build confidence in public spaces',
  'Assistance exploring volunteer or educational opportunities',
];

const INDEPENDENCE = [
  'Budgeting and financial organization support',
  'Assistance with transportation planning',
  'Collaborative goal setting and pacing',
  'Transition planning for moving to greater independence',
];

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
        title="Our Services"
        description="Comprehensive residential support focused on practical independence and personal dignity."
      />
      <CurveDefs />
      <ServiceProgress />
      <ServicesHero />
      <DailyChapter />
      <WellnessChapter />
      <RhythmBridge />
      <CommunityChapter />
      <IndependenceChapter />
      <ScopeOfPractice />
      <ServicesFinal />
    </>
  );
}

function useShift(ref: RefObject<HTMLElement | null>, amount: number) {
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  return useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [amount, -amount]);
}

function ServicesHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref, ['start start', 'end start']);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 18]);
  const dim = useTransform(scrollYProgress, [0.15, 0.85], [0.28, reduce ? 0.28 : 0.62]);
  const numOpacity = useTransform(scrollYProgress, [0.2, 0.75], [0.05, reduce ? 0.05 : 0.45]);
  const numY = useTransform(scrollYProgress, [0.15, 1], [28, reduce ? 28 : -36]);

  return (
    <section ref={ref} className="relative bg-night text-ivory">
      <div className="relative h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: photoY }}>
          <motion.div
            className="h-full w-full"
            initial={{ scale: reduce ? 1 : 1.045 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0.3 : 1.4, ease: EASE }}
          >
            <CampaignImage
              folder="services"
              name="hero"
              priority
              alt="A sunlit living room with plants, wood, and a garden beyond the windows"
              className="scale-105"
            />
          </motion.div>
        </motion.div>
        <motion.div style={{ opacity: dim }} className="absolute inset-0 bg-night" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/50 via-night/15 to-transparent" />

        <motion.p
          aria-hidden
          style={{ opacity: numOpacity, y: numY }}
          className="pointer-events-none absolute bottom-8 left-[6vw] font-serif text-[28vw] leading-none text-ivory lg:bottom-16"
        >
          01
        </motion.p>

        <div className="relative z-10 flex h-full flex-col justify-end pb-28 lg:pb-32">
          <div className="container-wide grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <RevealText immediate delay={0.42} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
                03 / Services
              </RevealText>
              <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                <RevealText immediate delay={0.55}>Residential</RevealText>
                <RevealText immediate delay={0.7}>Support.</RevealText>
              </h1>
              <RevealText immediate delay={0.88} className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/85">
                Our developing model considers how practical routines, a thoughtful environment, and respectful support can work together.
              </RevealText>
            </div>
            <RevealText immediate delay={1.02} className="lg:col-span-4 lg:col-start-9">
              <div className="flex items-start gap-4">
                <span className="mt-1 hidden h-28 w-px bg-ivory/50 sm:block" />
                <p className="font-serif text-2xl italic leading-tight sm:text-3xl">
                  Practical
                  <br />
                  Support.
                  <span className="mt-4 block">
                    Meaningful
                    <br />
                    Progress.
                  </span>
                </p>
              </div>
            </RevealText>
          </div>
        </div>

        <motion.button
          type="button"
          aria-label="Scroll"
          onClick={() => document.getElementById('daily')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.18, duration: 0.6, ease: EASE }}
          className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-ivory/80 lg:left-10"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/40">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
          Scroll
        </motion.button>
      </div>
      <OrganicSectionBottom fill={IVORY} variant="lift" className="relative z-10 -mt-16 text-ivory md:-mt-24" />
    </section>
  );
}

function DetailList({ items, light = false }: { items: readonly string[]; light?: boolean }) {
  return (
    <ul className={cn('mt-6 max-w-sm space-y-2.5 text-sm font-light leading-relaxed', light ? 'text-ivory/75' : 'text-ink-soft')}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className={cn('mt-2 h-px w-3 shrink-0', light ? 'bg-ivory/40' : 'bg-moss/50')} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LearnMore({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/approach"
      className={cn(
        'group/link mt-8 inline-flex items-center gap-3 border-b pb-1 text-sm tracking-wide',
        light ? 'border-ivory/30 text-ivory' : 'border-ink/25 text-ink',
      )}
    >
      Learn more
      <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
        →
      </span>
    </Link>
  );
}

function Aside({ lines, className }: { lines: string[]; className?: string }) {
  return (
    <p className={cn('font-serif text-2xl italic leading-tight sm:text-3xl', className)}>
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

function DailyChapter() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const numberY = useShift(ref, 10);
  const { scrollYProgress } = useSectionScroll(ref);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.025, 1]);

  return (
    <section id="daily" ref={ref} className="group relative scroll-mt-24 bg-ivory pb-36 pt-4 text-ink lg:pb-44 lg:pt-0">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <motion.p aria-hidden style={{ y: numberY }} className="font-serif text-[5.5rem] leading-none text-ink/15 sm:text-[7rem]">
            01
          </motion.p>
          <h2 className="-mt-4 font-serif text-4xl leading-[1.02] tracking-tight transition-colors duration-300 group-hover:text-ink/80 sm:text-5xl lg:-mt-6 lg:text-6xl">
            <RevealText>Daily</RevealText>
            <RevealText delay={0.1}>Living Support</RevealText>
          </h2>
          <DetailList items={DAILY} />
          <LearnMore />
        </div>
        <motion.div
          style={{ scale }}
          className="overflow-hidden lg:col-span-5"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: reduce ? 0.35 : 1.1, ease: EASE }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <CampaignImage
              folder="services"
              name="breakfast"
              alt="A morning bowl and cup on a wooden table in warm light"
              className="transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>
        <Aside
          className="max-w-[11rem] text-2xl text-forest lg:col-span-3 lg:text-3xl"
          lines={['Everyday', 'routines', 'for a more', 'independent', 'tomorrow.']}
        />
      </div>
    </section>
  );
}

function WellnessChapter() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  const restY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [12, -12]);

  return (
    <section id="wellness" ref={ref} className="group relative scroll-mt-24 bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid items-center gap-10 pb-20 lg:grid-cols-12 lg:pb-28">
        <motion.div
          className="order-1 aspect-[3/4] overflow-hidden sm:aspect-[4/5] lg:order-none lg:col-span-4"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: reduce ? 0.35 : 1.2, ease: EASE }}
        >
          <motion.div className="h-full w-full" style={{ y: restY }}>
            <CampaignImage
              folder="services"
              name="bedroom"
              alt="A quiet bedroom with linen and daylight through a window"
              className="h-[115%] transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </motion.div>
        </motion.div>
        <div className="order-2 lg:order-none lg:col-span-5">
          <p aria-hidden className="font-serif text-[6.5rem] leading-none text-ivory/20 sm:text-[8rem]">
            02
          </p>
          <h2 className="-mt-6 font-serif text-4xl leading-[1.02] tracking-tight transition-colors duration-300 group-hover:text-ivory/80 sm:text-5xl lg:-mt-8 lg:text-6xl">
            <RevealText>Wellness</RevealText>
            <RevealText delay={0.12} className="italic">
              &amp; Rhythm
            </RevealText>
          </h2>
          <DetailList items={WELLNESS} light />
          <LearnMore light />
        </div>
        <div className="order-3 lg:order-none lg:col-span-3">
          <Aside lines={['A steadier', 'rhythm for', 'a healthier,', 'happier you.']} />
          <div className="mt-8 aspect-square w-28 overflow-hidden sm:w-36">
            <CampaignImage folder="services" name="botanical" alt="A single stem of leaves in soft light" />
          </div>
        </div>
      </div>
    </section>
  );
}

function RhythmBridge() {
  const reduce = useReducedMotion() === true;
  if (reduce) {
    return (
      <p aria-hidden className="bg-forest py-10 text-center font-serif text-5xl italic text-ivory/30">
        Rhythm
      </p>
    );
  }
  return (
    <div className="relative overflow-hidden bg-forest py-6 lg:py-10" aria-hidden>
      <p
        className="bg-cover bg-center text-center font-serif text-[22vw] leading-none tracking-[-0.04em] text-transparent"
        style={{
          backgroundImage: 'url(/images/services/garden.webp)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        RHYTHM
      </p>
    </div>
  );
}

function CommunityChapter() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const numberY = useShift(ref, 8);
  const { scrollYProgress } = useSectionScroll(ref);
  const pathX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-14, 16]);
  const sideX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [8, -8]);

  return (
    <section id="community" ref={ref} className="group relative scroll-mt-24 overflow-hidden bg-ivory pb-36 pt-12 text-ink lg:pb-44 lg:pt-20">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-12">
        <div className="order-2 lg:order-none lg:col-span-4">
          <motion.p aria-hidden style={{ y: numberY }} className="font-serif text-[6.5rem] leading-none text-ink/15 sm:text-[8rem]">
            03
          </motion.p>
          <h2 className="-mt-6 font-serif text-4xl leading-[1.02] tracking-tight transition-colors duration-300 group-hover:text-ink/80 sm:text-5xl lg:-mt-8">
            <RevealText>Community</RevealText>
            <RevealText delay={0.1}>Integration</RevealText>
          </h2>
          <DetailList items={COMMUNITY} />
          <LearnMore />
        </div>
        <motion.div style={{ x: pathX }} className="order-1 overflow-hidden lg:order-none lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
            <CampaignImage
              folder="services"
              name="garden"
              alt="A stone garden path through ferns and warm daylight"
              className="scale-105 transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>
        </motion.div>
        <div className="order-3 lg:col-span-3">
          <motion.div style={{ x: sideX }} className="mb-6 aspect-[4/3] overflow-hidden">
            <CampaignImage
              folder="services"
              name="sunroom"
              alt="A plant-filled sunroom with wood frames and afternoon light"
            />
          </motion.div>
          <Aside className="text-forest" lines={['Connection', 'that builds', 'confidence.']} />
        </div>
      </div>
    </section>
  );
}

function IndependenceChapter() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.02, 1]);
  const line = useTransform(scrollYProgress, [0.2, 0.9], reduce ? [1, 1] : [0, 1]);

  return (
    <section id="independence" ref={ref} className="group relative scroll-mt-24 bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="lift" className="-mt-14 md:-mt-24" />
      <div className="container-wide relative grid items-center gap-10 pb-36 lg:grid-cols-12 lg:pb-44">
        <motion.div
          style={{ scale }}
          className="order-1 overflow-hidden lg:order-none lg:col-span-5"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <CampaignImage
              folder="services"
              name="desk"
              alt="An open book and a cup on a dark wood table in warm light"
              className="transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>
        <div className="order-2 lg:order-none lg:col-span-4">
          <p aria-hidden className="font-serif text-[6.5rem] leading-none text-ivory/20 sm:text-[8rem]">
            04
          </p>
          <h2 className="-mt-6 font-serif text-4xl leading-[1.02] tracking-tight transition-colors duration-300 group-hover:text-ivory/80 sm:text-5xl lg:-mt-8">
            <RevealText>Practical</RevealText>
            <RevealText delay={0.08}>Independence</RevealText>
          </h2>
          <DetailList items={INDEPENDENCE} light />
          <LearnMore light />
        </div>
        <Aside className="order-3 max-w-[12rem] text-2xl lg:col-span-3 lg:text-3xl" lines={['Practical', 'skills for', 'greater', 'possibilities.']} />
        <motion.div style={{ scaleY: line }} className="absolute bottom-6 left-1/2 hidden h-24 w-px origin-top bg-ivory/30 lg:block" />
      </div>
    </section>
  );
}

function ScopeOfPractice() {
  return (
    <section className="relative bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid items-center gap-12 pb-20 lg:grid-cols-12 lg:pb-28">
        <motion.div
          className="overflow-hidden lg:col-span-5"
          style={{ clipPath: 'url(#ulead-arch)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="aspect-[3/4]">
            <CampaignImage
              folder="services"
              name="scope"
              alt="A stone path beside a quiet stream and ferns"
            />
          </div>
        </motion.div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="mb-6 h-16 w-px bg-ink/25" />
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            <RevealText>A Note on Scope</RevealText>
            <RevealText delay={0.08}>of Practice</RevealText>
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              ULeadRTH is presented here as a residential support concept rather than a medical or emergency service. Final service capabilities and boundaries will be confirmed before launch.
            </p>
            <p>
              Suitability, availability, and any coordination with outside professionals would need to be discussed individually once the operating model and enquiry process are finalized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesFinal() {
  const reduce = useReducedMotion() === true;
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-28 text-center text-ivory lg:py-40">
      <div className="botanical-drift pointer-events-none absolute -left-10 top-8 h-56 w-56 rounded-full bg-moss/25 blur-3xl" />
      <div className="botanical-drift pointer-events-none absolute -right-8 bottom-10 h-64 w-64 rounded-full bg-night/25 blur-3xl" />
      <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        <RevealText>Support grounded</RevealText>
        <RevealText delay={0.12} className="italic">
          in everyday reality.
        </RevealText>
      </h2>
      <p className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-ivory/75">
        A thoughtful environment, and respectful support can work together.
      </p>
      <Link
        href="/contact"
        className="group/cta mt-10 inline-flex items-center gap-3 border-b border-sand/40 pb-1 text-sm tracking-wide text-sand"
      >
        Get in touch
        <motion.span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full border border-sand/40"
          initial={{ y: 0 }}
          whileInView={{ y: reduce ? 0 : 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
        </motion.span>
      </Link>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-night" />
    </section>
  );
}

function ServiceProgress() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids = ['daily', 'wellness', 'community', 'independence'];
    const nodes = ids.map((id) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (!hit) return;
        setVisible(true);
        setActive(ids.indexOf(hit.target.id));
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 mix-blend-difference lg:flex lg:flex-col lg:gap-3',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      {['01', '02', '03', '04'].map((n, index) => (
        <span key={n} className={cn('font-serif text-sm text-ivory transition-opacity duration-500', index === active ? 'opacity-100' : 'opacity-25')}>
          {n}
        </span>
      ))}
    </div>
  );
}
