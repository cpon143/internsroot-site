import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Code,
  Smartphone,
  Globe,
  Settings,
  Search,
  TrendingUp,
  Calendar,
  Eye,
  Users,
  Award,
  Zap,
  Shield,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const FreelanceWebsite = () => {
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
  const [contactSubmissionStatus, setContactSubmissionStatus] = useState(null); // 'success', 'error', null
  const [newsletterSubmissionStatus, setNewsletterSubmissionStatus] = useState(null);
  
  // Form validation errors
  const [contactErrors, setContactErrors] = useState({});
  const [newsletterError, setNewsletterError] = useState('');
  
  // Modal states
  const [showQuickContactModal, setShowQuickContactModal] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Intersection Observer for active section detection
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
    
    // Observe all sections
    const sections = ['home', 'services', 'portfolio', 'pricing', 'blog', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  
  // Form validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };
  
  const validateContactForm = () => {
    const errors = {};
    
    if (!contactForm.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(contactForm.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (contactForm.phone && !validatePhone(contactForm.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!contactForm.projectDetails.trim()) {
      errors.projectDetails = 'Please provide project details';
    }
    
    return errors;
  };
  
  // Form submission handlers
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const errors = validateContactForm();
    
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }
    
    setContactErrors({});
    setIsContactSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send the data to your backend
      console.log('Contact form submitted:', contactForm);
      
      setContactSubmissionStatus('success');
      setContactForm({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: 'Website Development',
        budgetRange: 'Let\'s discuss',
        projectDetails: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setContactSubmissionStatus(null), 5000);
    } catch (error) {
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
      setNewsletterError('Please enter a valid email address');
      return;
    }
    
    setNewsletterError('');
    setIsNewsletterSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter signup:', newsletterEmail);
      
      setNewsletterSubmissionStatus('success');
      setNewsletterEmail('');
      
      setTimeout(() => setNewsletterSubmissionStatus(null), 5000);
    } catch (error) {
      setNewsletterSubmissionStatus('error');
      setTimeout(() => setNewsletterSubmissionStatus(null), 5000);
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };
  
  const handleContactFormChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (contactErrors[field]) {
      setContactErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };
  
  // Button click handlers
  const handleCTAClick = (action, data = null) => {
    switch (action) {
      case 'get-proposal':
        scrollToSection('contact');
        break;
      case 'view-portfolio':
        scrollToSection('portfolio');
        break;
      case 'book-call':
        window.open('https://calendly.com/internsroot', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/919876543210?text=Hi! I\'m interested in your web development services.', '_blank');
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

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Design & Development",
      description: "Mobile-first, responsive websites that convert visitors into customers",
      features: ["React/Next.js", "Mobile Responsive", "Fast Loading", "SEO Ready"],
      cta: "Get Free Proposal"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android App Development",
      description: "Native Android apps with modern UI and seamless performance",
      features: ["Native Development", "Play Store Ready", "Analytics Integration", "Push Notifications"],
      cta: "Book 15-min Call"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Websites",
      description: "Custom WordPress solutions with powerful CMS capabilities",
      features: ["Custom Themes", "Plugin Integration", "Security Hardening", "Speed Optimization"],
      cta: "See WordPress Packages"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Website Management",
      description: "Ongoing maintenance, updates, and optimization services",
      features: ["Regular Updates", "Security Monitoring", "Performance Tuning", "Content Management"],
      cta: "Start Maintenance"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services",
      description: "Rank higher on Google with comprehensive SEO strategies",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      cta: "Get Free SEO Audit"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Multi-channel marketing campaigns that drive real results",
      features: ["PPC Campaigns", "Social Media", "Email Marketing", "Analytics"],
      cta: "Launch Your Campaign"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Fashion Store",
      category: "Website Development",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop",
      results: "+132% organic traffic in 90 days",
      tech: ["React", "Node.js", "Stripe"],
      description: "Modern e-commerce platform with advanced filtering and payment integration"
    },
    {
      title: "Restaurant Mobile App",
      category: "Android Development",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      results: "4.8★ rating on Play Store",
      tech: ["Android", "Firebase", "Maps API"],
      description: "Food delivery app with real-time tracking and payment gateway"
    },
    {
      title: "Business Consulting Site",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      results: "INP < 200ms after optimization",
      tech: ["WordPress", "Custom Theme", "Elementor"],
      description: "Professional consulting website with booking system and blog"
    },
    {
      title: "SaaS Landing Page",
      category: "SEO & Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      results: "+85 referring domains, +40 leads/month",
      tech: ["Next.js", "Analytics", "A/B Testing"],
      description: "High-converting landing page with comprehensive SEO optimization"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      rating: 5,
      text: "Exceptional work! Our website's conversion rate increased by 150% after the redesign. The attention to detail and SEO optimization was outstanding.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Mark Rodriguez",
      company: "E-commerce Business",
      rating: 5,
      text: "The Android app delivered exactly what we needed. User engagement is up 200% and the app performs flawlessly across all devices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      company: "Marketing Agency",
      rating: 5,
      text: "Our WordPress site loads lightning fast now. The SEO improvements brought us to page 1 for our target keywords within 3 months.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const blogPosts = [
    {
      title: "10 Core Web Vitals Fixes That Boost Your Google Rankings",
      excerpt: "Learn how to optimize LCP, INP, and CLS for better search performance and user experience.",
      date: "Sep 25, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop",
      category: "SEO"
    },
    {
      title: "React vs Next.js: Which Framework to Choose in 2025",
      excerpt: "Complete comparison guide for modern web development projects and when to use each framework.",
      date: "Sep 22, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=300&h=200&fit=crop",
      category: "Development"
    },
    {
      title: "WordPress Performance: From 4s to Under 2s Load Time",
      excerpt: "Step-by-step guide to dramatically improve your WordPress site's loading speed and Core Web Vitals.",
      date: "Sep 20, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop",
      category: "WordPress"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$1,499",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO setup",
        "Contact form integration",
        "Google Analytics",
        "1 month support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      price: "$2,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design & animations",
        "Advanced SEO optimization",
        "Blog setup & management",
        "Social media integration",
        "E-commerce ready",
        "3 months support",
        "Performance optimization"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Scale",
      price: "$4,999",
      description: "For established businesses",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "Custom dashboard",
        "Priority support",
        "6 months support",
        "Conversion optimization",
        "A/B testing setup"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                internsroot
              </div>
              <div className="text-xs text-gray-500 -mt-1">Premium Development</div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span>Available for projects</span>
              </div>
            </div>
            <button 
              onClick={() => handleCTAClick('get-proposal')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Proposal
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 ${
                  activeSection === item.toLowerCase() ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => handleCTAClick('get-proposal')}
              className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Proposal
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section id="home" className="pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Trust badges */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">100% Secure</span>
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block mb-2">Premium</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <span className="block text-4xl lg:text-5xl text-gray-700 mt-4">
                that drive real results
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Enterprise-grade web applications and mobile solutions engineered for maximum performance, 
              search visibility, and conversion optimization. Trusted by 100+ businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button 
                onClick={() => handleCTAClick('get-proposal')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <Zap className="mr-3 w-5 h-5 group-hover:animate-pulse" />
                Get Free Strategy Call
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => handleCTAClick('view-portfolio')}
                className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg font-semibold flex items-center justify-center backdrop-blur bg-white/80"
              >
                <Eye className="mr-3 w-5 h-5" />
                View Case Studies
                <ExternalLink className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Enhanced Social Proof */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">5.0★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">48h</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
            </div>
            
            {/* Client Logos */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading companies:</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="bg-gray-200 px-6 py-2 rounded-lg text-sm font-semibold text-gray-600">TechCorp</div>
                <div className="bg-gray-200 px-6 py-2 rounded-lg text-sm font-semibold text-gray-600">StartupX</div>
                <div className="bg-gray-200 px-6 py-2 rounded-lg text-sm font-semibold text-gray-600">GrowthCo</div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Premium Dashboard Card */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Performance Dashboard</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Live Data</span>
                </div>
              </div>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-xs text-blue-600 font-medium">+23%</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-900">1.8s</div>
                  <div className="text-xs text-blue-600">Load Time</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <Search className="w-5 h-5 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">A+</span>
                  </div>
                  <div className="text-2xl font-bold text-green-900">98</div>
                  <div className="text-xs text-green-600">SEO Score</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-xs text-purple-600 font-medium">+165%</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-900">87%</div>
                  <div className="text-xs text-purple-600">Conversion</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <Shield className="w-5 h-5 text-orange-600" />
                    <span className="text-xs text-orange-600 font-medium">100%</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-900">A+</div>
                  <div className="text-xs text-orange-600">Security</div>
                </div>
              </div>
              
              {/* Bottom Status */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-2xl text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">All Systems Optimal</span>
                  </div>
                  <div className="text-xs opacity-90">Last updated: 2min ago</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">Premium Services</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Enterprise-Grade</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Development Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From Fortune 500 companies to innovative startups, I deliver scalable, 
            high-performance solutions that drive measurable business growth and competitive advantage.
          </p>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-500 mr-2" />
              <span>ISO 27001 Compliant</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Award className="w-4 h-4 text-blue-500 mr-2" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
              <span>30-Day Money Back</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-white/50 cursor-pointer hover:-translate-y-2 relative overflow-hidden" onClick={() => setSelectedService(service)}>
              {/* Premium badge for featured services */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
              )}
              
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Icon with premium styling */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features with enhanced styling */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="bg-green-100 p-1 rounded-full mr-3">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Premium pricing indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <span className="text-2xl font-bold text-gray-900">$2,999</span>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCTAClick('get-proposal');
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  <span className="relative z-10">{service.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.
            </p>
            <button 
              onClick={() => handleCTAClick('get-proposal')}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-semibold shadow-lg"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const Portfolio = () => (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6 border border-blue-100">
            <Award className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">Success Stories</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Proven Results</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              & Case Studies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Real businesses, real challenges, real results. Discover how strategic development 
            and optimization have transformed these companies' digital presence and bottom line.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500M+</div>
              <div className="text-sm text-gray-600">Page Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-sm text-gray-600">Revenue Attributed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-sm text-gray-600">Avg Conversion Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2" onClick={() => setSelectedPortfolioItem(item)}>
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">View Case Study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {item.category}
                  </div>
                </div>
                
                {/* Premium badge */}
                {index === 0 && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Technology stack */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3">Technology Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Results section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-bold text-lg">Key Results</span>
                  </div>
                  <p className="text-green-700 font-semibold text-lg">
                    {item.results}
                  </p>
                </div>
                
                {/* View case study button */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 rounded-2xl hover:from-gray-900 hover:to-black transition-all duration-300 font-semibold flex items-center justify-center group">
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Every project starts with understanding your unique challenges. 
                Let's discuss how we can create your next success story.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => window.open('https://github.com/internsroot', '_blank')}
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-semibold flex items-center shadow-xl"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Portfolio
                </button>
                
                <button 
                  onClick={() => handleCTAClick('get-proposal')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-xl"
                >
                  Start Your Project
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>NDA Protected</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Money-Back Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Award-Winning Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Testimonials = () => (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from real businesses
          </p>
        </div>

        <div className="bg-white/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-white' : 'bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );

  const Pricing = () => (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`rounded-2xl p-8 ${pkg.popular ? 'bg-blue-600 text-white relative' : 'bg-gray-50'}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.price}
                </div>
                <p className={pkg.popular ? 'text-blue-100' : 'text-gray-600'}>
                  {pkg.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${pkg.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                    <CheckCircle className={`w-5 h-5 mr-3 ${pkg.popular ? 'text-blue-200' : 'text-green-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleCTAClick('get-proposal')}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  pkg.popular 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => handleCTAClick('get-proposal')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );

  const Blog = () => (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest web development trends, SEO tips, and performance optimization techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 
                  onClick={() => window.open(`https://internsroot.blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                  className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div 
                  onClick={() => window.open(`https://internsroot.blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                  className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  <span className="font-semibold">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => window.open('https://internsroot.blog', '_blank')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-2xl w-fit mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-sm font-semibold text-gray-900">Free Consultation</div>
              <div className="text-xs text-gray-600">No obligations</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-2xl w-fit mx-auto mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-gray-900">24h Response</div>
              <div className="text-xs text-gray-600">Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-2xl w-fit mx-auto mb-2">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-sm font-semibold text-gray-900">NDA Protected</div>
              <div className="text-xs text-gray-600">Your ideas safe</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-2xl w-fit mx-auto mb-2">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-sm font-semibold text-gray-900">Expert Team</div>
              <div className="text-xs text-gray-600">10+ years exp</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">hello@internsroot.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">Mumbai, Maharashtra, India</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">Quick response guaranteed</div>
                </div>
              </div>
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
                <button 
                  onClick={() => handleCTAClick('whatsapp')}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </button>
                <button 
                  onClick={() => handleCTAClick('book-call')}
                  className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book 15-min Call
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Start Your Project</h3>
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Secure & Encrypted</span>
              </div>
            </div>
            
            {/* Form benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl mb-8">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center text-blue-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>Free consultation worth $500</span>
                </div>
                <div className="flex items-center text-purple-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>Detailed project roadmap</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-8">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={contactForm.fullName}
                    onChange={(e) => handleContactFormChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      contactErrors.fullName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                  {contactErrors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{contactErrors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleContactFormChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      contactErrors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {contactErrors.email && (
                    <p className="text-red-600 text-sm mt-1">{contactErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => handleContactFormChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      contactErrors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {contactErrors.phone && (
                    <p className="text-red-600 text-sm mt-1">{contactErrors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select 
                    value={contactForm.serviceInterest}
                    onChange={(e) => handleContactFormChange('serviceInterest', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select 
                  value={contactForm.budgetRange}
                  onChange={(e) => handleContactFormChange('budgetRange', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Under $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                  <option>Let's discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  rows="4"
                  value={contactForm.projectDetails}
                  onChange={(e) => handleContactFormChange('projectDetails', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    contactErrors.projectDetails ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Tell me about your project requirements, goals, and timeline..."
                />
                {contactErrors.projectDetails && (
                  <p className="text-red-600 text-sm mt-1">{contactErrors.projectDetails}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isContactSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  {isContactSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-3" />
                      Get Free Strategy Session
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
            
            <div className="flex gap-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white ${
                  newsletterError ? 'border-2 border-red-300' : ''
                }`}
              />
              <button 
                type="submit"
                disabled={isNewsletterSubmitting}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isNewsletterSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
            {newsletterError && (
              <p className="text-white/90 text-sm mt-2">{newsletterError}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );

  // Modal Components
  const ServiceModal = ({ service, isOpen, onClose }) => {
    if (!isOpen || !service) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {service.title}
            </h2>
            
            <p className="text-gray-600 mb-6">
              {service.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">What's Included:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Free consultation and project planning</li>
                <li>• Regular progress updates and communication</li>
                <li>• Mobile-responsive design and development</li>
                <li>• Cross-browser compatibility testing</li>
                <li>• Basic SEO optimization included</li>
                <li>• 30-day post-launch support</li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => {
                  onClose();
                  handleCTAClick('get-proposal');
                }}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  onClose();
                  handleCTAClick('book-call');
                }}
                className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                Book Call
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const PortfolioModal = ({ item, isOpen, onClose }) => {
    if (!isOpen || !item) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {item.category}
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {item.title}
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              {item.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Results:</h3>
                <div className="bg-green-50 text-green-800 p-3 rounded-lg font-semibold">
                  📈 {item.results}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Project Highlights:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Custom responsive design optimized for all devices</li>
                <li>• Advanced performance optimization and Core Web Vitals</li>
                <li>• Comprehensive SEO implementation and technical optimization</li>
                <li>• Integration with third-party services and APIs</li>
                <li>• Ongoing maintenance and performance monitoring</li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => {
                  onClose();
                  handleCTAClick('get-proposal');
                }}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Start Similar Project
              </button>
              <button
                onClick={() => window.open('#', '_blank')}
                className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const QuickContactModal = ({ isOpen, onClose }) => {
    const [quickForm, setQuickForm] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const handleQuickSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        setQuickForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitStatus(null);
          onClose();
        }, 2000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      } finally {
        setIsSubmitting(false);
      }
    };
    
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Quick Contact</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold">Message sent! I'll respond within 2 hours.</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={quickForm.name}
                  onChange={(e) => setQuickForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={quickForm.email}
                  onChange={(e) => setQuickForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quick Message</label>
                <textarea
                  rows="3"
                  value={quickForm.message}
                  onChange={(e) => setQuickForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            {/* Enhanced Brand Section */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  internsroot
                </div>
                <div className="text-sm text-gray-400">Premium Development Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Transforming ambitious ideas into exceptional digital experiences. 
              Trusted by Fortune 500 companies and innovative startups worldwide.
            </p>
            
            {/* Enhanced certifications */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Enterprise Security</div>
                  <div className="text-gray-400 text-sm">ISO 27001, SOC2, GDPR Compliant</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Award-Winning Team</div>
                  <div className="text-gray-400 text-sm">Google Developer Expert, AWS Certified</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Android Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">WordPress Sites</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Website Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 internsroot. All rights reserved. Built with React & optimized for Core Web Vitals.
            </div>
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => handleCTAClick('get-proposal')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  const ProcessSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 4-step methodology that ensures your project is delivered on time, within budget, and exceeds expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discover",
              description: "Understanding your business goals, target audience, and technical requirements",
              icon: <Eye className="w-8 h-8" />
            },
            {
              step: "02", 
              title: "Design",
              description: "Creating wireframes, prototypes, and user-centered designs that convert",
              icon: <Award className="w-8 h-8" />
            },
            {
              step: "03",
              title: "Build",
              description: "Developing with modern technologies, following best practices and performance standards",
              icon: <Code className="w-8 h-8" />
            },
            {
              step: "04",
              title: "Grow",
              description: "Launch optimization, SEO implementation, and ongoing performance monitoring",
              icon: <TrendingUp className="w-8 h-8" />
            }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  {process.icon}
                </div>
              </div>
              <div className="text-blue-600 font-bold text-lg mb-2">
                Step {process.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600">
                {process.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => handleCTAClick('get-proposal')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );

  const SEOSection = () => (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              SEO & Performance That Actually Works
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every website I build is optimized for search engines and Core Web Vitals from day one. 
              No need for expensive SEO fixes later.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2"> 2.5s</div>
                <div className="text-gray-700 font-semibold">Page Load Speed</div>
                <div className="text-gray-600 text-sm">LCP optimization</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2"> 200ms</div>
                <div className="text-gray-700 font-semibold">Interaction Delay</div>
                <div className="text-gray-600 text-sm">INP optimization</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Technical SEO audit and implementation",
                "Keyword research and content optimization", 
                "Schema markup for rich snippets",
                "Internal linking strategy",
                "Core Web Vitals optimization",
                "Mobile-first responsive design"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleCTAClick('get-proposal')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Get Free SEO Audit in 24 Hours
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">SEO Performance Dashboard</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Organic Traffic</span>
                  <span className="font-bold text-green-600">+132% ↗</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Page Speed Score</span>
                  <span className="font-bold text-blue-600">98/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '98%'}}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Keywords Ranking</span>
                  <span className="font-bold text-purple-600">47 in Top 10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center text-green-800">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">All Core Web Vitals Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <ProcessSection />
      <SEOSection />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
      
      {/* Modals */}
      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
      />
      <PortfolioModal 
        item={selectedPortfolioItem} 
        isOpen={!!selectedPortfolioItem} 
        onClose={() => setSelectedPortfolioItem(null)} 
      />
      <QuickContactModal 
        isOpen={showQuickContactModal} 
        onClose={() => setShowQuickContactModal(false)} 
      />
      
      {/* Floating Action Button */}
      <button
        onClick={() => handleCTAClick('quick-contact')}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 hover:scale-110 transform"
        aria-label="Quick Contact"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FreelanceWebsite;

// Add these styles to your CSS file or styled-components
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.bg-grid-pattern {
  background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
  background-size: 20px 20px;
}

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
*/