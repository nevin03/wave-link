"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/shared/components/Button/index";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-gray-800/50 backdrop-blur-md sticky top-0 z-[999]">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="h-8 sm:h-10 w-auto object-contain select-none"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-orange-400 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-orange-400 font-medium transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-orange-400 font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="orange-outline" size="sm" radius="full">
            Contact us
          </Button>
          <Button
            variant="filled"
            size="sm"
            radius="full"
            className="bg-gradient-to-r from-orange-400 to-amber-500 text-black"
          >
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-black border-l border-gray-800 z-[1000] transition-transform duration-300 ease-out p-6 flex flex-col gap-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close icon */}
        <button
          className="self-end text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Links */}
        <div className="flex flex-col gap-6 text-lg font-medium">
          <Link
            href="/"
            className="text-white hover:text-orange-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-orange-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-orange-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-4">
          <Button fullWidthOnMobile variant="orange-outline" size="md">
            Contact us
          </Button>
          <Button
            fullWidthOnMobile
            variant="filled"
            size="md"
            className="bg-gradient-to-r from-orange-400 to-amber-500 text-black"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </>
  );
}
