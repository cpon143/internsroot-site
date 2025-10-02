import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navigation = ({ handleCTAClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress tracking
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          {/* Logo and title */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Internsroot
              </div>
              <div className="text-xs text-gray-500 -mt-1">Premium Development</div>
            </div>
          </div>

          {/* Desktop navigation */}
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

          {/* CTA and availability */}
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

          {/* Mobile menu button */}
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
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

      {/* Enhanced Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100/50">
        <div 
          className={`h-full transition-all duration-300 ease-out shadow-lg relative overflow-hidden ${
            activeSection === 'home' ? 'bg-gradient-to-r from-blue-600 to-cyan-500' :
            activeSection === 'services' ? 'bg-gradient-to-r from-purple-600 to-pink-500' :
            activeSection === 'portfolio' ? 'bg-gradient-to-r from-green-600 to-emerald-500' :
            activeSection === 'pricing' ? 'bg-gradient-to-r from-orange-600 to-yellow-500' :
            activeSection === 'blog' ? 'bg-gradient-to-r from-red-600 to-rose-500' :
            activeSection === 'contact' ? 'bg-gradient-to-r from-indigo-600 to-purple-500' :
            'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
          }`}
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-white/20 opacity-50 blur-sm"></div>
          
          {/* Moving shine effect */}
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse"></div>
          
          {/* Pulse effect at the end */}
          <div className="absolute right-0 top-0 w-1 h-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
