"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/shared/components/Button/index";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // SVG Icon Components
  const MenuIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-sm border-b border-gray-800/50" : "bg-black"
        } text-white px-6 py-4 flex items-center justify-between`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-auto object-contain select-none"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
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

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
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
          Free Consultation
        </Button>
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col p-6 pt-20 border-l border-gray-800/50`}
      >
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="text-white hover:text-orange-400 transition-colors duration-300 font-medium text-lg"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium text-lg"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-medium text-lg"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <Button
            variant="orange-outline"
            loading={false}
            loadingText="Loading..."
            radius="full"
            size="md"
            onClick={toggleMenu}
          >
            Contact us
          </Button>
          <Button
            variant="filled"
            className="bg-gradient-to-r from-orange-400 to-amber-500 text-black px-6 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 font-semibold hover:scale-105"
            size="md"
            onClick={toggleMenu}
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
}
