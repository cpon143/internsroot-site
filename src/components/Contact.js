import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Zap, CheckCircle, ArrowRight, X, Calendar, Award, Shield } from 'lucide-react';

const Contact = ({ handleCTAClick }) => {
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Website Development',
    budgetRange: "Let's discuss",
    projectDetails: ''
  });
  const [contactErrors, setContactErrors] = useState({});
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactSubmissionStatus, setContactSubmissionStatus] = useState(null);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterSubmissionStatus, setNewsletterSubmissionStatus] = useState(null);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleContactFormChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    if (contactErrors[field]) {
      setContactErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const errors = {};
    if (!contactForm.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!contactForm.email.trim()) errors.email = 'Email is required';
    else if (!validateEmail(contactForm.email)) errors.email = 'Invalid email';
    if (!contactForm.projectDetails.trim()) errors.projectDetails = 'Project Details required';
    if (Object.keys(errors).length) {
      setContactErrors(errors);
      return;
    }

    setIsContactSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Contact form submitted:', contactForm);

      setContactSubmissionStatus('success');
      setContactForm({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: 'Website Development',
        budgetRange: "Let's discuss",
        projectDetails: ''
      });

      setTimeout(() => setContactSubmissionStatus(null), 5000);
    } catch {
      setContactSubmissionStatus('error');
      setTimeout(() => setContactSubmissionStatus(null), 5000);
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterError('Email is required');
      return;
    }
    if (!validateEmail(newsletterEmail)) {
      setNewsletterError('Please enter a valid email');
      return;
    }
    setNewsletterError('');
    setIsNewsletterSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Newsletter signup:', newsletterEmail);
      setNewsletterSubmissionStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmissionStatus(null), 5000);
    } catch {
      setNewsletterSubmissionStatus('error');
      setTimeout(() => setNewsletterSubmissionStatus(null), 5000);
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Trust indicators */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full mb-6 border border-green-100">
            <MessageCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-600 font-semibold text-sm">Let's Connect</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Ready to Transform</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Join 150+ successful companies who trust us with their digital transformation. 
            Get a free strategy session and detailed project proposal within 24 hours.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: CheckCircle, color: 'green', title: 'Free Consultation', subtitle: 'No obligations' },
              { icon: Zap, color: 'blue', title: '24h Response', subtitle: 'Guaranteed' },
              { icon: Shield, color: 'purple', title: 'NDA Protected', subtitle: 'Your ideas safe' },
              { icon: Award, color: 'orange', title: 'Expert Team', subtitle: '10+ years exp' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`bg-${item.color}-100 p-3 rounded-2xl w-fit mx-auto mb-2`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-600">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info & Quick Actions */}
          <div >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: '+91 87802 95558' },
                { icon: Mail, label: 'Email', value: 'hello@internsroot.com' },
                { icon: MapPin, label: 'Location', value: 'Mumbai, Maharashtra, India' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Quick response guaranteed' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.label}</div>
                    <div className="text-gray-600">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center text-green-800 mb-2">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">Quick Response Promise</span>
              </div>
              <p className="text-green-700 text-sm">
                I respond to all inquiries within 2 hours during business hours (9 AM - 6 PM IST)
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button onClick={() => handleCTAClick('whatsapp')} className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Chat
                </button>
                <button onClick={() => handleCTAClick('book-call')} className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" /> Book 15-min Call
                </button>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Start Your Project</h3>
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Secure & Encrypted</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleContactSubmit} className="space-y-8">
              {/* Status Messages */}
              {contactSubmissionStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-semibold">Message sent successfully!</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">I'll get back to you within 2 hours.</p>
                </div>
              )}
              {contactSubmissionStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <X className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-red-800 font-semibold">Failed to send message</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">Please try again or contact me directly.</p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" value={contactForm.fullName} onChange={(e) => handleContactFormChange('fullName', e.target.value)} placeholder="Your name" className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${contactErrors.fullName ? 'border-red-300' : 'border-gray-300'}`} />
                  {contactErrors.fullName && <p className="text-red-600 text-sm mt-1">{contactErrors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" value={contactForm.email} onChange={(e) => handleContactFormChange('email', e.target.value)} placeholder="your@email.com" className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${contactErrors.email ? 'border-red-300' : 'border-gray-300'}`} />
                  {contactErrors.email && <p className="text-red-600 text-sm mt-1">{contactErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone/WhatsApp</label>
                  <input type="tel" value={contactForm.phone} onChange={(e) => handleContactFormChange('phone', e.target.value)} placeholder="+91 87802 95558" className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${contactErrors.phone ? 'border-red-300' : 'border-gray-300'}`} />
                  {contactErrors.phone && <p className="text-red-600 text-sm mt-1">{contactErrors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select value={contactForm.serviceInterest} onChange={(e) => handleContactFormChange('serviceInterest', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Website Development</option>
                    <option>Android App Development</option>
                    <option>WordPress Website</option>
                    <option>Website Management</option>
                    <option>SEO Services</option>
                    <option>Digital Marketing</option>
                    <option>Custom Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select value={contactForm.budgetRange} onChange={(e) => handleContactFormChange('budgetRange', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Under $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                  <option>Let's discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                <textarea rows="4" value={contactForm.projectDetails} onChange={(e) => handleContactFormChange('projectDetails', e.target.value)} placeholder="Tell me about your project requirements, goals, and timeline..." className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${contactErrors.projectDetails ? 'border-red-300' : 'border-gray-300'}`} />
                {contactErrors.projectDetails && <p className="text-red-600 text-sm mt-1">{contactErrors.projectDetails}</p>}
              </div>

              <button type="submit" disabled={isContactSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  {isContactSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-3" /> Get Free Strategy Session
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>By submitting this form, you agree to receive communications about your inquiry.</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest web development tips, SEO insights, and project updates delivered to your inbox weekly.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            {newsletterSubmissionStatus === 'success' && (
              <div className="bg-white/20 border border-white/30 rounded-lg p-3 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-semibold">Successfully subscribed!</span>
                </div>
              </div>
            )}
            {newsletterSubmissionStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-300/30 rounded-lg p-3 mb-4">
                <div className="flex items-center">
                  <X className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-semibold">Subscription failed</span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="Enter your email" className={`flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white ${newsletterError ? 'border-2 border-red-300' : ''}`} />
              <button type="submit" disabled={isNewsletterSubmitting} className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                {isNewsletterSubmitting ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div> : 'Subscribe'}
              </button>
            </div>
            {newsletterError && <p className="text-white/90 text-sm mt-2">{newsletterError}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
