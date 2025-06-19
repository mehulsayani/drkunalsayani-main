import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function ToggleSubMenu({
  isMobile = false,
  isMobileMenuOpen,
  toggleMobileMenu,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveCategory(null);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const services = {
    Hair: [
      "Hair Transplant",
      "Hair Restoration PRP GFC Exosomes",
      "Nano fat injection (SVF) for Hair Growth",
    ],
    Face: [
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
    Breast: [
      "Breast Augmentation",
      "Breast Lift (mastopexy) with Shaping",
      "Breast Reduction & Axillary Breasts Excision",
    ],
    Body: [
      "Tummy Tuck (Abdominoplasty)",
      "Liposuction",
      "Buttock Augmentation (BBL)",
      "Fat Grafting",
    ],
    Mommy_Makeover: [
      "Post Pregnancy Tummy Tuck (moms)",
      "Breast Lift & Augmentation after Pregnancy",
      "Genital Cosmetic Surgeries",
      "Mommy Makeover Package (custom combination of procedures)",
    ],
    Non_Surgical: [
      "Botox (wrinkles-anti-ageing)",
      "Dermal Fillers",
      "Laser Skin Rejuvenation",
      "Microneedling & PRP for Skin Rejuvenation",
      "Skin Tightening",
    ],
    Men: [
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
  };

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`}>
      <button
        onClick={toggleMenu}
        className={`flex items-center text-gray-700 hover:text-[#1AAEBC] font-medium ${
          isMobile ? "justify-between w-full" : ""
        }`}
      >
        Services
        <FiChevronDown
          className={`ml-1 transform transition-transform duration-200 ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <div
          className={`${
            isMobile
              ? "flex flex-col space-y-2 mt-2"
              : "absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-10"
          }`}
        >
          {Object.keys(services).map((category) => (
            <div key={category}>
              <button
                onClick={() => handleCategoryClick(category)}
                className="flex border-b border-gray-400 items-center justify-between w-full text-gray-700 hover:text-[#1AAEBC] px-4 py-2 text-sm font-medium"
              >
                {category.replace("_", " ").replace(/([A-Z])/g, " $1")}
                <FiChevronDown
                  className={`ml-1 transform transition-transform duration-200 ${
                    activeCategory === category ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeCategory === category && (
                <div className="pl-4" onClick={toggleMobileMenu}>
                  {services[category].map((service) => (
                    <Link
                      key={service}
                      href={`/services/${category
                        .toLowerCase()
                        .replace(/[_ ]/g, "-")}/${service
                        .toLowerCase()
                        .replace(/[_ ]/g, "-")
                        .replace(/[(),]/g, "")}`}
                      className="block text-gray-600 hover:text-[#1AAEBC] px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        if (isMobile) toggleMenu(); // Close menu on mobile
                        toggleMobileMenu(); // Call toggleMobileMenu
                      }}
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
  );
}