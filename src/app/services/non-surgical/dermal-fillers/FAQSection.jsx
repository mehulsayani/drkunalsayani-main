"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What are Dermal Fillers?",
    answer:
      "Dermal fillers are injectable gel-like substances used to restore volume to the face, smooth out lines and wrinkles (static wrinkles), enhance facial contours, and rejuvenate various areas of the face and body. Most commonly, they are made of hyaluronic acid (HA), a substance naturally found in the skin.",
  },
  {
    question: "How do Dermal Fillers work?",
    answer:
      "Dermal fillers work by physically adding volume beneath the skin's surface. They fill in hollows, plump up areas that have lost fat, and smooth out lines. Many fillers also stimulate your body's natural collagen production over time, which further contributes to skin rejuvenation.",
  },
  {
    question: "What types of concerns can Dermal Fillers address?",
    answer:
      "Dermal fillers are highly versatile and can address a wide range of aesthetic concerns, including:\n• Smoothing nasolabial folds (smile lines) and marionette lines.\n• Restoring volume to sunken cheeks and temples.\n• Enhancing and plumping lips.\n• Minimizing under-eye hollows (tear troughs).\n• Defining the jawline and chin.\n• Correcting facial asymmetry.\n• Rejuvenating the back of the hands. Dr. Kunal Sayani will recommend the best filler and technique for your specific needs.",
  },
  {
    question: "Who is a good candidate for Dermal Fillers?",
    answer:
      "Ideal candidates are generally healthy adults seeking to address signs of aging such as volume loss, static wrinkles, or those desiring subtle enhancements to their facial features. A comprehensive consultation with Dr. Kunal Sayani is essential to determine your suitability.",
  },
  {
    question: "What types of Dermal Fillers does Dr. Kunal Sayani use?",
    answer:
      "Dr. Kunal Sayani uses a range of premium, FDA-approved dermal fillers, primarily hyaluronic acid (HA) based fillers (e.g., from Juvéderm, Restylane families) due to their versatility and reversibility. Depending on your needs, he may also use other types like Calcium Hydroxylapatite (CaHA) or Poly-L-Lactic Acid (PLLA) which stimulate collagen.",
  },
  {
    question: "Is the Dermal Filler injection procedure painful?",
    answer:
      "Discomfort is usually minimal. A topical numbing cream is applied before the injections, and many fillers contain lidocaine (a local anesthetic) to further enhance comfort during the procedure. Patients typically report a mild pinching or pressure sensation.",
  },
  {
    question: "How long does a Dermal Filler treatment session take?",
    answer:
      "A Dermal Filler treatment typically takes between 15 to 60 minutes, depending on the number of areas being treated and the complexity of the desired correction.",
  },
  {
    question: "When will I see results from Dermal Fillers?",
    answer:
      "You will see an immediate improvement in volume and a reduction in lines right after the injection. However, some initial swelling may mask the full effect. The final, settled results typically become visible within 1 to 2 weeks as any swelling subsides.",
  },
  {
    question: "How long do Dermal Filler results last?",
    answer:
      "The longevity of dermal fillers varies depending on the type of filler, the area treated, your metabolism, and lifestyle.\n• Hyaluronic Acid (HA) fillers typically last 6 to 18 months.\n• Calcium Hydroxylapatite (CaHA) fillers (e.g., Radiesse) can last 12 to 18 months.\n• Poly-L-Lactic Acid (PLLA) fillers (e.g., Sculptra) work by stimulating collagen and can last up to 2 years or more. Dr. Kunal Sayani will discuss the expected duration for the specific filler recommended for you.",
  },
  {
    question: "Are Dermal Fillers permanent?",
    answer:
      "No, most widely used dermal fillers are temporary and biodegradable, meaning they are naturally absorbed by your body over time. This temporary nature allows for adjustments as your face continues to age and your aesthetic preferences evolve.",
  },
  {
    question: "Will Dermal Fillers replace a surgical facelift?",
    answer:
      "No, dermal fillers are a non-surgical solution for volume loss and specific lines. While they can provide significant rejuvenation, they cannot achieve the comprehensive lifting and skin tightening that a surgical facelift can for significant skin laxity. Often, Dr. Kunal Sayani recommends a combination of treatments for optimal results.",
  },
  {
    question: "What is the downtime after Dermal Filler injections?",
    answer:
      "Downtime is minimal. Most patients can resume their normal activities immediately. You might experience some mild swelling, bruising, or tenderness for a few days to a week.",
  },
  {
    question: "Can I exercise after getting Dermal Fillers?",
    answer:
      "It's recommended to avoid strenuous exercise, heavy lifting, or any activity that significantly increases your heart rate for at least 24-48 hours after your injections.",
  },
  {
    question: "What should I avoid after Dermal Fillers?",
    answer:
      "Avoid touching, rubbing, or massaging the treated areas immediately after. Also, avoid alcohol, excessive heat exposure (saunas, hot tubs), and blood-thinning medications for a few days. Dr. Kunal Sayani will provide detailed post-care instructions.",
  },
  {
    question: "Will I have visible bruising or swelling?",
    answer:
      "Mild swelling and bruising are common and temporary side effects. The degree varies per individual and area treated. Most bruising can be covered with makeup, and both typically resolve within a few days to a week.",
  },
  {
    question: "Myth: Dermal fillers will make my face look 'puffy' or 'fake.'",
    answer:
      "Fact: Absolutely false. When administered by a skilled aesthetic surgeon like Dr. Kunal Sayani, the goal is always to achieve natural-looking, subtle enhancement. Dr. Sayani's expertise in facial anatomy and artistic eye ensures that fillers are placed precisely to restore lost volume and enhance contours harmoniously, making you look refreshed, not 'overdone.'",
  },
  {
    question: "Myth: All dermal fillers are the same.",
    answer:
      "Fact: No, this is a major misconception. There are many different types of dermal fillers with varying consistencies, components (e.g., hyaluronic acid, CaHA, PLLA), and longevity. Each is designed for specific areas and concerns. Dr. Kunal Sayani carefully selects the most appropriate filler based on your individual needs and the area being treated.",
  },
  {
    question: "Myth: Dermal fillers are permanent.",
    answer:
      "Fact: This is a myth. The most commonly used and safest dermal fillers (like hyaluronic acid fillers) are temporary and naturally break down and are absorbed by the body over time. This is a safety feature, allowing for adjustments or reversal if desired.",
  },
  {
    question: "Myth: If you don't like your filler, you're stuck with it.",
    answer:
      "Fact: For hyaluronic acid (HA) fillers, this is false. If you are unhappy with the result or if a complication arises, HA fillers can be safely and quickly dissolved using an enzyme called hyaluronidase. This provides an extra layer of safety and peace of mind.",
  },
  {
    question: "Myth: Dermal fillers stretch out your skin, making it worse when they wear off.",
    answer:
      "Fact: This is false. Dermal fillers do not permanently stretch your skin. The skin has remarkable elasticity. When the filler metabolizes, your skin will return to its pre-treatment state. In some cases, the collagen stimulation triggered by the filler can even lead to improved skin quality over time.",
  },
  {
    question: "Myth: Fillers are extremely painful to receive.",
    answer:
      "Fact: While injections can cause a brief sting, most patients find dermal filler treatments to be quite tolerable. Dr. Kunal Sayani uses topical numbing creams and many fillers contain lidocaine, significantly minimizing discomfort.",
  },
  {
    question: "Myth: Only women get dermal fillers.",
    answer:
      "Fact: Not true. The demand for aesthetic treatments among men is rapidly growing, and dermal fillers are a popular choice. Men often seek fillers to address volume loss, define jawlines, or reduce lines, enhancing their masculine features subtly.",
  },
  {
    question: "Myth: You can get dermal fillers from anyone, anywhere.",
    answer:
      "Fact: This is a dangerous myth. Dermal filler injections are a medical procedure that requires a deep understanding of facial anatomy, sterile technique, and the ability to manage potential complications. They should only be administered by highly qualified and experienced medical professionals like an aesthetic surgeon such as Dr. Kunal Sayani, in a clinical setting. Receiving fillers from untrained individuals or in non-medical environments significantly increases the risk of complications.",
  },
  {
    question: "Myth: Dermal fillers and Botox are the same.",
    answer:
      "Fact: This is a common misconception. Both are injectables but work differently. Botox relaxes muscles to smooth dynamic wrinkles (wrinkles formed by muscle movement). Dermal fillers add volume to fill static lines (wrinkles present at rest), plump features, and restore facial contours. Dr. Kunal Sayani often uses both in combination for a comprehensive rejuvenation.",
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
            src={"/images/services/nonsurgical/Dermal Fillers.jpg"}
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