import { useState } from "react";
import { Award, ArrowRight, TrendingUp, Eye, ExternalLink, Shield, CheckCircle } from "lucide-react";

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

const Portfolio = () => {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);

  // Reusable CTA handler (for buttons/links)
  const handleCTAClick = (action) => {
    console.log("CTA clicked:", action);
    // You can replace with navigation, modal, or analytics event
  };

  return (
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
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2" 
              onClick={() => setSelectedPortfolioItem(item)}
            >
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
};

export default Portfolio;
