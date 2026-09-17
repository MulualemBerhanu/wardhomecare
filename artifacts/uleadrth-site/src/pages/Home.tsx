import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO 
        title="Residential Support & Supportive Care" 
        description="ULeadRTH provides residential support and a dignified environment for individuals seeking a path to greater independence." 
      />
      
      {/* Hero */}
      <section className="relative min-h-[90dvh] flex items-end pt-40 pb-20 lg:pt-56 lg:pb-24 bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Sunlight streaming through trees in the Pacific Northwest" 
            className="w-full h-full object-cover opacity-40 object-center" 
            loading="eager"
            width="2000"
            height="1333"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-5xl">
            <div className="font-sans font-bold text-clay-soft tracking-[0.2em] text-xs lg:text-sm uppercase mb-8 reveal flex items-center gap-4">
              <span>Residential Support</span>
              <span className="w-8 h-px bg-clay-soft"></span>
              <span>A Human Place to Land</span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.95] mb-10 reveal reveal-delay-1 text-balance">
              A place to heal.<br />
              <span className="text-sand/80 italic">A path to move forward.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20 reveal reveal-delay-2">
              <p className="font-sans text-lg lg:text-xl text-sand/90 leading-relaxed max-w-md">
                Supportive residential care designed around the person—not just a program.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-4 text-paper group pb-2 border-b border-paper/30 hover:border-paper transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-4 focus-visible:ring-offset-ink rounded-sm"
              >
                <span className="font-sans font-bold tracking-widest text-sm uppercase">Discover ULeadRTH</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-40 bg-paper text-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8">
                Room to be fully human.
              </h2>
              <div className="font-sans text-clay font-bold tracking-widest text-sm uppercase">
                The ULeadRTH Approach
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 text-lg lg:text-xl text-ink-soft leading-relaxed">
              <p className="font-serif text-2xl lg:text-3xl text-ink leading-snug mb-10 text-balance">
                Support is not a destination. It is the feeling that you do not have to figure everything out alone.
              </p>
              <p className="mb-8">
                ULeadRTH provides a calm residential community for individuals seeking steadier, more independent lives. We aim to create the space, structure, and companionship for each person to discover what moving forward can look like for them.
              </p>
              <p>
                Our environment is designed to offer stability without rigid institutional constraints, providing a dignified setting where connection and daily rhythms are central to the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-24 lg:py-40 bg-sand text-ink border-y border-ink/5">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-16 lg:mb-24">
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-2xl">
              Care centered around the whole person.
            </h2>
            <div className="hidden lg:block w-32 h-px bg-clay"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <div className="group">
              <div className="text-clay font-sans font-bold tracking-widest text-xs uppercase mb-6">01</div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-6">Daily Living</h3>
              <p className="text-ink-soft leading-relaxed">
                Support with the rhythms that make a home feel comfortable. From preparing a meal to managing a schedule, everyday routines can become steady building blocks.
              </p>
            </div>
            
            <div className="group">
              <div className="text-clay font-sans font-bold tracking-widest text-xs uppercase mb-6">02</div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-6">Wellness Rhythms</h3>
              <p className="text-ink-soft leading-relaxed">
                Space to notice what helps, and practice it with encouragement. This may include exploring restorative routines, creative interests, and movement.
              </p>
            </div>
            
            <div className="group">
              <div className="text-clay font-sans font-bold tracking-widest text-xs uppercase mb-6">03</div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-6">Community</h3>
              <p className="text-ink-soft leading-relaxed">
                A welcoming home base for connection. Shared meals and time spent alongside others can offer gentle opportunities to build confidence.
              </p>
            </div>
          </div>
          
          <div className="mt-20 flex justify-center">
            <Link 
              href="/services"
              className="inline-flex items-center gap-4 text-ink group pb-2 border-b border-ink/30 hover:border-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm"
            >
              <span className="font-sans font-bold tracking-widest text-sm uppercase">Explore our support</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image feature */}
      <section className="py-24 lg:py-40 bg-paper">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] overflow-hidden bg-sand">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="A comfortable, sunlit interior space with plants and seating" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width="1200"
                height="1500"
              />
            </div>
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                A home with room to grow.
              </h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-10">
                There is a particular kind of comfort in ordinary moments: sunlight in the kitchen, a shared meal, a quiet afternoon. Meaningful support is often found in the simple rhythms of daily life.
              </p>
              <Link 
                href="/life-at-uleadrth"
                className="bg-ink text-paper px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-clay transition-colors duration-300 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm"
              >
                Experience Life Here
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-moss text-paper">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-8">
            Every person deserves an opportunity to move forward.
          </h2>
          <p className="text-lg lg:text-xl text-paper/90 mb-12 max-w-2xl mx-auto">
            If you are looking for a residential environment that honors dignity and supports practical independence, we welcome a conversation.
          </p>
          <Link 
            href="/contact"
            className="bg-paper text-ink px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-clay hover:text-paper transition-colors duration-300 inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-moss rounded-sm"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
