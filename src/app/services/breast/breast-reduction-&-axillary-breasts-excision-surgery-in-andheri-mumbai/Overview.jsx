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
            "/images/services/breast/Breast Reduction & Axillary Breasts Excision.jpg"
          }
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Breast reduction surgery, also known as reduction mammaplasty, is a
            cosmetic and functional procedure that involves the removal of
            excess breast fat, glandular tissue, and skin to achieve a breast
            size in proportion with your body. It alleviates the physical and
            emotional discomfort associated with overly large breasts, such as
            back, neck, and shoulder pain, posture issues, difficulty
            exercising, and skin irritation under the breast crease.
          </p>
          <p className="mb-3">
            At Dr. Kunal Sayani’s Tvameva Aesthetic Clinic, we understand the
            profound impact breast size can have on a woman's overall health,
            lifestyle, and self-confidence. Whether you seek breast reduction
            for cosmetic reasons or due to medical concerns, Dr. Sayani tailors
            each procedure to suit your unique anatomy and desired results.
          </p>
          <p className="mb-3">
            Dr. Kunal Sayani, one of the top plastic surgeon in Mumbai, performs
            breast reduction with a focus on both functional and cosmetic
            outcomes. The procedure not only reduces breast volume but also
            repositions the nipple and areola to a more youthful, natural
            location, oŌen resizing the areola for beƩer proportion.
          </p>
          <p className="mb-3">
            Women who have undergone this surgery commonly report a significant
            improvement in quality of life, physical comfort, and body image.
            Dr. Kunal’s meticulous approach ensures naturallooking outcomes with
            a focus on both aesthetics and functionality.
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
