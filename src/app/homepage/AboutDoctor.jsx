"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MdRadioButtonChecked } from "react-icons/md";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"], // Only 400 is available for Great Vibes
});

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  return (
    <section className="px-4 py-10 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-[500px] h-[400px] md:h-[500px] shadow-xl rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/homepage/aboutdoctors/kunal_sayani.jpg"
            alt="Kunal Sayani"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[60%] max-lg:text-center max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col"
        >
          <p className="text-sm w-32 flex items-center gap-1 bg-green-100 tracking-wide mb-1 px-2 py-1 rounded-full">
            <MdRadioButtonChecked />
            <span>About Doctor</span>
          </p>
          <h2 className="text-3xl font-bold text-[#1AAEBC] leading-snug mb-2">
            Dr. Kunal Sayani
          </h2>
          <p className="text-2xl text-gray-700 mb-4 font-medium">
            MCh in Plastic & Reconstructive Surgery
          </p>

          <p className="text-gray-600 mb-3 leading-relaxed">
            Dr. Kunal Sayani is a distinguished Plastic & Aesthetic Surgeon
            based in Andheri, Mumbai, with over 8 years of dedicated experience
            in the field of aesthetic and reconstructive surgery. Known for his
            patient-centric approach and surgical precision, Dr. Sayani
            seamlessly blends advanced medical knowledge with a refined
            aesthetic sense — delivering results that are both natural and
            transformative.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            He completed his MCh in Plastic & Reconstructive Surgery from the
            prestigious Grant Medical College and Sir J.J. Hospital, Mumbai,
            where he also earned his MS in General Surgery. He's also earned
            Doctorate of National board (DrNB) from New Delhi.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            He's one of the few plastic surgeons with double degrees (Mch & DrNB),
            including National Board certification.
          </p>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1BA9B5] hover:bg-[#1561a5] transition-colors text-white font-semibold px-6 py-2 rounded-md shadow-md"
            >
              Read More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
