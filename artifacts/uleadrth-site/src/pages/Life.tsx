import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export default function Life() {
  return (
    <>
      <SEO 
        title="Life at ULeadRTH" 
        description="Experience the day-to-day rhythms of ULeadRTH's residential community. A home focused on connection, calm, and practical living." 
      />
      
      <PageHeader 
        title="A Home with Room to Grow" 
        eyebrow="Life Here"
        description="There is a particular kind of care in ordinary moments: music in the kitchen, sunlight on the table, a walk that takes the long way home."
        image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 bg-paper text-ink border-b border-ink/5">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl leading-tight mb-8">
              We focus on the simple, meaningful stuff.
            </h2>
            <p className="text-lg lg:text-xl text-ink-soft leading-relaxed text-balance">
              Life at ULeadRTH doesn't look like a treatment facility; it looks like a home. 
              The environment is intentionally calm, the pace is gentle, and the focus is on discovering a rhythm that feels sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Rhythms of the Day */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="container-wide">
          <h2 className="font-sans font-bold tracking-widest text-sm uppercase text-clay mb-16 text-center">
            Rhythms of the Day
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-paper p-10 flex flex-col h-full">
              <h3 className="font-serif text-3xl mb-6">Mornings</h3>
              <p className="text-ink-soft leading-relaxed mb-8 flex-grow">
                Mornings are slow and intentional. Residents wake at their own pace. The kitchen is open for coffee and breakfast. Staff are available to help organize the day, plan activities, or offer gentle encouragement for personal routines.
              </p>
              <div className="w-12 h-px bg-clay/40 mt-auto"></div>
            </div>
            
            <div className="bg-paper p-10 flex flex-col h-full">
              <h3 className="font-serif text-3xl mb-6">Afternoons</h3>
              <p className="text-ink-soft leading-relaxed mb-8 flex-grow">
                The middle of the day varies by person. Some may attend external therapy, go to school, or volunteer. Others might focus on life skills, spend time in the garden, engage in creative projects, or participate in community outings.
              </p>
              <div className="w-12 h-px bg-moss/40 mt-auto"></div>
            </div>
            
            <div className="bg-paper p-10 flex flex-col h-full">
              <h3 className="font-serif text-3xl mb-6">Evenings</h3>
              <p className="text-ink-soft leading-relaxed mb-8 flex-grow">
                Evenings center around connection. We prepare and share a meal together. Afterward, the house winds down—perhaps watching a movie, playing a game, reading, or simply enjoying the quiet structure of a safe environment before rest.
              </p>
              <div className="w-12 h-px bg-ink/20 mt-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Layout */}
      <section className="py-24 lg:py-40 bg-paper">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center mb-16">
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] w-full bg-sand overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200" 
                  alt="A sunlit kitchen prepared for making a meal" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <h3 className="font-serif text-3xl lg:text-4xl mb-6">Shared Spaces</h3>
              <p className="text-ink-soft text-lg leading-relaxed">
                The heart of our home is in the communal areas. Kitchens designed for cooking together, living rooms built for real conversation, and outdoor spaces that offer a breath of fresh air. Everything is kept clean, bright, and deeply comfortable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
              <h3 className="font-serif text-3xl lg:text-4xl mb-6">Private Retreats</h3>
              <p className="text-ink-soft text-lg leading-relaxed">
                While community is healing, privacy is essential. Bedrooms are personal sanctuaries—quiet, secure, and respectful of individual space. We encourage residents to bring items that make their room feel uniquely their own.
              </p>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="relative aspect-[4/3] w-full bg-sand overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200" 
                  alt="A comfortable, well-lit bedroom with minimal, calm decor" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
