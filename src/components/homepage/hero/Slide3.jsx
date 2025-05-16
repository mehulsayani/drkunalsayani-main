// app/components/HeroGynecomastia.jsx
"use client";

import Image from "next/image";
import React from "react";

export default function Slide3() {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Content */}
        <div className="max-w-xl mb-10 md:mb-0 ">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1AAEBC] leading-tight">
            What Happens After Hair Transplant Surgery?
          </h1>

          <div className="h-1 w-24 bg-[#1AAEBC] my-4"></div>

          <p className="text-gray-700 mb-6 text-lg">
            Say goodbye to your concerns following hair transplant surgery.
            Proper aftercare and following the surgeon's instructions can help
            maximize the success and longevity of the hair transplant results.{" "}
          </p>

          <button className="bg-[#1AAEBC] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[500px] h-[400px] md:h-[500px]">
          <Image
            src="/homepage/hero/body3.png" // ✅ put this image inside /public/homepage/hero/
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
