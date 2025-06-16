"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a tummy tuck (abdominoplasty)?",
    answer:
      "A tummy tuck is a surgical procedure to remove excess skin and fat from the abdomen and tighten the abdominal muscles, resulting in a smoother, firmer contour.",
  },
  {
    question: "Who is a good candidate for a tummy tuck?",
    answer:
      "Ideal candidates are generally healthy adults who have excess skin and fat in the abdomen that doesn't respond well to diet and exercise, have stable weight, and are non-smokers. Women who have had multiple pregnancies and have stretched abdominal skin and muscles are also common candidates.",
  },
  {
    question: "Will a tummy tuck help me lose weight?",
    answer:
      "Myth: A tummy tuck is primarily a contouring procedure, not a weight-loss surgery. While some fat is removed, the main goal is to improve the shape and tone of the abdomen. It's best performed after you have achieved a stable and healthy weight. Fact: While you may lose a small amount of weight due to the removal of skin and fat, a tummy tuck is not a substitute for weight loss.",
  },
  {
    question: "How long do the results of a tummy tuck last?",
    answer:
      "The results of a tummy tuck can be long-lasting, especially if you maintain a stable weight and healthy lifestyle. However, significant weight fluctuations, pregnancy, and the natural aging process can affect your results over time.",
  },
  {
    question: "What kind of scars can I expect after a tummy tuck?",
    answer:
      "Fact: Scars are a permanent outcome of a tummy tuck. The length and location of the scars depend on the type of tummy tuck performed. Dr. Kunal Sayani will make every effort to place incisions discreetly, and scars typically fade over time, although they will remain visible. Myth: Tummy tuck scars completely disappear.",
  },
  {
    question: "Is a tummy tuck the same as liposuction?",
    answer:
      "Myth: No, a tummy tuck and liposuction are different procedures, although they can sometimes be combined. Liposuction removes excess fat through small incisions, while a tummy tuck removes excess skin and fat and tightens the abdominal muscles. Fact: Liposuction primarily addresses excess fat, while a tummy tuck addresses both excess skin and fat and tightens underlying muscles.",
  },
  {
    question: "Can I get pregnant after a tummy tuck?",
    answer:
      "It is generally recommended to complete your family planning before undergoing a tummy tuck, as pregnancy can stretch the skin and muscles again, potentially affecting your results. If you do become pregnant after a tummy tuck, it's important to discuss this with Dr. Kunal Sayani.",
  },
  {
    question: "Where are the incisions typically made?",
    answer:
      "The location and length of incisions vary depending on the type of tummy tuck. A traditional tummy tuck involves a horizontal incision above the pubic area and possibly an incision around the navel. A mini tummy tuck has a shorter horizontal incision. An extended tummy tuck extends around the flanks.",
  },
  {
    question: "Will my belly button look different after a tummy tuck?",
    answer:
      "In a traditional tummy tuck, the skin around the belly button is tightened, and a new opening is created for it. Dr. Kunal Sayani takes great care to ensure the belly button looks natural.",
  },
  {
    question: "How much pain is involved after a tummy tuck?",
    answer:
      "You will experience pain and discomfort after the surgery, which will be managed with pain medication prescribed by Dr. Kunal Sayani. The intensity of the pain varies among individuals but typically subsides significantly within the first few weeks.",
  },
  {
    question: "How long does the surgery take?",
    answer:
      "The duration of a tummy tuck can range from two to five hours, depending on the extent of the procedure.",
  },
  {
    question: "How long is the recovery period after a tummy tuck?",
    answer:
      "The initial recovery period, during which you will need to restrict your activities, is typically a few weeks. However, full recovery and the final results can take several months.",
  },
  {
    question: "When can I return to work after a tummy tuck?",
    answer:
      "The time it takes to return to work depends on the nature of your job and the extent of your surgery. Most people can return to a desk job within 2-3 weeks, while those with more physically demanding jobs may need 4-6 weeks or longer.",
  },
  {
    question: "When can I start exercising after a tummy tuck?",
    answer:
      "You will need to avoid strenuous exercise for several weeks. Dr. Kunal Sayani will provide specific guidelines on when and how to gradually reintroduce physical activity.",
  },
  {
    question: "Will I need to wear a compression garment after surgery?",
    answer:
      "Fact: Yes, wearing a compression garment is crucial after a tummy tuck. It helps to reduce swelling, support the healing tissues, and improve the final contour. Myth: I only need to wear the compression garment for a few days. You will typically need to wear it for several weeks, as directed by Dr. Kunal Sayani.",
  },
  {
    question: "Will I have drains after my tummy tuck?",
    answer:
      "Drains are often placed temporarily to help remove excess fluid and prevent seroma formation. They are typically removed within a week or two.",
  },
  {
    question: "Is a tummy tuck a dangerous surgery?",
    answer:
      "Like all surgical procedures, a tummy tuck carries risks. However, when performed by a qualified and experienced surgeon like Dr. Kunal Sayani in an accredited facility, the risks are minimized.",
  },
  {
    question: "What are the potential complications of a tummy tuck?",
    answer:
      "Potential complications include bleeding, infection, poor wound healing, scarring, seroma, changes in skin sensation, blood clots, and anesthesia risks. Dr. Kunal Sayani will discuss these risks with you in detail during your consultation.",
  },
  {
    question: "How can I minimize the risks of a tummy tuck?",
    answer:
      "Choosing a board-certified and experienced plastic surgeon, following all pre- and post-operative instructions carefully, and maintaining a healthy lifestyle are crucial for minimizing risks.",
  },
  {
    question: "Myth: A tummy tuck will get rid of my stretch marks.",
    answer:
      "Fact: A tummy tuck can remove stretch marks located on the excess skin that is excised. However, stretch marks above the incision line will remain.",
  },
  {
    question: "Myth: A tummy tuck is a quick fix for obesity.",
    answer:
      "Fact: A tummy tuck is not a weight-loss solution. It is best suited for individuals who are at a stable weight and want to improve the contour of their abdomen.",
  },
  {
    question: "Myth: The recovery from a tummy tuck is extremely painful.",
    answer:
      "Fact: While you will experience discomfort, it can be effectively managed with pain medication. The pain typically subsides significantly within the first few weeks.",
  },
  {
    question: "Myth: Once I have a tummy tuck, I don't need to exercise or watch my diet.",
    answer:
      "Fact: Maintaining a healthy lifestyle, including regular exercise and a balanced diet, is essential for preserving the results of your tummy tuck long-term.",
  },
  {
    question: "Myth: All tummy tuck results look the same.",
    answer:
      "Fact: Each tummy tuck is tailored to the individual's anatomy and aesthetic goals. Dr. Kunal Sayani strives to achieve natural-looking and personalized results.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="flex justify-center px-4 md:px-8 my-16">
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-[485px] h-[300px] md:h-[461px] rounded-xl shadow-lg">
          <Image
            src={"/images/services/body/tummytuck/tummytuck.jpg"}
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