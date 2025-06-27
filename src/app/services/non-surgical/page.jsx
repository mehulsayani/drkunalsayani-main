"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Botox (wrinkles-anti-ageing)",
    link: "/services/non-surgical/botox-wrinkles-anti-ageing",
    description: "Advanced treatments for hair restoration and growth.",
    image: "/images/services/nonsurgical/Botox (wrinkles-anti-ageing).jpg",
  },
  {
    title: "Dermal Fillers",
    link: "/services/non-surgical/dermal-fillers",
    description: "Enhance your facial features with expert surgical care.",
    image: "/images/services/nonsurgical/Dermal Fillers.jpg",
  },
  {
    title: "Laser Skin Rejuvenation",
    link: "/services/non-surgical/laser-skin-rejuvenation",
    description:
      "Customized breast augmentation, reduction, or lift procedures.",
    image: "/images/services/nonsurgical/Laser Skin Rejuvenation.jpg",
  },
  {
    title: "Microneedling & PRP for Skin Rejuvenation",
    link: "/services/non-surgical/microneedling-&-prp-for-skin-rejuvenation",
    description: "Contouring procedures to sculpt your ideal body shape.",
    image:
      "/images/services/nonsurgical/Microneedling & PRP for Skin Rejuvenation.jpg",
  },
  {
    title: "Skin Tightening",
    link: "/services/non-surgical/skin-tightening",
    description: "Restore your pre-pregnancy body with combined procedures.",
    image: "/images/services/nonsurgical/Skin Tightening.jpg",
  },
];

export default function Page() {
  return (
     <div className=" pt-[8rem] bg-gray-50">
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
          Non Surgical
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
          <span className="font-medium">Non Surgical</span>
        </div>
      </div>
      {/* <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h1> */}

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
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
