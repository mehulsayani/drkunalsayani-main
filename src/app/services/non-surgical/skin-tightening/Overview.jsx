import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/nonsurgical/Skin Tightening.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            As we age, the production of collagen and elastin—the essential
            proteins that provide our skin with structure and firmness—begins to
            decline. This natural process, combined with factors like sun
            exposure, genetics, and lifestyle choices, leads to skin laxity,
            resulting in sagging skin, jowls, fine lines, and wrinkles. In the
            past, a surgical facelift was the only solution. Today, advanced
            medical technology offers a new frontier of non-surgical skin
            tightening, allowing for significant improvements in skin firmness
            and contour without the need for incisions, general anesthesia, or
            lengthy recovery periods.
          </p>
          <p className="mb-3">
            At his state-of-the-art aesthetic clinic in Andheri, Mumbai, leading
            aesthetic surgeon Dr. Kunal Sayani offers a curated selection of the
            most advanced and clinically-proven non-surgical skin tightening
            technologies. These treatments work by delivering controlled energy
            deep into the skin's layers, creating a therapeutic heating effect.
            This process triggers the body’s natural healing response,
            contracting existing collagen fibres for an immediate tightening
            effect and, more importantly, stimulating the production of new,
            healthy collagen and elastin over time. The result is skin that is
            visibly firmer, smoother, and more youthful-looking.
          </p>
          <section className=" py-8  bg-white text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Advanced Skin Tightening Solutions
            </h2>
            <p className="mb-4">
              Whether you are concerned about sagging skin on your face, neck,
              jawline, or body,
              <strong> Dr. Kunal Sayani </strong> can design a personalized
              treatment plan to help you achieve your goals. Our leading skin
              tightening solutions include:
            </p>

            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>High-Intensity Focused Ultrasound (HIFU):</strong> Often
                called a "non-surgical facelift," HIFU delivers precise
                ultrasound energy to the deepest foundational layers of the skin
                (the SMAS layer), a level traditionally only reached by surgical
                facelifts, to create a powerful lifting and tightening effect.
              </li>
              <li>
                <strong>Radiofrequency (RF) Energy:</strong> This technology
                uses radiofrequency waves to gently heat the dermis, stimulating
                a significant collagen remodeling response. It is excellent for
                treating fine lines, wrinkles, and overall skin laxity on the
                face and body.
              </li>
              <li>
                <strong>RF Microneedling:</strong> This innovative treatment
                combines the benefits of microneedling with radiofrequency
                energy. Insulated needles deliver RF energy directly into the
                deeper layers of the skin, maximizing collagen production and
                offering superior results for skin texture, acne scars, and
                significant tightening with minimal damage to the skin surface.
              </li>
            </ul>
          </section>
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
