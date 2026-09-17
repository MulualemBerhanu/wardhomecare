import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { ArrowDown } from 'lucide-react';

const services = [
  {
    id: "residential",
    title: "Residential Support",
    description: "A stable, dignified living environment designed for practical growth and comfort.",
    details: [
      "Comfortable, intentionally designed shared and private living spaces",
      "Nutritious meals prepared and shared in community",
      "Supportive staff presence to assist with daily rhythms",
      "Assistance with establishing personal routines",
      "Household activities that foster practical independence"
    ]
  },
  {
    id: "wellness",
    title: "Daily Life Skills",
    description: "Practical support for building a meaningful, sustainable daily rhythm.",
    details: [
      "Gentle encouragement for personal care and household responsibilities",
      "Support with scheduling, budgeting, and organizational tasks",
      "Opportunities for movement and connection with nature",
      "Creative expression and skill-building activities",
      "Exploration of local community resources and transportation"
    ]
  },
  {
    id: "community",
    title: "Community Connection",
    description: "Fostering a sense of belonging within the home and the broader neighborhood.",
    details: [
      "Shared meals and group activities",
      "Supported outings to local parks, cafes, and community spaces",
      "Opportunities for social connection and peer support",
      "Assistance in exploring volunteer or educational interests",
      "Recreational activities that build confidence"
    ]
  }
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Services & Support" 
        description="Information about ULeadRTH's residential support, life skills guidance, and community connection." 
      />
      
      <PageHeader 
        title="Support, Your Way" 
        eyebrow="Our Services"
        description="Our support is practical, personal, and shaped around real life."
        image="https://images.unsplash.com/photo-1505362116035-7177741d4021?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 bg-paper text-ink border-b border-ink/5">
        <div className="container-wide">
          <div className="max-w-3xl text-2xl lg:text-3xl font-serif leading-snug text-balance">
            We provide a steady home base so individuals can build the life they want. Support looks different for everyone, and our environment is designed to be responsive to personal needs.
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-paper">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="font-sans font-bold tracking-widest text-sm uppercase text-clay mb-8">What Support May Include</h2>
                <nav className="flex flex-col gap-4">
                  {services.map(s => (
                    <a 
                      key={s.id} 
                      href={`#${s.id}`}
                      className="text-ink-soft hover:text-ink font-serif text-xl lg:text-2xl transition-colors border-b border-ink/10 pb-4 inline-flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm"
                    >
                      {s.title}
                      <ArrowDown size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-32">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  <div className="text-clay font-sans font-bold tracking-widest text-xs uppercase mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-4xl lg:text-5xl mb-6">{service.title}</h3>
                  <p className="text-xl text-ink-soft leading-relaxed mb-10 text-balance">
                    {service.description}
                  </p>
                  
                  <div className="bg-sand/30 p-8 lg:p-12">
                    <h4 className="font-sans font-bold tracking-widest text-sm uppercase text-ink mb-8 border-b border-ink/10 pb-4">
                      Potential Elements
                    </h4>
                    <ul className="space-y-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-clay mt-2.5 flex-shrink-0" />
                          <span className="text-ink-soft leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-moss text-paper">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-4xl mb-6">Our Role in Care</h2>
          <p className="text-lg text-paper/90 leading-relaxed text-balance">
            ULeadRTH provides residential, environmental, and practical life support. We are not a clinical or medical facility. Our focus is on daily living and environmental stability, offering a steady home base that can complement any external providers or clinical care an individual may choose to utilize.
          </p>
        </div>
      </section>
    </>
  );
}
