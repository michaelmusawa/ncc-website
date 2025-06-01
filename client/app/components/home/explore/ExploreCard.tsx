"use client";

import React from "react";

const ExploreCard = ({ sector }) => {
  const {
    title,
    description,
    servicesCount,
    href,
    gradientFrom,
    gradientTo,
    textColor,
    hoverTextColor,
  } = sector;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative">
        <div
          className={`h-36 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-80 bg-current" />
          <div className="absolute top-0 right-0 w-40 h-40 opacity-40 bg-current rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-28 h-28 opacity-40 bg-current rounded-full -ml-14 -mb-14" />
        </div>
      </div>

      <div className="p-5">
        <h4
          className={`text-lg font-bold text-gray-800 mb-2 transition-colors duration-300 ${hoverTextColor}`}
        >
          {title}
        </h4>
        <div className="bg-current/50 w-16 h-1 rounded-full mb-3" />
        <p className="text-gray-600 text-sm mb-5 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-center text-xs text-gray-500">
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
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span>{servicesCount} Services</span>
          </div>
          <a
            href={href}
            className={`flex items-center text-sm font-medium gap-1.5 transition-all duration-300 ${textColor} hover:gap-3 ${hoverTextColor}`}
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
    </div>
  );
};

export default ExploreCard;
