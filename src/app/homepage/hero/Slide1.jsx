"use client";

import Image from "next/image";
import React from "react";
import CustomControls from "./CustomControls";

export default function Slide1() {
  const stats = [
    { label: "Surgical Procedures", value: "1000+" },
    { label: "Years of Experience", value: "8" },
    { label: "Happy Patients", value: "98%" },
  ];
  return (
    <section className="w-full min-h-[400px] mt-[8rem] max-lg:mt-[5rem] flex justify-center items-center
     transition-opacity px-18 duration-700 ease-in-out">
      <div className="flex items-center   max-w-[1200px] max-xl:max-w-[1000px] justify-between  max-lg:flex-col">
        {/* Left Content */}
        <div className="max-w-5xl w-full font-[roboto] max-lg:mb-2 mb-10 md:mb-0 mt-8 max-lg:flex max-lg:justify-center 
        max-lg:items-center max-lg:flex-col">
          <h1
            className="text-4xl max-lg:text-3xl  md:text-[40px] max-lg:text-center 
          mb-4 font-bold max-lg:font-bold text-[#10217D] leading-tight "
          >
            When in Doubt, Trust Experience.  You're <br /> in Safe Hands with{" "}
            <br className="hidden max-lg:block"/>
            <span className="text-[#40AEB9]">Dr. Kunal Sayani</span>
          </h1>

          <p className="text-black mb-6 max-lg:mb-2 text-lg max-lg:text-base max-lg:text-center">
            "It’s Your Body — Trust It Only with Qualified and Experienced
            Plastic Surgeon. With years of surgical expertise and a deep
            understanding of aesthetic balance, Dr. Kunal provides personalized
            care you can count on."
          </p>

          <a href="/book-appointment">
            <button
            className="group relative inline-flex items-center justify-center px-6 py-3 
          overflow-hidden font-semibold text-black transition-all duration-300 rounded-lg 
          shadow-md bg-[#40AEB9] hover:bg-[#148d98]"
          >
           
            <span className="relative z-10 text-white">Book Appointment</span>
          </button>
          </a>

          <CustomControls />
          <section className="mt-6 max-lg:w-[80%] max-lg:hidden">
            <div className="flex gap-6 text-center rounded-xl">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-md ${
                    index === 0 || index === 1 ? "border-r" : ""
                  } bg-white/10 
                 transition pr-8`}
                >
                  <div className="text-4xl sm:text-5xl max-sm:text3xl text-[#25282BEB] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#25282BEB] max-lg:text-lg font-bold text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Image */}
        <div className="relative  w-[40rem] h-[33rem] max-xl:w-[50rem] max-lg:w-[19rem] max-lg:h-[19.5rem] max-md:h-[17.6rem]">
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
