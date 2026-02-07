import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { submitGetInvolvedForm } from '@/services/airtable';

interface FormData {
  fullName: string;
  contactNumber: string;
  email: string;
  description: string;
}

export default function GetInvolved() {
  useScrollToTop();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    contactNumber: '',
    email: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to Airtable
    await submitGetInvolvedForm(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        description: '',
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
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-150">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 sm:p-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Get Involved</h1>
              <p className="text-lg text-muted-foreground">Tell us why you'd like to connect with Tejas Connect.</p>
            </div>

            {submitted ? (
              <div className="text-center py-16">
                <div className="mb-6 inline-flex w-16 h-16 bg-accent/10 rounded-lg items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-muted-foreground mb-8">We've received your message. We'll get in touch with you soon.</p>
                <Link to="/" className="inline-flex px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Why do you want to connect with Tejas Connect?</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us more about your interest..."
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150 mt-8"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
