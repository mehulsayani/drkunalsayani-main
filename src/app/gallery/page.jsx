import React from "react";
import TopNavBanner from "./TopNavBanner";
import Gallery from "./Gallery";
import ConsultationSection from "../about-tvameva-clinic/ConsultationSection";

export default function page() {
  return (
    <div className="pt-[8rem] max-lg:pt-[5rem]">
      <TopNavBanner />
      <Gallery />
      <ConsultationSection />
    </div>
  );
}
