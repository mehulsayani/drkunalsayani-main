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
            Breast reducƟon surgery, also known as reducƟon mammaplasty, is a
            cosmeƟc and funcƟonal procedure that involves the removal of excess
            breast fat, glandular Ɵssue, and skin to achieve a breast size in
            proporƟon with your body. It alleviates the physical and emoƟonal
            discomfort associated with overly large breasts, such as back, neck,
            and shoulder pain, posture issues, difficulty exercising, and skin
            irritaƟon under the breast crease.
          </p>
          <p className="mb-3">
            At Dr. Kunal Sayani’s Tvameva AestheƟc Clinic, we understand the
            profound impact breast size can have on a woman's overall health,
            lifestyle, and self-confidence. Whether you seek breast reducƟon for
            cosmeƟc reasons or due to medical concerns, Dr. Sayani tailors each
            procedure to suit your unique anatomy and desired results.
          </p>
          <p className="mb-3">
            Dr. Kunal Sayani, one of the top plasƟc surgeon in Mumbai, performs
            breast reducƟon with a focus on both funcƟonal and cosmeƟc outcomes.
            The procedure not only reduces breast volume but also reposiƟons the
            nipple and areola to a more youthful, natural locaƟon, oŌen resizing
            the areola for beƩer proporƟon.
          </p>
          <p className="mb-3">
            Women who have undergone this surgery commonly report a significant
            improvement in quality of life, physical comfort, and body image.
            Dr. Kunal’s meƟculous approach ensures naturallooking outcomes with
            a focus on both aestheƟcs and funcƟonality.
          </p>
        </div>
      </div>
    </section>
  );
}
