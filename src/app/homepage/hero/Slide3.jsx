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
      className="w-full flex justify-center relative mt-[1.3rem]  max-lg:mt-[5rem]  max-md:mt-[0.2rem] 
      max-lg:h-[43rem] pt-[6rem] max-xl:pt-[8rem] items-center 
       text-[#10217D]"
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

      <div className="w-6xl max-xl:w-4xl flex flex-col lg:flex-row justify-between items-center px-6">
        {/* Left Content */}
        <div className="text-center lg:text-left w-full ">
          <h2 className=" max-xl:text-4xl font-bold max-xl:font-semibold max-lg:mt-8 text-5xl mb-6">
            Area of Specialization{" "}
          </h2>
          <ul className="space-y-4 text-base sm:text-lg">
            {services.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`pl-4  transition-colors duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "border-blue-500 border-l-4 text-blue-800 font-semibold"
                    : "border-white/20 text-black "
                }`}
              >
                <Link href={`/services/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <Image
          src="/images/homepage/hero/kunal.png"
          alt="Aesthetic Model"
          width={1000}
          height={1000}
          className=" w-[410px] max-xl:w-[44.5rem] max-lg:w-[20rem] max-md:w-[28rem] max-sm:w-[15rem]
           "
        />
      </div>
    </section>
  );
}
