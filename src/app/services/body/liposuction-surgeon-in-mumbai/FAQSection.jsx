"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is liposuction?",
    answer:
      "Liposuction is a surgical procedure that removes excess fat deposits from specific areas of the body to reshape and contour the figure. It is not a weight-loss method but rather a body sculpting technique for individuals near their ideal weight.",
  },
  {
    question: "Who is a good candidate for liposuction?",
    answer:
      "Ideal candidates are healthy individuals who are at or near their ideal body weight, have good skin elasticity, and have localized pockets of fat that are resistant to diet and exercise. They should also have realistic expectations about the results. Dr. Kunal Sayani will determine your suitability during a consultation.",
  },
  {
    question: "What areas of the body can be treated with liposuction?",
    answer:
      "Commonly treated areas include the abdomen, flanks (love handles), thighs (inner, outer, front), hips, buttocks, arms, back, chest (for gynecomastia in men), and the chin and neck.",
  },
  {
    question: "Is liposuction a weight-loss solution?",
    answer:
      "No, liposuction is not a weight-loss solution. It is a body contouring procedure to remove localized fat deposits and improve body shape. For significant weight loss, lifestyle changes and other medical interventions are more appropriate.",
  },
  {
    question: "How much fat can be removed during liposuction?",
    answer:
      "The amount of fat that can be safely removed depends on several factors, including the patient's size, overall health, and the areas being treated. Dr. Kunal Sayani adheres to strict safety guidelines regarding fat removal to minimize risks.",
  },
  {
    question: "Will I have scars after liposuction?",
    answer:
      "Dr. Kunal Sayani makes very small incisions (typically 3-5mm) in discreet locations, such as natural skin folds or areas easily concealed by clothing. While scars are unavoidable, they are usually very small and fade significantly over time.",
  },
  {
    question: "How long does the liposuction procedure take?",
    answer:
      "The duration varies depending on the number and size of the areas being treated. It can range from one to several hours.",
  },
  {
    question: "What type of anesthesia is used for liposuction?",
    answer:
      "Liposuction can be performed under local anesthesia with sedation, or general anesthesia. Dr. Kunal Sayani will discuss the best option for your comfort and safety during your consultation.",
  },
  {
    question: "Is liposuction painful?",
    answer:
      "During the procedure, you will not feel pain due to anesthesia. After the surgery, you will experience some discomfort, soreness, and bruising, which can be managed with prescribed pain medication.",
  },
  {
    question: "What is the recovery like after liposuction?",
    answer:
      "Immediately after surgery, you will experience swelling, bruising, and some discomfort. A compression garment must be worn. Most patients can return to light activities within a few days and resume normal activities, including exercise, within 3-6 weeks, as advised by Dr. Kunal Sayani.",
  },
  {
    question: "How long do I need to wear a compression garment?",
    answer:
      "Dr. Kunal Sayani typically recommends wearing a compression garment for 4-6 weeks continuously, and sometimes longer for several hours a day, depending on the extent of the procedure and individual healing.",
  },
  {
    question: "When will I see the results of my liposuction?",
    answer:
      "Initial improvements are visible once the initial swelling subsides, typically within a few weeks. However, the final results will gradually become apparent as all swelling resolves, which can take 3 to 6 months, and sometimes up to a year.",
  },
  {
    question: "Are the results of liposuction permanent?",
    answer:
      "Yes, the fat cells removed during liposuction are permanently gone. However, maintaining a stable weight through a healthy diet and exercise is crucial, as the remaining fat cells in treated or untreated areas can still expand if you gain significant weight.",
  },
  {
    question: "Will liposuction help with loose skin?",
    answer:
      "Liposuction primarily removes fat and does not significantly tighten loose or sagging skin. If you have significant skin laxity, Dr. Kunal Sayani may discuss combining liposuction with other procedures like a tummy tuck or body lift for optimal results.",
  },
  {
    question: "Can I combine liposuction with other procedures?",
    answer:
      "Yes, liposuction is often combined with other procedures such as a tummy tuck (abdominoplasty), breast augmentation or lift, or a facelift to achieve more comprehensive body contouring or facial rejuvenation. Dr. Kunal Sayani will discuss suitable combinations during your consultation.",
  },
  {
    question: "Myth: Liposuction is a quick fix for obesity.",
    answer:
      "Fact: Dr. Kunal Sayani emphasizes that liposuction is NOT a weight-loss solution. It's a body contouring procedure for individuals who are near their ideal weight but have localized, stubborn fat pockets. For significant weight loss, diet, exercise, and sometimes bariatric surgery are necessary.",
  },
  {
    question: "Myth: Liposuction will prevent me from gaining weight in the future.",
    answer:
      "Fact: While the fat cells removed during liposuction are permanently gone, the remaining fat cells in your body can still expand if you gain weight. To maintain your results, it's essential to adhere to a healthy lifestyle with balanced nutrition and regular exercise, as advised by Dr. Kunal Sayani.",
  },
  {
    question: "Myth: Liposuction leaves large, noticeable scars.",
    answer:
      "Fact: Dr. Kunal Sayani uses advanced techniques that involve very small incisions, typically only a few millimeters in length. These are strategically placed in discreet areas to minimize visibility, and they usually fade significantly over time, becoming barely noticeable.",
  },
  {
    question: "Myth: Liposuction will get rid of cellulite.",
    answer:
      "Fact: Liposuction is designed to remove deeper layers of fat and improve body contours, but it is not a primary treatment for cellulite. Cellulite is a complex skin condition involving fat pockets pushing against connective tissue, and while some improvement might be seen, it's not a direct cure. Other specialized treatments are available for cellulite.",
  },
  {
    question: "Myth: Fat can grow back in the treated areas after liposuction.",
    answer:
      "Fact: Once fat cells are removed during liposuction, they are permanently eliminated and do not regenerate. However, if you gain a significant amount of weight, the remaining fat cells (in both treated and untreated areas) can still enlarge, potentially affecting your results. This is why Dr. Kunal Sayani stresses the importance of maintaining a healthy lifestyle.",
  },
  {
    question: "Myth: Liposuction is a dangerous procedure with high risks.",
    answer:
      "Fact: While all surgical procedures carry some inherent risks, liposuction, when performed by a highly qualified and experienced aesthetic surgeon like Dr. Kunal Sayani, is considered very safe. Risks are minimized through careful patient selection, adherence to strict safety protocols, and personalized care.",
  },
  {
    question: "Myth: Liposuction can be used to treat obesity.",
    answer:
      "Fact: As mentioned, liposuction is for body contouring, not weight loss. It is suitable for individuals with good skin elasticity and localized fat deposits. Dr. Kunal Sayani will assess if liposuction is the right procedure for your specific needs, or if other options are more appropriate.",
  },
  {
    question: "Myth: You can have liposuction done on your entire body at once.",
    answer:
      "Fact: For safety reasons, there are limits to the amount of fat that can be removed in a single session. Attempting to treat too many areas or remove too much fat at once can increase risks. Dr. Kunal Sayani prioritizes patient safety and may recommend multiple sessions if extensive areas need to be treated.",
  },
  {
    question: "Myth: Recovery from liposuction is extremely long and painful.",
    answer:
      "Fact: While there is some discomfort, swelling, and bruising, most patients find recovery manageable. Pain medication effectively controls discomfort. Most individuals can return to light activities within a few days, and strenuous exercise within a few weeks, following Dr. Kunal Sayani's post-operative instructions.",
  },
  {
    question: "Myth: Liposuction results are immediately visible.",
    answer:
      "Fact: While you'll see some initial improvement, significant swelling will obscure the final results for several weeks. It can take 3 to 6 months, and sometimes up to a year, for all swelling to resolve and for the final contoured shape to fully emerge. Patience is key for optimal outcomes with Dr. Kunal Sayani's expertly performed liposuction.",
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
            src={"/images/services/body/liposuction/liposuction-min.jpg"}
            alt="Clinic hours"
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