import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ApplicationForm } from '@/components/careers/ApplicationForm';
import { CurveDefs, OrganicSectionBottom, OrganicSectionTop } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { CampaignImage, RevealText } from '@/components/home/motion';
import { CAREERS } from '@/lib/brand';

const IVORY = '#f3efe6';
const FOREST = '#24302a';

export default function Careers() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/images/services/desk.webp';
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <>
      <SEO
        title="Careers"
        description="Ward Home Care is hiring Direct Support Professionals in Salem, Oregon. Review the perks and requirements, then complete the employment application."
      />
      <PageProgress />
      <CurveDefs />
      <CareersHero />
      <Role />
      <Application />
    </>
  );
}

function CareersHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '8%']);
  const waveY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['18%', '-28%']);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-night text-paper">
      <motion.div className="absolute inset-[-6%]" style={{ y: imageY }}>
        <CampaignImage
          folder="services"
          name="desk"
          priority
          alt="An open book, a ceramic cup, and a closed journal on a wooden table in warm light"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-night/25" />
      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="container-wide w-full pb-28 pt-32">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.34em] text-paper/75">Careers</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(56px,8vw,120px)] leading-[0.88] tracking-tight">
            <RevealText immediate>Join the</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              WHC team.
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

function Role() {
  return (
    <section className="overflow-hidden bg-ivory pb-24 pt-8 text-ink lg:pb-32 lg:pt-12">
      <div className="container-wide grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Now hiring</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight">
            <RevealText>Direct Support</RevealText>
            <RevealText delay={0.1} className="italic">
              Professionals.
            </RevealText>
          </h2>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ink-soft">{CAREERS.intro}</p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Perks</p>
            <ul className="mt-5 space-y-4">
              {CAREERS.perks.map((perk) => (
                <li key={perk} className="text-base font-light leading-relaxed">
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-moss">Requirements</p>
            <ul className="mt-5 space-y-4">
              {CAREERS.requirements.map((item) => (
                <li key={item} className="text-base font-light leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Application() {
  return (
    <section id="apply" className="relative scroll-mt-24 bg-forest text-ivory">
      <OrganicSectionTop fill={FOREST} variant="swoop" className="-mt-16 md:-mt-28" />
      <div className="container-wide grid gap-12 pb-28 lg:grid-cols-12 lg:pb-36">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-sand">Application</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,4.5vw,64px)] leading-[0.95] tracking-tight">
            <RevealText>Application for</RevealText>
            <RevealText delay={0.1} className="italic">
              employment.
            </RevealText>
          </h2>
          <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-ivory/75">
            The same questions as the paper application, one part at a time. Your answers are emailed to the office. They are not saved on this website.
          </p>
        </div>
        <div className="lg:col-span-8">
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
}
