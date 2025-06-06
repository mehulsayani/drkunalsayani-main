"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollTop from "@/components/ScrollTop";
import { useState, useEffect } from "react";
import SecondNavbar from "@/components/Navbar/SecondNavbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <SecondNavbar/>
      <main>{children}</main>
      <ScrollTop />
      <Footer />
      <CTA />
    </>
  );
}
