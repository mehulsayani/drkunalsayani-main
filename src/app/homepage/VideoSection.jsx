import Image from "next/image";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";

export default function VideoSection() {
  return (
    <div className="flex justify-center items-center flex-col py-10">
      <h1 className="text-3xl font-bold mb-5">Explore Our Videos</h1>
      <div className="w-full max-w-[1250px] h-[25rem] flex justify-between gap-5">
        <a
          href="https://www.instagram.com/drkunalsayani/reel/C_YXiK1SAxA/"
          className="w-full h-full  flex justify-center items-center relative"
        >
          <div className="w-full h-54 bg-[#1AAEBC] rounded-xl absolute">
            <Image
              src={"/images/homepage/VideoSection/video1.png"}
              alt=""
              fill
              className="rounded-xl opacity-40 hover:opacity-100 duration-500"
            />
            <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
              <BsPlayCircle />
            </div>
          </div>
        </a>
        <div className="w-full h-full gap-4 flex justify-between items-center flex-col">
          <a
            href="https://www.instagram.com/drkunalsayani/reel/C_Vq6hVIqWX/"
            className="w-full h-54 bg-[#1AAEBC] rounded-xl relative"
          >
            <Image
              src={"/images/homepage/VideoSection/video2.png"}
              alt=""
              fill
              className="rounded-xl opacity-40 hover:opacity-100 duration-500"
            />
            <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
              <BsPlayCircle />
            </div>
          </a>
          <a
            href="https://www.instagram.com/drkunalsayani/reel/C_Qi9MlIyqR/"
            className="w-full h-54 bg-[#1AAEBC] rounded-xl relative"
          >
            <Image
              src={"/images/homepage/VideoSection/video3.png"}
              alt=""
              fill
              className="rounded-xl opacity-40 hover:opacity-100 duration-500"
            />
            <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
              <BsPlayCircle />
            </div>
          </a>
        </div>
        <a
          href="https://www.instagram.com/drkunalsayani/reel/C-0GKdwvh16/"
          className="w-full h-full bg-[#1AAEBC] rounded-xl relative"
        >
          <Image
            src={"/images/homepage/VideoSection/video4.png"}
            alt=""
            fill
            className="rounded-xl opacity-40 hover:opacity-100 duration-500"
          />
          <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
            <BsPlayCircle />
          </div>
        </a>
        <div className="w-full h-full gap-4 flex justify-between items-center flex-col">
          <a
            href="https://www.instagram.com/drkunalsayani/reel/C-dGWNcIwuI/"
            className="w-full h-54 bg-[#1AAEBC] rounded-xl relative"
          >
            <Image
              src={"/images/homepage/VideoSection/video5.png"}
              alt=""
              fill
              className="rounded-xl opacity-40 hover:opacity-100 duration-500"
            />
            <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
              <BsPlayCircle />
            </div>
          </a>
          <a
            href="https://www.instagram.com/drkunalsayani/reel/C9XuMZmIqVi/"
            className="w-full h-54 bg-[#1AAEBC] rounded-xl relative"
          >
            <Image
              src={"/images/homepage/VideoSection/video6.png"}
              alt=""
              fill
              className="rounded-xl opacity-40 hover:opacity-100 duration-500"
            />
            <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
              <BsPlayCircle />
            </div>
          </a>
        </div>
        <div className="w-full h-full  flex justify-center items-center">
          <a
            href="https://www.instagram.com/drkunalsayani/reel/C9P8ni2SSML/"
            className="w-full h-54 bg-[#1AAEBC] rounded-xl relative"
          >
            <Image
              src={"/images/homepage/VideoSection/video7.png"}
              alt=""
              fill
              className="rounded-xl opacity-40 hover:opacity-100 duration-500"
            />
            <div className="absolute top-[50%] text-white text-5xl left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto">
              <BsPlayCircle />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
