"use client";

import { SectorCategory } from "@/app/lib/types";
import React from "react";
import { StrapiImage } from "../../StrapiImage";

const SectorCard = ({ sector }: { sector: SectorCategory }) => {
  const textColor = "text-gray-600";
  const hoverTextColor = "group-hover:text-gray-700";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative h-24 bg-gradient-to-r from-amber-500/90 to-amber-400/80 overflow-hidden rounded-t-xl">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

        {/* If an `image` prop exists, layer it on top */}
        {sector.image?.url && (
          <StrapiImage
            src={sector.image.url}
            alt={sector.image.alternativeText || sector.title}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
        )}
      </div>

      <div className="p-5">
        <h4
          className={`text-lg font-bold text-gray-800 mb-2 transition-colors duration-300 ${hoverTextColor}`}
        >
          {sector.title}
        </h4>
        <div className="bg-current/50 w-16 h-1 rounded-full mb-3" />
        <p className="text-gray-600 text-sm mb-5 line-clamp-2">
          {sector.subTitle}
        </p>
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
            <span>{sector.serviceItems?.length} Services</span>
          </div>
          <a
            href={sector.href}
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

export default SectorCard;
