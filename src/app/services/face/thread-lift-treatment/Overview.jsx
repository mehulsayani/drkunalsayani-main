import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/face/Thread-lifting.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Are you noticing early signs of facial sagging, such as mild jowls,
            drooping eyebrows, or a loss of definition in your jawline, but
            aren't ready for a traditional surgical facelift? At Dr. Kunal
            Sayani's state-of-the-art aesthetic clinic in Mumbai, we offer the
            innovative Thread Lift procedure – a minimally invasive solution to
            gently lift and rejuvenate your facial and neck contours. Dr. Kunal
            Sayani, a leading aesthetic surgeon, brings precision, artistry, and
            a deep understanding of facial aesthetics to deliver natural-looking
            and refreshing results.
          </p>
          <p className="mb-3">
            A Thread Lift is a revolutionary non-surgical procedure designed to
            lift and tighten sagging skin on the face and neck, providing a more
            youthful and refreshed appearance. It involves the insertion of
            fine, dissolvable threads (often made of PDO, PLLA, or PCA) into the
            subcutaneous layer of the skin. These threads have tiny cogs or
            cones that gently grip and lift the skin, creating an immediate
            lifting effect. Beyond the immediate lift, the threads also
            stimulate the body's natural collagen production over time, leading
            to gradual skin tightening and improved skin texture.
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
