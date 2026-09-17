import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

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
        image="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 lg:py-32 bg-paper text-ink">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-4 font-sans font-bold tracking-widest text-sm uppercase text-clay sticky top-32 h-fit">
              The Foundation
            </div>
            <div className="lg:col-span-8 max-w-3xl prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-h2:text-4xl prose-p:text-ink-soft prose-p:leading-relaxed">
              <h2>Person-centered support is not a slogan. It is a practice.</h2>
              <p>
                ULeadRTH was founded on a simple conviction: individuals seeking a path to greater independence deserve an environment that honors their dignity. We exist to provide residential support that feels less like a facility and more like a home.
              </p>
              <p>
                Rather than expecting individuals to fit into rigid institutional models, we aim to shape our support around the daily rhythms, practical needs, and personal goals of those in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-sand text-ink">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Our Core Values</h2>
            <p className="text-ink-soft text-lg">These principles guide our decisions and the culture we strive to cultivate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-paper p-12 lg:p-16 border-t-4 border-clay">
              <h3 className="font-serif text-3xl mb-6">Dignity in All Things</h3>
              <p className="text-ink-soft leading-relaxed">
                We believe respect is foundational. This means honoring privacy, supporting agency, and communicating honestly. Our environment is designed to elevate rather than institutionalize.
              </p>
            </div>
            <div className="bg-paper p-12 lg:p-16 border-t-4 border-moss">
              <h3 className="font-serif text-3xl mb-6">Stability as a Base</h3>
              <p className="text-ink-soft leading-relaxed">
                Growth requires steady ground. We aim to provide consistent routines, reliable expectations, and calm surroundings so that individuals can focus on their next steps.
              </p>
            </div>
            <div className="bg-paper p-12 lg:p-16 border-t-4 border-moss">
              <h3 className="font-serif text-3xl mb-6">Connection over Isolation</h3>
              <p className="text-ink-soft leading-relaxed">
                We foster natural opportunities for community—whether through shared meals, collaborative activities, or simple quiet presence alongside others.
              </p>
            </div>
            <div className="bg-paper p-12 lg:p-16 border-t-4 border-clay">
              <h3 className="font-serif text-3xl mb-6">Patience with the Process</h3>
              <p className="text-ink-soft leading-relaxed">
                Progress is rarely linear. We try to meet people where they are today, celebrating small steps and providing a supportive presence during setbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-paper">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 max-w-xl">
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                A commitment to thoughtful care.
              </h2>
              <div className="space-y-6 text-ink-soft leading-relaxed">
                <p>
                  While we emphasize a non-institutional atmosphere, we take our responsibility to provide a safe and supportive home seriously.
                </p>
                <p>
                  Our goal is to offer genuine compassion while maintaining professional boundaries, operating with transparency to ensure our environment remains a positive space for everyone in the community.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] bg-sand">
              <img 
                src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&q=80&w=1200" 
                alt="Close up of hands planting a small green plant in soil" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
