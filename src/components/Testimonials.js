import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Startup",
    rating: 5,
    text: "Exceptional work! Our website's conversion rate increased by 150% after the redesign. The attention to detail and SEO optimization was outstanding.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Mark Rodriguez",
    company: "E-commerce Business",
    rating: 5,
    text: "The Android app delivered exactly what we needed. User engagement is up 200% and the app performs flawlessly across all devices.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Emily Chen",
    company: "Marketing Agency",
    rating: 5,
    text: "Our WordPress site loads lightning fast now. The SEO improvements brought us to page 1 for our target keywords within 3 months.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from real businesses
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white/50 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-white" : "bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
