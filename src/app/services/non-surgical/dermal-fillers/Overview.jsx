import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/nonsurgical/Dermal Fillers.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Are you noticing signs of volume loss in your face, such as hollowed
            cheeks, thinning lips, or deepened lines around your mouth and nose?
            Perhaps you desire more sculpted facial contours, a more defined
            jawline, or a subtle enhancement to your features. At Dr. Kunal
            Sayani's state-of-the-art aesthetic clinic in Mumbai, we offer a
            diverse range of expertly administered Dermal Fillers to restore
            lost volume, smooth out wrinkles, and subtly enhance your natural
            beauty. Dr. Kunal Sayani, a highly skilled and artistic aesthetic
            surgeon, uses his profound understanding of facial anatomy and
            aesthetics to deliver harmonious, natural-looking results that
            rejuvenate your appearance.
          </p>
          <p className="mb-3">
            Dermal fillers, also known as soft tissue fillers or injectable
            fillers, are gel-like substances injected beneath the skin to
            restore lost volume, smooth1 out lines and wrinkles, and enhance
            facial contours.2 As we age, our skin naturally loses collagen,
            elastin, and hyaluronic acid— essential components that provide
            plumpness, elasticity, and hydration. This loss leads to sagging
            skin, the formation of static wrinkles (lines visible even when the
            face is at rest), and a hollowed appearance in certain areas.
          </p>
          <p className="mb-3">
            Dermal fillers work by physically filling these areas, immediately
            restoring volume and smoothing the skin. Beyond the immediate
            effect, many modern fillers also stimulate the body's natural
            collagen production over time, offering longer-lasting benefits and
            improved skin quality.
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
