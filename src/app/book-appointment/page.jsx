"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [purpose, setPurpose] = useState("Tummy Tuck (Abdominoplasty)");
  const [visitType, setVisitType] = useState("clinic");

  const purposeOptions = [
    "Tummy Tuck (Abdominoplasty)",
    "Liposuction",
    "Facelift",
    "Rhinoplasty",
  ];

  const groupedTimeSlots = {
    Morning: ["09:00 am", "10:00 am", "11:00 am"],
    Afternoon: ["12:00 pm", "01:00 pm", "02:00 pm"],
    Evening: ["03:00 pm", "04:00 pm", "05:00 pm"],
  };

  const handleSubmit = () => {
    alert(`Appointment set for ${selectedDate.toDateString()} at ${selectedTime}
Name: ${name}
Email: ${email}
Phone: ${phone}
Purpose: ${purpose}
Visit Type: ${visitType === "clinic" ? "Clinic Visit" : "Online Consultation"}
Notes: ${notes}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-5xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
          Make an Appointment
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Date Picker */}
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              className="w-full"
            />
          </div>

          {/* Form Inputs */}
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <label className="block text-sm font-semibold text-gray-700 mb-2">Purpose</label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {purposeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {/* Visit Type */}
            <div className="flex flex-wrap gap-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="clinic"
                  checked={visitType === "clinic"}
                  onChange={() => setVisitType("clinic")}
                />
                Clinic Visit
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="online"
                  checked={visitType === "online"}
                  onChange={() => setVisitType("online")}
                />
                Online video consultation
              </label>
            </div>

            {/* Time Slot Selector */}
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Time</label>
            {Object.entries(groupedTimeSlots).map(([period, slots]) => (
              <div key={period} className="mb-2">
                <h4 className="text-gray-600 font-medium mb-1">{period}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {slots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
                        selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <textarea
              placeholder="Additional notes or concerns (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="mt-6 sm:mt-8 w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          onClick={handleSubmit}
          disabled={!email || !name || !phone}
        >
          Get Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
