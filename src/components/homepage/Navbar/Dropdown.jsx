import Link from "next/link";
import React, { useState } from "react";
import { FaHeartbeat, FaMicroscope, FaBrain, FaTint } from "react-icons/fa";

export default function Dropdown() {
  const [selectedMenCategory, setSelectedMenCategory] = useState("Hair");
  const [selectedWomenCategory, setSelectedWomenCategory] = useState("Hair");

  const men = {
    Hair: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Hair Transplant", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "FUE Hair Restoration for Men", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "PRP Hair Growth Treatment", link: "/" },
      { icon: <FaTint className="text-[#1AAEBC]" />, label: "Nano Fat Injection (SVF) for Hair Growth", link: "/" },
    ],
    Skin: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Botox for Men", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "Dermal Fillers for Men", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "Laser Skin Resurfacing for Men", link: "/" },
      { icon: <FaTint className="text-[#1AAEBC]" />, label: "Scar Removal", link: "/" },
    ],
    Body: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Male Liposuction", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "Male Tummy Tuck", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "Gynecomastia Correction", link: "/" },
    ],
    Face: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Male Rhinoplasty", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "Male Jawline Contouring", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "Chin Augmentation", link: "/" },
      { icon: <FaTint className="text-[#1AAEBC]" />, label: "Male Facelift", link: "/" },
    ],
  };

  const women = {
    Hair: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Hair Transplant for Women", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "FUE Hair Restoration for Women", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "PRP Hair Growth Treatment", link: "/" },
      { icon: <FaTint className="text-[#1AAEBC]" />, label: "Nano Fat Injection (SVF) for Hair Growth", link: "/" },
    ],
    Skin: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Botox for Women", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "Dermal Fillers for Women", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "Laser Skin Resurfacing", link: "/" },
      { icon: <FaTint className="text-[#1AAEBC]" />, label: "Scar Removal", link: "/" },
    ],
    Body: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Female Liposuction", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "Tummy Tuck for Women", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "Body Contouring", link: "/" },
    ],
    Face: [
      { icon: <FaHeartbeat className="text-[#1AAEBC]" />, label: "Female Rhinoplasty", link: "/" },
      { icon: <FaBrain className="text-[#1AAEBC]" />, label: "Jawline Contouring for Women", link: "/" },
      { icon: <FaMicroscope className="text-[#1AAEBC]" />, label: "Chin Augmentation", link: "/" },
      { icon: <FaTint className="text-[#1AAEBC]" />, label: "Facelift for Women", link: "/" },
    ],
  };

  const categories = ["Hair", "Skin", "Body", "Face"];

  return (
    <div className="group relative inline-block w-full text-left">
      <div className="text-gray-700 font-semibold cursor-pointer">Men / Women</div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-[90vw] rounded-xl shadow-xl z-30 bg-white hidden group-hover:flex p-6 transition-all duration-300">
        <div className="flex w-full gap-10">
          {/* Men */}
          <div className="flex flex-col gap-4 min-w-[120px] border-r pr-6 border-gray-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedMenCategory(category)}
                className={`text-left text-sm font-medium px-2 py-1 rounded-md transition-all duration-150 ${
                  selectedMenCategory === category
                    ? "text-white bg-[#1AAEBC]"
                    : "text-gray-700 hover:text-[#1AAEBC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              {selectedMenCategory} - Men
            </h3>
            <ul className="gap-4">
              {men[selectedMenCategory].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-all text-gray-700 hover:text-[#1AAEBC]"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Women */}
          <div className="flex flex-col gap-4 min-w-[120px] border-r pr-6 border-gray-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedWomenCategory(category)}
                className={`text-left text-sm font-medium px-2 py-1 rounded-md transition-all duration-150 ${
                  selectedWomenCategory === category
                    ? "text-white bg-[#1AAEBC]"
                    : "text-gray-700 hover:text-[#1AAEBC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              {selectedWomenCategory} - Women
            </h3>
            <ul className="gap-4">
              {women[selectedWomenCategory].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-all text-gray-700 hover:text-[#1AAEBC]"
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
