"use client";
import React from "react";

export default function Page() {
  const services = [
    {
      title: "Face Cosmetology",
      items: [
        { name: "Face cleaning", price: "$100" },
        { name: "Face lifting", price: "$950" },
        { name: "Skin relief alignment", price: "$200" },
        { name: "Laser skin rejuvenation", price: "$320" },
        { name: "Depigmentation therapy", price: "$320" },
        { name: "Regenerative therapy", price: "$320" },
        { name: "Acne therapy", price: "$200" },
        { name: "Post-acne therapy", price: "$200" },
      ],
    },
    {
      title: "Injections",
      items: [
        { name: "Contour plastic lips", price: "$250-350" },
        { name: "Complex face modeling", price: "$600-800" },
        { name: "Biorevitalization", price: "$150-300" },
        { name: "Mesotherapy for the eye area", price: "$150" },
        { name: "Lipolitics (fat cell dissolution)", price: "$350" },
        { name: "Venus Rings (complex neck rejuvenation)", price: "$300" },
        { name: "Mesotherapy", price: "$150" },
      ],
    },
    {
      title: "Botulinum Therapy (Botox / Dysport)",
      items: [
        { name: "Forehead area correction", price: "$200" },
        { name: "Correction of the brow area", price: "$150" },
        { name: "Eye area correction", price: "$200" },
        { name: "Correction of the nose zone", price: "$100" },
        { name: "Chin area correction", price: "$70" },
      ],
      showMore: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1aaebc10] py-16 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Treatment & Procedure Pricing
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          We keep our pricing transparent and affordable. Each treatment is priced with your specific needs in mind. Our rates are the same for every patient worldwide.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...services, ...services].map((section, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#13547A] mb-4">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center text-sm text-gray-700"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#13547A] text-lg">•</span>
                    {item.name}
                  </span>
                  <span className="font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
            {section.showMore && (
              <div className="mt-5 text-right text-sm text-[#13547A] font-medium hover:underline cursor-pointer">
                VIEW MORE →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto text-gray-600 text-base space-y-4 leading-relaxed">
        <p>
          All prices include hospital admission, OT charges, surgeon’s fees, medications during the stay, and required implants. Post-operation consultations are also included until suture removal.
        </p>
        <p>
          Additional charges may apply for compression garments and postoperative investigations after suture removal.
        </p>
        <p>
          Payments are accepted in Indian currency via cheque, debit, or credit cards (including American Express).
        </p>
        <p>
          International patients are requested to confirm their surgery by paying a deposit of USD 400.
        </p>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/book-appointment"
          className="inline-block bg-[#1AAEBC] text-white font-medium text-base px-8 py-3 rounded-full shadow-md hover:bg-[#1AAEBC] transition-all duration-300"
        >
          Book Your Surgery
        </a>
      </div>
    </div>
  );
}
