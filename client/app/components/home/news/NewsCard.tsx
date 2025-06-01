"use client";

import React from "react";

export interface NewsItem {
  category: string;
  categoryTextColor: string;
  gradientFrom: string;
  gradientTo: string;
  date: string;
  title: string;
  summary: string;
  link: string;
  linkColorBase: string;
  linkColorHover: string;
}

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform group">
      <div className="relative">
        <div
          className={`h-48 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} relative`}
        >
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div
            className={`absolute top-4 left-4 bg-white/90 ${item.categoryTextColor} text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm`}
          >
            {item.category}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center text-white/90 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {item.date}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3
          className={`text-lg font-bold text-gray-800 mb-2 group-hover:${item.categoryTextColor} transition-colors duration-300`}
        >
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.summary}
        </p>
        <a
          href={item.link}
          className={`inline-flex items-center ${item.linkColorBase} font-medium text-sm ${item.linkColorHover} transition-colors`}
        >
          {item.category === "Event"
            ? "Event Details"
            : item.category === "Public Notice"
            ? "Read Full Notice"
            : "Learn More"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
