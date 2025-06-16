import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/chin-augmentation.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Do you feel your chin is too small, recessed, or lacks definition,
            creating an imbalance with your other facial features? A
            well-proportioned chin is fundamental to a balanced and
            aesthetically pleasing facial profile. At Dr. Kunal Sayani's
            state-of-the-art aesthetic clinic in Mumbai, we specialize in Chin
            Augmentation (Mentoplasty) – a transformative procedure designed to
            enhance the projection, shape, and overall harmony of your chin,
            creating a more defined and confident profile. Dr. Kunal Sayani, a
            leading aesthetic surgeon, combines his profound understanding of
            facial anatomy with an artistic vision to deliver precisely
            sculpted, naturallooking results that beautifully complement your
            unique face.
          </p>
          <p className="mb-3">
            Chin augmentation is a cosmetic surgical procedure that aims to
            improve the size, shape, and projection of the chin, bringing it
            into better balance with the forehead, nose, and other facial
            features. A recessed or underdeveloped chin can make the nose appear
            larger, the neck less defined, and the jawline less pronounced,
            impacting overall facial harmony.
          </p>
          <p className="mb-3">
            The procedure primarily involves the insertion of a biocompatible
            implant around the existing chin bone to enhance its dimensions.
            Alternatively, for minor adjustments or non-surgical options, dermal
            fillers can be used to add temporary volume. Dr. Kunal Sayani offers
            both surgical and non-surgical solutions, ensuring the best approach
            for your individual needs.
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
