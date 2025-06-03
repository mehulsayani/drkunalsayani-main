"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  return (
    <section className="relative bg-white px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-0">
        {/* Left: Doctor Image with Background Circle */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-[45%] flex justify-center"
        >
          <div
            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] rounded-full z-0 top-0 left-0 md:top-10 md:-left-10"
          >
            <Image
              src="/images/homepage/aboutdoctor/bg-image.png"
              width={1000}
              height={1000}
              alt=""
              className="relative left-4 sm:left-8 md:left-10 max-w-full h-auto"
            />
          </div>
          <Image
            src="/images/homepage/hero/kunal.png"
            alt="Dr. Kunal Sayani"
            width={300}
            height={375}
            className="relative z-10 object-cover transform scale-x-[-1] w-full max-w-[300px] sm:max-w-[350px]
             md:max-w-[400px] h-auto"
            priority
          />
        </motion.div>
          {/* Membership Banner Section */}
      <div className="bg-gradient-to-r min-lg:hidden from-blue-900 to-cyan-800 text-white py-6 sm:py-8
       px-4 sm:px-6 rounded-t-[2rem] sm:rounded-t-[4rem]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-6 sm:gap-14">
          <h4 className="text-base max-lg:text-center sm:text-lg md:text-2xl font-semibold w-full sm:w-[40%]">
            Dr. Kunal Sayani is a proud member of several esteemed national and
            international professional bodies, including:
          </h4>

          <div className="flex  flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth 
          gap-4 sm:gap-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {["image1", "image2", "image3", "image4"].map((img, i) => (
              <Image
                key={i}
                src={`/images/homepage/aboutdoctor/${img}.png`}
                alt={`Membership ${i + 1}`}
                width={80}
                height={60}
                className="bg-white p-2 rounded-lg shadow-md w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

        {/* Right: About Content */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[55%] mt-6 md:mt-0 max-lg:text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-[2rem] font-semibold text-[#10217D] tracking-wide">
            About <span className="text-[#1AAEBC]">Dr. Kunal Sayani</span>
          </h3>

          <h2 className="text-xs sm:text-sm md:text-base font-semibold text-[#10217D] mb-2">
            Board-Certified. Patient-Focused. Results-Driven.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed mb-2">
            Dr. Kunal Sayani is a distinguished Plastic & Aesthetic Surgeon
            based in Andheri, Mumbai, with over 8 years of dedicated experience
            in the field of aesthetic and reconstructive surgery. Known for his
            patient-centric approach and surgical precision, Dr. Sayani
            seamlessly blends advanced medical knowledge with a refined
            aesthetic sense — delivering results that are both natural and
            transformative.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed mb-3">
            He completed his MCh in Plastic & Reconstructive Surgery from the
            prestigious Grant Medical College and Sir J.J. Hospital, Mumbai,
            where he also earned his MS in General Surgery. His foundational
            medical training was completed at Maharashtra University of Health
            Sciences, Nashik, setting the stage for a career committed to
            clinical excellence.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed mb-3">
            With a comprehensive range of procedures offered — including{" "}
            <strong>Liposuction</strong>, <strong>Tummy Tuck</strong>,{" "}
            <strong>Breast Reduction and Implants</strong>,{" "}
            <strong>Rhinoplasty</strong>, <strong>Neck Lift</strong>,{" "}
            <strong>Face Lift (Rhytidectomy)</strong>,{" "}
            <strong>Mastopexy</strong>, and{" "}
            <strong>Facial Plastic Surgery</strong> — Dr. Kunal is known for
            delivering personalized outcomes that prioritize patient safety,
            satisfaction, and aesthetic harmony.
          </p>

          <button className="px-4 sm:px-5 py-2 bg-[#1AAEBC] max-lg:mb-8 text-white text-xs sm:text-sm font-semibold rounded-md shadow hover:bg-[#169eab] transition">
            Read More
          </button>
        </motion.div>
      </div>

      {/* Membership Banner Section */}
      <div className="bg-gradient-to-r max-lg:hidden from-blue-900 to-cyan-800 text-white py-6 sm:py-8 px-4 sm:px-6 rounded-t-[2rem] sm:rounded-t-[4rem]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-6 sm:gap-14">
          <h4 className="text-base max-lg:text-center sm:text-lg md:text-2xl font-semibold w-full sm:w-[40%]">
            Dr. Kunal Sayani is a proud member of several esteemed national and
            international professional bodies, including:
          </h4>

          <div className="flex  flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth 
          gap-4 sm:gap-10 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {["image1", "image2", "image3", "image4"].map((img, i) => (
              <Image
                key={i}
                src={`/images/homepage/aboutdoctor/${img}.png`}
                alt={`Membership ${i + 1}`}
                width={80}
                height={60}
                className="bg-white p-2 rounded-lg shadow-md w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}