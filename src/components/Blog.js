import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react'; // Ensure lucide-react is installed

const blogPosts = [
  {
    title: "10 Core Web Vitals Fixes That Boost Your Google Rankings",
    excerpt: "Learn how to optimize LCP, INP, and CLS for better search performance and user experience.",
    date: "Sep 25, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop",
    category: "SEO"
  },
  {
    title: "React vs Next.js: Which Framework to Choose in 2025",
    excerpt: "Complete comparison guide for modern web development projects and when to use each framework.",
    date: "Sep 22, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=300&h=200&fit=crop",
    category: "Development"
  },
  {
    title: "WordPress Performance: From 4s to Under 2s Load Time",
    excerpt: "Step-by-step guide to dramatically improve your WordPress site's loading speed and Core Web Vitals.",
    date: "Sep 20, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop",
    category: "WordPress"
  }
];

const Blog = () => (
  <section id="blog" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Latest Insights
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest web development trends, SEO tips, and performance optimization techniques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 
                onClick={() => window.open(`https://internsroot.blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div 
                onClick={() => window.open(`https://internsroot.blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                <span className="font-semibold">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={() => window.open('https://internsroot.blog', '_blank')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          View All Posts
        </button>
      </div>
    </div>
  </section>
);

export default Blog;
