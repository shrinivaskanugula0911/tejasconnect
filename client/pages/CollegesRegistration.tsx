import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { submitCollegesStudentsForm } from '@/services/airtable';

interface FormData {
  fullName: string;
  userType: string;
  collegeName: string;
  contactNumber: string;
  email: string;
  location: string;
  purpose: string;
}

export default function CollegesRegistration() {
  useScrollToTop();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    userType: '',
    collegeName: '',
    contactNumber: '',
    email: '',
    location: '',
    purpose: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to Airtable
    await submitCollegesStudentsForm(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        userType: '',
        collegeName: '',
        contactNumber: '',
        email: '',
        location: '',
        purpose: '',
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
          <Link to="/for-colleges-students" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-150">
            <ArrowLeft size={20} />
            Back to For Colleges & Students
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Register with Tejas Connect</h1>
            <p className="text-muted-foreground mb-8">Tell us about you so we can connect better.</p>

            {submitted ? (
              <div className="text-center py-16">
                <div className="mb-6 inline-flex w-16 h-16 bg-accent/10 rounded-lg items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
                <p className="text-muted-foreground mb-8">Thank you for registering. We'll be in touch with more details about upcoming events.</p>
                <Link to="/for-colleges-students" className="inline-flex px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150">
                  Back to For Colleges & Students
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

                {/* User Type */}
                <div>
                  <label className="block text-sm font-semibold mb-2">What describes you?</label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="college-management">College Management</option>
                    <option value="student">Student</option>
                    <option value="dropped-out">Dropped Out</option>
                  </select>
                </div>

                {/* College Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">College Name</label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    placeholder="Your college or institution name"
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

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Location (City/State)</label>
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

                {/* Purpose */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Short Message / Purpose of Joining (Optional)</label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Tell us why you'd like to partner with Tejas Connect..."
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150"
                  >
                    Submit Registration
                  </button>
                  <Link
                    to="/for-colleges-students"
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
