import React from "react";
import { Eye, Award, Code, TrendingUp, ArrowRight, Clock, CheckCircle, Zap, Users, Target, Rocket, BarChart } from "lucide-react";

const ProcessSection = ({ handleCTAClick }) => {
  const processes = [
    {
      step: "01",
      title: "Discover & Strategy",
      subtitle: "Deep Understanding",
      description: "Comprehensive analysis of your business goals, target audience, market research, and technical requirements to create a strategic roadmap.",
      icon: <Eye className="w-8 h-8" />,
      color: "blue",
      details: [
        "Business Goals Analysis",
        "Target Audience Research", 
        "Competitive Analysis",
        "Technical Requirements"
      ],
      timeline: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Design & Prototype",
      subtitle: "Visual Excellence",
      description: "Creating stunning wireframes, interactive prototypes, and user-centered designs that convert visitors into customers with modern UI/UX.",
      icon: <Award className="w-8 h-8" />,
      color: "purple",
      details: [
        "Wireframes & Mockups",
        "Interactive Prototypes",
        "UI/UX Design",
        "Brand Integration"
      ],
      timeline: "2-3 weeks"
    },
    {
      step: "03",
      title: "Develop & Test",
      subtitle: "Technical Excellence", 
      description: "Building with cutting-edge technologies, following industry best practices, performance optimization, and comprehensive testing across all devices.",
      icon: <Code className="w-8 h-8" />,
      color: "green",
      details: [
        "Modern Development",
        "Performance Optimization",
        "Cross-browser Testing",
        "Security Implementation"
      ],
      timeline: "3-6 weeks"
    },
    {
      step: "04",
      title: "Launch & Optimize",
      subtitle: "Continuous Growth",
      description: "Strategic launch with SEO optimization, performance monitoring, analytics setup, and ongoing support to ensure continued success.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "orange", 
      details: [
        "SEO Implementation",
        "Analytics Setup",
        "Performance Monitoring",
        "Ongoing Support"
      ],
      timeline: "1 week + ongoing"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-cyan-500",
        light: "from-blue-50 to-cyan-50",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "text-blue-600"
      },
      purple: {
        bg: "from-purple-500 to-pink-500", 
        light: "from-purple-50 to-pink-50",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "text-purple-600"
      },
      green: {
        bg: "from-green-500 to-emerald-500",
        light: "from-green-50 to-emerald-50", 
        border: "border-green-200",
        text: "text-green-600",
        icon: "text-green-600"
      },
      orange: {
        bg: "from-orange-500 to-red-500",
        light: "from-orange-50 to-red-50",
        border: "border-orange-200", 
        text: "text-orange-600",
        icon: "text-orange-600"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6 border border-blue-100">
            <Rocket className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">Proven Process</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Our Development</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Methodology
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            A proven 4-step methodology that ensures your project is delivered on time, 
            within budget, and exceeds expectations. From strategy to success.
          </p>

          {/* Process Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Process Steps with Zig-Zag Layout */}
        <div className="relative">
          {processes.map((process, index) => {
            const colors = getColorClasses(process.color);
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative">

                {/* Process Card */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content Side */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-10 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        {/* Step Number & Timeline */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`bg-gradient-to-r ${colors.bg} text-white text-xl font-bold px-4 py-2 rounded-2xl shadow-lg`}>
                            {process.step}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="w-4 h-4 mr-2" />
                            {process.timeline}
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mb-6">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {process.title}
                          </h3>
                          <p className={`${colors.text} font-semibold text-lg`}>
                            {process.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          {process.description}
                        </p>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {process.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className={`w-5 h-5 ${colors.icon} mr-3 flex-shrink-0`} />
                              <span className="text-gray-700 font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Progress Indicator */}
                        <div className={`bg-gradient-to-r ${colors.light} border ${colors.border} p-4 rounded-2xl`}>
                          <div className="flex items-center justify-between">
                            <span className={`${colors.text} font-semibold`}>
                              Step {process.step} of 04
                            </span>
                            <div className="flex space-x-2">
                              {processes.map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-3 h-3 rounded-full ${
                                    i <= index 
                                      ? `bg-gradient-to-r ${colors.bg}` 
                                      : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Icon Side */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                    <div className="relative">
                      {/* Main Icon Circle */}
                      <div className={`bg-gradient-to-r ${colors.bg} w-32 h-32 lg:w-40 lg:h-40 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500`}>
                        <div className="text-white transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                          {React.cloneElement(process.icon, { className: "w-16 h-16 lg:w-20 lg:h-20" })}
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className={`absolute -top-4 -right-4 bg-white ${colors.text} p-3 rounded-2xl shadow-lg animate-bounce`}>
                        <Zap className="w-6 h-6" />
                      </div>
                      
                      <div className={`absolute -bottom-4 -left-4 bg-white ${colors.text} p-3 rounded-2xl shadow-lg animate-pulse`}>
                        <Target className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zig-Zag Connector Line */}
                {index < processes.length - 1 && (
                  <div className="relative -mt-12 mb-12 hidden lg:block z-0">
                    <div className="flex justify-center">
                      {isEven ? (
                        // Right to Left connector
                        <svg 
                          className="w-96 h-24"
                          viewBox="0 0 384 96" 
                          fill="none"
                        >
                          <path 
                            d="M48 24 Q144 24 192 48 Q240 72 336 72" 
                            stroke={`url(#gradient-${index}-1)`}
                            strokeWidth="3" 
                            strokeDasharray="10,6"
                            fill="none"
                          />
                          <defs>
                            <linearGradient id={`gradient-${index}-1`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4"/>
                            </linearGradient>
                          </defs>
                          {/* Animated dot */}
                          <circle r="4" fill="#3B82F6" opacity="0.8">
                            <animateMotion dur="3s" repeatCount="indefinite">
                              <mpath href={`#path-${index}-1`}/>
                            </animateMotion>
                          </circle>
                          <path id={`path-${index}-1`} d="M48 24 Q144 24 192 48 Q240 72 336 72" fill="none"/>
                        </svg>
                      ) : (
                        // Left to Right connector
                        <svg 
                          className="w-96 h-24"
                          viewBox="0 0 384 96" 
                          fill="none"
                        >
                          <path 
                            d="M336 24 Q240 24 192 48 Q144 72 48 72" 
                            stroke={`url(#gradient-${index}-2)`}
                            strokeWidth="3" 
                            strokeDasharray="10,6"
                            fill="none"
                          />
                          <defs>
                            <linearGradient id={`gradient-${index}-2`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4"/>
                              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8"/>
                            </linearGradient>
                          </defs>
                          {/* Animated dot */}
                          <circle r="4" fill="#8B5CF6" opacity="0.8">
                            <animateMotion dur="3s" repeatCount="indefinite">
                              <mpath href={`#path-${index}-2`}/>
                            </animateMotion>
                          </circle>
                          <path id={`path-${index}-2`} d="M336 24 Q240 24 192 48 Q144 72 48 72" fill="none"/>
                        </svg>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Let's discuss your project and create a custom roadmap for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => handleCTAClick && handleCTAClick("get-proposal")}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl flex items-center transform hover:scale-105"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => handleCTAClick && handleCTAClick("book-call")}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
