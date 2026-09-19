import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { Reveal, StaggerContainer, StaggerItem, ParallaxImage } from '@/components/ui/motion';

export default function Home() {
  return (
    <>
      <SEO 
        title="Residential Support & Supportive Care" 
        description="ULeadRTH provides residential support and a dignified environment for individuals seeking a path to greater independence." 
      />
      
      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-end pt-40 pb-24 lg:pt-56 lg:pb-32 bg-ink text-paper overflow-hidden selection:bg-clay selection:text-paper">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/hero.jpg"
            alt="Serene architectural interior"
            className="w-full h-full opacity-60"
            speed={0.15}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 w-full">
          <div className="max-w-6xl">
            <Reveal yOffset={60} duration={1.2}>
              <div className="font-sans font-medium text-clay tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-10 flex items-center gap-6">
                <span>Residential Support</span>
                <span className="w-12 h-px bg-clay/50"></span>
                <span>A Human Place to Land</span>
              </div>
            </Reveal>
            
            <StaggerContainer delayChildren={0.4} staggerChildren={0.2} className="mb-16">
              <StaggerItem>
                <h1 className="font-serif text-[4rem] sm:text-[5.5rem] lg:text-[8rem] xl:text-[9.5rem] leading-[0.9] tracking-tight text-balance">
                  A place to heal.
                </h1>
              </StaggerItem>
              <StaggerItem>
                <h1 className="font-serif text-[4rem] sm:text-[5.5rem] lg:text-[8rem] xl:text-[9.5rem] leading-[0.9] tracking-tight text-sand italic">
                  A path to move forward.
                </h1>
              </StaggerItem>
            </StaggerContainer>
            
            <Reveal delay={1} yOffset={30} duration={1}>
              <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24">
                <p className="font-sans text-lg lg:text-xl text-paper/80 leading-relaxed max-w-md font-light">
                  Supportive residential care designed around the person—not just a program. An environment built on dignity, autonomy, and quiet strength.
                </p>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-4 text-paper group pb-3 border-b border-paper/30 hover:border-paper transition-all duration-500 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-sm"
                >
                  <span className="font-sans font-medium tracking-[0.2em] text-[11px] uppercase">Discover ULeadRTH</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro Editorial */}
      <section className="py-32 lg:py-48 bg-paper text-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-40">
              <div className="font-sans text-clay font-medium tracking-[0.2em] text-[10px] uppercase mb-8">
                The ULeadRTH Approach
              </div>
              <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-8">
                Room to be <br/><i className="text-moss">fully human.</i>
              </h2>
            </Reveal>
            
            <div className="lg:col-span-6 lg:col-start-7 text-lg lg:text-xl text-ink-soft leading-relaxed font-light">
              <Reveal delay={0.1}>
                <p className="font-serif text-3xl lg:text-4xl text-ink leading-snug mb-16 text-balance tracking-tight">
                  Support is not a destination. It is the feeling that you do not have to figure everything out alone.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="space-y-8">
                <p>
                  ULeadRTH provides a calm residential community for individuals seeking steadier, more independent lives. We aim to create the space, structure, and companionship for each person to discover what moving forward can look like for them.
                </p>
                <p>
                  Our environment is designed to offer stability without rigid institutional constraints, providing a dignified setting where connection and daily rhythms are central to the experience.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Image feature / Parallax */}
      <section className="py-24 bg-sand-light">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal className="lg:col-span-7 h-[60vh] lg:h-[90vh] overflow-hidden" yOffset={60} duration={1.2}>
              <ParallaxImage 
                src="/images/life.jpg" 
                alt="Tranquil courtyard" 
                speed={0.1}
              />
            </Reveal>
            <div className="lg:col-span-4 lg:col-start-9 py-16 lg:py-0 px-8 lg:px-0">
              <Reveal delay={0.2}>
                <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight mb-8 text-ink">
                  A home with <br/><i className="text-clay">room to grow.</i>
                </h2>
                <p className="text-lg text-ink-soft leading-relaxed mb-12 font-light">
                  There is a particular kind of comfort in ordinary moments: sunlight in the kitchen, a shared meal, a quiet afternoon. Meaningful support is often found in the simple rhythms of daily life.
                </p>
                <Link 
                  href="/life-at-uleadrth"
                  className="link-editorial text-[11px] font-medium tracking-[0.2em] uppercase text-ink pb-2"
                >
                  Experience Life Here <span className="ml-2">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Asymmetric Grid */}
      <section className="py-32 lg:py-48 bg-paper text-ink relative border-t border-ink/5">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 lg:mb-40 gap-10">
              <h2 className="font-serif text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
                Care centered around the <i className="text-moss">whole person.</i>
              </h2>
              <Link 
                href="/services"
                className="hidden md:inline-flex items-center gap-4 text-[11px] font-medium tracking-[0.2em] uppercase group"
              >
                <span className="link-editorial pb-2">Explore our support</span>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-0">
            {/* 01 */}
            <div className="md:col-span-5 lg:pr-16 md:mt-24">
              <Reveal yOffset={40}>
                <div className="text-clay font-serif text-3xl italic mb-6">01</div>
                <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">Daily Living</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg">
                  Support with the rhythms that make a home feel comfortable. From preparing a meal to managing a schedule, everyday routines can become steady building blocks.
                </p>
              </Reveal>
            </div>
            
            {/* 02 */}
            <div className="md:col-span-5 md:col-start-7 lg:col-start-8 lg:pl-16">
              <Reveal delay={0.2} yOffset={40}>
                <div className="text-clay font-serif text-3xl italic mb-6">02</div>
                <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">Wellness Rhythms</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg">
                  Space to notice what helps, and practice it with encouragement. This may include exploring restorative routines, creative interests, and movement.
                </p>
              </Reveal>
            </div>
            
            {/* Image intersecting */}
            <div className="md:col-span-6 md:col-start-4 my-16 lg:my-32 aspect-square lg:aspect-[4/3] overflow-hidden">
              <Reveal delay={0.1} yOffset={80} duration={1.2} className="h-full">
                <ParallaxImage 
                  src="/images/approach.jpg" 
                  alt="Beautiful dining setting" 
                  speed={0.15} 
                />
              </Reveal>
            </div>

            {/* 03 */}
            <div className="md:col-span-5 md:col-start-2 lg:col-start-3 lg:pr-16">
              <Reveal yOffset={40}>
                <div className="text-clay font-serif text-3xl italic mb-6">03</div>
                <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">Community</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg">
                  A welcoming home base for connection. Shared meals and time spent alongside others can offer gentle opportunities to build confidence.
                </p>
              </Reveal>
            </div>
          </div>
          
          <div className="mt-20 md:hidden flex justify-start">
            <Link 
              href="/services"
              className="inline-flex items-center gap-4 text-[11px] font-medium tracking-[0.2em] uppercase group"
            >
              <span className="link-editorial pb-2">Explore our support</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 lg:py-48 bg-moss text-paper selection:bg-paper selection:text-moss">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="font-serif text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-10 text-balance">
              Every person deserves an opportunity to move forward.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg lg:text-xl text-paper/80 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              If you are looking for a residential environment that honors dignity and supports practical independence, we welcome a conversation.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-4 bg-paper text-moss px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-paper-bright hover:scale-105 transition-all duration-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-4 focus-visible:ring-offset-moss shadow-xl shadow-ink/10"
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
