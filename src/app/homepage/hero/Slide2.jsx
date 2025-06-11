"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Slide2({ isActive }) {
  return (
    <section className="w-full h-[37.5rem] mt-[3.5rem] flex justify-center items-end ">
      <div className="flex flex-col max-lg:flex-col-reverse max-lg:text-center  max-lg:gap-10 
      w-full max-w-[1200px]  md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          className="max-w-xl "
          initial={{ x: -100, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[#10217D] leading-tight max-lg:mb-4">
            Accessible Aesthetics Authentic Results
          </h1>

          <div className="h-1 w-24 bg-[#10217D] my-4 max-lg:hidden"></div>

          <p className="text-black mb-6 text-lg ">
            Dr. Kunal Sayani believes aesthetic surgery isn’t a luxury—it’s a
            path to restored confidence and improved quality of life.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1aaebcaf] hover:bg-[#148d98] text-white font-medium py-3 px-6 rounded-lg shadow-md transition"
          >
            Book Appointment
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className=" "
          initial={{ x: 100, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/homepage/hero/body2.png"
            alt="Rhinoplasty"
            width={1000}
            height={1000}
            className=" w-[37rem] "
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
