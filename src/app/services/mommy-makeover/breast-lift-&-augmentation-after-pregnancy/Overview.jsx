import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/breast/Breast Augmentation.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Pregnancy and breastfeeding are beautiful, transformative
            experiences, but they can bring significant and often unwanted
            changes to your body. For many women, the breasts are one of the
            areas most affected, commonly leading to a loss of volume
            (deflation) and significant sagging (ptosis). This can leave you
            with breasts that feel empty, droopy, and far from the fuller,
            perkier shape you once had. If you feel that your post-pregnancy
            breasts no longer reflect your vibrant self, you are not alone, and
            there is a highly effective solution.
          </p>
          <p className="mb-3">
            A Breast Lift with Augmentation, a cornerstone of the "Mommy
            Makeover," is a powerful combination procedure specifically designed
            to address these post-partum changes. Performed by expert aesthetic
            surgeon Dr. Kunal Sayani at his state-of-the-art clinic in Andheri,
            Mumbai, this surgery is tailored to restore both the volume and the
            youthful position of your breasts in a single operation. The breast
            lift (mastopexy) corrects the sagging by removing excess skin and
            repositioning the breast tissue and nipple higher on the chest wall.
            Simultaneously, the breast augmentation adds fullness, shape, and
            cleavage using breast implants.
          </p>
          <p className="mb-3">
            This transformative procedure is for women who have completed their
            family and breastfeeding journey and are ready to reclaim their
            pre-pregnancy figure and confidence. Dr. Kunal Sayani combines
            surgical precision with an artistic eye to create beautiful,
            natural-looking results that are harmonious with your body, helping
            you feel revitalized and confident in your own skin again.
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
