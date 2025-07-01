"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { IoIosArrowUp } from "react-icons/io";

export default function SecondNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY < 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const submenus = [
    {
      title: "Hair",
      items: [
        "Hair Transplant",
        "Hair Restoration PRP GFC Exosomes",
        "Nano fat injection (SVF) for Hair Growth",
      ],
    },
    {
      title: "Face",
      items: [
        "Rhinoplasty (Nose job)",
        "Eyelid Surgery (Blepharoplasty)",
        "Prominent Ear Surgery (Otoplasty)",
        "Facelift",
        "Thread Lift Treatment",
        "Chin Augmentation",
        "Jawline Contouring",
        "Lip Lift (Lip job)",
        "Lipoma-Cysts-Scars",
      ],
    },
    {
      title: "Breast",
      items: [
        "Breast Augmentation",
        "Breast Lift (mastopexy) with Shaping",
        "Breast Reduction & Axillary Breasts Excision",
      ],
    },
    {
      title: "Body",
      items: [
        "Tummy Tuck (Abdominoplasty)",
        "Liposuction",
        "Buttock Augmentation (BBL)",
        "Fat Grafting",
      ],
    },
    {
      title: "Mommy Makeover",
      items: [
        "Post-Pregnancy Tummy Tuck (moms)",
        "Breast Lift & Augmentation after Pregnancy",
        "Genital Cosmetic Surgeries",
        "Mommy Makeover Package (custom combination of procedures)",
      ],
    },
    {
      title: "Non Surgical",
      items: [
        "Botox (wrinkles-anti-ageing)",
        "Dermal Fillers",
        "Laser Skin Rejuvenation",
        "Microneedling & PRP for Skin Rejuvenation",
        "Skin Tightening",
      ],
    },

    {
      title: "Men",
      items: [
        "Gynaecomastia",
        "Liposuction",
        "Hair Loss Treatment",
        "Hair Transplant",
        "Rhinoplasty (Nose job)",
        "Eyelid Surgery (Blepharoplasty)",
        "Prominent Ear Surgery (Otoplasty)",
        "Facelift",
        "Thread Lift Treatment",
        "Chin Augmentation",
        "Jawline Contouring",
      
      ],
    },
  ];

  return (
    <div
      className={`w-full bg-white shadow-md z-50 flex items-center justify-center transition-transform duration-300 fixed top-22 ${
        showNavbar ? "translate-y-0" : "-translate-y-22"
      }`}
    >
      {/* second level menus */}
      <div className="w-full border-t border-gray-400 z-100 text-base max-lg:hidden">
        <div className="max-w-[1200px] max-xl:max-w-[800px] max-md:max-w-[800px] mx-auto flex justify-evenly items-center h-10">
          {/* Dropdown Menu Item */}
          {submenus.map((section, index) => (
            <div key={index} className="relative group cursor-pointer">
              <span className="hover:text-[#40AEB9] transition-colors font-semibold flex justify-center items-center gap-2">
                {section.title}{" "}
                <div className="rotate-180 group-hover:rotate-360 duration-300">
                  <IoIosArrowUp />
                </div>
              </span>

              <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block
               bg-white shadow-lg rounded-lg w-72 z-10">
                <div className="flex flex-col py-2 px-4 space-y-2 ">
                  {section.items.map((item, i) => {
                    if (typeof item === "string") {
                      // Normal item without submenu
                      return (
                        <Link
                          key={i}
                          href={`/services/${section.title
                            .toLowerCase()
                            .replace(/ /g, "-")}/${item
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[(),]/g, "")}`}
                          className="hover:text-[#40AEB9] transition-colors cursor-pointer"
                        >
                          {item}
                        </Link>
                      );
                    } else if (typeof item === "object" && item.submenu) {
                      // Item with submenu (for Face -> Rhinoplasty)
                      return (
                        <div key={i} className="relative group">
                          <div className="flex justify-between items-center hover:text-[#40AEB9] transition-colors cursor-pointer">
                            <span>{item.name}</span>
                            <span className="ml-2">&#9656;</span>{" "}
                            {/* right arrow */}
                          </div>

                          {/* Nested submenu */}
                          <div className="absolute top-0 left-full ml-1 hidden group-hover:block bg-white shadow-lg rounded-lg w-64 z-20">
                            <div className="flex flex-col py-2 px-4 space-y-2 max-h-96 overflow-y-auto">
                              {item.submenu.map((subitem, si) => (
                                <div
                                  key={si}
                                  className="hover:text-[#40AEB9] transition-colors cursor-pointer"
                                >
                                  {subitem}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
