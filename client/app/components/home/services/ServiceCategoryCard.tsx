"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiMapPin,
} from "react-icons/fi";
import { StrapiImage } from "../../StrapiImage";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  userType,
  image,
  url,
  serviceItems,
  activeUserType,
  index,
}) => {
  const [showServices, setShowServices] = useState(false);
  const [hovered, setHovered] = useState(false);

  if (activeUserType !== "all" && activeUserType !== userType) {
    return null;
  }

  const userTypeColors = {
    residents: "from-green-500 to-green-600",
    businesses: "from-amber-500 to-amber-600",
    visitors: "from-purple-500 to-purple-600",
    all: "from-blue-500 to-blue-600",
  };

  const colorClass =
    userTypeColors[userType as keyof typeof userTypeColors] ||
    "from-blue-500 to-blue-600";

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></div>

      <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
        {/* Header with gradient */}
        <div
          className={`h-32 bg-gradient-to-r ${colorClass} relative overflow-hidden`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

          {image?.url && (
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || title}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              width={1920}
              height={1080}
            />
          )}

          {/* User type badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/20 backdrop-blur-sm`}
            >
              {userType.charAt(0).toUpperCase() + userType.slice(1)}
            </span>
          </div>

          {/* Title */}
          <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col bg-white dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {description}
          </p>

          {/* Toggle Service List */}
          <div className="mb-4">
            {serviceItems?.length > 0 ? (
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center text-blue-600 dark:text-blue-400 font-medium"
              >
                <span className="mr-2">
                  {showServices
                    ? "Hide services"
                    : `View ${serviceItems.length} services`}
                </span>
                {showServices ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No services available in this category
              </p>
            )}

            {/* Service List */}
            {showServices && serviceItems?.length > 0 && (
              <motion.div
                className="mt-3 space-y-2 pl-2 border-l-2 border-gray-200 dark:border-gray-700"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {serviceItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-5 h-5 mr-2 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
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
                    </div>
                    <span className="truncate">{item.text}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 grid grid-cols-2 gap-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
            <a
              href={url?.href || "https://nairobiservices.go.ke"}
              target={url?.isExternal ? "_blank" : "_self"}
              rel={url?.isExternal ? "noopener noreferrer" : undefined}
              className="py-2 px-3 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
            >
              <FiExternalLink className="w-4 h-4" />
              Apply Online
            </a>
            <a
              href="https://maps.google.com/?q=City+Hall+Annex+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-1.5"
            >
              <FiMapPin className="w-4 h-4" />
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
