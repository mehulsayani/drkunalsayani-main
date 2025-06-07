import Image from "next/image";
import React from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import { CheckCircle } from "lucide-react";

export default function Membership() {
  const membership = [
    "Maharashtra Medical Council",
    "Association of Aesthetic Plastic Surgeons (AAPS)",
    "Indian Association of Aesthetic Plastic Surgeons (IAAPS)",
    "International Society of Aesthetic Plastic Surgeons (ISAPS)",
    "Association of Surgeons of India (ASI)",
    "Association of Minimal Access Surgeons of India (AMASI)",
    "Association of Plastic Surgeons of India (APSI)",
    "Association of Medical Consultants (AMC), Mumbai",
  ];

  return (
    <section className="flex justify-center items-center flex-col py-12">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row justify-center items-center gap-10">
        <Image
          src={"/images/aboutdrkunalsayani/membership.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="w-78 shadow-2xl rounded-lg max-w-full"
        />
        <div className="w-full flex flex-col justify-center items-start">
          {/* <p className="text-sm w-50 flex items-center gap-1 bg-green-100 tracking-wide mb-1 px-2 py-1 rounded-full">
            <MdRadioButtonChecked />
            <span>Your Trust, Our Triumphs</span>
          </p> */}
          <div className="max-lg:px-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#10217D] mb-6 max-lg:text-center font-[Noto_Sans]">
              Member of Renowned National and International Surgical Societies
            </h1>
            <p className="text-gray-600 mb-3 leading-relaxed max-lg:text-center">
              Dr. Sayani is a proud member of several esteemed national and
              international professional bodies, including:
            </p>
            <div>
              <ul className="space-y-3 ">
                {membership.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700"
                    // removed animation props here, since these are not valid on li without motion.li
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1100px] flex flex-col justify-center items-start mt-10 px-4 lg:px-0">
        <p className="text-gray-600 mb-3 leading-relaxed">
          With a comprehensive range of procedures offered — including
          Liposuction, Tummy Tuck, Breast Reduction and Implants, Rhinoplasty,
          Neck Liti, Face Liti (Rhytidectomy), Mastopexy, and Facial Plastic
          Surgery
        </p>
        <p className="text-gray-600 mb-3 leading-relaxed">
          Dr. Kunal is known for delivering personalized outcomes that
          prioritize patient safety, satisfaction, and aesthetic harmony.
        </p>
        <p className="text-gray-600 mb-3 leading-relaxed">
          Whether you're considering a subtle enhancement or a complete
          transformation, you're in skilled, compassionate hands with Dr. Kunal
          Sayani.
        </p>
      </div>
    </section>
  );
}
