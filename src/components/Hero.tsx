import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-medium ml-2">Trusted by 50,000+ travelers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Gateway to
              <span className="text-yellow-400"> Unforgettable </span>
              Adventures
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
              Book everything you need for your perfect journey - from cozy homestays to thrilling safaris, 
              all in one trusted platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start Exploring</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-800 transition-all duration-200">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-blue-100">
              <div>
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Quick Book</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="font-medium">Homestays</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
                    <div className="text-2xl mb-2">🏨</div>
                    <div className="font-medium">Hotels</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
                    <div className="text-2xl mb-2">✈️</div>
                    <div className="font-medium">Flights</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
                    <div className="text-2xl mb-2">🦁</div>
                    <div className="font-medium">Safaris</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
                    <div className="text-2xl mb-2">🚗</div>
                    <div className="font-medium">Taxi Booking</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
                    <div className="text-2xl mb-2">⛺️</div>
                    <div className="font-medium">Events</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;