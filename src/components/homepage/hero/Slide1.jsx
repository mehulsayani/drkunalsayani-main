// app/components/HeroGynecomastia.jsx
'use client'

import Image from 'next/image'
import React from 'react'

export default function Slide1() {
  return (
    <section className="w-full bg-white">
      <div className=" flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1AAEBC] leading-tight">
            Say Goodbye to <br /> Man Boobs
          </h1>

          <div className="h-1 w-24 bg-[#1AAEBC] my-4"></div>

          <p className="text-gray-700 mb-6 text-lg">
            Are you tired of hiding your chest behind baggy t-shirts? Experience safe and effective gynecomastia treatment with the utmost care and satisfaction at the Venkat Center.
          </p>

          <button className="bg-[#1AAEBC] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[500px] h-[400px] md:h-[500px]">
          <Image
            src="/homepage/hero/body.png" // ✅ put this image inside /public/homepage/hero/
            alt="Gynecomastia"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
