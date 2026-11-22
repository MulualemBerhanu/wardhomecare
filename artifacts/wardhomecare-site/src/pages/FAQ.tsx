import { Link } from 'wouter';
import { SEO } from '@/components/SEO';
import { CurveDefs } from '@/components/home/curves';
import { PageProgress } from '@/components/home/experience';
import { PosterHero } from '@/components/home/PosterHero';
import { RevealText } from '@/components/home/motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CONTACT } from '@/lib/brand';

const QUESTIONS = [
  {
    question: 'Who does Ward Home Care serve?',
    answer:
      'Ward Home Care, Inc. (WHC) provides 24-hour residential services for adults with intellectual and developmental disabilities (I/DD), including those with co-occurring mental health needs.',
  },
  {
    question: 'Where are your homes located?',
    answer:
      'Our homes are in established Northeast Salem neighborhoods. Specific addresses are shared during the referral process for appropriate placement and admission discussions. The main office is at 4382 45th Avenue NE, Salem, Oregon.',
  },
  {
    question: 'How do referrals and admissions work?',
    answer:
      'Admission decisions are based on individual needs, person preferences, the home’s ability to provide appropriate services, and applicable state requirements. We accept referrals through Marion County IDD.',
  },
  {
    question: 'Do you provide 24-hour staffing?',
    answer: 'Yes. Direct Support Professionals (DSPs) are on-site around the clock with awake overnight coverage.',
  },
  {
    question: 'Are you hiring?',
    answer:
      'Yes. WHC is hiring Direct Support Professionals. The Careers page lists perks, applicant requirements, and the employment application.',
  },
  {
    question: 'How can I contact WHC?',
    answer: `You can reach Executive Director Abraham Zewoldie by email at ${CONTACT.email}, by cell phone at ${CONTACT.phones.cellPrimary} or ${CONTACT.phones.cellSecondary}, by home phone at ${CONTACT.phones.home}, or through the form on the Contact us page.`,
  },
] as const;

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about Ward Home Care’s 24-hour residential services in Salem, Oregon."
      />
      <PageProgress />
      <CurveDefs />
      <PosterHero
        label="FAQ"
        folder="life"
        name="window"
        alt="A trailing houseplant on a wooden windowsill beside sheer curtains"
        title={
          <>
            <RevealText immediate>Common</RevealText>
            <RevealText immediate delay={0.12} className="italic text-ivory">
              Questions
            </RevealText>
          </>
        }
      />
      <section className="bg-ivory pb-28 pt-8 text-ink lg:pb-40 lg:pt-12">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">From the office</p>
            <h2 className="mt-4 font-serif text-[clamp(36px,4vw,56px)] leading-[0.95] tracking-tight">
              <RevealText>A few answers,</RevealText>
              <RevealText delay={0.1} className="italic">
                plainly.
              </RevealText>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible>
              {QUESTIONS.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`} className="border-ink/10 py-2">
                  <AccordionTrigger className="py-5 font-serif text-2xl font-normal tracking-tight hover:no-underline hover:text-clay data-[state=open]:text-clay">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base font-light leading-relaxed text-ink-soft">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-14 text-base font-light leading-relaxed text-ink-soft">Have a question not answered here?</p>
            <div className="mt-6 flex flex-wrap gap-8">
              <Link href="/connect" className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] link-editorial pb-1">
                Contact us
              </Link>
              <Link href="/admissions" className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] link-editorial pb-1">
                Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
