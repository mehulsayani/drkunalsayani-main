"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a Thread Lift?",
    answer:
      "A Thread Lift is a minimally invasive cosmetic procedure that uses dissolvable sutures (threads) inserted under the skin to lift and tighten sagging facial and neck tissues, providing a more youthful and contoured appearance. The threads also stimulate collagen production.",
  },
  {
    question: "How does a Thread Lift work?",
    answer:
      "The threads have tiny barbs or cones that grip the skin and underlying tissues, allowing them to be gently pulled upwards to create an immediate lifting effect. Over time, the threads dissolve, but their presence stimulates your body's natural collagen production, providing long-term skin tightening and rejuvenation.",
  },
  {
    question: "Who is a good candidate for a Thread Lift?",
    answer:
      "Ideal candidates are typically individuals in their 30s to 50s who have mild to moderate facial sagging, good skin elasticity, and realistic expectations. They are often looking for a noticeable lift but are not ready for a surgical facelift. Dr. Kunal Sayani will assess your suitability during a detailed consultation.",
  },
  {
    question: "What areas can be treated with a Thread Lift?",
    answer:
      "Commonly treated areas include the mid-face (cheeks), jowls, jawline, eyebrows, and neck. It can effectively improve mild sagging, redefine contours, and soften lines.",
  },
  {
    question: "What types of threads does Dr. Kunal Sayani use?",
    answer:
      "Dr. Kunal Sayani uses various types of medical-grade, dissolvable threads, such as PDO (Polydioxanone), PLLA (Poly-L-Lactic Acid), and PCA (Polycaprolactone), chosen based on your specific needs for lift, collagen stimulation, and longevity.",
  },
  {
    question: "Is a Thread Lift painful?",
    answer:
      "The procedure is performed under local anesthesia to numb the treated areas, so you should feel minimal to no pain during the insertion of the threads. You may experience some mild pressure or pulling sensations. Any post-procedure discomfort is typically manageable with over-the-counter pain relievers.",
  },
  {
    question: "How long does the Thread Lift procedure take?",
    answer:
      "A Thread Lift is relatively quick, usually taking between 30 minutes to an hour, depending on the number of threads used and the areas being treated.",
  },
  {
    question: "When will I see results from a Thread Lift?",
    answer:
      "You will see an immediate lifting effect right after the procedure. The final results, including the benefits of collagen stimulation, will gradually become more apparent over 2-3 months as swelling subsides and your body produces new collagen.",
  },
  {
    question: "How long do Thread Lift results last?",
    answer:
      "The results of a Thread Lift typically last from 1 to 2 years, depending on the type of threads used, individual skin characteristics, and lifestyle factors. The threads themselves dissolve over 6-9 months, but the collagen stimulation continues for longer.",
  },
  {
    question: "Are the results of a Thread Lift permanent?",
    answer:
      "No, a Thread Lift is not a permanent solution, as the threads are dissolvable, and the natural aging process continues. However, the procedure provides a long-lasting improvement and can be repeated to maintain results.",
  },
  {
    question: "Will a Thread Lift replace a surgical facelift?",
    answer:
      "No, a Thread Lift is not a replacement for a surgical facelift. It is a less invasive alternative for individuals with mild to moderate sagging. For significant skin laxity or dramatic lifting, a surgical facelift may be more appropriate. Dr. Kunal Sayani will help you determine the best option for your needs.",
  },
  {
    question: "What is the downtime after a Thread Lift?",
    answer:
      "Downtime is minimal. Most patients can return to light activities and work within a few days. You might experience some swelling, bruising, or tenderness for about a week.",
  },
  {
    question: "Can I resume exercise after a Thread Lift?",
    answer:
      "You should avoid strenuous exercise, heavy lifting, and activities that involve significant facial movement for at least 1-2 weeks. Light walking is generally fine after the first few days.",
  },
  {
    question: "What should I avoid after a Thread Lift?",
    answer:
      "Avoid rubbing, massaging, or applying pressure to the treated areas. Limit extreme facial expressions, dental work that requires wide mouth opening, and sleeping on your side or stomach for the first few weeks. Dr. Kunal Sayani will provide a detailed list.",
  },
  {
    question: "Will I have visible scars?",
    answer:
      "The entry points for the threads are very small (tiny needle punctures) and usually heal without visible scarring. They are typically discreetly placed within the hairline or natural folds.",
  },
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
    question: "Myth: Thread Lifts are only for very elderly people.",
    answer:
      "Fact: No, this is a myth. While Thread Lifts can benefit older individuals with moderate laxity, they are often ideal for younger patients (30s-50s) who are experiencing early signs of sagging and want to achieve a subtle lift and prevent further aging without invasive surgery. Dr. Kunal Sayani customizes the treatment for various age groups.",
  },
  {
    question: "Myth: Thread Lifts leave you looking 'pulled' or unnatural.",
    answer:
      "Fact: When performed by a skilled aesthetic surgeon like Dr. Kunal Sayani, the goal is to achieve natural-looking rejuvenation. Dr. Sayani meticulously places the threads to lift and redefine contours subtly, enhancing your natural beauty without creating an 'over-pulled' or artificial appearance.",
  },
  {
    question: "Myth: Thread Lifts are very painful.",
    answer:
      "Fact: This is false. The procedure is performed under local anesthesia, ensuring that you feel minimal discomfort during the actual thread insertion. Any post-procedure soreness is usually mild and easily managed with over-the-counter pain relievers.",
  },
  {
    question: "Myth: Thread Lifts are a permanent solution like a surgical facelift.",
    answer:
      "Fact: Thread Lifts are not permanent. The threads are dissolvable, and while they stimulate long-term collagen production, the lifting effect typically lasts 1-2 years. A surgical facelift offers more dramatic and longer-lasting results for significant sagging.",
  },
  {
    question: "Myth: The threads will break or snap inside my face.",
    answer:
      "Fact: Modern aesthetic threads are strong and designed to withstand normal facial movements. While rare, threads can sometimes shift if proper post-procedure instructions are not followed, or if excessive force is applied to the face. Dr. Kunal Sayani ensures correct thread placement and provides clear aftercare guidance.",
  },
  {
    question: "Myth: Thread Lifts are dangerous and carry high risks.",
    answer:
      "Fact: When performed by a qualified and experienced aesthetic surgeon like Dr. Kunal Sayani in a sterile environment, a Thread Lift is generally a very safe procedure. Minor side effects like swelling and bruising are common and temporary. Serious complications are rare.",
  },
  {
    question: "Myth: Thread Lifts are only for jowls.",
    answer:
      "Fact: While effective for jowls and jawline definition, Thread Lifts are versatile. They can also be used to lift eyebrows, improve sagging in the mid-face/cheeks, and tighten loose skin on the neck. Dr. Kunal Sayani will explain all the areas a Thread Lift can address.",
  },
  {
    question: "Myth: You will see the threads under your skin.",
    answer:
      "Fact: No, with proper technique, the threads are inserted into the subcutaneous fat layer beneath the skin and are not visible externally. In very rare cases of extremely thin skin or improper placement, a thread might be palpable or subtly visible, but this is avoided by skilled practitioners like Dr. Kunal Sayani.",
  },
  {
    question: "Myth: Anyone can perform a Thread Lift.",
    answer:
      "Fact: Absolutely not. A Thread Lift is a medical procedure that requires extensive knowledge of facial anatomy, precise understanding of skin laxity, and advanced injection techniques. It should only be performed by highly trained and experienced medical professionals such as aesthetic surgeons (Dr. Kunal Sayani), or dermatologists with specific training in this area. Incorrect technique can lead to poor results or complications.",
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
            src={"/images/services/face/Thread.jpg"}
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