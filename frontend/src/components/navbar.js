import React, { useState } from 'react';
import {
  Store,
  Phone,
  Search,
  ChevronDown,
  Bell,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/become-vendor" className="hover:text-blue-400 flex items-center gap-1">
              <Store size={14} />
              <span>Become a Vendor</span>
            </Link> {/* Updated to use Link for routing */}

            <a href="#" className="hover:text-blue-400 flex items-center gap-1">
              <Phone size={14} />
              <span>+216 26 990 263</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-blue-600">Bazario</a>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products, vendors, categories..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center space-x-1 hover:text-blue-600"
                >
                  <span>Categories</span>
                  <ChevronDown size={16} />
                </button>
                {isCategoryOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Electronics</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Fashion</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home & Garden</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sports</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Beauty</a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-blue-600">
                <Bell size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <Heart size={20} />
              </a>
              <a href="#" className="relative hover:text-blue-600">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </a>
              <a href="#" className="hover:text-blue-600">
                <User size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Categories</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Notifications</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Wishlist</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Cart</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Account</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
