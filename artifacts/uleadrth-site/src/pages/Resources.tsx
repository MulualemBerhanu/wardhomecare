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
        description="Finding the right support can be overwhelming. We have compiled a list of general resources that may be helpful as you navigate your options."
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
                  <li><strong>988</strong> - National Suicide & Crisis Lifeline</li>
                  <li><strong>911</strong> - Emergency Services</li>
                  <li><strong>Text HOME to 741741</strong> - Crisis Text Line</li>
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
                  Understanding the journey of recovery and the importance of environment can be deeply validating.
                </p>
                <p className="text-ink-soft font-light text-lg mb-4">
                  We frequently recommend literature focusing on:
                </p>
                <ul className="space-y-2 text-ink-soft font-light">
                  <li>• The impact of environment on well-being</li>
                  <li>• Building sustainable habits and routines</li>
                  <li>• Navigating family dynamics during recovery</li>
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
                  For residents joining us, we provide a curated guide to the local area, including:
                </p>
                <ul className="space-y-2 text-ink-soft font-light">
                  <li>• Nearby parks and natural spaces</li>
                  <li>• Local libraries and community centers</li>
                  <li>• Public transportation options</li>
                  <li>• Quiet cafes and safe social environments</li>
                </ul>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
