import React from "react";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";

const blogPosts = [
  {
    title: "Top 5 Benefits of Hair Transplant Surgery",
    summary:
      "Discover how a modern hair transplant can restore confidence and natural appearance with minimal downtime.",
    author: "Dr. Kunal Sayani",
    image: "/images/homepage/specialization/hair-transplant.jpg",
    date: "May 10, 2025",
    avatar: <FaUserDoctor />,
  },
  {
    title: "Understanding Gynecomastia: Causes and Treatment Options",
    summary:
      "Gynecomastia can impact men both physically and emotionally. Learn about safe and effective surgical options.",
    author: "Dr. Kunal Sayani",
    image: "/images/homepage/specialization/Gynecomastia-min.jpg",
    date: "May 14, 2025",
    avatar: <FaUserDoctor />,
  },
  {
    title: "What Makes Aesthetic Surgery Different Today?",
    summary:
      "From personalized planning to cutting-edge tools, aesthetic surgery is evolving into a more holistic practice.",
    author: "Dr. Kunal Sayani",
    image: "/images/homepage/specialization/Surgery-after-Weight-Loss-min.jpg",
    date: "May 16, 2025",
    avatar: <FaUserDoctor />,
  },
];

export default function Blog() {
  return (
    <section className="py-16 bg-white max-lg:hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-[#10217D] mb-4">
          From Our Blog
        </h2>
        <p className="text-gray-500 mb-10 text-xl text-center">
          Stay informed with the latest health tips, hospital news, and expert{" "}
          <br />
          insights from our medical team.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className=" text-gray-600 rounded-full bg-gray-200 text-2xl p-2">
                    {post.avatar}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#10217D] mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600  text-sm mb-4">{post.summary}</p>

                <button className="text-blue-500 font-semibold hover:underline text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
        <a href="/blog">
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1BA9B5] flex justify-center mt-8 items-center gap-2 hover:bg-[#148d98] transition-colors
                     text-white font-semibold px-8 py-2 rounded-md shadow-md"
          >
            View All
          </button>
        </a>
      </div>
    </section>
  );
}
