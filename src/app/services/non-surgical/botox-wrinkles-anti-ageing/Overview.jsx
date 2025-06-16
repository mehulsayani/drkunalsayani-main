import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/nonsurgical/Botox (wrinkles-anti-ageing).jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Are you noticing the persistent presence of frown lines, crow's
            feet, or forehead wrinkles that make you appear tired, angry, or
            older than you feel? At Dr. Kunal Sayani's state-of-the-art
            aesthetic clinic in Mumbai, we offer expertly administered Botox
            treatments designed to soften these dynamic wrinkles, restoring a
            smoother, more refreshed, and naturally youthful appearance. Dr.
            Kunal Sayani, a highly respected aesthetic surgeon, combines his
            in-depth knowledge of facial anatomy with a keen artistic eye to
            deliver beautiful, natural-looking results that enhance your unique
            expressions.
          </p>
          <p className="mb-3">
            Botox (Botulinum Toxin Type A) is the world's most popular
            non-surgical cosmetic treatment, renowned for its ability to reduce
            the appearance of dynamic wrinkles. These are the lines that form
            due to repetitive facial muscle movements, such as smiling,
            frowning, squinting, and raising eyebrows. When you make these
            expressions, your muscles contract, and over time, these
            contractions create lines and creases in the overlying skin.
          </p>
          <p className="mb-3">
            Botox works by temporarily relaxing these specific facial muscles.
            By blocking nerve signals to the targeted muscles, Botox prevents
            them from contracting, thereby smoothing out the wrinkles. The
            result is a more relaxed and rejuvenated complexion, while still
            allowing for natural facial expressions when administered by a
            skilled practitioner.
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
