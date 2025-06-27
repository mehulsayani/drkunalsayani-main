"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Hair",
    link: "/services/hair",
    description: "Advanced treatments for hair restoration and growth.",
    image: "/images/services/hair2.jpg",
  },
  {
    title: "Face",
    link: "/services/face",
    description: "Enhance your facial features with expert surgical care.",
    image: "/images/services/face.jpg",
  },
  {
    title: "Breast",
    link: "/services/breast",
    description:
      "Customized breast augmentation, reduction, or lift procedures.",
    image: "/images/services/breast.jpg",
  },
  {
    title: "Body",
    link: "/services/body",
    description: "Contouring procedures to sculpt your ideal body shape.",
    image: "/images/services/body.jpg",
  },
  {
    title: "Mommy Makeover",
    link: "/services/mommy-makeover",
    description: "Restore your pre-pregnancy body with combined procedures.",
    image: "/images/services/mommymakeover.jpg",
  },
  {
    title: "Non Surgical",
    link: "/services/non-surgical",
    description: "Minimally invasive treatments with no downtime.",
    image: "/images/services/nonsurgical.jpg",
  },
  {
    title: "Men",
    link: "/services/men",
    description: "Personalized aesthetic procedures designed for men.",
    image: "/images/services/men.jpg",
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
          All Services
        </h1>

        {/* Breadcrumbs */}
        <div className="mt-4 max-lg:mt-2 text-sm md:text-base text-white font-roboto">
          <Link href={"/"}>
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <span className="mx-2">/</span>
       
            <span className="font-medium">Services</span>
          
          
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
