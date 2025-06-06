"use client";

import React from "react";
import TopNavBanner from "./TopNavBanner";
import Overview from "./ServiceLayout";
import FAQSection from "./FAQSection";
import Testimonials from "@/app/homepage/Testimonials";
import ConsultationSection from "@/app/about-clinic/ConsultationSection";
import BeforeAfter from "./BeforeAfter";
import ServiceCandidate from "./ServiceCandidate";
import Knowledge from "./Knowledge";

export default function page() {
  return (
    <div className="pt-[8rem]">
      <TopNavBanner />
      <Overview />
      {/* <ServiceCandidate />
      <BeforeAfter />
      <Testimonials /> */}
      <Knowledge />
      <FAQSection />
      <ConsultationSection />
    </div>
  );
}
