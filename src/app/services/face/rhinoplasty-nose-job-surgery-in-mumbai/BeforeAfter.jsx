// components/BeforeAfterSlider.jsx
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const beforeAfterImages = [
  { before: "/images/services/body/tummytuck/beforeafter1.png" },
  { before: "/images/services/body/tummytuck/beforeafter2.png" },
  { before: "/images/services/body/tummytuck/beforeafter1.png" },
];

export default function BeforeAfter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // below lg
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 rounded-md max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-notoSans font-bold md:text-4xl text-[#10217D] mb-4 text-center">
          See the Stunning Results of Real <br className="hidden md:block" />
          Tummy Tuck Patients
        </h2>
        <p className="text-gray-700 mb-6 text-center w-full md:w-3/4 lg:w-1/2 font-roboto">
          View real before and after photos from our patients who’ve undergone
          successful gynecomastia and tummy tuck surgeries. These are actual
          results with life-changing impact.
        </p>
      </div>

      <Slider {...settings} className="mb-6">
        {beforeAfterImages.map((img, index) => (
          <div key={index} className="px-4">
            <div className="flex justify-center items-center">
              <Image
                src={img.before}
                alt={`Before After ${index + 1}`}
                width={1000}
                height={1000}
                className="rounded shadow w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
