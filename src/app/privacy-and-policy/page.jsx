"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-[10rem] max-lg:pt-[5rem] py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#10217D]">
         Disclaimer: Plastic & Cosmetic Surgery
      </h1>
      <p className="mb-4">
        <strong>Dr. Kunal Sayani – Board-Certified Plastic & Cosmetic Surgeon</strong>
      </p>
      <p className="mb-6">
        The information presented on this website is intended solely for general
        informational and educational purposes. It does not replace personalized
        medical consultation, diagnosis, or treatment by a licensed professional.
      </p>

      <h2 className="text-2xl font-semibold text-black mb-4">Important Notes for Visitors:</h2>
      <ul className="list-disc ml-6 space-y-4 mb-6">
        <li>
          <strong>Individual Results Will Vary:</strong> Each person’s anatomy, healing ability,
          and aesthetic goals are different. Therefore, outcomes from procedures like rhinoplasty,
          liposuction, breast augmentation, PRP/GFC, or facial aesthetics will vary between individuals.
          No guarantees of specific results are made.
        </li>
        <li>
          <strong>No Substitute for Medical Advice:</strong> The content on this site, including
          before-and-after images, testimonials, and treatment descriptions, is not intended to diagnose
          or treat any condition. It is essential to consult directly with Dr. Kunal Sayani for expert
          evaluation and guidance.
        </li>
        <li>
          <strong>Consultation Is Essential:</strong> All potential patients are encouraged to book a
          consultation with Dr. Sayani to discuss personal goals, medical history, suitability for
          treatment, risks, and expected outcomes before proceeding with any surgical or non-surgical
          procedures.
        </li>
        <li>
          <strong>Risks and Limitations:</strong> All cosmetic and plastic surgeries carry inherent
          risks such as infection, bruising, scarring, asymmetry, anesthesia-related complications, and
          dissatisfaction with results. These will be fully discussed during the consultation.
        </li>
        <li>
          <strong>Visual Content Disclaimer:</strong> Photographs, videos, or testimonials displayed
          on this site are used with patient consent and are intended for illustrative purposes only.
          They do not guarantee that you will have identical results.
        </li>
        <li>
          <strong>Post-Surgery Care:</strong> Recovery instructions and post-operative care plans will
          be provided for all patients. Following them closely is essential for optimal healing and
          outcome.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-black mb-4">Privacy Commitment:</h2>
      <p className="mb-6">
        Dr. Kunal Sayani and his team are committed to maintaining patient privacy and confidentiality
        in accordance with medical ethics and applicable data protection laws.
      </p>

      <p className="mb-2">
        If you are considering a procedure, we strongly encourage you to schedule a consultation with
        Dr. Kunal Sayani to receive professional, personalized advice.
      </p>
      <p className="font-medium">
        For appointments or further inquiries, please visit the{" "}
        <a
          href="/book-appointment"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          Book Appointment
        </a>{" "}
        page.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
