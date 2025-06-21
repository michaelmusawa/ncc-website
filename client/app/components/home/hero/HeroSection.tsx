"use client";

import SearchBar from "../SearchBar";
import { HeroSectionProps } from "@/app/lib/types";
import HeroSlider from "./Slider";
import { motion } from "framer-motion";

export default function HeroSection({
  title,
  subTitle,
  images,
  cta,
}: Readonly<HeroSectionProps>) {
  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <HeroSlider images={images} />

      {/* Gradient overlay - theme adaptive */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/30 dark:from-black/70 dark:via-black/40 dark:to-black/60 z-0"></div>

      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
        {/* Title with modern gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-blue-600 to-emerald-600 dark:from-white dark:via-cyan-300 dark:to-emerald-300 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle with theme adaptive colors */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-700 dark:text-cyan-100 max-w-3xl leading-relaxed"
        >
          {subTitle}
        </motion.p>

        {/* Modern search card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
        >
          <SearchBar />
        </motion.div>

        {/* Modern CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-4 md:mt-6"
        >
          <a
            href="https://nairobiservices.go.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
          >
            <span>E-Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <a
            href="#services"
            className="px-6 py-3 bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
          >
            <span>Our Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>

        {/* Modern stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Population", value: "4.4", unit: "Million" },
            { label: "Area", value: "696", unit: "Sq. Km" },
            { label: "Services", value: "135", unit: "E-Services" },
            { label: "Wards", value: "85", unit: "Administrative" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center text-center transition-transform hover:scale-[1.03]"
            >
              <div className="text-xs text-gray-500 dark:text-cyan-200 uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-cyan-100 text-sm mt-1">
                {stat.unit}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-0 right-0 mx-auto z-10 flex justify-center"
      >
        <a
          href="#services"
          className="flex flex-col items-center text-gray-700 dark:text-cyan-200 hover:text-gray-900 dark:hover:text-cyan-100 transition-colors"
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="text-sm font-medium mb-2"
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
