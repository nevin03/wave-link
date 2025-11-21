import React from "react";
import Link from "next/link";
import Typography from "@/shared/components/Typography";
import { MapsIcon, MessageIcon } from "@/shared/components/Icons";

const Footer = () => {
  return (
    <footer className="bg-[#171716] text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
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
            className="text-gray-400 max-w-xs leading-relaxed"
            text="Wavelink world wide empowers organizations with strategic consulting, deep insights, and proven solutions to thrive in an ever-changing world."
          />
        </div>

        {/* Spacer - balances layout */}
        <div className="hidden md:block"></div>

        {/* Contact Us */}
        <div>
          <Typography
            variant="heading6"
            className="text-white font-semibold mb-4"
            text="Contact Us"
          />

          <div className="space-y-3 text-sm">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapsIcon className="w-4 h-4 mt-1 flex-shrink-0" />
              <Typography
                variant="body2"
                className="text-gray-400"
                text="XI/334A6, Thottankara Tower, Vengoor, Kidangoor P.O., Angamaly, Ernakulam, Kerala, India - 683572"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <MessageIcon className="w-4 h-4 flex-shrink-0" />
              <a
                href="mailto:contact@vistara.com"
                className="hover:text-orange-400 transition"
              >
                <Typography variant="body2" text="contact@vistara.com" />
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919539346373"
                className="hover:text-orange-400 transition"
              >
                <Typography variant="body2" text="+91 95393 46373" />
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <Typography
            variant="heading6"
            className="text-white font-semibold mb-4"
            text="Follow Us"
          />

          <div className="space-y-2 text-sm">
            <a href="#" className="hover:text-orange-400 transition block">
              Facebook
            </a>
            <a href="#" className="hover:text-orange-400 transition block">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-400 transition block">
              Thread
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

        {/* Left side */}
        <Typography
          variant="body2"
          className="text-center md:text-left"
          text="© 2025 Wavelink World Wide. All rights reserved."
        />

        {/* Right side */}
        <Link
          href="/terms-and-conditions"
          className="hover:text-orange-400 transition mt-4 md:mt-0"
        >
          <Typography variant="body2" text="Terms & Conditions" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
