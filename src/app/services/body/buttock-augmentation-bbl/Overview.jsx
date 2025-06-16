import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/body/Buttock Augmentation (BBL).jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            In the modern world of aesthetics, achieving a balanced, sensual,
            and proportionate body contour is a goal for many. If you desire
            fuller, rounder, and more lifted buttocks that complement your
            natural physique, a Buttock Augmentation, popularly known as the
            Brazilian Butt Lift (BBL), can be a transformative procedure. At our
            premier aesthetic surgery center in Andheri, Mumbai, the highly
            esteemed Dr. Kunal Sayani combines surgical precision with an
            artist's eye to create stunning, natural-looking results that
            enhance your curves and elevate your confidence.
          </p>
          <p className="mb-3">
            This comprehensive guide will walk you through every aspect of the
            Buttock Augmentation journey, empowering you with the knowledge to
            make an informed decision about sculpting the silhouette you've
            always desired.
          </p>
          <section className=" py-8 bg-white text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Redefining Your Curves with Brazilian Butt Lift
            </h2>

            <p className="mb-4">
              A <strong>Brazilian Butt Lift (BBL)</strong> is a sophisticated
              and increasingly popular cosmetic procedure designed to enhance
              the size and shape of the buttocks without the use of implants.
              The true artistry of a BBL lies in its dual benefit: it not only
              augments the buttocks but also sculpts and refines other areas of
              the body by removing unwanted fat.
            </p>

            <p className="mb-4">
              The procedure uses your body's own fat—harvested via liposuction
              from areas like the abdomen, flanks ("love handles"), or
              thighs—which is then purified and strategically injected into
              different layers of the buttocks. This two-in-one contouring
              approach results in a more hourglass figure, a smaller-looking
              waist, and fuller, more projected buttocks that are in harmony
              with your overall physique.
            </p>

            <p className="mb-4">
              At our <strong>Andheri, Mumbai clinic</strong>, Dr. Kunal Sayani,
              a board-certified aesthetic surgeon with extensive experience in
              body contouring, approaches each BBL with a deep understanding of
              human anatomy and aesthetic ideals. He is committed to delivering
              results that are not only beautiful but are achieved with the
              highest standards of patient safety and care.
            </p>

            <p>
              Whether you wish to correct flatness, improve symmetry, or simply
              achieve the curvaceous figure you've dreamt of, a{" "}
              <strong>BBL</strong> can be a life-changing solution.
            </p>
          </section>
        </div>
        <section id="procedure-details">
          <Knowledge />
        </section>
        {/* <section id="why-choose-us">
          <ServiceCandidate />
        </section> */}
      </div>
    </section>
  );
}
