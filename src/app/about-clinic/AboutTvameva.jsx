import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="flex w-full max-w-[1200px]  flex-col lg:flex-row items-start gap-10 justify-start px-6 md:px-16 py-10 ">
      {/* Left Image */}
      <div className="relative ">
        <Image
        width={1000}
        height={1000}
          src="/images/homepage/gallery/gallery3.png" // replace with actual image path
          alt="Clinic Process"
          className="rounded-xl lg:w-[32rem]"
        />
       
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 w-full space-y-4 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col max-lg:text-center ">
        <button className="font-bold flex flex-col gap-1 justify-center items-start rounded-full text-gray-600">
          <div className="flex gap-4 justify-center items-center ">
            {/* <Image src={'/images/homepage/aboutcompany/sayanilogo.png'} width={40} height={40} alt=""
            className="bg-gray-950 p-1 rounded"/> */}
            Welcome to Tvameva
          </div>
          <div className="w-40 h-[2px] bg-blue-500 rounded-full"></div>
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-[#10217D]">
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
    </div>
  );
};

export default AboutSection;
// 