"use client";

import Link from "next/link";
import Button from "@/shared/components/Button/index";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="h-10 w-auto object-contain select-none"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium"
        >
          Contact
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Button
          variant="orange-outline"
          loading={false}
          loadingText="Loading..."
          radius="full"
          size="sm"
        >
          Contact us
        </Button>
        <Button
          variant="filled"
          className="bg-gradient-to-r from-orange-400 to-amber-500 text-black px-6 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 font-semibold hover:scale-105"
          size="sm"
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
}
