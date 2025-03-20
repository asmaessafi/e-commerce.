import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  Store,
  HelpCircle,
  FileText,
  Users,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Join Our Newsletter</h3>
            <p className="mb-6">Stay updated with the latest products, offers, and vendor updates</p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">About Bazario</h4>
            <p className="mb-4 text-sm leading-relaxed">
              Your premier destination for multi-vendor shopping. We connect quality sellers with 
              discerning buyers in a trusted Bazario environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/become-vendor" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Store size={16} />
                  <li>Become a Vendor</li>
                </Link>
              </li>
              <li>
                <Link to="/Help-Center" className="flex items-center gap-2 hover:text-white transition-colors">
                  <HelpCircle size={16} />
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link to="/Terms&Conditions" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FileText size={16} />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={16} />
                <span>TN , tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+216 26 990 263</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>bazario.market@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-green-500" />
                <span>Secure Payments</span>
              </li>
              <li className="flex items-center gap-3">
                <Truck size={16} className="text-blue-500" />
                <span>Fast Delivery</span>
              </li>
              <li className="flex items-center gap-3">
                <CreditCard size={16} className="text-purple-500" />
                <span>Easy Returns</span>
              </li>
              <li className="flex items-center gap-3">
                <Heart size={16} className="text-red-500" />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2025 Bazario. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visa.svg" alt="Visa" className="h-6 w-auto" />
              <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mastercard.svg" alt="Mastercard" className="h-6 w-auto" />
              <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/paypal.svg" alt="PayPal" className="h-6 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}