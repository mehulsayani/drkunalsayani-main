"use client";
import Image from "next/image";
import React from "react";

const galleryItems = [
  { src: "/gallery/clinic-1.jpg", title: "Auro Skin Sapphire Plaza", label: "Sapphire Plaza building" },
  { src: "/gallery/clinic-2.jpg", title: "Auro Skin Lift Lobby", label: "Lift lobby" },
  { src: "/gallery/clinic-3.jpg", title: "Auro Skin Entry", label: "Entry passage" },
  { src: "/gallery/clinic-4.jpg", title: "Auro Skin Reception Services", label: "Services" },
  { src: "/gallery/clinic-5.jpg", title: "Auro Skin Reception Services", label: "Waiting area" },
  { src: "/gallery/clinic-6.jpg", title: "Auro Skin Laser Rooms", label: "Laser rooms" },
  { src: "/gallery/clinic-7.jpg", title: "Auro Skin Laser Rooms", label: "Laser rooms" },
  { src: "/gallery/clinic-8.jpg", title: "Auro Skin OPD", label: "OPD room 1" },
  { src: "/gallery/clinic-9.jpg", title: "Auro Skin OPD", label: "OPD room 2" },
  { src: "/gallery/clinic-10.jpg", title: "Auro Skin Laser", label: "Laser room 1" },
  { src: "/gallery/clinic-11.jpg", title: "Auro Skin Laser", label: "Laser room 1" },
  { src: "/gallery/clinic-12.jpg", title: "Auro Skin Laser", label: "Laser room 2" },
  { src: "/gallery/clinic-13.jpg", title: "Auro Skin Procedure Room", label: "Procedure room" },
  { src: "/gallery/clinic-14.jpg", title: "Auro Skin OPD", label: "OPD room 2" },
  { src: "/gallery/clinic-15.jpg", title: "Auro Skin Counselling Pharmacy", label: "Counselling room" },
  { src: "/gallery/clinic-16.jpg", title: "Auro Skin Consulting Room", label: "Discussion room" },
  { src: "/gallery/clinic-17.jpg", title: "Auro Skin Washroom", label: "Washroom" },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
