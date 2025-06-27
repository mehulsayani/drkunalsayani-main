"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const services = [
  {
    title: "Breast Augmentation",
    link: "/services/breast/breast-augmentation",
    description:
      "Enhances breast size and shape using implants or fat transfer.",
    image: "/images/services/breast/Breast Augmentation.jpeg",
  },
  {
    title: "Breast Lift (Mastopexy) with Shaping",
    link: "/services/breast/breast-lift-mastopexy-with-shaping",
    description: "Raises and reshapes sagging breasts for a firmer appearance.",
    image: "/images/services/breast/Breast Lift (mastopexy) with Shaping.jpeg",
  },
  {
    title: "Breast Reduction & Axillary Breasts Excision",
    link: "/services/breast/breast-reduction-&-axillary-breasts-excision",
    description:
      "Reduces breast size and removes excess tissue for comfort and balance.",
    image: "/images/services/breast.jpg",
  },
];

export default function Page() {
  return (
    <div className=" pt-[8rem] max-lg:pt-[5rem] bg-gray-50">
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
          Breast
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
          <span className="font-medium">Breast</span>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <div className="grid w-full max-w-[1300px] max-lg:w-[90%] max-xl:w-[90%] py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer">
                <div className="w-full h-56 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
