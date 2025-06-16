// components/HospitalGallery.tsx

import React from "react";
import Slider from "react-slick";
import Image from "next/image";


export default function Gallery() {
  const galleryImages = [
    "/images/homepage/gallery/gallery1.png",
    "/images/homepage/gallery/gallery2.png",
    "/images/homepage/gallery/gallery3.png",
    "/images/homepage/gallery/gallery4.png",
    "/images/homepage/gallery/gallery5.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
       arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-16 bg-[#ddeef2]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#10217D] mb-4">Tvameva Aesthetics Gallery</h2>
        <p className="text-black mb-10">Step inside our thoughtfully crafted environment where <br /> comfort, care, and healing come together.</p>

        <Slider {...settings} className="gallery-slider">
          {galleryImages.map((src, index) => (
            <div key={index} className="px-4">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={500}
                  height={350}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
