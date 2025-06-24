"use client";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const pricingData = [
  { sr: 1, procedure: "Breast Implants", charges: "₹1,50,000 - ₹1,95,000" },
  { sr: 2, procedure: "Breast Reduction", charges: "₹2,00,000 - ₹3,25,000" },
  { sr: 3, procedure: "Breast Lift (Mastopexy)", charges: "₹1,35,000 - ₹2,10,000" },
  { sr: 4, procedure: "Liposuction for Gynecomastia", charges: "₹75,000 - ₹1,75,000" },
  { sr: 5, procedure: "Liposuction for Thighs or Arms (Bilateral)", charges: "₹1,10,000 - ₹2,15,000" },
  { sr: 6, procedure: "Liposuction for Abdomen & Flanks (Waistline)", charges: "₹1,20,000 - ₹2,25,000" },
  { sr: 7, procedure: "Fat Grafting for Breast Augmentation", charges: "₹95,000 - ₹1,45,000" },
  { sr: 8, procedure: "Facial Fat Grafting – for rejuvenation", charges: "₹65,000 - ₹1,40,000" },
  { sr: 9, procedure: "Labia Majora Fat Grafting", charges: "₹50,000 - ₹85,000" },
  { sr: 10, procedure: "Tummy Tuck (Abdominoplasty)", charges: "₹2,50,000 - ₹4,50,000" },
  { sr: 11, procedure: "Blepharoplasty (Upper)", charges: "₹45,000 - ₹70,000" },
  { sr: 12, procedure: "Blepharoplasty (Lower)", charges: "₹65,000 - ₹1,25,000" },
  { sr: 13, procedure: "Implant Rhinoplasty (Silicon / Medpore)", charges: "₹1,25,000 - ₹1,95,000" },
  { sr: 14, procedure: "Open Rhinoplasty", charges: "₹1,45,000 - ₹2,25,000" },
  { sr: 15, procedure: "Hymenoplasty", charges: "₹40,000 - ₹75,000" },
  { sr: 16, procedure: "Lip Reduction", charges: "₹35,000 - ₹60,000" },
  { sr: 17, procedure: "Chin Augmentation (Implant/Osseous)", charges: "₹1,25,000 - ₹2,45,000" },
  { sr: 18, procedure: "HA Filler (per ml)", charges: "₹25,000 - ₹30,000" },
  { sr: 19, procedure: "Botulinum toxin (per unit price)", charges: "₹350 - ₹400" },
  { sr: 20, procedure: "Scar Revision / Local Anaesthesia Surgery", charges: "₹25,000 - ₹35,000" },
  { sr: 21, procedure: "Otoplasty (Ear Surgery)", charges: "₹75,000 - ₹1,95,000" },
  { sr: 22, procedure: "Buccal Fat Pad Removal", charges: "₹35,000 - ₹65,000" },
  { sr: 23, procedure: "Dimple Creation", charges: "₹30,000 - ₹60,000" },
  { sr: 24, procedure: "Threadlift (Includes cost of threads)", charges: "₹30,000 - ₹1,25,000" },
  { sr: 25, procedure: "Jawline Enhancement (Non-surgical)", charges: "₹25,000 - ₹85,000" },
  { sr: 26, procedure: "Hair Transplant (per graft)", charges: "₹45 - ₹75" },
  { sr: 27, procedure: "PRP / GCF / Exosomes / SVF for Hair Growth", charges: "₹7,500 - ₹35,000" },
  { sr: 28, procedure: "Consultation / Tele Consult Fees", charges: "₹2,000" },
];

const notes = [
  "Charges mentioned above are approximate.",
  "GST 18% extra applicable for all cosmetic surgical procedures.",
  "Charges of hospital stay, anaesthesia, assistant surgeon, and medicines are not included.",
  "If multiple procedures are required, then charges may vary.",
  "Charges may vary based on clinical condition & patient requirements.",
  "Charges of implants & case-specific consumables are not mentioned and depend on patient’s choice.",
];

const Page = () => {
  return (
    <div className="p-4 px-20 max-lg:px-4 bg-gradient-to-br from-white to-[#f6f9fc] text-gray-800 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#10217D] tracking-tight">
        Surgical Treatments – Packages
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-lg ring-1 ring-gray-200 ">
        <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
          <thead className="bg-[#1aaebc3d] sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-black">Sr. No.</th>
              <th className="px-4 py-3 text-left font-semibold text-black">Procedure</th>
              <th className="px-4 py-3 text-left font-semibold text-black">Charges (INR)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {pricingData.map((item, index) => (
              <tr
                key={item.sr}
                className={`hover:bg-blue-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-4 py-3 text-gray-700 text-left">{item.sr}.</td>
                <td className="px-4 py-3 text-gray-800">{item.procedure}</td>
                <td className="px-4 py-3 text-gray-800 text-left">{item.charges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 bg-[#f0f9ff] border-l-4 border-[#1aaebc] p-6 rounded-md shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-[#0f6d78]">
          <FaInfoCircle className="text-lg" />
          <h2 className="font-semibold text-lg">Important Notes:</h2>
        </div>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1 pl-2">
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
