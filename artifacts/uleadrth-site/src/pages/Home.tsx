import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop, UCurve } from '@/components/home/curves';
import {
  ArchImage,
  CampaignImage,
  DrawLine,
  EASE,
  OrganicTransition,
  RevealImage,
  RevealText,
  usePointerShift,
} from '@/components/home/motion';

const IVORY = '#f3efe6';

function EditorialLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] uppercase"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full border border-current/30 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
      {children}
    </Link>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '-14%']);
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '4%']);
  const waveY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['22%', '-36%']);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-night text-paper">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        initial={reduce ? undefined : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduce ? 0 : 1.4, ease: EASE }}
      >
        <CampaignImage
          name="hero"
          alt="Warm wood and stone residential interior with plants and afternoon light"
          priority
          className="scale-105"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/25 to-night/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-night/20" />

      <motion.div style={{ y: textY }} className="relative z-10 flex min-h-[100svh] items-end">
        <div className="container-wide w-full pb-28 pt-36 lg:pb-36">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.p
                className="mb-8 font-sans text-[11px] font-medium uppercase leading-relaxed tracking-[0.32em] text-paper/80"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.15, ease: EASE }}
              >
                Residential Support
                <span className="mt-2 block tracking-[0.38em]">Oregon</span>
              </motion.p>
              <h1 className="font-serif text-[clamp(64px,8.5vw,138px)] leading-[0.9] tracking-tight text-paper">
                <RevealText immediate duration={0.85}>A place to land.</RevealText>
                <RevealText immediate delay={0.12} duration={0.85} className="italic text-ivory">
                  A path to
                </RevealText>
                <RevealText immediate delay={0.22} duration={0.85} className="italic text-ivory">
                  move forward.
                </RevealText>
              </h1>
              <div className="mt-10 flex max-w-3xl flex-col gap-8 md:flex-row md:items-end">
                <motion.p
                  className="max-w-sm text-[clamp(16px,1.25vw,19px)] font-light leading-relaxed text-paper/85"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.55, ease: EASE }}
                >
                  A residential support concept designed around the person—not just a program. An environment built on dignity, autonomy, and quiet strength.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reduce ? 0.3 : 0.6, delay: reduce ? 0 : 0.7, ease: EASE }}
                >
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-3 border-b border-paper/40 pb-2 text-[11px] font-medium tracking-[0.22em] uppercase"
                  >
                    Explore ULeadRTH
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex xl:right-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.85, ease: EASE }}
            >
              <span className="font-serif text-sm">01</span>
              <span className="h-16 w-px bg-paper/60" />
              <span className="text-[10px] tracking-[0.32em] uppercase [writing-mode:vertical-rl]">Home</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        aria-label="Scroll to the next section"
        className="absolute bottom-24 right-8 z-20 hidden h-16 w-16 place-items-center rounded-full border border-paper/40 text-[9px] tracking-[0.18em] uppercase lg:grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0.3 : 0.6, delay: reduce ? 0 : 1.05, ease: EASE }}
        onClick={() => document.getElementById('fully-human')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}
      >
        Scroll
      </motion.button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-ivory" />
        <OrganicTransition style={{ y: waveY }} className="relative">
          <OrganicSectionBottom fill={IVORY} variant="wave" />
        </OrganicTransition>
      </div>
    </section>
  );
}

function FullyHuman() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const exitY = useTransform(scrollYProgress, [0.55, 1], reduce ? ['0%', '0%'] : ['12%', '-8%']);

  return (
    <section id="fully-human" ref={ref} className="relative overflow-hidden bg-ivory text-ink">
      <div className="container-wide relative z-10 grid items-end gap-16 py-28 lg:grid-cols-12 lg:py-40">
        <div className="lg:col-span-6">
          <RevealText className="mb-8 font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-ink/60">
            The ULeadRTH Approach
          </RevealText>
          <h2 className="font-serif text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-tight">
            <RevealText>Dignity at the door.</RevealText>
            <RevealText delay={0.12} className="italic">
              Support from there.
            </RevealText>
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <RevealText delay={0.28} className="font-serif text-[clamp(28px,3vw,44px)] leading-[1.2] text-ink">
            A health system works when support continues past the visit, into daily life, stability, and a path forward.
          </RevealText>
        </div>
      </div>
      <OrganicTransition style={{ y: exitY }} className="relative z-10 text-ivory">
        <UCurve />
      </OrganicTransition>
    </section>
  );
}

function RoomToGrow() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const shift = usePointerShift(2.5);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.45], reduce ? [1, 1] : [1.06, 1]);
  const topY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-12, 12]);
  const bottomY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [12, -12]);
  const maskY = useTransform(scrollYProgress, [0, 0.4], reduce ? ['0%', '0%'] : ['0%', '-70%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest text-ivory">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <CampaignImage
          name="garden"
          alt="Stone garden path through a planted residential courtyard"
          className="min-h-[100svh]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/15 to-transparent" />
      </motion.div>

      <OrganicTransition style={{ y: maskY }} className="absolute inset-x-0 top-0 z-10">
        <OrganicSectionTop fill={IVORY} variant="swoop" />
      </OrganicTransition>

      <div className="relative z-10 grid min-h-[100svh] items-end gap-10 px-6 pb-20 pt-40 lg:grid-cols-12 lg:px-0">
        <div className="container-wide lg:col-span-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-tight">
              <RevealText>A home with</RevealText>
              <RevealText delay={0.1} className="italic">
                room to grow.
              </RevealText>
            </h2>
            <RevealText delay={0.2} className="mt-8 max-w-sm text-[clamp(16px,1.25vw,19px)] font-light leading-relaxed text-ivory/85">
              A calm and supportive environment where everyday rhythms and real life can take shape.
            </RevealText>
            <div className="mt-8">
              <EditorialLink href="/approach">Explore our approach</EditorialLink>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 mx-auto grid max-w-lg gap-4 px-6 pb-16 lg:absolute lg:bottom-[12%] lg:right-[5%] lg:top-auto lg:mx-0 lg:w-[220px] lg:px-0 xl:w-[260px]"
        style={reduce ? undefined : { x: shift.x, y: shift.y }}
      >
        <motion.div style={{ y: topY }} className="overflow-hidden rounded-[1.6rem_1.6rem_0.4rem_0.4rem]">
          <RevealImage>
            <CampaignImage name="pergola" alt="Wooden garden pergola in warm light" className="aspect-[4/3]" />
          </RevealImage>
        </motion.div>
        <motion.div style={{ y: bottomY }} className="overflow-hidden rounded-[0.4rem_0.4rem_1.6rem_1.6rem] lg:ml-8">
          <RevealImage delay={0.1}>
            <CampaignImage name="stream" alt="Garden water moving through stones and plants" className="aspect-[4/3]" />
          </RevealImage>
        </motion.div>
      </motion.div>
    </section>
  );
}

const supports = [
  { id: 'daily', label: 'Daily Living Support', place: 'left-0 top-[38%] text-right', delay: 0.15 },
  { id: 'community', label: 'Community Integration', place: 'left-0 top-[64%] text-right', delay: 0.3 },
  { id: 'wellness', label: 'Wellness & Rhythm', place: 'right-0 top-[16%] text-left', delay: 0.45 },
  { id: 'practical', label: 'Practical Independence', place: 'right-0 top-[54%] text-left', delay: 0.6 },
] as const;

function WholePerson() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const [hot, setHot] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const archY = useTransform(scrollYProgress, [0.15, 0.55], reduce ? ['8%', '8%'] : ['12%', '0%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="lift" className="absolute inset-x-0 top-0 z-10 -translate-y-[40%]" />
      <div className="container-wide relative z-10 grid items-center gap-16 py-28 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-tight">
            <RevealText>Care centered</RevealText>
            <RevealText>around the</RevealText>
            <RevealText delay={0.12} className="italic">
              whole person.
            </RevealText>
          </h2>
          <RevealText delay={0.24} className="mt-8 max-w-md text-[clamp(16px,1.25vw,19px)] font-light leading-relaxed text-ink-soft">
            We take a holistic approach, supporting daily living, wellness, community connection, and practical independence.
          </RevealText>
        </div>

        <div className="relative lg:col-span-7">
          <motion.div style={{ y: archY }} className="relative mx-auto h-[560px] w-full max-w-[520px] sm:h-[620px] lg:mr-8">
            <motion.div
              animate={{ scale: hot && !reduce ? 1.01 : 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="absolute left-1/2 top-0 h-full w-[78%] -translate-x-1/2 lg:w-[58%]"
            >
              <ArchImage name="portrait" alt="A person looking out toward a sunlit garden, seen from behind" />
            </motion.div>
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full text-ink/40 lg:block" viewBox="0 0 640 640" fill="none">
              <DrawLine d="M150 250 C 190 250, 220 270, 250 300" delay={0.2} />
              <DrawLine d="M150 430 C 200 410, 230 390, 260 370" delay={0.35} />
              <DrawLine d="M490 150 C 450 180, 430 210, 400 240" delay={0.5} />
              <DrawLine d="M500 390 C 460 370, 430 350, 400 340" delay={0.65} />
            </svg>
            <div className="absolute inset-0 hidden lg:block">
              {supports.map((item) => (
                <p
                  key={item.id}
                  onMouseEnter={() => setHot(item.id)}
                  onMouseLeave={() => setHot(null)}
                  className={`absolute w-[7.6rem] font-serif text-[1.35rem] leading-[1.05] transition-opacity duration-300 ${item.place} ${hot && hot !== item.id ? 'opacity-55' : 'opacity-100'}`}
                >
                  {item.label}
                </p>
              ))}
            </div>
          </motion.div>
          <div className="mt-8 flex flex-col gap-4 lg:hidden">
            {supports.map((item) => (
              <p key={item.id} className="font-serif text-2xl leading-tight">
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tomorrow() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageX = useTransform(scrollYProgress, [0.15, 0.85], reduce ? [0, 0] : [-8, 12]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest text-ivory">
      <div className="container-wide grid items-center gap-14 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-tight">
            <RevealText>A more</RevealText>
            <RevealText delay={0.08}>independent</RevealText>
            <RevealText delay={0.2} className="italic">
              tomorrow.
            </RevealText>
          </h2>
          <RevealText delay={0.32} className="mt-8 max-w-md text-[clamp(16px,1.25vw,19px)] font-light leading-relaxed text-ivory/80">
            With the right support, everyday life can feel more manageable, more connected, and more like you.
          </RevealText>
          <div className="mt-10">
            <EditorialLink href="/approach">Explore our approach</EditorialLink>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <motion.div style={{ x: imageX }} className="relative">
            <div className="overflow-hidden" style={{ clipPath: 'url(#ulead-tomorrow)' }}>
              <CampaignImage
                name="tomorrow"
                alt="Sunlit trees and a stone path in a residential garden"
                className="aspect-[16/11] min-h-[320px]"
              />
            </div>
            <div className="absolute bottom-[8%] right-[4%] hidden w-[24%] overflow-hidden rounded-sm shadow-none sm:block">
              <CampaignImage name="stone" alt="Warm stone wall in garden light" className="aspect-[3/4]" />
            </div>
            <p className="absolute bottom-3 right-5 font-serif text-sm text-ivory">02</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  const reduce = useReducedMotion() === true;
  return (
    <section className="relative overflow-hidden bg-forest text-paper">
      <div
        aria-hidden
        className="botanical-drift pointer-events-none absolute -left-[10%] top-[10%] h-[70%] w-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(8,14,10,0.45),transparent_68%)]"
      />
      <div
        aria-hidden
        className="botanical-drift pointer-events-none absolute -right-[8%] bottom-[5%] h-[60%] w-[45%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(18,28,20,0.4),transparent_70%)]"
        style={{ animationDelay: '-6s' }}
      />
      <div className="container-narrow relative z-10 py-32 text-center lg:py-44">
        <h2 className="font-serif text-[clamp(48px,6vw,92px)] leading-[0.95] tracking-tight">
          <RevealText>Every person deserves an</RevealText>
          <RevealText delay={0.12}>opportunity to move forward.</RevealText>
        </h2>
        <RevealText delay={0.28} className="mx-auto mt-8 max-w-xl text-[clamp(16px,1.25vw,19px)] font-light leading-relaxed text-paper/75">
          If you are exploring a residential environment that honors dignity and practical independence, learn more about the model we are developing.
        </RevealText>
        <motion.div
          className="mx-auto mt-12 h-12 w-px origin-top bg-paper/50"
          initial={{ scaleY: reduce ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : 0.45, ease: EASE }}
        />
        <motion.div
          className="mx-auto h-px w-24 origin-center bg-paper/50"
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : 0.6, ease: EASE }}
        />
      </div>
      <div className="h-36 bg-gradient-to-b from-forest to-night" />
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/home/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="Residential Support & Supportive Care"
        description="ULeadRTH is developing a residential support concept centered on dignity, everyday routines, and a path toward greater independence."
      />
      <CurveDefs />
      <Hero />
      <FullyHuman />
      <RoomToGrow />
      <WholePerson />
      <Tomorrow />
      <Statement />
    </>
  );
}
