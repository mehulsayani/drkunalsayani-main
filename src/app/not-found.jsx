"use client";

import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center pt-[8rem]">
      <div className="relative w-[320px] sm:w-[400px] md:w-[500px] h-[300px] md:h-[350px] mb-8">
        <Image
          src="/images/pagenotfound/pagenotfound.png"
          alt="Page Not Found"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-[#1AAEBC] mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-lg max-w-md mb-6">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <p className="bg-[#1aaebcaf] text-white px-6 py-3 rounded-full shadow-md hover:bg-sky-700 transition">
          Go Back Home
        </p>
      </Link>
    </div>
  );
}
