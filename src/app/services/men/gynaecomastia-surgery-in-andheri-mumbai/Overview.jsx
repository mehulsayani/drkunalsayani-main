import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/Gynaecomastia.jpeg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Gynecomastia is a common condition characterized by the enlargement
            of male breast tissue, oŌen referred to as "man boobs." This
            condition arises primarily due to hormonal imbalances, leading to
            the development of excess glandular tissue and sometimes fat in the
            chest area. While not life-threatening, gynecomastia can cause
            significant physical discomfort, social embarrassment, and
            psychological distress, including anxiety and lowered self-esteem.
          </p>
          <p className="mb-3">
            Dr. Kunal Sayani, one of the top plastic surgeon in Mumbai,
            specializes in gynecomastia surgery that offers a permanent and
            effective solution to this condition. His approach focuses on
            restoring a flamer, firmer, and more masculine chest contour using
            advanced, minimally invasive techniques. Patients benefit not only
            from improved physical appearance but also from enhanced confidence
            and quality of life.
          </p>
        </div>
        <section id="procedure-details">
          <Knowledge />
        </section>
        <section id="why-choose-us">
          <ServiceCandidate />
        </section>
      </div>
    </section>
  );
}
