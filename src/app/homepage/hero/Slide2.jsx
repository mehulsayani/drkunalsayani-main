'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Slide2({ isActive }) {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Content */}
        <motion.div
          className="max-w-xl mb-10 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1AAEBC] leading-tight">
            Get the Nose You've Always Wanted
          </h1>

          <div className="h-1 w-24 bg-[#1AAEBC] my-4"></div>

          <p className="text-gray-700 mb-6 text-lg">
            Unleash your true potential with the transformative power of Rhinoplasty.
            Choose Venkat Centre and experience the perfect balance of science and aesthetics.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1AAEBC] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition"
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative w-full md:w-[500px] h-[400px] md:h-[500px]"
          initial={{ x: 100, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/homepage/hero/body2.png"
            alt="Rhinoplasty"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
