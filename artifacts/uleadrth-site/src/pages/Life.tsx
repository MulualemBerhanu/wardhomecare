import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { ArchImage, CampaignImage, EASE, RevealText, usePointerShift, useSectionScroll } from '@/components/home/motion';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef, type RefObject } from 'react';
import { Link } from 'wouter';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

const DETAILS = [
  {
    title: 'The Physical Space',
    body: 'The setting is intended to provide a balance between personal and shared areas, supporting both independence and a sense of belonging.',
    image: 'plant',
    alt: 'A houseplant in warm window light',
    clip: 'inset(100% 0 0 0)',
  },
  {
    title: 'Deliberate Experiences',
    body: 'Shared meals, personal interests, and community activities are envisioned as opportunities for connection and growth, not checklists.',
    image: 'books',
    alt: 'Books and a small plant on a wood table',
    clip: 'circle(0% at 50% 50%)',
  },
  {
    title: 'Individualized Rhythm',
    body: 'The residential environment allows space for familiar routines, while also making room for new interests and opportunities as needs and goals evolve.',
    image: 'chair',
    alt: 'A wood chair beside a window in late light',
    clip: 'inset(0 100% 0 0)',
  },
] as const;

export default function Life() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/life/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="Life at ULeadRTH"
        description="Experience the daily rhythms, environment, and community at ULeadRTH."
      />
      <CurveDefs />
      <LifeHero />
      <MorningStory />
      <AfternoonStory />
      <ResidentialExperience />
      <ExperienceDetails />
      <LifeFinal />
    </>
  );
}

function useDrift(ref: RefObject<HTMLElement | null>, amount: number) {
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  return useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [amount, -amount]);
}

function LifeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const shift = usePointerShift(2);
  const { scrollYProgress } = useSectionScroll(ref, ['start start', 'end start']);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 16]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -18]);

  return (
    <section ref={ref} className="relative bg-night text-ivory">
      <div className="relative h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: photoY, x: reduce ? 0 : shift.x }}>
          <motion.div
            className="h-full w-full"
            initial={{ scale: reduce ? 1 : 1.045 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0.3 : 1.4, ease: EASE }}
          >
            <CampaignImage
              folder="life"
              name="hero"
              priority
              alt="A garden path and wood seating outside a glass-walled home"
              className="scale-105"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night/50 via-night/15 to-transparent" />

        <motion.div style={{ y: copyY }} className="relative z-10 flex h-full flex-col justify-end pb-28">
          <div className="container-wide grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <RevealText immediate delay={0.42} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
                04 / Life at ULeadRTH
              </RevealText>
              <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                <RevealText immediate delay={0.55}>Life at</RevealText>
                <RevealText immediate delay={0.72}>ULeadRTH.</RevealText>
              </h1>
              <RevealText immediate delay={0.9} className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/85">
                An illustration of the calm, everyday rhythm ULeadRTH is being designed to support.
              </RevealText>
            </div>
            <RevealText immediate delay={1.05} className="lg:col-span-4 lg:col-start-9">
              <div className="flex items-start gap-4">
                <span className="mt-1 hidden h-24 w-px bg-ivory/50 sm:block" />
                <p className="font-serif text-2xl italic leading-tight sm:text-3xl">
                  Familiar
                  <br />
                  Routines.
                  <span className="mt-4 block">
                    Meaningful
                    <br />
                    Days.
                  </span>
                </p>
              </div>
            </RevealText>
          </div>
        </motion.div>

        <motion.button
          type="button"
          aria-label="Scroll"
          onClick={() => document.getElementById('mornings')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}
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

function MorningStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const mainY = useDrift(ref, 10);
  const backY = useDrift(ref, -5);

  return (
    <section id="mornings" ref={ref} className="scroll-mt-24 bg-ivory pb-16 pt-6 text-ink lg:pb-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12">
        <div className="order-1 lg:order-none lg:col-span-5">
          <p className="font-serif text-5xl leading-none text-ink/20">01</p>
          <h2 className="mt-2 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            <RevealText>Mornings.</RevealText>
          </h2>
          <div className="mt-6 max-w-md space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              The intended environment favors a gentle start to the day, with space for personal routines and an unhurried transition into shared activity.
            </p>
            <p>
              A morning might include quiet reading, a walk, or preparing breakfast. These examples illustrate the design philosophy rather than a guaranteed schedule or facility.
            </p>
          </div>
          <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.22em] text-moss">
            Quiet beginnings
            <span className="mt-1 block">brighter days</span>
          </p>
        </div>
        <div className="relative order-2 lg:col-span-7">
          <motion.div style={{ y: backY }} className="absolute -top-6 right-0 z-0 hidden w-[46%] overflow-hidden sm:block">
            <div className="aspect-[4/3]">
              <CampaignImage
                folder="life"
                name="window"
                alt="Morning light through curtains onto houseplants"
                className="opacity-90"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ y: mainY }}
            className="relative z-10 w-[88%] overflow-hidden sm:mt-16"
            initial={reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: reduce ? 0.35 : 1.05, ease: EASE }}
          >
            <div className="aspect-[4/3]">
              <CampaignImage
                folder="life"
                name="breakfast"
                alt="Breakfast, a book, and tea on a wood table in morning light"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AfternoonStory() {
  const reduce = useReducedMotion() === true;
  return (
    <section className="bg-ivory pb-28 text-ink lg:pb-36">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="order-1 overflow-hidden lg:col-span-7"
          initial={reduce ? { opacity: 0 } : { scale: 1.02, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: reduce ? 0.35 : 1.1, ease: EASE }}
        >
          <div className="aspect-[16/11]">
            <CampaignImage
              folder="life"
              name="living"
              alt="A living room with a sofa, wood table, plants, and a fireplace"
            />
          </div>
        </motion.div>
        <div className="order-2 lg:col-span-5">
          <p className="font-serif text-5xl leading-none text-ink/20">02</p>
          <h2 className="mt-2 font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            <RevealText>Afternoons &</RevealText>
            <RevealText delay={0.12}>Evenings.</RevealText>
          </h2>
          <div className="mt-6 max-w-md space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              Afternoons could balance personal goals, practical activity, and rest. The aim is to create room for progress without treating every hour as a formal appointment.
            </p>
            <p>
              Evenings are imagined as lower-pressure moments for connection and quiet. Final routines and activities will depend on the completed operating model.
            </p>
          </div>
          <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.22em] text-moss">
            Balanced days
            <span className="mt-1 block">for a more independent tomorrow</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ResidentialExperience() {
  return (
    <section className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid items-center gap-12 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">The Residential Experience</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            <RevealText>More than</RevealText>
            <RevealText delay={0.12} className="italic">
              a place to live.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/75">
            ULeadRTH envisions a residential setting where the physical environment, daily rhythms, and relationships all work together to support dignity, autonomy, and wellbeing.
          </p>
          <Link
            href="/approach"
            className="group/link mt-8 inline-flex items-center gap-3 border-b border-ivory/30 pb-1 text-sm tracking-wide"
          >
            Explore our approach
            <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <ArchImage
            folder="life"
            name="arch"
            alt="A garden seen through an arched opening"
            className="aspect-[3/4]"
          />
          <p className="pointer-events-none absolute bottom-8 left-6 font-serif text-2xl italic leading-tight text-ivory sm:text-3xl">
            Real
            <br />
            Environments.
            <span className="mt-3 block">
              Real
              <br />
              Possibilities.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ExperienceDetails() {
  const reduce = useReducedMotion() === true;
  return (
    <section className="relative bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-24" />
      <div className="group/details container-wide grid gap-12 pb-16 md:grid-cols-3 lg:gap-8 lg:pb-24">
        {DETAILS.map((detail, index) => (
          <motion.article
            key={detail.title}
            className="transition-opacity duration-500 hover:!opacity-100 group-hover/details:opacity-75"
            initial={{ opacity: reduce ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : index * 0.12, ease: EASE }}
          >
            <motion.div
              className="aspect-[3/4] overflow-hidden"
              initial={reduce ? undefined : { clipPath: detail.clip }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: reduce ? 0.2 : 0.9, delay: reduce ? 0 : index * 0.12, ease: EASE }}
            >
              <CampaignImage
                folder="life"
                name={detail.image}
                alt={detail.alt}
                className="h-full w-full transition-transform duration-700 hover:scale-[1.012]"
              />
            </motion.div>
            <h2 className="mt-5 font-serif text-2xl tracking-tight sm:text-3xl">{detail.title}</h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{detail.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function LifeFinal() {
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-28 text-center text-ivory lg:py-40">
      <div className="botanical-drift pointer-events-none absolute -left-8 top-10 h-52 w-52 rounded-full bg-moss/20 blur-3xl" />
      <div className="botanical-drift pointer-events-none absolute -right-6 bottom-8 h-60 w-60 rounded-full bg-night/25 blur-3xl" />
      <span aria-hidden className="mx-auto mb-8 block h-14 w-px bg-ivory/35" />
      <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        <RevealText>Every person deserves an</RevealText>
        <RevealText delay={0.14} className="italic">
          opportunity to move forward.
        </RevealText>
      </h2>
      <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/75">
        If you are exploring a residential environment that honors dignity and practical independence, learn more about the model we are developing.
      </p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-night" />
    </section>
  );
}
