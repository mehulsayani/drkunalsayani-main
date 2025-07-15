import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/face/Lipoma-Cysts-Scars.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Are you bothered by unsightly lumps beneath your skin, persistent
            cysts, or noticeable scars that affect your confidence or comfort?
            While these conditions are often benign, they can be a source of
            aesthetic concern, discomfort, or even functional impairment. At Dr.
            Kunal Sayani's state-of-the-art aesthetic clinic in Mumbai, we
            specialize in the precise and meticulous removal of lipomas and
            cysts, alongside advanced scar revision techniques, to restore
            smoother skin and improve your overall appearance. Dr. Kunal Sayani,
            a leading aesthetic surgeon, combines medical expertise with an
            artistic approach to ensure optimal outcomes and minimize visible
            traces.
          </p>
          <p className="mb-3">
            Lipomas, cysts, and scars are common dermatological and aesthetic
            concerns that can affect individuals of all ages. While they often
            pose no significant health risk, their presence can be bothersome,
            affecting self-esteem and, in some cases, causing discomfort or
            functional issues.
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-3">
            <li>
              Lipomas: These are common, benign (non-cancerous) fatty tumors
              that grow slowly just beneath the skin. They are typically soft,
              rubbery, and movable to the touch. While usually harmless, they
              can grow large, cause discomfort if they press on nerves, or be
              aesthetically undesirable, especially on visible body parts. Dr.
              Kunal Sayani offers expert lipoma removal with minimal scarring.
            </li>
            <li>
              Cysts: Skin cysts are sac-like pockets of tissue that can contain
              fluid, air, pus, or other materials. Common types include
              epidermal cysts (sebaceous cysts), pilar cysts, and ganglion
              cysts. They often appear as bumps under the skin and can sometimes
              become inflamed or infected. Dr. Kunal Sayani provides precise
              cyst excision to ensure complete removal and prevent recurrence.
            </li>
            <li>
              Scars: Scars are a natural part of the healing process after an
              injury or surgery. However, some scars can be unsightly, raised
              (hypertrophic or keloid), depressed (atrophic), discolored, or
              restrict movement. Scar revision aims to improve the appearance of
              a scar, making it less noticeable and better integrated with the
              surrounding skin. Dr. Kunal Sayani utilizes advanced scar revision
              techniques to significantly improve scar appearance and texture.
            </li>
          </ul>
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
