"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is the difference between saline and silicone breast implants?",
    answer:
      "Saline implants are filled with sterile salt water and can be adjusted during surgery; if they rupture, the saline is safely absorbed by the body. Silicone implants are filled with a gel that feels more like natural breast tissue but may require MRI monitoring for silent ruptures.",
  },
  {
    question: "How long do breast implants last?",
    answer:
      "Implants are not lifetime devices. Most last 10-20 years, but some may need replacement sooner due to rupture, capsular contracture, or personal preference.",
  },
  {
    question: "Will breast augmentation affect breastfeeding?",
    answer:
      "Breastfeeding is possible after augmentation, but certain incision types (e.g., around the areola) may increase the risk of breastfeeding difficulties. Discuss this with your surgeon if you plan to breastfeed.",
  },
  {
    question: "Are breast implants safe?",
    answer:
      "Breast implants are generally safe, but they carry risks such as capsular contracture, rupture, and rare cancers like BIA-ALCL. Ongoing research continues to monitor long-term safety.",
  },
  {
    question: "What is capsular contracture?",
    answer:
      "It is the hardening of scar tissue around the implant, causing firmness, pain, and breast distortion. It may require treatment with medication, massage, or surgery.",
  },
  {
    question: "Can I have mammograms after breast augmentation?",
    answer:
      "Yes, but additional mammogram views are needed to properly visualize breast tissue around implants.",
  },

  {
    question: "What should I do if I suspect a complication?",
    answer:
      "Contact your surgeon immediately if you experience severe pain, redness, swelling, fever, discharge, or sudden changes in breast shape or size. Early intervention can prevent serious complications.",
  },
  {
    question: "Can I combine breast augmentation with other procedures?",
    answer:
      "Absolutely. Common combinations include breast lift, tummy tuck, and liposuction, often done as part of a Mommy Makeover.",
  },
    {
    question: "What are common myths about breast augmentation?",
    answer:
      "Myth: Breast implants always look fake and unnatural. \n Fact: Modern implants and surgical techniques allow for very natural-looking results tailored to your body.\n\n" +
      "Myth: Breast implants last forever and never need replacement. \n Fact: Implants typically last 10-20 years and may require replacement or removal.\n\n" +
      "Myth: Breast augmentation prevents breastfeeding. \n Fact: Many women successfully breastfeed after augmentation, especially with certain incision types.\n\n" +
      "Myth: Breast implants cause breast cancer. \n Fact: There is no conclusive evidence that implants cause breast cancer; however, a rare lymphoma (BIA-ALCL) is associated with certain implants.\n\n" +
      "Myth: You cannot do mammograms if you have breast implants. \n Fact: Mammograms can be done safely with implants, but extra views are required.",
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
            src={"/images/services/breast/Breast Augmentation.jpeg"}
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
                        <div className="px-4 pb-4 bg-[#f9fafa] whitespace-pre-line">
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