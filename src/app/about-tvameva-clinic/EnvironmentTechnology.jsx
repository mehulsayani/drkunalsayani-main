import React from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Green Energy",
    subtitle: "Sustainable innovations",
    image: "/images/homepage/gallery/gallery1.png",
  },
  {
    id: 2,
    title: "Smart Farming",
    subtitle: "Tech meets agriculture",
    image: "/images/homepage/gallery/gallery2.png",
  },
  {
    id: 3,
    title: "Water Purification",
    subtitle: "Clean water solutions",
    image: "/images/homepage/aboutcompany/aboutimg1.jpg",
  },
  {
    id: 4,
    title: "Solar Tech",
    subtitle: "Future of renewable power",
    image: "/images/homepage/gallery/gallery4.png",
  },
  {
    id: 5,
    title: "Waste Management",
    subtitle: "Eco-conscious solutions",
    image: "/images/homepage/gallery/gallery5.png",
  },
  {
    id: 5,
    title: "Waste Management",
    subtitle: "Eco-conscious solutions",
    image: "/images/homepage/aboutcompany/aboutimg2.jpg",
  },
];

const EnvironmentTechnology = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-16 px-6 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
       
          <div className="max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:text-center">
            {/* <span className="text-sm text-orange-600 font-semibold uppercase">
              Our Focus
            </span> */}
            <h2 className="text-3xl flex justify-between mb-6 items-center  sm:text-4xl font-bold text-[#10217D]">
              <p>
                {" "}
                Blend of modern tech with <br /> serene patient care
              </p>
              <div className="md:mt-0 max-lg:hidden">
                <a
                  href="/gallery"
                  className="mt-4 px-8 py-3 bg-[#1AAEBC] text-base font-semibold text-white rounded-lg hover:bg-[#148d98]"
                >
                  View All <span>→</span>
                </a>
              </div>
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl text-sm sm:text-base">
              At Tvameva, we understand that no two individuals are alike.
              That’s why every consultation begins with listening—to your goals,
              concerns, and vision. Whether you’re seeking subtle refinement or
              transformative change, we guide you with honesty, integrity, and
              expert care every step of the way.
            </p>
          </div>
     

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-[300px] object-cover  transition-transform duration-300"
              />
            
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 hidden max-lg:block">
        <a
          href="/gallery"
          className="mt-4 px-8 py-3 bg-[#1AAEBC] text-base font-semibold text-white rounded-lg hover:bg-blue-500"
        >
          View All <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default EnvironmentTechnology;
