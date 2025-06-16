import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/hair/2149404688.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Are you experiencing hair thinning or hair loss and seeking a
            natural, effective solution to restore your hair's density and
            vitality? Nano-Fat Injection SVC for hair growth is an innovative
            and minimally invasive procedure that harnesses the regenerative
            power of your own body's fat cells to stimulate hair follicles and
            promote new hair growth. This cutting-edge treatment offers a
            promising alternative for those looking to address hair loss without
            resorting to more invasive surgical options.
          </p>
          <p className="mb-3">
            Nano-Fat Injection SVC, or Stromal Vascular Fraction, involves
            harvesting a small amount of your own fat, processing it to
            concentrate its regenerative cells (including stem cells and growth
            factors), and then injecting this "nano-fat" into the scalp. These
            highly concentrated regenerative cells work to revitalize dormant
            hair follicles, improve blood circulation to the scalp, and create a
            healthier environment for hair growth. The procedure is particularly
            beneficial for individuals with androgenetic alopecia (pattern
            baldness), diffuse thinning, or those seeking to improve the overall
            quality and thickness of their existing hair.
          </p>
          <p className="mb-3">
            This treatment is not a hair transplant but rather a regenerative
            therapy aimed at improving the health and function of existing hair
            follicles and stimulating new growth. It addresses the underlying
            causes of hair loss by providing the scalp with a rich supply of
            growth factors and stem cells, which are crucial for cellular repair
            and regeneration. Dr. Kunal Sayani employs state-of-the-art
            techniques to ensure optimal outcomes, focusing on natural-looking
            results with minimal downtime. The procedure can be combined with
            other hair restoration therapies for enhanced results.
          </p>
          <p className="mb-3">
            Dr. Kunal Sayani, one of the top specialists in regenerative hair
            solutions in Mumbai, performs Nano-Fat Injection SVC procedures
            tailored to individual needs, ensuring natural-looking and
            long-lasting improvements in hair density and quality. The procedure
            typically involves a small fat harvest, centrifugation to isolate
            the regenerative cells, and precise injections into the scalp.
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
