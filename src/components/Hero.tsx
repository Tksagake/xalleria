import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1615277716590-d87d101caa70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJ8ZW58MHx8MHx8fDA%3D)'
        }}
      ></div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-70"></div>
      
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
              Discover stays, flights, safaris, and more – all with exclusive deals and trusted hosts, 
              tailored to make every journey seamless and unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl" onClick={() => window.location.href = 'https://stays.xalleria.com'}>
                <span>Start Exploring</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
             {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-800 transition-all duration-200">
                Watch Demo 
              </button>   */}
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
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://stays.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">🏠</div>
                <div className="font-medium">Homestays</div>
                </a>
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://hotels.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">🏨</div>
                <div className="font-medium">Hotels</div>
                </a>
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://flights.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">✈️</div>
                <div className="font-medium">Flights</div>
                </a>
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://insurance.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">🦁</div>
                <div className="font-medium">Safaris</div>
                </a>
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://taxi-booking.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">🚗</div>
                <div className="font-medium">Taxixa</div>
                </a>
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://events.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">⛺️</div>
                <div className="font-medium">Events</div>
                </a>
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://insurance.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">🛡️</div>
                <div className="font-medium">Insurance</div>
                </a>
                <a
                className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer block"
                href="https://shop.xalleria.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className="text-2xl mb-2">🎁</div>
                <div className="font-medium">Gift Shop</div>
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