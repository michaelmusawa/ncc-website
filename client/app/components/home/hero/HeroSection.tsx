"use client";

import SearchBar from "../SearchBar";
import { HeroSectionProps } from "@/app/lib/types";
import HeroSlider from "./Slider";

export default function HeroSection({
  title,
  subTitle,
  images,
  cta,
}: Readonly<HeroSectionProps>) {
  return (
    <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background slider */}
      <HeroSlider images={images} />

      {/* Overlay container: one column, centered */}
      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg animate-slideInDown hero-animate"
          style={{ animationDelay: "0.3s" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl text-amber-200 max-w-2xl leading-relaxed drop-shadow-sm animate-slideInDown hero-animate"
          style={{ animationDelay: "0.5s" }}
        >
          {subTitle}
        </p>

        {/* Search Bar Card (centered, prominent) */}
        <div
          className="w-full max-w-md mx-auto bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-6 animate-slideInUp hero-animate"
          style={{ animationDelay: "0.7s" }}
        >
          <SearchBar />
        </div>

        {/* CTAs under search bar */}
        <div
          className="flex flex-wrap gap-4 sm:gap-6 mt-4 md:mt-6 animate-slideInUp hero-animate"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="https://nairobiservices.go.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base"
          >
            <span>E-Services</span>
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <a
            href="#services"
            className="px-5 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
          >
            <span>Our Services</span>
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Bottom row: Weather + Stats */}
        <div
          className="mt-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 animate-slideInUp hero-animate"
          style={{ animationDelay: "1.1s" }}
        >
          {/* Weather Widget */}
          {/* <div className="bg-white/20 backdrop-blur-md p-5 rounded-xl border border-white/30 shadow-lg w-full sm:w-auto max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold text-lg">Nairobi Weather</h3>
              <div className="text-white/80 text-sm">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-amber-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  25°C
                </div>
                <div className="text-white/80">Partly Cloudy</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/10 p-2 rounded-lg">
                <div className="text-white/70 text-xs">Humidity</div>
                <div className="text-white font-medium">62%</div>
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <div className="text-white/70 text-xs">Wind</div>
                <div className="text-white font-medium">12 km/h</div>
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <div className="text-white/70 text-xs">UV Index</div>
                <div className="text-white font-medium">5</div>
              </div>
            </div>
          </div> */}

          {/* City Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg">
            <div className="bg-primary/30 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex flex-col items-center text-center">
              <div className="text-xs text-white/70 uppercase tracking-wide mb-1">
                Population
              </div>
              <div
                className="text-2xl font-bold text-white counter-animation"
                data-target="4.4"
              >
                4.4
              </div>
              <div className="text-white/80 text-sm">Million Residents</div>
            </div>
            <div className="bg-primary/30 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex flex-col items-center text-center">
              <div className="text-xs text-white/70 uppercase tracking-wide mb-1">
                Area
              </div>
              <div
                className="text-2xl font-bold text-white counter-animation"
                data-target="696"
              >
                696
              </div>
              <div className="text-white/80 text-sm">Sq. Kilometers</div>
            </div>
            <div className="bg-primary/30 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex flex-col items-center text-center">
              <div className="text-xs text-white/70 uppercase tracking-wide mb-1">
                Services
              </div>
              <div
                className="text-2xl font-bold text-white counter-animation"
                data-target="135"
              >
                135
              </div>
              <div className="text-white/80 text-sm">E-Services</div>
            </div>
            <div className="bg-primary/30 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex flex-col items-center text-center">
              <div className="text-xs text-white/70 uppercase tracking-wide mb-1">
                Wards
              </div>
              <div
                className="text-2xl font-bold text-white counter-animation"
                data-target="85"
              >
                85
              </div>
              <div className="text-white/80 text-sm">Administrative</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - centered at bottom */}
      <div
        className="absolute bottom-8 left-0 right-0 mx-auto z-10 flex justify-center animate-bounce animate-slideInUp hero-animate"
        style={{ animationDelay: "1.3s", animationDuration: "2s" }}
      >
        <a
          href="#services"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
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
        </a>
      </div>
    </section>
  );
}
