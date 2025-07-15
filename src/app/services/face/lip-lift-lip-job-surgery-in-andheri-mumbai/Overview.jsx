import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/face/Lip Lift (Lip job).jpeg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            While full lips are often associated with youth and beauty, the key
            to a truly balanced and attractive smile lies in proportion. As we
            age, the philtrum—the space between the base of the nose and the top
            of the upper lip—can elongate. This lengthening can cause the red
            part of the lip (the vermilion) to roll inward, making the upper lip
            appear thin, flat, and covering the upper teeth when smiling. This
            can create a stern or aged appearance, something that dermal fillers
            alone cannot correct.
          </p>
          <p className="mb-3">
            A Lip Lift is a highly sophisticated and precise surgical procedure
            designed to permanently address this concern. At his premier
            aesthetic clinic in Andheri, Mumbai, expert aesthetic surgeon Dr.
            Kunal Sayani performs this delicate "lip job" to shorten the
            philtrum, evert (roll out) the upper lip, and increase the amount of
            visible pink lip tissue. This creates a fuller, more defined, and
            naturally youthful pout. It also improves the visibility of the
            upper teeth, a hallmark of a vibrant, beautiful smile.
          </p>
          <p className="mb-3">
            Unlike temporary fillers that add volume, a lip lift provides a
            permanent structural change, enhancing your natural lip shape and
            restoring facial harmony. It is the definitive solution for
            individuals seeking a more pronounced cupid's bow and a rejuvenated,
            more cheerful expression. Dr. Kunal Sayani’s meticulous approach
            ensures the result is elegant, subtle, and perfectly suited to your
            unique facial features
          </p>
          <section className=" py-3  bg-white text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Types of Lip Lifts We Offer
            </h2>

            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Bullhorn Lip Lift (Subnasal Lip Lift):</strong> The most
                common and effective technique, involving an incision hidden in
                the natural crease at the base of the nose, resembling a bull's
                horns. This powerfully shortens the philtrum and everts the lip.
              </li>
              <li>
                <strong>Corner Lip Lift:</strong> An excellent procedure for
                those with downturned corners of the mouth, which can create a
                perpetually sad or stern look. Small incisions are made at the
                corners to subtly elevate them.
              </li>
            </ul>
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
