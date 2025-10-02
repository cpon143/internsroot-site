import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

const QuickContactModal = ({ isOpen, onClose, handleCTAClick }) => {
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
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-backdrop backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl max-w-md w-full modal-content shadow-2xl transform"
          onClick={(e) => e.stopPropagation()}
        >
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

  export default QuickContactModal;