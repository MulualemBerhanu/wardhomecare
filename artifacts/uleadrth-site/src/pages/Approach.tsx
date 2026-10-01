import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { CampaignImage, EASE, RevealText, useSectionScroll } from '@/components/home/motion';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, type RefObject } from 'react';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

const PILLARS = [
  {
    id: 'calm',
    n: '01',
    title: 'Environmental',
    line: 'Calm.',
    body: 'Physical surroundings deeply impact internal states. Our residence is intentionally designed to be calm, uncluttered, and aesthetically grounding, reducing sensory overwhelm.',
    note: ['A calmer place', 'for clearer days'],
    image: 'calm',
    alt: 'A quiet living room with plants, linen, and tall windows',
    variant: 'environmental',
  },
  {
    id: 'relational',
    n: '02',
    title: 'Relational',
    line: 'Consistency.',
    body: 'Trust takes time. We prioritize consistent, reliable interactions. The goal is to create relationships where individuals feel seen and understood, not just managed.',
    note: ['Stability through', 'meaningful connection'],
    image: 'relational',
    alt: 'A cup and an open notebook on a sunlit wood table',
    variant: 'relational',
  },
  {
    id: 'rhythm',
    n: '03',
    title: 'Meaningful',
    line: 'Rhythm.',
    body: 'Structure is provided through the natural rhythms of a household—shared meals, household responsibilities, and quiet hours—rather than clinical programming schedules.',
    note: ['Everyday rhythms', 'real momentum'],
    image: 'rhythm',
    alt: 'Soft linen bedding in warm morning light',
    variant: 'rhythm',
  },
] as const;

export default function Approach() {
  const { active, visible } = usePillarActive();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/approach/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="Our Approach"
        description="Discover how ULeadRTH's approach to residential care balances autonomy with supportive structure."
      />
      <CurveDefs />
      <PillarRail active={active} visible={visible} />
      <ApproachHero />
      <StructureBridge />
      <AutonomyStory />
      <PillarsIntro active={active} />
      {PILLARS.map((pillar) => (
        <PillarChapter key={pillar.id} pillar={pillar} />
      ))}
      <ApproachQuote />
    </>
  );
}

function useShift(ref: RefObject<HTMLElement | null>, amount: number) {
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  return useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [amount, -amount]);
}

function usePillarActive() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids: string[] = PILLARS.map((pillar) => pillar.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        setVisible(true);
        setActive(ids.indexOf(hit.target.id));
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return { active, visible };
}

function ApproachHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref, ['start start', 'end start']);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 14]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -20]);

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
              folder="approach"
              name="hero"
              priority
              alt="Breakfast bowls and a cup on a wood table in morning light"
              className="scale-105"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/20 to-night/10" />

        <motion.div style={{ y: copyY }} className="relative z-10 flex h-full flex-col justify-end pb-28">
          <div className="container-wide grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <RevealText immediate delay={0.42} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
                03 / Approach
              </RevealText>
              <h1 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                <RevealText immediate delay={0.54}>Dignity &</RevealText>
                <RevealText immediate delay={0.72} className="italic">
                  Structure.
                </RevealText>
              </h1>
              <RevealText immediate delay={0.9} className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/85">
                We replace institutional rigidity with thoughtful, individualized rhythms, creating an environment where true progress becomes possible.
              </RevealText>
            </div>
            <RevealText immediate delay={1.05} className="lg:col-span-4 lg:col-start-9">
              <div className="flex items-start gap-4">
                <span className="mt-1 hidden h-24 w-px bg-ivory/50 sm:block" />
                <p className="font-serif text-2xl italic leading-tight sm:text-3xl">
                  Thoughtful
                  <br />
                  Routines.
                  <span className="mt-4 block">
                    Real
                    <br />
                    Progress.
                  </span>
                </p>
              </div>
            </RevealText>
          </div>
        </motion.div>

        <motion.button
          type="button"
          aria-label="Scroll"
          onClick={() => document.getElementById('autonomy')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}
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
      <OrganicSectionBottom fill={IVORY} variant="lift" className="relative z-10 -mt-14 md:-mt-20" />
    </section>
  );
}

function StructureBridge() {
  const reduce = useReducedMotion() === true;
  return (
    <section aria-hidden className="relative overflow-hidden bg-ivory pb-4 pt-6 text-ink">
      <div className="relative mx-auto h-36 max-w-5xl sm:h-44">
        <motion.span
          className="absolute left-[12%] top-0 h-full w-px origin-top bg-ink/25"
          initial={{ scaleY: reduce ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0.2 : 0.9, ease: EASE }}
        />
        <motion.span
          className="absolute left-[12%] top-1/2 h-px w-[76%] origin-left bg-ink/20"
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0.2 : 1, delay: reduce ? 0 : 0.15, ease: EASE }}
        />
        <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif text-[16vw] leading-none tracking-[-0.04em] text-ink/[0.07] sm:text-[8rem]">
          STRUCTURE
        </p>
      </div>
    </section>
  );
}

function AutonomyStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.03, 1]);

  return (
    <section id="autonomy" ref={ref} className="scroll-mt-24 bg-ivory pb-20 text-ink lg:pb-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <RevealText className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">
            The Approach
          </RevealText>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            <RevealText>Autonomy is not</RevealText>
            <RevealText delay={0.1}>abandoned</RevealText>
            <RevealText delay={0.22} className="italic">
              at the door.
            </RevealText>
          </h2>
          <div className="mt-8 max-w-md space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              Many traditional care environments rely on compliance and control. We believe that lasting stability is built through collaboration.
            </p>
            <p>
              Our approach centers on establishing a &ldquo;holding environment&rdquo;—a psychological and physical space that feels safe enough to tolerate the discomfort of growth. Structure is intended as a scaffold, not a cage.
            </p>
          </div>
          <a
            href="#pillars"
            className="group/link mt-8 inline-flex items-center gap-3 border-b border-ink/25 pb-1 text-sm tracking-wide"
          >
            Explore our approach
            <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <span aria-hidden className="absolute -left-4 top-0 hidden h-full w-px bg-ink/20 lg:block" />
          <motion.div
            className="overflow-hidden rounded-t-[40%]"
            style={{ scale }}
            initial={reduce ? { opacity: 0 } : { clipPath: 'circle(10% at 50% 40%)' }}
            whileInView={{ opacity: 1, clipPath: 'circle(78% at 50% 40%)' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: reduce ? 0.35 : 1.15, ease: EASE }}
          >
            <div className="aspect-[3/4] sm:aspect-[4/5]">
              <CampaignImage
                folder="approach"
                name="door"
                alt="An open arched doorway looking onto a sunlit garden"
                className="transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </motion.div>
          <p className="pointer-events-none absolute bottom-10 left-8 max-w-[11rem] font-serif text-2xl italic leading-tight text-ivory lg:text-3xl">
            Support
            <br />
            their path,
            <br />
            not limit it.
          </p>
        </div>
      </div>
    </section>
  );
}

function PillarsIntro({ active }: { active: number }) {
  const fill = active === 0 ? '8%' : active === 1 ? '50%' : '100%';
  return (
    <section id="pillars" className="scroll-mt-24 bg-ivory pb-8 pt-8 text-ink lg:pb-4 lg:pt-16">
      <div className="container-wide">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Our Framework</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              The Three
              <br />
              Pillars.
            </h2>
          </div>
          <p className="max-w-sm text-base font-light leading-relaxed text-ink-soft lg:col-span-4 lg:col-start-9">
            Our approach is grounded in three key areas that work together to create a supportive, balanced environment.
          </p>
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="relative h-px bg-ink/15">
            <div className="absolute inset-y-0 left-0 bg-ink/70 transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ width: fill }} />
          </div>
          <ol className="mt-4 grid grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <li key={pillar.id} className={cn('font-sans text-[11px] tracking-[0.22em]', index === 1 && 'text-center', index === 2 && 'text-right', index <= active ? 'text-ink' : 'text-ink/35')}>
                <span className={cn('mb-2 block h-2 w-2 rounded-full border border-ink', index <= active ? 'bg-ink' : 'bg-transparent', index === 1 && 'mx-auto', index === 2 && 'ml-auto')} />
                {pillar.n}
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-10 space-y-0 border-l border-ink/20 pl-6 lg:hidden">
          {PILLARS.map((pillar, index) => (
            <li key={pillar.id} className={cn('relative pb-8', index <= active ? 'text-ink' : 'text-ink/40')}>
              <span className={cn('absolute -left-[1.65rem] top-1 h-2 w-2 rounded-full border border-ink', index <= active ? 'bg-ink' : 'bg-ivory')} />
              <p className="font-sans text-[11px] tracking-[0.22em]">{pillar.n}</p>
              <p className="mt-1 font-serif text-2xl">
                {pillar.title} {pillar.line}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PillarChapter({ pillar }: { pillar: (typeof PILLARS)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const imageY = useShift(ref, pillar.variant === 'rhythm' ? 8 : 4);

  const textFrom = pillar.variant === 'relational' && !reduce ? { opacity: 0, x: -16 } : { opacity: 0 };
  const imageFrom = pillar.variant === 'relational' && !reduce ? { opacity: 0, x: 16 } : { opacity: 0 };

  return (
    <section id={pillar.id} ref={ref} className="relative scroll-mt-24 bg-ivory py-12 text-ink lg:py-20">
      <span aria-hidden className="absolute bottom-0 left-6 top-0 hidden w-px origin-top bg-ink/15 lg:block" />
      <div
        className={cn(
          'container-wide grid items-center gap-8 lg:gap-10',
          pillar.variant === 'environmental' ? 'lg:grid-cols-1' : 'lg:grid-cols-12',
        )}
      >
        <motion.div
          className={cn(
            pillar.variant === 'environmental' && 'max-w-3xl',
            pillar.variant === 'relational' && 'lg:col-span-5',
            pillar.variant === 'rhythm' && 'lg:col-span-5 lg:col-start-8',
          )}
          initial={textFrom}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: reduce ? 0.3 : 0.8, ease: EASE }}
        >
          <p className="font-sans text-[11px] tracking-[0.22em] text-moss">{pillar.n}</p>
          <h3 className="mt-3 font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {pillar.title}
            <span className="block italic">{pillar.line}</span>
          </h3>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft">{pillar.body}</p>
          {pillar.variant === 'relational' && (
            <motion.span
              aria-hidden
              className="mt-8 block h-px w-24 origin-left bg-ink/30"
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduce ? 0.2 : 0.9, delay: 0.2, ease: EASE }}
            />
          )}
          <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.22em] text-moss">
            {pillar.note[0]}
            <span className="mt-1 block">{pillar.note[1]}</span>
          </p>
        </motion.div>
        <motion.div
          className={cn(
            'overflow-hidden',
            pillar.variant === 'environmental' && 'mt-4',
            pillar.variant === 'relational' && 'lg:col-span-7',
            pillar.variant === 'rhythm' && 'lg:col-span-7 lg:col-start-1 lg:row-start-1',
          )}
          style={{ y: imageY }}
          initial={imageFrom}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: reduce ? 0.3 : 0.9, ease: EASE }}
        >
          <div className={cn('overflow-hidden', pillar.variant === 'environmental' ? 'aspect-[16/10]' : 'aspect-[4/3]')}>
            <CampaignImage
              folder="approach"
              name={pillar.image}
              alt={pillar.alt}
              className="transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ApproachQuote() {
  return (
    <section className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="wave" className="-mt-16 md:-mt-24" />
      <div className="botanical-drift pointer-events-none absolute left-[8%] top-24 h-48 w-48 rounded-full bg-moss/20 blur-3xl" />
      <div className="botanical-drift pointer-events-none absolute bottom-16 right-[10%] h-56 w-56 rounded-full bg-night/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-36">
        <span aria-hidden className="mx-auto mb-10 block h-16 w-px bg-ivory/40" />
        <h2 className="font-serif text-3xl leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
          <RevealText>&ldquo;We aim to create the space, structure,</RevealText>
          <RevealText delay={0.12}>and companionship for each person to discover</RevealText>
          <RevealText delay={0.24}>what moving forward can look like for them.&rdquo;</RevealText>
        </h2>
        <p className="mt-10 font-sans text-[11px] uppercase tracking-[0.28em] text-sand">
          A path that honors
          <span className="mt-2 block">who they are</span>
        </p>
      </div>
      <div className="pointer-events-none h-28 bg-gradient-to-b from-transparent to-night" />
    </section>
  );
}

function PillarRail({ active, visible }: { active: number; visible: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 mix-blend-difference lg:block',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <ol className="space-y-5">
        {PILLARS.map((pillar, index) => (
          <li key={pillar.id} className={cn('text-ivory transition-opacity duration-500', index === active ? 'opacity-100' : 'opacity-25')}>
            <p className="font-sans text-[10px] tracking-[0.2em]">{pillar.n}</p>
            <p className="font-serif text-sm italic">{index === active ? `${pillar.title} ${pillar.line}` : ''}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
