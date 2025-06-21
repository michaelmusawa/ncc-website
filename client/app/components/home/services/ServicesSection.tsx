"use client";

import { ServiceSectionProps } from "@/app/lib/types";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import ServiceCard from "./ServiceCategoryCard";

export default function ServicesSection({
  heading,
  subHeading,
  services,
}: Readonly<ServiceSectionProps>) {
  const [activeUserType, setActiveUserType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allUserTypes = Array.from(
    new Set(services?.map((cat) => cat.userType))
  );

  if (!allUserTypes.includes("all")) {
    allUserTypes.unshift("all");
  }

  // Filter services based on active user type and search query
  const filteredServices = services?.filter((cat) => {
    const matchesUserType =
      activeUserType === "all" || cat.userType === activeUserType;
    const matchesSearch =
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.serviceItems?.some((item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesUserType && matchesSearch;
  });

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 overflow-hidden scroll-mt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-300">
            {heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mt-4 max-w-3xl mx-auto text-lg">
            {subHeading}
          </p>
        </motion.div>

        {/* Services By Category */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col items-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 relative">
              <span className="relative z-10 bg-white dark:bg-gray-900 px-4">
                Services by Category
              </span>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent z-0"></div>
            </h3>
          </motion.div>

          {/* User Type Tabs */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 p-1 rounded-xl shadow-md flex flex-wrap justify-center gap-1 max-w-2xl w-full">
              {allUserTypes.map((ut) => (
                <motion.button
                  key={ut}
                  onClick={() => setActiveUserType(ut)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 min-w-[120px] ${
                    activeUserType === ut
                      ? {
                          all: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md",
                          residents:
                            "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md",
                          businesses:
                            "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md",
                          visitors:
                            "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md",
                        }[ut] ||
                        "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                      : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {ut === "all"
                    ? "All Services"
                    : ut.charAt(0).toUpperCase() + ut.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="w-full max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <SearchBar
                variant="light"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services by name or description..."
              />
            </div>
          </motion.div>

          {/* Service Count */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-amber-600">
                {filteredServices?.length || 0}
              </span>{" "}
              service categories
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </motion.div>

          {/* Grid of Service Categories */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AnimatePresence>
              {filteredServices?.map((cat, index) => (
                <ServiceCard
                  key={cat.title + cat.userType}
                  title={cat.title}
                  description={cat.description}
                  userType={cat.userType}
                  image={cat.image}
                  url={cat.url}
                  serviceItems={cat.serviceItems ?? []}
                  activeUserType={activeUserType}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredServices?.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <FiCheckCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                No services found
              </h4>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                {searchQuery
                  ? `No services match your search for "${searchQuery}". Try a different term.`
                  : "There are currently no services in this category."}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Clear Search
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
