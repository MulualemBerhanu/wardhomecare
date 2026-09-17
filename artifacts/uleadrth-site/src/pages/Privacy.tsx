import { SEO } from '@/components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Privacy policy and data handling information for ULeadRTH." 
      />
      
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 bg-paper text-ink min-h-screen">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl lg:text-5xl mb-12">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl prose-p:text-ink-soft max-w-none">
            <div className="bg-sand p-6 mb-10 text-sm border-l-4 border-clay">
              <strong>Notice:</strong> This is a preliminary policy document. Final operational, communication, and data retention policies will be published before the official launch.
            </div>

            <p>Draft status: final review date will be published before launch.</p>

            <h2>1. Our Approach to Privacy</h2>
            <p>
              At ULeadRTH, we respect the privacy of our website visitors. This policy outlines general practices regarding information collected through our public website.
            </p>

            <h2>2. Information Collection</h2>
            <p>We may collect information when you use our website, such as:</p>
            <ul>
              <li><strong>Inquiry Details:</strong> Information submitted voluntarily through our contact forms, such as name and contact preferences, to facilitate an initial conversation.</li>
              <li><strong>Usage Data:</strong> General, non-identifiable information about how visitors navigate our site to help us improve the website experience.</li>
            </ul>

            <h2>3. Use of Information</h2>
            <p>Information submitted through our site is used to:</p>
            <ul>
              <li>Respond to inquiries and share information about our environment.</li>
              <li>Initiate preliminary discussions regarding potential support fit.</li>
            </ul>
            <p><strong>We do not sell your personal information to third parties.</strong></p>

            <h2>4. Sensitive Information</h2>
            <p>
              Our public website contact forms are for general inquiries only. Please do not submit sensitive medical histories or clinical records through the website. Any necessary documentation will be requested through appropriate channels if the admissions process proceeds.
            </p>

            <h2>5. Contact Information</h2>
            <p>
              Full organizational contact details, including designated communication channels for privacy-related inquiries, will be published here prior to launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
