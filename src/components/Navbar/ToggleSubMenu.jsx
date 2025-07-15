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
    "hair-transplant-in-andheri-mumbai",
    "hair-restoration-prp-gfc-exosomes-in-andheri-mumbai",
    "nano-fat-injection-svf-for-hair-growth-in-andheri-mumbai",
  ],
  Face: [
    "rhinoplasty-nose-job-surgery-in-mumbai",
    "eyelid-surgery-blepharoplasty-in-andheri-mumbai",
    "prominent-ear-surgery-otoplasty-in-andheri-mumbai",
    "facelift-surgery-in-andheri-mumbai",
    "thread-lift-treatment-in-andheri-mumbai",
    "chin-augmentation-surgery-in-andheri-mumbai",
    "jawline-contouring-surgery-in-andheri-mumbai",
    "lip-lift-lip-job-surgery-in-andheri-mumbai",
    "lipoma-cysts-scars-surgery-in-andheri-mumbai",
  ],
  Breast: [
    "breast-augmentation-surgery-in-andheri-mumbai",
    "breast-lift-mastopexy-with-shaping-surgery-in-andheri-mumbai",
    "breast-reduction-&-axillary-breasts-excision-surgery-in-andheri-mumbai",
  ],
  Body: [
    "tummy-tuck-abdominoplasty-surgery-in-andheri-mumbai",
    "liposuction-surgeon-in-andheri-mumbai",
    "buttock-augmentation-bbl-surgery-in-andheri-mumbai",
    "fat-grafting-surgery-in-andheri-mumbai",
  ],
  Mommy_Makeover: [
    "post-pregnancy-tummy-tuck-moms-surgery-in-andheri-mumbai",
    "breast-lift-&-augmentation-after-pregnancy-surgery-in-andheri-mumbai",
    "genital-cosmetic-surgeries-in-andheri-mumbai",
    "mommy-makeover-package-custom-combination-of-procedures-in-mumbai",
  ],
  Non_Surgical: [
    "botox-wrinkles-anti-ageing-treatment-in-andheri-mumbai",
    "dermal-fillers-treatment-andheri-mumbai",
    "laser-skin-rejuvenation-treatment-in-andheri-mumbai",
    "microneedling-&-prp-for-skin-rejuvenation-surgery-in-andheri-mumbai",
    "skin-tightening-surgery-in-andheri-mumbai",
  ],
  Men: [
    "gynaecomastia-surgery-in-andheri-mumbai",
    "liposuction-surgeon-in-andheri-mumbai",
    "hair-loss-treatment-in-andheri-mumbai",
    "hair-transplant-in-mumbai",
    "rhinoplasty-nose-job-surgery-in-mumbai",
    "eyelid-surgery-blepharoplasty-surgery-in-mumbai",
    "prominent-ear-surgery-otoplasty-in-mumbai",
    "facelift-surgeon-in-mumbai",
    "thread-lift-treatment-in-mumbai",
    "chin-augmentation-surgeon-in-mumbai",
    "jawline-contouring-surgeon-in-mumbai",
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