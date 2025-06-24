import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { BsPlayCircle } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";
import { IoLogoInstagram } from "react-icons/io5";

const videos = [
  {
    src: "/images/homepage/VideoSection/video1.png",
    link: "https://www.instagram.com/drkunalsayani/reel/C_YXiK1SAxA/",
  },
  {
    src: "/images/homepage/VideoSection/video2.png",
    link: "https://www.instagram.com/drkunalsayani/reel/C_Vq6hVIqWX/",
  },
  {
    src: "/images/homepage/VideoSection/video3.png",
    link: "https://www.instagram.com/drkunalsayani/reel/C_Qi9MlIyqR/",
  },
  {
    src: "/images/homepage/VideoSection/video4.png",
    link: "https://www.instagram.com/drkunalsayani/reel/C-0GKdwvh16/",
  },
  {
    src: "/images/homepage/VideoSection/video5.png",
    link: "https://www.instagram.com/drkunalsayani/reel/C-dGWNcIwuI/",
  },
  {
    src: "/images/homepage/VideoSection/video6.png",
    link: "https://www.instagram.com/drkunalsayani/reel/C9XuMZmIqVi/",
  },
  {
    src: "/images/homepage/VideoSection/video7.png",
    link: "https://www.instagram.com/drkunalsayani/reel/C9P8ni2SSML/",
  },
];

export default function VideoSection() {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };

  const VideoCard = ({ video }) => (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-54 bg-[#464646] rounded-xl relative block"
    >
      <Image
        src={video.src}
        alt=""
        fill
        className="rounded-xl opacity-40 hover:opacity-100 duration-500 object-cover"
      />
      <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
        <BsPlayCircle />
      </div>
    </a>
  );

  return (
    <div className="bg-[#f2f3f483] w-full max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
      <div className="flex justify-center  items-center  max-lg:w-[95%] flex-col py-10 px-4">
      {/* <h1 className="text-3xl font-bold mb-5 text-center text-[#10217D]">
        Explore Our Videos
      </h1> */}
      <div className="flex gap-5 tems-center max-w-[1200px]  p-4 max-lg:p-0 rounded-lg w-full mb-4">
        <div className="w-16 h-16 relative rounded-full overflow-hidden">
          <Image
            src="/images/homepage/hero/image4.png"
            alt="Dr. Kunal Sayani"
            fill
            className="object-cover border"
          />
        </div>

        <div>
          <h2 className="text-xl max-lg:text-base font-semibold text-gray-800">
            Dr.Kunal Sayani <span className="font-normal">(MS MCh DrNB)</span>{" "}
            <span className="text-lg text-gray-600">@drkunalsayani</span>
          </h2>
          <p className="text-lg max-lg:text-sm text-[#10217D] font-medium">
            Board certified Plastic & Aesthetic Surgeon
          </p>
        </div>
      </div>

      {/* Mobile/Tablet View: Slick Slider */}
      {isMobile ? (
        <div className="w-full">
          <Slider {...settings}>
            {videos.map((video, idx) => (
              <div key={idx} className="px-2">
                <VideoCard video={video} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        // Desktop View: Your custom layout
        <div className="w-full max-w-[1250px] h-[25rem] flex justify-between gap-5">
          {/* First Column */}
          <div className="w-full h-full flex justify-center items-center">
            <VideoCard video={videos[0]} />
          </div>

          {/* Second Column */}
          <div className="w-full h-full gap-4 flex justify-between items-center flex-col">
            <VideoCard video={videos[1]} />
            <VideoCard video={videos[2]} />
          </div>

          {/* Third Column */}
          <a
            href={"https://www.instagram.com/drkunalsayani/reel/C_Qi9MlIyqR/"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-100 bg-[#464646] rounded-xl relative block"
          >
            <Image
              src={"/images/homepage/VideoSection/video3.png"}
              alt=""
              fill
              className="rounded-xl opacity-40 hover:opacity-100 duration-500 "
            />
            <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
              <BsPlayCircle />
            </div>
          </a>

          {/* Fourth Column */}
          <div className="w-full h-full gap-4 flex justify-between items-center flex-col">
            <VideoCard video={videos[4]} />
            <VideoCard video={videos[5]} />
          </div>

          {/* Fifth Column */}
          <div className="w-full h-full flex justify-center items-center">
            <VideoCard video={videos[6]} />
          </div>
        </div>
      )}
      <a href="https://www.instagram.com/drkunalsayani/">
        <button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#1BA9B5] flex justify-center mt-8 items-center gap-2 hover:bg-[#148d98] transition-colors
               text-white font-semibold px-8 py-4 rounded-md shadow-md"
      >
        <div className="text-2xl">
          <IoLogoInstagram />
        </div>{" "}
        Follow on Instagram 
      </button>
      </a>
    </div>
    </div>
  );
}
