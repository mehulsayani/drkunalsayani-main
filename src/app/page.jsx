"use client";

import React from "react";
import Head from "next/head";
import Script from "next/script";

import Hero from "@/app/homepage/hero/Hero";

import AboutDoctor from "./homepage/AboutDoctor";
import AboutCompany from "./homepage/AboutCompany";
import Testimonials from "./homepage/Testimonials";
import Gallery from "./homepage/Gallery";
import Blog from "./homepage/Blog";

import Specialization from "./homepage/Specialization";
import CTA from "../components/CTA";
import ScrollTop from "@/components/ScrollTop";
import Aesthetics from "./homepage/Aesthetics";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Dr. Kunal Sayani | Home</title>
        <meta
          name="description"
          content="Welcome to the official site of Dr. Kunal Sayani."
        />
      </Head>

      {/* Heatmap Script (Hotjar / Contentsquare) */}
      <Script type="text/javascript">
        {`
           (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rnj6hajak3");
        `}
      </Script>

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
    </div>
  );
}
