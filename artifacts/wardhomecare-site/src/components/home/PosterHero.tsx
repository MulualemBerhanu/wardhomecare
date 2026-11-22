import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { OrganicSectionBottom } from '@/components/home/curves';
import { CampaignImage } from '@/components/home/motion';

const IVORY = '#f3efe6';

export function PosterHero({
  label,
  title,
  folder,
  name,
  alt,
}: {
  label: string;
  title: ReactNode;
  folder: string;
  name: string;
  alt: string;
}) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = `/images/${folder}/${name}.webp`;
    link.type = 'image/webp';
    document.head.appendChild(link);
    return () => link.remove();
  }, [folder, name]);

  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', '8%']);
  const waveY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['18%', '-28%']);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-night text-paper">
      <motion.div className="absolute inset-[-6%]" style={{ y: imageY }}>
        <CampaignImage folder={folder} name={name} priority alt={alt} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-night/25" />
      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="container-wide w-full pb-28 pt-32">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.34em] text-paper/75">{label}</p>
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(56px,8vw,120px)] leading-[0.88] tracking-tight">{title}</h1>
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
