"use client";

import React, { useState } from "react";
import { newsData } from "@/app/lib/data/newsData";
import NewsCard, { NewsItem } from "./NewsCard";

export default function NewsEventsSection() {
  const [showSix, setShowSix] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Default: first 4 news items
  const defaultNews = newsData.slice(0, 4);
  // Six: first 6 items
  const sixNews = newsData.slice(0, 6);

  return (
    <section id="news-events" className="relative py-16 md:py-24 bg-gray-50">
      {/* Light grey overlay */}
      <div className="absolute inset-0 bg-gray-500/10 backdrop-filter backdrop-brightness-98"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* DEFAULT STATE: 4 cards on LEFT, Title/Description/CTAs on RIGHT */}
        {!showSix && (
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            {/* LEFT COLUMN: 4 news cards */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {defaultNews.map((item: NewsItem, idx: number) => (
                  <NewsCard key={idx} item={item} />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Title, Description, CTAs */}
            <div className="w-full md:w-1/3 pr-0 md:pr-8 mt-8 md:mt-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Latest News &amp; Events
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed max-w-md">
                Stay informed about county announcements, public notices, and
                upcoming events.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="/some-other-cta"
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
          </div>
        )}

        {/* EXPANDED STATE: Title + See Less at TOP, then 6 cards full-width, then View All / View Less */}
        {showSix && (
          <div className="flex flex-col">
            {/* HEADER ROW: Title + See Less */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Latest News &amp; Events
              </h2>
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
              {(showAll ? newsData : sixNews).map(
                (item: NewsItem, idx: number) => (
                  <NewsCard key={idx} item={item} />
                )
              )}
            </div>

            {/* VIEW ALL / VIEW LESS BUTTON */}
            {newsData.length > 6 && !showAll && (
              <div className="flex justify-center mb-16">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 bg-white border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 font-medium"
                >
                  View All News &amp; Events
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
                  View Less News
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
}
