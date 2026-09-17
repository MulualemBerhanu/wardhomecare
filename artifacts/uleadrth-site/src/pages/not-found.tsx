import { SEO } from '@/components/SEO';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for cannot be found." 
        noindex
      />
      
      <section className="min-h-[80vh] flex items-center justify-center bg-paper text-ink pt-32 pb-24">
        <div className="container-narrow text-center">
          <div className="font-sans font-bold tracking-widest text-sm uppercase text-clay mb-6">
            Error 404
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl mb-8">
            Page Not Found
          </h1>
          <p className="text-xl text-ink-soft mb-12 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            href="/"
            className="bg-ink text-paper px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-clay transition-colors duration-300 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
    </>
  );
}
