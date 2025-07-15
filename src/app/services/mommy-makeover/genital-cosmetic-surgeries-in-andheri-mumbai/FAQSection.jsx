"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Who is a good candidate for female genital cosmetic surgery with Dr. Kunal Sayani?",
    answer:
      "Women who are generally healthy, have realistic expectations, and are bothered by the appearance or feel of their external genitalia due to genetics, childbirth, aging, or discomfort. Dr. Kunal Sayani emphasizes that procedures are customized to individual needs and desires.",
  },
  {
    question: "What are the common reasons women seek these procedures?",
    answer:
      "Reasons vary widely and can include:\n• Physical discomfort during exercise, sexual activity, or wearing tight clothing.\n• Self-consciousness or embarrassment about the appearance of the labia or clitoral hood.\n• Asymmetry or disproportionate labial size.\n• Vaginal laxity after childbirth impacting sexual sensation.\n• Desire for improved aesthetic balance or a more youthful appearance.",
  },
  {
    question: "Will these procedures affect my sexual sensation or function?",
    answer:
      "Dr. Kunal Sayani performs these procedures with meticulous care to preserve nerve function and enhance comfort. Many patients report improved sexual sensation and enjoyment after procedures like labiaplasty (due to reduced discomfort) or vaginoplasty (due to increased tightness). However, any surgery carries a rare risk of altered sensation, which will be thoroughly discussed.",
  },
  {
    question: "How long does the surgery take?",
    answer:
      "The duration varies depending on the specific procedure and its complexity. Most procedures, like labiaplasty or clitoral hood reduction, typically take between 1 to 2 hours. More comprehensive procedures might take longer.",
  },
  {
    question: "What kind of anesthesia is used?",
    answer:
      "Depending on the procedure and patient preference, Dr. Kunal Sayani may use local anesthesia with sedation, or general anesthesia. This will be discussed during your consultation.",
  },
  {
    question: "When can I resume normal activities, including exercise and sexual activity?",
    answer:
      "Light, non-strenuous activities can usually be resumed within a few days to a week.\nStrenuous exercise should be avoided for 4-6 weeks.\nSexual activity and tampon use should be avoided for at least 4-6 weeks, or until Dr. Kunal Sayani gives clearance, to ensure complete healing.",
  },
  {
    question: "Will there be visible scars?",
    answer:
      "Dr. Kunal Sayani employs advanced surgical techniques and meticulous suturing to minimize visible scarring. Incisions are strategically placed in natural folds where possible. Over time, scars typically fade significantly.",
  },
  {
    question: "Is there an age limit for these surgeries?",
    answer:
      "While there's no strict upper age limit, Dr. Kunal Sayani typically advises against these procedures for individuals under 18 years of age, as the female genitalia continue to develop through puberty and into early adulthood.",
  },
  {
    question: "Can I combine multiple procedures?",
    answer:
      "Yes, it is common for patients to combine procedures such as labiaplasty with clitoral hood reduction, or labiaplasty with perineoplasty, to achieve comprehensive results. Dr. Kunal Sayani will discuss the feasibility and safety of combining procedures during your consultation.",
  },
  {
    question: "How long do the results last?",
    answer:
      "The results of these surgeries are generally long-lasting. However, natural aging, hormonal changes, and future pregnancies or childbirths can potentially alter the results over time.",
  },
  {
    question: "Myth: Genital cosmetic surgery is purely for vanity and has no functional benefits.",
    answer:
      "Fact: While aesthetics are a significant motivator for many, these procedures often provide substantial functional benefits. Labiaplasty can alleviate discomfort during exercise or intercourse, and vaginoplasty can improve sexual sensation and bladder control. Dr. Kunal Sayani understands the interplay between form and function.",
  },
  {
    question: "Myth: 'Designer vagina' surgery is about achieving a universal ideal look.",
    answer:
      "Fact: There is no single 'ideal' or 'normal' appearance for female genitalia. Every woman's anatomy is unique. Dr. Kunal Sayani focuses on helping patients achieve a look that feels natural, comfortable, and aesthetically pleasing to them, based on their individual anatomy and desires, not a standardized ideal.",
  },
  {
    question: "Myth: These surgeries are extremely painful and have long, difficult recoveries.",
    answer:
      "Fact: With modern anesthetic techniques and pain management, these procedures are well-tolerated. Discomfort is typically mild to moderate and manageable with medication. Recovery is usually quicker than often perceived, with most patients resuming light activities within a few days, under the guidance of Dr. Kunal Sayani.",
  },
  {
    question: "Myth: Genital cosmetic surgery always leads to a loss of sensation.",
    answer:
      "Fact: This is a major concern for many, but it is largely a myth. When performed by an experienced surgeon like Dr. Kunal Sayani, the goal is to preserve or even enhance sensation by removing excess tissue that may cause irritation or by tightening lax areas. While any surgery carries a minimal risk of nerve changes, significant loss of sensation is very rare.",
  },
  {
    question: "Myth: These procedures can negatively impact fertility or childbirth.",
    answer:
      "Fact: Genital cosmetic surgeries performed by Dr. Kunal Sayani are generally superficial and do not affect the internal reproductive organs. Therefore, they do not impact fertility or the ability to have future vaginal births. However, future childbirths could potentially alter the results of the surgery.",
  },
  {
    question: "Myth: Only women with 'abnormal' anatomy seek these procedures.",
    answer:
      "Fact: The definition of 'normal' anatomy is extremely broad. Many women seek these procedures to address perceived imbalances, discomfort, or simply to feel more confident about their bodies, even if their anatomy falls within a 'normal' range. Dr. Kunal Sayani respects each woman's personal motivations.",
  },
  {
    question: "Myth: These surgeries are a secret that women should be ashamed of.",
    answer:
      "Fact: Discussing intimate concerns can be daunting, but there is no shame in seeking solutions that improve your physical comfort and self-confidence. Dr. Kunal Sayani provides a discreet, judgment-free environment where your privacy and well-being are paramount.",
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
            src={"/images/services/mommymakeover/Genital Cosmetic Surgeries.jpg"}
            alt="Clinic Hours"
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
            <p className="text-sm">Mon - Sat : 10.00 AM - 8.00 PM</p>
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