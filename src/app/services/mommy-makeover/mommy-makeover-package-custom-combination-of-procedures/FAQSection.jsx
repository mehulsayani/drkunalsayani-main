
"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a Mommy Makeover?",
    answer:
      "A Mommy Makeover is a customized combination of surgical procedures designed to restore and enhance a woman's body after childbirth. It typically includes a tummy tuck, breast lift or augmentation, and liposuction to address changes in the abdomen, breasts, and body contours.",
  },
  {
    question: "Am I a good candidate for a Mommy Makeover?",
    answer:
      "The ideal candidate is a woman in good overall health, at or near her ideal body weight, who does not smoke, has realistic expectations, and is finished having children. A stable weight is key to long-lasting results.",
  },
  {
    question: "How long after childbirth should I wait for a Mommy Makeover?",
    answer:
      "Dr. Kunal Sayani advises waiting a minimum of 6-12 months after giving birth. More importantly, you should wait at least 6 months after you have completely finished breastfeeding to allow your hormones to normalize and your breasts to settle into their final shape and size.",
  },
  {
    question: "Will I lose a lot of weight with a Mommy Makeover?",
    answer:
      "A Mommy Makeover is a body contouring procedure, not a weight loss surgery. While some weight will be lost from the removal of skin and fat, the primary goal is to reshape and tighten the body. You should be close to your goal weight before the surgery.",
  },
  {
    question: "I can't decide between all the procedures. Can Dr. Sayani help?",
    answer:
      "Absolutely. A key part of the consultation at our Mumbai clinic is to guide you. Based on your goals and his expert examination, Dr. Sayani will help you prioritize and decide on the combination of procedures that will give you the most impactful and satisfying result.",
  },
];

const mythsVsFacts = [
  {
    myth: "I can get the same results with a 'non-surgical Mommy Makeover.'",
    fact:
      "While non-surgical treatments like radiofrequency or cryolipolysis can offer modest improvements in skin tightness and fat reduction, they absolutely cannot repair separated abdominal muscles, remove significant loose skin, or lift sagging breasts. The dramatic, transformative results of a surgical Mommy Makeover are in a completely different category.",
  },
  {
    myth: "It's safer to have each surgery done separately.",
    fact:
      "For a healthy, suitable candidate, combining procedures into one surgical event is generally considered very safe. It avoids the risks and costs of multiple anesthesia and the strain of multiple separate recovery periods. Dr. Kunal Sayani will thoroughly evaluate your health to ensure a combined procedure is a safe option for you.",
  },
  {
    myth: "I'll be back to my normal routine and caring for my kids in a week.",
    fact:
      "This is a dangerous misconception. A Mommy Makeover is major surgery. The recovery is demanding and requires a significant period of rest and restricted activity. Trying to do too much too soon can lead to serious complications. Planning for extensive help with childcare is not optional; it is essential for a safe recovery.",
  },
  {
    myth: "The results are permanent, no matter what I do.",
    fact:
      "The results of your Mommy Makeover can last a lifetime, but only with your help. Significant weight fluctuations or a future pregnancy will re-stretch the skin and compromise your results. Maintaining a stable weight through a healthy diet and regular exercise is the key to protecting your surgical investment.",
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
            src="/images/services/mommymakeover/Mommy Makeover Package.jpg"
            alt="Mommy Makeover"
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
