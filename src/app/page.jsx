"use client";

import React from "react";
import Head from "next/head";
import Script from "next/script";

import Hero from "@/app/homepage/hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
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

export default function Page() {
  return (
    <div>
      <Head>
        <title>Dr. Kunal Sayani | Home</title>
        <meta name="description" content="Welcome to the official site of Dr. Kunal Sayani." />
      </Head>

      {/* Heatmap Script (Hotjar / Contentsquare) */}
      <Script id="hotjar-script" strategy="afterInteractive">
        {`
          (function (c, s, q, u, a, r, e) {
            c.hj = c.hj || function () { (c.hj.q = c.hj.q || []).push(arguments) };
            c._hjSettings = { hjid: 6412232 };
            r = s.getElementsByTagName('head')[0];
            e = s.createElement('script');
            e.async = true;
            e.src = q + c._hjSettings.hjid + u;
            r.appendChild(e);
          })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6412232);
        `}
      </Script>

      <Navbar />
      <CTA />
      <Hero />
      <AboutDoctor />
      <Specialization />
      <AboutCompany />
      <Aesthetics />
      <Testimonials />
      <Gallery />
      <Blog />
      <ScrollTop />
      <Footer />
    </div>
  );
}
