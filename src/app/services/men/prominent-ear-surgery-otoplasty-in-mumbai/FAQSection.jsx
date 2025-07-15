"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is the main goal of Otoplasty?",
    answer:
      "The primary goal is to improve the shape, position, or proportion of the ear, most commonly to correct protruding ears, making them sit closer to the head and appear more natural and balanced with the face.",
  },
  {
    question: "At what age can Otoplasty be performed?",
    answer:
      "Otoplasty is commonly performed on children once their ears have reached near full development, typically around age 5-7. However, Dr. Kunal Sayani also performs Otoplasty on teenagers and adults of any age who are in good health and wish to correct their ear appearance.",
  },
  {
    question: "Is Otoplasty a painful procedure?",
    answer:
      "The procedure itself is not painful as it is performed under anesthesia (local with sedation or general). Post-operatively, some discomfort, aching, or throbbing is expected for a few days, but this is usually well-managed with prescribed or recommended pain medication by Dr. Kunal Sayani.",
  },
  {
    question: "How long does the Otoplasty procedure take?",
    answer:
      "Typically, Otoplasty takes between 1 to 3 hours, depending on the complexity of the correction needed.",
  },
  {
    question: "Will I have visible scars after Otoplasty?",
    answer:
      "Dr. Kunal Sayani strategically places incisions in inconspicuous locations, usually in the natural crease behind the ear. When incisions are needed on the front, they are hidden within natural folds. Over time, these scars typically fade and become barely noticeable.",
  },
  {
    question: "When can I see the final results of my Otoplasty?",
    answer:
      "You will notice an immediate difference once the initial bulky dressings are removed. However, there will be swelling that gradually subsides. The final, refined results are usually visible after about 3-6 months, once all residual swelling has resolved and the tissues have settled.",
  },
  {
    question: "Are the results of Otoplasty permanent?",
    answer:
      "Yes, the results of Otoplasty are generally permanent. The cartilage is reshaped and secured in its new position. Significant changes or recurrence are rare when performed correctly.",
  },
  {
    question: "Can Otoplasty affect my hearing?",
    answer:
      "No, Otoplasty is performed on the external ear (auricle) and does not involve the structures responsible for hearing (middle and inner ear). Therefore, it does not affect your ability to hear.",
  },
  {
    question: "When can I return to work or school after Otoplasty?",
    answer:
      "Most patients can return to work or school within 5-7 days, depending on the nature of their activities and how they are feeling. Dr. Kunal Sayani will provide specific guidance based on your recovery.",
  },
  {
    question: "When can I resume exercise and sports?",
    answer:
      "Light activities can usually be resumed within a week or two. However, strenuous exercise and contact sports or any activity that could put pressure or trauma on the ears should be avoided for at least 4-6 weeks, or as advised by Dr. Kunal Sayani.",
  },
  {
    question: "Will I need to wear a headband after surgery?",
    answer:
      "Yes, after the initial dressings are removed, a supportive headband is typically worn, especially at night, for several weeks to protect the ears and help maintain their new position during healing. Dr. Kunal Sayani will specify the duration.",
  },
  {
    question: "What type of anesthesia is used for Otoplasty?",
    answer:
      "For young children, general anesthesia is usually preferred. For older children, teenagers, and adults, Otoplasty can often be performed under local anesthesia with intravenous sedation. Dr. Kunal Sayani will discuss the best option for you or your child.",
  },
  {
    question: "Can Otoplasty be performed on just one ear?",
    answer:
      "Yes, if only one ear is prominent or misshapen, surgery can be performed on that ear alone. However, sometimes surgery is performed on both ears to achieve the best possible symmetry, even if one ear appears more significantly affected. Dr. Kunal Sayani will assess this during your consultation.",
  },
  {
    question: "Myth: Otoplasty is only for children.",
    answer:
      "Fact: While Otoplasty is commonly performed in children, Dr. Kunal Sayani regularly performs this procedure on teenagers and adults with excellent results. There's no upper age limit for individuals who wish to improve the appearance of their ears.",
  },
  {
    question: "Myth: Otoplasty results look unnatural or 'pinned back.'",
    answer:
      "Fact: The goal of a skilled surgeon like Dr. Kunal Sayani is to create natural-looking ears that are in harmony with the rest of the facial features. Modern techniques focus on subtle reshaping and repositioning to avoid an 'overly corrected' or 'pinned' appearance.",
  },
  {
    question: "Myth: The recovery from Otoplasty is extremely long and painful.",
    answer:
      "Fact: While there is a recovery period involving some discomfort and swelling, it is generally manageable. Most patients resume normal daily routines within a week. Significant pain is uncommon and can be controlled with medication. Compared to more invasive procedures, the recovery is relatively straightforward for most patients under Dr. Kunal Sayani's care.",
  },
  {
    question: "Myth: My ears will eventually go back to their original prominent position after surgery.",
    answer:
      "Fact: Otoplasty involves surgically altering and securing the ear cartilage. When performed correctly and post-operative instructions are followed, the results are permanent. The likelihood of ears returning to their original position is very low with the techniques Dr. Kunal Sayani uses.",
  },
  {
    question: "Myth: Otoplasty is a very risky procedure with frequent complications.",
    answer:
      "Fact: Otoplasty is considered a safe procedure with a low risk of serious complications when performed by a qualified and experienced plastic surgeon like Dr. Kunal Sayani. Minor issues like swelling and bruising are common and temporary. Serious complications are rare.",
  },
  {
    question: "Myth: Insurance will never cover Otoplasty.",
    answer:
      "Fact: While Otoplasty is often considered a cosmetic procedure, in some cases, particularly for children where prominent ears cause significant psychological distress or if there is a reconstructive element (e.g., due to injury or congenital deformity), some insurance plans may offer partial or full coverage. It's always best to check with your insurance provider. Dr. Kunal Sayani's office can provide guidance on this.",
  },
  {
    question: "Myth: You can achieve the same results as Otoplasty with non-surgical methods like ear taping or molds in adults.",
    answer:
      "Fact: Non-surgical ear molding can be effective in newborns when the cartilage is very soft and pliable. However, in older children and adults, the ear cartilage is much firmer. Taping or external devices may offer temporary, very slight changes at best and cannot replicate the permanent, significant improvements achieved through surgical Otoplasty by Dr. Kunal Sayani.",
  },
  {
    question: "Myth: Otoplasty will improve my child's hearing.",
    answer:
      "Fact: Otoplasty is an aesthetic procedure that alters the shape and position of the external ear. It does not impact the structures responsible for hearing and will not improve or worsen hearing ability.",
  },
  {
    question: "Myth: You don't need a specialist; any doctor can perform Otoplasty.",
    answer:
      "Fact: Otoplasty is a nuanced procedure that requires a deep understanding of ear anatomy and aesthetic principles. Choosing a board-certified plastic surgeon with specific experience in Otoplasty, like Dr. Kunal Sayani, is crucial for achieving safe, natural-looking, and satisfactory results.",
  },
  {
    question: "Myth: If only one ear bothers me, I only need surgery on that ear, and it will look perfectly symmetrical to the other.",
    answer:
      "Fact: While surgery can be done on one ear, achieving perfect symmetry with the unoperated ear can be challenging as no two ears are naturally identical. Dr. Kunal Sayani often discusses operating on both ears even if one is more prominent, to achieve the best overall balance and harmony.",
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
            src={"/images/services/men/prominent-ear-surgery-otoplasty.jpg"}
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
                        <div className="px-4 pb-4 bg-[#f9fafa]">
                          <p className="text-gray-700 text-sm md:text-base whitespace-pre-line">
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