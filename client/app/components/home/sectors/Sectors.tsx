"use client";

import React, { useState } from "react";
import SectorCard from "./SectorCard";
import { SectorsSectionProps } from "@/app/lib/types";

const Sectors = ({
  heading,
  subHeading,
  sectors,
  cta,
}: Readonly<SectorsSectionProps>) => {
  const [showSix, setShowSix] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const defaultSectors = sectors.slice(0, 4);
  const sixSectors = sectors.slice(0, 6);

  return (
    <section
      id="sectors"
      className="relative py-12 md:py-20 overflow-hidden scroll-mt-16 md:scroll-mt-20 bg-gray-50"
    >
      <div className="w-full max-w-6xl mx-auto mt-16 transform transition-all duration-700 translate-y-4 delay-700">
        {/* DEFAULT STATE: 4 cards on LEFT, Title/Description/CTAs on RIGHT */}
        {!showSix && (
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            {/* LEFT COLUMN: 4 cards */}
            <div className="w-full md:w-1/3 pr-0 md:pr-8 mt-8 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                {heading}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                {subHeading}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={(cta && cta[0]?.href) || "#"}
                  className="px-5 py-2 bg-primary text-white rounded-full font-medium shadow-lg hover:bg-primary-dark transition-all duration-300 text-sm"
                >
                  Some CTA
                </a>
                <button
                  onClick={() => setShowSix(true)}
                  className="px-5 py-2 bg-accent text-white rounded-full font-medium shadow-lg hover:bg-accent-dark transition-all duration-300 text-sm"
                >
                  See More
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Title, Description, CTAs */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {defaultSectors.map((sector, idx) => (
                  <SectorCard key={idx} sector={sector} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXPANDED STATE: Title + See Less at TOP, then 6 cards full-width, then View All / View Less */}
        {showSix && (
          <div className="flex flex-col">
            {/* HEADER ROW: Title + See Less */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                {heading}
              </h3>
              <button
                onClick={() => {
                  setShowSix(false);
                  setShowAll(false);
                }}
                className="px-5 py-2 bg-accent text-white rounded-full font-medium shadow-lg hover:bg-accent-dark transition-all duration-300 text-sm"
              >
                See Less
              </button>
            </div>

            {/* GRID OF 6 (or all if showAll) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {(showAll ? sectors : sixSectors).map((sector, idx) => (
                <SectorCard key={idx} sector={sector} />
              ))}
            </div>

            {/* VIEW ALL / VIEW LESS BUTTON */}
            {sectors.length > 6 && !showAll && (
              <div className="flex justify-center mb-16">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 font-medium"
                >
                  View All Sectors
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </button>
              </div>
            )}
            {showAll && (
              <div className="flex justify-center mb-16">
                <button
                  onClick={() => setShowAll(false)}
                  className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 font-medium"
                >
                  View Less Sectors
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Sectors;
