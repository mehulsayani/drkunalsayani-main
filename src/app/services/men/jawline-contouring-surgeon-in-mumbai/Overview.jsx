import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/jawline-contouring.png"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            The jawline is a critical component of facial definition, framing
            the face and conveying a sense of strength, youth, and elegance. For
            many, however, a less defined jawline, often due to genetics, aging,
            or weight fluctuations, can lead to a less refined profile. Jawline
            contouring, offered by Dr. Kunal Sayani, is a highly sought-after
            aesthetic procedure designed to sculpt and refine this area,
            creating a more chiseled, symmetrical, and aesthetically pleasing
            lower face
          </p>
          <p className="mb-3">
            Whether you desire a sharper angle, a more prominent chin-jawline
            transition, or a reduction in submental fat (double chin) that
            obscures your natural jawline, Dr. Kunal Sayani offers a range of
            advanced techniques. Our approach is always individualized, taking
            into account your unique facial anatomy, aesthetic goals, and skin
            quality to achieve natural-looking and harmonious results. This
            procedure can dramatically improve your profile, reduce the
            appearance of jowls, and contribute to an overall more youthful and
            confident look.
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
