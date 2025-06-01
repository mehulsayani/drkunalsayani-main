import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 bg-white">
      {/* Left Image */}
      <div className="relative md:w-1/2 w-full mb-8 md:mb-0">
        <img
          src="" // replace with actual image path
          alt="Clinic Process"
          className="rounded-xl w-full h-auto object-cover"
        />
       
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full space-y-4">
        <button className="font-bold flex flex-col gap-2 justify-center items-start rounded-full text-gray-600">
          <div className="flex gap-4 justify-center items-center">
            <Image src={'/images/components/navbar/logo.png'} width={30} height={30} alt=""/>Welcome to Tvameva
          </div>
          <div className="w-40 h-[3px] bg-blue-300 rounded-full"></div>
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          At Tvameva, It’s All About You
        </h2>

        <p className="text-gray-600 leading-relaxed">
          At Tvameva, founded by renowned aesthetic surgeon Dr. Kunal Sayani, we
          believe that beauty is deeply personal—and so is the journey to achieving it. The
          name Tvameva, meaning <strong>"For You"</strong> in Sanskrit, reflects our commitment to
          individualized care, comfort, and natural results.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Our clinic blends advanced medical technology with a serene,
          patient-centric environment to ensure every procedure is safe, precise, and
          tailored to your goals. From the moment you walk in, you’re not just in expert
          hands—you’re at the heart of everything we do.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
// 