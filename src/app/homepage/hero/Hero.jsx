import React, { useState } from "react";
import Slider from "react-slick";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const slides = [Slide1, Slide2, Slide3];

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -left-12 transform -translate-y-1/2  z-10 cursor-pointer text-white bg-[#00e1ff75] p-3 rounded-lg shadow-md "
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-[#00e1ff75] p-3 rounded-lg shadow-md "
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = { 
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 30000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="relative bg-[#40AEB921] w-full  h-[41rem] max-lg:h-[48rem]  max-lg:px-0 ">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/homepage/hero/bg_trust_hands.jpg"
          alt="Background Trust Hands"
          fill
          className="object-cover opacity-10 "
          priority
        />
        <div className="absolute  z-10"></div>
      </div>
      <Slider {...settings}>
        {slides.map((SlideComponent, index) => (
          <div key={index} className="">
            <SlideComponent isActive={currentSlide === index} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
