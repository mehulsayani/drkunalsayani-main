import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src="/images/services/breast/Breast Lift (mastopexy) with Shaping.jpeg"
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Over time, factors such as pregnancy, nursing, weight fluctuations,
            aging, and gravity can take a toll on a woman's breasts, leading to
            a loss of volume and a drooped, sagging appearance (a condition
            known as breast ptosis). A Breast Lift, medically termed a
            Mastopexy, is a highly effective surgical procedure designed to
            raise and reshape the breasts, restoring them to a more youthful,
            perkier, and aesthetically pleasing position on the chest wall.
          </p>
          <p className="mb-3">
            However, a modern breast lift is more than just lifting. Here at our
            clinic in Mumbai, Dr. Kunal Sayani specializes in Breast Lift with
            Shaping, an advanced technique that not only elevates the breast
            tissue and repositions the nipple and areola to a higher, more
            forward-facing position but also artfully reshapes the internal
            breast tissue itself. This internal shaping, often using an "auto
            augmentation" technique, creates a fuller, rounder, and more
            appealing upper breast contour, providing an effect that mimics a
            small implant without the need for one.
          </p>
          <p className="mb-3">
            If you are bothered by the feeling that your breasts have lost their
            shape and firmness, a personalized breast lift procedure with Dr.
            Kunal Sayani can rejuvenate your figure, enhance your confidence,
            and allow you to feel more comfortable and confident in a wider
            range of clothing, from swimsuits to evening wear.
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
