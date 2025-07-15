"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Who is an ideal candidate for jawline contouring with Dr. Kunal Sayani?",
    answer:
      "Ideal candidates are individuals who are generally healthy, have realistic expectations, and are bothered by a poorly defined jawline, jowls, a double chin, or a weak chin. Specific candidacy depends on your unique anatomy and aesthetic goals, which Dr. Kunal Sayani will assess during your consultation.",
  },
  {
    question: "How long do the results of jawline contouring last?",
    answer:
      "The longevity varies greatly. Non-surgical options like fillers last 12-24 months, neuromodulators 4-6 months, and Kybella results are permanent as fat cells are destroyed. Surgical procedures like liposuction and chin implants offer permanent results, though the natural aging process will continue. Facelift/neck lift results are long-lasting, often for 10-15 years.",
  },
  {
    question: "Is jawline contouring painful?",
    answer:
      "Non-surgical treatments typically involve minimal discomfort, often managed with topical numbing cream. Surgical procedures are performed under local or general anesthesia, so you won't feel pain during the procedure. Post-operative discomfort is managed with prescribed pain medication.",
  },
  {
    question: "How long is the recovery time?",
    answer:
      "Recovery for non-surgical treatments is minimal (a few hours to a few days of mild swelling/bruising). Surgical procedures require more downtime, ranging from 1-2 weeks for initial recovery to several months for complete swelling resolution and final results.",
  },
  {
    question: "Can jawline contouring help with a double chin?",
    answer:
      "Absolutely! Submental liposuction or Kybella injections are specifically designed to address and eliminate a double chin, revealing a more defined jawline.",
  },
  {
    question: "Can jawline contouring make my face look more masculine or feminine?",
    answer:
      "Yes, with Dr. Kunal Sayani's expertise, jawline contouring can be tailored to enhance masculine features (e.g., a sharper, more angular jaw) or feminine features (e.g., a more refined, delicate jawline, often with a V-shape).",
  },
  {
    question: "What is the cost of jawline contouring?",
    answer:
      "The cost varies significantly based on the chosen procedure(s), the extent of treatment, and anesthesia fees (if applicable). During your consultation with Dr. Kunal Sayani, you will receive a detailed cost estimate tailored to your personalized treatment plan.",
  },
  {
    question: "Myth: Jawline contouring is only for people who are overweight.",
    answer:
      "Fact: While excess fat can obscure the jawline, many individuals with a healthy weight seek jawline contouring due to genetics, aging, or a naturally recessed chin.",
  },
  {
    question: "Myth: You can achieve a perfectly chiseled jawline with just diet and exercise.",
    answer:
      "Fact: While weight loss can improve overall facial slimness, it cannot address genetic predispositions, skin laxity, a weak chin, or an enlarged masseter muscle that contributes to a less defined jawline. Aesthetic procedures offer targeted solutions.",
  },
  {
    question: "Myth: All jawline contouring procedures are surgical and require extensive downtime.",
    answer:
      "Fact: This is false. Dr. Kunal Sayani offers a wide range of non-surgical options like dermal fillers, neuromodulators, and Kybella, which involve minimal to no downtime. Surgical options are available for more significant concerns.",
  },
  {
    question: "Myth: Jawline contouring results always look unnatural or 'done.'",
    answer:
      "Fact: When performed by a skilled and experienced surgeon like Dr. Kunal Sayani, the goal is always to achieve natural-looking, harmonious results that enhance your existing features, not drastically alter them. The key is a personalized approach and artistic precision.",
  },
  {
    question: "Myth: Jawline contouring is a one-size-fits-all procedure.",
    answer:
      "Fact: This is completely false. As highlighted by Dr. Kunal Sayani's approach, jawline contouring involves a diverse range of techniques, each tailored to the individual's specific needs, facial anatomy, and desired outcome.",
  },
  {
    question: "Myth: Injectables like fillers are permanent for jawline contouring.",
    answer:
      "Fact: While some injectables (like Kybella, for fat reduction) offer permanent results, hyaluronic acid-based dermal fillers are temporary and are naturally metabolized by the body over time. Retreatment is necessary to maintain the results.",
  },
  {
    question: "Myth: Jawline contouring is only for younger people.",
    answer:
      "Fact: While younger individuals may seek to enhance existing features, many older patients choose jawline contouring to address signs of aging such as jowls, skin laxity, and a less defined profile, restoring a more youthful appearance.",
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
            src={"/images/services/men/jawline-contouring.png"}
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
                          <p className="text-gray-700 text-sm md:text-base whitespace-pre-line">
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