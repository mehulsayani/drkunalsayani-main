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
import CTA from "./homepage/hero/CTA";


export default function page() {
  return (
    <div>
      <CTA/>
      <Navbar />
      <Hero />
      <AboutDoctor />
      <Specialization />
      <AboutCompany />
      <Testimonials />
      <Gallery />
      {/* <Pricing /> */}
      <Blog />
      <Footer />
    </div>
  );
}
