import React from "react";
import { CheckCircle, ArrowUpRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Image from "next/image";

export default function ServiceCandidate() {
  return (
    <section className=" flex justify-center items-center my-8">
      <div className="flex w-full max-w-[1200px]">
        {/* Left Side - Image Section */}
        {/* <div className="flex gap-4 w-[50rem]">
        <Image
          width={1000}
          height={1000}
          src="/images/services/body/tummytuck/tummytuck.jpg"
          alt="procedure 1"
          className="rounded-3xl object-cover h-[400px] w-[300px] relative top-[10rem]"
        />
        <Image
          width={1000}
          height={1000}
          src="/images/services/body/tummytuck/tummytuck.jpg"
          alt="procedure 2"
          className="rounded-3xl object-cover h-[400px] w-[300px] relative right-[8rem]"
        />
        
      </div> */}

        {/* Right Side - Text Content */}
        <div className="flex flex-col w-full">
          {/* <span className="text-sm uppercase tracking-wider text-[#B15528] font-semibold flex items-center gap-2 mb-2">
          <span className="text-xl">❖</span> Why Chooce Us
        </span> */}
          <h2 className="text-4xl font-bold max-lg:text-3xl font-notoSans text-[#10217D] leading-tight mb-4">
            Why Choose Dermal Fillers with <br /> Dr. Kunal Sayani in Mumbai?
          </h2>
          <p className="text-gray-700 mb-6">
            Experience the transformative power of dermal fillers at Dr. Kunal
            Sayani's clinic, and rediscover a more youthful, vibrant, and
            confident you.
          </p>

          <ul className="space-y-3 text-gray-800">
            {[
              `Volume Restoration: Effectively replenishes lost volume in areas like cheeks, temples,
and under-eye hollows, reversing a tired or gaunt appearance.`,
              `Wrinkle Smoothing: Fills and softens static lines and creases, such as nasolabial folds
(smile lines) and marionette lines (lines from the corners of the mouth to the chin).`,
              `Facial Contouring & Enhancement: Adds definition to features like lips, chin, and jawline,
enhancing overall facial harmony and balance.`,
              `Non-Surgical & Minimally Invasive: Achieve significant aesthetic improvements without
the need for surgery, incisions, or extensive downtime.`,
              `Immediate Results: See a noticeable improvement in volume and smoothness
immediately after your treatment.
`,
              `Natural-Looking Outcomes: Dr. Kunal Sayani possesses a meticulous eye for detail and
artistry, ensuring that your results are subtle, balanced, and enhance your natural
beauty, avoiding an "overdone" look.
`,
              `Personalized Treatment: Dr. Kunal Sayani offers a comprehensive consultation to
understand your unique facial structure and aesthetic goals, tailoring a customized filler
plan specifically for you.`,
              `Advanced Techniques: Utilizes the latest injection techniques, including cannulas (blunttipped needles), to enhance safety and minimize bruising.`,
            ].map((item, index) => (
              <li key={index} className="flex gap-2">
                <span>
                  <CheckCircle className="text-[#1AAEBC] mt-1 w-5 h-5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div
            className="mt-8 w-[70%] max-lg:w-full bg-[#e2fdff] p-4 rounded-2xl 
             flex max-lg:flex-col items-center max-lg:items-center justify-between max-lg:gap-4 shadow-md"
          >
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-[#1AAEBC] text-4xl max-lg:hidden" />
              <div>
                <p className="text-sm max-lg:text-3xl max-lg:mb-4 font-bold text-[#10217D] max-lg:text-center">
                  Ready For Consultation?
                </p>
                <p className="text-md font-medium text-gray-800 max-lg:flex max-lg:justify-center max-lg:items-center">
                  <span>
                    <FaWhatsapp className="text-[#1AAEBC] text-xl hidden" />
                  </span>
                  +91 02246056767
                </p>
              </div>
            </div>
            <button
              className="flex items-center gap-2 bg-[#1AAEBC] text-white px-5 py-2 rounded-lg 
               font-medium hover:bg-[#148d98] transition"
            >
              Contact Us <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
