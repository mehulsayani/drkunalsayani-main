import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Overview from "./Overview";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function ServiceLayout() {
  const services = [
    "Abdominoplasty",
    "Breast Augmentation",
    "Breast Lift",
    "Breast Reduction",
    "Body Contouring",
    "Liposuction",
    "Mommy Makeover",
  ];
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center py-8">
        <div className="flex w-full max-w-[1300px] max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center">
          <div className="w-[28%] h-[28rem] max-lg:w-[90%] sticky top-[5rem] mr-8 max-lg:mr-0 rounded-[1.5rem] overflow-hidden shadow-lg">
            {/* Header */}
            <div className="bg-[#1AAEBC] py-4 px-6">
              <h1 className="text-white text-center font-bold text-2xl">
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
                  <span>{service}</span>
                  <div className="transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[70%] min-h-[70rem] max-lg:w-[90%]">
            <Overview />
            {/* <Knowledge/> */}
            <ServiceCandidate />
          </div>
        </div>
      </div>
    </section>
  );
}
