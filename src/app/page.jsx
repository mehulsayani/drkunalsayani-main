"use client";
import Hero from "@/app/homepage/hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import AboutDoctor from "./homepage/AboutDoctor";
import AboutCompany from "./homepage/AboutCompany";
import Testimonials from "./homepage/Testimonials";
import Gallery from "./homepage/Gallery";
import Pricing from "./homepage/Pricing";
import Blog from "./homepage/Blog";
import Footer from "@/components/Footer";
import Specialization from "./homepage/Specialization";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <div className="fixed bg-[#1AAEBC] top-40 right-0 z-50 flex flex-col">
        {/* WhatsApp Appointment Button */}
        <Link
          href="/book-appointment"
          className="bg-[#25D366] text-white p-3 shadow-md hover:bg-[#1ebe5d] transition duration-200 flex items-center justify-center"
          aria-label="Book appointment via WhatsApp"
        >
          <FaWhatsapp size={20} />
        </Link>
        {/* Share Button */}
        <Link
          href="/call"
          className="bg-[#1AAEBC] text-white p-3 hover:bg-[#1597a4] transition duration-200 flex items-center justify-center"
          aria-label="Share this page"
        >
          <IoMdShare size={20} />
        </Link>

        
      </div>
      <Navbar />
      <Hero />
      <AboutDoctor />
      <Specialization />
      <AboutCompany />
      <Testimonials />
      <Gallery />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}
