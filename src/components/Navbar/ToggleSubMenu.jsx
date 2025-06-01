"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function ToggleSubMenu({ isMobile = false }) {
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isMenSubMenuOpen, setIsMenSubMenuOpen] = useState({});
  const [isWomenSubMenuOpen, setIsWomenSubMenuOpen] = useState({});

  const toggleGenderDropdown = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const toggleSubMenu = (gender, category) => {
    if (gender === "Men") {
      setIsMenSubMenuOpen((prev) => ({
        ...prev,
        [category]: !prev[category],
      }));
    } else {
      setIsWomenSubMenuOpen((prev) => ({
        ...prev,
        [category]: !prev[category],
      }));
    }
  };

  const categories = ["Hair", "Face", "Skin", "Body"];
  const services = {
    Hair: ["Hair Transplant", "PRP Therapy", "Hair Restoration"],
    Face: ["Facelift", "Botox", "Facial Contouring"],
    Skin: ["Laser Treatment", "Chemical Peel", "Acne Treatment"],
    Body: ["Liposuction", "Body Contouring", "CoolSculpting"],
  };

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`}>
      <button
        onClick={toggleGenderDropdown}
        className={`flex items-center text-gray-700 hover:text-[#1AAEBC] text-md xl:text-base font-medium transition-colors duration-200 ${
          isMobile ? "justify-between w-full" : ""
        }`}
      >
        Services
        <FiChevronDown
          className={`ml-1 transform transition-transform duration-200 ${
            isGenderOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isGenderOpen && (
        <div
          className={`${
            isMobile
              ? "flex flex-col space-y-2 mt-2"
              : "absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
          }`}
        >
          {["Men", "Women"].map((gender) => (
            <div key={gender} className="relative">
              <button
                onClick={() => toggleSubMenu(gender, gender)}
                className={`flex items-center justify-between w-full text-gray-700 hover:text-[#1AAEBC] px-4 py-2 text-sm font-medium ${
                  isMobile ? "border-b" : ""
                }`}
              >
                {gender}
                <FiChevronDown
                  className={`ml-1 transform transition-transform duration-200 ${
                    (gender === "Men" ? isMenSubMenuOpen[gender] : isWomenSubMenuOpen[gender])
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
              {(gender === "Men" ? isMenSubMenuOpen[gender] : isWomenSubMenuOpen[gender]) && (
                <div
                  className={`${
                    isMobile ? "pl-4 space-y-2" : "pl-4 bg-white rounded-md shadow-inner"
                  }`}
                >
                  {categories.map((category) => (
                    <div key={category} className="relative">
                      <button
                        onClick={() => toggleSubMenu(gender, category)}
                        className="flex items-center justify-between w-full text-gray-600 hover:text-[#1AAEBC] px-4 py-2 text-sm"
                      >
                        {category}
                        <FiChevronDown
                          className={`ml-1 transform transition-transform duration-200 ${
                            (gender === "Men"
                              ? isMenSubMenuOpen[category]
                              : isWomenSubMenuOpen[category])
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {(gender === "Men" ? isMenSubMenuOpen[category] : isWomenSubMenuOpen[category]) && (
                        <div
                          className={`${
                            isMobile ? "pl-4 space-y-1" : "pl-4 bg-white rounded-md"
                          }`}
                        >
                          {services[category].map((service) => (
                            <Link
                              key={service}
                              href={`http://192.168.142.197:3000/services/body/tummy-tuck-(abdominoplasty)`}
                              className="block text-gray-600 hover:text-[#1AAEBC] px-4 py-2 text-sm hover:bg-gray-100"
                              onClick={() => isMobile && toggleGenderDropdown()}
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}