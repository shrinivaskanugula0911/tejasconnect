import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { submitFounderForm } from '@/services/airtable';

interface FormData {
  fullName: string;
  contactNumber: string;
  email: string;
  companyName: string;
  industry: string;
  role: string;
  purpose: string;
  location: string;
}

export default function FoundersApplication() {
  useScrollToTop();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    contactNumber: '',
    email: '',
    companyName: '',
    industry: '',
    role: '',
    purpose: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to Airtable
    await submitFounderForm(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        companyName: '',
        industry: '',
        role: '',
        purpose: '',
        location: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Back Link */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <Link to="/for-founders" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-150">
            <ArrowLeft size={20} />
            Back to For Founders
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Founder Application</h1>
            <p className="text-muted-foreground mb-8">Tell us about yourself and your startup. We'll review your application and get back to you soon.</p>

            {submitted ? (
              <div className="text-center py-16">
                <div className="mb-6 inline-flex w-16 h-16 bg-accent/10 rounded-lg items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
                <p className="text-muted-foreground mb-8">Thank you for your interest. We'll review your application and be in touch soon.</p>
                <Link to="/for-founders" className="inline-flex px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150">
                  Back to For Founders
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company / Startup Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your startup name"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Type of Business / Industry</label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g., SaaS, FinTech, EdTech"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Role in the Company</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g., Founder, CEO, CTO"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">City / Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your city or region"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Purpose of Joining Tejas Connect</label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Tell us why you'd like to participate in Tejas Connect events..."
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150"
                  >
                    Submit Application
                  </button>
                  <Link
                    to="/for-founders"
                    className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-150 text-center"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
