"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What exactly is Botox?",
    answer:
      "Botox is a brand name for a purified protein derived from Clostridium botulinum bacterium. When injected in very small, controlled amounts, it temporarily blocks nerve signals to specific muscles, causing them to relax. This relaxation reduces the appearance of dynamic wrinkles that form due to repetitive muscle movements.",
  },
  {
    question: "How does Botox work to reduce wrinkles?",
    answer:
      "Botox works by temporarily paralyzing or relaxing the underlying muscles responsible for dynamic wrinkles (e.g., frowning, squinting, raising eyebrows). When these muscles cannot contract, the overlying skin smooths out, reducing the appearance of lines and creases.",
  },
  {
    question: "What types of wrinkles does Botox treat?",
    answer:
      "Botox is primarily effective for dynamic wrinkles, which are visible when you make facial expressions. These include:\n• Forehead lines (horizontal lines across the forehead)\n• Frown lines (vertical '11' lines between the eyebrows)\n• Crow's feet (lines radiating from the corners of the eyes)\nDr. Kunal Sayani also uses Botox for 'bunny lines' on the nose, chin dimpling, and neck bands.",
  },
  {
    question: "Who is a good candidate for Botox injections?",
    answer:
      "Good candidates are typically healthy adults who are concerned about dynamic wrinkles. They should have realistic expectations about the results. Dr. Kunal Sayani will conduct a thorough medical history and facial assessment during your consultation to determine if Botox is right for you.",
  },
  {
    question: "Is Botox safe?",
    answer:
      "Yes, Botox has an excellent safety record and has been FDA-approved for cosmetic use for many years. When administered by a qualified and experienced aesthetic surgeon like Dr. Kunal Sayani, who understands facial anatomy and uses proper technique, the risks are minimal.",
  },
  {
    question: "Are there other uses for Botox besides wrinkles?",
    answer:
      "Yes, Botox has several medical applications. Dr. Kunal Sayani also uses Botox to treat conditions such as:\n• Excessive sweating (hyperhidrosis): Injections in the underarms, palms, or soles can significantly reduce sweat production.\n• Chronic migraines: Botox can help reduce the frequency and severity of migraine headaches.\n• TMJ disorders/Bruxism (teeth grinding): Injections into the masseter muscles can alleviate jaw pain and slim the jawline.\n• Neck spasms (cervical dystonia).",
  },
  {
    question: "How long does a Botox treatment session take?",
    answer:
      "The actual injection process is very quick, usually lasting between 10 to 15 minutes, depending on the number of areas being treated.",
  },
  {
    question: "Does Botox hurt?",
    answer:
      "Most patients report minimal discomfort during Botox injections. The needles used are very fine, and the sensation is often described as a brief, mild pinch or sting. Dr. Kunal Sayani can use a topical numbing cream or ice to enhance comfort if desired.",
  },
  {
    question: "When will I see results from Botox?",
    answer:
      "The effects of Botox are not immediate. You typically start to see a softening of your wrinkles within 3 to 5 days, with the full results becoming apparent around 10 to 14 days after your treatment.",
  },
  {
    question: "How long do Botox results last?",
    answer:
      "On average, Botox results last between 3 to 4 months. The duration can vary slightly depending on the individual's metabolism, muscle activity, and the area treated.",
  },
  {
    question: "Are the results of Botox permanent?",
    answer:
      "No, Botox results are temporary. The product is gradually metabolized by your body, and the muscle activity slowly returns. To maintain the wrinkle-reducing effects, repeat treatments are necessary.",
  },
  {
    question: "Will my wrinkles be worse after Botox wears off?",
    answer:
      "No, this is a common myth. When Botox wears off, your muscles will gradually regain their original function, and your wrinkles will reappear as they were before treatment. They will not be worse than your original baseline. In fact, consistent Botox use can often prevent dynamic wrinkles from becoming deeper static lines.",
  },
  {
    question: "What is the downtime after a Botox injection?",
    answer:
      "There is virtually no downtime after Botox. You can typically return to most of your normal daily activities immediately after your appointment.",
  },
  {
    question: "What should I avoid after Botox injections?",
    answer:
      "For the first 4-6 hours, avoid rubbing or massaging the treated areas, lying down flat, and engaging in strenuous exercise. Dr. Kunal Sayani will provide you with specific post-treatment instructions.",
  },
  {
    question: "Can I wear makeup after Botox?",
    answer:
      "Yes, you can typically apply makeup a few hours after your Botox injections, provided there is no significant swelling or open injection sites.",
  },
  {
    question: "When can I exercise after Botox?",
    answer:
      "It is recommended to avoid strenuous exercise, heavy lifting, and activities that significantly increase your heart rate or blood flow to the face for at least 24 hours after your Botox treatment.",
  },
  {
    question: "Myth: Botox will make my face look completely frozen or expressionless.",
    answer:
      "Fact: This is an outdated misconception. When administered by an experienced aesthetic surgeon like Dr. Kunal Sayani, the goal is to soften wrinkles while preserving natural facial expressions. Dr. Sayani carefully assesses your facial dynamics to ensure a refreshed and relaxed look, not a 'frozen' one.",
  },
  {
    question: "Myth: Botox is a dangerous toxin that builds up in your body.",
    answer:
      "Fact: Botox is a highly purified protein used in extremely small, controlled doses for cosmetic purposes. It acts locally on the injected muscles and does not build up in the body or cause widespread systemic effects. It has a long history of safe medical and cosmetic use.",
  },
  {
    question: "Myth: Botox is only for older people with deep wrinkles.",
    answer:
      "Fact: While effective for reducing existing deep wrinkles, Botox is increasingly popular among younger individuals (in their late 20s or 30s) as a preventative measure. By relaxing the muscles that cause dynamic wrinkles, it can delay the formation of deep lines, slowing down the aging process.",
  },
  {
    question: "Myth: Botox injections are excruciatingly painful.",
    answer:
      "Fact: Most patients find Botox injections to be very tolerable. The needles are ultra-fine, and the procedure is quick. The sensation is often described as a brief pinch. Dr. Kunal Sayani's gentle technique and the option of topical numbing cream further minimize discomfort.",
  },
  {
    question: "Myth: If you stop getting Botox, your wrinkles will get worse than before.",
    answer:
      "Fact: This is false. When Botox wears off, your muscles will gradually regain their original function, and your wrinkles will return to their pre-treatment state. They will not be 'worse' than they were before you started treatment. Consistent use can even lead to lasting improvements by 'training' muscles to be less active.",
  },
  {
    question: "Myth: Botox is addictive.",
    answer:
      "Fact: Botox is not physically addictive. Patients return for repeat treatments because they are satisfied with the results and wish to maintain their refreshed appearance. There are no withdrawal symptoms if you decide to stop treatments.",
  },
  {
    question: "Myth: You can get Botox from anyone, even at a 'Botox party.'",
    answer:
      "Fact: Absolutely not. Botox is a prescription medication and a medical procedure. It requires an in-depth understanding of facial anatomy, precise injection techniques, and the ability to manage potential complications. Only a highly trained, qualified, and experienced medical professional, such as an aesthetic surgeon like Dr. Kunal Sayani, should administer Botox injections in a safe, sterile clinic environment. Unlicensed practitioners or 'Botox parties' pose significant health risks.",
  },
  {
    question: "Myth: Botox and dermal fillers do the same thing.",
    answer:
      "Fact: While both are injectables for facial rejuvenation, they work differently. Botox relaxes muscles to smooth dynamic wrinkles. Dermal fillers add volume to fill static lines, plump features (like lips), and restore lost facial volume. Dr. Kunal Sayani often uses a combination of both for comprehensive, harmonious results.",
  },
  {
    question: "Myth: The effects of Botox are immediate.",
    answer:
      "Fact: The full effects of Botox are not immediate. You will typically begin to notice results within 3-5 days, with the optimal smoothing appearing around 10-14 days after your injection as the muscles fully relax.",
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
            src={"/images/services/nonsurgical/Botox (wrinkles-anti-ageing).jpg"}
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