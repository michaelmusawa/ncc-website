"use client";

import { NewsCategory } from "@/app/lib/types";
import React from "react";
import { StrapiImage } from "../../StrapiImage";

const NewsCard = ({ item }: { item: NewsCategory }) => {
  const textColor = "text-gray-600";
  const hoverTextColor = "group-hover:text-gray-700";
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform group">
      <div className="relative h-24 bg-gradient-to-r from-amber-500/90 to-amber-400/80 overflow-hidden rounded-t-xl">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
        <div
          className={`absolute top-4 left-4 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm`}
        >
          {item.newsType}
        </div>

        {/* If an `image` prop exists, layer it on top */}
        {item.image?.url && (
          <StrapiImage
            src={item.image.url}
            alt={item.image.alternativeText || item.title}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
        )}
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
        May 25, 2025
      </div>

      <div className="p-5">
        <h3
          className={`text-lg font-bold text-gray-800 mb-2 group-hover:${textColor} transition-colors duration-300`}
        >
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.subTitle}
        </p>
        <a
          href={item.href}
          className={`inline-flex items-center font-medium text-sm ${hoverTextColor} transition-colors`}
        >
          {item.newsType === "event"
            ? "Event Details"
            : item.newsType === "public"
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
