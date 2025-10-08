"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is fat grafting?",
    answer:
      "Fat grafting is a surgical procedure that transfers fat from one area of your body to another to add volume, improve contour, and rejuvenate the recipient site.",
  },
  {
    question: "Who is a good candidate for fat grafting?",
    answer:
      "Ideal candidates are healthy individuals with realistic expectations who have sufficient donor fat and desire a natural-looking enhancement.",
  },
  {
    question: "Is fat grafting a weight-loss procedure?",
    answer:
      "Myth: Fat grafting is a weight loss solution. Fact: Fat grafting is a body contouring procedure, not a method for significant weight loss. While a small amount of fat is removed, the primary goal is to enhance volume and shape.",
  },
  {
    question: "How long do the results of fat grafting last?",
    answer:
      "The results can be very long-lasting, often permanent. The fat cells that survive the transfer and establish a blood supply will remain in the new location. However, significant weight changes can affect the results.",
  },
  {
    question: "What kind of scars can I expect after fat grafting?",
    answer:
      "Fact: Fat grafting involves small incisions for liposuction, which result in minimal scarring that typically fades over time. Injection sites usually leave no noticeable marks. Myth: Fat grafting is a completely scarless procedure.",
  },
  {
    question: "Where is the fat usually taken from?",
    answer:
      "Common donor sites include the abdomen, thighs, flanks ('love handles'), and back.",
  },
  {
    question: "Is the fat grafting procedure painful?",
    answer:
      "You will be under anesthesia during the surgery and will not feel pain. Post-operative discomfort is typically mild to moderate and can be managed effectively with prescribed pain medication.",
  },
  {
    question: "How long does the surgery take?",
    answer:
      "The duration of a fat grafting procedure can vary from one to four hours, depending on the complexity and the number of areas being treated.",
  },
  {
    question: "How long is the recovery period after fat grafting?",
    answer:
      "The initial recovery, where you need to limit your activities, is typically one to two weeks. However, final results can take several months to fully appear as swelling subsides completely.",
  },
  {
    question: "When can I return to work after fat grafting?",
    answer:
      "Most patients can return to a desk job within a week, although this depends on the extent of the procedure and your comfort level. More physically demanding jobs may require a longer recovery period.",
  },
  {
    question: "When can I start exercising after fat grafting?",
    answer:
      "Strenuous exercise should be avoided for several weeks. Your surgeon will provide you with a specific timeline for gradually reintroducing physical activity.",
  },
  {
    question: "Will I need to wear a special garment after surgery?",
    answer:
      "Fact: You will likely need to wear a compression garment on the donor area to help with swelling and skin retraction. Myth: The garment is only needed for a day or two. You will typically wear it for several weeks as directed.",
  },
  {
    question: "Is fat grafting a risky surgery?",
    answer:
      "Like any surgical procedure, fat grafting has potential risks. However, because it uses your own tissue, the risk of allergic reaction is eliminated. Choosing a qualified, experienced plastic surgeon significantly minimizes the risks.",
  },
  {
    question: "What are the potential complications of fat grafting?",
    answer:
      "Potential complications include infection, bleeding, asymmetry, and a portion of the fat not surviving. Your surgeon will discuss these with you in detail.",
  },
  {
    question: "Myth: All of the transferred fat will disappear over time.",
    answer:
      "Fact: While some of the transferred fat will be naturally absorbed by the body in the first few months, the fat that successfully integrates with the surrounding tissue will be permanent.",
  },
  {
    question: "Myth: Fat grafting results look fake and unnatural.",
    answer:
      "Fact: One of the primary advantages of fat grafting is the ability to achieve very natural-looking and feeling results, as it uses your own body tissue.",
  },
  {
    question: "Myth: I can have fat transferred from another person.",
    answer:
      "Fact: Fat grafting uses your own fat (autologous fat transfer). Using fat from another person would be rejected by your body's immune system.",
  },
  {
    question: "Myth: After fat grafting, I can’t gain or lose weight in that area.",
    answer:
      "Fact: The transferred fat cells will behave like fat cells anywhere else in your body. If you gain or lose a significant amount of weight, the size of the grafted area can change.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center px-4 md:px-8 my-16 font-inter">
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-[485px] h-[300px] md:h-[461px] rounded-xl overflow-hidden shadow-lg">
          <Image
          width={1000}
          height={1000}
            src={"/images/services/body/Fat Grafting.jpeg"}
            alt="Medical treatment"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; // prevents looping
              e.target.src = "https://placehold.co/485x461/E0E0E0/333333?text=Image+Unavailable"; // Fallback placeholder
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent text-white p-6 rounded-b-xl">
            <div className="flex items-center space-x-2 mb-2">
              {/* SVG for clock icon */}
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
          <h2 className="text-3xl md:text-5xl mb-6 text-[#10217D] font-bold">
            Got questions? We've got answers!
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${
                    isOpen ? "border-[#40AEB9]" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 py-4 bg-white flex justify-between items-center rounded-t-xl
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
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
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
                        <div className="px-4 pb-4 bg-[#f9fafa] rounded-b-xl">
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
