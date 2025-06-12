"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What are Dermal Fillers?",
    answer:
      "Dermal fillers are injectable gel-like substances used to restore volume to the face, smooth out lines and wrinkles (static wrinkles), enhance facial contours, and rejuvenate various areas of the face and body. Most commonly, they are made of hyaluronic acid (HA), a substance naturally found in the skin.",
  },
  {
    question: "How do Dermal Fillers work?",
    answer:
      "Dermal fillers work by physically adding volume beneath the skin's surface. They fill in hollows, plump up areas that have lost fat, and smooth out lines. Many fillers also stimulate your body's natural collagen production over time, which further contributes to skin rejuvenation.",
  },
  {
    question: "What types of concerns can Dermal Fillers address?",
    answer:
      "Dermal fillers are highly versatile and can address a wide range of aesthetic concerns, including: smoothing nasolabial folds and marionette lines, restoring volume to sunken cheeks and temples, enhancing and plumping lips, minimizing under-eye hollows, defining the jawline and chin, correcting facial asymmetry, and rejuvenating the back of the hands. Dr. Kunal Sayani will recommend the best filler and technique for your specific needs.",
  },
  {
    question: "Who is a good candidate for Dermal Fillers?",
    answer:
      "Ideal candidates are generally healthy adults seeking to address signs of aging such as volume loss, static wrinkles, or those desiring subtle enhancements to their facial features. A comprehensive consultation with Dr. Kunal Sayani is essential to determine your suitability.",
  },
  {
    question: "What types of Dermal Fillers does Dr. Kunal Sayani use?",
    answer:
      "Dr. Kunal Sayani uses a range of premium, FDA-approved dermal fillers, primarily hyaluronic acid (HA) based fillers (e.g., from Juvéderm, Restylane families) due to their versatility and reversibility. Depending on your needs, he may also use other types like Calcium Hydroxylapatite (CaHA) or Poly-L-Lactic Acid (PLLA) which stimulate collagen.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center px-4 md:px-8 my-16">
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-[485px] h-[300px] md:h-[461px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"/images/services/nonsurgical/Dermal Fillers.jpg"}
            alt="Facial treatment"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent text-white p-6">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg font-semibold">Opening Hours:</span>
            </div>
            <p className="text-sm">Mon - Sat : 10.00 AM - 8.00PM</p>
            <p className="text-sm">Sunday : Closed</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#10217D] font-marcellus">
            Got questions? We've got answers!
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
                    isOpen ? "border-[#40AEB9]" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 py-4 bg-white flex justify-between items-center 
                    text-left hover:bg-gray-50 focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-semibold text-[#000000]">
                      {faq.question}
                    </span>
                    <motion.span
                      className="text-2xl text-[#40AEB9]"
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <BsDash /> : <BsPlus />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 pb-4 bg-[#f9fafa]">
                          <p className="text-gray-700 text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
``
