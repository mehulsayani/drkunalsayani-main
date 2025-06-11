"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

// Updated: Proper titles, and image paths
const procedures = [
  {
    id: 1,
    title: "Breast Augmentation",
    description:
      "Exfoliate and refresh your skin with nourishing scrubs that leave you glowing.",
    image: "breast/breast-augmentation.png",
  },
  {
    id: 2,
    title: "Breast Reduction & Axillary Breasts Excision",
    description:
      "Gently remove dead skin and peach fuzz for a smooth, radiant complexion.",
    image: "breast/breast-reduction-&-axillary-breasts-excision.png",
  },
  {
    id: 3,
    title: "Hydrafacials",
    description:
      "Deep cleanse and hydrate your skin with our advanced facial treatments.",
    image: "men/gynaecomastia.png",
  },
  {
    id: 4,
    title: "Hair Removal",
    description:
      "Enjoy silky smooth skin with our safe and effective hair removal services.",
    image: "body/liposuction.png",
  },
  {
    id: 5,
    title: "Sunless Tanning",
    description:
      "Get a natural-looking glow without sun exposure or harmful UV rays.",
    image: "body/tummy-tuck-abdominoplasty.png",
  },
];

const Procedures = () => {
  const [openId, setOpenId] = useState(1);

  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };



  return (
    <section className="flex justify-center items-center w-full">
      <div className="max-w-[1300px] px-6 w-full md:px-20 py-16 flex flex-col md:flex-row gap-10">
        {/* Left: Text + Accordion */}
        <div className="md:w-1/2 space-y-6">
          <span className="bg-[#1aaebc46] text-sm px-4 py-1 rounded-full font-medium inline-block">
            Beauty In Every Leaf
          </span>
          <h2 className="text-4xl font-semibold text-[#10217D]">
            Aesthetic treatments & procedures offered
          </h2>
          <p className="text-gray-600">
            Our clinic offers a full spectrum of aesthetic procedures—from
            advanced facial rejuvenation and body contouring to hair restoration
            and non-surgical enhancements—performed in a modern, serene, and
            private environment. We combine the latest techniques and medical
            innovations with a holistic approach, ensuring that your experience
            is as empowering as it is effective.
          </p>

          {/* Accordion */}
          <div className="space-y-2">
            {procedures.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleOpen(item.id)}
                className={`rounded-md p-4 transition-all duration-300 cursor-pointer ${
                  openId === item.id
                    ? "bg-[#1aaebc46]"
                    : "bg-transparent hover:bg-[#1aaebc46]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <span className="w-8 h-8 bg-[#1AAEBC] text-white font-semibold rounded-full flex items-center justify-center">
                      0{item.id}
                    </span>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                  </div>
                  <span
                    className={`text-xl transform transition-transform duration-300 ${
                      openId === item.id ? "rotate-90" : ""
                    }`}
                  >
                    <IoIosArrowForward />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === item.id ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dynamic Image */}
        <div className="md:w-1/2 relative">
          <Image
              src={`/images/services/breast/breast-augmentation.png`}
              alt={''}
              width={600}
              height={800}
              className="rounded-lg w-full object-cover transition duration-500"
             
            />
        </div>
      </div>
    </section>
  );
};

export default Procedures;
