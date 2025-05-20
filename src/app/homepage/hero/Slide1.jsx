'use client'

import Image from 'next/image'
import React from 'react'
import CustomControls from './CustomControls';

export default function Slide1({ isActive }) {
  return (
    <section className="w-full min-h-[400px] transition-opacity duration-700 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-2xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
            When in Doubt, Trust Experience <br /> You're in Safe Hands with Dr. Kunal.
          </h1>

          <div className="h-1 w-24 bg-white my-4"></div>

          <p className="text-white mb-6 text-lg">
            Are you tired of hiding your chest behind baggy t-shirts? Experience safe and effective gynecomastia treatment with the utmost care and satisfaction at the Venkat Center.
          </p>

          <button className="bg-[#1AAEBC] hover:bg-[#199DAB] text-white font-medium py-3 px-6 rounded-full shadow-md transition">
            Book Appointment
          </button>
          <CustomControls/>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[500px] h-[400px] md:h-[500px]">
          <Image
            src="/images/homepage/hero/kunal.png"
            alt="Gynecomastia"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
