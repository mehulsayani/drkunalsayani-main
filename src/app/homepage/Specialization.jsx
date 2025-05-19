import React from "react";
import Link from "next/link";
import {
  FaProcedures,
  FaMale,
  FaWeight,
  FaStethoscope,
  FaUserNurse,
  FaSmile,
  FaSyringe,
  FaRegGrinStars,
} from "react-icons/fa";

const specializations = [
  {
    title: "Breast Augmentation",
    description:
      "Enhance breast size and shape with natural-looking implants tailored to your body. Restore symmetry and boost confidence through advanced surgical techniques.",
    link: "/services/breast-augmentation",
    icon: <FaProcedures className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
  {
    title: "Breast Reduction",
    description:
      "Relieve discomfort and achieve proportion with expertly performed breast reduction surgery. Enjoy improved posture, mobility, and self-esteem.",
    link: "/services/breast-reduction",
    icon: <FaUserNurse className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
  {
    title: "Gynecomastia",
    description:
      "Sculpt a more masculine chest by removing excess glandular or fatty tissue. A discreet, effective procedure tailored for natural, lasting results.",
    link: "/services/gynecomastia",
    icon: <FaMale className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
  {
    title: "Liposuction",
    description:
      "Eliminate stubborn fat deposits resistant to diet and exercise. Define your body contours with this safe and targeted fat removal technique.",
    link: "/services/liposuction",
    icon: <FaWeight className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
  {
    title: "Tummy Tuck",
    description:
      "Tighten loose abdominal muscles and remove excess skin for a firmer, flatter stomach. Ideal after pregnancy or significant weight loss.",
    link: "/services/tummy-tuck",
    icon: <FaStethoscope className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
  {
    title: "Face Lift",
    description:
      "Reverse signs of aging by lifting and tightening sagging facial skin and muscles. Achieve a rejuvenated, youthful appearance with subtle, natural results.",
    link: "/services/face-lift",
    icon: <FaSmile className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
  {
    title: "Botox | Derma Fillers",
    description:
      "Smooth fine lines, enhance facial volume, and restore youthful contours non-surgically. Quick, effective treatments with minimal downtime.",
    link: "/services/botox-fillers",
    icon: <FaSyringe className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
  {
    title: "Hair Transplant",
    description:
      "Restore a fuller hairline using advanced FUE or FUT techniques. Natural-looking, permanent results with minimal recovery time.",
    link: "/services/hair-transplant",
    icon: <FaRegGrinStars className="text-[#1AAEBC] text-3xl mb-3 mx-auto" />,
  },
];

export default function Specialization() {
  return (
    <section className="bg-white py-16" id="specializations">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Areas of Specialization
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-all"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#1AAEBC] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <Link
                href={item.link}
                className="text-sm font-semibold text-[#1AAEBC] hover:underline"
              >
                Know More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
