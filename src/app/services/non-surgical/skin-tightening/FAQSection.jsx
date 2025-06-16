
"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is non-surgical skin tightening?",
    answer:
      "Non-surgical skin tightening uses advanced technologies like Radiofrequency (RF), High-Intensity Focused Ultrasound (HIFU), or RF Microneedling to stimulate collagen production, tighten loose skin, and improve skin texture without surgery, scars, or significant downtime.",
  },
  {
    question: "Who is the ideal candidate for non-surgical skin tightening?",
    answer:
      "The ideal candidate is someone with mild to moderate skin laxity who is not ready for or does not want to undergo surgery. It's perfect for individuals who are starting to notice sagging skin, jowls, or wrinkles and want a proactive, restorative treatment.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "This depends on the technology used and the individual's skin condition. HIFU may sometimes require only a single session. For RF and RF Microneedling, Dr. Kunal Sayani typically recommends a series of 3-6 treatments, spaced a few weeks apart, for optimal results.",
  },
  {
    question: "Are the treatments painful?",
    answer:
      "These treatments are generally very well-tolerated. RF treatments are often described as relaxing and warm. HIFU can cause moments of intense heat, but it is brief. RF Microneedling is made comfortable with the use of a powerful topical numbing cream.",
  },
  {
    question: "When will I see results, and how long do they last?",
    answer:
      "You may notice some immediate plumping and tightening, but the real results develop gradually over 2-6 months as your body builds new collagen. The results are long-lasting and can be maintained for years. Many patients opt for a maintenance session once a year to keep their collagen production stimulated.",
  },
  {
    question: "Can these treatments be performed on the body?",
    answer:
      "Yes! Radiofrequency is highly effective for tightening loose skin on the abdomen (especially post-pregnancy), arms, thighs, and above the knees.",
  },
];

const mythsVsFacts = [
  {
    myth: "Non-surgical skin tightening provides the same results as a surgical facelift.",
    fact:
      "This is false. A surgical facelift is the gold standard for correcting severe skin laxity and provides more dramatic and long-lasting results. Non-surgical skin tightening is a fantastic alternative for those with mild to moderate sagging who want significant, visible improvement without surgery, scars, or downtime.",
  },
  {
    myth: "These treatments melt fat in the face, making you look older.",
    fact:
      "When performed correctly by a skilled professional like Dr. Kunal Sayani, these devices target the specific layers of skin to stimulate collagen, not to destroy fat cells in the face. HIFU, in particular, has multiple cartridges to precisely target different depths, ensuring that the energy is delivered where it is needed for lifting, not for unwanted fat reduction.",
  },
  {
    myth: "You only need one session of any skin tightening treatment for permanent results.",
    fact:
      "While some technologies like HIFU can provide significant results in one session, most require a series of treatments for the best outcome. Furthermore, the results are long-lasting but not permanent because the natural aging process continues. Maintenance sessions are key to preserving your investment.",
  },
  {
    myth: "Skin tightening is only for older people.",
    fact:
      "While it's excellent for reversing signs of aging, many younger people in their 30s are now using skin tightening as a 'prejuvenation' treatment. By stimulating collagen production early, they can prevent or delay the onset of significant skin laxity, maintaining a firm and youthful appearance for longer.",
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
            src={"/images/services/nonsurgical/Skin Tightening.jpg"}
            alt="Non-Surgical Skin Tightening"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
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
            <p className="text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
            <p className="text-sm">Sunday: Closed</p>
          </div>
        </div>

        {/* FAQ and Myths vs Facts Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#10217D] font-marcellus">
            Got questions? We've got answers!
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={`faq-${index}`}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
                    isOpen ? "border-[#40AEB9]" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 py-4 bg-white flex justify-between items-center text-left hover:bg-gray-50 focus:outline-none"
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

          {/* Myths vs Facts Section */}
          <div className="mt-8">
            {/* <h3 className="text-2xl md:text-3xl mb-4 text-[#10217D] font-marcellus">
              Myths vs. Facts
            </h3> */}
            <div className="space-y-4">
              {mythsVsFacts.map((item, index) => {
                const isOpen = openIndex === index + faqs.length;
                return (
                  <div
                    key={`myth-${index}`}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
                      isOpen ? "border-[#40AEB9]" : "border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index + faqs.length)}
                      className="w-full px-4 py-4 bg-white flex justify-between items-center text-left hover:bg-gray-50 focus:outline-none"
                    >
                      <span className="text-base md:text-lg font-semibold text-[#000000]">
                        Myth: {item.myth}
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
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 pb-4 bg-[#f9fafa]">
                            <p className="text-gray-700 text-sm md:text-base">
                              <span className="font-semibold">Fact:</span>{" "}
                              {item.fact}
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
      </div>
    </section>
  );
}
