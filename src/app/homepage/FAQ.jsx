import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What can I expect during my first consultation with Dr. Kunal Sayani?",
    answer:
      "Your first consultation is a comprehensive, confidential discussion. Dr. Sayani will listen carefully to your goals and concerns. He will conduct a thorough evaluation of the area you wish to enhance, discuss your medical history, and explain the available treatment options in detail. The goal is for you to leave with a clear understanding of what is possible, the recommended approach, and all your questions answered.",
  },
  {
    question: "Do I need to prepare anything for my consultation?",
    answer:
      "It's helpful to come with a clear idea of what you'd like to achieve. Think about your aesthetic goals and be ready to discuss your medical history, including any past surgeries, current health conditions, and medications or supplements you are taking. Some patients find it useful to bring photos that represent their goals, which can be a great starting point for discussion.",
  },
  {
    question: "Is the consultation confidential?",
    answer:
      "Absolutely. Patient privacy is of the utmost importance to us. Your consultation and all subsequent records are handled with the strictest confidentiality in our Andheri, Mumbai clinic.",
  },
  {
    question: "Is there a fee for the initial consultation?",
    answer:
      "Yes, there is a nominal fee for the initial in-depth consultation with Dr. Kunal Sayani. This covers the comprehensive assessment and the valuable, personalized expert advice you will receive. Please contact our clinic for the current fee structure.",
  },
  {
    question: "What are Dr. Kunal Sayani's qualifications and experience?",
    answer:
      "Dr. Kunal Sayani is a board-certified Plastic, Reconstructive, and Aesthetic Surgeon with extensive training and experience. He holds an M.Ch. in Plastic & Reconstructive Surgery and Doctorate of National Board (DrNB) from prestigious institutions and is a member of several national and international surgical associations. He is dedicated to staying at the forefront of the latest, safest, and most effective surgical techniques.",
  },
  {
    question: "Why is choosing a board-certified plastic surgeon so important?",
    answer:
      "Board certification is the gold standard in plastic surgery. It signifies that the surgeon has not only completed medical school but has also undergone years of rigorous, specialized training in plastic surgery and has passed comprehensive written and oral exams. Choosing a board-certified surgeon like Dr. Sayani ensures your procedure is performed by a qualified expert committed to the highest standards of safety and ethics.",
  },
  {
    question: "How do you ensure patient safety?",
    answer:
      "Patient safety is our number one priority. This begins with a thorough pre-operative evaluation to ensure you are a healthy candidate for surgery. We use advanced surgical techniques, work with experienced anesthesiologists, and provide comprehensive post-operative care and monitoring to minimize risks and ensure a smooth recovery.",
  },
  {
    question: "What is the difference between cosmetic and reconstructive surgery?",
    answer:
      "Cosmetic (or aesthetic) surgery is performed to enhance the appearance of normal body structures, improving self-esteem and confidence. Examples include facelifts, liposuction, and breast augmentation. Reconstructive surgery is performed to correct abnormalities caused by birth defects, trauma, or medical conditions, with the primary goal of improving function and approximating a normal appearance. Dr. Kunal Sayani is an expert in both fields.",
  },
  {
    question: "How do I know which procedure is right for me?",
    answer:
      "The right procedure for you depends entirely on your unique anatomy, skin quality, and aesthetic goals. During your consultation, Dr. Sayani will assess these factors and recommend the most suitable surgical or non-surgical options to help you achieve the results you desire.",
  },
  {
    question: "Will I have noticeable scars?",
    answer:
      "While any surgery that involves an incision will result in a scar, Dr. Kunal Sayani is an expert at minimizing their appearance. He meticulously places incisions in natural creases and hidden areas (like within the hairline or around the ear for a facelift). He also uses advanced suturing techniques and provides detailed aftercare instructions to help your scars heal and fade to be as inconspicuous as possible over time.",
  },
  {
    question: "Are non-surgical treatments like Botox® and fillers effective?",
    answer:
      "Yes, non-surgical treatments are excellent for addressing specific concerns like dynamic wrinkles (Botox®) and volume loss (dermal fillers). They offer great results with minimal to no downtime. However, their effects are temporary. For more significant concerns like sagging skin and jowls, a surgical procedure like a facelift often provides a more dramatic and long-lasting solution. Dr. Sayani can help you decide which approach is best for you.",
  },
  {
    question: "What is the recovery process like?",
    answer:
      "Recovery varies significantly depending on the procedure. For non-surgical treatments, you can often return to daily activities immediately. For surgical procedures, you will have a specific recovery timeline. This typically involves a period of rest, managing swelling and bruising, and wearing compression garments. Dr. Sayani and his team will provide you with detailed post-operative instructions and will be available to support you throughout your recovery.",
  },
  {
    question: "How long will it be until I see the final results?",
    answer:
      "You will notice a change immediately after surgery, but this will be obscured by swelling and bruising. As these subside over the following weeks, your results will become more apparent. However, the final, settled result of most surgical procedures can take anywhere from 6 months to a year to fully manifest as all the tissues heal and settle into place.",
  },
  {
    question: "Are the results of aesthetic surgery permanent?",
    answer:
      "The results of surgical procedures like rhinoplasty or breast augmentation are designed to be very long-lasting. Rejuvenation procedures like a facelift 'turn back the clock,' but they don't stop the natural aging process. However, you will always look younger than you would have without the surgery. Maintaining a healthy lifestyle is key to preserving your results for as long as possible.",
  },
  {
    question: "How much does aesthetic surgery cost?",
    answer:
      "The cost of surgery is based on several factors, including the specific procedure, the complexity and duration of the surgery, anesthesia fees, and facility costs. After your consultation with Dr. Kunal Sayani, you will be provided with a detailed and transparent quote that covers all aspects of your planned procedure.",
  },
  {
    question: "Does health insurance cover cosmetic surgery?",
    answer:
      "Generally, health insurance does not cover procedures that are performed purely for cosmetic reasons. However, if a procedure is deemed medically necessary for reconstructive purposes (such as breast reconstruction after a mastectomy or nose surgery to improve breathing), some or all of the cost may be covered. It's best to check with your insurance provider.",
  },
  {
    question: "Myth or Fact? Plastic surgery always looks fake and unnatural.",
    answer:
      "Fact: This is a myth. The goal of modern aesthetic surgery, as practiced by skilled surgeons like Dr. Kunal Sayani, is to create natural-looking enhancements that restore balance and harmony. The 'overdone' look is often the result of outdated techniques or an inexperienced surgeon.",
  },
  {
    question: "Myth or Fact? Aesthetic surgery is only for women.",
    answer:
      "Fact: This is a myth. A growing number of men are seeking aesthetic surgery to enhance their appearance and confidence. Popular procedures for men include rhinoplasty, hair transplantation, gynecomastia (male breast reduction), and facelifts, all of which are tailored to preserve and enhance masculine features.",
  },
  {
    question: "Myth or Fact? Liposuction is a tool for weight loss.",
    answer:
      "Fact: This is a myth. Liposuction is a body contouring procedure, not a weight-loss solution. It is ideal for removing stubborn pockets of fat that are resistant to diet and exercise in individuals who are already at or near their ideal weight.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#10217D]">
        Frequently Asked Questions
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
                <span className="text-lg font-semibold text-[#000000]">
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
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}