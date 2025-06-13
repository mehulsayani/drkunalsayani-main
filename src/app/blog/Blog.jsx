"use client";

import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Benefits of Hair Transplant Surgery",
    date: "May 10, 2025",
    author: "Dr. Kunal Sayani",
    image: "/images/homepage/specialization/hair-transplant.jpg",
    slug: "/blog/hair-transplant-benefits",
    category: "Hair Treatments",
    tags: ["Hair Transplant", "Surgery"],
  },
  {
    id: 2,
    title: "Understanding Gynecomastia: Causes and Treatment Options",
    date: "May 14, 2025",
    author: "Dr. Kunal Sayani",
    image: "/images/homepage/specialization/Gynecomastia-min.jpg",
    slug: "/blog/gynecomastia-treatment-options",
    category: "Men’s Health",
    tags: ["Gynecomastia", "Chest Surgery"],
  },
  {
    id: 3,
    title: "What Makes Aesthetic Surgery Different Today?",
    date: "May 16, 2025",
    author: "Dr. Kunal Sayani",
    image: "/images/homepage/specialization/liposuction-min.jpg",
    slug: "/blog/aesthetic-surgery-today",
    category: "Aesthetic Surgery",
    tags: ["Cosmetic", "Trends"],
  },
  // Add more as needed
];

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIdx,
    startIdx + POSTS_PER_PAGE
  );

  const handlePrev = () =>
    currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const tags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="flex flex-col md:flex-row gap-8 p-6 w-full max-w-[1200px]">
        {/* Blog Grid */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-6">
            {paginatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg w-[48%] max-lg:w-[100%] shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">
                    {post.author} — {post.date}
                  </p>
                  <h3 className="text-lg font-semibold mt-2 text-sky-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">Read More →</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-sky-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-sky-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg p-4 shadow-md space-y-6">
            {/* Search */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Search Blog</h4>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* Search Results */}
            <div>
              <h4 className="text-lg font-semibold mt-4 mb-2">
                Top Searches
              </h4>
              {filteredPosts.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {filteredPosts.map((post) => (
                    <li key={post.id}>
                      <a
                        href={post.slug}
                        className="text-sky-600 hover:underline"
                      >
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No posts found.</p>
              )}
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Categories</h4>
              <ul className="space-y-1">
                {categories.map((category, idx) => (
                  <li
                    key={idx}
                    className="text-sky-600 hover:underline cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-sky-100 text-sky-700 text-sm px-2 py-1 rounded-md cursor-pointer hover:bg-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
