"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SectorsSectionProps } from "@/app/lib/types";
import SectorCard from "./SectorCard";

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
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* DEFAULT STATE: 4 cards on RIGHT, Title/Description/CTAs on LEFT */}
        <AnimatePresence>
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
                    <a
                      href={(cta && cta[0]?.href) || "#"}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:opacity-90 transition-opacity"
                    >
                      Explore Services
                    </a>
                    <button
                      onClick={() => setShowSix(true)}
                      className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      See More Sectors
                      <FiChevronDown className="w-5 h-5" />
                    </button>
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
                  {defaultSectors.map((sector, idx) => (
                    <SectorCard key={idx} sector={sector} index={idx} />
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
                <button
                  onClick={() => {
                    setShowSix(false);
                    setShowAll(false);
                  }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  See Less
                  <FiChevronUp className="w-5 h-5" />
                </button>
              </motion.div>

              {/* GRID OF 6 (or all if showAll) */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {(showAll ? sectors : sixSectors).map((sector, idx) => (
                  <SectorCard key={idx} sector={sector} index={idx} />
                ))}
              </motion.div>

              {/* VIEW ALL / VIEW LESS BUTTON */}
              {sectors.length > 6 && !showAll && (
                <motion.div
                  className="flex justify-center mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => setShowAll(true)}
                    className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    View All Sectors
                    <FiArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
              {showAll && (
                <motion.div
                  className="flex justify-center mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => setShowAll(false)}
                    className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    View Less Sectors
                    <FiChevronUp className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Sectors;
