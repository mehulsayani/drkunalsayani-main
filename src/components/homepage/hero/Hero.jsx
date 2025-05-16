import Slider from 'react-slick';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  { component: <Slide1 /> },
  { component: <Slide2 /> },
  { component: <Slide3 /> },
];

// Custom Left Arrow (outside)
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

// Custom Right Arrow (outside)
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-16">
      {/* ⬅️ Adjust px-16 for space around arrows */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            {slide.component}
          </div>
        ))}
      </Slider>
    </div>
  );
}
