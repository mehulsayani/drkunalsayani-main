import Image from "next/image";
import React from "react";

export default function Aesthetics() {
  return (
    <div className=" flex justify-between items-center w-full relative">
      <Image src={'/images/homepage/hero/abstract1.png'} width={300} height={300} alt="" 
      className="absolute top-0 left-0 max-lg:w-30 -z-10"/>
      <Image src={'/images/homepage/hero/logoimage.png'} width={500} height={500} alt="" 
      className="absolute top-0 right-0 opacity-10 max-lg:w-54 -z-10"/>
      <div className="text-center w-2xl md:text-left pl-18 max-lg:p-0 flex flex-col items-start max-lg:pl-4">
        <h2 className="text-5xl max-lg:text-lg font-bold text-blue-900 mb-6 max-lg:mb-2 max-lg:text-left">
          Transform How You Feel Not Just How You Look
        </h2>
        <p className="text-lg max-lg:text-sm md:text-xl mb-6 max-lg:mb-0 text-black  max-lg:hidden">
          Dr. Kunal Sayani believes aesthetic surgery isn’t a luxury—it’s a path
          to restored confidence and improved quality of life.
        </p>
        <a href="/book-appointment">
          <button className="bg-yellow-300 hover:bg-yellow-500 transition-colors
         text-black font-semibold px-8 py-3 max-lg:px-2 max-lg:py-1 rounded-xl max-lg:rounded shadow-md max-lg:text-sm">
          Book Appointment
        </button>
        </a>
      </div>

      <div className="relative ">
        <Image
          src="/images/homepage/aesthetics/girl_image.png"
          alt="Aesthetic Banner"
          width={2000}
          height={2000}
          className="w-[40rem] max-lg:w-[60rem]"
        />
      </div>
    </div>
  );
}
