"use client";

import React from "react";
import AboutTvameva from "./AboutTvameva";
import Procedures from "./Procedure";
import EnvironmentTechnology from "./EnvironmentTechnology";
import ConsultationSection from "./ConsultationSection";

export default function page() {
  return (
    <section className="pt-[8rem] max-lg:pt-[4rem]">
      <AboutTvameva />
      <EnvironmentTechnology />
      <Procedures />
      <ConsultationSection />
    </section>
  );
}