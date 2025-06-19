"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is blepharoplasty, and what does it achieve?",
    answer:
      "Blepharoplasty is a surgical procedure that rejuvenates the appearance of the eyes by removing excess skin, fat, and sometimes muscle from the upper and/or lower eyelids. It can reduce sagging, puffiness, and wrinkles, creating a more refreshed, alert, and youthful look.",
  },
  {
    question: "Who is a good candidate for blepharoplasty?",
    answer:
      "Ideal candidates are generally healthy individuals, typically over 30 (though genetic factors can make younger people candidates), who are bothered by sagging eyelids, puffy bags, or obstructed vision due to excess eyelid skin. They should have realistic expectations and be non-smokers.",
  },
  {
    question: "Does blepharoplasty remove dark circles under the eyes?",
    answer:
      "Myth: Blepharoplasty primarily addresses excess fat and skin, not skin pigmentation. While removing or repositioning fat can sometimes improve the appearance of shadows that contribute to dark circles, it won't eliminate true pigmentation. Fact: For dark circles caused by thin skin or underlying blood vessels, other treatments like fillers or laser therapy might be more effective.",
  },
  {
    question: "How long do the results of blepharoplasty last?",
    answer:
      "The results of upper eyelid surgery can last for many years, often a lifetime. Lower eyelid surgery results are typically very long-lasting. While the surgery provides significant and durable improvement, the natural aging process will continue, but from a more refreshed baseline.",
  },
  {
    question: "Is blepharoplasty a painful procedure?",
    answer:
      "Myth: Many believe it's very painful. Fact: While you will experience some discomfort, tightness, and mild aching after surgery, severe pain is uncommon and effectively managed with prescribed pain medication. Most patients describe it as more uncomfortable than painful.",
  },
  {
    question: "Will I have visible scars after eyelid surgery?",
    answer:
      "Myth: Eyelid surgery leaves obvious scars. Fact: Dr. Kunal Sayani meticulously places incisions in the natural creases of the upper eyelids (hidden in the fold) and either just below the lash line or inside the lower eyelid (transconjunctival approach). These incisions are very fine and typically heal remarkably well, becoming almost invisible over time.",
  },
  {
    question: "Can blepharoplasty improve my vision?",
    answer:
      "Fact: Yes, in cases where significant excess skin on the upper eyelids droops down and obstructs your peripheral or even central vision, blepharoplasty can effectively improve your visual field. Myth: Blepharoplasty is purely a cosmetic procedure.",
  },
  {
    question: "What is the ideal age for blepharoplasty?",
    answer:
      "While there's no 'ideal' age, most patients are 35 years or older when they undergo blepharoplasty. However, if genetic factors cause significant puffiness or sagging at a younger age, individuals in their 20s or 30s may also be good candidates.",
  },
  {
    question: "What is the difference between upper and lower blepharoplasty?",
    answer:
      "Upper blepharoplasty addresses excess skin and fat in the upper eyelids, often improving a tired or hooded appearance and potentially vision. Lower blepharoplasty targets puffy bags, excess skin, and wrinkles under the eyes, aiming for a smoother contour. Dr. Kunal Sayani can perform one or both.",
  },
  {
    question: "Will my eyebrows be lifted during blepharoplasty?",
    answer:
      "Myth: Eyelid surgery also lifts the eyebrows. Fact: Blepharoplasty specifically addresses the eyelids. If your eyebrows are also drooping, contributing to a heavy or tired look, Dr. Kunal Sayani might recommend a brow lift as a separate or complementary procedure to achieve optimal facial harmony.",
  },
  {
    question: "What is the transconjunctival approach for lower blepharoplasty?",
    answer:
      "This technique involves an incision made inside the lower eyelid, leaving no visible external scar. It's often chosen when the primary concern is fatty bags, and there's minimal excess skin to be removed.",
  },
  {
    question: "How long does a blepharoplasty procedure typically take?",
    answer:
      "The duration varies depending on whether upper, lower, or both eyelids are treated, and the complexity. It typically ranges from 1 to 3 hours.",
  },
  {
    question: "How long is the recovery period after blepharoplasty?",
    answer:
      "Most patients can return to light activities and work within 7-10 days, once significant bruising has faded and sutures are removed. However, residual swelling can take several weeks to months to fully resolve, with the final results appearing at 3-6 months.",
  },
  {
    question: "When can I wear makeup and contact lenses after surgery?",
    answer:
      "You should avoid wearing eye makeup and contact lenses for at least 1-2 weeks after surgery, or as specifically instructed by Dr. Kunal Sayani, to allow the incisions to heal properly and prevent infection.",
  },
  {
    question: "Can I exercise after blepharoplasty?",
    answer:
      "You should avoid strenuous exercise, heavy lifting, and activities that significantly raise your blood pressure for at least 2-4 weeks after surgery. Light walking is generally encouraged earlier to promote circulation. Dr. Kunal Sayani will provide specific guidelines for your return to activity.",
  },
  {
    question: "Do I need to apply cold compresses?",
    answer:
      "Fact: Yes, applying cold compresses diligently for the first 48-72 hours is crucial for reducing swelling and bruising. Myth: Cold compresses aren't that important.",
  },
  {
    question: "When will I see the final results?",
    answer:
      "While initial improvements are visible once bruising and significant swelling subside (around 2-3 weeks), the final, refined results of your blepharoplasty will gradually become apparent as all residual swelling diminishes, which can take 3 to 6 months.",
  },
  {
    question: "Is blepharoplasty a safe surgery?",
    answer:
      "Fact: When performed by a qualified, board-certified aesthetic surgeon like Dr. Kunal Sayani, blepharoplasty is a very safe procedure. Risks are minimized through proper patient selection, meticulous surgical technique, and adherence to post-operative care. Myth: All cosmetic surgeries are inherently dangerous.",
  },
  {
    question: "What are the potential complications of blepharoplasty?",
    answer:
      "Potential complications, though rare, include bleeding, infection, dry eyes, difficulty closing the eyes (lagophthalmos), asymmetry, changes in skin sensation, and, very rarely, vision changes. Dr. Kunal Sayani will discuss these thoroughly with you during your consultation.",
  },
  {
    question: "Can blepharoplasty cause permanent dry eyes?",
    answer:
      "Fact: While temporary dry eyes are common, chronic or permanent dry eyes are rare complications, especially if you had pre-existing dry eye issues. Dr. Kunal Sayani will assess your tear production before surgery to evaluate this risk.",
  },
  {
    question: "What if I don't like my results? Can it be revised?",
    answer:
      "While Dr. Kunal Sayani aims for excellent results, in rare instances where a patient is dissatisfied or minor refinements are desired, a revision blepharoplasty may be considered. This is typically performed after the initial healing is complete, usually 6-12 months later.",
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
            src={"/images/services/face/Eyelid Surgery (Blepharoplasty).jpeg"}
            alt="Clinic timing"
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