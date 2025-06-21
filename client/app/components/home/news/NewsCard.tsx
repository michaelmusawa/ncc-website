"use client";

import { NewsCategory } from "@/app/lib/types";
import { StrapiImage } from "../../StrapiImage";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const NewsCard = ({ item, index }: { item: NewsCategory; index: number }) => {
  const getTypeColor = () => {
    switch (item?.newsType?.toLowerCase()) {
      case "event":
        return "from-blue-500 to-blue-600";
      case "public":
        return "from-amber-500 to-amber-600";
      case "update":
        return "from-green-500 to-green-600";
      default:
        return "from-purple-500 to-purple-600";
    }
  };

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>

      <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
        {/* Header with image */}
        <div className="h-48 relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

          {/* News type badge */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor()} backdrop-blur-sm flex items-center gap-1`}
            >
              {item.newsType}
            </span>
          </div>

          {/* Date */}
          <div className="absolute top-4 right-4 z-20 flex items-center text-white/90 text-sm">
            <FiCalendar className="mr-1.5" size={14} />
            May 25, 2025
          </div>

          {item.image?.url && (
            <StrapiImage
              src={item.image.url}
              alt={item.image.alternativeText || item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              width={600}
              height={400}
            />
          )}

          {/* Title */}
          <h3 className="absolute bottom-4 left-4 right-4 z-20 text-xl font-bold text-white drop-shadow-md">
            {item.title}
          </h3>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col bg-white dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {item.subTitle}
          </p>

          {/* Action Button */}
          <a
            href={item.href}
            className="w-full py-3 px-4 text-center bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>
              {item.newsType === "event"
                ? "Event Details"
                : item.newsType === "public"
                ? "Read Full Notice"
                : "Learn More"}
            </span>
            <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default NewsCard;
