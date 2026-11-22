import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'wouter';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { CampaignImage, EASE, Magnetic, RevealText } from '@/components/home/motion';
import { OrganicSectionTop } from '@/components/home/curves';
import { BRAND, SUPPORT_SERVICES } from '@/lib/brand';
import { cn } from '@/lib/utils';

const FOREST = '#24302a';

const RIBBON = [
  BRAND.tagline,
  'Compassionate',
  'Respectful',
  'Person-centered',
  'High-quality',
] as const;

const CHAPTERS = [
  {
    index: '01',
    kicker: 'The neighborhood',
    title: 'Quiet streets.',
    italic: 'A real home.',
    body: 'Our homes are in established Northeast Salem neighborhoods—quiet residential settings with comfortable shared spaces, private bedrooms, and easy access to parks, day programs, shopping, and medical providers.',
    image: {
      folder: 'home',
      name: 'garden',
      alt: 'A stone garden path leading through ferns toward a wooden arbor',
    },
  },
  {
    index: '02',
    kicker: 'The day',
    title: 'Ordinary days,',
    italic: 'fully supported.',
    body: 'Residents enjoy getting out into the community on a daily basis. Support stays close to the rhythms of home—meals, routines, and time beyond the front door.',
    image: {
      folder: 'services',
      name: 'breakfast',
      alt: 'A bowl of fruit and grain beside a mug on a sunlit wooden table',
    },
  },
  {
    index: '03',
    kicker: 'The people',
    title: 'Someone here,',
    italic: 'around the clock.',
    body: 'Direct Support Professionals are on site 24 hours a day, with awake overnight coverage. Staff are trained to support adults with intellectual and developmental disabilities and co-occurring mental health needs.',
    image: {
      folder: 'about',
      name: 'dining',
      alt: 'A wooden dining table set with ceramic bowls and a vase of greenery',
    },
  },
  {
    index: '04',
    kicker: 'The promise',
    title: 'Person-centered,',
    italic: 'by design.',
    body: 'Around-the-clock assistance follows each person’s needs, preferences, goals, and Individual Support Plan. WHC opened its first 24-hour home in Marion County in November 2020. Three care homes are open today.',
    image: {
      folder: 'home',
      name: 'stream',
      alt: 'A shallow stream running beside a stone house and garden',
    },
  },
] as const;

const FRAMES = [
  { folder: 'home', name: 'pergola', alt: 'A vine-covered pergola over a flagstone path' },
  { folder: 'home', name: 'garden', alt: 'A stone garden path leading through ferns toward a wooden arbor' },
  { folder: 'home', name: 'stream', alt: 'A shallow stream running beside a stone house and garden' },
  { folder: 'services', name: 'breakfast', alt: 'A bowl of fruit and grain beside a mug on a sunlit wooden table' },
  { folder: 'about', name: 'dining', alt: 'A wooden dining table set with ceramic bowls and a vase of greenery' },
  { folder: 'home', name: 'portrait', alt: 'A person seen from behind, looking over a garden path' },
] as const;

const SUPPORT_DETAIL: Record<
  (typeof SUPPORT_SERVICES)[number],
  { note: string; folder: string; name: string }
> = {
  'Daily Living Assistance': {
    note: 'Help with the routines of home, shaped around each person’s needs and preferences.',
    folder: 'services',
    name: 'bedroom',
  },
  'Health and wellness support': {
    note: 'Support that stays close to health needs, in homes near medical providers in Northeast Salem.',
    folder: 'life',
    name: 'window',
  },
  'Behavioral and emotional support': {
    note: 'Staff are trained for I/DD and co-occurring mental health needs, including trauma histories and behavioral health crises.',
    folder: 'approach',
    name: 'calm',
  },
  'Community integration': {
    note: 'Residents get out into the community on a daily basis, near parks, day programs, and shopping.',
    folder: 'home',
    name: 'pergola',
  },
  'Independence and life skills development': {
    note: 'Person-centered support that encourages independence inside a home-like setting.',
    folder: 'services',
    name: 'desk',
  },
  'Individualized support and supervision': {
    note: 'Around-the-clock assistance guided by each person’s Individual Support Plan, with awake overnight coverage.',
    folder: 'about',
    name: 'bedroom',
  },
  'Family and Care Team Collaboration': {
    note: 'Direct communication with the individual and every member of their team.',
    folder: 'contact',
    name: 'table',
  },
};

function useCinematicPin() {
  const [pin, setPin] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)').matches;
  });

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
    const update = () => setPin(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return pin;
}

export function PageProgress() {
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-clay"
      style={{ scaleX: scrollYProgress, opacity: reduce ? 0 : 1 }}
    />
  );
}

export function WordRibbon() {
  const loop = [...RIBBON, ...RIBBON];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ivory py-5 text-ink" aria-hidden>
      <div className="whc-marquee-track items-center gap-8 px-4">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            <span className={cn('font-serif text-2xl tracking-tight sm:text-3xl', index % RIBBON.length === 0 && 'italic')}>
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ChapterPhoto({
  chapter,
  index,
  total,
  progress,
}: {
  chapter: (typeof CHAPTERS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;
  const fade = 0.06;
  const input =
    index === 0
      ? [0, Math.max(step - fade, 0.01), step]
      : index === total - 1
        ? [start, start + fade, 1]
        : [start, start + fade, end - fade, end];
  const output = index === 0 ? [1, 1, 0] : index === total - 1 ? [0, 1, 1] : [0, 1, 1, 0];
  const opacity = useTransform(progress, input, output);
  const scale = useTransform(progress, [start, Math.min(end, 0.999)], [1.06, 1]);

  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0">
      <motion.div style={{ scale }} className="h-full w-full">
        <CampaignImage folder={chapter.image.folder} name={chapter.image.name} alt="" priority={index === 0} />
      </motion.div>
    </motion.div>
  );
}

export function InsideHome() {
  const ref = useRef<HTMLElement>(null);
  const pin = useCinematicPin();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (!pin) return;
    const next = Math.min(CHAPTERS.length - 1, Math.floor(value * CHAPTERS.length));
    setActive((current) => (current === next ? current : next));
  });

  const jump = (index: number) => {
    const el = ref.current;
    if (!el) return;
    if (!pin) {
      document.getElementById(`chapter-${CHAPTERS[index].index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const scrollable = el.offsetHeight - window.innerHeight;
    const destination = el.offsetTop + scrollable * ((index + 0.5) / CHAPTERS.length);
    window.scrollTo({ top: destination, behavior: 'smooth' });
  };

  if (!pin) {
    return (
      <section id="inside-the-home" className="scroll-mt-24 bg-night text-ivory">
        <h2 className="sr-only">Life in the home</h2>
        {CHAPTERS.map((chapter) => (
          <article id={`chapter-${chapter.index}`} key={chapter.index} className="scroll-mt-24 border-t border-ivory/10">
            <div className="aspect-[4/3] overflow-hidden">
              <CampaignImage folder={chapter.image.folder} name={chapter.image.name} alt={chapter.image.alt} />
            </div>
            <div className="container-wide py-12">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
                {chapter.index} / {chapter.kicker}
              </p>
              <h3 className="mt-4 font-serif text-[clamp(40px,8vw,64px)] leading-[0.95]">
                {chapter.title}
                <span className="block italic">{chapter.italic}</span>
              </h3>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-ivory/75">{chapter.body}</p>
            </div>
          </article>
        ))}
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="inside-the-home"
      className="relative bg-night text-ivory"
      style={{ height: `${CHAPTERS.length * 100}vh` }}
    >
      <h2 className="sr-only">Life in the home</h2>
      <div className="sticky top-0 grid h-[100svh] overflow-hidden lg:grid-cols-12">
        <div className="relative min-h-[46vh] overflow-hidden lg:col-span-7 lg:min-h-0">
          {CHAPTERS.map((chapter, index) => (
            <ChapterPhoto
              key={chapter.index}
              chapter={chapter}
              index={index}
              total={CHAPTERS.length}
              progress={scrollYProgress}
            />
          ))}
          <p className="sr-only">{CHAPTERS[active].image.alt}</p>
        </div>
        <div id="inside-chapter" role="tabpanel" aria-live="off" className="relative z-10 flex flex-col justify-end bg-night px-6 pb-28 pt-28 sm:px-10 lg:col-span-5 lg:justify-center lg:pb-24 lg:pl-8 lg:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={CHAPTERS[active].index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
                {CHAPTERS[active].index} / {CHAPTERS[active].kicker}
              </p>
              <h3 className="mt-4 font-serif text-[clamp(40px,4.4vw,72px)] leading-[0.92] tracking-tight">
                {CHAPTERS[active].title}
                <span className="block italic text-ivory">{CHAPTERS[active].italic}</span>
              </h3>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/75">{CHAPTERS[active].body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-8 left-6 z-20 flex items-center gap-3 sm:left-10 lg:left-[58%]">
          <div role="tablist" aria-label="Moments in the home" className="flex items-center gap-2">
            {CHAPTERS.map((chapter, index) => (
              <button
                key={chapter.index}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="inside-chapter"
                aria-label={`${chapter.kicker}: ${chapter.title} ${chapter.italic}`}
                onClick={() => jump(index)}
                className={cn(
                  'grid h-11 w-11 place-items-center rounded-full border font-sans text-[10px] tracking-[0.14em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-night',
                  active === index ? 'border-paper bg-paper text-night' : 'border-paper/30 text-paper/80 hover:border-paper',
                )}
              >
                {chapter.index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FilmStrip() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['6%', '-46%']);
  const frames = FRAMES.map((frame) => (
    <figure key={`${frame.folder}-${frame.name}`} className={reduce ? '' : 'w-[78vw] shrink-0 sm:w-[340px]'}>
      <div className="aspect-[3/4] overflow-hidden rounded-[1.75rem]">
        <CampaignImage folder={frame.folder} name={frame.name} alt={frame.alt} />
      </div>
    </figure>
  ));

  return (
    <section ref={ref} className="overflow-hidden bg-ivory py-16 text-ink lg:py-24" aria-labelledby="closer-look">
      <div className="container-wide mb-8">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">A closer look</p>
        <h2 id="closer-look" className="mt-3 font-serif text-4xl leading-none tracking-tight sm:text-5xl">
          Light, rooms,
          <span className="italic"> and the path outside.</span>
        </h2>
      </div>
      {reduce ? (
        <div className="container-wide grid grid-cols-2 gap-4 lg:grid-cols-3">{frames}</div>
      ) : (
        <motion.div style={{ x }} className="flex w-max gap-4 px-4 sm:px-8">
          {frames}
        </motion.div>
      )}
    </section>
  );
}

export function SupportStage() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion() === true;
  const service = SUPPORT_SERVICES[active];
  const detail = SUPPORT_DETAIL[service];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = SUPPORT_SERVICES.length - 1;
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`support-tab-${next}`)?.focus();
  };

  return (
    <section id="support" className="relative scroll-mt-24 bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid gap-12 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">How we support</p>
          <h2 className="mt-4 font-serif text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>More than a residence.</RevealText>
            <RevealText delay={0.1} className="italic">
              A place to call home.
            </RevealText>
          </h2>
          <div
            id="support-panel"
            role="tabpanel"
            aria-labelledby={`support-tab-${active}`}
            className="relative mt-10 min-h-[280px] overflow-hidden rounded-[1.75rem]"
          >
            {SUPPORT_SERVICES.map((item, index) => {
              const photo = SUPPORT_DETAIL[item];
              return (
                <div
                  key={item}
                  aria-hidden
                  className={cn(
                    'absolute inset-0 transition-opacity duration-700',
                    index === active ? 'opacity-100' : 'opacity-0',
                  )}
                >
                  <CampaignImage folder={photo.folder} name={photo.name} alt="" />
                </div>
              );
            })}
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={service}
                className="relative z-10 flex h-full min-h-[280px] flex-col justify-end p-7"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: reduce ? 0.2 : 0.45, ease: EASE }}
              >
                <p className="font-serif text-5xl text-ivory/80">{String(active + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 max-w-sm font-serif text-3xl leading-tight">{service}</h3>
                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-ivory/80">{detail.note}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div role="tablist" aria-label="Residential support services" aria-orientation="vertical" className="border-t border-ivory/15">
            {SUPPORT_SERVICES.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item}
                  id={`support-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="support-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={cn(
                    'relative flex w-full items-center gap-5 border-b border-ivory/15 py-4 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 focus-visible:ring-offset-forest',
                    selected ? 'text-ivory' : 'text-ivory/50 hover:text-ivory',
                  )}
                >
                  {selected ? (
                    <motion.span layoutId="support-mark" className="absolute inset-y-3 left-0 w-px bg-clay" />
                  ) : null}
                  <span className="w-8 font-serif text-lg text-ivory/40">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-2xl leading-snug sm:text-[1.7rem]">{item}</span>
                </button>
              );
            })}
          </div>
          <Magnetic className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 border-b border-ivory/30 pb-1 text-sm tracking-wide"
            >
              Explore residential services
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

export function Commitment() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section id="commitment" ref={ref} className="relative min-h-[88svh] scroll-mt-24 overflow-hidden bg-night text-ivory">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[8%] h-[116%]">
        <CampaignImage name="tomorrow" alt="Sunlit trees and a quiet outdoor residential setting" priority={false} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-night/45 to-night/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/30" />
      <div className="relative z-10 flex min-h-[88svh] items-end">
        <div className="container-wide pb-24 pt-36 lg:pb-32">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Our commitment</p>
          <h2 className="mt-4 max-w-4xl font-serif text-[clamp(48px,7vw,108px)] leading-[0.9] tracking-tight">
            <RevealText>Every life deserves</RevealText>
            <RevealText delay={0.12} className="italic">
              a place to thrive.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/80">
            We strive to go above and beyond Home and Community Based Services (HCBS) requirements by providing person-centered support to each individual we serve.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Magnetic>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-ivory px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-night transition-colors duration-500 hover:bg-clay hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 focus-visible:ring-offset-night"
              >
                Admissions
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/connect"
                className="inline-flex items-center justify-center rounded-full border border-ivory/40 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-500 hover:bg-ivory hover:text-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 focus-visible:ring-offset-night"
              >
                Contact us
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
