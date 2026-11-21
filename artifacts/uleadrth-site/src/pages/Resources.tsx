import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { BookOpen, MapPin, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { CONTACT } from '@/lib/brand';

export default function Resources() {
  return (
    <>
      <SEO 
        title="Resources & Support" 
        description="Helpful information and external resources related to residential support and crisis services." 
      />
      
      <PageHeader 
        title="Information & Support" 
        eyebrow="Resources"
        description="Finding the right support can feel overwhelming. Below are general national resources and ways to reach Ward Home Care."
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
                  Ward Home Care is not a crisis center. If you or a loved one are experiencing an immediate medical or psychiatric emergency, please use these national resources.
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
                <h3 className="font-serif text-3xl mb-6 tracking-tight">Referrals</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg mb-6">
                  We accept referrals through Marion County IDD. Admission decisions consider individual needs, preferences, home capacity, and applicable state requirements.
                </p>
                <Link href="/admissions" className="text-ink link-editorial pb-1 text-sm uppercase tracking-[0.16em]">
                  Admissions details
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-sand-light p-12 h-full border border-sand">
                <div className="w-12 h-12 bg-paper flex items-center justify-center text-clay mb-8 rounded-full">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl mb-6 tracking-tight">Main Office</h3>
                <p className="text-ink-soft leading-relaxed font-light text-lg mb-6">
                  {CONTACT.addressLines[0]}
                  <br />
                  {CONTACT.addressLines[1]}
                </p>
                <p className="text-ink-soft font-light mb-4">
                  <a href={CONTACT.emailHref} className="text-ink underline-offset-4 hover:underline">
                    {CONTACT.email}
                  </a>
                </p>
                <Link href="/connect" className="text-ink link-editorial pb-1 text-sm uppercase tracking-[0.16em]">
                  Connect with WHC
                </Link>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
