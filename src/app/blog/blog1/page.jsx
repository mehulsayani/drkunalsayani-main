"use client";

import Image from "next/image";

export default function BlogPost() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main content */}
      <div className="md:col-span-2 space-y-6">
        <Image src="/doctor-hero.jpg" alt="Doctor" width={800} height={400} className="rounded-lg" />
        <div className="flex gap-2 text-sm text-blue-500">
          <span className="px-2 py-1 border rounded">Cardiology</span>
          <span className="px-2 py-1 border rounded">Health</span>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800">5 Things You Didn't Know About Medical</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit purus non lorem dapibus, nec malesuada sapien fermentum...
        </p>

        <blockquote className="bg-blue-50 p-4 border-l-4 border-blue-400 italic rounded">
          “Healthcare is not just about treating illness—it’s about improving quality of life.”
        </blockquote>

        <h2 className="text-2xl font-bold text-gray-700">Medical and Health</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Vaccination updates weekly</li>
          <li>Doctor consultation online</li>
          <li>Electronic medical records</li>
        </ul>

        {/* Related posts */}
        <div>
          <h3 className="text-xl font-semibold mt-10 mb-4">Related posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden hover:shadow-lg">
                <Image src={`/related-${i + 1}.jpg`} alt="Related" width={400} height={200} />
                <div className="p-4">
                  <span className="text-sm text-blue-500 font-medium">Oncology</span>
                  <h4 className="font-semibold text-lg">How can women protect themselves from breast cancer</h4>
                  <p className="text-sm text-gray-500 mt-2">November 1, 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">6 Comments</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <Image src="/avatar.jpg" alt="avatar" width={50} height={50} className="rounded-full" />
              <div>
                <p className="font-semibold">Sarya Reichert</p>
                <p className="text-sm text-gray-500">November 7, 2025 at 1:32 pm</p>
                <p className="mt-2 text-gray-600">Insightful and informative read. Thanks!</p>
                <button className="text-blue-600 text-sm mt-1 hover:underline">↪ Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">Categories</h4>
          <ul className="space-y-1 text-gray-700">
            <li>Cardiology (8)</li>
            <li>Diagnostics (12)</li>
            <li>Neurology (4)</li>
            <li>Surgery (5)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Popular posts</h4>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex gap-3">
                <Image src={`/popular-${i + 1}.jpg`} alt="pop" width={60} height={60} className="rounded" />
                <div>
                  <p className="text-sm font-medium">The best solution for medical</p>
                  <span className="text-xs text-gray-500">October 2025</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2 text-sm text-blue-600">
            <span className="border px-2 py-1 rounded-full">Health</span>
            <span className="border px-2 py-1 rounded-full">Neurology</span>
            <span className="border px-2 py-1 rounded-full">Surgery</span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Calendar</h4>
          <p className="text-sm text-gray-500">May 2025</p>
        </div>
      </aside>
    </div>
  );
}
