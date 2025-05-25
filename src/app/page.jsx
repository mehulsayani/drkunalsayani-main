"use client";
import Hero from "@/app/homepage/hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import AboutDoctor from "./homepage/AboutDoctor";
import AboutCompany from "./homepage/AboutCompany";
import Testimonials from "./homepage/Testimonials";
import Gallery from "./homepage/Gallery";
import Blog from "./homepage/Blog";
import Footer from "@/components/Footer";
import Specialization from "./homepage/Specialization";
import CTA from "../components/CTA";
import ScrollTop from "@/components/ScrollTop";
import Aesthetics from "./homepage/Aesthetics";
import WhyChooseUs from "./homepage/WhyChooseUs";
import VideoSection from "./homepage/VideoSection";
import FAQ from "./homepage/FAQ";

export default function page() {
  return (
    <div>
      <CTA />
      <Hero />
      <AboutDoctor />
      <Specialization />
      <AboutCompany />
      <WhyChooseUs />
      <Testimonials />
      <Aesthetics />
      <Gallery />
      <VideoSection />
      <Blog />
      <FAQ />
      <ScrollTop />
    </div>
  );
}
