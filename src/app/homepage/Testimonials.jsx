import Image from "next/image";
import React from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import Slider from "react-slick";
import { LuQuote } from "react-icons/lu";

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
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm flex items-center gap-1 bg-green-100 tracking-wide mb-2 px-3 py-1 rounded-full">
          <MdRadioButtonChecked />
          <span>Our Testimonials</span>
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Patients Say About Us
        </h2>

        <div className="flex flex-col-reverse md:flex-row bg-[#1AAEBC] rounded-xl overflow-hidden w-full">
          {/* Testimonial Text Slider */}
          <div className="w-full md:w-1/2 px-6 py-8 flex items-center justify-center">
            <div className="w-full max-w-xl">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="text-white p-4 md:p-6 rounded-2xl text-left"
                  >
                    <div className="text-3xl mb-4 text-white">
                      <LuQuote />
                    </div>
                    <p className="text-lg leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-purple-200">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex gap-1 text-yellow-400">
                        {"★★★★★"
                          .slice(0, testimonial.stars)
                          .split("")
                          .map((star, idx) => (
                            <span key={idx}>{star}</span>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md h-auto">
              <Image
                src="/images/homepage/testimonials/reviews.jpg"
                alt="Reviewer"
                width={400}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
