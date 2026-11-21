import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import {
  CampaignImage,
  EASE,
  OrganicTransition,
  RevealText,
} from '@/components/home/motion';
import { BRAND, SUPPORT_SERVICES } from '@/lib/brand';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

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
          alt="Warm residential interior with natural light, wood, and plants"
          priority
          className="scale-105"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/25 to-night/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-night/20" />

      <motion.div style={{ y: textY }} className="relative z-10 flex min-h-[100svh] items-end">
        <div className="container-wide w-full pb-28 pt-36 lg:pb-36">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <motion.p
                className="mb-8 font-sans text-[11px] font-medium uppercase leading-relaxed tracking-[0.32em] text-paper/80"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.15, ease: EASE }}
              >
                Ward Home Care
                <span className="mt-2 block tracking-[0.38em]">Salem, Oregon</span>
              </motion.p>
              <h1 className="font-serif text-[clamp(64px,8.5vw,138px)] leading-[0.9] tracking-tight text-paper">
                <RevealText immediate duration={0.85}>
                  {BRAND.homeHeadline.upright}
                </RevealText>
                <RevealText immediate delay={0.14} duration={0.85} className="italic text-ivory">
                  {BRAND.homeHeadline.italic}
                </RevealText>
              </h1>
              <div className="mt-10 flex max-w-3xl flex-col gap-8 md:flex-row md:items-end">
                <motion.p
                  className="max-w-md text-[clamp(16px,1.25vw,19px)] font-light leading-relaxed text-paper/85"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.55, ease: EASE }}
                >
                  {BRAND.homeSupport}
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
                    About WHC
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
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
        onClick={() => document.getElementById('who-we-are')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}
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

function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-24 bg-ivory pb-28 pt-10 text-ink lg:pb-36">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-12">
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
          <Link
            href="/services"
            className="group mt-10 inline-flex items-center gap-3 border-b border-ink/25 pb-1 text-sm tracking-wide"
          >
            What we do
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="aspect-[4/3] overflow-hidden">
            <CampaignImage
              name="garden"
              alt="A calm garden setting outside a residential home"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeSupport() {
  return (
    <section className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-24" />
      <div className="container-wide grid gap-12 pb-32 lg:grid-cols-12 lg:pb-40">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Our homes</p>
          <h2 className="mt-4 font-serif text-[clamp(44px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>More than a residence.</RevealText>
            <RevealText delay={0.12} className="italic">
              A place to call home.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/75">
            Our homes are in established Northeast Salem neighborhoods—quiet residential settings with comfortable shared spaces, private bedrooms, and easy access to community resources, parks, day programs, shopping, and medical providers.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="space-y-4 border-t border-ivory/20 pt-2">
            {SUPPORT_SERVICES.slice(0, 5).map((item) => (
              <li key={item} className="flex gap-4 border-b border-ivory/15 py-4">
                <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-ivory/40" />
                <span className="font-serif text-xl sm:text-2xl">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="group mt-10 inline-flex items-center gap-3 border-b border-ivory/30 pb-1 text-sm tracking-wide"
          >
            Explore residential services
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="lift" className="-mt-16 md:-mt-24" />
      <div className="container-wide grid items-center gap-12 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-6">
          <div className="aspect-[4/3] overflow-hidden">
            <CampaignImage name="tomorrow" alt="Sunlit outdoor residential setting" />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Our commitment</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,4.5vw,64px)] leading-[0.95] tracking-tight">
            <RevealText>Every life deserves</RevealText>
            <RevealText delay={0.12} className="italic">
              a place to thrive.
            </RevealText>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">
            We strive to go above and beyond Home and Community Based Services (HCBS) requirements by providing person-centered support to each individual we serve.
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
              Connect with us
            </Link>
          </div>
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
    link.href = '/images/home/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="24-Hour Residential Services"
        description="Ward Home Care, Inc. (WHC) provides 24-hour residential services for adults with intellectual and developmental disabilities in Salem, Oregon."
      />
      <CurveDefs />
      <Hero />
      <WhoWeAre />
      <HowWeSupport />
      <Closing />
    </>
  );
}
