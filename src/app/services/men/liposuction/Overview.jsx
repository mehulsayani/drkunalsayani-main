import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/liposuction.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Are you struggling with stubborn pockets of fat that resist diet and
            exercise? Do you dream of a more contoured and proportionate figure?
            At Dr. Kunal Sayani's state-of-the-art aesthetic clinic, we
            understand the desire for a sculpted physique. Liposuction, a proven
            and popular body contouring procedure, offers a transformative
            solution to eliminate unwanted fat and reveal the natural contours
            of your body. Dr. Kunal Sayani, a leading aesthetic surgeon, is
            dedicated to helping you achieve your aesthetic goals with
            precision, artistry, and a commitment to your safety and
            satisfaction.
          </p>
          <p className="mb-3">
            Liposuction, also known as lipoplasty or fat suction, is a surgical
            procedure designed to permanently remove localized fat deposits from
            various areas of the body. It's not a weight-loss solution, but
            rather a body sculpting technique for individuals who are near their
            ideal weight but have specific areas of excess fat that are
            disproportionate to the rest of their body. Under the expert care of
            Dr. Kunal Sayani, you can achieve a smoother, more defined, and
            harmonious silhouette.
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
