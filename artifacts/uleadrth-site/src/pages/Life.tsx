import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, ParallaxImage, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export default function Life() {
  return (
    <>
      <SEO 
        title="Life at ULeadRTH" 
        description="Experience the daily rhythms, environment, and community at ULeadRTH." 
      />
      
      <PageHeader 
        title="Life at ULeadRTH" 
        eyebrow="The Environment"
        description="An illustration of the calm, everyday rhythm ULeadRTH is being designed to support."
        image="/images/life.jpg"
      />

      <section className="py-32 lg:py-48 bg-paper text-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 lg:mb-48">
            <div className="order-2 lg:order-1">
              <Reveal>
                <h2 className="font-serif text-4xl lg:text-6xl mb-8 leading-[1.05] tracking-tight">
                  Mornings
                </h2>
                <div className="space-y-6 text-xl font-light text-ink-soft leading-relaxed">
                  <p>
                    The intended environment favors a gentle start to the day, with space for personal routines and an unhurried transition into shared activity.
                  </p>
                  <p>
                    A morning might include quiet reading, a walk, or preparing breakfast. These examples illustrate the design philosophy rather than a guaranteed schedule or facility.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="order-1 lg:order-2 h-[50vh] lg:h-[70vh] overflow-hidden">
              <Reveal yOffset={60} duration={1.2} className="h-full">
                <ParallaxImage 
                  src="/images/approach.jpg" 
                  alt="Calm residential interior with soft natural light" 
                  speed={0.1}
                />
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="h-[50vh] lg:h-[70vh] overflow-hidden">
              <Reveal yOffset={60} duration={1.2} className="h-full">
                <ParallaxImage 
                  src="/images/about.jpg" 
                  alt="Comfortable living space with natural light" 
                  speed={0.1}
                />
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h2 className="font-serif text-4xl lg:text-6xl mb-8 leading-[1.05] tracking-tight">
                  Afternoons & Evenings
                </h2>
                <div className="space-y-6 text-xl font-light text-ink-soft leading-relaxed">
                  <p>
                    Afternoons could balance personal goals, practical activity, and rest. The aim is to create room for progress without treating every hour as a formal appointment.
                  </p>
                  <p>
                    Evenings are imagined as lower-pressure moments for connection and quiet. Final routines and activities will depend on the completed operating model.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-48 bg-ink text-paper">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <StaggerItem>
              <div className="text-clay font-serif italic text-3xl mb-8">The Physical Space</div>
              <p className="text-paper/80 leading-relaxed font-light text-lg">
                 The design concept prioritizes a balance between personal space and welcoming shared areas, using natural materials and calm lighting as guiding ideas.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-clay font-serif italic text-3xl mb-8">Culinary Experience</div>
              <p className="text-paper/80 leading-relaxed font-light text-lg">
                 Shared food preparation is one possible way to support practical confidence and connection. Final meal arrangements have not yet been published.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-clay font-serif italic text-3xl mb-8">Technology</div>
              <p className="text-paper/80 leading-relaxed font-light text-lg">
                 The intended environment leaves room for thoughtful technology habits and periods of undistracted connection. Final household expectations have not yet been published.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
