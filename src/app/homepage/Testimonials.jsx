import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { MdStar } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="border border-[#40AEB9] text-[#40AEB9] rounded-full mr-4"
    onClick={onClick}
  >
    <IoIosArrowRoundBack size={50} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="border border-[#40AEB9] text-[#40AEB9] rounded-full"
    onClick={onClick}
  >
    <IoIosArrowRoundForward size={50} />
  </button>
);

// Testimonial data
const testimonials = [
  {
    name: "Geeta Rijhwani",
    date: "15-05-2025",
    image: "/images/homepage/testimonials/dp1.png",
    rating: 5,
    review:
      "I had a surgery done recently by Dr Kunal Sayani for removal of trichilemmal cysts on my scalp. He made the whole process very smooth and easy for me, right from consultation to the actual procedure to post-op care and follow-ups. Thank you so much Dr Kunal Sayani for the stress-free experience and a great job done.",
  },
  {
    name: "Geeta Rijhwani",
    date: "15-05-2025",
    image: "/images/homepage/testimonials/dp1.png",
    rating: 5,
    review:
      "I had a surgery done recently by Dr Kunal Sayani for removal of trichilemmal cysts on my scalp. He made the whole process very smooth and easy for me...",
  },
  {
    name: "Geeta Rijhwani",
    date: "15-05-2025",
    image: "/images/homepage/testimonials/dp1.png",
    rating: 5,
    review:
      "Thank you so much Dr Kunal Sayani for the stress-free experience and a great job done.",
  },
  {
    name: "Geeta Rijhwani",
    date: "15-05-2025",
    image: "/images/homepage/testimonials/dp1.png",
    rating: 5,
    review:
      "From consultation to surgery, everything was handled with great care. I truly appreciate it.",
  },
  {
    name: "Geeta Rijhwani",
    date: "15-05-2025",
    image: "/images/homepage/testimonials/dp1.png",
    rating: 5,
    review: "The process was smooth and professional. Dr. Kunal is amazing!",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false, // Keep arrows false to use custom controls
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20">
      <div className="flex justify-between w-full max-w-[1200px] max-lg:flex-col">
        {/* Left Section */}
        <div className="w-full flex justify-center px-4 flex-col items-start">
          <h2 className="text-4xl text-left mb-6">
            See What Our <br /> <span className="text-[#1AAEBC]">Patients</span> Have To Say!
          </h2>

          {/* External Arrow Controls */}
          <div className="text-lg text-center mb-8 flex">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>

        {/* Right Section with Slider */}
        <div className="w-full flex justify-start items-center">
          <div className="w-full h-48 max-lg:h-auto max-lg:p-4 bg-[#40AEB9] flex justify-start items-center rounded-lg">
            <div className="w-[30rem] max-lg:w-[22rem] ml-8 max-lg:ml-0 shadow-[0px_0px_10px_lightgray] rounded-2xl bg-white">
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="h-[18rem] flex flex-col p-4  ">
                      <div className="flex justify-between items-start">
                        <div className="flex justify-center items-end gap-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                          <div className="flex flex-col">
                            <h1 className="text-[#10217D] font-bold text-lg">{testimonial.name}</h1>
                            <p className="text-gray-500">{testimonial.date}</p>
                            <div className="text-yellow-400 flex text-2xl">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <MdStar key={i} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <FcGoogle size={30} />
                      </div>
                      <p className="mt-4 text-base max-lg:text-sm text-gray-700">{testimonial.review}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
