"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Am I a good candidate for breast reduction?",
    answer:
      "You may be a suitable candidate if you experience physical discomfort due to large breasts, have chronic skin irritation under the breast fold, struggle with finding properly fitting clothes, or have poor posture due to breast weight. A consultation with Dr. Kunal Sayani will determine your candidacy.",
  },
  {
    question: "Will breast reduction leave visible scars?",
    answer:
      "Yes, some scarring is inevitable. However, Dr. Sayani uses advanced techniques to ensure minimal, well-placed scars that fade significantly over time with proper aftercare.",
  },
  {
    question: "Can I breastfeed after breast reduction?",
    answer:
      "Some women retain the ability to breastfeed, but it’s not guaranteed. The likelihood depends on the surgical technique used and the amount of tissue removed.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "You may experience mild to moderate discomfort post-surgery, which is effectively managed with prescribed medications. Most patients find the recovery easier than expected.",
  },
  {
    question: "How long do the results last?",
    answer:
      "Breast reduction results are long-lasting, especially when paired with a healthy lifestyle. However, significant weight changes or pregnancy may impact breast size and shape.",
  },
  {
    question: "Will my insurance cover breast reduction?",
    answer:
      "In some cases, when performed for medical reasons (e.g., chronic back or neck pain), the procedure may be partially or fully covered. Dr. Kunal Sayani’s team can assist you with documentation if applicable.",
  },
  {
    question: "Can breasts grow back after reduction?",
    answer:
      "While the removed tissue does not regrow, remaining breast tissue can change size due to hormonal fluctuations, pregnancy, or weight gain.",
  },
  {
    question: "How do I choose the right surgeon?",
    answer:
      "Look for a board-certified plastic surgeon with extensive experience in breast reduction, such as Dr. Kunal Sayani, who prioritizes safety, aesthetics, and patient satisfaction.",
  },
  {
    question: "What should I expect during the consultation?",
    answer:
      "Dr. Kunal Sayani will evaluate your medical history, breast anatomy, and goals, discuss surgical options, risks, and recovery, and develop a personalized surgical plan.",
  },
  {
    question: "Can liposuction alone reduce breast size?",
    answer:
      "In some cases with fatty breasts, liposuction can reduce volume with smaller scars. However, it does not address excess skin or nipple repositioning, which are often needed.",
  },
  {
    question: "What are some of the common myths around Breast Reduction?",
    answer:
      "Myth: Breast reduction is only cosmetic. Fact: While it improves appearance, it also relieves physical discomfort and improves posture and mobility.\n\n" +
      "Myth: Scars will be very noticeable. Fact: Scars fade over time and are strategically placed. Most patients feel the benefits outweigh minor scarring.\n\n" +
      "Myth: You can't breastfeed after surgery. Fact: Many women are still able to breastfeed post-surgery, depending on the technique used.\n\n" +
      "Myth: Only older women get breast reduction. Fact: Breast reduction is suitable for women of all ages, including teens with significant physical discomfort.\n\n" +
      "Myth: Results look unnatural. Fact: Dr. Kunal Sayani specializes in natural, proportionate outcomes that enhance your overall silhouette.",
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
            src={"/images/services/breast/Breast Reduction & Axillary Breasts Excision.jpg"}
            alt="Clinic timing"
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