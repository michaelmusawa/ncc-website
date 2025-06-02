// components/Card.tsx
"use client";

import React, { useState } from "react";
import { ServiceCategory, ServiceItem } from "@/app/lib/types";
import { StrapiImage } from "../../StrapiImage";

interface CardProps
  extends Readonly<ServiceCategory & { activeUserType: string }> {}

const Card: React.FC<CardProps> = ({
  title,
  description,
  userType,
  image,
  url,
  serviceItems,
  activeUserType,
}) => {
  // Don’t render if this category’s userType is not “all” and not equal to activeUserType
  const shouldHide = activeUserType !== "all" && activeUserType !== userType;

  // State to toggle service list visibility
  const [showServices, setShowServices] = useState(false);
  // State for which service‐item tooltip is open
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(
    null
  );
  // State to show/hide image tooltip
  const [hoveredImage, setHoveredImage] = useState(false);
  if (shouldHide) {
    return null;
  }

  // Renders the tooltip for a service item, positioned to the right
  const renderServiceTooltip = (item: ServiceItem) => {
    if (!hoveredService || hoveredService.text !== item.text) {
      return null;
    }

    return (
      <div
        className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm text-gray-700 z-50"
        onMouseEnter={() => setHoveredService(item)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <h5 className="font-semibold text-gray-800 mb-1">{item.text}</h5>
        <p className="text-gray-600">
          {/* Dummy details */}
          Detailed info about "{item.text}".{" "}
          {item.text || "No further description."}
        </p>
      </div>
    );
  };

  // Renders the tooltip for the image header, positioned to the right
  const renderImageTooltip = () => {
    if (!hoveredImage) return null;
    return (
      <div
        className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-gray-800 text-sm z-50"
        onMouseEnter={() => setHoveredImage(true)}
        onMouseLeave={() => setHoveredImage(false)}
      >
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-600 text-xs">{description}</p>
        {/* Preview of up to 3 services */}
        {serviceItems?.length ? (
          <ul className="mt-2 space-y-1">
            {serviceItems.slice(0, 3).map((svc, idx) => (
              <li key={idx} className="flex items-center text-gray-600 text-xs">
                <span className="w-4 h-4 mr-1 flex items-center justify-center text-amber-500">
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
                </span>
                {svc.text}
              </li>
            ))}
            {serviceItems.length > 3 && (
              <li className="text-xs text-gray-500">
                +{serviceItems.length - 3} more
              </li>
            )}
          </ul>
        ) : null}
      </div>
    );
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-[1.02] flex flex-col relative overflow-visible z-20">
      {/* ========== IMAGE HEADER WRAPPER ========== */}
      <div
        className="relative h-24 bg-gradient-to-r from-amber-500/90 to-amber-400/80 rounded-t-xl"
        onMouseEnter={() => setHoveredImage(true)}
        onMouseLeave={() => setHoveredImage(false)}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

        {image?.url && (
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || title}
            className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-t-xl"
            width={1920}
            height={1080}
          />
        )}

        {url && (
          <a
            href={url.href}
            target={url.isExternal ? "_blank" : "_self"}
            rel={url.isExternal ? "noopener noreferrer" : undefined}
            className="absolute bottom-3 right-3 bg-white/90 text-amber-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm transition hover:bg-white"
          >
            {url.text}
          </a>
        )}

        {/* Image Tooltip (positioned to the right) */}
        {renderImageTooltip()}
      </div>

      {/* ========== CONTENT SECTION ========== */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title + Underline */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="h-1 w-16 bg-amber-200 rounded-full mt-2 mb-3" />
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {description}
          </p>
        </div>

        {/* Toggleable Service Count / List */}
        <div className="mb-4">
          {/* Show “N services ▶” when collapsed */}
          {!showServices && serviceItems?.length ? (
            <button
              onClick={() => setShowServices(true)}
              className="flex items-center text-gray-700 hover:text-amber-600 transition-all duration-300 text-sm"
            >
              <span className="mr-2">{serviceItems.length} services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
            </button>
          ) : null}

          {/* Expanded service list */}
          {showServices && serviceItems?.length ? (
            <div className="space-y-2">
              {serviceItems.map((item: ServiceItem, idx: number) => (
                // ========== SERVICE ITEM WRAPPER ==========
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setHoveredService(item)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center text-gray-700 hover:text-amber-600 hover:pl-1 transition-all duration-300 text-sm group/link"
                  >
                    <span className="w-5 h-5 mr-2 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover/link:bg-amber-100 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
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
                    </span>
                    {item.text}
                  </a>

                  {/* Service Tooltip (right side) */}
                  {renderServiceTooltip(item)}
                </div>
              ))}

              <button
                onClick={() => setShowServices(false)}
                className="flex items-center text-gray-500 hover:text-gray-800 transition-all duration-300 text-xs mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                Hide services
              </button>
            </div>
          ) : null}
        </div>

        {/* Action Buttons (Apply / Visit) */}
        <div className="pt-4 grid grid-cols-2 gap-3 border-t border-gray-100 mt-auto">
          <a
            href="https://nairobiservices.go.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 text-sm bg-primary text-white font-medium rounded-lg shadow-sm hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-1.5"
            title="Apply online"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            Apply Online
          </a>
          <a
            href="https://maps.google.com/?q=City+Hall+Annex+Nairobi"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 text-sm bg-gray-100 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-1.5"
            title="Visit City Hall Annex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Visit Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
