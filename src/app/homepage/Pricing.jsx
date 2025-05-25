import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Hair Transplant Surgery",
    doctor: "Dr. Arjun Mehta",
    category: "Hair Restoration",
    price: "$1,200.00",
    oldPrice: "$1,500.00",
    rating: 4.8,
    duration: "03 hrs",
    sessions: "2 Sessions",
    image: "/images/homepage/pricing/hair-transplant.jpg",
  },
  {
    title: "Gynecomastia / Breast Reduction",
    doctor: "Dr. Kunal Sayani",
    category: "Body Contouring",
    price: "$2,000.00",
    oldPrice: "$2,500.00",
    rating: 4.9,
    duration: "04 hrs",
    sessions: "1 Session",
    image: "/images/homepage/pricing/boobs-surgery.jpg",
  },
  {
    title: "Advanced Aesthetic Surgery",
    doctor: "Dr. Kunal Sayani",
    category: "Facial Aesthetics",
    price: "$3,500.00",
    oldPrice: "$4,000.00",
    rating: 5.0,
    duration: "Full Day",
    sessions: "3 Procedures",
    image: "/images/homepage/pricing/aesthetic-surgery.jpg",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Surgical Packages
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="mb-2 text-sm text-gray-500 flex items-center gap-2">
                <Image
                  src="/images/homepage/doctors/default-avatar.jpg"
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span className="font-medium text-gray-700">{service.doctor}</span>
                <span className="ml-auto bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  {service.category}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{service.title}</h3>
              <div className="text-sm text-gray-500 mb-4">
                ⏱ {service.duration} &nbsp; | &nbsp; {service.sessions}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-green-600 font-bold text-xl">
                  {service.price}
                  <span className="text-sm text-gray-400 line-through ml-2">
                    {service.oldPrice}
                  </span>
                </div>
                <div className="text-yellow-500 text-sm font-semibold">
                  ⭐ {service.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
