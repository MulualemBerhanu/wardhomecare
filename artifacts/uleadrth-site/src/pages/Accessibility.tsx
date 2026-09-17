import { SEO } from '@/components/SEO';

export default function Accessibility() {
  return (
    <>
      <SEO 
        title="Accessibility Statement" 
        description="ULeadRTH's commitment to digital accessibility and inclusive design." 
      />
      
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 bg-paper text-ink min-h-screen">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl lg:text-5xl mb-12">Accessibility Statement</h1>
          
          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl prose-p:text-ink-soft max-w-none">
            
            <p>
              At ULeadRTH, our core mission revolves around providing support that honors dignity and reduces barriers. We believe this commitment must extend to our digital presence. We are dedicated to ensuring our website is accessible to everyone, regardless of ability or technology.
            </p>

            <h2>Our Standards</h2>
            <p>
              We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. To achieve this, we have implemented the following features on this site:
            </p>
            <ul>
              <li><strong>Semantic HTML:</strong> Proper structural elements are used to ensure screen readers can accurately interpret page content and hierarchy.</li>
              <li><strong>Keyboard Navigation:</strong> All interactive elements, including menus and forms, are fully accessible using only a keyboard.</li>
              <li><strong>Visible Focus States:</strong> Clear visual indicators exist for keyboard users navigating the site.</li>
              <li><strong>Alt Text:</strong> Meaningful alternative text is provided for all essential images.</li>
              <li><strong>Color Contrast:</strong> Color palettes have been selected to ensure sufficient contrast between text and backgrounds.</li>
              <li><strong>Reduced Motion:</strong> The site respects operating system-level preferences for reduced motion, disabling non-essential animations when requested.</li>
              <li><strong>Clear Typography:</strong> We use legible fonts with appropriate sizing and line height.</li>
            </ul>

            <h2>Ongoing Effort</h2>
            <p>
              Digital accessibility is not a one-time project. ULeadRTH intends to review this site as content and services evolve and to address reported usability issues.
            </p>

            <h2>Feedback and Assistance</h2>
            <p>
              If you experience any difficulty accessing content on this website, or if you require information in an alternative format, we want to hear from you and are ready to assist.
            </p>
            <p className="mt-8 p-6 bg-sand border border-ink/10">
              <strong>Accessibility Contact:</strong><br />
              A dedicated email address and phone number for accessibility feedback will be published here before launch. Until then, the website contact form is a visual preview and does not transmit messages.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
