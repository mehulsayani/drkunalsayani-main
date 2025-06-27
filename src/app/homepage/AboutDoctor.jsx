"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PT_Serif } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const images = ["image1", "image2", "image3", "image4"];

  return (
    <section className="relative pt-12 sm:pt-16  md:pt-20 ">
      <div className="max-w-[1250px] mx-auto flex max-lg:flex-col max-lg:items-center items-center max-xl:items-start gap-4 sm:gap-6 md:gap-0">
        {/* Left: Doctor Image with Background Circle */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-[45%] flex justify-center "
        >
          <Image
            src={"/images/homepage/hero/logoimage.png"}
            width={500}
            height={500}
            alt=""
            className="absolute top-18 -left-86 max-lg:hidden opacity-20 max-lg:w-54 w-[28rem] h-[30rem] -z-10"
          />
          <div
            className="absolute w-[580px] max-xl:w-[500px]  max-lg:w-[450px] max-md:w-[350px] rounded-full
           -top-3 max-xl:top-0  "
          >
            <Image
              src="/images/homepage/aboutdoctor/bg-image.png"
              width={1000}
              height={1000}
              alt=""
              className="relative -z-10 -left-4 max-sm:left-0 max-lg:bottom-12 
              max-md:bottom-0 max-w-full h-auto "
            />
          </div>
          <Image
            src="/images/homepage/aboutdoctor/kunal_sayani1.png"
            alt="Dr. Kunal Sayani"
            width={300}
            height={375}
            className="relative z-10 object-cover transform
             w-[480px]  max-xl:w-[424px] max-lg:w-[350px] max-md:w-[300px] h-auto"
            priority
          />
        </motion.div>

        {/* Right: About Content */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTextInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[55%] max-lg:w-[100%] mt-6 md:mt-0 max-lg:text-center max-lg:flex  
          max-lg:items-center max-lg:flex-col"
        >
          <h3 className="text-3xl sm:text-2xl md:text-[2rem] font-semibold text-[#10217D] tracking-wide">
            About <span className="text-[#1AAEBC]">Dr. Kunal Sayani</span>
          </h3>

          <h2 className=" font-semibold text-[#10217D] mb-2">
            Board-Certified. Patient-Focused. Results-Driven.
          </h2>

          <p className="text-base max-lg:w-[90%] max-lg:text-sm max-md:text-base max-lg:text-center text-gray-800 leading-relaxed mb-2">
            Dr. Kunal Sayani is a distinguished Plastic & Aesthetic Surgeon
            based in Andheri, Mumbai, with over 8 years of dedicated experience
            in the field of aesthetic and reconstructive surgery. Known for his
            patient-centric approach and surgical precision, Dr. Sayani
            seamlessly blends advanced medical knowledge with a refined
            aesthetic sense — delivering results that are both natural and
            transformative.
          </p>

          <p className="text-base max-lg:w-[90%] max-lg:text-sm max-md:text-base text-gray-800 max-lg:text-center leading-relaxed mb-3">
            He completed his MCh in Plastic & Reconstructive Surgery from the
            prestigious Grant Medical College and Sir J.J. Hospital, Mumbai,
            where he also earned his MS in General Surgery. His foundational
            medical training was completed at Maharashtra University of Health
            Sciences, Nashik, setting the stage for a career committed to
            clinical excellence.
          </p>

          <p className="text-base max-lg:w-[90%] max-md:text-base max-lg:text-sm text-gray-800 max-lg:text-center leading-relaxed mb-3">
            With a comprehensive range of procedures offered — including{" "}
            <strong>Liposuction</strong>, <strong>Tummy Tuck</strong>,{" "}
            <strong>Breast Reduction and Implants</strong>,{" "}
            <strong>Rhinoplasty</strong>, <strong>Neck Lift</strong>,{" "}
            <strong>Face Lift (Rhytidectomy)</strong>,{" "}
            <strong>Mastopexy</strong>, and{" "}
            <strong>Facial Plastic Surgery</strong>{" "}
            <p className="max-xl:hidden max-lg:block">
              Dr. Kunal is known for delivering personalized outcomes that
              prioritize patient safety, satisfaction, and aesthetic harmony.
            </p>
          </p>

          <a href="/about-dr-kunal-sayani">
            <button
              className="px-8 sm:px-14 py-2 bg-[#1AAEBC] hover:bg-[#148d98] max-lg:mb-8 text-white 
          text-base sm:text-lg font-semibold rounded-md shadow  transition"
            >
              Read More
            </button>
          </a>
        </motion.div>
      </div>

      {/* Mobile Membership Banner */}
      <div
        className="relative z-40 bg-gradient-to-r min-[1024px]:hidden from-blue-900 to-cyan-800 
      text-white pt-6 sm:py-8 px-4 sm:px-6 rounded-t-[2rem] sm:rounded-t-[4rem] "
      >
        <div className="max-w-[1200px] mx-auto flex max-lg:flex-col gap-14 max-lg:gap-0">
          <h4 className="text-base text-center sm:text-left sm:text-lg md:text-2xl font-semibold w-full sm:w-[100%] lg:w-[40%]">
            Dr. Kunal Sayani is a proud member of several esteemed national and
            international professional bodies:
          </h4>
          <div className="w-full px-4 py-6 max-lg:pb-2">
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i} className="px-2">
                  <div className="bg-white p-2 rounded-lg shadow-md w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                    <Image
                      src={`/images/homepage/aboutdoctor/${img}.png`}
                      alt={`Membership ${i + 1}`}
                      width={80}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Desktop Membership Banner */}
      <div
        className="bg-gradient-to-r max-[1023px]:hidden from-blue-900 to-cyan-800 text-white 
      py-6 sm:py-8 px-4 sm:px-6  rounded-t-[2rem] sm:rounded-t-[4rem]"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center sm:flex-row gap-6 sm:gap-14">
          <h4 className="text-base sm:text-lg md:text-2xl font-semibold w-full sm:w-[40%]">
            Dr. Kunal Sayani is a proud member of several esteemed national and
            international professional bodies:
          </h4>
          <div className="w-full sm:w-[50%]">
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i} className="px-2">
                  <div className="bg-white p-2 rounded-lg shadow-md w-34 h-34 
                   max-xl:w-24 max-lg:w-20  max-xl:h-24 max-lg:h-20 mx-auto">
                    <Image
                      src={`/images/homepage/aboutdoctor/${img}.png`}
                      alt={`Membership ${i + 1}`}
                      width={80}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
