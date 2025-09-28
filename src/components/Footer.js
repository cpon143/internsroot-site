import React from "react";
import { Code, Shield, Award } from "lucide-react";

const Footer = ({ handleCTAClick }) => (
  <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Internsroot
              </div>
              <div className="text-sm text-gray-400">Premium Development Solutions</div>
            </div>
          </div>

          <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
            Transforming ambitious ideas into exceptional digital experiences. Trusted by Fortune 500 companies and innovative startups worldwide.
          </p>

          {/* Certifications */}
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

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-3">
            {[
              "Website Development",
              "Android Apps",
              "WordPress Sites",
              "Website Management",
              "SEO Services",
              "Digital Marketing",
            ].map((service, idx) => (
              <li key={idx}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: "Portfolio", href: "#portfolio" },
              { name: "Pricing", href: "#pricing" },
              { name: "Blog", href: "#blog" },
              { name: "Contact", href: "#contact" },
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
            ].map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Internsroot. All rights reserved. Built with React & optimized for Core Web Vitals.
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => handleCTAClick("get-proposal")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Get Free Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
