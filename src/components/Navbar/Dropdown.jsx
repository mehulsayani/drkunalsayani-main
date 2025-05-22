"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeartbeat, FaMicroscope, FaBrain, FaTint } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Dropdown() {
  const [selectedMenCategory, setSelectedMenCategory] = useState("Hair");
  const [selectedWomenCategory, setSelectedWomenCategory] = useState("Hair");

  const men = {
    Hair: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/hair/hair.png"}
            width={40}
            height={40}
          />
        ),
        label: "Hair Transplant",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={
              "/images/homepage/navbar/dropdown/men/hair/hair-transplant.png"
            }
            width={40}
            height={40}
          />
        ),
        label: "FUE Hair Restoration for Men",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/hair/prp.png"}
            width={40}
            height={40}
          />
        ),
        label: "PRP Hair Growth Treatment",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/hair/syringe.png"}
            width={40}
            height={40}
          />
        ),
        label: "Nano Fat Injection (SVF) for Hair Growth",
        link: "/",
      },
    ],
    Skin: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/skin/botox.png"}
            width={40}
            height={40}
          />
        ),
        label: "Botox for Men",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/skin/face.png"}
            width={40}
            height={40}
          />
        ),
        label: "Dermal Fillers for Men",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/skin/facial-care.png"}
            width={40}
            height={40}
          />
        ),
        label: "Laser Skin Resurfacing for Men",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/skin/scar.png"}
            width={40}
            height={40}
          />
        ),
        label: "Scar Removal",
        link: "/",
      },
    ],
    Body: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/body/liposuction.png"}
            width={40}
            height={40}
          />
        ),
        label: "Male Liposuction",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/body/tummy-tuck.png"}
            width={40}
            height={40}
          />
        ),
        label: "Male Tummy Tuck",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/body/gynecomastia.png"}
            width={40}
            height={40}
          />
        ),
        label: "Gynecomastia Correction",
        link: "/",
      },
    ],
    Face: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/face/beauty.png"}
            width={40}
            height={40}
          />
        ),
        label: "Male Rhinoplasty",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/face/jaw-contouring.png"}
            width={40}
            height={40}
          />
        ),
        label: "Male Jawline Contouring",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/face/chin.png"}
            width={40}
            height={40}
          />
        ),
        label: "Chin Augmentation",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/men/face/facelift.png"}
            width={40}
            height={40}
          />
        ),
        label: "Male Facelift",
        link: "/",
      },
    ],
  };

  const women = {
    Hair: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/hair/hair-loss.png"}
            width={40}
            height={40}
          />
        ),
        label: "Hair Transplant for Women",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={
              "/images/homepage/navbar/dropdown/women/hair/hair-transplant.png"
            }
            width={40}
            height={40}
          />
        ),
        label: "FUE Hair Restoration for Women",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/hair/prp.png"}
            width={40}
            height={40}
          />
        ),
        label: "PRP Hair Growth Treatment",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/hair/syringe.png"}
            width={40}
            height={40}
          />
        ),
        label: "Nano Fat Injection (SVF) for Hair Growth",
        link: "/",
      },
    ],
    Skin: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/skin/botox.png"}
            width={40}
            height={40}
          />
        ),
        label: "Botox for Women",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={
              "/images/homepage/navbar/dropdown/women/skin/dermal-filler.png"
            }
            width={40}
            height={40}
          />
        ),
        label: "Dermal Fillers for Women",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/skin/woman.png"}
            width={40}
            height={40}
          />
        ),
        label: "Laser Skin Resurfacing",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/skin/scar.png"}
            width={40}
            height={40}
          />
        ),
        label: "Scar Removal",
        link: "/",
      },
    ],
    Body: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/body/liposuction.png"}
            width={40}
            height={40}
          />
        ),
        label: "Female Liposuction",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/body/scissors.png"}
            width={40}
            height={40}
          />
        ),
        label: "Tummy Tuck for Women",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={
              "/images/homepage/navbar/dropdown/women/body/body-contouring.png"
            }
            width={40}
            height={40}
          />
        ),
        label: "Body Contouring",
        link: "/",
      },
    ],
    Face: [
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/face/rhinoplasty.png"}
            width={40}
            height={40}
          />
        ),
        label: "Female Rhinoplasty",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/face/jaw.png"}
            width={40}
            height={40}
          />
        ),
        label: "Jawline Contouring for Women",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/face/chin.png"}
            width={40}
            height={40}
          />
        ),
        label: "Chin Augmentation",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={"/images/homepage/navbar/dropdown/women/face/facial.png"}
            width={40}
            height={40}
          />
        ),
        label: "Facelift for Women",
        link: "/",
      },
    ],
    Mommy_Makeover: [
      {
        icon: (
          <Image alt="" 
            src={
              "/images/homepage/navbar/dropdown/women/mommymakeover/scissors.png"
            }
            width={40}
            height={40}
          />
        ),
        label: "Tummy Tuck after Pregnancy",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={
              "/images/homepage/navbar/dropdown/women/mommymakeover/mastopexy.png"
            }
            width={40}
            height={40}
          />
        ),
        label: "Breast Lift and Augmentation",
        link: "/",
      },
      {
        icon: (
          <Image alt="" 
            src={
              "/images/homepage/navbar/dropdown/women/mommymakeover/body-contouring.png"
            }
            width={40}
            height={40}
          />
        ),
        label: "Custom Mommy Makeover",
        link: "/",
      },
    ],
  };

  const categoriesMen = ["Hair", "Skin", "Body", "Face"];
  const categoriesWomen = ["Hair", "Skin", "Body", "Face", "Mommy_Makeover"];

  return (
    <div className="group relative inline-block w-full text-left">
      <div
        className="text-gray-800 cursor-pointer group relative inline-flex items-center space-x-1 hover:text-gray-900 transition-colors"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>Men / Women</span>
        <MdKeyboardArrowDown className="transform transition-transform duration-300 group-hover:rotate-180" />
      </div>

      <div className="absolute left-1/2 transform pt-6 -translate-x-1/2 w-[75vw] rounded-xl z-30 hidden group-hover:flex p-6 transition-all duration-300 ">
        <div className="absolute left-1/2 transform pt-6 -translate-x-1/2 w-[80vw] rounded-xl z-30 hidden group-hover:flex p-6 transition-all duration-300 border border-gray-300 bg-white">
          <div className="flex w-full gap-10">
            {/* Men Section */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Men
              </h3>
              <div className="flex">
                <div className="flex flex-col gap-4 min-w-[120px] border-r pr-6 border-gray-200">
                  {categoriesMen.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedMenCategory(category)}
                      className={`text-left text-base font-medium px-1 py-1 rounded-md transition-all duration-150 ${
                        selectedMenCategory === category
                          ? "text-white bg-[#1AAEBC]"
                          : "text-gray-700 hover:text-[#1AAEBC]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <ul className="gap-4">
                  {men[selectedMenCategory].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-all text-gray-700 hover:text-[#1AAEBC]"
                      >
                        {item.icon}
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Women Section */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Women
              </h3>
              <div className="flex">
                <div className="flex flex-col gap-4 min-w-[120px] border-r pr-6 border-gray-200">
                  {categoriesWomen.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedWomenCategory(category)}
                      className={`text-left text-base font-medium px-1 py-1 rounded-md transition-all duration-150 ${
                        selectedWomenCategory === category
                          ? "text-white bg-[#1AAEBC]"
                          : "text-gray-700 hover:text-[#1AAEBC]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <ul className="gap-4">
                  {women[selectedWomenCategory].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-all text-gray-700 hover:text-[#1AAEBC]"
                      >
                        {item.icon}
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
