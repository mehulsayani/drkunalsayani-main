"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

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
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = "https://player.cloudinary.com/embed/?cloud_name=drpyepp9t&public_id=hkqlkvq2jkhbenixesfw&profile=cld-default";
  return (
    <section className="flex justify-center items-center w-full bg-white">
      <div className="max-w-[1300px] px-6 md:px-20 py-16 w-full flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 flex flex-col justify-start items-center">
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
        </div>

        {/* Right Section - YouTube Video */}
       <div className="relative md:w-1/2 w-full aspect-video">
      {/* Thumbnail Image */}
      <Image
        src="/images/aboutcompany/tvamevaimg.jpg"
        alt="Video Thumbnail"
        width={1000}
        height={1000}
        className="object-cover w-full h-full rounded-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Play Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex items-center justify-center text-white bg-black/40 hover:bg-black/60 transition rounded-lg"
      >
        <FaPlay className="text-4xl md:text-5xl" />
      </button>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative rounded-2xl w-full max-w-3xl aspect-video ">
            <iframe
              src={videoUrl}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute w-10 h-10 -top-4 -right-4 bg-yellow-300 text-black p-2 rounded-full hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
      </div>
    </section>
  );
};

export default Procedures;
