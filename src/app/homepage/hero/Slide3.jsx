"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    { name: "Breast Augmentation", slug: "breast/breast-augmentation" },
    {
      name: "Breast Reduction",
      slug: "breast/breast-reduction-&-axillary-breasts-excision",
    },
    { name: "Gynecomastia", slug: "men/gynaecomastia" },
    { name: "Liposuction", slug: "body/liposuction" },
    { name: "Tummy Tuck", slug: "body/tummy-tuck-abdominoplasty" },
    { name: "Face Lift", slug: "face/facelift" },
    {
      name: "Botox / Derma Fillers",
      slug: "non-surgical/botox-wrinkles-anti-ageing",
    },
    { name: "Hair Transplant", slug: "hair/hair-transplant" },
  ];

  // 👇 Default selected is first service
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="w-full flex justify-center relative mt-[1.3rem] max-lg:mt-[3rem] 
      max-lg:h-[87vh] pt-[4rem] items-center 
      bg-[#E5F4F6] text-[#10217D]"
    >
      <Image
        src={"/images/homepage/hero/abstract2.png"}
        width={1000}
        height={1000}
        alt=""
        className="absolute w-[7rem] top-26 max-lg:top-0 left-0 opacity-90"
      />
      <Image
        src={"/images/homepage/hero/abstract3.png"}
        width={1000}
        height={1000}
        alt=""
        className="absolute w-[8rem] bottom-5 left-0 opacity-90"
      />

      <div className="w-6xl max-xl:w-4xl flex flex-col lg:flex-row justify-between gap-12 items-center px-6">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className=" max-xl:text-4xl max-xl:font-semibold max-lg:mt-8 text-6xl mb-6">
            Services we offer
          </h2>
          <ul className="space-y-4 text-base sm:text-lg">
            {services.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`pl-4 border-l-4 transition-colors duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "border-blue-500 text-blue-800 font-semibold"
                    : "border-white/20 text-black hover:text-blue-800"
                }`}
              >
                <Link href={`/services/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <Image
          src="/images/homepage/hero/hero3.png"
          alt="Aesthetic Model"
          width={500}
          height={600}
          className=" w-[31rem] max-lg:w-[30rem] max-lg:relative max-lg:bottom-[4rem]"
        />
      </div>
    </section>
  );
}
