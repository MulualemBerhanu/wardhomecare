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
import { CONTACT } from '@/lib/brand';

export default function FAQ() {
  const faqs = [
    {
      question: "Who does Ward Home Care serve?",
      answer: "Ward Home Care, Inc. (WHC) provides 24-hour residential services for adults with intellectual and developmental disabilities (I/DD), including those with co-occurring mental health needs."
    },
    {
      question: "Where are your homes located?",
      answer: "Our homes are in established Northeast Salem neighborhoods. Specific addresses are shared during the referral process for appropriate placement and admission discussions. The main office is at 4382 45th Avenue NE, Salem, Oregon."
    },
    {
      question: "How do referrals and admissions work?",
      answer: "Admission decisions are based on individual needs, person preferences, the home’s ability to provide appropriate services, and applicable state requirements. We accept referrals through Marion County IDD."
    },
    {
      question: "Do you provide 24-hour staffing?",
      answer: "Yes. Direct Support Professionals (DSPs) are on-site around the clock with awake overnight coverage."
    },
    {
      question: "Are you hiring?",
      answer: "Yes. WHC is hiring Direct Support Professionals. Review the Connect page for perks, applicant requirements, and how to introduce yourself."
    },
    {
      question: "How can I contact WHC?",
      answer: `You can reach Executive Director Abraham Zewoldie by email at ${CONTACT.email}, by phone at ${CONTACT.phones.cellPrimary} or ${CONTACT.phones.office}, or through the form on the Connect page.`
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about Ward Home Care’s 24-hour residential services in Salem, Oregon." 
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/connect"
                  className="inline-flex items-center justify-center bg-ink text-paper px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-clay transition-all duration-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
                >
                  Connect with us
                </Link>
                <Link 
                  href="/admissions"
                  className="inline-flex items-center justify-center border border-ink/20 text-ink px-10 py-5 text-[11px] font-medium tracking-[0.2em] uppercase hover:border-ink transition-all duration-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4"
                >
                  Admissions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
