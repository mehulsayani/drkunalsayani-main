"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Gynaecomastia",
    link: "/services/men/gynaecomastia",
    description: "Surgical correction of enlarged male breasts for a more defined chest.",
    image: "/images/services/men/Gynaecomastia.jpeg",
  },
  {
    title: "Liposuction",
    link: "/services/men/liposuction",
    description: "Removes localized fat deposits to sculpt and contour the male physique.",
    image: "/images/services/body/liposuction/liposuction-min.jpg",
  },
  {
    title: "Hair Loss Treatment",
    link: "/services/men/hair-loss-treatment",
    description: "Non-surgical solutions like PRP and medications to combat hair thinning.",
    image: "/images/services/men/hair-loss-treatment.jpg",
  },
  {
    title: "Hair Transplant",
    link: "/services/men/hair-transplant",
    description: "Restores hair growth naturally using advanced transplant techniques.",
    image: "/images/homepage/specialization/hair-transplant.jpg",
  },
  {
    title: "Rhinoplasty (Nose job)",
    link: "/services/men/rhinoplasty-nose-job",
    description: "Surgical reshaping of the nose for improved appearance and breathing.",
    image: "/images/services/face/Rhinoplasty (Nose job).jpg",
  },
  {
    title: "Eyelid Surgery (Blepharoplasty)",
    link: "/services/men/eyelid-surgery-blepharoplasty",
    description: "Eliminates droopy eyelids and puffiness for a refreshed look.",
    image: "/images/services/face/Eyelid Surgery (Blepharoplasty).jpeg",
  },
  {
    title: "Prominent Ear Surgery (Otoplasty)",
    link: "/services/men/prominent-ear-surgery-otoplasty",
    description: "Reshapes protruding ears to create a more symmetrical appearance.",
    image: "/images/services/face/Prominent Ear Surgery (Otoplasty).jpg",
  },
  {
    title: "Facelift",
    link: "/services/men/facelift",
    description: "Lifts and firms facial tissues to reduce sagging and restore youthfulness.",
    image: "/images/services/face/Facelift.jpg",
  },
  {
    title: "Thread Lift Treatment",
    link: "/services/men/thread-lift-treatment",
    description: "Minimally invasive procedure that lifts sagging skin using absorbable threads.",
    image: "/images/services/face/Thread-lifting.jpg",
  },
  {
    title: "Chin Augmentation",
    link: "/services/men/chin-augmentation",
    description: "Improves chin definition and overall facial harmony with implants or fillers.",
    image: "/images/services/face/chin-augmentation.png",
  },
  {
    title: "Jawline Contouring",
    link: "/services/men/jawline-contouring",
    description: "Sharpens jawline definition using sculpting, fillers, or surgical techniques.",
    image: "/images/services/face/Jawline Contouring.jpg",
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
          Men
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
          <span className="font-medium">Men</span>
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
