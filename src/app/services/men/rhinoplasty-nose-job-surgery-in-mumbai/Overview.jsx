import Image from "next/image";
import React from "react";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function Overview() {
  return (
    <section>
      <div className="bg-white h-full">
        <Image
          src={"/images/services/men/face-rhinoplasty-nose-job.jpg"}
          width={1000}
          height={1000}
          alt=""
          className="rounded-3xl mb-8 h-[30rem] max-lg:h-auto"
        />
        <div className="text-gray-600 leading-relaxed text-base max-lg:text-base">
          <p className="mb-3">
            Your nose is a central feature of your face, playing a significant
            role in your overall facial harmony and balance. If you are
            dissatisfied with the size, shape, or proportion of your nose, or if
            you experience breathing difficulties due to its structure,
            rhinoplasty—commonly known as a nose job—may be the transformative
            solution you've been seeking. This highly individualized surgical
            procedure aims to reshape the nose to improve its aesthetic
            appearance and, in many cases, enhance respiratory function.
          </p>
          <p className="mb-3">
            Rhinoplasty can address a wide range of concerns, including:
          </p>

          <p className="mb-3">
            Dr. Kunal Sayani understands that a successful rhinoplasty is not
            about creating a "perfect" nose, but rather achieving a nose that is
            in natural balance and harmony with your unique facial features. He
            believes in a personalized approach, taking into account your
            aesthetic goals, the structural anatomy of your nose, and your
            overall facial proportions. Beyond aesthetics, Dr. Sayani is also
            adept at addressing functional concerns, such as a deviated septum,
            to improve airflow and breathing.
          </p>
          <p className="mb-3">
            During your comprehensive consultation, Dr. Kunal Sayani will
            meticulously evaluate your nasal structure, discuss your specific
            concerns and desired outcome, and explain the various techniques
            that can be employed. He often uses advanced imaging technology to
            help you visualize potential results and ensure that your
            expectations are realistic and aligned with what can be safely and
            beautifully achieved. If you're considering a rhinoplasty to enhance
            your facial harmony or improve your breathing, we invite you to
            delve deeper into the procedure details, recovery process, and
            important safety information.
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
