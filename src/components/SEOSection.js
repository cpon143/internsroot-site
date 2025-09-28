import React from 'react';
import { CheckCircle } from 'lucide-react'; // Make sure lucide-react is installed

const SEOSection = ({ handleCTAClick }) => (
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
              <div className="text-2xl font-bold text-green-600 mb-2">2.5s</div>
              <div className="text-gray-700 font-semibold">Page Load Speed</div>
              <div className="text-gray-600 text-sm">LCP optimization</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">200ms</div>
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

export default SEOSection;
