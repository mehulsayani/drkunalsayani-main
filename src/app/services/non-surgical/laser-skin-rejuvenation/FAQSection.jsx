"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is Laser Skin Rejuvenation?",
    answer:
      "Laser Skin Rejuvenation is a non-surgical procedure that uses laser technology to improve skin appearance by addressing concerns such as fine lines, wrinkles, sun damage, uneven skin tone and texture, acne scars, and benign pigmented lesions. It stimulates collagen production for healthier, more youthful skin.",
  },
  {
    question: "Who is a good candidate for Laser Skin Rejuvenation?",
    answer:
      "Ideal candidates are individuals who are in good overall health and have realistic expectations about the outcomes. The treatment can address concerns such as fine lines, wrinkles, sun damage, uneven skin tone and texture, acne scars, and benign pigmented lesions. Dr. Kunal Sayani will determine your candidacy during your consultation.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "The number of treatments required depends on your specific concerns, the type of laser used, and your desired results. While some patients may see significant improvement after a single session, others may require a series of treatments spaced several weeks apart.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Most patients describe the sensation as a warm or snapping feeling. We take every measure to ensure your comfort, including the use of topical numbing creams.",
  },
  {
    question: "What is the downtime?",
    answer:
      "Downtime varies. Non-ablative laser treatments typically have minimal to no downtime, with most patients returning to their normal activities immediately. Ablative laser treatments require a longer recovery period, often ranging from one to two weeks.",
  },
  {
    question: "When will I see the results?",
    answer:
      "Some initial results may be visible shortly after the initial healing period. However, the full benefits of collagen remodeling will become more apparent over the following weeks and months, with continuous improvement for up to a year.",
  },
];

const mythsVsFacts = [
  {
    myth: "Laser Skin Rejuvenation is only for older people.",
    fact:
      "While it is an excellent anti-aging treatment, people of various ages can benefit from it. Younger individuals may opt for laser treatments to address acne scars, uneven skin tone, or to proactively stimulate collagen for long-term skin health.",
  },
  {
    myth: "Laser treatments thin the skin.",
    fact:
      "This is a common misconception. In reality, laser skin rejuvenation stimulates the production of new collagen, which actually thickens and strengthens the skin, making it more resilient and youthful.",
  },
  {
    myth: "You only need one laser treatment for permanent results.",
    fact:
      "While the results of laser skin rejuvenation can be long-lasting, they are not permanent. The natural aging process continues, and new sun damage can occur. Maintenance treatments and a good skincare regimen are recommended to prolong your results. Dr. Kunal Sayani can recommend a suitable maintenance schedule for you.",
  },
  {
    myth: "Laser treatments are unsafe for darker skin tones.",
    fact:
      "While some older laser technologies posed a higher risk of pigmentation changes in darker skin, modern advancements have made laser treatments much safer for a wider range of skin tones. Dr. Kunal Sayani has extensive experience in treating diverse skin types and will select the appropriate laser and settings to ensure a safe and effective treatment for you.",
  },
  {
    myth: "At-home laser devices are just as effective as professional treatments.",
    fact:
      "At-home devices have significantly lower energy levels than the professional-grade lasers used by medical professionals like Dr. Kunal Sayani. While they may offer some minor benefits, they cannot achieve the same dramatic and lasting results as an in-office treatment. Professional treatments are also much safer as they are performed under controlled conditions by a trained expert.",
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
            src="/images/services/nonsurgical/Laser Skin Rejuvenation.jpg"
            alt="Laser Skin Rejuvenation"
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
                          <p className="text-gray-600 text-sm md:text-base">
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
                            <p className="text-gray-600 text-sm md:text-base">
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