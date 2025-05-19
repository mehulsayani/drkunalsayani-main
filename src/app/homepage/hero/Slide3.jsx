'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Slide3({ isActive }) {
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
            What Happens After Hair Transplant Surgery?
          </h1>

          <div className="h-1 w-24 bg-[#1AAEBC] my-4"></div>

          <p className="text-gray-700 mb-6 text-lg">
            Say goodbye to your concerns following hair transplant surgery.
            Proper aftercare and following the surgeon's instructions can help
            maximize the success and longevity of the hair transplant results.
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
            src="/homepage/hero/body3.png"
            alt="Hair Transplant"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
