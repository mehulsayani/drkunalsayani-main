import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import React from "react";
import Overview from "./Overview";
import Knowledge from "./Knowledge";
import ServiceCandidate from "./ServiceCandidate";

export default function ServiceLayout() {
  const services = [
    { name: "Overview", slug: "#overview" },
    { name: "Procedure Details", slug: "#procedure-details" },
    { name: "Recovery & Aftercare", slug: "#recovery" },
    { name: "Risks & Safety", slug: "#risks-safety" },
    { name: "Why Choose Us", slug: "#why-choose-us" },
    { name: "FAQ", slug: "#faq" },
  ];

  // Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = -150; // Adjust this value (in pixels) to control how far below the element to scroll
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center py-8">
        <div className="flex w-full max-w-[1300px] max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center">
          <div className="w-[25%] max-xl:ml-2 h-[25rem] max-lg:w-[90%] sticky top-[5rem] mr-8 max-lg:mr-0 rounded-[1.5rem] overflow-hidden shadow-lg">
            {/* Navigation Menu */}
            <div className="bg-[#1aaebcaf] py-4 px-6">
              <h1 className="text-white font-notoSans text-center font-bold text-2xl">
                PROCEDURE CONTENTS
              </h1>
            </div>
            <ul className="px-4 py-4 space-y-3 relative">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="group flex justify-between items-center text-[#3B3B3B] 
                  hover:text-[#40AEB9] cursor-pointer border-b border-gray-300 pb-2 text-xl"
                >
                  <a
                    href={`${service.slug}`}
                    className="flex justify-between items-center w-full"
                    onClick={(e) =>
                      handleScroll(e, `${service.slug.replace("#", "")}`)
                    }
                  >
                    <span>{service.name}</span>
                    <div className="transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[68%] min-h-[70rem] max-lg:w-[90%]">
            {/* Sections */}
            <section id="overview">
              <Overview />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
