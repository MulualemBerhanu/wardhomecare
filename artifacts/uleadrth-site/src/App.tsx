import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Leaf, Menu, MoveUpRight, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

type Service = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

const services: Service[] = [
  {
    number: '01',
    title: 'Daily living',
    description: 'Support with the rhythms that make a home feel like yours.',
    detail: 'From making a meal to keeping a calendar, everyday routines can become steady, meaningful building blocks. We meet each person where they are and make room for their own pace.',
  },
  {
    number: '02',
    title: 'Wellness rhythms',
    description: 'Space to notice what helps, and practice it with support.',
    detail: 'Together, we can explore restorative routines, creative interests, movement, rest, and the small signals that help a person feel more grounded in a day.',
  },
  {
    number: '03',
    title: 'Community & connection',
    description: 'A welcoming home base for belonging beyond the front door.',
    detail: 'Connection can be quiet or full of conversation. Shared meals, local outings, and time spent alongside others all offer gentle opportunities to build confidence.',
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Brand() {
  return (
    <a className="brand" href="#top" data-testid="link-brand" aria-label="ULeadRTH home">
      <span className="brand-mark" aria-hidden="true"><Leaf /></span>
      <span>ULeadRTH</span>
    </a>
  );
}

function Header({ onConversation }: { onConversation: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="page-width nav-row">
        <Brand />
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          data-testid="button-toggle-menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#approach" onClick={(event) => { event.preventDefault(); navigate('approach'); }} data-testid="link-approach">Our approach</a>
          <a href="#services" onClick={(event) => { event.preventDefault(); navigate('services'); }} data-testid="link-services">Support, your way</a>
          <a href="#life" onClick={(event) => { event.preventDefault(); navigate('life'); }} data-testid="link-life">Life here</a>
          <button className="nav-cta" type="button" onClick={onConversation} data-testid="button-open-conversation">
            Start a conversation <ArrowUpRight size={14} aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-arrival" aria-hidden="true"><span>Take your time</span></div>
      <div className="hero-content">
        <div className="hero-kicker eyebrow reveal"><span>Residential support</span><span>—</span><span>A human place to land</span></div>
        <h1 id="hero-heading" className="font-display reveal delay-1" data-testid="text-hero-heading">
          A place to <em>heal.</em><br />A path to move<br /><em>forward.</em>
        </h1>
        <div className="hero-foot reveal delay-2">
          <p className="hero-support">Compassionate residential support designed around the person—not just the diagnosis.</p>
          <button className="hero-scroll" type="button" onClick={() => scrollToId('introduction')} data-testid="button-begin-exploring">
            Begin exploring <ArrowDown size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="section intro" id="introduction" aria-labelledby="intro-heading">
      <div className="page-width intro-grid">
        <div className="intro-copy">
          <div className="section-label eyebrow">01 / A different kind of care</div>
          <h2 id="intro-heading" data-testid="text-introduction-heading">Room to be<br /><em>fully</em> human.</h2>
        </div>
        <div>
          <p className="intro-lead">Support is not a destination. It is the feeling that you do not have to figure everything out alone.</p>
          <p className="intro-body">ULeadRTH is a calm residential community for people building steadier, more independent lives. We create the space, structure, and companionship for each person to discover what moving forward can look like for them.</p>
          <div className="intro-rule" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const nodes = [
    ['Daily life', 'the practical'],
    ['Wellbeing', 'the inward'],
    ['Belonging', 'the shared'],
    ['Confidence', 'the becoming'],
  ];

  return (
    <section className="section approach" id="approach" aria-labelledby="approach-heading">
      <div className="page-width approach-layout">
        <div>
          <div className="section-label eyebrow">02 / The whole person</div>
          <h2 id="approach-heading">Everything is <em>connected.</em></h2>
          <p className="approach-intro">A person is more than any one part of their story. Our approach brings the everyday, the emotional, and the social into the same thoughtful picture.</p>
        </div>
        <div className="approach-map" aria-label="Our interconnected support approach">
          <div className="orbit-line one" aria-hidden="true" />
          <div className="orbit-line two" aria-hidden="true" />
          <div className="orbit-line three" aria-hidden="true" />
          <div className="orbit-line four" aria-hidden="true" />
          <div className="person-orbit"><span>The person<br />at the centre</span></div>
          {nodes.map(([title, subtitle], index) => (
            <div key={title} className={`orbit-node ${['one', 'two', 'three', 'four'][index]}`} data-testid={`text-approach-${index}`}>
              <small>{subtitle}</small><span>{title}</span>
            </div>
          ))}
        </div>
        <p className="approach-note">A steady home base can make room for <span>small steps</span>, honest conversations, and a life that feels more like your own.</p>
      </div>
    </section>
  );
}

function Services() {
  const [openService, setOpenService] = useState<string | null>(null);
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">
      <div className="page-width">
        <div className="services-head">
          <div>
            <div className="section-label eyebrow">03 / Support, your way</div>
            <h2 id="services-heading">The shape of<br /><em>your days.</em></h2>
          </div>
          <p className="services-head-copy">Our support is practical, personal, and shaped around real life—not a fixed program.</p>
        </div>
        <div className="service-list">
          {services.map((service) => {
            const isOpen = openService === service.number;
            return (
              <article className="service-item" key={service.number} data-testid={`card-service-${service.number}`}>
                <div className="service-index">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  className="service-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`service-detail-${service.number}`}
                  onClick={() => setOpenService(isOpen ? null : service.number)}
                  data-testid={`button-service-${service.number}`}
                >
                  {isOpen ? <X size={18} /> : <ArrowUpRight size={18} />}
                  <span className="sr-only">{isOpen ? `Close ${service.title}` : `Learn more about ${service.title}`}</span>
                </button>
                {isOpen && <div className="service-detail" id={`service-detail-${service.number}`}>{service.detail}</div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Life() {
  return (
    <section className="section life" id="life" aria-labelledby="life-heading">
      <div className="page-width">
        <div className="life-header">
          <div>
            <div className="section-label eyebrow">04 / Life at ULeadRTH</div>
            <h2 id="life-heading">A home with<br /><em>room to grow.</em></h2>
          </div>
          <p>There is a particular kind of care in ordinary moments: music in the kitchen, sunlight on the table, a walk that takes the long way home.</p>
        </div>
        <div className="life-gallery">
          <figure className="life-photo main">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=82" alt="People sharing a quiet moment together outdoors" loading="lazy" />
            <figcaption>Time together, naturally</figcaption>
          </figure>
          <figure className="life-photo">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=82" alt="A sunlit kitchen prepared for making a meal" loading="lazy" />
            <figcaption>Make something good</figcaption>
          </figure>
          <figure className="life-photo tall">
            <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=82" alt="A leafy garden beside a welcoming home" loading="lazy" />
            <figcaption>Find your rhythm</figcaption>
          </figure>
          <p className="life-note">The meaningful stuff is often <span>simple.</span></p>
        </div>
      </div>
    </section>
  );
}

function Closing({ onConversation }: { onConversation: () => void }) {
  return (
    <section className="closing" aria-labelledby="closing-heading">
      <div className="page-width closing-grid">
        <div>
          <div className="section-label eyebrow">A first step, when you are ready</div>
          <h2 id="closing-heading" className="font-display">Let’s begin<br />with a conversation.</h2>
          <button className="closing-button" type="button" onClick={onConversation} data-testid="button-closing-conversation">
            Start a conversation <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <p>There is no need to have the perfect words. Tell us a little about what you are looking for, and we will share what comes next.</p>
      </div>
    </section>
  );
}

function ConversationModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="conversation-heading">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close conversation form" data-testid="button-close-conversation"><X size={20} /></button>
        <div className="section-label eyebrow">A quiet first step</div>
        <h2 id="conversation-heading">Tell us where<br />you are.</h2>
        {submitted ? (
          <div className="success-message" role="status" data-testid="status-conversation-submitted">
            <Check size={18} aria-hidden="true" /> Thank you for sharing a little of your story. This introductory form is not connected to a live inbox yet; direct contact details will be added in a later phase.
          </div>
        ) : (
          <>
            <p>Share only what feels comfortable. This is a simple expression of interest, not an application or an emergency service.</p>
            <form className="conversation-form" onSubmit={handleSubmit}>
              <label>Preferred name <input name="name" autoComplete="name" required data-testid="input-conversation-name" /></label>
              <label>How can we reach you? <input name="contact" type="text" autoComplete="email" required data-testid="input-conversation-contact" /></label>
              <label>What would you like us to know? <textarea name="message" data-testid="input-conversation-message" /></label>
              <button className="form-submit" type="submit" data-testid="button-submit-conversation">Send an introduction <MoveUpRight size={14} /></button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-row">
        <Brand />
        <div className="footer-note"><span /> A human place to land</div>
        <small>© ULeadRTH · Public introduction</small>
      </div>
    </footer>
  );
}

function Home() {
  const [conversationOpen, setConversationOpen] = useState(false);
  const closeConversation = () => setConversationOpen(false);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#introduction">Skip to main content</a>
      <Header onConversation={() => setConversationOpen(true)} />
      <main>
        <Hero />
        <Introduction />
        <Approach />
        <Services />
        <Life />
        <Closing onConversation={() => setConversationOpen(true)} />
      </main>
      <Footer />
      {conversationOpen && <ConversationModal onClose={closeConversation} />}
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;