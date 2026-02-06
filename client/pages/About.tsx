import { Zap, Users, Lightbulb, Handshake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl bg-accent/10"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About Tejas Connect
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Building a bridge between students and real startup experience.
          </p>
        </div>
      </section>

      {/* Mission & Vision Together */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <div className="flex flex-col">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 rounded-lg items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Tejas Connect brings together founders, students, and colleges through meaningful campus events. We create direct, real-world connections that transcend traditional classroom learning.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                By hosting curated startup events, we enable students to learn from real entrepreneurs and understand what it takes to build something meaningful.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 rounded-lg items-center justify-center">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We envision a future where every student has access to real startup experiences, and entrepreneurship is celebrated within academic institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Our goal is to build a thriving student–startup ecosystem across campuses, recognized as the trusted platform that cultivates entrepreneurial thinking and creates lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why We Started</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-bold text-lg mb-3 text-foreground">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Students graduate without understanding entrepreneurship beyond textbooks. Founders struggle to find talented, motivated individuals early in their careers. There's a significant gap between academic learning and real-world startup experience.
              </p>
            </div>
            <div className="bg-accent text-accent-foreground rounded-lg p-8">
              <h3 className="font-bold text-lg mb-3">Our Solution</h3>
              <p className="leading-relaxed">
                A trusted platform where authentic conversations happen. Where students meet real founders. Where colleges build an entrepreneurial culture that prepares students for a dynamic, innovation-driven future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">What We Do</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            We focus on creating meaningful connections and opportunities through four key pillars.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-background border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Organize Startup Events</h3>
              <p className="text-muted-foreground leading-relaxed">
                We curate and organize high-quality startup events directly on college campuses, creating an accessible platform for students to engage with entrepreneurs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-background border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Invite Real Founders</h3>
              <p className="text-muted-foreground leading-relaxed">
                We bring accomplished founders and entrepreneurs to share their real stories—successes, failures, and lessons learned—directly with students.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-background border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Enable Learning & Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through interactive sessions, Q&A discussions, and networking, we help students connect, learn from real experiences, and discover new opportunities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-background border border-border rounded-lg p-8 hover:border-accent transition-colors duration-150 group">
              <div className="mb-4 inline-flex w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-lg items-center justify-center transition-colors duration-150">
                <Handshake className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-3">Create Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                We facilitate meaningful connections that lead to internships, mentorships, collaborations, and career opportunities for students and founders alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a founder, student, or institution, we'd love to have you join the Tejas Connect community and be part of building the future of startup culture on campuses.
          </p>
          <a href="/#involved" className="inline-flex px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150">
            Get Involved Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
