import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={
            "/images/services/nonsurgical/Microneedling & PRP for Skin Rejuvenation.jpg"
          }
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            In the quest for a luminous, youthful complexion, one of the most
            innovative and effective treatments available today harnesses the
            power of your body's own natural healing abilities. Welcome to
            Microneedling with Platelet-Rich Plasma (PRP), a cutting-edge,
            minimally invasive procedure designed to rejuvenate the skin from
            the inside out. Popularly known as the "Vampire Facial," this
            advanced treatment is a powerhouse for addressing a wide array of
            skin concerns, including fine lines and wrinkles, acne scars,
            enlarged pores, uneven skin tone, and textural irregularities.
          </p>
          <p className="mb-3">
            At his state-of-the-art aesthetic clinic in Andheri, Mumbai, Dr.
            Kunal Sayani offers this sophisticated dual-action therapy to help
            his patients achieve smoother, firmer, and more radiant skin. The
            procedure works in two synergistic steps. First, microneedling
            creates thousands of controlled micro-injuries in the skin, which
            triggers the body's natural woundhealing process and stimulates the
            production of new collagen and elastin. Second, Platelet-Rich Plasma
            (PRP), a concentration of growth factors derived from your own
            blood, is applied to the skin. This "liquid gold" penetrates deep
            into the micro-channels created by the microneedling, supercharging
            the regenerative process and dramatically enhancing the final
            results.
          </p>
          <p className="mb-3">
            This treatment is perfect for those seeking significant, visible
            improvement in their skin quality with a natural approach and
            minimal downtime. Dr. Kunal Sayani expertly combines his deep
            understanding of skin anatomy with precise technique to deliver
            safe, consistent, and beautiful outcomes for his patients in Mumbai
            and beyond.
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
