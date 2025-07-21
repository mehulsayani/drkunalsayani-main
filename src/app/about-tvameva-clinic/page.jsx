
import React from "react";
import AboutTvameva from "./AboutTvameva";
import Procedures from "./Procedure";
import EnvironmentTechnology from "./EnvironmentTechnology";
import ConsultationSection from "./ConsultationSection";

export const metadata = {
  title: "About Tvameva Clinic | Cosmetic and Aesthetic Surgery Clinic in Mumbai",
  description: `Discover Tvameva Clinic in Andheri, Mumbai, your one stop destination for advanced cosmetic and plastic surgery care treatments with expert care and modern technology.`,
  keywords: ``,
};
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