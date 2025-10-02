import React from 'react';
import { X, CheckCircle } from 'lucide-react';


// Modal Components
  const ServiceModal = ({ service, isOpen, onClose, handleCTAClick }) => {
    if (!isOpen || !service) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-backdrop backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content shadow-2xl transform"
          onClick={(e) => e.stopPropagation()}
        >
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

  export default ServiceModal;