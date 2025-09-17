import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const serviceLinks = [
    'Homestays', 'Hotels', 'Events', 'Flight Tickets', 
    'Taxixa', 'Safaris', 'Travel Insurance'
  ];

  const quickLinks = [
    'About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 
    'Help Center', 'Careers', 'Press', 'Partnerships'
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Xalleria Logo" className="h-8 w-12" />
              <span className="text-2xl font-bold">Xalleria</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all travel needs. Book with confidence 
              and create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">info@xalleria.com</p>
                  
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">+254-700-314-522</p>
                  <p className="text-gray-400">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <p className="text-gray-400">
                  Westlands, Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Xalleria. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;