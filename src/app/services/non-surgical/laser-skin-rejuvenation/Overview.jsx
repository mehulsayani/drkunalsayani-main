import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/nonsurgical/Laser Skin Rejuvenation.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Welcome to the forefront of skin revitalization. At our
            state-of-the-art clinic, Dr. Kunal Sayani and his dedicated team
            offer advanced Laser Skin Rejuvenation treatments designed to
            restore your skin's youthful vitality and address a wide array of
            cosmetic concerns. Laser Skin Rejuvenation is a revolutionary
            non-surgical approach that utilizes the power of concentrated light
            energy to precisely target and correct skin imperfections, promoting
            natural healing and collagen production for a smoother, firmer, and
            more even-toned complexion.
          </p>
          <p className="mb-3">
            Whether you are looking to diminish the appearance of fine lines and
            wrinkles, erase sun damage and pigmentation, reduce acne scars, or
            simply achieve a healthier, more vibrant glow, our tailored laser
            treatments can help you achieve your aesthetic goals. Dr. Kunal
            Sayani, a renowned expert in aesthetic surgery, combines his
            extensive experience with the latest laser technologies to deliver
            safe, effective, and personalized care. We understand that each
            patient's skin is unique, and we are committed to creating a
            customized treatment plan that addresses your specific needs and
            desires, helping you look and feel your absolute best.
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
