
"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a breast lift with augmentation?",
    answer:
      "A breast lift with augmentation is a surgical procedure that combines a mastopexy (breast lift) to raise and reshape sagging breasts with the placement of implants to enhance volume and fullness, resulting in a more youthful and proportionate breast contour.",
  },
  {
    question: "How long should I wait after having a baby to get this surgery?",
    answer:
      "This is a crucial question. Dr. Kunal Sayani recommends you wait at least 6 months after giving birth, and, most importantly, at least 6 months after you have completely stopped breastfeeding. This allows your hormones to stabilize and your breasts to settle into their final post-lactation size and shape, ensuring a more predictable and lasting surgical result.",
  },
  {
    question: "I live outside of Mumbai. How can I manage the consultation and follow-ups?",
    answer:
      "We welcome patients from all over India and abroad to our clinic in Andheri, Mumbai. We can facilitate an initial virtual consultation to discuss your goals. For the procedure and essential post-operative checks, you will need to plan a stay in Mumbai. Our team can assist with logistical advice.",
  },
  {
    question: "Can I have more children after this surgery?",
    answer:
      "Yes, you can have a healthy pregnancy after a breast lift with augmentation. However, a future pregnancy will likely alter your surgical results, causing the skin to stretch and sag again. For this reason, most surgeons, including Dr. Sayani, recommend waiting until you are certain you have completed your family.",
  },
  {
    question: "Will I be able to breastfeed a future child?",
    answer:
      "While many women can, the ability to breastfeed can be impacted. Both the lift and the augmentation procedures can potentially interfere with milk ducts and nerves. If you plan on having more children, this is a critical point to discuss in-depth with Dr. Sayani.",
  },
];

const mythsVsFacts = [
  {
    myth: "The implants will look and feel fake.",
    fact:
      "This is a common fear, but modern surgical techniques and implants have advanced significantly. By choosing the right size, shape, and placement for your body, Dr. Kunal Sayani focuses on creating results that look and feel natural, restoring youthful fullness rather than creating an artificial appearance.",
  },
  {
    myth: "I should just get a lift now and add implants later.",
    fact:
      "While possible, it's often not ideal. Addressing both volume loss and sagging in a single, combined procedure is more efficient, involves only one recovery period, and allows the surgeon to create the best possible shape by using the implant to help define the new breast contour from the start.",
  },
  {
    myth: "My breasts will be a 'D cup' if I ask for it.",
    fact:
      "Bra cup sizes are not standardized and are an unreliable goal. The aim of the consultation is to choose an implant volume (measured in cc's) that is proportional to your chest width, height, and existing breast tissue to create a balanced and beautiful result, rather than aiming for a specific letter.",
  },
  {
    myth: "I can get back to my normal routine and lifting my kids in a few days.",
    fact:
      "This is one of the most dangerous myths for mothers. Undergoing major surgery requires a significant healing period. Attempting to do too much too soon, especially lifting children, can lead to serious complications like bleeding, implant malposition, and poor scarring, compromising your entire result. Planning for adequate help is not a luxury; it's a necessity.",
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
            src="/images/services/breast/Breast Lift (mastopexy) with Shaping.jpeg"
            alt="Breast Lift with Augmentation"
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