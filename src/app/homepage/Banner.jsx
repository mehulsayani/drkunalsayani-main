"use client";

import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-[#13547A] to-[#40AEB9B0]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            Take the first step toward your desired look,
            <br className="hidden sm:block" />
            avail a consultation today
          </h1>
          <button
            className="bg-white hover:bg-[#1561a5] transition-colors
              text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-md text-sm sm:text-base"
          >
            Book Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <Image
            src="/images/homepage/hero/image3.png"
            alt="Consultation Banner"
            width={1000}
            height={1000}
            className="w-[80%] sm:w-[70%] lg:w-[30rem] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
