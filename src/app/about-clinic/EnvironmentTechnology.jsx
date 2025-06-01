import React from "react";
import Image from "next/image"; // only if you're using Next.js


const items = [
  {
    id: 1,
    title: "Green Energy",
    subtitle: "Sustainable innovations",
    image: '',
  },
  {
    id: 2,
    title: "Smart Farming",
    subtitle: "Tech meets agriculture",
    image: '',
  },
  {
    id: 3,
    title: "Water Purification",
    subtitle: "Clean water solutions",
    image: '',
  },
];

const EnvironmentTechnology = () => {
  return (
    <section className="px-6 w-full max-w-[1200px] py-16 bg-[#f7f8fa]">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap mb-10">
        <div>
          <span className="text-sm text-orange-600 font-semibold uppercase">
            Our Focus
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">	Blend of modern tech with serene patient care</h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            At Tvameva, we understand that no two individuals are alike. That’s why every consultaƟon
begins with listening—to your goals, concerns, and vision. Whether you’re seeking subtle
refinement or transformaƟve change, we guide you with honesty, integrity, and expert care
every step of the way. 
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="#" className="text-sm font-semibold text-gray-800 flex items-center gap-1 hover:text-blue-600 transition">
            View All <span>→</span>
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
            <Image
              src={''}
              alt={item.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnvironmentTechnology;
