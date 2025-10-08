"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a lipoma?",
    answer:
      "A lipoma is a common, benign (non-cancerous) fatty tumor that typically forms just under the skin. It feels soft, rubbery, and can be moved around with your fingers. Lipomas are usually harmless but can grow large or cause discomfort if they press on nerves or organs.",
  },
  {
    question: "What is a skin cyst?",
    answer:
      "A skin cyst is a sac-like pocket of tissue under the skin that can be filled with fluid, air, pus, or other material. Common types include epidermal cysts (often called sebaceous cysts, though technically different) and pilar cysts. They usually appear as a smooth lump and can sometimes become inflamed or infected.",
  },
  {
    question: "Are lipomas or cysts dangerous?",
    answer:
      "Most lipomas and cysts are benign (non-cancerous) and not dangerous. However, it's always recommended to have any new or growing lump evaluated by a medical professional like Dr. Kunal Sayani to confirm the diagnosis and rule out any rare underlying conditions.",
  },
  {
    question: "Why should I have a lipoma or cyst removed?",
    answer:
      "While often benign, people choose to have lipomas or cysts removed for various reasons:\n• Aesthetic concern: They may be unsightly, especially on visible areas.\n• Discomfort or pain: If they grow large, press on nerves, or become inflamed.\n• Infection: Cysts can sometimes rupture or become infected, requiring medical attention.\n• Uncertainty: To confirm the diagnosis and rule out malignancy.",
  },
  {
    question: "Is the removal procedure painful?",
    answer:
      "The procedure is performed under local anesthesia, so you will not feel pain during the removal. You may feel some pressure or movement. Any post-operative discomfort is usually mild and easily managed with over-the-counter pain relievers.",
  },
  {
    question: "Will there be a scar after removal?",
    answer:
      "Yes, any incision will result in a scar. However, Dr. Kunal Sayani utilizes meticulous surgical techniques and strategically places incisions (often in natural skin folds) to minimize the visibility of the scar, aiming for the best possible cosmetic outcome.",
  },
  {
    question: "Can lipomas or cysts grow back after removal?",
    answer:
      "For cysts, Dr. Kunal Sayani emphasizes complete removal of the entire cyst wall or sac to minimize the chance of recurrence. If any part of the wall is left, it can regrow. Lipomas are less likely to recur if completely excised, but new lipomas can form in other areas.",
  },
  {
    question: "What is scar revision?",
    answer:
      "Scar revision is a surgical procedure or combination of treatments designed to improve the appearance of a scar, making it less noticeable, smoother, or better integrated with the surrounding skin. It aims to reduce the scar's visibility and improve its texture, color, and sometimes, its function.",
  },
  {
    question: "What types of scars can be treated with revision?",
    answer:
      "Dr. Kunal Sayani can address various types of scars, including:\n• Hypertrophic scars: Raised, red scars confined to the original injury site.\n• Keloid scars: Raised, red scars that grow beyond the original injury boundaries.\n• Atrophic scars: Depressed or sunken scars (e.g., some acne scars).\n• Contracture scars: Scars that restrict movement, often from burns.\n• Discolored scars: Scars that are hyperpigmented (dark) or hypopigmented (light).\n• Wide or stretched scars.",
  },
  {
    question: "Can a scar be completely removed?",
    answer:
      "No, a scar cannot be completely removed. Scar revision aims to improve its appearance, making it less noticeable and more aesthetically pleasing. The goal is to replace a more conspicuous scar with a less noticeable one.",
  },
  {
    question: "How is scar revision performed?",
    answer:
      "The technique varies widely depending on the type and location of the scar. Methods include surgical excision and re-closure (often with Z-plasty or W-plasty), subcision, dermal fillers, fat grafting, corticosteroid injections, silicone sheeting, and laser therapy. Dr. Kunal Sayani will recommend the most appropriate approach or combination.",
  },
  {
    question: "Will scar revision require general anesthesia?",
    answer:
      "Most scar revision procedures are performed under local anesthesia in Dr. Kunal Sayani's clinic. More extensive revisions or multiple areas might require sedation or, rarely, general anesthesia.",
  },
  {
    question: "What is the typical recovery time?",
    answer:
      "Recovery time varies depending on the procedure. For simple lipoma/cyst removal, social downtime might be a few days. For more extensive scar revisions, it could be 1-2 weeks. Full healing and scar maturation take much longer (6-18 months).",
  },
  {
    question: "How long do I need to care for the incision/scar?",
    answer:
      "Initial wound care (keeping it clean and dry, dressing changes) is typically for 1-2 weeks until sutures are removed or dissolved. Long-term scar care (silicone sheeting, massage, sun protection) is crucial for months, as advised by Dr. Kunal Sayani, to optimize the final appearance.",
  },
  {
    question: "When can I resume normal activities and exercise?",
    answer:
      "Light activities can usually be resumed within a few days. Strenuous exercise, heavy lifting, or activities that put tension on the incision/scar should be avoided for 2-4 weeks or longer, as advised by Dr. Kunal Sayani.",
  },
  {
    question: "Myth: All lumps under the skin are cancerous.",
    answer:
      "Fact: False. While any new lump should always be evaluated by a doctor, most lumps under the skin, such as lipomas and cysts, are benign (non-cancerous). Dr. Kunal Sayani can accurately diagnose your lesion and advise on treatment.",
  },
  {
    question: "Myth: Lipomas and cysts will always go away on their own.",
    answer:
      "Fact: False. While some small cysts might resolve, most lipomas and cysts do not disappear on their own. They can often remain stable, grow larger, or become inflamed/infected, requiring removal if they are bothersome.",
  },
  {
    question: "Myth: Rubbing or massaging a lipoma/cyst will make it go away.",
    answer:
      "Fact: False. Rubbing or massaging a lipoma or cyst will not make it disappear and can potentially irritate it or lead to inflammation.",
  },
  {
    question: "Myth: Scars can be completely erased.",
    answer:
      "Fact: This is a pervasive myth. A scar is a permanent mark where skin has healed after injury. Scar revision aims to improve the appearance of a scar, making it less noticeable and better blending with surrounding skin, but it cannot completely erase it.",
  },
  {
    question: "Myth: You should wait many years for a scar to 'mature' before having it revised.",
    answer:
      "Fact: While scar revision is often performed after a scar has matured (typically 6-12 months), it's not always necessary to wait years. For certain types of scars (like early hypertrophic or keloid scars), early intervention with treatments like silicone sheeting or steroid injections can prevent worsening. Dr. Kunal Sayani will determine the optimal timing for your scar.",
  },
  {
    question: "Myth: Scar creams can make any scar disappear.",
    answer:
      "Fact: False. Over-the-counter scar creams can help soften and fade certain new or minor scars, particularly with consistent use. However, they are not effective for severe, deep, or raised scars like keloids or extensive atrophic scars. Such scars often require medical intervention from an expert like Dr. Kunal Sayani.",
  },
  {
    question: "Myth: Surgical scar revision is always worse than the original scar.",
    answer:
      "Fact: False. When performed by a skilled aesthetic surgeon like Dr. Kunal Sayani, surgical scar revision often results in a significantly less noticeable and more aesthetically pleasing scar. The goal is to replace a prominent scar with a fine, less conspicuous line.",
  },
  {
    question: "Myth: Keloid scars can be 'cut out' and will never return.",
    answer:
      "Fact: This is false and potentially dangerous. Keloids are a type of abnormal scar that tends to grow beyond the original wound boundaries and can recur even after excision. Surgical removal of keloids often needs to be combined with adjunctive therapies like corticosteroid injections, silicone sheeting, or radiation to minimize the high risk of recurrence. Dr. Kunal Sayani specializes in managing keloids.",
  },
  {
    question: "Myth: Only aesthetic surgeons can perform lipoma/cyst removal or scar revision.",
    answer:
      "Fact: While other medical professionals may perform basic excisions, aesthetic surgeons like Dr. Kunal Sayani have specialized training in plastic and reconstructive techniques, focusing on minimizing scarring and optimizing aesthetic outcomes. For visible areas or complex cases, choosing an aesthetic surgeon is highly recommended for superior results.",
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
            src={"/images/services/face/Lipoma-Cysts-Scars.jpg"}
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