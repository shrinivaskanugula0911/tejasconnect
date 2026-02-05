import { ArrowRight, Zap, Users, TrendingUp, MessageSquare, BookOpen } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F57d9ad027eda4a5381433d555f15e3ef%2F85423baee08f4b96b5be72c0fbd1d7d5"
              alt="Tejas Connect Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-foreground">Tejas Connect</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors duration-150">About</a>
            <a href="#who" className="text-foreground hover:text-accent transition-colors duration-150">Who</a>
            <a href="#how" className="text-foreground hover:text-accent transition-colors duration-150">How</a>
            <a href="#involved" className="text-foreground hover:text-accent transition-colors duration-150">Get Involved</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Connecting students with real startup experience through campus events.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bridge the gap between academic learning and real-world entrepreneurship. Connect founders, students, and institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150 flex items-center justify-center gap-2">
              For Founders
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-150 flex items-center justify-center gap-2">
              For Colleges & Students
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* What is Tejas Connect */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What is Tejas Connect?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bullet 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Real Startup Experience</h3>
                <p className="text-muted-foreground">Direct engagement between students and startup founders, delivering hands-on learning beyond the classroom.</p>
              </div>
            </div>

            {/* Bullet 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Campus-Driven</h3>
                <p className="text-muted-foreground">Events organized through colleges and universities, building community and fostering entrepreneurial culture on campus.</p>
              </div>
            </div>

            {/* Bullet 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Ecosystem Growth</h3>
                <p className="text-muted-foreground">Connect institutions, students, and founders in a trusted network that accelerates learning and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section id="who" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Who is it for?</h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Founders Card */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Founders</h3>
              <p className="text-muted-foreground mb-4">
                Share your vision and story directly with the next generation of innovators.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Build brand awareness</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Inspire future talent</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Give back to communities</span>
                </li>
              </ul>
            </div>

            {/* Students Card */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Students</h3>
              <p className="text-muted-foreground mb-4">
                Learn from real founders and understand what it takes to build a startup.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Beyond textbook learning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Network with peers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Discover opportunities</span>
                </li>
              </ul>
            </div>

            {/* Colleges Card */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Colleges & Institutions</h3>
              <p className="text-muted-foreground mb-4">
                Foster an entrepreneurial culture and prepare students for a dynamic future.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Enhance curriculum</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Build industry partnerships</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Strengthen reputation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How an Event Works */}
      <section id="how" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">How an Event Works</h2>
          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Meet</h3>
                <p className="text-muted-foreground text-sm">
                  Founders and students gather in a welcoming campus environment.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Learn</h3>
                <p className="text-muted-foreground text-sm">
                  Hear real stories of challenges, failures, and successes.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Pitch</h3>
                <p className="text-muted-foreground text-sm">
                  Q&A session to dig deeper into entrepreneurship and ideas.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-2">Connect</h3>
                <p className="text-muted-foreground text-sm">
                  Build relationships that last beyond the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="involved" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to be part of the Tejas Connect community? Whether you're a founder, student, or institution, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150 flex items-center justify-center gap-2">
              <MessageSquare size={20} />
              Get in Touch
            </button>
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-150 flex items-center justify-center gap-2">
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Tejas Connect</h3>
              <p className="text-muted-foreground max-w-xs">
                Bridging the gap between academic learning and real-world startup experience through meaningful campus connections.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors duration-150">About</a>
                </li>
                <li>
                  <a href="#who" className="hover:text-accent transition-colors duration-150">Who We Serve</a>
                </li>
                <li>
                  <a href="#how" className="hover:text-accent transition-colors duration-150">How It Works</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="mailto:team@tejasconnect.com" className="hover:text-accent transition-colors duration-150">team@tejasconnect.com</a>
                </li>
                <li className="pt-4 mt-4 border-t border-border">
                  <a href="#" className="hover:text-accent transition-colors duration-150 text-sm">Twitter</a>
                  <span className="text-border mx-2">•</span>
                  <a href="#" className="hover:text-accent transition-colors duration-150 text-sm">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 Tejas Connect. Built to connect, inspire, and empower.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
