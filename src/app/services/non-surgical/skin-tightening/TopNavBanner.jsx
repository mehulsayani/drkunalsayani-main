import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopNavBanner() {
  return (
    <div
      className="bg-[#1aaebcaf] m-2 text-white rounded-[2rem] max-lg:rounded-2xl px-6 py-22 max-lg:py-12 
    relative overflow-hidden text-center"
    >
      <Image
        fill
        className="w-full object-cover -z-20"
        alt=""
        src={"/images/services/nonsurgical.jpg"}
      />

      {/* Main heading */}
      <h1 className="text-5xl font-notoSans max-lg:text-xl font-semibold">
        Skin Tightening
      </h1>

      {/* Breadcrumbs */}
      <div className="mt-4 max-lg:mt-2 text-sm md:text-base text-white font-roboto">
        <Link href={"/"}>
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <span className="mx-2">/</span>
        <Link href={"/services"}>
          <span className="hover:underline cursor-pointer">Services</span>
        </Link>
        <span className="mx-2">/</span>
        <Link href={"/services/non-surgical"}>
          <span className="hover:underline cursor-pointer">Non Surgical</span>
        </Link>
        <span className="mx-2">/</span>

        <span className=" font-medium">Skin Tightening</span>
      </div>
    </div>
  );
}
