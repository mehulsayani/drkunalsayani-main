
"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a Brazilian Butt Lift (BBL)?",
    answer:
      "A Brazilian Butt Lift (BBL) is a surgical procedure that enhances the size and shape of the buttocks by transferring fat from other areas of the body (like the abdomen, thighs, or back) to the buttocks, creating a fuller, more contoured appearance.",
  },
  {
    question: "Am I a good candidate for a BBL?",
    answer:
      "An ideal candidate is in good overall health, has realistic expectations, and has sufficient excess fat in donor areas for harvesting. Patients who are very lean may not have enough fat for a significant augmentation.",
  },
  {
    question: "How much weight should I be?",
    answer:
      "It's important to be at or near your ideal, stable weight. Significant weight fluctuations after the surgery can alter the results.",
  },
  {
    question: "Is a BBL painful?",
    answer:
      "The procedure itself is not painful due to anesthesia. Post-operative discomfort, particularly in the liposuctioned areas, is expected and is comparable to a deep muscle ache. This is well-managed with prescribed pain medication.",
  },
  {
    question: "How long do BBL results last?",
    answer:
      "The results are considered permanent. The fat cells that survive the transfer and establish a blood supply will remain in your buttocks for life. However, your body will continue to age naturally, and future weight changes can affect the overall appearance.",
  },
];

const mythsVsFacts = [
  {
    myth: "You can get a dramatic BBL even if you are very thin.",
    fact:
      "A BBL is a fat transfer procedure. The extent of the augmentation is directly dependent on the amount of fat that can be safely harvested from your body. Dr. Kunal Sayani will provide a realistic assessment during your consultation.",
  },
  {
    myth: "BBL results always look fake and overdone.",
    fact:
      "The outcome of a BBL is entirely dependent on the surgeon's aesthetic vision and technique. Dr. Sayani's philosophy is to create natural-looking enhancements that create balance and proportion, not exaggerated results unless specifically requested and deemed appropriate.",
  },
  {
    myth: "I can go back to my desk job in a week.",
    fact:
      "This is a dangerous misconception. The no-sitting rule is absolute. Returning to a desk job requires using an offloading BBL pillow and taking frequent standing breaks. Most patients require at least 2-3 weeks off from a sedentary job.",
  },
  {
    myth: "Buttock implants and a BBL are the same.",
    fact:
      "They are very different. A BBL uses your own fat for augmentation, providing a natural look and feel along with the added benefit of body contouring. Implants are silicone devices placed surgically into the buttocks. Dr. Sayani specializes in the natural fat transfer approach of the BBL.",
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
            src="/images/services/surgical/BrazilianButtLift.jpg"
            alt="Brazilian Butt Lift"
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
            <h3 className="text-2xl md:text-3xl mb-4 text-[#10217D] font-marcellus">
              Myths vs. Facts
            </h3>
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
