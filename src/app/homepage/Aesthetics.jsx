import Image from "next/image";
import React from "react";

export default function Aesthetics() {
  return (
    <div className="bg-gradient-to-r max-lg:flex-col-reverse from-[#1BA9B5]/70 to-pink-30 flex flex-col-reverse md:flex-row justify-between items-center  gap-10">
      <div className="text-center md:text-left pl-18">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Transform How You Feel Not Just How You Look
        </h2>
        <p className="text-lg md:text-xl mb-6 text-black ">
          Dr. Kunal Sayani believes aesthetic surgery isn’t a luxury—it’s a path
          to restored confidence and improved quality of life.
        </p>
        <button className="bg-yellow-300 hover:bg-[#1561a5] transition-colors text-black font-semibold px-8 py-3 rounded-xl shadow-md">
          Schedule a Consultation
        </button>
      </div>

      <div className="relative">
        <Image
          src="/images/homepage/aesthetics/girl_image.png"
          alt="Aesthetic Banner"
          width={2000}
          height={2000}
          className="w-[90vw]"
        />
      </div>
    </div>
  );
}
