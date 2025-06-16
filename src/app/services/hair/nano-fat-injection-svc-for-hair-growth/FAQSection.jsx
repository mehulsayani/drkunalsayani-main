"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is Nano-Fat Injection SVC for hair growth?",
    answer:
      "Nano-Fat Injection SVC is a regenerative procedure that uses your own processed fat, rich in stem cells and growth factors, to stimulate hair follicles and promote hair growth on the scalp.",
  },
  {
    question: "Who is a good candidate for Nano-Fat Injection SVC for hair growth?",
    answer:
      "Ideal candidates are generally healthy adults with early to moderate hair thinning or diffuse hair loss, seeking a natural and minimally invasive solution.",
  },
  {
    question: "Will Nano-Fat Injection SVC make my hair grow instantly?",
    answer:
      "Myth: Hair growth is a gradual process. Fact: While the regenerative cells start working immediately, visible new hair growth typically begins around 3-6 months after the procedure, as hair cycles need time to complete.",
  },
  {
    question: "How long do the results of Nano-Fat Injection SVC for hair growth last?",
    answer:
      "The results can be long-lasting, but maintenance treatments may be recommended periodically to sustain the effects, as natural aging and hair loss progression can still occur.",
  },
  {
    question: "Is Nano-Fat Injection SVC the same as PRP for hair loss?",
    answer:
      "Myth: No, while both are regenerative therapies using your own body's components, they are different. Fact: PRP (Platelet-Rich Plasma) uses concentrated platelets from your blood, whereas Nano-Fat SVC uses processed fat containing a broader range of stem cells and growth factors. They can sometimes be used in combination.",
  },
  {
    question: "Can Nano-Fat Injection SVC cure baldness?",
    answer:
      "Myth: Nano-Fat Injection SVC can reverse severe baldness. Fact: It's most effective for stimulating existing thinning hair follicles and promoting new growth in areas of early to moderate hair loss. It's not a 'cure' for complete baldness, where follicles are entirely lost.",
  },
  {
    question: "Where is the fat typically harvested from?",
    answer:
      "Fat is usually harvested from areas with sufficient fat deposits, such as the abdomen, flanks, or inner thighs, using a small, gentle liposuction technique.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "The procedure is performed under local anesthesia, so you should experience minimal discomfort during the fat harvest and injections. You may feel some pressure or tugging.",
  },
  {
    question: "How long does the procedure take?",
    answer:
      "The Nano-Fat Injection SVC procedure typically takes between 1 to 2 hours, depending on the extent of the areas being treated.",
  },
  {
    question: "How long is the recovery period after Nano-Fat Injection SVC?",
    answer:
      "The initial recovery period is usually just a few days, with most patients resuming normal activities within 24-48 hours.",
  },
  {
    question: "When can I wash my hair after the procedure?",
    answer:
      "You will typically be advised to avoid washing your hair for the first 24-48 hours, as directed by Dr. Kunal Sayani.",
  },
  {
    question: "Will I have visible marks on my scalp after the injections?",
    answer:
      "You may have some tiny red dots or minor swelling at the injection sites, which usually resolve within a few days.",
  },
  {
    question: "Is Nano-Fat Injection SVC a safe procedure?",
    answer:
      "When performed by a qualified and experienced surgeon like Dr. Kunal Sayani, Nano-Fat Injection SVC is generally considered a safe procedure with minimal risks.",
  },
  {
    question: "What are the potential complications of Nano-Fat Injection SVC?",
    answer:
      "Potential complications are rare but can include infection, swelling, bruising, temporary numbness, or minor irregularities at the fat harvest site. Dr. Kunal Sayani will discuss these with you.",
  },
  {
    question: "How can I minimize the risks of the procedure?",
    answer:
      "Choosing a board-certified and experienced plastic surgeon, following all pre- and post-operative instructions carefully, and maintaining good overall health are crucial for minimizing risks.",
  },
  {
    question: "Myth: Nano-Fat Injection SVC results are immediate.",
    answer:
      "Fact: Hair growth is a biological process that takes time. You will typically see noticeable results in 3-6 months, with continued improvement over a year.",
  },
  {
    question: "Myth: Nano-Fat Injection SVC is painful and requires a long recovery.",
    answer:
      "Fact: The procedure is performed under local anesthesia, and recovery is generally quick, with most patients returning to their routine within a few days.",
  },
  {
    question: "Myth: Anyone with hair loss is a candidate for Nano-Fat Injection SVC.",
    answer:
      "Fact: While effective for many, it's best suited for individuals with early to moderate hair thinning or diffuse hair loss, and sufficient fat reserves. A consultation with Dr. Kunal Sayani will determine your eligibility.",
  },
  {
    question: "Myth: Nano-Fat Injection SVC is a one-time treatment that guarantees permanent hair.",
    answer:
      "Fact: While results can be long-lasting, the natural aging process and continued hair loss can occur. Maintenance treatments may be recommended to sustain optimal results.",
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
            src={"/images/services/hair/2149404688.jpg"}
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
