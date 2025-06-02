"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-14 md:py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-[45%] h-[350px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/homepage/aboutdoctor/kunal_sayani.jpg"
            alt="Dr. Kunal Sayani"
            width={1000}
            height={1000}
            className=""
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[55%]"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1AAEBC] font-[pt-serif-regular] font-bold leading-tight mb-1">
            Dr. Kunal Sayani
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-serif mb-4">
            MCh in Plastic & Reconstructive Surgery
          </p>

          <div className="border-t border-gray-300 my-4"></div>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Dr. Kunal Sayani is a distinguished Plastic & Aesthetic Surgeon based in Andheri, Mumbai, with over 8 years of dedicated experience in aesthetic and reconstructive surgery. Known for his patient-centric approach and surgical precision, he blends advanced medical expertise with a refined aesthetic sense — delivering natural and transformative results.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-5 py-3 bg-blue-900 text-white text-sm font-semibold rounded-xl shadow hover:bg-blue-800 transition">
              View Full Profile
            </button>
            <button className="px-5 py-3 bg-[#1AAEBC] text-white text-sm font-semibold rounded-xl shadow hover:bg-[#169eab] transition">
              Schedule a Consultation
            </button>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Memberships</h3>

          <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
            {["image1", "image2", "image3", "image4"].map((img, index) => (
              <Image
                key={index}
                src={`/images/homepage/aboutdoctor/${img}.png`}
                alt={`Membership ${index + 1}`}
                width={70}
                height={70}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
