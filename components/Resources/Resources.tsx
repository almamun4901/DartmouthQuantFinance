"use client";

import { useState } from "react";
import { articles } from "../../data/articles";

export default function Resources() {
  const [visibleArticles, setVisibleArticles] = useState(6); 

  return (
    <div className="bg-neutral-50 min-h-screen px-4 sm:px-6 md:px-12 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center sm:text-left">Latest Articles</h1>
        {/* <Link
          href="/all-articles"
          className="mt-4 sm:mt-0 bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition"
        >
          See All Articles
        </Link> */}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, visibleArticles).map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Image Placeholder */}
            <div className="h-48 w-full bg-gray-300">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="text-sm text-blue-600 font-medium">
                {article.category} • {article.readTime}
              </div>
              <h3 className="text-lg font-semibold mt-1">{article.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleArticles < articles.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleArticles(articles.length)} // Show all articles
            className="bg-[#035939] text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
