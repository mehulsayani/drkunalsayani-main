import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/breast/Breast Augmentation.jpeg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Breast Augmentation, also known as augmentation mammoplasty, is one
            of the most popular cosmetic procedures worldwide. It involves the
            use of implants or fat transfer to enhance the size, shape, and
            symmetry of the breasts. Women choose this procedure for various
            reasons, including restoring breast volume lost aŌer pregnancy or
            weight loss, improving body proportion, or simply achieving the
            desired breast size for increased self-confidence.
          </p>
          <p className="mb-3">
            At Dr. Kunal Sayani’s Aesthetic Surgery Clinic, breast augmentation
            is approached with artistry, precision, and personalized care.
            Whether you seek subtle enhancement or a more dramatic
            transformation, Dr. Sayani customizes the procedure to reflect your
            goals and natural anatomy, delivering beautiful, balanced, and
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
