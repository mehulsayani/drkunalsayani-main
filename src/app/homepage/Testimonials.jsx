import Image from "next/image";
import React from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import Slider from "react-slick";
import { LuQuote } from "react-icons/lu";


// Dummy testimonial data
const testimonials = [
  {
    quote:
      "In this ever-evolving digital era, understand the significance of staying ahead. Through our blog, we invite you to explore the dynamic world of IT with us — decoding algorithms and unraveling innovations.",
    name: "Matthew Lansberry",
    role: "CEO & Founder",
    stars: 5,
  },
  {
    quote:
      "Their service is outstanding! The team guided us through every step and delivered top-notch solutions tailored to our needs.",
    name: "Samantha Riggs",
    role: "Product Manager",
    stars: 5,
  },
  {
    quote:
      "Highly recommend this company for their expertise and professionalism. We've seen tremendous growth since partnering with them.",
    name: "Derek Smith",
    role: "Tech Lead",
    stars: 4,
  },
];

export default function Testimonials() {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,

   
  };

  return (
    <section className="w-full  py-16 px-4">
      <div className="max-w-6xl mx-auto text-center flex flex-col justify-centeri items-center">
      
        <p className="text-sm w-38 flex items-center gap-1 bg-green-100 tracking-wide mb-1 px-2 py-1 rounded-full">
                    <MdRadioButtonChecked />
                    <span>Our Testimonials</span>
                  </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Patients Say About Us
        </h2>

        <div className="flex bg-[#1AAEBC] max-lg:flex-col max-lg:justify-center max-lg:items-center rounded-xl md:flex-row items-center justify-center">
          {/* Reviewer Image Section */}
          <div className="relative w-full">
            <Image
              src="/images/testimonials/reviews.jpg"
              alt="Reviewer"
              width={400}
              height={400}
              className="rounded-xl "
            />
           
          </div>

          {/* Testimonial Slider Section */}
          <div className="max-w-xl w-full px-10">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="  text-white p-8 rounded-2xl text-left"
                >
                  <div className="text-3xl mb-4"><LuQuote/></div>
                  <p className="text-lg leading-relaxed mb-6">{testimonial.quote}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-purple-200">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {"★★★★★".slice(0, testimonial.stars).split("").map((star, idx) => (
                        <span key={idx}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
