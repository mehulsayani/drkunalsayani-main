
import React from "react";
import AboutTvameva from "./AboutTvameva";
import Procedures from "./Procedure";
import EnvironmentTechnology from "./EnvironmentTechnology";
import ConsultationSection from "./ConsultationSection";

export const metadata = {
  title: "About Tvameva Aesthetic Surgery Center | Cosmetic and Aesthetic Surgery Centre in Mumbai",
  description: `Discover Tvameva Aesthetic Surgery Center in Andheri, Mumbai, your one stop destination for advanced cosmetic and plastic surgery care treatments with expert care and modern technology.`,
  keywords: ``,
};
export default function page() {
  return (
    <section className="pt-[8rem] max-lg:pt-[4rem]">
       {/* ✅ OG & Twitter Meta Tags */}
        <meta property="og:title" content="About Tvameva Aesthetics | Cosmetic and Aesthetic Surgery Centre in Mumbai" />
        <meta
          property="og:description"
          content="Discover Tvameva Aesthetic Surgery Center in Andheri, Mumbai, your one stop destination for advanced cosmetic and plastic surgery care treatments with expert care and modern technology."
        />
      <AboutTvameva />
      <EnvironmentTechnology />
      <Procedures />
      <ConsultationSection />
    </section>
  );
}