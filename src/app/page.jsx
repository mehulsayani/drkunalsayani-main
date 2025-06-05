"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Hero from "@/app/homepage/hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import AboutDoctor from "./homepage/AboutDoctor";
import AboutCompany from "./homepage/AboutCompany";
import Testimonials from "./homepage/Testimonials";
import Gallery from "./homepage/Gallery";
import Blog from "./homepage/Blog";
import Specialization from "./homepage/Specialization";
import Aesthetics from "./homepage/Aesthetics";
import WhyChooseUs from "./homepage/WhyChooseUs";
import VideoSection from "./homepage/VideoSection";
import FAQ from "./homepage/FAQ";

import Banner from "./homepage/Banner";
import CTA from "@/components/CTA";

export default function page() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <Hero />
      <AboutDoctor />
      <Aesthetics />
      <Specialization />
      <AboutCompany />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Banner />
      <VideoSection />
      <Blog />
      <FAQ />
    </div>
  );
}
