// Modernized Sector Card Component
import { SectorCategory } from "@/app/lib/types";
import { StrapiImage } from "../../StrapiImage";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const SectorCard = ({
  sector,
  index,
}: {
  sector: SectorCategory;
  index: number;
}) => {
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
        {/* Header with gradient */}
        <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

          {sector.image?.url && (
            <StrapiImage
              src={sector.image.url}
              alt={sector.image.alternativeText || sector.title}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              width={1920}
              height={1080}
            />
          )}

          {/* Sector title */}
          <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white drop-shadow-md">
            {sector.title}
          </h3>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col bg-white dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {sector.subTitle}
          </p>

          {/* Service count */}
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
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
            <span>{sector.serviceItems?.length} Services Available</span>
          </div>

          {/* Explore Button */}
          <a
            href={sector.href}
            className="w-full py-3 px-4 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>Explore Sector</span>
            <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default SectorCard;
