import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { BookOpen, MapPin, Phone } from 'lucide-react';

export default function Resources() {
  return (
    <>
      <SEO 
        title="Resources & Support" 
        description="Helpful information and external resources for individuals seeking support." 
      />
      
      <PageHeader 
        title="Information & Support" 
        eyebrow="Resources"
        description="Finding the right support can be overwhelming. Below are general national resources and notes on materials we may publish later."
      />

      <section className="py-32 lg:py-48 bg-paper text-ink min-h-[50vh]">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            
            <StaggerItem>
              <div className="bg-sand-light p-12 h-full border border-sand">
                <div className="w-12 h-12 bg-paper flex items-center justify-center text-clay mb-8 rounded-full">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl mb-6 tracking-tight">Crisis Support</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg mb-6">
                  ULeadRTH is not a crisis center. If you or a loved one are experiencing an immediate medical or psychiatric emergency, please use these national resources.
                </p>
                <ul className="space-y-4 text-ink-soft font-light">
                  <li>
                    <a href="tel:988" className="text-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm">
                      <strong>988</strong>
                    </a>
                    {' '}— National Suicide &amp; Crisis Lifeline
                  </li>
                  <li>
                    <a href="tel:911" className="text-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm">
                      <strong>911</strong>
                    </a>
                    {' '}— Emergency Services
                  </li>
                  <li>
                    <a href="sms:741741?body=HOME" className="text-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 rounded-sm">
                      <strong>Text HOME to 741741</strong>
                    </a>
                    {' '}— Crisis Text Line
                  </li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-sand-light p-12 h-full border border-sand">
                <div className="w-12 h-12 bg-paper flex items-center justify-center text-moss mb-8 rounded-full">
                  <BookOpen size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl mb-6 tracking-tight">Educational Reading</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg mb-6">
                  Curated reading lists are not published yet. When available, they may cover topics such as:
                </p>
                <ul className="space-y-2 text-ink-soft font-light">
                  <li>• The impact of environment on well-being</li>
                  <li>• Building sustainable habits and routines</li>
                  <li>• Supporting family dynamics during transitions</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-sand-light p-12 h-full border border-sand">
                <div className="w-12 h-12 bg-paper flex items-center justify-center text-clay mb-8 rounded-full">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl mb-6 tracking-tight">Local Guidance</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg mb-6">
                  A local area guide is not available yet. Once a location is confirmed, future materials may include nearby parks, libraries, transit options, and quiet community spaces.
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
