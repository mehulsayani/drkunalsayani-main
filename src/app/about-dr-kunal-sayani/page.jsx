import Image from "next/image";
import React from "react";
import Membership from "./Membership";
import Quote from "./Quote";
import Affiliations from "./Affiliations";
import ConsultationSection from "../about-clinic/ConsultationSection";

export default function DrKunalSayani() {
  return (
    <div className="pt-[8rem] max-lg:pt-[4rem]  font-[roboto]">
      <section className=" px-4 bg-[#E5F4F6] max-lg:pb-10 ">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-8 max-lg:flex-col-reverse justify-center">
          <div className="flex-1 max-lg:text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#10217D] font-[Noto_Sans]">
              Dr. Kunal Sayani
            </h1>
            <p className="text-lg mb-6 text-[#000000] font-bold font-[Noto_Sans]">
              MCh in Plastic & Reconstructive Surgery from the prestigious Grant
              Medical College and Sir J.J. Hospital, Mumbai.
            </p>
            <p className="text-md mb-4 text-[#000000] max-w-2xl">
              Dr. Kunal Sayani is a distinguished Plastic & Aesthetic Surgeon
              based in Andheri, Mumbai, with over 8 years of experience in
              aesthetic and reconstructive surgery. Known for his
              patient-centric approach and surgical precision, he blends
              advanced medical expertise with a refined aesthetic sense —
              delivering results that are both natural and transformative.
            </p>
            <p className="text-md mb-2 text-[#000000] max-w-2xl">
              He completed his MCh in Plastic & Reconstructive Surgery and MS in
              General Surgery at the esteemed Grant Medical College and Sir J.J.
              Hospital, Mumbai. He also holds a Doctorate of National Board
              (DrNB) from New Delhi.
            </p>
            <p className="text-md text-[#000000] max-w-2xl">
              Dr. Sayani is among the few plastic surgeons in India with dual
              degrees (MCh & DrNB), including National Board certification.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/homepage/hero/kunal.png"
              width={376} // 23.5rem * 16 (Tailwind base unit)
              height={500}
              alt="Dr. Kunal Sayani"
              className="rounded-2xl w-[23.5rem] h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <Membership/>
      <Quote/>
      <Affiliations/>
      <ConsultationSection/>
    </div>
  );
}
