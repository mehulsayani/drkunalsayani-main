import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/eyelid-surgery-blepharoplasty.png"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Your eyes are often the first feature people notice, and they play a
            crucial role in expressing emotion and conveying your personality.
            However, with time, aging, sun exposure, genetics, and even
            lifestyle factors can cause the delicate skin around your eyes to
            sag, creating a tired, aged, or even sad appearance. Excess skin on
            the upper eyelids can also obstruct your vision, while puffy bags
            and dark circles under the eyes can leave you looking perpetually
            fatigued.
          </p>
          <p className="mb-3">
            Blepharoplasty, commonly known as eyelid surgery, is a sophisticated
            and highly effective procedure designed to rejuvenate the appearance
            of your eyes, restoring a more alert, refreshed look. This procedure
            addresses specific concerns on the upper and/or lower eyelids by
            meticulously removing excess skin, fat, and sometimes muscle, as
            well as repositioning fat to create a smoother contour. This surgery
            can significantly improve tired, droopy, or puffy eyelids, creating
            a fresher, more youthful appearance.
          </p>
          <p className="mb-3">
            Dr. Kunal Sayani, a renowned aesthetic surgeon in Mumbai,
            understands the intricate anatomy of the eyelids and the profound
            impact a subtle change can have on your entire facial appearance. He
            approaches blepharoplasty with a meticulous eye for detail and an
            artistic sensibility, aiming to achieve results that are
            natural-looking, harmonious with your other facial features, and
            avoid an "overdone" or "surprised" look. During your initial
            consultation, Dr. Kunal Sayani will thoroughly assess your eyelids,
            discuss your aesthetic goals, and determine if blepharoplasty, or a
            combination of procedures like a brow lift, is the best solution for
            you. He is committed to providing personalized care that restores
            your bright, vibrant gaze.
          </p>
          <p className="mb-3">
            appearance. He approaches blepharoplasty with a meticulous eye for
            detail and an artistic sensibility, aiming to achieve results that
            are natural-looking, harmonious with your other facial features, and
            avoid an "overdone" or "surprised" look. During your initial
            consultation, Dr. Kunal Sayani will thoroughly assess your eyelids,
            discuss your aesthetic goals, and determine if blepharoplasty, or a
            combination of procedures like a brow lift, is the best solution for
            you. He is committed to providing personalized care that restores
            your bright, vibrant gaze.
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
