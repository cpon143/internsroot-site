import React, { useState, useEffect } from 'react';
import Starter from './starter';
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import ProcessSection from './ProcessSection';
import SEOSection from './SEOSection';
import Pricing from './Pricing';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';


const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Website Development',
    budgetRange: 'Let\'s discuss',
    projectDetails: ''
  });

  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Form submission states
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [contactSubmissionStatus, setContactSubmissionStatus] = useState(null);
  const [newsletterSubmissionStatus, setNewsletterSubmissionStatus] = useState(null);

  // Validation errors
  const [contactErrors, setContactErrors] = useState({});
  const [newsletterError, setNewsletterError] = useState('');

  // Modal states
  const [showQuickContactModal, setShowQuickContactModal] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3); // Replace 3 with testimonials.length
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for section highlight
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['home', 'services', 'portfolio', 'pricing', 'blog', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Validation
  const validateEmail = (email) => /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhone = (phone) => /^[\+]?[0-9\s\-\(\)]{10,}$/.test(phone.replace(/\s/g, ''));

  const validateContactForm = () => {
    const errors = {};
    if (!contactForm.fullName.trim()) errors.fullName = 'Full name is required';
    if (!contactForm.email.trim()) errors.email = 'Email is required';
    else if (!validateEmail(contactForm.email)) errors.email = 'Invalid email';
    if (contactForm.phone && !validatePhone(contactForm.phone)) errors.phone = 'Invalid phone';
    if (!contactForm.projectDetails.trim()) errors.projectDetails = 'Project details required';
    return errors;
  };

  // Handlers
  const handleContactFormChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
    if (contactErrors[field]) setContactErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const errors = validateContactForm();
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setIsContactSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 2000));
      console.log('Contact submitted:', contactForm);
      setContactSubmissionStatus('success');
      setContactForm({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: 'Website Development',
        budgetRange: 'Let\'s discuss',
        projectDetails: ''
      });
      setTimeout(() => setContactSubmissionStatus(null), 5000);
    } catch {
      setContactSubmissionStatus('error');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterError('Email required');
      return;
    }
    if (!validateEmail(newsletterEmail)) {
      setNewsletterError('Invalid email');
      return;
    }
    setNewsletterError('');
    setIsNewsletterSubmitting(true);

    try {
      await new Promise((res) => setTimeout(res, 1500));
      console.log('Newsletter signup:', newsletterEmail);
      setNewsletterSubmissionStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmissionStatus(null), 5000);
    } catch {
      setNewsletterSubmissionStatus('error');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
  };

  const handleCTAClick = (action, data = null) => {
    switch (action) {
      case 'get-proposal':
        scrollToSection('contact');
        break;
      case 'view-portfolio':
        scrollToSection('portfolio');
        break;
      case 'book-call':
        window.open('https://calendly.com/mdmazharul', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/918780295558?text=Hi! I\'m interested in your web development services.', '_blank');
        break;
      case 'view-service':
        setSelectedService(data);
        break;
      case 'view-portfolio-item':
        setSelectedPortfolioItem(data);
        break;
      case 'quick-contact':
        setShowQuickContactModal(true);
        break;
      default:
        console.log('CTA clicked:', action, data);
    }
  };

  return (
    <div>
      <Navigation handleCTAClick={handleCTAClick}/>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <ProcessSection handleCTAClick={handleCTAClick} />
      <SEOSection handleCTAClick={handleCTAClick} />
      <Pricing handleCTAClick={handleCTAClick} />
      <Blog handleCTAClick={handleCTAClick} />
     <Contact handleCTAClick={handleCTAClick} />
     <Footer handleCTAClick={handleCTAClick} />
    </div>
  );
};

export default Page;
