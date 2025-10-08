import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Homestays', href: 'https://stays.xalleria.com' },
    { name: 'Hotels', href: 'https://hotels.xalleria.com' },
    { name: 'Events', href: 'https://events.xalleria.com' },
     { name: 'Flight Tickets', href: 'https://air-tickets.xalleria.com' },
   // { name: 'Taxixa', href: 'https://taxi-booking.xalleria.com' },
    { name: 'Safaris', href: 'https://safaris.xalleria.com' },
    // { name: 'Travel Insurance', href: 'https://insurance.xalleria.com' },
    { name: 'Gift Shop', href:'https://shop.xalleria.com' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Xalleria Logo" className="h-12 w-16" />
            <span className="text-2xl font-bold text-blue-600">Xalleria</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
                <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                </a>
            ))}
          </nav>

          {/*
          <div className="hidden lg:flex items-center space-x-4">

            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm hover:shadow-md">
              Book Now
            </button>
          </div> */}
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;