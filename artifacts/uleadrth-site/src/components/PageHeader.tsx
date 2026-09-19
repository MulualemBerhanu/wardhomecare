import { useEffect } from 'react';
import { Reveal, ParallaxImage } from '@/components/ui/motion';

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  image?: string;
}

export function PageHeader({ title, eyebrow, description, image }: PageHeaderProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 bg-ink text-paper overflow-hidden selection:bg-clay selection:text-paper">
      {image && (
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={image}
            alt=""
            className="w-full h-full opacity-40"
            speed={0.15}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>
      )}
      <div className="container-wide relative z-10">
        <div className="max-w-5xl">
          {eyebrow && (
            <Reveal yOffset={20}>
              <div className="font-sans font-medium text-clay tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-10 flex items-center gap-6">
                <span>{eyebrow}</span>
                <span className="w-12 h-px bg-clay/50"></span>
              </div>
            </Reveal>
          )}
          <Reveal yOffset={40} delay={0.1}>
            <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-10 text-balance">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal yOffset={40} delay={0.2}>
              <p className="font-sans text-lg lg:text-xl text-paper/80 leading-relaxed max-w-2xl font-light text-balance">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
