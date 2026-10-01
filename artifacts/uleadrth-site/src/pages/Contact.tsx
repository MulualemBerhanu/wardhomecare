import { SEO } from '@/components/SEO';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { ArchImage, CampaignImage, EASE, RevealText, useSectionScroll } from '@/components/home/motion';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { Link } from 'wouter';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

const STEPS = [
  {
    n: '01',
    title: 'No inquiry form is active on this preview.',
    body: 'We are not currently accepting inquiries through a form on this website.',
  },
  {
    n: '02',
    title: 'A real enquiry channel will be clearly identified when available.',
    body: 'We will share approved contact details in the future.',
  },
  {
    n: '03',
    title: 'Service details will be confirmed during a future conversation.',
    body: 'Once our operating model is finalized, we will provide clear information about our process.',
  },
] as const;

export default function Contact() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/contact/hero.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact details for ULeadRTH will be published here before launch. Inquiries are not accepted through this preview site."
      />
      <CurveDefs />
      <ContactHero />
      <ContactAvailability />
      <ContactProcess />
      <ContactCommitment />
      <ContactClosing />
    </>
  );
}

function ConversationLine({
  className,
  delay = 0,
  immediate = false,
}: {
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion() === true;
  const shown = { scaleY: 1, opacity: 0.7 };
  const transition = { duration: reduce ? 0.2 : 1.05, delay: reduce ? 0 : delay, ease: EASE };
  return (
    <motion.span
      aria-hidden
      className={cn('block w-px origin-top bg-current', className)}
      initial={{ scaleY: reduce ? 1 : 0, opacity: reduce ? 0.7 : 0 }}
      {...(immediate
        ? { animate: shown, transition }
        : { whileInView: shown, viewport: { once: true, margin: '-8% 0px' as const }, transition })}
    />
  );
}

function ContactHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref, ['start start', 'end start']);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 10]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -16]);
  const periodScale = useTransform(scrollYProgress, [0.08, 0.42], reduce ? [1, 1] : [1, 1.28]);
  const lineGrow = useTransform(scrollYProgress, [0.18, 0.78], reduce ? [1, 1] : [0, 1]);

  return (
    <section ref={ref} className="relative bg-night text-ivory">
      <div className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: photoY }}>
          <motion.div
            className="h-full w-full"
            initial={{ scale: reduce ? 1 : 1.035 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0.3 : 1.8, ease: EASE }}
          >
            <CampaignImage
              folder="contact"
              name="hero"
              priority
              alt="A quiet wood-paneled room with plants, a ceramic vase, and window light"
              className="scale-105"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-night/60 via-night/20 to-transparent" />

        <div className="relative z-10 flex h-full items-end pb-44 lg:pb-28">
          <div className="container-wide grid w-full items-end gap-10 lg:grid-cols-12">
            <motion.div style={{ y: copyY }} className="lg:col-span-8">
              <RevealText immediate delay={0.45} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
                05 / Contact
              </RevealText>
              <h1 className="mt-5 max-w-full font-serif text-[clamp(64px,8vw,140px)] leading-[0.88] tracking-tight text-ivory">
                <RevealText immediate delay={0.58}>
                  Let&apos;s start
                </RevealText>
                <RevealText immediate delay={0.72}>with a</RevealText>
                <span className="block">
                  <span className="relative inline-block max-w-full">
                    <ConversationWord reduce={reduce} />
                    <PeriodMark scale={periodScale} grow={lineGrow} reduce={reduce} />
                  </span>
                </span>
              </h1>
              <RevealText immediate delay={1.08} className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/85 sm:text-[17px]">
                We believe in thoughtful, person-centered support—and that begins with listening.
              </RevealText>
            </motion.div>

            <div className="lg:col-span-3 lg:col-start-10">
              <div className="flex items-start gap-4 text-ivory lg:text-ink">
                <ConversationLine immediate delay={1.22} className="mt-1 hidden h-28 sm:block" />
                <p className="font-serif text-2xl italic leading-tight [text-shadow:0_1px_18px_rgba(18,17,15,0.35)] sm:text-3xl lg:[text-shadow:0_1px_18px_rgba(243,239,230,0.95)]">
                  <RevealText immediate delay={1.38}>
                    Meaningful
                    <br />
                    Conversations.
                  </RevealText>
                  <RevealText immediate delay={1.52} className="mt-4">
                    Brighter
                    <br />
                    Tomorrows.
                  </RevealText>
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.button
          type="button"
          aria-label="Scroll"
          onClick={() => document.getElementById('inquiries')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.68, duration: 0.6, ease: EASE }}
          className="absolute bottom-56 right-5 z-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-ivory/80 lg:bottom-32 lg:left-10 lg:right-auto"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/40">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
          Scroll
        </motion.button>
      </div>
      <OrganicSectionBottom fill={IVORY} variant="lift" className="relative z-10 -mt-16 md:-mt-24" />
    </section>
  );
}

function ConversationWord({ reduce }: { reduce: boolean }) {
  return (
    <motion.span
      className="inline-block px-[0.06em] pb-[0.2em] font-serif italic leading-[0.88]"
      initial={reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0%)', y: 18 }}
      animate={{ opacity: 1, clipPath: 'inset(-12% -8% -35% -8%)', y: 0 }}
      transition={{ duration: reduce ? 0.35 : 0.9, delay: reduce ? 0 : 0.9, ease: EASE }}
    >
      conversation
    </motion.span>
  );
}

function PeriodMark({
  scale,
  grow,
  reduce,
}: {
  scale: MotionValue<number>;
  grow: MotionValue<number>;
  reduce: boolean;
}) {
  return (
    <motion.span
      aria-hidden
      className="relative inline-block align-baseline font-serif italic leading-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reduce ? 0 : 0.9, duration: reduce ? 0.2 : 0.6, ease: EASE }}
    >
      <motion.span style={{ scale }} className="inline-block origin-bottom">
        .
      </motion.span>
      <motion.span
        className={cn('absolute left-1/2 top-[0.7em] w-px origin-top -translate-x-1/2 bg-ivory/80', reduce ? 'h-5' : 'h-[22vh]')}
        style={{ scaleY: reduce ? 1 : grow }}
      />
    </motion.span>
  );
}

/**
 * Pre-launch inquiry state. A future ContactInquiry component can replace
 * the contents of this section without rebuilding the rest of the page.
 */
function ContactAvailability() {
  return <InquiryStatus />;
}

function InquiryStatus() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  const archScale = useTransform(scrollYProgress, [0.15, 0.55], reduce ? [1, 1] : [1.02, 1]);
  const asideY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [8, -6]);

  return (
    <section id="inquiries" ref={ref} className="scroll-mt-24 bg-ivory pb-36 pt-4 text-ink lg:pb-44">
      <div className="container-wide grid items-start gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <ConversationLine className="mb-6 h-16 text-ink" />
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Get in touch</p>
          <h2 className="mt-4 font-serif text-[clamp(52px,6vw,96px)] leading-[0.9] tracking-tight">
            <RevealText>Inquiries</RevealText>
            <RevealText delay={0.16} className="italic">
              opening soon.
            </RevealText>
          </h2>
          <div className="mt-6 max-w-md space-y-5 text-base font-light leading-relaxed text-ink-soft">
            <p>
              This page is a placeholder until a secure delivery method and organizational contact details are approved. Nothing you enter elsewhere on this site is transmitted or stored.
            </p>
            <p>In the meantime, you can learn more about the developing model on our approach and services pages.</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/approach"
              className="group/link inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors duration-500 hover:bg-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
            >
              Our Approach
              <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-500 hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
            >
              Services
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-4 lg:-mt-10">
          <motion.div style={{ scale: archScale }} className="relative">
            <ArchImage
              folder="contact"
              name="arch"
              alt="A ceramic vase of greenery on a wood table beside a sunlit window"
              className="mx-auto aspect-[3/4] max-w-md"
            />
            <svg viewBox="0 0 100 132" className="pointer-events-none absolute inset-0 h-full w-full text-ink/50" aria-hidden>
              <motion.path
                d="M8 130 C8 130 8 50 8 42 C8 16 28 4 50 4 C72 4 92 16 92 42 C92 50 92 130 92 130"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 0.6 : 0 }}
                whileInView={{ pathLength: 1, opacity: 0.55 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: reduce ? 0.2 : 1.2, ease: EASE }}
              />
            </svg>
          </motion.div>
        </div>

        <motion.div style={{ y: asideY }} className="lg:col-span-3 lg:col-start-10 lg:pt-16">
          <div className="flex gap-5">
            <ConversationLine delay={0.15} className="h-40 text-ink" />
            <BeforeLaunch />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BeforeLaunch() {
  return (
    <div>
      <p className="font-serif text-3xl text-ink/25">01</p>
      <h3 className="mt-2 font-serif text-4xl leading-none tracking-tight">
        <RevealText>Before</RevealText>
        <RevealText delay={0.12}>Launch</RevealText>
      </h3>
      <p className="mt-6 max-w-xs text-base font-light leading-relaxed text-ink-soft">
        Confirmed organizational contact details and any public location information will be added here before the website launches.
      </p>
      <p className="mt-4 max-w-xs font-serif text-lg italic leading-snug text-ink">
        Please do not use this preview site for urgent or sensitive information.
      </p>
    </div>
  );
}

function ContactProcess() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const drift = useDrift(ref, 6);

  return (
    <section ref={ref} className="relative bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-20 md:-mt-28" />
      <motion.div style={{ y: drift }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-night/45 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-night/35 to-transparent" />
        <div className="absolute bottom-0 left-[8%] h-40 w-40 rounded-full bg-moss/15 blur-3xl" />
      </motion.div>
      <div className="container-wide relative grid items-start gap-16 pb-36 lg:grid-cols-12 lg:pb-44">
        <div className="lg:col-span-5">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">What to expect</p>
          <h2 className="mt-4 font-serif text-[clamp(52px,6vw,100px)] leading-[0.9] tracking-tight">
            <RevealText>A thoughtful</RevealText>
            <RevealText delay={0.14} className="italic">
              process.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/75">
            We are developing a residential support concept that prioritizes dignity, respect, and the right fit for every individual.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(listRef, ['start 75%', 'end 45%']);
  const draw = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.05, 1]);
  const { itemRefs, active } = useActiveStep(STEPS.length);

  return (
    <ol ref={listRef} className="relative space-y-10">
      <motion.span
        aria-hidden
        className="absolute bottom-3 left-[1.15rem] top-3 w-px origin-top bg-ivory/45"
        style={{ scaleY: draw }}
      />
      {STEPS.map((step, index) => {
        const on = reduce || active === index;
        return (
          <li
            key={step.n}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className={cn('relative grid grid-cols-[auto_1fr] gap-6 transition-opacity duration-700', on ? 'opacity-100' : 'opacity-45')}
          >
            <span className="font-serif text-2xl leading-none">{step.n}</span>
            <div>
              <p className="font-serif text-2xl leading-snug sm:text-3xl">{step.title}</p>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-ivory/70 sm:text-base">{step.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function useActiveStep(count: number) {
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion() === true;

  useEffect(() => {
    if (reduce) return;
    const nodes = itemRefs.current.slice(0, count).filter((node): node is HTMLLIElement => node !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index >= 0) setActive(index);
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: [0.35, 0.7] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [count, reduce]);

  return { itemRefs, active };
}

function useDrift(ref: RefObject<HTMLElement | null>, amount: number) {
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref);
  return useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [amount, -amount]);
}

function ContactCommitment() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref, ['start 80%', 'end 20%']);
  const dim = useTransform(scrollYProgress, [0.28, 0.42, 0.62, 0.78], reduce ? [1, 1, 1, 1] : [1, 0.88, 0.88, 1]);
  const photoScale = useTransform(scrollYProgress, [0.45, 1], reduce ? [1, 1] : [1, 1.04]);

  return (
    <section ref={ref} className="relative bg-ivory text-ink">
      <OrganicSectionTop fill={IVORY} variant="wave" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid items-center gap-12 pb-28 lg:grid-cols-12 lg:pb-36">
        <motion.div
          style={{ scale: photoScale }}
          className="origin-left lg:col-span-5 lg:-ml-6"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: reduce ? 0.3 : 1.15, ease: EASE }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <CampaignImage
              folder="contact"
              name="table"
              alt="A wood table with blank books, a ceramic cup, and a plant in warm sunlight"
            />
          </div>
        </motion.div>

        <div className="lg:col-span-4">
          <div className="mb-5 flex items-center gap-4">
            <ConversationLine className="h-10 text-ink" />
            <motion.p style={{ opacity: dim }} className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">
              Our commitment
            </motion.p>
          </div>
          <h2 className="font-serif text-[clamp(44px,5vw,82px)] leading-[0.92] tracking-tight">
            <motion.span style={{ opacity: dim }} className="block">
              <RevealText>Thoughtful care</RevealText>
            </motion.span>
            <RevealText delay={0.2} className="italic">
              starts with listening.
            </RevealText>
          </h2>
        </div>

        <motion.div style={{ opacity: dim }} className="lg:col-span-3">
          <p className="text-base font-light leading-relaxed text-ink-soft">
            When the time comes, our inquiry process will be designed to ensure a respectful and supportive first conversation—so we can understand needs, explore alignment, and share next steps.
          </p>
          <motion.span
            aria-hidden
            className="my-8 block h-px w-16 origin-left bg-ink/30"
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : 0.2, ease: EASE }}
          />
          <ul className="space-y-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
            {['Real people.', 'Real conversations.', 'A brighter tomorrow.'].map((line, index) => (
              <li key={line}>
                <RevealText delay={0.28 + index * 0.12}>{line}</RevealText>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function ContactClosing() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useSectionScroll(ref, ['start end', 'end start']);
  const scale = useTransform(scrollYProgress, [0, 0.45], reduce ? [1, 1] : [1.02, 1]);

  return (
    <section ref={ref} className="relative min-h-[88svh] overflow-hidden bg-forest text-ivory">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <CampaignImage
          folder="contact"
          name="garden"
          alt="A garden and wood home in warm sunlight, where a conversation could continue outdoors"
          className="scale-105"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/35 to-night" />
      <div className="relative z-10 flex min-h-[88svh] flex-col items-center justify-center px-6 py-28 text-center">
        <h2 className="max-w-3xl font-serif text-[clamp(44px,5vw,80px)] leading-[0.95] tracking-tight">
          <RevealText>A place to land.</RevealText>
          <RevealText delay={0.18} className="italic">
            A path to move forward.
          </RevealText>
        </h2>
        <motion.span
          aria-hidden
          className="mt-8 block h-px w-16 origin-center bg-ivory/70"
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : 0.28, ease: EASE }}
        />
        <RevealText delay={0.42} className="mt-8 max-w-md text-base font-light leading-relaxed text-ivory/85">
          Thank you for your interest in ULeadRTH. We look forward to sharing more when our inquiry process is available.
        </RevealText>
      </div>
    </section>
  );
}
