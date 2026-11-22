import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, type MotionStyle, type UseScrollOptions } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import { cn } from '@/lib/utils';

export const EASE = [0.16, 1, 0.3, 1] as const;

export function useSectionScroll(
  ref: RefObject<HTMLElement | null>,
  offset: UseScrollOptions['offset'] = ['start end', 'end start'],
) {
  return useScroll({ target: ref, offset });
}

export function RevealText({
  children,
  className,
  delay = 0,
  duration = 0.8,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion() === true;
  const hidden = reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0%)', y: 18 };
  const shown = { opacity: 1, clipPath: 'inset(-12% -8% -35% -8%)', y: 0 };
  const transition = {
    duration: reduce ? 0.35 : duration,
    delay: reduce ? 0 : delay,
    ease: EASE,
  };

  return (
    <motion.span
      className={cn('block px-[0.06em] pt-[0.12em] pb-[0.32em]', className)}
      initial={hidden}
      {...(immediate
        ? { animate: shown, transition }
        : {
            whileInView: shown,
            viewport: { once: true, margin: '-8% 0px' },
            transition,
          })}
    >
      {children}
    </motion.span>
  );
}

export function RevealImage({
  children,
  className,
  delay = 0,
  duration = 1.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion() === true;
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 1.04 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: reduce ? 0.35 : duration, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function DrawLine({
  d,
  delay = 0,
  className,
}: {
  d: string;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion() === true;
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 0.7 : 0 }}
      whileInView={{ pathLength: 1, opacity: 0.7 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.9, delay: reduce ? 0 : delay, ease: EASE }}
    />
  );
}

export function CampaignImage({
  name,
  alt,
  className,
  priority = false,
  folder = 'home',
  src,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  folder?: string;
  src?: string;
}) {
  return (
    <picture className="block h-full w-full">
      {src ? null : <source srcSet={`/images/${folder}/${name}.webp`} type="image/webp" />}
      <img
        src={src ?? `/images/${folder}/${name}.jpg`}
        alt={alt}
        className={cn('h-full w-full object-cover', className)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        draggable={false}
      />
    </picture>
  );
}

export function ArchImage({
  name,
  alt,
  className,
  folder = 'home',
}: {
  name: string;
  alt: string;
  className?: string;
  folder?: string;
}) {
  const reduce = useReducedMotion() === true;
  return (
    <motion.div
      className={cn('h-full w-full overflow-hidden', className)}
      style={{ clipPath: 'url(#whc-arch)' }}
      initial={reduce ? { opacity: 0 } : { y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: reduce ? 0.35 : 1.1, ease: EASE }}
    >
      <CampaignImage folder={folder} name={name} alt={alt} className="scale-[1.02]" />
    </motion.div>
  );
}

export function ArchReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion() === true;
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { clipPath: 'inset(18% 8% 0% 8% round 200px)', opacity: 0.6 }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0% round 0px)', opacity: 1 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: reduce ? 0.35 : 1.2, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function OrganicTransition({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: MotionStyle;
}) {
  return (
    <motion.div className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function Magnetic({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() === true;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.35 });

  return (
    <motion.div
      ref={ref}
      className={cn('inline-flex', className)}
      style={reduce ? undefined : { x: springX, y: springY }}
      onPointerMove={(event) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.42);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function usePointerShift(max = 3) {
  const reduce = useReducedMotion() === true;
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2 * max;
        const y = (event.clientY / window.innerHeight - 0.5) * 2 * max;
        setShift({ x, y });
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('pointermove', onMove);
    };
  }, [max, reduce]);

  return reduce ? { x: 0, y: 0 } : shift;
}
