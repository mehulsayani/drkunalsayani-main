import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const procedures = [
  {
    id: 1,
    title: "Body Scrubs",
    description:
      "Exfoliate and refresh your skin with nourishing scrubs that leave you glowing.",
    image: "/images/procedures/bodyscrubs.jpg",
  },
  {
    id: 2,
    title: "Dermaplaning",
    description:
      "Gently remove dead skin and peach fuzz for a smooth, radiant complexion.",
    image: "/images/procedures/dermaplaning.jpg",
  },
  {
    id: 3,
    title: "Hydrafacials",
    description:
      "Deep cleanse and hydrate your skin with our advanced facial treatments.",
    image: "/images/procedures/hydrafacials.jpg",
  },
  {
    id: 4,
    title: "Hair Removal",
    description:
      "Enjoy silky smooth skin with our safe and effective hair removal services.",
    image: "/images/procedures/hairremoval.jpg",
  },
  {
    id: 5,
    title: "Sunless Tanning",
    description:
      "Get a natural-looking glow without sun exposure or harmful UV rays.",
    image: "/images/procedures/sunlesstanning.jpg",
  },
];

const Procedures = () => {
  const [openId, setOpenId] = useState(1);

  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  const currentItem = procedures.find((item) => item.id === openId);

  return (
    <section className="flex  justify-center items-center w-full">
      <div className=" max-w-[1300px] px-6 w-full md:px-20 py-16 flex flex-col md:flex-row gap-10">
      {/* Left: Text + Accordion */}
      <div className="md:w-1/2 space-y-6">
        <span className="bg-[#EFE4D9] text-sm px-4 py-1 rounded-full font-medium inline-block ">
          Beauty In Every Leaf
        </span>
        <h2 className="text-4xl font-semibold text-[#10217D]">
          Aesthetic treatments & procedures offered
        </h2>
        <p className="text-gray-600">
          Our clinic offers a full spectrum of aesthetic procedures—from advanced
          facial rejuvenation and body contouring to hair restoration and
          non-surgical enhancements—performed in a modern, serene, and private
          environment. We combine the latest techniques and medical innovations
          with a holistic approach, ensuring that your experience is as
          empowering as it is effective.
        </p>

        {/* Accordion */}
        <div className="space-y-2">
          {procedures.map((item) => (
            <div
              key={item.id}
              className={`rounded-md p-4 transition-all duration-300 cursor-pointer ${
                openId === item.id
                  ? "bg-[#f3eadf]"
                  : "bg-transparent hover:bg-[#f3eadf]"
              }`}
              onClick={() => toggleOpen(item.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <span className="w-8 h-8 bg-[#D8C2A7] text-white font-semibold rounded-full flex items-center justify-center">
                    0{item.id}
                  </span>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                </div>
                <span
                  className={`text-xl transform transition-transform duration-300 ${
                    openId === item.id ? "rotate-90" : ""
                  }`}
                >
                  <IoIosArrowForward/>
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Dynamic Image */}
      <div className="md:w-1/2 relative">
        {currentItem && (
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            width={600}
            height={800}
            className="rounded-lg w-full object-cover transition duration-500"
            key={currentItem.id} // forces re-render when image changes
          />
        )}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-md flex items-center justify-between w-[90%]">
          <p className="text-sm font-semibold text-gray-800">
            Get 25% Off on First Service
          </p>
          <button className="bg-blue-400 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-500 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Procedures;
