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
            Who is a Good Candidate <br /> for Otoplasty?
          </h2>
          <p className="text-gray-700 mb-6">
            Otoplasty can be performed on both children and adults. Ideal
            candidates generally include:
          </p>

          <ul className="space-y-3 text-gray-800">
            {[
              `Children (typically age 5 and older): By this age, the ear cartilage is stable enough for
correction, and undergoing the procedure early can help a child avoid potential teasing
or self-consciousness.`,
              `Teenagers and Adults: There is no upper age limit for Otoplasty. Healthy individuals of
any age who are bothered by the appearance of their ears can be candidates.
`,
              `Individuals in good general health: Without active ear infections or serious underlying
medical conditions that could impair healing.`,
              `Non-smokers or those willing to quit: Smoking can significantly hinder the healing
process.`,
              `Individuals with realistic expectations: Understanding what Otoplasty can and cannot
achieve is crucial for a satisfactory outcome. Dr. Kunal Sayani will discuss this thoroughly
during your consultation.`,
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
