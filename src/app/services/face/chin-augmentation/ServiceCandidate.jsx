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
            Why Consider Chin Augmentation with <br /> Dr. Kunal Sayani in
            Mumbai?
          </h2>
          <p className="text-gray-700 mb-6">
            Discover how Chin Augmentation, expertly performed by Dr. Kunal
            Sayani, can unlock a more balanced, confident, and harmonious
            appearance.
          </p>

          <ul className="space-y-3 text-gray-800">
            {[
              `Facial Balance: Achieve a more proportionate and harmonious facial profile by
addressing a recessed or weak chin.`,
              `Enhanced Jawline Definition: A stronger chin can significantly improve the definition of
your jawline and neck.`,
              `Improved Profile: Create a more aesthetically pleasing side profile, often making the
nose appear less prominent.`,
              `Increased Confidence: Feel more confident in your appearance with a balanced and
defined lower face.`,
              `Permanent Solution (Implants): Surgical chin implants offer a long-lasting and often
permanent improvement to chin projection and shape.`,
              `Natural-Looking Results: Dr. Kunal Sayani meticulously selects and places implants (or
fillers) to ensure your results are subtle, refined, and blend seamlessly with your natural
facial structure.`,
              `Expert Surgical Skill: As an aesthetic surgeon, Dr. Kunal Sayani possesses specialized
expertise in facial bone and soft tissue manipulation, crucial for precise and safe chin
augmentation.`,
              `Personalized Treatment Plan: Dr. Kunal Sayani provides a comprehensive consultation to
understand your specific concerns and aesthetic goals, tailoring a Chin Augmentation
plan uniquely for you.`,
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
