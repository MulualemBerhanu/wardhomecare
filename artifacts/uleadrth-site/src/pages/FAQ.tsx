import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

const faqs = [
  {
    category: "About ULeadRTH",
    questions: [
      {
        q: "What kind of support does ULeadRTH provide?",
        a: "We provide supportive residential care and life-skills development in a home environment. We are not a medical or clinical facility. Our focus is on offering a dignified, structured setting to support individuals seeking greater independence."
      },
      {
        q: "Who might benefit from this environment?",
        a: "Our environment is designed for adults seeking a stable, supportive setting to practice daily living skills and build community. Details regarding specific support capabilities will be discussed during an initial inquiry to ensure our environment is a good fit."
      },
      {
        q: "What does a typical day look like?",
        a: "Days are designed to support a balanced rhythm. They may include shared meals, personal time, opportunities for life-skills practice, and engagement in the broader community. The rhythm is flexible to accommodate individual needs."
      }
    ]
  },
  {
    category: "Admissions & Fit",
    questions: [
      {
        q: "What is the admissions process?",
        a: "The process begins with an initial conversation to explore if our environment aligns with what you are looking for. We will discuss our support capabilities and gather information to mutually determine if ULeadRTH is a supportive fit."
      },
      {
        q: "What are the expectations for individuals living here?",
        a: "Because we offer an open, community-based setting, the environment is best suited for individuals who are prepared to engage voluntarily in a shared home and participate respectfully alongside others."
      },
      {
        q: "What are the costs and payment options?",
        a: "Financial details, including fee structures and potential funding options, are currently being finalized. We will share current operational details during an initial inquiry."
      }
    ]
  },
  {
    category: "Support & Family",
    questions: [
      {
        q: "How are families involved?",
        a: "We value the role of supportive relationships. We discuss communication preferences and family involvement on an individual basis, respecting privacy and personal boundaries."
      },
      {
        q: "Can individuals leave the property?",
        a: "ULeadRTH provides a supportive home base while encouraging individuals to engage in their broader community—such as attending work, school, or personal appointments—at a pace that feels right for them."
      },
      {
        q: "Do you provide clinical therapy?",
        a: "We focus on environmental and life-skills support rather than clinical therapy. Our care is intended to complement any external providers or therapists an individual may choose to work with."
      }
    ]
  }
];

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-ink/10 py-6">
      <button 
        className="w-full flex justify-between items-center text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 rounded-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-serif text-xl lg:text-2xl pr-8 group-hover:text-clay transition-colors">{question}</h3>
        <span className="flex-shrink-0 text-ink-soft">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-ink-soft text-lg leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Answers to common questions about ULeadRTH's residential support and care philosophy." 
      />
      
      <PageHeader 
        title="Common Questions" 
        eyebrow="FAQ"
        description="Clear information to help you understand our environment and approach."
      />

      <section className="py-24 lg:py-32 bg-paper text-ink">
        <div className="container-narrow">
          
          {faqs.map((category, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <h2 className="font-sans font-bold tracking-widest text-sm uppercase text-clay mb-8">
                {category.category}
              </h2>
              <div>
                {category.questions.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-24 p-10 bg-sand text-center">
            <h3 className="font-serif text-2xl mb-4">Have a different question?</h3>
            <p className="text-ink-soft mb-8 max-w-lg mx-auto">
              Every situation is unique. We are happy to discuss your specific circumstances and answer any questions not covered here.
            </p>
            <Link 
              href="/contact" 
              className="bg-ink text-paper px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-clay transition-colors duration-300 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
