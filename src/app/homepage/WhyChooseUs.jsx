import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define five images for cycling
const images = [
  "/images/homepage/WhyChooseUs/equipment.jpg",
  "/images/homepage/WhyChooseUs/save_money.jpg",
  
  "/images/homepage/WhyChooseUs/satisfaction.jpg",
  "/images/homepage/WhyChooseUs/doctors.jpg",
  
  "/images/homepage/WhyChooseUs/safety.jpg",
];

// Corresponding labels for dots (for accessibility)
const labels = [
  "Cutting Edge Technologies And Facilities",
  "100% Patient Satisfaction Rate",
  "Value For Money",
  "Safety And Ethics",
  "Trusted & Experienced Doctor",
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
    <div className="flex flex-col justify-center items-center overflow-hidden pt-10 relative">
        <Image src={'/images/homepage/hero/abstract1.png'} width={400} height={400} alt="" 
        className="absolute top-0 left-0 opacity-50 max-lg:w-40"/>
          <Image src={'/images/homepage/hero/abstract1.png'} width={400} height={400} alt="" 
          className="absolute top-0 right-0 -scale-x-100 opacity-50 max-lg:w-40"/>
      <h2 className="text-2xl font-bold text-blue-800 mb-28 relative bottom-10">
        — Why Choose Us? —
      </h2>
      <Image
        src={"/images/homepage/hero/logoimage.png"}
        alt=""
        width={1000}
        height={1000}
        className="absolute opacity-10 top-0"
      />
      <div className="w-full absolute h-screen max-lg:w-[100%] max-lg:h-full">
        <Image src={"/images/homepage/WhyChooseUs/dr15.png"} fill alt="" className="opacity-60" />
      </div>

      <div className="relative  bottom-10 max-lg:text-[10px] w-[30rem]  h-[30rem] max-lg:w-[14rem] max-lg:h-[14rem] group ">
        {/* Main Circle */}
        <div className="w-full h-full rounded-full border-1  border-dashed flex justify-center items-center ">
          <div className="w-[90%] max-lg:w-[88%] h-[90%] max-lg:h-[88%] rounded-full relative overflow-hidden shadow-[0px_0px_5px_lightgray]">
            <Image
              src={images[currentImageIndex]}
              fill
              alt={labels[currentImageIndex]}
              className="object-contain rounded-full absolute top-0"
            />
          </div>
        </div>

        {/* Dot1 on the circle */}
        <div
          className="flex text-center font-bold justify-around gap-2 items-center flex-col absolute -top-[14%] max-lg:-top-[29%]
        cursor-pointer left-[50%] transform -translate-x-1/2 "
        >
        
          <p
            className={`${
              currentImageIndex === 0 ? "text-[#10217D]" : "text-black"
            }`}
          >
            Cutting Edge <br /> Technologies And Facilities
          </p>

          <div
            className={`w-6 h-6 rounded-full ${
              currentImageIndex === 0 ? "bg-[#10217D]" : "border bg-white"
            }`}
            onClick={handleDotClick}
          />
        </div>
        {/* Dot2 on the circle */}
        <div
          className="flex text-center justify-around gap-5 max-lg:gap-2 items-start absolute top-[19%] -left-[1.5%]
         max-lg:top-[19%] max-lg:-left-[6%]
        transform -translate-x-1/2 "
        >
          <div
            className={`${
              currentImageIndex === 4 ? "text-[#10217D]" : "text-black"
            }`}
          >
            <p className="font-bold text-right">
             Safety And <br /> Ethics 
            </p>
          </div>
          <div
            className={`w-6 h-6 rounded-full ${
              currentImageIndex === 4 ? "bg-[#10217D]" : "border bg-white"
            }`}
            onClick={handleDotClick}
          />
        </div>
        {/* Dot3 on the circle */}
        <div
          className="flex text-center justify-around gap-5 max-lg:gap-2 items-start absolute top-[19%] left-[105%] max-lg:left-[120%] 
        transform -translate-x-1/2 "
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentImageIndex === 1 ? "bg-[#10217D]" : "border bg-white"
            }`}
            onClick={handleDotClick}
          />
          <div
            className={`${
              currentImageIndex === 1 ? "text-[#10217D]" : "text-black"
            }`}
          >
            <p className="font-bold text-left w-28">
              Value For <br /> Money
            </p>
          </div>
        </div>
        {/* Dot4 on the circle */}
        <div
          className="flex text-center  justify-around gap-2 items-start absolute top-[76%] -left-[7%] 
          max-lg:top-[78%] max-lg:-left-[8.5%] 
        transform -translate-x-1/2 "
        >
          <div
            className={`${
              currentImageIndex === 3 ? "text-[#10217D]" : "text-black"
            }`}
          >
            <p className="font-bold text-right ">
              Trusted & <br /> Experienced Doctor
            </p>
          </div>
          <div
            className={`w-6 h-6 rounded-full ${
              currentImageIndex === 3 ? "bg-[#10217D]" : "border bg-white"
            }`}
            onClick={handleDotClick}
          />
        </div>
        {/* Dot5 on the circle */}
        <div
          className="flex text-center justify-around gap-2 items-start absolute top-[76%] left-[104%]
         max-lg:top-[78%] max-lg:left-[114%] transform -translate-x-1/2 "
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentImageIndex === 2 ? "bg-[#10217D]" : "border bg-white"
            }`}
            onClick={handleDotClick}
          />
          <div
            className={`${
              currentImageIndex === 2 ? "text-[#10217D]" : "text-black"
            }`}
          >
            <p className="font-bold text-left w-28">
             98% Patients Satisfaction_Rate 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
