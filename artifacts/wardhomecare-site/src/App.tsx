import { type ReactNode, useEffect } from 'react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';

import { Shell } from '@/components/layout/Shell';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Admissions from '@/pages/Admissions';
import Careers from '@/pages/Careers';
import Connect from '@/pages/Connect';
import Resources from '@/pages/Resources';
import FAQ from '@/pages/FAQ';
import Privacy from '@/pages/Privacy';
import Accessibility from '@/pages/Accessibility';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(to);
  }, [setLocation, to]);
  return null;
}

function Router() {
  return (
    <Shell>
      <RoutedErrorBoundary>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/careers" component={Careers} />
          <Route path="/connect" component={Connect} />
          <Route path="/contact">{() => <Redirect to="/connect" />}</Route>
          <Route path="/approach">{() => <Redirect to="/about" />}</Route>
          <Route path="/life-at-uleadrth">{() => <Redirect to="/services" />}</Route>
          <Route path="/resources" component={Resources} />
          <Route path="/faq" component={FAQ} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/accessibility" component={Accessibility} />
          <Route component={NotFound} />
        </Switch>
      </RoutedErrorBoundary>
    </Shell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
