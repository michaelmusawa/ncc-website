// SearchBar.tsx

"use client";
import { useMemo, useState } from "react";
import SearchSuggestions from "./SearchSuggestions";
import { findServiceUrl } from "@/app/lib/utils/homeUtils";
import { SearchSuggestion } from "@/app/lib/types";
import { serviceMap } from "@/app/lib/data/homeData";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  onSubmit,
  variant = "dark",
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSubmit: () => void;
  variant?: "dark" | "light";
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const filteredSuggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];

    const query = searchQuery.toLowerCase().trim();
    const suggestions: SearchSuggestion[] = [];
    const addedTerms = new Set<string>(); // Track added terms to avoid duplicates

    // Remove common question prefixes from query for better matching
    let normalizedQuery = query;
    const questionPrefixes = [
      "how do i",
      "how to",
      "where can i",
      "where to",
      "what is",
      "how can i",
      "i need to",
      "i want to",
      "can i",
      "where is",
      "tell me about",
      "information on",
      "find",
      "search for",
    ];

    for (const prefix of questionPrefixes) {
      if (normalizedQuery.startsWith(prefix)) {
        normalizedQuery = normalizedQuery.substring(prefix.length).trim();
        break;
      }
    }

    // First pass: Find exact and high-quality matches
    serviceMap.forEach((item) => {
      const termLower = item.term.toLowerCase();
      // Check for various matching patterns
      if (
        termLower === normalizedQuery ||
        termLower.includes(normalizedQuery) ||
        normalizedQuery.includes(termLower)
      ) {
        if (!addedTerms.has(termLower)) {
          suggestions.push({
            text: item.term,
            url: item.url,
            sector: item.sector,
          });
          addedTerms.add(termLower);
        }
      }
    });

    // Second pass: Find word-level matches if we don't have enough suggestions
    if (suggestions.length < 10) {
      const queryWords = normalizedQuery
        .split(" ")
        .filter((word) => word.length > 2);

      if (queryWords.length > 0) {
        serviceMap.forEach((item) => {
          const termLower = item.term.toLowerCase();
          if (!addedTerms.has(termLower)) {
            // Check if any query word matches parts of the term
            let matchFound = false;
            for (const word of queryWords) {
              if (
                termLower.includes(word) ||
                item.sector.toLowerCase().includes(word)
              ) {
                matchFound = true;
                break;
              }
            }

            if (matchFound) {
              suggestions.push({
                text: item.term,
                url: item.url,
                sector: item.sector,
              });
              addedTerms.add(termLower);
            }
          }
        });
      }
    }

    // Third pass: Check for sector-specific matches if still not enough
    if (suggestions.length < 8) {
      serviceMap.forEach((item) => {
        const termLower = item.term.toLowerCase();
        if (!addedTerms.has(termLower)) {
          if (item.sector.toLowerCase().includes(normalizedQuery)) {
            suggestions.push({
              text: item.term,
              url: item.url,
              sector: item.sector,
            });
            addedTerms.add(termLower);
          }
        }
      });
    }

    // Sort suggestions by relevance with a comprehensive scoring system
    const scoredSuggestions = suggestions.map((suggestion) => {
      let score = 0;
      const textLower = suggestion.text.toLowerCase();

      // Exact match gets highest score
      if (textLower === normalizedQuery) {
        score += 100;
      }
      // Term contains entire query
      else if (textLower.includes(normalizedQuery)) {
        score += 80;
        // Additional points if it starts with the query
        if (textLower.startsWith(normalizedQuery)) {
          score += 15;
        }
      }
      // Query contains entire term
      else if (normalizedQuery.includes(textLower)) {
        score += 60;
      }

      // Word-level matching
      const termWords = textLower.split(" ");
      const queryWords = normalizedQuery.split(" ");

      // Count how many term words appear in query
      for (const word of termWords) {
        if (word.length > 2 && queryWords.includes(word)) {
          score += 10;
        }
      }

      // Sector match bonus
      if (suggestion.sector.toLowerCase().includes(normalizedQuery)) {
        score += 20;
      }

      // Shorter terms get slight boost (more specific)
      if (textLower.length < 15) {
        score += 5;
      }

      // Online service bonus (users often look for online services)
      if (suggestion.url.includes("nairobiservices.go.ke")) {
        score += 8;
      }

      return { ...suggestion, score };
    });

    // Sort by score
    scoredSuggestions.sort((a, b) => b.score - a.score);

    // Limit to top 8 suggestions for better UX, ensuring diverse results
    const result = [];
    const includedSectors = new Set<string>();
    const maxPerSector = 2; // Max number of results from the same sector
    const sectorCounts: Record<string, number> = {};

    for (const suggestion of scoredSuggestions) {
      const sector = suggestion.sector.toLowerCase();
      sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;

      // Only add if we haven't reached max for this sector
      if (sectorCounts[sector] <= maxPerSector) {
        result.push(suggestion);
        includedSectors.add(sector);

        // Stop once we have enough suggestions
        if (result.length >= 10) break;
      }
    }

    return result;
  }, [searchQuery]);

  return (
    <div className="relative w-full">
      <form
        id="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchQuery.trim()) {
            // Use the findServiceUrl function to redirect to the appropriate page
            const redirectUrl = findServiceUrl(searchQuery);
            window.location.href = redirectUrl;
          }
        }}
      >
        <div className="relative w-full">
          <div className="relative w-full flex rounded-full border-2 border-gray-300 items-center hover:border-green-600 transition duration-300">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search for services, permits, or payments..."
              className="w-full py-3 pl-10 pr-4 rounded-full focus:outline-none"
              aria-autocomplete="list"
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActiveSuggestion((prev) =>
                    prev < filteredSuggestions.length - 1 ? prev + 1 : prev
                  );
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : 0));
                } else if (e.key === "Enter") {
                  e.preventDefault();
                  if (
                    activeSuggestion >= 0 &&
                    filteredSuggestions[activeSuggestion]
                  ) {
                    // If a suggestion is active, navigate to that suggestion's URL
                    setSearchQuery(filteredSuggestions[activeSuggestion].text);
                    setShowSuggestions(false);
                    // Navigate to the selected suggestion URL
                    window.location.href =
                      filteredSuggestions[activeSuggestion].url;
                  } else if (searchQuery.trim()) {
                    // If no suggestion is active but there is a search query, use findServiceUrl
                    const redirectUrl = findServiceUrl(searchQuery);
                    // Redirect to the determined URL based on search query
                    window.location.href = redirectUrl;
                  }
                }
              }}
            />
            <div className="absolute left-3 top-3.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
          </div>
        </div>
      </form>
      {showSuggestions && (
        <SearchSuggestions
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setShowSuggestions={setShowSuggestions}
          activeSuggestion={activeSuggestion}
          setActiveSuggestion={setActiveSuggestion}
        />
      )}
    </div>
  );
}
