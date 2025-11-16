import React from "react";
import { MapsIcon, MessageIcon } from "@/shared/components/Icons";

const Footer = () => {
  return (
    <footer className="bg-[#171716] text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            {/* Replace with your actual logo path */}
            <img
              src="/logo.png" // Replace with your actual logo path
              alt="Wavelink World Wide Logo"
              className="h-10 w-auto"
            />
            <span className="text-white font-bold text-lg">Wavelink World Wide</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Wavelink world wide empowers organizations with strategic consulting, deep insights, and proven solutions to thrive in an ever-changing world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-orange-400 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-400 transition">Services</a>
            </li>
            <li>
              <a href="/case-studies" className="hover:text-orange-400 transition">Case Studies</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact" className="hover:text-orange-400 transition">Contact Us</a>
            </li>
            <li>
              <a href="/reviews" className="hover:text-orange-400 transition">Reviews</a>
            </li>
            <li>
              <a href="/404" className="hover:text-orange-400 transition">404 Error</a>
            </li>
            <li>
              <a href="/license" className="hover:text-orange-400 transition">License</a>
            </li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-4">Location & Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapsIcon className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-400">
                XI/334A6, Thottankara Tower, Vengoor, Kidangoor P.O., Angamaly, Ernakulam, Kerala, India - 683572
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MessageIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <a href="mailto:contact@vistara.com" className="hover:text-orange-400 transition">
                contact@vistara.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 text-gray-500 flex-shrink-0 flex items-center justify-center">
                [Phone]
              </span>
              <a href="tel:+919539346373" className="hover:text-orange-400 transition">
                +91 95393 46373
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-orange-400 transition">Facebook</a>
          <span className="text-gray-600"></span>
          <a href="#" className="hover:text-orange-400 transition">Instagram</a>
          <span className="text-gray-600"></span>
          <a href="#" className="hover:text-orange-400 transition">Thread</a>
        </div>
        <p>© 2025 wave link world wide All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;