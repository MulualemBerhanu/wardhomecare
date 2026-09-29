import { motion, useScroll, useTransform, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  yOffset = 40,
  className,
  once = true,
  ...props 
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: [0.19, 1.0, 0.22, 1.0] 
      }}
      className={cn("reveal", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.1,
  className,
  once = true,
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, yOffset = 30 }: { children: ReactNode, className?: string, yOffset?: number }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset },
        show: { 
          opacity: 1, 
          y: 0,
          transition: { duration: shouldReduceMotion ? 0.1 : 0.8, ease: [0.19, 1.0, 0.22, 1.0] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: number; // 0 to 1
}

export function ParallaxImage({ src, alt, className, imageClassName, speed = 0.2 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    shouldReduceMotion ? ["0%", "0%"] : [`-${speed * 100}%`, `${speed * 100}%`]
  );

  return (
    <div ref={ref} className={cn("overflow-hidden relative", className)}>
      <motion.img
        style={shouldReduceMotion ? {} : { y, scale: 1 + speed }}
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover origin-center", imageClassName)}
      />
    </div>
  );
}
