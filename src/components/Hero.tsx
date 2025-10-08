import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }}
      ></div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="text-xs font-medium ml-2">Trusted by 50,000+ travelers</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
              Your World on <br />
              <span className="text-yellow-400">One</span> Platform
            </h1>
            
            <p className="text-sm text-blue-100 leading-relaxed max-w-lg">
              Explore, Plan, and Book your next adventure seamlessly with Xalleria, a multi-service travel platform, offering hotels, homestays, flights, safaris, taxi rides, events, travel insurance, and gifts all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl" onClick={() => window.location.href = 'https://stays.xalleria.com'}>
                <span>Start Exploring</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-blue-100">
              <div>
                <div className="text-xl font-bold text-white">500K+</div>
                <div className="text-xs">Happy Customers</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-xs">Countries</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-xs">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element - QuickBook positioned higher */}
          <div className="relative -mt-8 lg:-mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quick Book</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://stays.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">🏠</div>
                    <div className="font-medium text-sm">Homestays</div>
                  </a>
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://hotels.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">🏨</div>
                    <div className="font-medium text-sm">Hotels</div>
                  </a>
                  {/* 
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://flights.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">✈️</div>
                    <div className="font-medium text-sm">Flights</div>
                  </a>
                  */}
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://safaris.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">🦁</div>
                    <div className="font-medium text-sm">Safaris</div>
                  </a>
                  {/* 
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://taxi-booking.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">🚗</div>
                    <div className="font-medium text-sm">Taxixa</div>
                  </a>
                  */}
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://events.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">⛺️</div>
                    <div className="font-medium text-sm">Events</div>
                  </a>
                  {/* 
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://insurance.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">🛡️</div>
                    <div className="font-medium text-sm">Insurance</div>
                  </a>
                  */}
                  <a
                    className="bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                    href="https://shop.xalleria.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl mb-1">🎁</div>
                    <div className="font-medium text-sm">Gift Shop</div>
                  </a>
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