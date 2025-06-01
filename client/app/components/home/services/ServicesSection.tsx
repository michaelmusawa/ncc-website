"use client";

import { ServiceSectionProps } from "@/app/lib/types";
import Contact from "../contact/contact";
import SearchBar from "../SearchBar";
import ServiceCategoryCard from "./ServiceCategoryCard";
import { useState } from "react";

export default function ServicesSection({
  heading,
  subHeading,
  services,
}: Readonly<ServiceSectionProps>) {
  // Track which userType tab is active (e.g. "all", "residents", "businesses", "visitors")
  const [activeUserType, setActiveUserType] = useState<string>("all");

  // Build a unique list of the userType enum values we have in `services`
  const allUserTypes = Array.from(
    new Set(services?.map((cat) => cat.userType))
  );

  // Always include "all" as an option
  if (!allUserTypes.includes("all")) {
    allUserTypes.unshift("all");
  }

  return (
    <section
      id="services"
      className="relative py-12 md:py-20 overflow-hidden scroll-mt-16 md:scroll-mt-20 bg-gray-50"
    >
      <div className="absolute inset-0 bg-gray-100/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-8 overflow-hidden">
          <div className="w-16 h-1 bg-accent rounded-full mb-4 transform transition-all duration-700 translate-y-4" />
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center transform transition-all duration-700 translate-y-4 delay-100"
            style={{ animationDelay: "0.3s" }}
          >
            {heading}
          </h2>
          <p
            className="text-gray-600 text-center mt-3 md:mt-4 max-w-3xl mx-auto text-sm sm:text-base transform transition-all duration-700 translate-y-4 section-animate delay-200"
            style={{ animationDelay: "0.5s" }}
          >
            {subHeading}
          </p>
        </div>

        {/* Services By Category */}
        <div className="w-full max-w-7xl mx-auto mb-16">
          {/* “Services by Category” sub‐heading (optional styling) */}
          <div className="flex items-center justify-center mb-6 relative">
            <div className="absolute left-16 w-12 h-1 bg-amber-400 rounded-full md:block" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 px-6 relative inline-block">
              <span className="relative z-10">Services by Category</span>
            </h3>
            <div className="absolute right-16 w-12 h-1 bg-amber-400 rounded-full md:block" />
          </div>

          {/* User Type Tabs */}
          <div className="flex justify-center mb-8 transform transition-all duration-700 translate-y-4 section-animate delay-300">
            <div className="bg-white p-2 rounded-xl shadow-md border border-gray-100 flex flex-wrap justify-center gap-2">
              {allUserTypes.map((ut) => (
                <button
                  key={ut}
                  onClick={() => setActiveUserType(ut)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeUserType === ut
                      ? // Pick a different color per userType, or fallback to primary
                        {
                          all: "bg-primary text-white shadow-md",
                          residents: "bg-green-600 text-white shadow-md",
                          businesses: "bg-amber-500 text-white shadow-md",
                          visitors: "bg-blue-500 text-white shadow-md",
                        }[ut] || "bg-primary text-white shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {ut === "all"
                    ? "All Services"
                    : ut.charAt(0).toUpperCase() + ut.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar Under Tabs */}
          <div className="w-full max-w-7xl mx-auto mb-8 flex justify-center transform transition-all duration-700 translate-y-4 delay-300">
            <div className="relative w-full max-w-lg mx-auto">
              <SearchBar variant="light" />
            </div>
          </div>

          {/* Instructions */}
          <h4 className="text-xl font-semibold text-center text-gray-700 mb-6">
            Select a service category to get started
          </h4>

          {/* Grid of Service Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 transform transition-all duration-700 translate-y-4 delay-400">
            {services &&
              services
                .filter((cat) =>
                  activeUserType === "all"
                    ? true
                    : cat.userType === activeUserType
                )
                .map((cat) => (
                  <ServiceCategoryCard
                    key={cat.title + cat.userType}
                    title={cat.title}
                    description={cat.description}
                    userType={cat.userType}
                    image={cat.image}
                    url={cat.url}
                    serviceItems={cat.serviceItems ?? []}
                    activeUserType={activeUserType}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
