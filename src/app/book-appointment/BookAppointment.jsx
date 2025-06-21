// /app/components/BookAppointment.jsx
"use client";

import React, { useState } from "react";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [purpose, setPurpose] = useState("Tummy Tuck (Abdominoplasty)");
  const [visitType, setVisitType] = useState("clinic");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const purposeOptions = [
    {
      title: "Hair",
      items: [
        "Hair Transplant",
        "Hair Restoration PRP GFC Exosomes",
        "Nano fat injection (SVC) for Hair Growth",
      ],
    },
    {
      title: "Face",
      items: [
        "Rhinoplasty (Nose job)",
        "Eyelid Surgery (Blepharoplasty)",
        "Prominent Ear Surgery (Otoplasty)",
        "Facelift",
        "Thread Lift Treatment",
        "Chin Augmentation",
        "Jawline Contouring",
        "Lip Lift (Lip job)",
        "Lipoma-Cysts-Scars",
      ],
    },
    {
      title: "Breast",
      items: [
        "Breast Augmentation",
        "Breast Lift (mastopexy) with Shaping",
        "Breast Reduction & Axillary Breasts Excision",
      ],
    },
    {
      title: "Body",
      items: [
        "Tummy Tuck (Abdominoplasty)",
        "Liposuction",
        "Buttock Augmentation (BBL)",
        "Fat Grafting",
      ],
    },
    {
      title: "Mommy Makeover",
      items: [
        "Post-Pregnancy Tummy Tuck (moms)",
        "Breast Lift & Augmentation after Pregnancy",
        "Genital Cosmetic Surgeries",
        "Mommy Makeover Package (custom combination of procedures)",
      ],
    },
    {
      title: "Non Surgical",
      items: [
        "Botox (wrinkles-anti-ageing)",
        "Dermal Fillers",
        "Laser Skin Rejuvenation",
        "Microneedling & PRP for Skin Rejuvenation",
        "Skin Tightening",
      ],
    },
    {
      title: "Men",
      items: [
        "Gynaecomastia",
        "Liposuction",
        "Hair Loss Treatment",
        "Hair Transplant",
        "Rhinoplasty (Nose job)",
        "Eyelid Surgery (Blepharoplasty)",
        "Prominent Ear Surgery (Otoplasty)",
        "Facelift",
        "Thread Lift Treatment",
        "Chin Augmentation",
        "Jawline Contouring",
      ],
    },
  ];

  const groupedTimeSlots = {
    Morning: ["09:00 am", "10:00 am", "11:00 am"],
    Afternoon: ["12:00 pm", "01:00 pm", "02:00 pm"],
    Evening: ["03:00 pm", "04:00 pm", "05:00 pm"],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    if (!email || !name || !phone || !selectedDate) {
      setStatus("Please fill in all required fields (Name, Email, Phone, Date).");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      name,
      email,
      phone,
      selectedDate,
      selectedTime,
      purpose,
      visitType: visitType === "clinic" ? "In-Person" : "Online",
      notes,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Appointment booked successfully! Confirmation email sent.");
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setSelectedDate("");
        setSelectedTime("10:00 am");
        setPurpose("Tummy Tuck (Abdominoplasty)");
        setVisitType("clinic");
        setNotes("");
      } else {
        setStatus(data.message || "Failed to book appointment.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-5xl">
        <div
          className="w-full mb-10 bg-gradient-to-r from-[#1a60bc] to-[#1AAEBC] text-white 
          py-6 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 shadow-lg 
          rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <p className="text-base sm:text-lg md:text-xl font-bold text-center sm:text-left tracking-tight">
            Get <span className="text-yellow-300">30% Off</span> On Your Consultation By Booking Online!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Inputs */}
          <div className="space-y-4">
            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                Select Date
              </label>
              <input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700 mb-2">
                Purpose
              </label>
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {purposeOptions.map((category) => (
                  <optgroup key={category.title} label={category.title}>
                    {category.items.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Visit Type */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Visit Type
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                value="clinic"
                checked={visitType === "clinic"}
                onChange={() => setVisitType("clinic")}
                name="visitType"
                className="focus:ring-blue-500"
              />
              Clinic Visit
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                value="online"
                checked={visitType === "online"}
                onChange={() => setVisitType("online")}
                name="visitType"
                className="focus:ring-blue-500"
              />
              Online Consultation
            </label>
          </div>
        </div>

        {/* Time Slots */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Select Time
          </label>
          {Object.entries(groupedTimeSlots).map(([period, slots]) => (
            <div key={period} className="mb-4">
              <h4 className="text-gray-600 font-medium mb-2">{period}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {slots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-lg border text-sm transition font-medium ${
                      selectedTime === time
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            placeholder="Additional notes or concerns (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            rows={3}
          />
        </div>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 text-center ${
              status.includes("successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}

        {/* Submit */}
        <button
          className="mt-8 w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={isSubmitting || !email || !name || !phone || !selectedDate}
        >
          {isSubmitting ? "Submitting..." : "Get Appointment"}
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;