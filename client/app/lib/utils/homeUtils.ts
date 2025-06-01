import { serviceMap } from "../data/homeData";

export const findServiceUrl = (query: string): string => {
  // Normalize the query and remove common question phrases
  let normalizedQuery = query.toLowerCase().trim();

  // Remove common question prefixes to focus on the core query
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
    "where are",
    "when can i",
    "who can",
    "tell me about",
    "information on",
    "find",
    "search for",
    "looking for",
    "need information about",
  ];

  for (const prefix of questionPrefixes) {
    if (normalizedQuery.startsWith(prefix)) {
      normalizedQuery = normalizedQuery.substring(prefix.length).trim();
      break;
    }
  }

  // Remove common question suffixes/endings
  const questionSuffixes = [
    "in nairobi",
    "in nairobi county",
    "in the county",
    "for nairobi",
    "for nairobi county",
    "for the county",
    "at nairobi",
    "at the county",
    "information",
    "details",
    "page",
    "services",
    "service",
  ];

  for (const suffix of questionSuffixes) {
    if (normalizedQuery.endsWith(suffix)) {
      normalizedQuery = normalizedQuery
        .substring(0, normalizedQuery.length - suffix.length)
        .trim();
      break;
    }
  }

  // Check for location mentions in query (for future geo-aware search feature)
  const nairobiLocations = [
    "westlands",
    "cbd",
    "karen",
    "eastleigh",
    "kilimani",
    "south b",
    "south c",
    "lavington",
    "langata",
    "upperhill",
    "industrial area",
    "downtown",
    "ngara",
    "parklands",
    "hurlingham",
    "kileleshwa",
  ];

  let locationMentioned = null;
  for (const location of nairobiLocations) {
    if (normalizedQuery.includes(location)) {
      locationMentioned = location;
      // Keep location in query as it might be relevant for matching
    }
  }

  // First try for an exact match with the core query
  const exactMatch = serviceMap.find(
    (item) =>
      normalizedQuery === item.term ||
      normalizedQuery.includes(item.term) ||
      item.term.includes(normalizedQuery)
  );

  if (exactMatch) return exactMatch.url;

  // For partial matches, calculate relevance score with improved algorithm
  const partialMatches = serviceMap
    .map((item) => {
      let score = 0;
      const termLower = item.term.toLowerCase();

      // Full term match is highest score
      if (normalizedQuery.includes(termLower)) {
        score += 100;
      } else if (termLower.includes(normalizedQuery)) {
        // If the term contains the entire query
        score += 90;
      }

      // Exact match with sector name
      if (normalizedQuery === item.sector.toLowerCase()) {
        score += 80;
      } else if (item.sector.toLowerCase().includes(normalizedQuery)) {
        // If sector contains the query
        score += 50;
      }

      // Handle word-by-word matching with more nuance
      const termWords = termLower.split(" ");
      const queryWords = normalizedQuery.split(" ");

      // Term words in query - stronger indicator
      for (const word of termWords) {
        if (word.length > 2) {
          // Consider shorter words too
          // Exact word match
          if (queryWords.includes(word)) {
            score += 30; // Higher score for exact word match
          }
          // Word is contained in query
          else if (normalizedQuery.includes(word)) {
            score += 15;
          }
          // Query contains part of this word (for stemming/partial matches)
          else if (word.length > 4) {
            for (const queryWord of queryWords) {
              if (
                queryWord.length > 3 &&
                (word.includes(queryWord) || queryWord.includes(word))
              ) {
                score += 8; // Partial match score
              }
            }
          }
        }
      }

      // Query words in term - also important
      for (const word of queryWords) {
        if (word.length > 2) {
          // Consider shorter words too
          // Exact word match already counted above
          // Word is contained in term
          if (termLower.includes(word)) {
            score += 10;
          }
        }
      }

      // If location was mentioned, boost scores for any items with that location
      if (locationMentioned && termLower.includes(locationMentioned)) {
        score += 40; // Significant boost for location-specific matches
      }

      // Boost certain important categories
      if (item.sector.toLowerCase().includes("emergency")) {
        score += 5; // Slight boost for emergency services
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (partialMatches.length > 0) {
    // Return the highest scoring match
    return partialMatches[0].url;
  }

  // If no match found but has words over 3 chars, try keyword search
  const queryWords = normalizedQuery
    .split(" ")
    .filter((word) => word.length > 3);
  if (queryWords.length > 0) {
    // Try finding any content with these keywords
    const keywordMatches = [];

    for (const word of queryWords) {
      for (const item of serviceMap) {
        if (
          item.term.toLowerCase().includes(word) ||
          item.sector.toLowerCase().includes(word)
        ) {
          keywordMatches.push({
            ...item,
            keywordRelevance: item.term.toLowerCase().includes(word) ? 10 : 5,
          });
        }
      }
    }

    if (keywordMatches.length > 0) {
      // Sort by keyword relevance
      keywordMatches.sort((a, b) => b.keywordRelevance - a.keywordRelevance);
      return keywordMatches[0].url;
    }
  }

  // If still no match found, check if query contains sector keywords
  const sectorKeywords = {
    business: "/sectors/business",
    finance: "/sectors/finance",
    environment: "/sectors/environment",
    health: "/sectors/health",
    digital: "/sectors/digital",
    education: "/sectors/talent",
    talent: "/sectors/talent",
    inclusion: "/sectors/inclusivity",
    inclusive: "/sectors/inclusivity",
    mobility: "/sectors/mobility",
    transport: "/sectors/mobility",
    urban: "/sectors/urban",
    planning: "/sectors/urban",
    admin: "/sectors/admin",
  };

  for (const [keyword, url] of Object.entries(sectorKeywords)) {
    if (normalizedQuery.includes(keyword)) {
      return url;
    }
  }

  // If no match found, redirect to search results page
  // For now, redirecting to services page as a fallback
  return "/services";
};
