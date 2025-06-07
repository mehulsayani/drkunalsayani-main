import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Affiliations() {
  const affiliations = [
    "Criticare Hospital Juhu & Andheri East",
    "Sujay Hospital, Juhu",
    "KLS Hospital, Irla, Vile Parle",
    "Irla Nursing Home",
    "AllCure Hospital, Jogeshwari",
    "Gem Hospital, Kandivali",
    "Xenon Hospital, Borivali",
    "Trinity Hospital, Borivali",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full mx-auto px-4 max-w-[1100px]">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Doctor Image */}
          <div className="">
            <Image
              src="/images/aboutdrkunalsayani/affiliation.jpg"
              alt="Dr. Kunal Sayani"
              width={400}
              height={500}
              className="rounded-xl shadow-xl w-[70rem] object-cover"
              priority // optional, for faster loading if important image
            />
          </div>

          {/* Affiliations Content */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#10217D] mb-4 max-lg:text-center font-[Noto_Sans]">
              Affiliated with Leading Hospitals Across Mumbai
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base max-lg:text-center">
              Dr. Sayani is affiliated with several reputed hospitals across Mumbai, reflecting his commitment to excellence and patient care.
            </p>

            <ul className="space-y-3">
              {affiliations.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
