"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { FiPhoneCall } from "react-icons/fi";
import CallForm from "./CallForm";

export default function Navbar() {
  const pathname = usePathname();
  const [selectedGender, setSelectedGender] = useState(
    pathname.includes("/men") ? "Men" : "Women"
  );

  const toggleGender = () => {
    setSelectedGender((prev) => (prev === "Men" ? "Women" : "Men"));
  };

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-[1200px] w-full mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          <Image
            src="/components/navbar/logo.png"
            alt="Gynecomastia"
            width={75}
            height={75}
          />
        </Link>

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
        <div className="flex gap-4">
          <CallForm />
          {/* Appointment Button */}
          <Link
            href="/book-appointment"
            className="bg-[#1AAEBC] text-white px-4 py-2 rounded-lg"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
