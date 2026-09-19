import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'wouter';

export default function FAQ() {
  const faqs = [
    {
      question: "Who is ULeadRTH designed for?",
      answer: "ULeadRTH is being developed for people exploring a structured, supportive residential environment focused on everyday routines, practical confidence, and greater independence. Final suitability criteria have not yet been published."
    },
    {
      question: "Is this a medical facility?",
      answer: "The website presents ULeadRTH as a residential support concept, not as an emergency service. Final clinical and non-clinical service boundaries will be published before launch."
    },
    {
      question: "What does a typical day look like?",
      answer: "The intended approach balances personal routines, practical goals, shared moments, and quiet time. Exact schedules and available activities will depend on the finalized operating model."
    },
    {
      question: "How long do people typically stay?",
      answer: "No standard length of stay is published yet. Any future timeline would depend on the finalized program and an individual conversation."
    },
    {
      question: "Are families involved in the process?",
      answer: "The intended model values respectful communication with chosen support networks. The exact process and privacy boundaries will be confirmed before launch."
    },
    {
      question: "Can residents leave the property?",
      answer: "Operating policies have not yet been published. Questions about autonomy, access, and community expectations will be answered once those policies are finalized."
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about ULeadRTH's residential support environment." 
      />
      
      <PageHeader 
        title="Common Questions" 
        eyebrow="FAQ"
      />

      <section className="py-32 lg:py-48 bg-paper text-ink min-h-[50vh]">
        <div className="container-narrow">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-ink/10 py-4"
                >
                  <AccordionTrigger className="text-xl lg:text-2xl font-serif text-left hover:no-underline hover:text-clay transition-colors data-[state=open]:text-clay font-normal tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-ink-soft font-light leading-relaxed pt-4 pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-24 text-center">
              <p className="text-xl text-ink-soft font-light mb-8">
                Have a question not answered here?
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-4 text-sm font-medium tracking-[0.16em] uppercase group"
              >
                <span className="link-editorial pb-2 text-ink">Reach out directly</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
