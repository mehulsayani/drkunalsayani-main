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

  const services = [
    {
      title: "Hair",
      items: [
        "Hair Transplant",
        "Nano fat injection (SVF) for Hair Growth",
      ],
      links: [
        "hair-transplant-in-mumbai",
        "nano-fat-injection-svf-for-hair-growth-in-mumbai",
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
      links: [
        "rhinoplasty-nose-job-surgery-in-mumbai",
        "eyelid-surgery-blepharoplasty-in-mumbai",
        "prominent-ear-surgery-otoplasty-in-mumbai",
        "facelift-surgery-in-mumbai",
        "thread-lift-treatment-in-mumbai",
        "chin-augmentation-surgery-in-mumbai",
        "jawline-contouring-surgery-in-mumbai",
        "lip-lift-lip-job-surgery-in-mumbai",
        "lipoma-cysts-scars-surgery-in-mumbai",
      ],
    },
    {
      title: "Breast",
      items: [
        "Breast Augmentation",
        "Breast Lift (mastopexy) with Shaping",
        "Breast Reduction & Axillary Breasts Excision",
      ],
      links: [
        "breast-augmentation-surgery-in-mumbai",
        "breast-lift-mastopexy-with-shaping-surgery-in-mumbai",
        "breast-reduction-&-axillary-breasts-excision-surgery-in-mumbai",
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
      links: [
        "tummy-tuck-abdominoplasty-surgery-in-mumbai",
        "liposuction-surgeon-in-mumbai",
        "buttock-augmentation-bbl-surgery-in-mumbai",
        "fat-grafting-surgery-in-mumbai",
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
      links: [
        "post-pregnancy-tummy-tuck-moms-surgery-in-mumbai",
        "breast-lift-&-augmentation-after-pregnancy-surgery-in-mumbai",
        "genital-cosmetic-surgeries-in-mumbai",
        "mommy-makeover-package-custom-combination-of-procedures-in-mumbai",
      ],
    },
    {
      title: "Non Surgical",
      items: [
        "Dermal Fillers",
        "Laser Skin Rejuvenation",
        "Skin Tightening",
      ],
      links: [
        "dermal-fillers-treatment-in-mumbai",
        "laser-skin-rejuvenation-treatment-in-mumbai",
        "skin-tightening-surgery-in-mumbai",
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
      links: [
        "gynaecomastia-surgery-in-mumbai",
        "liposuction-surgeon-in-mumbai",
        "hair-loss-treatment-in-mumbai",
        "hair-transplant-in-mumbai",
        "rhinoplasty-nose-job-surgery-in-mumbai",
        "eyelid-surgery-blepharoplasty-surgery-in-mumbai",
        "prominent-ear-surgery-otoplasty-in-mumbai",
        "facelift-surgeon-in-mumbai",
        "thread-lift-treatment-in-mumbai",
        "chin-augmentation-surgeon-in-mumbai",
        "jawline-contouring-surgeon-in-mumbai",
      ],
    },
  ];

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
              : "absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10"
          }`}
        >
          {services.map((category, i) => (
            <div key={category.title}>
              <button
                onClick={() => handleCategoryClick(category.title)}
                className="flex border-b border-gray-300 items-center justify-between w-full text-gray-700 hover:text-[#1AAEBC] px-4 py-2 text-sm font-medium"
              >
                {category.title}
                <FiChevronDown
                  className={`ml-1 transform transition-transform duration-200 ${
                    activeCategory === category.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeCategory === category.title && (
                <div className="pl-4">
                  {category.items.map((item, idx) => (
                    <Link
                      key={item}
                      href={`/services/${category.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]/gi, "-")}/${category.links[idx]}`}
                      className="block text-gray-600 hover:text-[#1AAEBC] px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        if (isMobile) toggleMenu();
                        toggleMobileMenu();
                      }}
                    >
                      {item}
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
