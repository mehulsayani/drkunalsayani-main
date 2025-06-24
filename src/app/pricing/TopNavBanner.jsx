import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopNavBanner() {
  return (
    <div
      className="bg-[#1aaebcaf] m-2 text-[#ffffff] rounded-[2rem] max-lg:rounded-2xl px-6 py-18 max-lg:py-12 
    relative overflow-hidden text-center"
    >
      {/* <Image
        fill
        className="w-full object-cover -z-20"
        alt=""
        src={"/images/services/body/tummytuck/topbanner4.jpg"}
      /> */}

      {/* Main heading */}
      <h1 className="text-5xl font-notoSans max-lg:text-3xl font-semibold">
        Pricing
      </h1>

      {/* Breadcrumbs */}
      <div className="mt-4 max-lg:mt-2 text-sm md:text-base text-white font-roboto">
        {/* <p className="text-xl">
          "Real stories, real results <br />
          see what our patients are saying."
        </p> */}
      </div>
    </div>
  );
}
