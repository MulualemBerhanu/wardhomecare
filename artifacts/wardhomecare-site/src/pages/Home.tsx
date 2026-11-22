import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom } from '@/components/home/curves';
import {
  Commitment,
  FilmStrip,
  InsideHome,
  PageProgress,
  SupportStage,
  WordRibbon,
} from '@/components/home/experience';
import { CampaignImage, Magnetic, RevealText } from '@/components/home/motion';
import { BRAND } from '@/lib/brand';

const IVORY = '#f3efe6';

const FACTS = [
  { label: 'Care on site', value: '24-hour' },
  { label: 'Homes open', value: 'Three' },
  { label: 'County', value: 'Marion' },
  { label: 'First home', value: '2020' },
] as const;

function RoofName() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[18%] z-10 sm:top-[17%] lg:top-[19%]">
      <div className="container-wide">
        <p
          className="font-[family-name:var(--font-display)] text-[clamp(42px,5.4vw,76px)] italic leading-none tracking-tight text-white drop-shadow-[0_2px_10px_rgba(18,17,15,0.45)]"
          role="img"
          aria-label="Ward Home Care"
        >
          Ward Home Care
        </p>
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '8%']);
  const waveY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['18%', '-28%']);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-night text-paper">
      <motion.div className="absolute inset-[-6%]" style={{ y: imageY }}>
        <CampaignImage
          name="hero"
          src="/WHC1.png"
          alt="A Ward Home Care home at dusk, with a lit walkway and an autumn tree"
          priority
        />
      </motion.div>
      <RoofName />
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/15 to-night/25" />
      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="container-wide w-full pb-28 pt-32">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.34em] text-paper/75">Salem, Oregon</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(52px,7vw,108px)] leading-[0.9] tracking-tight">
            <RevealText immediate>{BRAND.homeHeadline.upright}</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              {BRAND.homeHeadline.italic}
            </RevealText>
          </h1>
          <Magnetic className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border-b border-paper/50 pb-1 text-[11px] font-medium uppercase tracking-[0.24em]"
            >
              About
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </Magnetic>
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

function WhoWeAre() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.55], reduce ? [1, 1] : [1.12, 1]);
  const insetY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['8%', '-10%']);

  return (
    <section id="who-we-are" ref={ref} className="scroll-mt-24 bg-ivory pb-28 pt-16 text-ink lg:pb-40 lg:pt-20">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Who we are</p>
          <h2 className="mt-4 font-serif text-[clamp(44px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>Compassionate</RevealText>
            <RevealText delay={0.1} className="italic">
              residential care.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ink-soft">
            Ward Home Care, Inc. (WHC) is a state-licensed agency that provides 24-hour residential services for adults with intellectual and developmental disabilities (I/DD), including those with co-occurring mental health needs.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
            {FACTS.map((fact) => (
              <li key={fact.label}>
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-moss">{fact.label}</p>
                <p className="mt-1 font-serif text-3xl leading-none">{fact.value}</p>
              </li>
            ))}
          </ul>
          <Magnetic className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 border-b border-ink/25 pb-1 text-sm tracking-wide"
            >
              What we do
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Magnetic>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
            <motion.div style={{ scale }} className="h-full w-full">
              <CampaignImage name="garden" alt="A stone garden path leading through ferns toward a wooden arbor" />
            </motion.div>
          </div>
          <motion.div
            style={{ y: insetY }}
            className="absolute -bottom-10 -left-4 hidden w-[46%] overflow-hidden rounded-[1.5rem] border-4 border-ivory shadow-[0_24px_60px_rgba(18,17,15,0.18)] sm:block"
          >
            <div className="aspect-[4/5]">
              <CampaignImage
                folder="services"
                name="breakfast"
                alt="A bowl of fruit and grain beside a mug on a sunlit wooden table"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/WHC1.png';
    link.type = 'image/png';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="24-Hour Residential Services"
        description="Ward Home Care, Inc. (WHC) provides 24-hour residential services for adults with intellectual and developmental disabilities in Salem, Oregon."
      />
      <PageProgress />
      <CurveDefs />
      <Hero />
      <WordRibbon />
      <WhoWeAre />
      <InsideHome />
      <FilmStrip />
      <SupportStage />
      <Commitment />
    </>
  );
}
