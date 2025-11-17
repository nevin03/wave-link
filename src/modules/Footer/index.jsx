import React from "react";
import Typography from "@/shared/components/Typography";
import { MapsIcon, MessageIcon } from "@/shared/Components/Icons";

const Footer = () => {
  return (
    <footer className="bg-[#171716] text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Wavelink World Wide Logo"
              className="h-10 w-auto"
            />
            <Typography
              variant="heading5"
              className="text-white font-bold"
              text="Wavelink World Wide"
            />
          </div>

          <Typography
            variant="body2"
            className="text-gray-400 max-w-xs"
            text="Wavelink world wide empowers organizations with strategic consulting, deep insights, and proven solutions to thrive in an ever-changing world."
          />
        </div>

        <div>
          <Typography
            variant="heading6"
            className="text-white font-semibold mb-4"
            text="Quick Links"
          />

          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-orange-400 transition">Services</a></li>
            <li><a href="/case-studies" className="hover:text-orange-400 transition">Case Studies</a></li>
          </ul>
        </div>

        <div>
          <Typography
            variant="heading6"
            className="text-white font-semibold mb-4"
            text="Resources"
          />

          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-orange-400 transition">Contact Us</a></li>
            <li><a href="/reviews" className="hover:text-orange-400 transition">Reviews</a></li>
            <li><a href="/404" className="hover:text-orange-400 transition">404 Error</a></li>
            <li><a href="/license" className="hover:text-orange-400 transition">License</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <Typography
            variant="heading6"
            className="text-white font-semibold mb-4"
            text="Location & Contact"
          />

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapsIcon className="w-4 h-4mt-0.5 flex-shrink-0" />
              <Typography
                variant="body2"
                className="text-gray-400"
                text="XI/334A6, Thottankara Tower, Vengoor, Kidangoor P.O., Angamaly, Ernakulam, Kerala, India - 683572"
              />
            </div>

            <div className="flex items-center gap-2">
              <MessageIcon className="w-4 h-4 flex-shrink-0" />
              <a
                href="mailto:contact@vistara.com"
                className="hover:text-orange-400 transition"
              >
                <Typography variant="body2" text="contact@vistara.com" />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:+919539346373"
                className="hover:text-orange-400 transition"
              >
                <Typography variant="body2" text="+91 95393 46373" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-orange-400 transition">
            <Typography variant="body2" text="Facebook" />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <Typography variant="body2" text="Instagram" />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <Typography variant="body2" text="Thread" />
          </a>
        </div>

        <Typography
          variant="body2"
          text="© 2025 Wavelink World Wide. All rights reserved."
        />
      </div>
    </footer>
  );
};

export default Footer;