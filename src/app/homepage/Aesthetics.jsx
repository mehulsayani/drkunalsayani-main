  import Image from "next/image";
  import React from "react";

  export default function Aesthetics() {
    return (
      <div className="bg-gradient-to-r max-lg:flex-col from-[#1BA9B5]/70 to-pink-30 flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-12 lg:px-24 gap-10">
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Accessible Aesthetics. Authentic Results.
          </h2>
          <p className="text-lg md:text-xl mb-6 text-black">
            Dr. Kunal Sayani believes aesthetic surgery isn’t a luxury—it’s a path
            to restored confidence and improved quality of life.
          </p>
          <button className="bg-yellow-300 hover:bg-[#1561a5] transition-colors text-black font-semibold px-8 py-3 rounded-xl shadow-md">
            Book Appointment
          </button>
        </div>

        <div className="relative w-[90vw] h-[90vh]">
          <Image
            src="/images/aesthetics/aesthetics.png"
            alt="Aesthetic Banner"
            fill
            className="object-cover rounded-2xl "
          />
        </div>
      </div>
    );
  }
