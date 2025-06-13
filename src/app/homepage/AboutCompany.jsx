"use client";

import Image from "next/image";
import React from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import { motion } from "framer-motion";

export default function AboutCompany() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-12">
      <div className="relative flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/homepage/gallery/gallery3.png"
            alt="Tvameva Clinic"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2  max-lg:text-center max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
          <p className="text-sm w-38 flex items-center gap-1 bg-green-100 tracking-wide mb-1 px-2 py-1 rounded-full">
            <MdRadioButtonChecked />
            <span>About Company</span>
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold  text-[#10217D] mb-6">
            Tvameva: Where Precision Meets Personalization in Aesthetic Care
          </h1>
          <p className="text-gray-600 leading-relaxed space-y-4">
            At <strong>Tvameva</strong>, founded by renowned aesthetic surgeon{" "}
            <strong>Dr. Kunal Sayani</strong>, we believe that beauty is deeply
            personal — and so is the journey to achieving it. The name{" "}
            <em>Tvameva</em>, meaning "For You" in Sanskrit, reflects our
            commitment to individualized care, comfort, and natural results.
            <br />
            <br />
            Our clinic blends cutting-edge medical technology with a serene,
            patient-centric environment to ensure every procedure is safe,
            precise, and tailored to your goals. From the moment you walk in,
            you're not just in expert hands — you're at the heart of everything
            we do.
            <br />
            <br />
          </p>
          <div className="flex items-center gap-4">
            <a href="/about-clinic">
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1BA9B5] hover:bg-[#148d98] transition-colors text-white font-semibold
              px-8 py-2 rounded-md shadow-md"
            >
              Read More
            </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
