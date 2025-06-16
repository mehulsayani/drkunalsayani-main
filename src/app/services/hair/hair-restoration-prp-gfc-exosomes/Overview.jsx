import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/hair/2149152753.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Hair loss can be a deeply personal and often distressing experience,
            impacting self-esteem and overall quality of life. At our clinic,
            Dr. Kunal Sayani understands the emotional toll of hair thinning and
            balding. We are dedicated to offering cutting-edge, non-surgical
            hair restoration solutions that harness your body's natural
            regenerative capabilities to stimulate hair growth and restore
            density. With a focus on personalized care and advanced techniques,
            Dr. Kunal Sayani helps both men and women achieve remarkable,
            natural-looking results.
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
