import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/facelift.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            The face is our most expressive feature, but over time, the natural
            aging process, genetics, and sun exposure can lead to wrinkles,
            sagging skin, and a loss of youthful definition. If you look in the
            mirror and feel that your outward appearance no longer reflects your
            inner vitality, a facelift, or rhytidectomy, can be a profoundly
            rewarding solution. At our state-of-the-art cosmetic surgery center
            in Andheri, Mumbai, the renowned aesthetic surgeon Dr. Kunal Sayani
            specializes in advanced facelift techniques that restore a
            refreshed, natural, and more youthful version of you.
          </p>
          <p className="mb-3">
            This guide is designed to provide a comprehensive understanding of
            the facelift journey, from your initial consultation to your
            stunning final results, helping you make a confident and informed
            choice.
          </p>
          <section className="px-4 py-8 md:px-12 lg:px-24 bg-white text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Art of a Natural-Looking Facelift
            </h2>

            <p className="mb-4">
              A modern facelift is far more than just a skin-tightening
              procedure. The goal is not to change who you are, but to reverse
              the visible signs of aging and restore the elegant contours of
              your youth. The most common concerns that a facelift masterfully
              addresses include:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Mid-face sagging and loss of volume in the cheeks.</li>
              <li>
                Deep creases below the lower eyelids and alongside the nose
                (nasolabial folds).
              </li>
              <li>
                The formation of jowls due to loss of muscle tone in the lower
                face.
              </li>
              <li>
                Loose skin and excess fatty deposits under the chin and jaw,
                creating a "double chin" or "turkey neck."
              </li>
            </ul>

            <p className="mb-4">
              Gone are the days of the "wind-tunnel" look associated with
              outdated techniques.
              <strong> Dr. Kunal Sayani</strong>, a leading facial plastic
              surgeon in <strong>Andheri, Mumbai</strong>, employs sophisticated
              methods that go deeper. He addresses the underlying muscular
              structure (the SMAS layer), repositioning it to its original, more
              youthful position. This foundational lift provides support,
              ensures a natural and long-lasting result, and allows the
              overlying skin to be re-draped smoothly without tension.
            </p>

            <p>
              The result is a revitalized appearance, not an "operated" one.
              Whether you are a candidate for a full comprehensive facelift or a
              less invasive <strong>"mini-lift"</strong>, Dr. Sayani will tailor
              the procedure to your unique anatomical needs and aesthetic
              aspirations.
            </p>
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
