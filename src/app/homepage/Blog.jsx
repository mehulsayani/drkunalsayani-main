import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    title: "Top 5 Benefits of Hair Transplant Surgery",
    summary:
      "Discover how a modern hair transplant can restore confidence and natural appearance with minimal downtime.",
    author: "Dr. Kunal Sayani",
    image: "/images/blog/hair-transplant-benefits.jpg",
    date: "May 10, 2025",
    avatar: "/images/doctors/default-avatar.jpg",
  },
  {
    title: "Understanding Gynecomastia: Causes and Treatment Options",
    summary:
      "Gynecomastia can impact men both physically and emotionally. Learn about safe and effective surgical options.",
    author: "Dr. Arjun Mehta",
    image: "/images/blog/gynecomastia-treatment.jpg",
    date: "May 14, 2025",
    avatar: "/images/doctors/default-avatar.jpg",
  },
  {
    title: "What Makes Aesthetic Surgery Different Today?",
    summary:
      "From personalized planning to cutting-edge tools, aesthetic surgery is evolving into a more holistic practice.",
    author: "Dr. Kunal Sayani",
    image: "/images/blog/aesthetic-surgery-modern.jpg",
    date: "May 16, 2025",
    avatar: "/images/doctors/default-avatar.jpg",
  },
];

export default function Blog() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          From Our Blog
        </h2>
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={post.avatar}
                    
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <button className="text-purple-600 font-semibold hover:underline text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
