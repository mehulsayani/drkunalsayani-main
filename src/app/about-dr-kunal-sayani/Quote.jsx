"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quote() {
  return (
    <div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-blue-50 px-6 py-16 flex justify-center items-center rounded-3xl shadow-md mx-auto mt-10"
    >
      <div className="flex flex-col items-center gap-4 max-w-[600px]">
        <QuoteIcon className="w-12 h-12 text-blue-500 mt-1" />
        <p className="text-2xl font-medium text-gray-700 italic text-center">
          “He firmly believes aesthetic surgery isn’t a luxury — it’s a path to
          restored confidence and improved quality of life.”
        </p>
        <div className="flex items-center gap-2 sm:gap-4 max-lg:hidden">
          {/* <CallForm /> */}
          <a
            href="/book-appointment"
            className="bg-[#1aaebcaf] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-medium hover:bg-[#148d98] transition-colors duration-200"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
