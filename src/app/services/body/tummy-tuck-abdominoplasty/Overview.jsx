import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/body/tummytuck/tummytuck.jpeg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Dreaming of a smoother, firmer abdomen? Do you find excess skin and
            stubborn fat deposits around your midsection resistant to diet and
            exercise? A tummy tuck, also known as abdominoplasty, is a
            transformative surgical procedure designed to address these
            concerns, creating a flatter and more toned abdominal profile.
          </p>
          <p className="mb-3">
            A tummy tuck, medically known as abdominoplasty, is a surgical
            procedure designed to improve the shape and appearance of the
            abdomen by removing excess skin and fat and tightening the abdominal
            muscles. This results in a smoother, firmer, and more toned stomach
            area. It is particularly beneficial for individuals who have
            experienced significant weight loss, pregnancy, or aging, which can
            cause stretched skin and weakened muscles. The procedure can be
            customized to the patient’s needs, ranging from a full tummy tuck
            addressing the entire abdominal area to a mini tummy tuck focusing
            on the lower abdomen.
          </p>
          <p className="mb-3">
            Abdominoplasty is not a weight-loss procedure but rather a body
            contouring solution that addresses aesthetic concerns that diet and
            exercise alone cannot resolve. Whether it’s restoring a
            pre-pregnancy figure or achieving a sculpted abdomen, Dr. Kunal
            Sayani employs state-of-theart methods to ensure optimal outcomes
            with minimal scarring and downtime. The procedure can be combined
            with liposuction for enhanced contouring or customized as a mini
            tummy tuck for patients with less extensive needs.
          </p>
          <p className="mb-3">
            Dr. Kunal Sayani, one of the top plastic surgeon in Mumbai for tummy
            tuck, performs tummy tuck surgeries tailored to individual goals,
            ensuring natural-looking results with minimal scarring. The surgery
            typically involves an incision above the pubic area, muscle
            tightening, removal of excess fat and skin, and repositioning of the
            belly button to maintain a natural contour.
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
