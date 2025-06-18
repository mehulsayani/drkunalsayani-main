"use client";

import React from "react";
import Image from "next/image";

// If you plan to use the procedures array later, keep it — otherwise it's unused.
const procedures = [
  {
    id: 1,
    title: "Breast Augmentation",
    description:
      "Exfoliate and refresh your skin with nourishing scrubs that leave you glowing.",
    image: "breast/Breast Augmentation.jpg",
  },
  {
    id: 2,
    title: "Breast Reduction",
    description:
      "Gently remove dead skin and peach fuzz for a smooth, radiant complexion.",
    image: "breast/Breast Reduction & Axillary Breasts Excision.jpg",
  },
  {
    id: 3,
    title: "Hydrafacials",
    description:
      "Deep cleanse and hydrate your skin with our advanced facial treatments.",
    image: "men/Gynaecomastia.jpg",
  },
  {
    id: 4,
    title: "Hair Removal",
    description:
      "Enjoy silky smooth skin with our safe and effective hair removal services.",
    image: "body/liposuction/liposuction-min.jpg",
  },
  {
    id: 5,
    title: "Sunless Tanning",
    description:
      "Get a natural-looking glow without sun exposure or harmful UV rays.",
    image: "body/tummytuck/tummytuck.jpg",
  },
];

const Procedures = () => {
  return (
    <section className="flex justify-center items-center w-full bg-white">
      <div className="max-w-[1300px] px-6 md:px-20 py-16 w-full flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 flex flex-col justify-start items-center">
         
          <h2 className="text-4xl font-semibold text-[#10217D]">
            Aesthetic treatments & procedures offered
          </h2>
          <p className="text-gray-600">
            Our clinic offers a full spectrum of aesthetic procedures—from advanced
            facial rejuvenation and body contouring to hair restoration and
            non-surgical enhancements—performed in a modern, serene, and private
            environment. We combine the latest techniques and medical innovations
            with a holistic approach, ensuring that your experience is as
            empowering as it is effective.
          </p>
        </div>

        {/* Right Section - YouTube Video */}
        <div className="md:w-1/2 w-full aspect-video">
  {/* <video 
    src="/images/aboutcompany/aboutcompany.mp4" 
    className="w-full h-full object-cover" 
    controls 
    muted 
    autoPlay 
    loop 
  /> */}
</div>

      </div>
    </section>
  );
};

export default Procedures;
