import { ReactNode, useEffect } from 'react';

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
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-ink text-paper overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover opacity-30 object-center" 
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        </div>
      )}
      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          {eyebrow && (
            <div className="font-sans font-bold text-clay-soft tracking-[0.2em] text-xs lg:text-sm uppercase mb-6 reveal">
              {eyebrow}
            </div>
          )}
          <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl leading-tight mb-8 reveal reveal-delay-1">
            {title}
          </h1>
          {description && (
            <p className="font-sans text-lg lg:text-xl text-sand/90 leading-relaxed max-w-2xl reveal reveal-delay-2 text-balance">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
