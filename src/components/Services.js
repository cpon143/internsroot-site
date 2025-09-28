import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Settings,
  Search,
  TrendingUp,
  Zap,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";

// Dummy CTA handler (replace with real implementation)
const handleCTAClick = (action) => {
  console.log(`CTA clicked: ${action}`);
};

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Website Design & Development",
    description:
      "Mobile-first, responsive websites that convert visitors into customers",
    features: [
      "React/Next.js",
      "Mobile Responsive",
      "Fast Loading",
      "SEO Ready",
    ],
    cta: "Get Free Proposal",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Android App Development",
    description: "Native Android apps with modern UI and seamless performance",
    features: [
      "Native Development",
      "Play Store Ready",
      "Analytics Integration",
      "Push Notifications",
    ],
    cta: "Book 15-min Call",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "WordPress Websites",
    description: "Custom WordPress solutions with powerful CMS capabilities",
    features: [
      "Custom Themes",
      "Plugin Integration",
      "Security Hardening",
      "Speed Optimization",
    ],
    cta: "See WordPress Packages",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Website Management",
    description: "Ongoing maintenance, updates, and optimization services",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Tuning",
      "Content Management",
    ],
    cta: "Start Maintenance",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Services",
    description: "Rank higher on Google with comprehensive SEO strategies",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
    ],
    cta: "Get Free SEO Audit",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Multi-channel marketing campaigns that drive real results",
    features: ["PPC Campaigns", "Social Media", "Email Marketing", "Analytics"],
    cta: "Launch Your Campaign",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">
              Premium Services
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Enterprise-Grade</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Development Solutions
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From Fortune 500 companies to innovative startups, I deliver
            scalable, high-performance solutions that drive measurable business
            growth and competitive advantage.
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
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-white/50 cursor-pointer hover:-translate-y-2 relative overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              {/* Premium badge for featured services */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
              )}

              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative z-10">
                {/* Icon */}
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

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="bg-green-100 p-1 rounded-full mr-3">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <span className="text-2xl font-bold text-gray-900">
                    $2,999
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCTAClick("get-proposal");
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

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements
              and create a tailored solution that perfectly fits your needs and
              budget.
            </p>
            <button
              onClick={() => handleCTAClick("get-proposal")}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-semibold shadow-lg"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
