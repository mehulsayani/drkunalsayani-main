import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/hair-loss-treatment.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Hair loss can be a deeply personal and often distressing journey,
            impacting your appearance, confidence, and self-image. If a receding
            hairline, thinning crown, or widening partition is a source of
            concern, know that you are not alone and that revolutionary
            solutions are within your reach. At our state-of-the-art aesthetic
            surgery center in Andheri, Mumbai, the esteemed Dr. Kunal Sayani and
            his team are committed to reversing the effects of hair loss through
            a suite of the most advanced treatments available today.
          </p>
          <p className="mb-3">
            We understand that every man's experience with hair loss is unique.
            That's why we champion a personalized approach, moving beyond
            one-size-fits-all solutions to offer a truly bespoke hair
            restoration journey
          </p>
          <section className=" py-8  bg-white text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              A New Era in Hair Loss Treatment
            </h2>

            <p className="mb-4">
              Male Pattern Baldness, medically known as{" "}
              <strong>Androgenetic Alopecia</strong>, is the leading cause of
              hair loss in men. Triggered by a combination of genetics and
              hormones (specifically
              <strong> Dihydrotestosterone (DHT)</strong>), it leads to the
              progressive shrinking of hair follicles until they no longer
              produce hair.
            </p>

            <p className="mb-4">
              The good news is that medical science has made monumental leaps in
              combating this condition. Forget the outdated notions of
              unnatural-looking "hair plugs." Today’s treatments, particularly
              those offered at our <strong>Andheri, Mumbai clinic</strong>,
              focus on creating remarkably natural, dense, and permanent
              results.
            </p>

            <p className="mb-4">
              <strong>Dr. Kunal Sayani</strong>, a leader in the field of
              aesthetic and reconstructive surgery, provides a comprehensive
              spectrum of care. We harness the power of both surgical precision
              and regenerative medicine to not only restore what's been lost but
              also to rejuvenate and protect your existing hair.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Our advanced therapeutic options include:
            </h3>

            <ul className="list-disc list-inside space-y-4 mb-4">
              <li>
                <strong>Surgical Hair Transplantation:</strong> The definitive
                gold standard for permanent hair restoration, including
                Follicular Unit Extraction (FUE) and Follicular Unit
                Transplantation (FUT).
              </li>
              <li>
                <strong>Regenerative Medicine & Cell-Based Therapies:</strong>{" "}
                Cutting-edge, minimally-invasive treatments that use your body’s
                own healing power to stimulate dormant follicles and enhance
                hair health. This includes:
                <ul className="list-disc list-inside ml-5 mt-2 space-y-2">
                  <li>
                    <strong>
                      Nanofat SVC (Stromal Vascular Fraction) Therapy:
                    </strong>{" "}
                    A revolutionary treatment that utilizes stem cells from your
                    own fat tissue.
                  </li>
                  <li>
                    <strong>
                      GFC (Growth Factor Concentrate) & Exosome Injections:
                    </strong>{" "}
                    The next generation of growth factor therapies for potent
                    hair follicle stimulation.
                  </li>
                  <li>
                    <strong>Platelet-Rich Plasma (PRP) Therapy:</strong> A
                    trusted method for boosting hair density and thickness.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Supportive Non-Surgical Treatments:</strong> Therapies
                like Mesotherapy and Low-Level Laser Therapy (LLLT) that can be
                used as standalone treatments for early hair loss or to
                complement other procedures.
              </li>
            </ul>

            <p className="mt-4">
              Your path to hair restoration begins with an in-depth consultation
              with <strong>Dr. Kunal Sayani</strong>, where he will perform a
              detailed scalp analysis, discuss your aesthetic goals, and
              co-create a treatment plan that is perfect for you.
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
