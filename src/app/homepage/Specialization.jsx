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
    image: "/images/homepage/specialization/breast-reduction.jpg",
    link: "/services/breast/breast-augmentation",
  },
  {
    title: "Breast Reduction",
    description1:
      "Relieve discomfort and achieve proportion with expertly performed breast reduction surgery.",
    image: "/images/homepage/specialization/b14.jpg",
    link: "/services/breast/breast-reduction-&-axillary-breasts-excision",
  },
  {
    title: "Gynecomastia",
    description1:
      "Sculpt a more masculine chest by removing excess glandular or fatty tissue.",
    image: "/images/homepage/specialization/Gynecomastia-min.jpg",
    link: "/services/men/gynaecomastia",
  },
  {
    title: "Liposuction",
    description1:
      `Avoid stubborn fat deposits that don’t respond to diet or exercise with targeted aesthetic solutions.`,
    image: "/images/homepage/specialization/liposuction-min.jpg",
    link: "/services/body/liposuction",
  },
  {
    title: "Tummy Tuck",
    description1:
      "Tighten loose abdominal muscles and remove excess skin for a firmer, flatter stomach.",
    image: "/images/homepage/specialization/tummy-tuck.jpg",
    link: "/services/body/tummy-tuck-abdominoplasty",
  },
  {
    title: "Face Lift",
    description1:
      "Reverse signs of aging by lifting and tightening sagging facial skin and muscles.",
    image: "/images/homepage/specialization/face-lift.jpg",
    link: "/services/face/facelift",
  },
  {
    title: "Botox | Derma Fillers",
    description1:
      "Smooth fine lines, enhance facial volume, and restore youthful contours non-surgically.",
    image: "/images/homepage/specialization/botox.jpg",
    link: "/services/non-surgical/botox-wrinkles-anti-ageing",
  },
  {
    title: "Hair Transplant",
    description1:
      "Restore a naturally fuller hairline with advanced FUE or FUT hair transplant techniques for lasting results.",
    image: "/images/homepage/specialization/hair-transplant.jpg",
    link: "/services/hair/hair-transplant",
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
    <section className="bg-[#ddeef2] py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 text-center">
       <div className=" flex items-center justify-center">
         <h2 className="text-3xl md:text-4xl font-bold text-[#10217D] text-center mb-4">
       Expertise & Specializations
          </h2>
       </div>

        <div className="flex justify-center items-center mb-6 flex-wrap gap-4 ">
          <p className="text-lg text-[#10217D] text-center">
            Expert Aesthetic Enhancements 
            for <br className="hidden sm:block" />Confidence & Wellness
          </p>
          
        </div>

        <div className="flex flex-wrap justify-between gap-4">
      {specializations.map((service, index) => (
        <div key={service.id || index} className="px-3">
          <div className="bg-white rounded-xl w-full sm:w-[90vw] md:w-[43vw] lg:w-[17.25rem] shadow hover:shadow-lg transition-all overflow-hidden">
            <img
              src={service.image}
              alt={service.title || 'Service image'}
              className="w-full h-50 max-lg:h-80 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description1}
              </p>
              <Link
                href={service.link}
                className="text-sm font-semibold text-[#10217D] hover:text-blue-600"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

      
      </div>
    </section>
  );
}
