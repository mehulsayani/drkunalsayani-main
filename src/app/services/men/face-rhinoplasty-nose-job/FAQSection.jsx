"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is the primary purpose of rhinoplasty?",
    answer:
      "The primary purpose of rhinoplasty is to reshape the nose to improve facial harmony and proportion. It can also correct structural problems that cause breathing difficulties.",
  },
  {
    question: "Who is a good candidate for rhinoplasty?",
    answer:
      "Good candidates are individuals who are physically healthy, have realistic expectations, are at least in their mid-to-late teens (when nasal growth is complete), and are bothered by the appearance or function of their nose.",
  },
  {
    question: "How long do the results of rhinoplasty last?",
    answer:
      "The results of rhinoplasty are generally considered permanent. While the nose will continue to age along with the rest of your face, the structural changes made during surgery are lasting.",
  },
  {
    question: 'Will my nose look "fake" or "operated on"?',
    answer:
      'Myth: Modern rhinoplasty techniques, especially when performed by an experienced surgeon like Dr. Kunal Sayani, aim for natural-looking results that enhance facial harmony rather than creating an obviously "done" appearance. Fact: The goal is to create a nose that blends seamlessly with your other facial features, making it look as if it\'s the nose you were born with.',
  },
  {
    question: "Is rhinoplasty a painful procedure?",
    answer:
      "Myth: Many people believe rhinoplasty is extremely painful. Fact: While you will experience some discomfort, pressure, and dull aching after surgery, severe pain is uncommon and can be effectively managed with prescribed pain medication. The recovery is generally more uncomfortable than painful.",
  },
  {
    question: "Will I have visible scars after rhinoplasty?",
    answer:
      "In open rhinoplasty, there is a very small, discreet incision on the columella (the skin between the nostrils) that typically heals very well and becomes almost imperceptible over time. In closed rhinoplasty, all incisions are made inside the nostrils, resulting in no visible external scars. Dr. Kunal Sayani prioritizes meticulous incision placement and closure to minimize scarring.",
  },
  {
    question: "Can rhinoplasty fix breathing problems?",
    answer:
      "Fact: Yes, absolutely. If breathing difficulties are caused by structural issues such as a deviated septum or enlarged turbinates, Dr. Kunal Sayani can address these during the rhinoplasty procedure (often referred to as septorhinoplasty or functional rhinoplasty) to improve airflow. Myth: Rhinoplasty is purely cosmetic and has no functional benefits.",
  },
  {
    question: "How old do I need to be for rhinoplasty?",
    answer:
      "It's generally recommended that females be at least 15-16 years old and males at least 16-17 years old, as the nose should have completed its growth. This ensures stable and long-lasting results.",
  },
  {
    question: "What are the two main types of rhinoplasty techniques?",
    answer:
      "The two main techniques are open rhinoplasty (with a small external incision on the columella) and closed rhinoplasty (with all incisions inside the nostrils). Dr. Kunal Sayani will determine the best approach for your specific case during your consultation.",
  },
  {
    question: "Will my bones be broken during the surgery?",
    answer:
      "Often, if the bridge of the nose needs to be narrowed or a significant hump needs to be removed, the nasal bones may be carefully fractured and repositioned (osteotomy). This is a controlled part of the procedure performed by Dr. Kunal Sayani to achieve the desired shape.",
  },
  {
    question: "What is cartilage grafting in rhinoplasty?",
    answer:
      "Cartilage grafts are small pieces of cartilage, usually taken from your own septum, ear, or rib, used to build up, support, or reshape certain areas of the nose, such as the bridge or tip.",
  },
  {
    question: "How long will I have a splint on my nose?",
    answer:
      "An external splint (plastic or plaster) is typically worn for about 5-7 days to help protect and stabilize the nose during the initial healing phase. Internal splints or packing may also be used and are removed around the same time.",
  },
  {
    question: "How much swelling and bruising can I expect, and how long will it last?",
    answer:
      "Expect significant swelling and bruising around the eyes and nose for the first week or two. Most visible bruising resolves within 2-3 weeks, but considerable swelling can persist for several months, with the tip of the nose being the last area to fully settle (up to a year or more). Patience is crucial during this period.",
  },
  {
    question: "When can I return to work or school?",
    answer:
      "Most patients can return to light, non-strenuous activities within 1-2 weeks after the splint is removed. However, you should avoid strenuous exercise for at least 4-6 weeks.",
  },
  {
    question: "Can I wear my glasses after rhinoplasty?",
    answer:
      "Fact: You should avoid wearing glasses or sunglasses that rest on the bridge of your nose for at least 4-6 weeks after surgery, as they can put pressure on the healing bones and cartilage and potentially affect the final shape. Myth: I can wear my regular glasses immediately after surgery. Dr. Kunal Sayani will provide specific instructions on this.",
  },
  {
    question: "When can I start exercising again?",
    answer:
      "Light walking is encouraged from the first few days, but strenuous exercise, heavy lifting, and activities that increase blood pressure in the face should be avoided for 4-6 weeks. Contact sports must be avoided for at least 6 months.",
  },
  {
    question: "Can I blow my nose after surgery?",
    answer:
      "Fact: No, absolutely not. You must avoid blowing your nose for at least 2-3 weeks post-surgery to prevent disruption of the delicate healing tissues and potential complications. Myth: Blowing your nose will help clear congestion after surgery.",
  },
  {
    question: "Is rhinoplasty a risky surgery?",
    answer:
      "Fact: While all surgeries carry some risks, rhinoplasty is generally considered safe when performed by a qualified, board-certified plastic surgeon like Dr. Kunal Sayani. Risks are minimized through proper patient selection, surgical technique, and post-operative care. Myth: Rhinoplasty is an extremely risky and dangerous surgery.",
  },
  {
    question: "What are the potential complications of rhinoplasty?",
    answer:
      "Potential complications include bleeding, infection, poor wound healing, scarring, numbness, breathing difficulties, asymmetry, and dissatisfaction with the aesthetic outcome. These are thoroughly discussed with you by Dr. Kunal Sayani during your consultation.",
  },
  {
    question: "What if I'm not happy with my results? Can I have another surgery?",
    answer:
      "While Dr. Kunal Sayani strives for excellent results, in rare cases where a patient is dissatisfied or complications arise, revision rhinoplasty may be an option. This is typically performed at least 12-18 months after the initial surgery to allow for complete healing.",
  },
  
  {
    question: "Myth: Rhinoplasty is only cosmetic.",
    answer:
      "Fact: Rhinoplasty can also improve breathing and correct structural deformities.",
  },
  {
    question: "Myth: Results are instant.",
    answer:
      "Fact: Swelling can mask the final results for several months.",
  },
  {
    question: "Myth: Anyone can perform a nose job.",
    answer:
      "Fact: Only a qualified and experienced aesthetic surgeon like Dr. Kunal Sayani should perform rhinoplasty.",
  },
  {
    question: 'Myth: All nose jobs look "fake."',
    answer:
      "Fact: A well-done rhinoplasty by Dr. Kunal Sayani looks natural and suits your face.",
  },
  {
    question: "Myth: It’s only for women.",
    answer:
      "Fact: Men also frequently undergo rhinoplasty for both cosmetic and functional reasons.",
  },
  {
    question: "Myth: You can choose any nose shape.",
    answer:
      "Fact: The best shape is the one that fits your facial proportions and structure.",
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
            src={"/images/services/men/face-rhinoplasty-nose-job.jpg"}
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