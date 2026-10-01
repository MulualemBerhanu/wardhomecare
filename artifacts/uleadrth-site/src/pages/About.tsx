import { SEO } from '@/components/SEO';
import { CampaignImage, EASE, RevealText, useSectionScroll } from '@/components/home/motion';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';

const VALUES = [
  {
    n: '01',
    title: 'Dignity',
    line: 'in All Things.',
    image: 'plant',
    alt: 'Leaf shadows on a warm interior wall',
    body: 'We believe respect is foundational. This means honoring privacy, supporting agency, and communicating honestly. Our environment is designed to elevate rather than institutionalize.',
  },
  {
    n: '02',
    title: 'Stability',
    line: 'as a Base.',
    image: 'bedroom',
    alt: 'A quiet bedroom with linen and warm daylight',
    body: 'Growth requires steady ground. We aim to provide consistent routines, reliable expectations, and calm surroundings so that individuals can focus on their next steps.',
  },
  {
    n: '03',
    title: 'Connection',
    line: 'over Isolation.',
    image: 'dining',
    alt: 'A wooden dining table set with a simple plant',
    body: 'We foster natural opportunities for community—whether through shared meals, collaborative activities, or simple quiet presence alongside others.',
  },
  {
    n: '04',
    title: 'Patience',
    line: 'with the Process.',
    image: 'leaf',
    alt: 'A single leaf in soft natural light',
    body: 'Progress is rarely linear. We try to meet people where they are today, celebrating small steps and providing a supportive presence during setbacks.',
  },
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
        description="Learn about ULeadRTH's mission, philosophy, and commitment to supportive residential care."
      />
      <AboutHero />
      <FoundationStory />
      <ValuesCanvas />
      <CommitmentStory />
      <AboutClose />
    </>
  );
}

function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref, ['start start', 'end start']);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 24]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -18]);
  const wordOpacity = useTransform(scrollYProgress, [0.28, 0.62], [0, 1]);
  const wordScale = useTransform(scrollYProgress, [0.28, 0.9], [0.86, 1.28]);
  const wash = useTransform(scrollYProgress, [0.5, 0.92], [0, 1]);
  const missionFade = useTransform(scrollYProgress, [0.15, 0.45], [1, 0]);

  return (
    <section ref={ref} className="relative h-[175svh] bg-night text-ivory">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: photoY }}>
          <motion.div
            className="h-full w-full"
            initial={{ scale: reduce ? 1 : 1.045 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0.3 : 1.4, ease: EASE }}
          >
            <CampaignImage
              folder="about"
              name="hero"
              priority
              alt="A quiet living room with a fireplace, books, and warm daylight"
              className="scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/25 to-night/10" />
        </motion.div>

        <motion.div style={{ y: copyY, opacity: missionFade }} className="relative z-10 flex h-full flex-col justify-end pb-24 lg:pb-28">
          <div className="container-wide">
            <RevealText immediate delay={0.4} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
              02 / About
            </RevealText>
            <h1 className="mt-6 max-w-4xl font-serif text-[16vw] leading-[0.88] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
              <RevealText immediate delay={0.52}>Our Mission</RevealText>
              <RevealText immediate delay={0.68} duration={1} className="italic text-sand">
                &amp; philosophy.
              </RevealText>
            </h1>
            <RevealText immediate delay={0.88} className="mt-8 max-w-[32rem] text-base font-light leading-relaxed text-ivory/85 sm:text-lg">
              We believe that a supportive environment, clear structure, and compassionate presence can provide a strong foundation for personal growth.
            </RevealText>
          </div>
        </motion.div>

        <motion.button
          type="button"
          aria-label="Scroll"
          onClick={() => document.getElementById('foundation')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.05, duration: 0.6, ease: EASE }}
          className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-ivory/80 lg:left-10"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/40">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
          Scroll
        </motion.button>

        <motion.div
          aria-hidden="true"
          style={{ opacity: wordOpacity, scale: wordScale }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
        >
          <span className="font-serif text-[18vw] leading-none tracking-[-0.04em] text-ivory">PHILOSOPHY</span>
        </motion.div>
        <motion.div aria-hidden="true" style={{ opacity: wash }} className="pointer-events-none absolute inset-0 z-10 bg-ivory" />
      </div>
    </section>
  );
}

function FoundationStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  const imageY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 12, reduce ? 0 : -10]);
  const line = useTransform(scrollYProgress, [0.45, 0.95], [0, 1]);

  return (
    <section id="foundation" ref={ref} className="relative overflow-hidden bg-ivory pb-8 pt-16 text-ink lg:pb-20 lg:pt-8">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <RevealText className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">
            The Foundation
          </RevealText>
          <h2 className="mt-6 font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            <RevealText delay={0.08}>Person-centered</RevealText>
            <RevealText delay={0.16}>support is not a slogan.</RevealText>
            <RevealText delay={0.32} className="mt-3 italic text-forest">
              It is a practice.
            </RevealText>
          </h2>
          <div className="mt-8 max-w-md space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <RevealText delay={0.2}>
              ULeadRTH is built on a simple conviction: individuals seeking a path to greater independence deserve an environment that honors their dignity. The vision is residential support that feels less like a facility and more like a home.
            </RevealText>
            <RevealText delay={0.28}>
              Rather than expecting individuals to fit into rigid institutional models, the model aims to shape support around daily rhythms, practical needs, and personal goals.
            </RevealText>
          </div>
        </div>
        <motion.div
          className="relative lg:col-span-6 lg:col-start-7"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: reduce ? 0.35 : 1.15, ease: EASE }}
        >
          <motion.div style={{ y: imageY }} className="aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
            <CampaignImage
              folder="about"
              name="detail"
              alt="Olive branches in a ceramic vase beside a sunlit window"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/45 via-transparent to-transparent" />
          </motion.div>
          <div className="pointer-events-none absolute inset-y-6 left-6 w-px bg-ivory/70" />
          <div className="absolute bottom-6 right-6 max-w-[12rem] text-ivory sm:bottom-8 sm:right-8">
            <p className="font-sans text-[11px] tracking-[0.22em]">01</p>
            <p className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
              A more
              <br />
              thoughtful
              <br />
              approach.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div style={{ scaleX: line }} className="mx-auto mt-10 h-px w-[min(72rem,90%)] origin-left bg-moss/40" />
    </section>
  );
}

function ValuesCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref, ['start start', 'end end']);
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(3, Math.floor(v * 4)));
  });
  const focus = hover ?? active;

  return (
    <section className="bg-ivory text-ink">
      <div ref={ref} className="relative lg:h-[260vh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:items-center">
          <div className="container-wide relative w-full py-20 lg:py-0">
            <p aria-hidden="true" className="pointer-events-none absolute -top-6 right-0 hidden font-serif text-[12rem] leading-none text-ink/[0.03] lg:block">
              VALUES
            </p>
            <div className="mb-12 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Values in Practice</p>
                <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  Our Core
                  <br />
                  Values.
                </h2>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-ink-soft lg:text-right">
                These principles guide our decisions and the culture we strive to cultivate.
              </p>
            </div>

            <div className="hidden items-center gap-16 lg:grid lg:grid-cols-12">
              <div className="lg:col-span-5">
                {VALUES.map((value, index) => {
                  const emphasized = reduce || focus === index;
                  return (
                    <article
                      key={value.n}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)}
                      className={cn(
                        'border-t border-ink/10 py-4 transition-opacity duration-500',
                        emphasized ? 'opacity-100' : 'opacity-30',
                      )}
                    >
                      <p className={cn('font-sans text-[11px] tracking-[0.22em]', emphasized ? 'text-ink' : 'text-moss')}>
                        {value.n}
                      </p>
                      <h3 className="mt-1 font-serif text-3xl leading-tight tracking-tight">
                        {value.title} <span className="italic">{value.line}</span>
                      </h3>
                      <div className={cn('grid transition-all duration-500', emphasized ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                        <p className="overflow-hidden text-sm font-light leading-relaxed text-ink-soft">{value.body}</p>
                      </div>
                      <span className={cn('mt-3 block h-px bg-ink transition-all duration-500', emphasized ? 'w-10' : 'w-0')} />
                    </article>
                  );
                })}
              </div>
              <div className="relative aspect-[4/5] max-h-[58vh] overflow-hidden lg:col-span-6 lg:col-start-7">
                {VALUES.map((value, index) => (
                  <div
                    key={value.n}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-700',
                      (reduce ? index === 0 : focus === index) ? 'opacity-100' : 'opacity-0',
                    )}
                  >
                    <CampaignImage
                      folder="about"
                      name={value.image}
                      alt={value.alt}
                      className={cn(
                        'h-full w-full transition-transform duration-700',
                        focus === index && index === 0 && 'scale-[1.015]',
                        focus === index && index === 2 && 'scale-[1.015]',
                        focus === index && index === 3 && 'object-[50%_40%]',
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16 lg:hidden">
              {VALUES.map((value, index) => (
                <article key={value.n} className={cn('grid gap-5', index % 2 === 1 && 'text-right')}>
                  <div className={index % 2 === 1 ? 'order-2' : undefined}>
                    <p className="font-sans text-[11px] tracking-[0.22em] text-moss">{value.n}</p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight">
                      {value.title}
                      <span className="italic"> {value.line}</span>
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{value.body}</p>
                  </div>
                  <div className={cn('aspect-[4/3] overflow-hidden', index % 2 === 1 && 'order-1')}>
                    <CampaignImage folder="about" name={value.image} alt={value.alt} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentStory() {
  return (
    <section className="bg-ivory py-20 text-ink lg:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <RevealText className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">
            A Commitment
          </RevealText>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            <RevealText>A commitment</RevealText>
            <RevealText delay={0.1}>to thoughtful</RevealText>
            <RevealText delay={0.2} className="italic">
              care.
            </RevealText>
          </h2>
          <div className="mt-8 max-w-md space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              While the concept emphasizes a non-institutional atmosphere, safety and supportive housing remain central design priorities.
            </p>
            <p>
              The goal is genuine compassion with clear professional boundaries, and transparency so the environment can remain a positive space for everyone in the community.
            </p>
          </div>
          <Link
            href="/approach"
            className="mt-8 inline-flex items-center gap-3 border-b border-ink/30 pb-1 font-sans text-sm tracking-wide transition-colors hover:border-ink"
          >
            Learn more about our approach
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <div
            className="mx-auto aspect-square max-w-xl overflow-hidden"
            style={{ clipPath: 'ellipse(46% 48% at 48% 52%)' }}
          >
            <CampaignImage
              folder="about"
              name="breakfast"
              alt="Breakfast bowls and a cup on a wooden table in morning light"
            />
          </div>
          <p className="mt-6 max-w-[14rem] font-serif text-3xl italic leading-tight text-forest sm:ml-auto sm:text-right sm:text-4xl">
            Real Environments.
            <span className="mt-2 block">Real Possibilities.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutClose() {
  const reduce = useReducedMotion() === true;
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-28 text-center text-ivory lg:py-40">
      <div className="botanical-drift pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-moss/30 blur-3xl" />
      <div className="botanical-drift pointer-events-none absolute -right-10 bottom-16 h-64 w-64 rounded-full bg-night/30 blur-3xl" />
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">The Belief</p>
      <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        <RevealText>Every person deserves an</RevealText>
        <RevealText delay={0.12} className="italic">
          opportunity to move forward.
        </RevealText>
      </h2>
      <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75">
        If you are exploring a residential environment that honors dignity and practical independence, learn more about the model we are developing.
      </p>
      <Link
        href="/services"
        className="mt-12 inline-flex flex-col items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-sand"
      >
        <span>03 / Next</span>
        <motion.span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/50"
          initial={{ y: 0 }}
          whileInView={{ y: reduce ? 0 : 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
            <path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.span>
      </Link>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-night" />
    </section>
  );
}
