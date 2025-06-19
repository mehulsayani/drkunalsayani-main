
"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a Lip Lift?",
    answer:
      "A Lip Lift is a surgical procedure that shortens the distance between the nose and the upper lip (philtrum) by removing a small strip of skin, lifting the lip to reveal more of the pink vermilion and enhance the lip's shape, resulting in a more youthful and balanced appearance.",
  },
  {
    question: "Am I a good candidate for a Lip Lift?",
    answer:
      "You may be an ideal candidate if the distance between the bottom of your nose and the top of your upper lip is elongated (typically more than 1.5 cm), if your upper lip appears thin and rolls inward, or if your upper teeth don't show when you smile. It's for patients seeking a permanent structural improvement.",
  },
  {
    question: "How is a lip lift different from lip fillers?",
    answer:
      "They address different issues. Fillers add temporary volume and are great for plumping the body of the lip. A Lip Lift is a permanent surgical procedure that shortens the philtrum, increases the visible pink part of the lip (vermilion show), and improves the overall shape and lift. They can even be done together for a comprehensive lip enhancement.",
  },
  {
    question: "Will the scar be visible?",
    answer:
      "This is the most common concern. Dr. Kunal Sayani is an expert in placing the incision perfectly within the natural crease at the base of the nose. With his meticulous suturing technique and your adherence to aftercare, the scar typically heals as a very fine, faint line that is exceptionally difficult to detect once fully matured.",
  },
  {
    question: "How much younger will a lip lift make me look?",
    answer:
      "A lip lift provides a subtle but powerful rejuvenation. By restoring youthful proportions to the central part of the face and creating a more pleasant resting expression, patients often find they look significantly fresher, happier, and more vibrant.",
  },
];

const mythsVsFacts = [
  {
    myth: "A lip lift will make my lips look unnaturally large or 'ducky.'",
    fact:
      "This is a misconception often associated with poorly administered fillers. A lip lift does not inject any substance. It simply reveals more of your natural lip tissue by rolling it outward. The result, when performed by an expert like Dr. Sayani, is an enhancement of your own lip shape, leading to a natural and balanced appearance, not an overfilled one.",
  },
  {
    myth: "The results of a lip lift are temporary.",
    fact:
      "This is false. A lip lift is a permanent surgical procedure. A small strip of skin is physically removed, so the philtrum will always be shorter than it was before the surgery. While the natural aging process will continue, the fundamental improvement from the lift is lifelong.",
  },
  {
    myth: "I will have a 'joker smile' or look unnatural when I talk.",
    fact:
      "The tightness and restricted smile are temporary side effects during the initial healing phase due to swelling. As the tissues heal and relax over a few weeks, your smile and facial expressions will return to normal, only enhanced by the improved lip position.",
  },
  {
    myth: "Anyone who wants bigger lips should get a lip lift.",
    fact:
      "A lip lift is not for everyone. It is specifically for individuals with an elongated philtrum. If the philtrum is already short, performing a lip lift could create an unbalanced appearance. This is why the expert evaluation by Dr. Kunal Sayani during the consultation in his Mumbai clinic is so important to determine the correct procedure for you.",
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
            src={"/images/services/face/Lip Lift (Lip job).jpeg"}
            alt="Lip Lift"
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
