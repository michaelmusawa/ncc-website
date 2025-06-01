// SearchSuggestions.tsx

import { SearchSuggestion } from "@/app/lib/types";

export default function SearchSuggestions({
  searchQuery,
  setSearchQuery,
  setShowSuggestions,
  activeSuggestion,
  setActiveSuggestion,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setShowSuggestions: (show: boolean) => void;
  activeSuggestion: number;
  setActiveSuggestion: (index: number) => void;
}) {
  // Filter suggestions logic
  const filteredSuggestions: SearchSuggestion[] = [];

  return (
    <div
      style={{ position: "relative", zIndex: 9999 }}
      className="absolute mt-1 w-full bg-white/95 backdrop-blur-sm rounded-md shadow-xl max-h-80 overflow-auto border border-white/30"
    >
      {filteredSuggestions.length > 0 ? (
        <>
          <div className="px-4 py-2 bg-primary/5 border-b border-gray-100 sticky top-0 z-10">
            <p className="text-xs text-primary/70">
              Showing {filteredSuggestions.length} suggestions for &quot;
              {searchQuery}&quot;
            </p>
          </div>
          <ul className="py-1 text-sm divide-y divide-gray-50">
            {filteredSuggestions.map((suggestion, index) => {
              // Determine sector color based on sector name
              let sectorColor = "bg-gray-100 text-gray-700";
              if (suggestion.sector.toLowerCase().includes("business")) {
                sectorColor = "bg-amber-50 text-amber-700";
              } else if (
                suggestion.sector.toLowerCase().includes("environment")
              ) {
                sectorColor = "bg-green-50 text-green-700";
              } else if (suggestion.sector.toLowerCase().includes("health")) {
                sectorColor = "bg-red-50 text-red-700";
              } else if (suggestion.sector.toLowerCase().includes("digital")) {
                sectorColor = "bg-blue-50 text-blue-700";
              } else if (
                suggestion.sector.toLowerCase().includes("education") ||
                suggestion.sector.toLowerCase().includes("talent")
              ) {
                sectorColor = "bg-indigo-50 text-indigo-700";
              } else if (
                suggestion.sector.toLowerCase().includes("inclusivity")
              ) {
                sectorColor = "bg-purple-50 text-purple-700";
              } else if (
                suggestion.sector.toLowerCase().includes("transport") ||
                suggestion.sector.toLowerCase().includes("mobility")
              ) {
                sectorColor = "bg-rose-50 text-rose-700";
              } else if (
                suggestion.sector.toLowerCase().includes("urban") ||
                suggestion.sector.toLowerCase().includes("land")
              ) {
                sectorColor = "bg-yellow-50 text-yellow-700";
              }

              return (
                <li
                  key={index}
                  className={`px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                    index === activeSuggestion ? "bg-gray-50" : ""
                  }`}
                  onClick={() => {
                    setSearchQuery(suggestion.text);
                    setShowSuggestions(false);
                    // Redirect directly to the appropriate sector/service page
                    window.location.href = suggestion.url;
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="font-medium">{suggestion.text}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${sectorColor} flex-shrink-0`}
                    >
                      {suggestion.sector}
                    </span>
                  </div>
                  <div className="mt-1 ml-6 text-xs text-gray-500">
                    {suggestion.url.includes("nairobiservices.go.ke") ? (
                      <span className="flex items-center gap-1">
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Online Service</span>
                      </span>
                    ) : suggestion.url.includes("#") ? (
                      <span className="flex items-center gap-1">
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
                        <span>Sector Section</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Information Page</span>
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <div className="p-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-300 mx-auto mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-sm text-gray-500">
            No matching services found
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Try a different search term or explore our sectors
          </div>
        </div>
      )}
    </div>
  );
}
