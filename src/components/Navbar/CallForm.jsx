"use client";

import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosCall } from "react-icons/io";


export default function CallForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsOpen(false);
    setFormData({ name: "", number: "", email: "" });
  };

  return (
    <div className="relative z-10 flex ">
      <div className="flex justify-center items-center flex-col group">
        <button
          onClick={() => setIsOpen(true)}
          className="border-[1.5px] border-[#1AAEBC] text-[#1AAEBC] hover:text-white hover:bg-[#1AAEBC] p-1 text-2xl rounded-lg transition"
        >
          <IoIosCall />
        </button>
        <div className="group-hover:block top-12 hidden absolute">
          <p className="w-40 text-center rounded-full bg-white py-2 px-4 shadow-[0px_0px_10px_lightgray] z-20">
            Get a call request
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#136f7783] bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-3xl bg-gray-200 rounded hover:bg-gray-300 flex justify-center items-center"
            >
              <MdClose />
            </button>
            <h2 className="text-center text-2xl font-bold text-[#1A1A1A] mb-6">
              Request Call Back
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F25022] py-1 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  required
                  placeholder="Enter Your Mobile Number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F25022] py-1 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F25022] py-1 placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1AAEBC] text-white py-2 rounded-full text-lg hover:bg-[#1a7bbc] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
