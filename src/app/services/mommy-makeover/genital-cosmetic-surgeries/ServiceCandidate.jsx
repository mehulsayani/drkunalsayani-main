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
          {/* <h2 className="text-4xl font-bold max-lg:text-3xl font-notoSans text-[#10217D] leading-tight mb-4">
            Who is a Good Candidate <br /> for a Tummy Tuck?
          </h2> */}
          <p className="text-gray-700 mb-6">
            At our clinic, under the expert care of Dr. Kunal Sayani, we offer
            specialized procedures including:
          </p>

          <ul className="space-y-3 text-gray-800">
            {[
              "Labiaplasty: Reshaping or reducing the size of the labia minora (inner vaginal lips) or labia majora (outer vaginal lips) to alleviate discomfort, improve aesthetics, or address asymmetry.",
              "Clitoral Hood Reduction: Reducing excess tissue surrounding the clitoris to improve its exposure, reduce irritation, and enhance aesthetic balance. Often performed in conjunction with labiaplasty.",
              "Vaginoplasty: A surgical procedure aimed at tightening the vaginal canal, often sought by women experiencing vaginal laxity due to childbirth or aging, which can impact sexual satisfaction.",
              "Perineoplasty: Reshaping and reinforcing the perineum (the area between the vagina and anus), often to repair damage from childbirth or improve aesthetic appearance.",
              "Monsplasty (Mons Pubis Reduction): Reducing excess fatty tissue or skin on the mons pubis (the area above the pubic bone) to create a flatter, more contoured appearance.",
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
