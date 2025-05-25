"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import CallForm from "./CallForm";
import ToggleSubMenu from "./ToggleSubMenu";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 flex items-center justify-center">
      <div className="max-w-[1200px] w-full max-lg:w-[90%] py-1 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-black flex-shrink-0">
          <Image
            src="/images/components/navbar/logo.png"
            alt="Gynecomastia"
            width={200}
            height={200}
            className="w-20 h-20 max-lg:w-16 max-lg:h-16 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
             {/* Top Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/about-doctor" className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">
            About Dr Kunal Sayani
          </Link>
          <Link href="/about-clinic" className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">
            About Tvameva Clinic
          </Link>

          <div className="inline-block align-middle ">
            {/* hover:text-[#1AAEBC] duration-500 text-gray-700 
          relative cursor-pointer  after:content-[''] after:absolute after:bottom-0 after:left-0 
          after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right 
          after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left */}
            <Dropdown />
          </div>
          <Link
            href="/reviews"
            className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left"
          >
            Reviews
          </Link>
          <Link href="/gallery" className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">
            Gallery
          </Link>
          <Link href="/pricing" className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left">
            Blog
          </Link>
        </nav>

        {/* Right-side controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 max-lg:hidden">
            <CallForm />
          <a
            href="/book-appointment"
            className="bg-[#1AAEBC] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-medium hover:bg-[#148d98] transition-colors duration-200"
          >
            Book Appointment
          </a>
          </div>
          {/* Hamburger Icon */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-2xl text-[#1AAEBC] p-2 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white shadow-md overflow-hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-3/4 sm:w-1/2 z-50`}
      >
        <div className="px-4 py-4 space-y-3 flex flex-col h-full">
          <button
            onClick={toggleMobileMenu}
            className="self-end text-2xl text-[#1AAEBC] p-2"
            aria-label="Close menu"
          >
            <FiX />
          </button>
          <a
            href="/about-doctor"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-[#1AAEBC] text-base font-medium transition-colors duration-200"
          >
            About Dr Kunal Sayani
          </a>
          <a
            href="/about-clinic"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-[#1AAEBC] text-base font-medium transition-colors duration-200"
          >
            About Tvameva Clinic
          </a>
          <ToggleSubMenu isMobile />
          <a
            href="/reviews"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-[#1AAEBC] text-base font-medium transition-colors duration-200"
          >
            Reviews
          </a>
          <a
            href="/gallery"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-[#1AAEBC] text-base font-medium transition-colors duration-200"
          >
            Gallery
          </a>
          <a
            href="/pricing"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-[#1AAEBC] text-base font-medium transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="/blog"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-[#1AAEBC] text-base font-medium transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="/book-appointment"
            onClick={toggleMobileMenu}
            className="bg-[#1AAEBC] text-white px-4 py-2 rounded-md text-center text-base font-medium hover:bg-[#148d98] transition-colors duration-200"
          >
            Book Appointment
          </a>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
}


