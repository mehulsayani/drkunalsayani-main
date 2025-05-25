import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is cosmetic surgery?",
    answer:
      "Cosmetic surgery is a medical procedure that enhances or reshapes parts of the body to improve appearance and boost self-confidence.",
  },
  {
    question: "Is cosmetic surgery safe?",
    answer:
      "When performed by a certified and experienced surgeon, cosmetic surgery is generally safe. We follow strict safety protocols to ensure your well-being.",
  },
  {
    question: "How long is the recovery period?",
    answer:
      "Recovery times vary depending on the procedure. Minor treatments may take a few days, while major surgeries may require several weeks.",
  },
  {
    question: "Will I have visible scars?",
    answer:
      "Our surgeons use advanced techniques to minimize scarring. Any scars that do form are usually well-hidden and fade over time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-xl font-semibold ">{faq.question}</span>
              <span className="text-2xl ">
                {openIndex === index ? <BsDash /> : <BsPlus />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
