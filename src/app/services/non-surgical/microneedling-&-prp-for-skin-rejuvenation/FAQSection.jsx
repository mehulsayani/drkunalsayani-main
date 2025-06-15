
"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is Microneedling with PRP?",
    answer:
      "Microneedling with PRP (Platelet-Rich Plasma), also known as the 'Vampire Facial,' is a non-surgical procedure that combines microneedling to stimulate collagen production with the application of PRP derived from your own blood to enhance skin rejuvenation, improving texture, tone, and reducing scars and wrinkles.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "While a single treatment will provide a beautiful 'glow-up,' a series of treatments is typically recommended for optimal and long-lasting results, especially for concerns like acne scarring or significant wrinkles. Dr. Kunal Sayani usually recommends a course of 3-4 sessions, spaced 4-6 weeks apart.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "Thanks to the application of a powerful topical numbing cream, the procedure is generally well-tolerated. Most patients report feeling only a light vibrating or sandpaper-like sensation on the skin.",
  },
  {
    question: "How long do the results last?",
    answer:
      "The results are long-lasting because the procedure stimulates your own collagen production. The initial radiant glow can last for several weeks, while the deeper collagen remodeling benefits can last for a year or more. Many patients choose to have maintenance sessions once or twice a year to maintain their results.",
  },
  {
    question: "Can Microneedling with PRP be done on other parts of the body?",
    answer:
      "Yes! This treatment is also highly effective for improving the appearance of stretch marks on the abdomen or thighs, as well as for treating scars and rejuvenating the skin on the neck, chest (décolletage), and hands.",
  },
];

const mythsVsFacts = [
  {
    myth: "The 'Vampire Facial' is a bloody, painful, and scary procedure.",
    fact:
      "This is largely media hype. The 'vampire' nickname comes from the use of your own blood-derived PRP. The actual procedure involves only a small, standard blood draw. The microneedling itself is not bloody, and thanks to topical anaesthesia, it is not considered painful. The post-procedure redness is temporary.",
  },
  {
    myth: "At-home microneedling rollers (derma-rollers) give the same results.",
    fact:
      "This is false and potentially dangerous. At-home rollers have shorter, duller needles that cannot penetrate to the effective depth required for true collagen induction. More importantly, they cannot be properly sterilised, which poses a significant risk of infection, scarring, and skin damage. Professional microneedling performed by a doctor like Dr. Kunal Sayani uses sterile, single-use, adjustable needles for a safe, controlled, and far more effective treatment.",
  },
  {
    myth: "I will see the final results as soon as the redness goes away.",
    fact:
      "You will notice an immediate improvement in skin radiance and texture once the initial healing is complete. However, the true magic of this treatment lies in collagen synthesis, which is a gradual process. The most significant and lasting results, such as firmer skin and reduced scarring, develop over the following weeks and months.",
  },
  {
    myth: "This treatment is only for anti-aging.",
    fact:
      "While it is a phenomenal anti-aging tool, Microneedling with PRP is incredibly versatile. It is one of the most effective treatments for improving the appearance of atrophic acne scars, reducing pore size, and evening out skin tone and texture in patients of all ages.",
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
            src="/images/services/nonsurgical/Microneedling & PRP for Skin Rejuvenation.jpg"
            alt="Microneedling with PRP"
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
