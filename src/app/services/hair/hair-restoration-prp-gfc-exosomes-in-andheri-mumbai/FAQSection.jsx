"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Who is a good candidate for PRP/GFC/Exosome hair restoration with Dr. Kunal Sayani?",
    answer:
      "Individuals experiencing hair thinning, androgenetic alopecia (pattern baldness) in early to moderate stages, receding hairline, or those looking to improve overall hair density and quality. Dr. Kunal Sayani will determine your suitability during a personalized consultation.",
  },
  {
    question: "How do these treatments work?",
    answer:
      "PRP/GFC: They concentrate growth factors from your blood, which are then injected into the scalp. These growth factors stimulate dormant hair follicles, prolong the hair growth cycle, and promote the regeneration of new hair.\n\nExosomes: These microscopic vesicles carry powerful regenerative signals, growth factors, and proteins that can revitalize hair follicles, reduce inflammation, and encourage new hair growth at a cellular level.",
  },
  {
    question: "Are the treatments painful?",
    answer:
      "Dr. Kunal Sayani uses local anesthesia to numb the scalp before injections, making the procedure very comfortable. Most patients report only a mild pressure or stinging sensation.",
  },
  {
    question: "How many sessions will I need, and how often?",
    answer:
      "Typically, Dr. Kunal Sayani recommends an initial series of 3-4 sessions spaced 4-6 weeks apart. Maintenance sessions may be advised every 6-12 months to sustain results. Your specific treatment plan will be customized by Dr. Kunal Sayani.",
  },
  {
    question: "When will I see results?",
    answer:
      "Hair growth is a gradual process. Initial improvements in hair texture and reduced shedding may be noticeable within 2-3 months. Significant hair regrowth typically becomes visible after 3-6 months, with optimal results seen at 9-12 months.",
  },
  {
    question: "Are the results permanent?",
    answer:
      "While these treatments can provide long-lasting improvement, hair loss is often an ongoing process. Maintenance treatments are usually recommended by Dr. Kunal Sayani to sustain the benefits over time.",
  },
  {
    question: "Can these treatments be combined with other hair loss therapies?",
    answer:
      "Yes, Dr. Kunal Sayani often recommends combining these treatments with other therapies like minoxidil, finasteride, or even hair transplant surgery for enhanced and comprehensive results.",
  },
  {
    question: "Is there any downtime?",
    answer:
      "No significant downtime. You can typically resume your normal activities immediately after the procedure. Some mild redness or swelling may be present for 24-48 hours.",
  },
  {
    question: "Are there any age restrictions for these treatments?",
    answer:
      "While there isn't a strict age limit, the best candidates are those with active hair follicles that can still be stimulated. Dr. Kunal Sayani will assess your suitability during the consultation.",
  },
  {
    question: "What is the difference between PRP, GFC, and Exosomes?",
    answer:
      "PRP: Good starting point, uses your own blood, rich in platelets.\n\nGFC: More concentrated growth factors than standard PRP, potentially leading to better results.\n\nExosomes: The most advanced option, containing highly potent signaling molecules for superior cellular regeneration and often used for more advanced cases or where faster, more robust results are desired. Dr. Kunal Sayani will guide you on the best choice.",
  },
  {
    question: "Myth: Hair restoration treatments are only for men.",
    answer:
      "Fact: Absolutely not! Dr. Kunal Sayani successfully treats both men and women experiencing various forms of hair loss, including female pattern hair loss.",
  },
  {
    question: "Myth: These treatments are a quick fix for baldness.",
    answer:
      "Fact: While highly effective, these are not instant solutions. Hair growth is a biological process that takes time. Patience and consistent treatment are key to seeing optimal results with Dr. Kunal Sayani.",
  },
  {
    question: "Myth: PRP/GFC/Exosomes are painful and involve surgery.",
    answer:
      "Fact: These are non-surgical, minimally invasive procedures. Dr. Kunal Sayani ensures patient comfort with local anesthesia, and most report minimal to no pain.",
  },
  {
    question: "Myth: You only need one session to see results.",
    answer:
      "Fact: While some may notice initial changes, a series of treatments is almost always recommended by Dr. Kunal Sayani to achieve significant and lasting hair regrowth.",
  },
  {
    question: "Myth: These treatments work for everyone, regardless of the cause of hair loss.",
    answer:
      "Fact: While effective for many types of hair loss, especially androgenetic alopecia, results can vary based on the underlying cause, severity of hair loss, and individual response. A thorough consultation with Dr. Kunal Sayani is essential.",
  },
  {
    question: "Myth: Hair restoration treatments are only for people with severe hair loss.",
    answer:
      "Fact: These treatments can be highly beneficial for individuals in the early stages of hair thinning, helping to prevent further loss and improve existing hair density before it becomes severe.",
  },
  {
    question: "Myth: Results are guaranteed to be exactly like before hair loss.",
    answer:
      "Fact: The goal is to stimulate new hair growth and improve the density and quality of existing hair, leading to a significant aesthetic improvement. While remarkable results are achieved by Dr. Kunal Sayani, individual outcomes can vary.",
  },
  {
    question: "Myth: You can't wash your hair for weeks after the procedure.",
    answer:
      "Fact: Dr. Kunal Sayani typically advises waiting only 24 hours before gently washing your hair with a mild shampoo.",
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
            src={"/images/services/hair/2149152753.jpg"}
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