"use client";

import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

const BookAppointment = () => {
  // State variables
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [purpose, setPurpose] = useState("Select Services");
  const [visitType, setVisitType] = useState("clinic");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);

  // Purpose options for the dropdown
  const purposeOptions = [
    {
      title: "Hair",
      items: [
        "Select Your Purpose",
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
        "Other Purpose",
      ],
    },
  ];

  // Time slots grouped by period
  const groupedTimeSlots = {
    Morning: ["09:00 am", "10:00 am", "11:00 am"],
    Afternoon: ["12:00 pm", "01:00 pm", "02:00 pm"],
    Evening: ["03:00 pm", "04:00 pm", "05:00 pm"],
  };

  // Flatten time slots for checking availability
  const allTimeSlots = Object.values(groupedTimeSlots).flat();

  // Debounced function to fetch booked times
  const checkAvailability = useCallback(
    debounce(async (date) => {
      if (!date) {
        setBookedTimes([]);
        return;
      }
      setIsLoadingTimes(true);
      try {
        const res = await fetch("/api/check-availability", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date }),
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Booked times:", data.bookedTimes); // Debug
        setBookedTimes(data.bookedTimes || []);
      } catch (error) {
        console.error("Error fetching availability:", error);
        setStatus(
          error.message.includes("HTTP error")
            ? `Failed to load available times (Server error: ${error.message}).`
            : "Failed to connect to server. Please check your connection and try again."
        );
      } finally {
        setIsLoadingTimes(false);
      }
    }, 500),
    []
  );

  // Fetch booked times when selectedDate changes
  useEffect(() => {
    checkAvailability(selectedDate);
  }, [selectedDate, checkAvailability]);

  // Reset selectedTime if it's booked
  useEffect(() => {
    if (bookedTimes.includes(selectedTime)) {
      const firstAvailableTime = allTimeSlots.find((time) => !bookedTimes.includes(time)) || "10:00 am";
      setSelectedTime(firstAvailableTime);
    }
  }, [bookedTimes, selectedTime, allTimeSlots]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    if (!email || !name || !phone || !selectedDate || !selectedTime) {
      setStatus("Please fill in all required fields (Name, Email, Phone, Date, Time).");
      setIsSubmitting(false);
      return;
    }

    if (bookedTimes.includes(selectedTime)) {
      setStatus("Selected time is already booked. Please choose another time.");
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
        setName("");
        setEmail("");
        setPhone("");
        setSelectedDate("");
        setSelectedTime("10:00 am");
        setPurpose("Select Services");
        setVisitType("clinic");
        setNotes("");
        // Re-fetch availability to reflect new booking
        await checkAvailability(selectedDate);
      } else {
        setStatus(data.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred while booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-5xl">
        {/* Promo Banner */}
        <div className="w-full mb-10 bg-gradient-to-r from-[#1a60bc] to-[#1AAEBC] text-white py-6 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <p className="text-base sm:text-lg md:text-xl font-bold text-center sm:text-left tracking-tight">
            Get <span className="text-yellow-300">30% Off</span> On Your Consultation By Booking Online!
          </p>
        </div>

        {/* Form Inputs */}
        <div className="flex gap-8">
          <div className="flex w-full gap-4 max-lg:flex-col">
            <div className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
                aria-label="Name"
              />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
                className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
                aria-label="Appointment Date"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
                aria-label="Email"
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
                aria-label="Phone Number"
              />
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="input px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                aria-label="Purpose of Visit"
              >
                {purposeOptions.map((group) => (
                  <optgroup key={group.title} label={group.title}>
                    {group.items.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <div className="mt-0">
                <label className="block text-sm font-semibold text-gray-700 mb-4 max-lg:mb-2">
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
                      aria-label="Clinic Visit"
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
                      aria-label="Online Consultation"
                    />
                    Online Consultation
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-4">Select Time</label>
          {isLoadingTimes ? (
            <p>Loading availability...</p>
          ) : bookedTimes.length === allTimeSlots.length ? (
            <p className="text-red-600">No time slots available for this date. Please select another date.</p>
          ) : (
            Object.entries(groupedTimeSlots).map(([period, slots]) => (
              <div key={period} className="mb-4">
                <h4 className="text-gray-600 font-medium mb-2">{period}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {slots.map((time) => {
                    const isBooked = bookedTimes.includes(time);
                    return (
                      <button
                        key={time}
                        onClick={() => !isBooked && setSelectedTime(time)}
                        disabled={isBooked}
                        aria-disabled={isBooked}
                        aria-label={`Select ${time} ${isBooked ? "(Booked)" : ""}`}
                        className={`px-4 py-2 rounded-lg border text-sm transition font-medium ${
                          isBooked
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : selectedTime === time
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notes */}
        <div>
          <textarea
            placeholder="Additional notes or concerns (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            rows={3}
            aria-label="Additional Notes"
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

        {/* Submit Button */}
        <button
          className="mt-8 w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={isSubmitting || !email || !name || !phone || !selectedDate || !selectedTime}
          aria-label="Submit Appointment"
        >
          {isSubmitting ? "Submitting..." : "Get Appointment"}
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;