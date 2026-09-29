import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, ParallaxImage, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about ULeadRTH's mission, philosophy, and commitment to supportive residential care." 
      />
      
      <PageHeader 
        title="Our Mission & Philosophy" 
        eyebrow="About ULeadRTH"
        description="We believe that a supportive environment, clear structure, and compassionate presence can provide a strong foundation for personal growth."
        image="/images/about.jpg"
      />

      <section className="py-32 lg:py-48 bg-paper text-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <Reveal className="lg:col-span-4 sticky top-40 h-fit">
              <div className="font-sans font-medium tracking-[0.2em] text-[10px] uppercase text-clay">
                The Foundation
              </div>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6 max-w-3xl">
              <Reveal>
                <h2 className="font-serif text-4xl lg:text-6xl mb-12 leading-[1.05] tracking-tight">
                  Person-centered support is not a slogan. <i className="text-moss">It is a practice.</i>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="space-y-8 text-xl font-light text-ink-soft leading-relaxed">
                <p>
                  ULeadRTH is built on a simple conviction: individuals seeking a path to greater independence deserve an environment that honors their dignity. The vision is residential support that feels less like a facility and more like a home.
                </p>
                <p>
                  Rather than expecting individuals to fit into rigid institutional models, the model aims to shape support around daily rhythms, practical needs, and personal goals.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-48 bg-sand-light text-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 lg:mb-40">
            <Reveal className="lg:col-span-8">
              <h2 className="font-serif text-5xl lg:text-7xl tracking-tight leading-[1.05]">
                Our Core Values
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-4 flex items-end">
              <p className="text-ink-soft text-lg font-light">
                These principles guide our decisions and the culture we strive to cultivate.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-24">
            <StaggerItem>
              <div className="h-px w-full bg-clay/30 mb-8" />
              <div className="text-clay font-serif text-2xl italic mb-6">01.</div>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">Dignity in All Things</h3>
              <p className="text-ink-soft leading-relaxed font-light text-lg">
                We believe respect is foundational. This means honoring privacy, supporting agency, and communicating honestly. Our environment is designed to elevate rather than institutionalize.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="h-px w-full bg-moss/30 mb-8 md:mt-24" />
              <div className="text-moss font-serif text-2xl italic mb-6">02.</div>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">Stability as a Base</h3>
              <p className="text-ink-soft leading-relaxed font-light text-lg">
                Growth requires steady ground. We aim to provide consistent routines, reliable expectations, and calm surroundings so that individuals can focus on their next steps.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="h-px w-full bg-moss/30 mb-8" />
              <div className="text-moss font-serif text-2xl italic mb-6">03.</div>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">Connection over Isolation</h3>
              <p className="text-ink-soft leading-relaxed font-light text-lg">
                We foster natural opportunities for community—whether through shared meals, collaborative activities, or simple quiet presence alongside others.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="h-px w-full bg-clay/30 mb-8 md:mt-24" />
              <div className="text-clay font-serif text-2xl italic mb-6">04.</div>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">Patience with the Process</h3>
              <p className="text-ink-soft leading-relaxed font-light text-lg">
                Progress is rarely linear. We try to meet people where they are today, celebrating small steps and providing a supportive presence during setbacks.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 lg:py-48 bg-paper">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            <div className="order-2 lg:order-1 lg:col-span-4 lg:col-start-2 max-w-xl px-8 lg:px-0">
              <Reveal>
                <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight mb-10">
                  A commitment to thoughtful care.
                </h2>
                <div className="space-y-8 text-ink-soft leading-relaxed font-light text-lg">
                  <p>
                    While the concept emphasizes a non-institutional atmosphere, safety and supportive housing remain central design priorities.
                  </p>
                  <p>
                    The goal is genuine compassion with clear professional boundaries, and transparency so the environment can remain a positive space for everyone in the community.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
              <Reveal yOffset={60} duration={1.2}>
                <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
                  <ParallaxImage 
                    src="/images/approach.jpg" 
                    alt="Calm residential interior with soft natural light" 
                    speed={0.1}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
