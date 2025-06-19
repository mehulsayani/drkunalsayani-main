import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/body/Fat Grafting.jpeg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Looking for a natural way to enhance your features and restore
            youthful volume? Do you have areas of unwanted fat that you wouldn't
            mind putting to good use? Fat grafting, also known as fat transfer
            or lipofilling, is an innovative procedure that uses your body's own
            fat to sculpt and rejuvenate different areas, offering a natural and
            long-lasting solution.
          </p>
          <p className="mb-3">
            Fat grafting is a surgical procedure that involves the harvesting of
            fat from one part of the body, such as the abdomen, thighs, or
            flanks, and strategically injecting it into another area that may be
            lacking volume. This two-in-one procedure not only slims down the
            donor area but also enhances the recipient site, whether it be the
            face, breasts, buttocks, or hands. It is an excellent option for
            individuals seeking subtle yet significant improvements without the
            use of synthetic fillers or implants.
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
            This procedure is not a method for weight loss but rather a refined
            contouring technique that can address a multitude of concerns, from
            facial wrinkles and hollows to augmenting the size and shape of the
            breasts or buttocks. A skilled plastic surgeon can employ advanced
            techniques to maximize the survival of the transferred fat cells,
            ensuring smooth, natural-looking results with minimal downtime. The
            regenerative qualities of the transferred fat can also lead to
            improved skin texture and quality in the treated area.
          </p>
          <p className="mb-3">
            A leading plastic surgeon in the field will tailor the fat grafting
            procedure to your specific aesthetic goals, ensuring personalized
            results that harmonize with your natural anatomy. The process
            typically involves gentle liposuction to collect the fat, a
            purification process to isolate the healthiest fat cells, and
            meticulous injection to achieve the desired enhancement.
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
