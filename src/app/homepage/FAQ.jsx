"use client";
import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What can I expect during my first consultation with Dr. Kunal Sayani?",
    answer:
      "Your first consultation is a comprehensive, confidential discussion. Dr. Sayani will listen carefully to your goals and concerns. He will conduct a thorough evaluation, discuss your medical history, and explain available treatment options. The goal is to leave with a clear understanding of what’s possible and all your questions answered.",
  },
  {
    question: "Do I need to prepare anything for my consultation?",
    answer:
      "It's helpful to come with a clear idea of what you'd like to achieve. Be ready to discuss your medical history, including past surgeries and current medications. Bringing photos that reflect your goals can also help guide the conversation.",
  },
  {
    question: "Is the consultation confidential?",
    answer:
      "Absolutely. Patient privacy is a top priority. All consultations and records are handled with strict confidentiality at our Andheri, Mumbai clinic.",
  },
  {
    question: "Is there a fee for the initial consultation?",
    answer:
      "Yes, there is a nominal fee for the in-depth consultation with Dr. Sayani. It covers a comprehensive assessment and expert advice. Contact our clinic for current pricing.",
  },
  {
    question: "What are Dr. Kunal Sayani's qualifications and experience?",
    answer:
      "Dr. Sayani is a board-certified Plastic, Reconstructive, and Aesthetic Surgeon with extensive training. He holds an M.Ch. and DrNB, and is a member of several national and international surgical associations.",
  },
  {
    question: "Why is choosing a board-certified plastic surgeon important?",
    answer:
      "Board certification ensures that a surgeon has completed specialized training and passed rigorous exams. It guarantees that your procedure is performed by a highly qualified expert.",
  },
  {
    question: "How do you ensure patient safety?",
    answer:
      "Patient safety is our top priority. We perform thorough pre-operative evaluations, use advanced techniques, work with experienced anesthesiologists, and provide full post-op care and monitoring.",
  },
  {
    question: "What is the difference between cosmetic and reconstructive surgery?",
    answer:
      "Cosmetic surgery enhances appearance, while reconstructive surgery corrects abnormalities due to birth defects, trauma, or medical conditions. Dr. Sayani is highly skilled in both.",
  },
  {
    question: "How do I know which procedure is right for me?",
    answer:
      "Dr. Sayani will assess your anatomy, skin, and goals during the consultation to recommend the most suitable surgical or non-surgical options.",
  },
  {
    question: "Will I have noticeable scars?",
    answer:
      "Any surgery involving incisions can result in scars, but Dr. Sayani uses advanced methods to minimize visibility and help them fade over time.",
  },
  {
    question: "Are non-surgical treatments like Botox® and fillers effective?",
    answer:
      "Yes, they are great for treating wrinkles and volume loss with minimal downtime. For major issues, surgery may be a better long-term solution.",
  },
  {
    question: "What is the recovery process like?",
    answer:
      "Recovery depends on the procedure. Non-surgical treatments allow immediate return to activities, while surgeries require rest and healing time. You'll receive detailed aftercare guidance.",
  },
  {
    question: "How long until I see the final results?",
    answer:
      "Initial changes are visible immediately, but final results may take 6 months to a year as swelling subsides and tissues settle.",
  },
  {
    question: "Are the results of aesthetic surgery permanent?",
    answer:
      "Surgical results are long-lasting, but aging continues. A healthy lifestyle helps maintain results over time.",
  },
  {
    question: "How much does aesthetic surgery cost?",
    answer:
      "Costs depend on the procedure, complexity, and facility fees. After your consultation, a detailed, transparent quote will be provided.",
  },
  {
    question: "Does health insurance cover cosmetic surgery?",
    answer:
      "Generally, no. But if the procedure is medically necessary, like reconstruction, insurance may cover it. Check with your provider.",
  },
  {
    question: "Myth or Fact? Plastic surgery always looks fake and unnatural.",
    answer:
      "Myth. Skilled surgeons like Dr. Sayani aim for natural-looking results that enhance your features, not alter them drastically.",
  },
  {
    question: "Myth or Fact? Aesthetic surgery is only for women.",
    answer:
      "Myth. Many men seek surgery to boost their appearance and confidence. Common male procedures include rhinoplasty and gynecomastia correction.",
  },
  {
    question: "Myth or Fact? Liposuction is a tool for weight loss.",
    answer:
      "Myth. Liposuction is for body contouring, not weight loss. It targets stubborn fat in people close to their ideal weight.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#10217D]">
        Frequently Asked Questions
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
                className="w-full px-4 py-4 bg-white flex justify-between items-center text-left hover:bg-gray-50 focus:outline-none "
              >
                <span className="text-lg font-semibold text-[#000000]">
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
                    <div className="px-4 pb-4 bg-[#f9fafa]">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}