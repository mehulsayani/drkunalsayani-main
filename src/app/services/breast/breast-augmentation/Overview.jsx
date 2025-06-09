import Image from "next/image";
import React from "react";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/body/tummytuck/tummytuck.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-[15rem]"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Breast AugmentaƟon, also known as augmentaƟon mammoplasty, is one of
            the most popular cosmeƟc procedures worldwide. It involves the use
            of implants or fat transfer to enhance the size, shape, and symmetry
            of the breasts. Women choose this procedure for various reasons,
            including restoring breast volume lost aŌer pregnancy or weight
            loss, improving body proporƟon, or simply achieving the desired
            breast size for increased self-confidence.
          </p>
          <p className="mb-3">
            At Dr. Kunal Sayani’s AestheƟc Surgery Clinic, breast augmentaƟon is
            approached with arƟstry, precision, and personalized care. Whether
            you seek subtle enhancement or a more dramaƟc transformaƟon, Dr.
            Sayani customizes the procedure to reflect your goals and natural
            anatomy, delivering beauƟful, balanced, and natural-looking results.
          </p>
          
        </div>
      </div>
    </section>
  );
}
