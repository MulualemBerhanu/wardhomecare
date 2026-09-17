import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export default function Approach() {
  return (
    <>
      <SEO 
        title="Our Approach" 
        description="Discover ULeadRTH's interconnected whole-person support model, designed for practical independence." 
      />
      
      <PageHeader 
        title="Everything is Connected" 
        eyebrow="The ULeadRTH Approach"
        description="A person is more than any one part of their story. Our approach brings the everyday, the emotional, and the social into the same thoughtful picture."
        image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 lg:py-40 bg-paper text-ink overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center lg:justify-start">
              {/* Responsive abstract structural diagram */}
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto">
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-sand flex flex-col items-center justify-center text-center p-4 sm:p-6 z-20 border border-sand-light shadow-2xl">
                  <span className="font-serif text-xl sm:text-2xl text-ink leading-tight">The Whole<br />Person</span>
                </div>
                
                {/* Connecting lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border-[1px] border-dashed border-ink/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border-[1px] border-ink/10" />
                
                {/* Nodes - positioned responsively to avoid clipping on small screens */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-paper border border-clay/30 px-4 py-2 sm:px-6 sm:py-4 z-30 shadow-lg text-center whitespace-nowrap">
                  <div className="text-clay text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1">The Practical</div>
                  <div className="font-serif text-lg sm:text-xl">Daily Life</div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-paper border border-moss/30 px-4 py-2 sm:px-6 sm:py-4 z-30 shadow-lg text-center whitespace-nowrap">
                  <div className="text-moss text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1">The Shared</div>
                  <div className="font-serif text-lg sm:text-xl">Belonging</div>
                </div>
                
                <div className="absolute top-1/2 right-0 translate-x-4 sm:translate-x-1/2 -translate-y-1/2 bg-paper border border-ink/10 px-4 py-2 sm:px-6 sm:py-4 z-30 shadow-lg text-center whitespace-nowrap">
                  <div className="text-ink-soft text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1">The Becoming</div>
                  <div className="font-serif text-lg sm:text-xl">Confidence</div>
                </div>
                
                <div className="absolute top-1/2 left-0 -translate-x-4 sm:-translate-x-1/2 -translate-y-1/2 bg-paper border border-ink/10 px-4 py-2 sm:px-6 sm:py-4 z-30 shadow-lg text-center whitespace-nowrap">
                  <div className="text-ink-soft text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-1">The Inward</div>
                  <div className="font-serif text-lg sm:text-xl">Wellbeing</div>
                </div>
              </div>
            </div>

            <div className="max-w-xl">
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                Recognizing the big picture.
              </h2>
              <div className="space-y-6 text-lg text-ink-soft leading-relaxed">
                <p>
                  A person's physical environment affects their sense of calm. Their social connections impact their willingness to explore. Their ability to manage daily routines can build the confidence needed for broader steps.
                </p>
                <p>
                  By creating an integrated environment that considers these elements together, we aim to provide a foundation that supports holistic personal growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-paper">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <h2 className="font-sans font-bold tracking-widest text-sm uppercase text-clay-soft mb-6">Guiding Principles</h2>
            <p className="font-serif text-3xl lg:text-4xl leading-snug">
              How we translate philosophy into daily practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-20">
            <div className="border-t border-paper/20 pt-8">
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-sand">Environment Shapes Experience</h3>
              <p className="text-sand/70 leading-relaxed">
                We believe space matters deeply. Calm, beautiful, thoughtfully designed homes can communicate respect and foster peace, providing a supportive backdrop for daily life.
              </p>
            </div>
            
            <div className="border-t border-paper/20 pt-8">
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-sand">Rhythm over Rules</h3>
              <p className="text-sand/70 leading-relaxed">
                While maintaining a safe environment requires clear boundaries, we emphasize natural daily routines—morning coffee, community dinners, quiet evenings—rather than rigid institutional schedules.
              </p>
            </div>
            
            <div className="border-t border-paper/20 pt-8">
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-sand">Choice and Agency</h3>
              <p className="text-sand/70 leading-relaxed">
                We actively seek to embed choice into daily life, inviting individuals to participate in decisions that affect them and their living environment.
              </p>
            </div>
            
            <div className="border-t border-paper/20 pt-8">
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-sand">Doing With, Not For</h3>
              <p className="text-sand/70 leading-relaxed">
                Our approach emphasizes working alongside individuals. Whether preparing a meal or organizing a schedule, the goal is to offer support that encourages practical capability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
