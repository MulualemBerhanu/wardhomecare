import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/motion';

export default function Approach() {
  return (
    <>
      <SEO 
        title="Our Approach" 
        description="Discover how ULeadRTH's approach to residential care balances autonomy with supportive structure." 
      />
      
      <PageHeader 
        title="Dignity & Structure" 
        eyebrow="Our Approach"
        description="We replace institutional rigidity with thoughtful, individualized rhythms, creating an environment where true progress becomes possible."
        image="/images/approach.jpg"
      />

      <section className="py-32 lg:py-48 bg-paper text-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <Reveal className="lg:col-span-4 sticky top-40 h-fit">
              <div className="font-sans font-medium tracking-[0.2em] text-[10px] uppercase text-clay">
                The Methodology
              </div>
            </Reveal>
            
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <h2 className="font-serif text-4xl lg:text-6xl mb-12 leading-[1.05] tracking-tight">
                  Autonomy is not abandoned at the door.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="space-y-8 text-xl font-light text-ink-soft leading-relaxed">
                <p>
                  Many traditional care environments rely on compliance and control. We believe that lasting stability is built through collaboration.
                </p>
                <p>
                  Our approach centers on establishing a "holding environment"—a psychological and physical space that feels safe enough to tolerate the discomfort of growth. Structure is intended as a scaffold, not a cage.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-48 bg-sand-light text-ink">
        <div className="container-wide">
          <Reveal className="mb-24 lg:mb-32">
            <h2 className="font-serif text-5xl lg:text-7xl tracking-tight leading-[1.05] text-center">
              The Three Pillars
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <Reveal yOffset={40}>
              <div className="bg-paper p-12 h-full border-t border-clay/30 hover:border-clay transition-colors duration-500">
                <h3 className="font-serif text-3xl mb-6">Environmental Calm</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg">
                  Physical surroundings deeply impact internal states. Our residence is intentionally designed to be calm, uncluttered, and aesthetically grounding, reducing sensory overwhelm.
                </p>
              </div>
            </Reveal>
            
            <Reveal yOffset={40} delay={0.1}>
              <div className="bg-paper p-12 h-full border-t border-moss/30 hover:border-moss transition-colors duration-500">
                <h3 className="font-serif text-3xl mb-6">Relational Consistency</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg">
                  Trust takes time. We prioritize consistent, reliable interactions. The goal is to create relationships where individuals feel seen and understood, not just managed.
                </p>
              </div>
            </Reveal>
            
            <Reveal yOffset={40} delay={0.2}>
              <div className="bg-paper p-12 h-full border-t border-clay/30 hover:border-clay transition-colors duration-500">
                <h3 className="font-serif text-3xl mb-6">Meaningful Rhythm</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg">
                  Structure is provided through the natural rhythms of a household—shared meals, household responsibilities, and quiet hours—rather than clinical programming schedules.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <section className="py-32 lg:py-48 bg-moss text-paper">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="font-serif text-4xl lg:text-6xl mb-12 leading-[1.05] tracking-tight text-balance">
                "We aim to create the space, structure, and companionship for each person to discover what moving forward can look like for them."
              </h2>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
