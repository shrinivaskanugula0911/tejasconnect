import { Building2, Users, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function ForCollegesStudents() {
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
            For Colleges & Students
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bring real startup exposure to your campus and connect students with founders, skills, and opportunities.
          </p>
        </div>
      </section>

      {/* What Tejas Offers */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">What Tejas Connect Offers Your Campus</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Tejas Connect brings authentic startup culture directly to your college. We organize meaningful events that connect real founders with ambitious students, transforming how young minds think about entrepreneurship and career possibilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether your goal is to enhance the curriculum, build industry partnerships, or foster an entrepreneurial mindset among students, Tejas Connect provides the platform and community to make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Why Partner with Tejas Connect</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Four key benefits that make Tejas Connect the ideal platform for your college and students.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Campus Exposure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real startup interaction directly inside your college. Bring industry leaders to your campus and create memorable learning experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Learning by Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Students hear real entrepreneurial journeys, failures, and successes—not just theory. Learn what it actually takes to build.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Networking Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Direct connection between students and founders. Build relationships that lead to internships, mentorship, and career opportunities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Skill Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Develop a deeper understanding of real-world business, problem-solving, and innovation through hands-on engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Tejas Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Register your interest and bring startup energy to your campus. Let's build a community of innovation together.
          </p>
          <Link
            to="/colleges-register"
            className="inline-flex px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150 items-center gap-2"
          >
            Apply / Register
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
