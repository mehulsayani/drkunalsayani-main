import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/mommymakeover/Mommy Makeover Package.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Motherhood is a profound journey that reshapes your life, and often,
            your body. The incredible process of pregnancy, childbirth, and
            breastfeeding can leave behind lasting changes that diet and
            exercise alone cannot reverse. Common concerns include stretched
            abdominal muscles (diastasis recti), loose skin on the stomach,
            stubborn pockets of fat, and breasts that have lost volume and begun
            to sag. A Mommy Makeover is not a single surgery; it is a
            personalized combination of body contouring procedures designed to
            address these post-partum changes in one comprehensive surgical
            session.
          </p>
          <p className="mb-3">
            At his state-of-the-art practice in Andheri, Mumbai, renowned
            aesthetic surgeon Dr. Kunal Sayani offers a bespoke Mommy Makeover
            package tailored to your unique anatomy and aesthetic goals. This
            powerful package allows for a holistic rejuvenation, helping you
            reclaim your pre-pregnancy figure and restore your confidence. By
            combining procedures, you benefit from a single surgical event, a
            single anesthesia, and one consolidated recovery period, making it
            an efficient and effective path to the transformation you desire.
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
