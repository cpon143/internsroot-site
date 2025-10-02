
import React from "react";
import {
  Award,
  Shield,
  Zap,
  ArrowRight,
  Eye,
  ExternalLink,
  Star,
  TrendingUp,
  Search,
  Users,
  CheckCircle,
} from "lucide-react";

const Hero = ({ handleCTAClick }) => (
  <section
    id="home"
    className="pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center relative overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* Trust badges */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">
                5-Star Rated
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">
                100% Secure
              </span>
            </div>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block mb-2">Premium</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
            <span className="block text-4xl lg:text-5xl text-gray-700 mt-4">
              that drive real results
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Enterprise-grade web applications and mobile solutions engineered for
            maximum performance, search visibility, and conversion optimization.
            Trusted by 100+ businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <button
              onClick={() => handleCTAClick && handleCTAClick("get-proposal")}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <Zap className="mr-3 w-5 h-5 group-hover:animate-pulse" />
              Get Free Strategy Call
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleCTAClick && handleCTAClick("view-portfolio")}
              className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg font-semibold flex items-center justify-center backdrop-blur bg-white/80"
            >
              <Eye className="mr-3 w-5 h-5" />
              View Case Studies
              <ExternalLink className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Enhanced Social Proof */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">5.0★</div>
              <div className="text-sm text-gray-600">Client Rating</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">48h</div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by leading companies:
            </p>
            <div className="flex items-center space-x-8 opacity-60">
              <div className="bg-gray-200 px-6 py-2 rounded-lg text-sm font-semibold text-gray-600">
                TechCorp
              </div>
              <div className="bg-gray-200 px-6 py-2 rounded-lg text-sm font-semibold text-gray-600">
                StartupX
              </div>
              <div className="bg-gray-200 px-6 py-2 rounded-lg text-sm font-semibold text-gray-600">
                GrowthCo
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Dashboard */}
        <div className="relative">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Performance Dashboard
              </h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Live Data</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-xs text-blue-600 font-medium">+23%</span>
                </div>
                <div className="text-2xl font-bold text-blue-900">1.8s</div>
                <div className="text-xs text-blue-600">Load Time</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <Search className="w-5 h-5 text-green-600" />
                  <span className="text-xs text-green-600 font-medium">A+</span>
                </div>
                <div className="text-2xl font-bold text-green-900">98</div>
                <div className="text-xs text-green-600">SEO Score</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-xs text-purple-600 font-medium">
                    +165%
                  </span>
                </div>
                <div className="text-2xl font-bold text-purple-900">87%</div>
                <div className="text-xs text-purple-600">Conversion</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="text-xs text-orange-600 font-medium">
                    100%
                  </span>
                </div>
                <div className="text-2xl font-bold text-orange-900">A+</div>
                <div className="text-xs text-orange-600">Security</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">All Systems Optimal</span>
                </div>
                <div className="text-xs opacity-90">Last updated: 2min ago</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-lg">
            <Award className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

