import { Users, Megaphone, Zap, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function ForFounders() {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl bg-accent/10"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            For Startup Founders
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with ambitious students, share your journey, and find potential team members through campus events.
          </p>
        </div>
      </section>

      {/* How Tejas Helps Founders */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">How Tejas Connect Helps Founders</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Tejas Connect provides startup founders with a unique platform to build meaningful connections within the academic ecosystem. Share your real experiences—the successes and challenges—directly with ambitious students who are eager to learn and contribute.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking for interns, early team members, or simply want to increase your visibility among business school talent, Tejas Connect opens doors to authentic connections and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Why Founders Choose Tejas Connect</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Four key benefits that make Tejas Connect the ideal platform for startup founders.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Access to Talent</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect directly with motivated students actively seeking startup experience, internships, and early-stage opportunities.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Megaphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Pitch Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Present your startup story to engaged business school audiences and share your vision with the next generation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Brand Visibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build awareness among young, ambitious minds who care about innovation and entrepreneurship.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Network className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Networking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Meet fellow founders, exchange experiences, and form valuable connections within the startup ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Tejas Connect as a Founder</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Fill the form below and be part of our campus events. Let's connect with the next generation of innovators.
          </p>
          <Link
            to="/founders-apply"
            className="inline-flex px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150 items-center gap-2"
          >
            Apply as Founder
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
