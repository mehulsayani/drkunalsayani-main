"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is Chin Augmentation (Mentoplasty)?",
    answer:
      "Chin augmentation is a cosmetic procedure designed to improve the size, shape, and projection of the chin, bringing it into better balance with other facial features like the nose and forehead. It can create a stronger, more defined jawline and a more harmonious facial profile.",
  },
  {
    question: "What are the primary methods of Chin Augmentation?",
    answer:
      "There are two main approaches:\n• Chin Implants (Surgical): The most common method, involving the placement of a biocompatible implant to permanently enhance chin projection.\n• Dermal Fillers (Non-Surgical): A temporary solution using injectable gels (usually hyaluronic acid) for subtle augmentation and contouring. Dr. Kunal Sayani offers both options, tailored to your needs.",
  },
  {
    question: "Who is a good candidate for Chin Augmentation?",
    answer:
      "Good candidates are individuals who feel their chin is too small or recessed, leading to an unbalanced facial profile. They should be in good general health, have realistic expectations, and have a healthy bite. Dr. Kunal Sayani will assess your suitability during a detailed consultation.",
  },
  {
    question: "What kind of implant is used in Chin Augmentation?",
    answer:
      "The most common chin implants are made of solid, medical-grade silicone. They come in various shapes and sizes to allow for customized results. These implants are biocompatible and designed to be well-tolerated by the body.",
  },
  {
    question: "What is the difference between Chin Augmentation and Jaw Surgery (Orthognathic Surgery)?",
    answer:
      "Chin augmentation focuses on the chin's projection and shape to improve facial balance. Jaw surgery (orthognathic surgery) addresses underlying bite problems or significant jaw discrepancies by repositioning the jawbones themselves. While a recessed chin can be related to a small lower jaw, chin augmentation addresses the chin directly. Dr. Kunal Sayani will evaluate your specific needs to determine the best approach.",
  },
  {
    question: "Will Chin Augmentation make my nose look smaller?",
    answer:
      "Chin augmentation can create a more balanced facial profile. By bringing the chin into better proportion with the nose, it can make the nose appear less prominent, even if the nose itself hasn't been altered.",
  },
  {
    question: "Is the Chin Augmentation procedure painful?",
    answer:
      "During a surgical chin augmentation, local anesthesia with sedation, or general anesthesia, will ensure you are comfortable and feel no pain. Post-operative discomfort is manageable with prescribed pain medication. Non-surgical filler augmentation is quick and typically involves minimal discomfort due to numbing cream and lidocaine in the filler.",
  },
  {
    question: "When will I see the results of Chin Augmentation?",
    answer:
      "With surgical chin augmentation, the enhanced projection is immediately visible. However, initial swelling will be present. The final results become apparent as swelling subsides over several weeks to a few months. For non-surgical fillers, results are immediate.",
  },
  {
    question: "How long do the results of Chin Augmentation last?",
    answer:
      "Surgical chin implants provide a permanent enhancement to chin projection. For non-surgical dermal filler chin augmentation, results typically last from 1 to 2 years, depending on the type of filler used.",
  },
  {
    question: "Are the results of Chin Augmentation natural-looking?",
    answer:
      "Absolutely, when performed by an expert like Dr. Kunal Sayani. His artistic eye and precise technique ensure that the chin implant or filler seamlessly integrates with your existing facial features, creating a balanced and natural-looking profile that enhances your appearance without looking artificial.",
  },
  {
    question: "What is the downtime after Chin Augmentation surgery?",
    answer:
      "Most patients take about 1-2 weeks off from work or social activities. Significant swelling and bruising typically subside within this period. Full recovery and internal healing take longer.",
  },
  {
    question: "When can I resume normal activities and exercise after chin surgery?",
    answer:
      "Light activities can be resumed within a few days. Strenuous exercise should be avoided for at least 2-4 weeks. Contact sports or activities where your chin could be impacted should be avoided for 6-8 weeks to protect the implant.",
  },
  {
    question: "Will there be a visible scar?",
    answer:
      "Dr. Kunal Sayani strives to minimize visible scarring. If the incision is made inside the mouth (intraoral), there will be no external scar. If an external incision is used, it is typically placed in a natural crease under the chin, making it very discreet once healed.",
  },
  {
    question: "What kind of diet should I follow after chin surgery?",
    answer:
      "You will need to stick to a soft or liquid diet for the first few days to a week to minimize jaw movement and discomfort, as advised by Dr. Kunal Sayani.",
  },
  {
    question: "Myth: Chin Augmentation is only for people with a very small or 'weak' chin.",
    answer:
      "Fact: While it's excellent for addressing recessed chins, Chin Augmentation can also be used to improve chin shape, definition, and overall facial balance, even for those with moderately sized chins. It's about proportion and harmony.",
  },
  {
    question: "Myth: Chin implants look unnatural or feel fake.",
    answer:
      "Fact: False, when expertly placed by an aesthetic surgeon like Dr. Kunal Sayani. Modern chin implants are designed to look and feel natural. They integrate with your bone and soft tissues. A skilled surgeon ensures the right size and shape are chosen to blend seamlessly with your facial structure, providing a subtle yet impactful enhancement.",
  },
  {
    question: "Myth: Chin implants can easily shift or move after surgery.",
    answer:
      "Fact: While implant shifting is a rare complication, it's largely minimized by Dr. Kunal Sayani's precise pocket creation which fits the implant snugly. In some cases, securing the implant with small screws can further reduce this risk. Following post-operative instructions carefully also helps prevent movement.",
  },
  {
    question: "Myth: Chin Augmentation is a very painful surgery with a long recovery.",
    answer:
      "Fact: False. The procedure is performed under anesthesia, so you won't feel pain during surgery. Post-operative discomfort is generally mild to moderate and effectively managed with pain medication. Recovery, while involving some swelling and dietary adjustments, is significantly shorter than many other facial surgeries, with most patients returning to light activities within a week or two.",
  },
  {
    question: "Myth: Dermal fillers are just as good as implants for chin augmentation.",
    answer:
      "Fact: It depends on your goals. Dermal fillers are excellent for subtle enhancements, temporary changes, or to 'test out' an augmentation. However, for significant and permanent changes in chin projection and shape, surgical chin implants offer a more definitive and long-lasting solution. Dr. Kunal Sayani will advise which is best for you.",
  },
  {
    question: "Myth: Chin Augmentation only affects the chin.",
    answer:
      "Fact: While it directly changes the chin, a well-executed chin augmentation can significantly improve overall facial harmony. It can make the nose appear more proportionate, enhance jawline definition, and create a stronger neck contour, benefiting the entire lower face and profile.",
  },
  {
    question: "Myth: You can get Chin Augmentation from any doctor.",
    answer:
      "Fact: Absolutely not. Chin augmentation is a complex surgical procedure requiring an in-depth understanding of facial anatomy, bone structure, and aesthetics. It should only be performed by a highly trained and experienced aesthetic surgeon like Dr. Kunal Sayani, who has specialized expertise in facial surgery. Choosing an unqualified practitioner can lead to unsatisfactory results or serious complications.",
  },
  {
    question: "Myth: My teeth will be affected by a chin implant.",
    answer:
      "Fact: A chin implant is placed on the chin bone, not near the teeth roots or jaw joint. Therefore, it does not directly affect your teeth or bite. Dr. Kunal Sayani will assess your bite preoperatively to ensure no underlying dental issues complicate the procedure.",
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
            src={"/images/services/face/chin-augmentation.png"}
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