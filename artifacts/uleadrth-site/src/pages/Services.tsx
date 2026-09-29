import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export default function Services() {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Comprehensive residential support focused on practical independence and personal dignity." 
      />
      
      <PageHeader 
        title="Residential Support" 
        eyebrow="Services"
        description="Our developing model considers how practical routines, a thoughtful environment, and respectful support can work together."
      />

      <section className="py-32 lg:py-48 bg-paper text-ink">
        <div className="container-wide">
          <div className="max-w-4xl mb-24 lg:mb-32">
            <Reveal>
              <h2 className="font-serif text-4xl lg:text-6xl mb-8 leading-[1.05] tracking-tight">
                Support grounded in everyday reality.
              </h2>
              <p className="text-xl font-light text-ink-soft leading-relaxed">
                We are developing support around everyday life rather than a clinical schedule. The examples below describe the kinds of practical, social, and personal support the model may include.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-24">
            <StaggerItem>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">
                Daily Living Support
              </h3>
              <ul className="space-y-4 text-lg font-light text-ink-soft">
                <li>• Assistance with establishing morning and evening routines</li>
                <li>• Support with personal organization and room care</li>
                <li>• Meal preparation and culinary skill building</li>
                <li>• Guidance in managing personal schedules and appointments</li>
              </ul>
            </StaggerItem>

            <StaggerItem>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">
                Wellness & Rhythm
              </h3>
              <ul className="space-y-4 text-lg font-light text-ink-soft">
                <li>• Facilitation of restorative practices and gentle movement</li>
                <li>• Support in recognizing and navigating stress triggers</li>
                <li>• Space for creative expression and hobbies</li>
                <li>• Encouragement in building sustainable sleep hygiene</li>
              </ul>
            </StaggerItem>

            <StaggerItem>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">
                Community Integration
              </h3>
              <ul className="space-y-4 text-lg font-light text-ink-soft">
                <li>• Facilitated family communication and boundaries</li>
                <li>• Support in navigating social interactions within the house</li>
                <li>• Guided outings to build confidence in public spaces</li>
                <li>• Assistance exploring volunteer or educational opportunities</li>
              </ul>
            </StaggerItem>

            <StaggerItem>
              <h3 className="font-serif text-3xl lg:text-4xl mb-6 tracking-tight">
                Practical Independence
              </h3>
              <ul className="space-y-4 text-lg font-light text-ink-soft">
                <li>• Budgeting and financial organization support</li>
                <li>• Assistance with transportation planning</li>
                <li>• Collaborative goal setting and pacing</li>
                <li>• Transition planning for moving to greater independence</li>
              </ul>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 lg:py-48 bg-sand-light">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-[1.05] tracking-tight">
              A Note on Scope of Practice
            </h2>
            <div className="space-y-6 text-lg font-light text-ink-soft leading-relaxed text-left">
              <p>
                 ULeadRTH is presented here as a residential support concept rather than a medical or emergency service. Final service capabilities and boundaries will be confirmed before launch.
              </p>
              <p>
                 Suitability, availability, and any coordination with outside professionals would need to be discussed individually once the operating model and enquiry process are finalized.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
