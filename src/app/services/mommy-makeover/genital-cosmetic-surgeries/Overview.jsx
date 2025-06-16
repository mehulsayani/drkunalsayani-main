import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/mommymakeover/Genital Cosmetic Surgeries.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            For many women, concerns about the appearance or function of their
            intimate areas can lead to significant self-consciousness,
            discomfort, and even impact their quality of life. At our clinic,
            Dr. Kunal Sayani understands these deeply personal concerns and
            offers a range of safe, effective, and transformative genital
            cosmetic surgeries for women. With an emphasis on patient privacy,
            compassionate care, and natural-looking results, Dr. Kunal Sayani
            helps women regain comfort, boost self-confidence, and enhance their
            overall well-being.
          </p>
          <p className="mb-3">
            Female genital cosmetic surgery, also known as feminine rejuvenation
            or vulvovaginal plastic surgery, encompasses a variety of procedures
            designed to address aesthetic and functional concerns related to the
            female genitalia. These procedures are sought by women for diverse
            reasons, ranging from congenital variations to changes resulting
            from childbirth, aging, or simply personal preference. Dr. Kunal
            Sayani is a highly skilled and experienced aesthetic surgeon
            dedicated to providing individualized care and achieving results
            that align with each patient's unique goals.
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
