"use client";

import Image from "next/image";
import React from "react";
import CustomControls from "./CustomControls";


export default function Slide1() {
  const stats = [
    { label: "Years of Experience", value: "8+" },
    { label: "Happy Patients", value: "1000+" },
    { label: "5-Star Reviews", value: "200+" },
  ];
  return (
    <section className="w-full min-h-[400px] transition-opacity duration-700 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="max-w-2xl mb-10 md:mb-0 mt-8">
          <h1 className="text-4xl font-[inter] md:text-[40px] mb-4 font-bold text-white leading-tight">
            When in Doubt, Trust Experience <br /> You're in Safe Hands with{" "}
            <br />
            <span className="text-[#00ffff]">Dr. Kunal Sayani</span>
          </h1>

          <p className="text-white mb-6 text-lg">
            Are you tired of hiding your chest behind baggy t-shirts? Experience
            safe and effective gynecomastia treatment with the utmost care and
            satisfaction at the Venkat Center.
          </p>

          <button className="group relative inline-flex items-center justify-center px-6 py-3 
          overflow-hidden font-semibold text-black transition-all duration-300 rounded-full 
          shadow-md bg-[#FEDF18] hover:bg-[#00ffff]">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black 
            opacity-10 group-hover:w-full group-hover:h-full group-hover:rounded-full"></span>
            <span className="relative z-10 text-gray-800">Book Appointment</span>
          </button>

          <CustomControls />
          <section className="mt-6">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 text-center rounded-xl">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className=" backdrop-blur-md bg-white/10 p-4 rounded-lg shadow-md transition"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Image */}
        <div className="relative  md:w-[600px]  md:h-[500px]">
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
