import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/face/Prominent Ear Surgery (Otoplasty).jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Prominent ears, often a source of self-consciousness, can be
            effectively corrected with Otoplasty, also known as prominent ear
            surgery or ear pinning. This surgical procedure reshapes, resizes,
            or repositions the ears to create a more balanced and aesthetically
            pleasing appearance. At our clinic, Dr. Kunal Sayani specializes in
            Otoplasty, helping patients of all ages achieve natural-looking
            results and renewed self-confidence.
          </p>
          <p className="mb-3">
            Otoplasty is a cosmetic surgical procedure designed to alter the
            shape, position, or size of the ears. It is commonly performed to
            correct ears that protrude significantly from the sides of the head
            ("prominent ears"). However, it can also address various other
            concerns, including:
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              Overly large ears (macrotia): Reducing the overall size of the
              ears.
            </li>
            <li>
              Lop ear deformity: Correcting ears where the top seems to fold
              down or forward.
            </li>
            <li>Cupped ear: Addressing unusually small ears.</li>
            <li>
              Shell ear: When the natural curve in the outer rim and other folds
              are missing
            </li>
            <li>
              Constricted ears or "cryptotia": Where part of the ear cartilage
              is hidden beneath the skin.
            </li>
            <li>Asymmetrical ears: Improving the balance between the ears.</li>
            <li>
              Earlobe abnormalities: Reshaping stretched, torn, or overly large
              earlobes
            </li>
            <li>
              Correction of previous ear surgery: Revising unsatisfactory
              results from a prior Otoplasty.
            </li>
          </ul>
          <p className="mb-3">
            The primary goal of Otoplasty is to create a more natural and
            proportionate appearance of the ears in relation to the head and
            face. This procedure can have a significant positive impact on a
            patient's self-esteem and body image. Dr. Kunal Sayani understands
            the delicate artistry required for Otoplasty, aiming for results
            that are both aesthetically pleasing and harmonious with your
            individual features.
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
