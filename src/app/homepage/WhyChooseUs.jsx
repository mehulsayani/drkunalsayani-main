import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define five images for cycling
const images = [
  
  "/images/homepage/WhyChooseUs/equipment.jpg",
  "/images/homepage/WhyChooseUs/satisfaction.jpg",
  "/images/homepage/WhyChooseUs/save_money.jpg",
  "/images/homepage/WhyChooseUs/safety.jpg",
  "/images/homepage/WhyChooseUs/doctors.jpg",
];

// Corresponding labels for dots (for accessibility)
const labels = [
  "Cutting Edge Technologies And Facilities",
  "100% Patient Satisfaction Rate",
  "Value For Money",
  "Safety And Ethics",
  "Best Doctors in Hospital",
];

export default function WhyChooseUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle dot click and cycle to next image
  const handleDotClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatic image cycling with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    // Cleanup interval on component unmount or click
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="flex flex-col justify-center items-center py-38">
      <h2 className="text-2xl font-bold text-blue-800 mb-28">
        — Why Choose Us? —
      </h2>

      <div className="relative w-[30rem] h-[30rem] mx-auto group">
        {/* Main Circle */}
        <div className="w-full h-full rounded-full border-1  border-dashed flex justify-center items-center">
          <div className="w-[90%] h-[90%] rounded-full relative overflow-hidden shadow-[0px_0px_5px_lightgray]">
            <Image
              src={images[currentImageIndex]}
              fill
              alt={labels[currentImageIndex]}
              className="object-contain rounded-full absolute top-0"
            />
          </div>
        </div>

        {/* Dots on the circle */}
        <div
          className="flex text-center justify-around gap-2 items-center flex-col absolute -top-[14%] cursor-pointer left-[50%] transform -translate-x-1/2 font-[inter]"
        >
          <p className={`${currentImageIndex === 0 ? "text-blue-500" : "text-black"}`}>
            Cutting Edge Technologies <br /> And Facilities
          </p>
          
          <div
            className={`w-6 h-6 rounded-full ${currentImageIndex === 0 ? "bg-blue-500" : "bg-gray-500"}`}
            onClick={handleDotClick}
          />
        </div>

        <div
          className="flex text-center justify-around gap-6 items-start absolute top-[19%] -left-[7%] transform -translate-x-1/2 font-[inter]"
        >
          <div className={`${currentImageIndex === 1 ? "text-blue-500" : "text-black"}`}>
            <p className="font-bold text-right">
              98% Patient <br /> Satisfaction Rate
            </p>
            
          </div>
          <div
            className={`w-6 h-6 rounded-full ${currentImageIndex === 1 ? "bg-blue-500" : "bg-gray-500"}`}
            onClick={handleDotClick}
          />
        </div>

        <div
          className="flex text-center justify-around gap-5 items-start absolute top-[19%] left-[105.5%] transform -translate-x-1/2 font-[inter]"
        >
          <div
            className={`w-6 h-6 rounded-full ${currentImageIndex === 2 ? "bg-blue-500" : "bg-gray-500"}`}
            onClick={handleDotClick}
          />
          <div className={`${currentImageIndex === 2 ? "text-blue-500" : "text-black"}`}>
            <p className="font-bold text-left w-28">
              Value For <br /> Money
            </p>
            
          </div>
        </div>

        <div
          className="flex text-center justify-around gap-5 items-start absolute top-[75%] -left-[4%] transform -translate-x-1/2 font-[inter]"
        >
          <div className={`${currentImageIndex === 3 ? "text-blue-500" : "text-black"}`}>
            <p className="font-bold text-right">
              Safety And <br /> Ethics
            </p>
            
          </div>
          <div
            className={`w-6 h-6 rounded-full ${currentImageIndex === 3 ? "bg-blue-500" : "bg-gray-500"}`}
            onClick={handleDotClick}
          />
        </div>

        <div
          className="flex text-center justify-around gap-2 items-start absolute top-[75%] left-[104%] transform -translate-x-1/2 font-[inter]"
        >
          <div
            className={`w-6 h-6 rounded-full ${currentImageIndex === 4 ? "bg-blue-500" : "bg-gray-500"}`}
            onClick={handleDotClick}
          />
          <div className={`${currentImageIndex === 4 ? "text-blue-500" : "text-black"}`}>
            <p className="font-bold text-left w-28">
              Best Doctors <br /> in Hospital
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}