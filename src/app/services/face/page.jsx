"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Rhinoplasty (Nose job)",
    link: "/services/face/rhinoplasty-nose-job",
    description: "Reshapes the nose for improved appearance or breathing.",
    image: "/images/services/face/Rhinoplasty (Nose job).jpg",
  },
  {
    title: "Eyelid Surgery (Blepharoplasty)",
    link: "/services/face/eyelid-surgery-blepharoplasty",
    description: "Removes excess skin and fat from the upper or lower eyelids.",
    image: "/images/services/face/Eyelid Surgery (Blepharoplasty).jpeg",
  },
  {
    title: "Prominent Ear Surgery (Otoplasty)",
    link: "/services/face/prominent-ear-surgery-otoplasty",
    description: "Corrects protruding or misshapen ears for a natural look.",
    image: "/images/services/face/Prominent Ear Surgery (Otoplasty).jpg",
  },
  {
    title: "Facelift",
    link: "/services/face/facelift",
    description: "Tightens facial tissues to reduce sagging and signs of aging.",
    image: "/images/services/face/Facelift.jpg",
  },
  {
    title: "Thread Lift Treatment",
    link: "/services/face/thread-lift-treatment",
    description: "A non-surgical facelift using dissolvable threads to lift the skin.",
    image: "/images/services/face/Thread-lifting.jpg",
  },
  {
    title: "Chin Augmentation",
    link: "/services/face/chin-augmentation",
    description: "Enhances chin projection and balance with implants or fillers.",
    image: "/images/services/face/chin-augmentation.png",
  },
  {
    title: "Jawline Contouring",
    link: "/services/face/jawline-contouring",
    description: "Defines the jawline through sculpting or injectable treatments.",
    image: "/images/services/face/Jawline Contouring.jpg",
  },
  {
    title: "Lip Lift (Lip Job)",
    link: "/services/face/lip-lift-lip-job",
    description: "Shortens the upper lip for a fuller and youthful appearance.",
    image: "/images/services/face/Lip Lift (Lip job).jpeg",
  },
  {
    title: "Lipoma Cysts Scars",
    link: "/services/face/lipoma-cysts-scars",
    description: "Removes benign facial growths and reduces visible scarring.",
    image: "/images/services/face/Lipoma-Cysts-Scars.jpg",
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
          Face
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
          <span className="font-medium">Face</span>
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
