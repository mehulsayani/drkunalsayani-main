import React, { useState } from 'react';
import Slider from 'react-slick';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const slides = [Slide1, Slide2, Slide3];

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    // autoplay: true,
    // autoplaySpeed: 40000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="relative w-full h-[84vh] max-w-[1400px] mx-auto px-18">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homepage/hero/bg_trust_hands.jpg"
          alt="Background Trust Hands"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1AAEBC]/80 to-blue-900/80 z-10"></div>
      </div>
      <Slider {...settings}>
        {slides.map((SlideComponent, index) => (
          <div key={index} className="px-2">
            <SlideComponent isActive={currentSlide === index} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
