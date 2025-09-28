import React from 'react';
import { CheckCircle } from 'lucide-react'; // make sure lucide-react is installed

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

const Pricing = ({ handleCTAClick }) => (
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

export default Pricing;
