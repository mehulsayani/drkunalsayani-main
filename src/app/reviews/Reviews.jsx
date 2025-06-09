"use client";
import { motion } from "framer-motion";

const ratings = [
  { stars: 5, percent: 98.1 },
  { stars: 4, percent: 1.9 },
  { stars: 3, percent: 0 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

const feedbacks = [
  {
    name: "Rachel Patel",
    date: "October 5, 2023",
    comment:
      "Couldn't resist buying this watch after seeing it online, and I'm so glad I did. It's even more stunning in person, and the build quality is exceptional. Will definitely be purchasing from this brand again!",
    stars: 5,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Christopher Lee",
    date: "June 25, 2023",
    comment:
      "Really impressed with the quality and style of this watch. It's exactly what I was looking for – versatile, durable, and looks great with any outfit. Docked half a star because the clasp is a bit tricky to open, but otherwise, it's perfect!",
    stars: 4.5,
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Brian Chen",
    date: "April 15, 2022",
    comment:
      "While this watch has its merits, such as its sleek design and comfortable wear, I found the strap to be somewhat flimsy, and the clasp occasionally difficult to secure. Despite these minor drawbacks, it does keep accurate time.",
    stars: 4,
    color: "bg-red-100 text-red-700",
  },
];

export default function Reviews() {
  return (
    <div className=" bg-white pl-6 flex justify-center items-center">
      <div className=" w-full flex max-w-[1400px] gap-2 max-lg:flex-col">
        {/* Average Rating Section */}
        <div>
          <h2 className="text-3xl font-bold w-[20rem] mb-2 max-lg:text-center">
            Average Rating
          </h2>
          <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
            <div className="text-3xl font-bold flex items-center gap-2 mb-1">
              5.0 <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">95 Reviews</p>

            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="w-6">{rating.stars}</span>
                <div className="flex-1 h-2 mx-2 bg-gray-200 rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${rating.percent}%` }}
                    transition={{ duration: 1 + index * 0.3 }}
                  />
                </div>
                <span className="w-10 text-sm text-gray-600">
                  {rating.percent}%
                </span>
              </div>
            ))}

            <div className="mt-6 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
              <p className="text-sm text-gray-600 mb-2">Write your Review</p>
              <button className="bg-[#1aaebcaf] hover:bg-[#4d979e] text-white font-semibold px-4 py-2 rounded transition">
                Submit Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Customer Feedback Section */}
        <iframe
          src="https://widgets.sociablekit.com/google-reviews/iframe/25562586"
          frameborder="0"
          width="100%"
          height="1000"
        ></iframe>
      </div>
    </div>
  );
}
