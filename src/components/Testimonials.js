import { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, Award, Users, TrendingUp, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Md Mazharul Haque",
    company: "InternsRoot.",
    position: "CEO & Founder",
    rating: 5,
    text: "Exceptional work! Our website's conversion rate increased by 150% after the redesign. The attention to detail and SEO optimization was outstanding. The team delivered beyond our expectations.",
    image: "https://scontent.fbom57-1.fna.fbcdn.net/v/t39.30808-6/217041362_2992897564370704_7308737798036567047_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SKcXu2lHTfcQ7kNvwHgwpqP&_nc_oc=AdlqEN3-MbwxS14Ai3Ultw5V34OXKBLk85pqd_3SzZlcYcnPjI74P8dR_SRsyDjn84Y&_nc_zt=23&_nc_ht=scontent.fbom57-1.fna&_nc_gid=CAmZaLtEt1_Ew7Eee8dgHQ&oh=00_AffuqJmZcEpvQl90VY27lTQyE5Ifpl-_oWSYyp__IcMleQ&oe=68E4DFE2",
    metric: "+150% conversion rate",
    category: "Website Development"
  },
  {
    name: "Mark Rodriguez",
    company: "ShopEase Commerce",
    position: "CTO",
    rating: 5,
    text: "The Android app delivered exactly what we needed. User engagement is up 200% and the app performs flawlessly across all devices. Outstanding technical expertise and project management.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    metric: "+200% user engagement",
    category: "Android Development"
  },
  {
    name: "Emily Chen",
    company: "Digital Growth Co.",
    position: "Marketing Director",
    rating: 5,
    text: "Our WordPress site loads lightning fast now. The SEO improvements brought us to page 1 for our target keywords within 3 months. ROI has been incredible.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    metric: "Page 1 rankings in 3 months",
    category: "SEO & WordPress"
  },
  {
    name: "David Park",
    company: "Innovation Labs",
    position: "Product Manager",
    rating: 5,
    text: "Professional, timely, and exceeded all expectations. The team's expertise in modern web technologies is evident in every aspect of our project. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    metric: "5-star experience",
    category: "Full-Stack Development"
  }
];

const Testimonials = ({ handleCTAClick }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6 border border-blue-100">
            <Users className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm">Client Success Stories</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">What Our Clients</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Don't just take our word for it. Here's what real businesses say about 
            working with us and the results they've achieved.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5.0★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-20 h-20 text-blue-600" />
            </div>
            
            {/* Category Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium text-sm">{currentData.category}</span>
            </div>

            {/* Stars */}
            <div className="flex items-center mb-6">
              {[...Array(currentData.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
              ))}
              <span className="ml-3 text-gray-600 font-medium">5.0 out of 5</span>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed mb-8 relative z-10">
              "{currentData.text}"
            </blockquote>

            {/* Metric Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-2xl mb-8 inline-block">
              <div className="flex items-center text-green-800">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-bold text-lg">{currentData.metric}</span>
              </div>
            </div>

            {/* Author Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={currentData.image}
                    alt={currentData.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-xl text-gray-900">{currentData.name}</div>
                  <div className="text-gray-600 font-medium">{currentData.position}</div>
                  <div className="text-blue-600 font-semibold">{currentData.company}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="bg-white/80 hover:bg-white border-2 border-gray-200 hover:border-blue-300 p-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
              }}
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 hover:shadow-xl ${
                index === currentTestimonial
                  ? 'border-blue-500 shadow-lg scale-105'
                  : 'border-white/50 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-xl object-cover mr-3"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <button 
                onClick={() => handleCTAClick && handleCTAClick('get-proposal')}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl flex items-center mx-auto transform hover:scale-105 hover:shadow-2xl"
              >
                <Award className="w-5 h-5 mr-2" />
                Start Your Success Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
