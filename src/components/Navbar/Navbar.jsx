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
      <div className=" w-full max-lg:w-[90%] flex items-center justify-between flex-col">
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
            <divnk
              href="/about-doctor"
              className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left"
            >
              About Dr Kunal Sayani
            </divnk>
            <divnk
              href="/about-clinic"
              className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left"
            >
              About Tvameva Clinic
            </divnk>

            <div className="inline-block align-middle ">
              {/* hover:text-[#1AAEBC] duration-500 text-gray-700 
          relative cursor-pointer  after:content-[''] after:absolute after:bottom-0 after:left-0 
          after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right 
          after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left */}
              <Dropdown />
            </div>
            <divnk
              href="/reviews"
              className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left"
            >
              Reviews
            </divnk>
            <divnk
              href="/gallery"
              className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left"
            >
              Gallery
            </divnk>
            <divnk
              href="/pricing"
              className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left"
            >
              Pricing
            </divnk>
            <divnk
              href="/blog"
              className="hover:text-[#1AAEBC] duration-500 text-gray-700 relative inline-block cursor-pointer overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1AAEBC] after:rounded-[10px] after:scale-x-0 after:origin-right after:transition-transform after:duration-400 hover:after:scale-x-100 hover:after:origin-left"
            >
              Blog
            </divnk>
          </nav>

          {/* Right-side controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4 max-lg:hidden">
              {/* <CallForm /> */}
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
              className="lg:hidden text-3xl p-2 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      <div className="w-full bg-gray-100 border-t text-sm font-medium text-gray-700">
  <div className="max-w-7xl mx-auto flex justify-evenly items-center h-10">
    {/* Dropdown Menu Item */}
    {[
      {
        title: "Body",
        items: ["Tummy Tuck (Abdominoplasty)", "Liposuction", "Body Contouring", "Arm Lift"],
      },
      {
        title: "Breast",
        items: ["Breast Augmentation", "Breast Lift", "Breast Reduction", "Gynecomastia"],
      },
      {
        title: "Hair",
        items: ["Hair Transplant", "PRP Therapy", "Hair Restoration"],
      },
      {
        title: "Face",
        items: ["Rhinoplasty", "Facelift", "Blepharoplasty", "Chin Augmentation"],
      },
      {
        title: "Non Surgical",
        items: ["Botox", "Fillers", "Laser Treatments", "Skin Rejuvenation"],
      },
      {
        title: "Mommy Makeover",
        items: ["Tummy Tuck", "Breast Lift", "Stretch Mark Removal"],
      },
      {
        title: "Men",
        items: ["Hair Transplant", "Gynecomastia", "Body Sculpting"],
      },
    ].map((section, index) => (
      <div key={index} className="relative group cursor-pointer">
        <span className="hover:text-[#40AEB9] transition-colors">{section.title}</span>

        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg w-56 z-10">
          <div className="flex flex-col py-2 px-4 space-y-2">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="hover:text-[#40AEB9] transition-colors cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
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
            className="self-end text-2xl p-2"
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
          className="lg:hidden fixed inset-0 bg-[#1aaebc5b] bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
}
