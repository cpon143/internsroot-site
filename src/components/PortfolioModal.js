import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const PortfolioModal = ({ item, isOpen, onClose, handleCTAClick }) => {
    if (!isOpen || !item) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-backdrop backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content shadow-2xl transform"
          onClick={(e) => e.stopPropagation()}
        >
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
  export default PortfolioModal;