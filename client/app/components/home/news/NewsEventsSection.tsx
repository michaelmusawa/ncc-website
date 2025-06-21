"use client";

import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { NewsSectionProps } from "@/app/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronLeft,
  FiCalendar,
  FiArrowUp,
  FiChevronUp,
} from "react-icons/fi";

export default function NewsEventsSection({
  heading,
  subHeading,
  news,
  cta,
}: Readonly<NewsSectionProps>) {
  const [showSix, setShowSix] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Default: first 4 news items
  const defaultNews = news.slice(0, 4);
  // Six: first 6 items
  const sixNews = news.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="news-events"
      className="relative py-16 md:py-24 overflow-hidden scroll-mt-16 md:scroll-mt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4">
        {/* DEFAULT STATE: Content on LEFT, Cards on RIGHT */}
        <AnimatePresence mode="wait">
          {!showSix ? (
            <motion.div
              className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* LEFT COLUMN: Title, Description, CTAs */}
              <motion.div
                className="w-full md:w-2/5"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="sticky top-24">
                  <div className="inline-block w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-300 mb-4">
                    {heading}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    {subHeading}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/calendar"
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      View Calendar <FiCalendar className="w-4 h-4" />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowSix(true)}
                      className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      See More News
                      <FiChevronDown className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: 4 cards */}
              <motion.div
                className="w-full md:w-3/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {defaultNews.map((item, idx) => (
                    <NewsCard key={idx} item={item} index={idx} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* EXPANDED STATE: Title + See Less at TOP, then cards */
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* HEADER ROW: Title + See Less */}
              <motion.div
                className="flex justify-between items-center mb-10"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                <div>
                  <div className="inline-block w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-300">
                    {heading}
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowSix(false);
                    setShowAll(false);
                  }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  See Less
                  <FiChevronUp className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* GRID OF 6 (or all if showAll) */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {(showAll ? news : sixNews).map((item, idx) => (
                  <NewsCard key={idx} item={item} index={idx} />
                ))}
              </motion.div>

              {/* VIEW ALL / VIEW LESS BUTTON */}
              {news.length > 6 && !showAll && (
                <motion.div
                  className="flex justify-center mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(true)}
                    className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    View All News & Events
                    <FiArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
              {showAll && (
                <motion.div
                  className="flex justify-center mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(false)}
                    className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    View Less News
                    <FiChevronUp className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
