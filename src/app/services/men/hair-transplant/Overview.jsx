import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/homepage/specialization/hair-transplant.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Are you experiencing hair thinning, a receding hairline, or bald
            spots that affect your selfesteem? Hair loss can be a deeply
            personal and often distressing experience, but it doesn't have to be
            permanent. At Dr. Kunal Sayani's state-of-the-art aesthetic clinic,
            we offer advanced hair transplant solutions designed to restore your
            natural hair growth and help you regain a fuller, more youthful
            appearance. Dr. Kunal Sayani, one of the top plastic surgeon in
            Mumbai, a leading expert in hair transplant, combines precision,
            artistry, and cutting-edge techniques to deliver natural-looking and
            lasting results.
          </p>
          <p className="mb-3">
            Hair transplant surgery is a highly effective and permanent solution
            for individuals experiencing various forms of hair loss, including
            male pattern baldness, female pattern hair loss, and hair1 loss due
            to trauma or scarring. The procedure involves harvesting healthy
            hair follicles from a donor area (typically the back or sides of the
            head, where hair is genetically resistant to balding) and
            transplanting them2 to areas of thinning or baldness. Under the
            expert care of Dr. Kunal Sayani, you can achieve natural-looking
            hair growth that blends seamlessly with your existing hair.
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
