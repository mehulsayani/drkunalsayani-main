import React, { useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdRadioButtonChecked } from "react-icons/md";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const specializations = [
  {
    title: "Breast Augmentation",
    description1:
      "Enhance breast size and shape with natural-looking implants tailored to your body.",
    image: "/images/specialization/breast-reduction.jpg",
    link: "/services/breast-augmentation",
  },
  {
    title: "Breast Reduction",
    description1:
      "Relieve discomfort and achieve proportion with expertly performed breast reduction surgery.",
    image: "/images/specialization/b14.jpg",
    link: "/services/breast-reduction",
  },
  {
    title: "Gynecomastia",
    description1:
      "Sculpt a more masculine chest by removing excess glandular or fatty tissue.",
    image: "/images/specialization/Gynecomastia-min.jpg",
    link: "/services/gynecomastia",
  },
  {
    title: "Liposuction",
    description1:
      "Eliminate stubborn fat deposits resistant to diet and exercise.",
    image: "/images/specialization/liposuction-min.jpg",
    link: "/services/liposuction",
  },
  {
    title: "Tummy Tuck",
    description1:
      "Tighten loose abdominal muscles and remove excess skin for a firmer, flatter stomach.",
    image: "/images/specialization/tummy-tuck.jpg",
    link: "/services/tummy-tuck",
  },
  {
    title: "Face Lift",
    description1:
      "Reverse signs of aging by lifting and tightening sagging facial skin and muscles.",
    image: "/images/specialization/face-lift.jpg",
    link: "/services/face-lift",
  },
  {
    title: "Botox | Derma Fillers",
    description1:
      "Smooth fine lines, enhance facial volume, and restore youthful contours non-surgically.",
    image: "/images/specialization/botox.jpg",
    link: "/services/botox-fillers",
  },
  {
    title: "Hair Transplant",
    description1:
      "Restore a fuller hairline using advanced FUE or FUT techniques.",
    image: "/images/specialization/hair-transplant.jpg",
    link: "/services/hair-transplant",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function Services() {
  const sliderRef = useRef(null);

  return (
    <section className="bg-[#f9fbfc] py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm w-32 flex items-center gap-1 bg-green-100 tracking-wide mb-4 px-2 py-1 rounded-full">
          <MdRadioButtonChecked />
          <span>Our Services</span>
        </p>

        <div className="flex justify-between items-center mb-6 flex-wrap gap-4 px-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-left">
            Expert Aesthetic Enhancements <br className="hidden sm:block" />
            for Confidence & Wellness
          </h2>
          <div className="flex gap-3">
            <button
              aria-label="Previous"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <GoArrowLeft className="text-3xl text-[#1AAEBC]" />
            </button>
            <button
              aria-label="Next"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <GoArrowRight className="text-3xl text-[#1AAEBC]" />
            </button>
          </div>
        </div>

        <Slider {...sliderSettings} ref={sliderRef}>
          {specializations.map((service, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description1}
                  </p>
                  <Link
                    href={service.link}
                    className="text-sm font-semibold text-[#1AAEBC] hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      
      </div>
    </section>
  );
}
