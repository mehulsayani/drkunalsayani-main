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

      {/* Optional decorative elements */}

      {/* <Image
        src={"/images/services/body/tummytuck/lotus.png"}
        alt=""
        width={100}
        height={100}
        className="absolute bottom-6 left-5 opacity-40 text-white text-5xl max-lg:w-12 max-lg:h-10
         max-lg:left-2 max-lg:bottom-2"
      />

      <Image
        src={"/images/services/body/tummytuck/lotus.png"}
        alt=""
        width={100}
        height={100}
        className="absolute top-4 right-5 opacity-40 text-white text-xl max-lg:w-12 max-lg:h-10 
        max-lg:right-2 max-lg:top-2"
      /> */}

      {/* Main heading */}
      <h1 className="text-5xl font-notoSans max-lg:text-xl font-semibold">
        Botox (wrinkles-anti-ageing)
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

        <span className=" font-medium">Botox (wrinkles-anti-ageing)</span>
      </div>
    </div>
  );
}
