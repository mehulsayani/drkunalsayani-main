"use client";

import React from "react";
import AboutTvameva from "./AboutTvameva";
import Procedures from "./Procedure";
import EnvironmentTechnology from "./EnvironmentTechnology";
import ConsultationSection from "./ConsultationSection";

export default function page() {
  return (
    <section className="flex justify-center items-center flex-col">
      <AboutTvameva />
      <EnvironmentTechnology />
      <Procedures />
      <ConsultationSection />
    </section>
  );
}
