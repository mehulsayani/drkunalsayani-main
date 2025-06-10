import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import React from "react";
import Overview from "./Overview";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function ServiceLayout() {
  const services = [
    { name: "Rhinoplasty", slug: "face/rhinoplasty-nose-job" },
    { name: "Breast Augmentation", slug: "breast/breast-augmentation" },
    { name: "Breast Lift", slug: "breast/breast-lift-mastopexy-with-shaping" },
    {
      name: "Breast Reduction",
      slug: "breast/breast-reduction-&-axillary-breasts-excision",
    },
    { name: "Tummy Tuck", slug: "body/tummy-tuck-abdominoplasty" },
    { name: "Liposuction", slug: "body/liposuction" },
    {
      name: "Mommy Makeover",
      slug: "mommy-makeover/mommymakeover-package-custom-combination-of-procedures",
    },
  ];

  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center py-8">
        <div className="flex w-full max-w-[1300px] max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center">
          <div className="w-[28%] h-[28rem] max-lg:w-[90%] sticky top-[5rem] mr-8 max-lg:mr-0 rounded-[1.5rem] overflow-hidden shadow-lg">
            {/* Header */}
            <div className="bg-[#1aaebcaf] py-4 px-6">
              <h1 className="text-white font-notoSans text-center font-bold text-2xl">
                PROFESSIONAL SERVICES
              </h1>
            </div>

            {/* List */}
            <ul className="px-4 py-4 space-y-3 relative">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="group flex justify-between items-center text-[#3B3B3B] 
      hover:text-[#40AEB9] cursor-pointer border-b border-gray-300 pb-2 text-xl"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex justify-between items-center w-full"
                  >
                    <span>{service.name}</span>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[68%] min-h-[70rem] max-lg:w-[90%]">
            <Overview />
            {/* <Knowledge/> */}
            <ServiceCandidate />
          </div>
        </div>
      </div>
    </section>
  );
}
