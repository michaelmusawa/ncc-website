"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [location, setLocation] = useState<{ hash: string } | null>(null);
  const pathname = usePathname();
  // Comment out unused state for now - might be used for future navigation highlighting
  // const [activeLink, setActiveLink] = useState('');

  // Handle scroll effect with smooth transition and detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine scroll direction
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        // Scrolling down and past threshold
        setIsVisible(false);
      }

      // Always update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Track hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setLocation({ hash: window.location.hash });
    };

    // Set initial hash
    setLocation({ hash: window.location.hash });

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Add animation keyframes to the document
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideIn {
        0% { transform: translateX(-20px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-1px); }
      }
      @keyframes slideDown {
        from { transform: translateY(-120%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      /* Scroll transition effect */
      #navbar {
        transition: all 0.4s ease-in-out;
      }
      #navbar.scrolled {
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
      
      /* Fix for mobile overflow */
      html, body {
        overflow-x: hidden;
        width: 100%;
        position: relative;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
      @keyframes borderGlow {
        0% { box-shadow: 0 0 0px rgba(230, 180, 0, 0); }
        50% { box-shadow: 0 0 10px rgba(230, 180, 0, 0.3); }
        100% { box-shadow: 0 0 0px rgba(230, 180, 0, 0); }
      }
      @keyframes dashOffset {
        from { stroke-dashoffset: 24; }
        to { stroke-dashoffset: 0; }
      }
      .animate-fadeIn {
        animation: fadeIn 0.7s ease-out forwards;
      }
      .animate-slideIn {
        animation: slideIn 0.5s ease-out forwards;
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      .animate-slideDown {
        animation: slideDown 0.3s ease-out forwards;
      }
      .animate-slideUp {
        animation: slideUp 0.3s ease-out forwards;
      }
      .animate-pulse-soft {
        animation: pulse 3s ease-in-out infinite;
      }
      .animate-border-glow {
        animation: borderGlow 3s ease-in-out infinite;
      }
      .animate-dash {
        stroke-dasharray: 24;
        animation: dashOffset 1.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    // Proper cleanup function that returns void
    return function cleanup() {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start w-full transition-transform duration-500 ease-in-out"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <header
        id="navbar"
        className={`
          transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? "mt-4 rounded-full w-[95%] max-w-screen-xl"
              : "w-full rounded-none"
          }
          ${isVisible && isScrolled ? "animate-slideDown" : ""}
          ${
            isScrolled
              ? "bg-gradient-to-r from-[#003823]/95 to-[#004a2f]/90 backdrop-blur-[3px] shadow-xl py-0.5"
              : "bg-gradient-to-r from-[#003823]/80 to-[#004a2f]/75 backdrop-blur-[1px] shadow-lg py-1"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 py-1 flex justify-between items-center">
          {/* County Coat of Arms Logo with Animation */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-visible">
                {/* Pulsing glow effect behind the coat of arms */}
                <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Subtle rotation animation */}
                <div className="relative w-full h-full transform transition-transform duration-1000 ease-in-out group-hover:rotate-[360deg]">
                  <Image
                    src="/images/nairobi-coat-of-arms.png"
                    alt="Nairobi County Coat of Arms"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>

                {/* Sparkle effect on hover */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500 animate-ping"></div>
              </div>
            </div>
          </Link>

          {/* Simplified Desktop Navigation with Centered Links */}
          <nav className="hidden md:flex items-center justify-center flex-grow animate-fadeIn">
            <div className="flex items-center justify-center gap-8 px-4 py-2">
              <Link
                href="/"
                className="group relative px-2 py-1 font-medium text-white/90 transition-colors duration-300"
              >
                <span>Home</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    pathname === "/" && !location?.hash
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="/#services"
                className="group relative px-2 py-1 font-medium text-white/90 transition-colors duration-300"
              >
                <span>Residents</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    pathname === "/" && location?.hash === "#services"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="/explore"
                className="group relative px-2 py-1 font-medium text-white/90 transition-colors duration-300"
              >
                <span>Visitors</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    pathname === "/explore"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="/governor"
                className="group relative px-2 py-1 font-medium text-white/90 transition-colors duration-300"
              >
                <span>Governor</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    pathname === "/governor"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="/resources/emergency"
                className="group relative px-2 py-1 font-medium text-white/90 transition-colors duration-300"
              >
                <span>Public Safety</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                    pathname === "/resources/emergency"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <a
                href="https://cpsb.nairobi.go.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-2 py-1 font-medium text-white/90 transition-colors duration-300"
              >
                <span className="flex items-center gap-1">
                  Careers
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-amber-400 transition-all duration-300 w-0 group-hover:w-full`}
                ></span>
              </a>

              {/* Nairobi Festival Logo with simplified elegant animation */}
              <div className="ml-2 mr-2 relative group">
                <Link
                  href="/resources/nairobi-festival"
                  className="block relative z-10"
                >
                  <div className="relative h-12 w-40 flex items-center justify-center overflow-visible">
                    {/* Logo with clean animations */}
                    <Image
                      src="/images/nairobi-festival-logo.png"
                      alt="Nairobi Festival"
                      width={180}
                      height={60}
                      className="object-contain relative z-10 transform transition-transform duration-500 ease-out group-hover:scale-110"
                    />

                    {/* Simple elegant golden glow effect that appears on hover */}
                    <div className="absolute inset-0 -z-10 bg-amber-400/0 group-hover:bg-amber-400/20 blur-xl rounded-full transition-all duration-700 ease-in-out scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
                  </div>
                </Link>

                {/* Active page indicator */}
                {pathname === "/resources/nairobi-festival" && (
                  <div className="absolute -right-1 bottom-0 w-2 h-2 bg-amber-400 rounded-full"></div>
                )}
              </div>
            </div>
          </nav>

          {/* Enhanced Mobile menu button with animations */}
          <button
            className="md:hidden p-2 text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-opacity-50 relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Animated border effect for mobile menu button */}
            <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#e6b400]/30 to-[#ffc60a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <div className="w-6 h-6 relative flex justify-center items-center">
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>

              <span
                className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "w-0" : "w-5"
                }`}
              ></span>

              <span
                className={`absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile menu with animations and improved UI */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu panel with slide-in animation */}
          <div
            className={`absolute top-[72px] right-0 w-full max-w-sm h-[calc(100vh-72px)] bg-gradient-to-b from-primary/80 to-primary/75 backdrop-blur-[2px] shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-5 space-y-2">
              <Link
                href="/"
                className={`py-3 px-4 flex items-center justify-between rounded-lg transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/90 hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-3">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Home</span>
                </span>
                {pathname === "/" && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                )}
              </Link>
              <Link
                href="/#services"
                className={`py-3 px-4 flex items-center justify-between rounded-lg transition-all duration-200 ${
                  pathname === "/" && location?.hash === "#services"
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/90 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>Residents</span>
                </span>
                {pathname === "/" && location?.hash === "#services" && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                )}
              </Link>
              <Link
                href="/explore"
                className={`py-3 px-4 flex items-center justify-between rounded-lg transition-all duration-200 ${
                  pathname === "/explore"
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/90 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span>Visitors</span>
                </span>
                {pathname === "/explore" && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                )}
              </Link>
              <Link
                href="/resources/emergency"
                className={`py-3 px-4 flex items-center justify-between rounded-lg transition-all duration-200 ${
                  pathname === "/resources/emergency"
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/90 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Public Safety</span>
                </span>
                {pathname === "/resources/emergency" && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                )}
              </Link>
              <a
                href="https://cpsb.nairobi.go.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 flex items-center justify-between rounded-lg transition-all duration-200 text-white/90 hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="flex items-center gap-1">
                    Careers
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </span>
              </a>

              {/* Nairobi Festival Logo with simplified elegant animation */}
              <div
                className={`relative py-4 px-4 my-2 rounded-lg transition-all duration-300 ${
                  pathname === "/resources/nairobi-festival"
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }`}
              >
                <Link
                  href="/resources/nairobi-festival"
                  className="flex items-center justify-center w-full relative z-10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative h-14 w-full flex items-center justify-center overflow-visible">
                    {/* Logo with clean animations */}
                    <Image
                      src="/images/nairobi-festival-logo.png"
                      alt="Nairobi Festival"
                      width={220}
                      height={80}
                      className="object-contain relative z-10 transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Simple elegant golden glow effect */}
                    <div className="absolute inset-0 -z-10 bg-amber-400/10 blur-xl rounded-full opacity-70"></div>
                  </div>
                </Link>

                {/* Festival indicator */}
                {pathname === "/resources/nairobi-festival" && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
                )}
              </div>

              <Link
                href="/governor"
                className={`py-3 px-4 flex items-center justify-between rounded-lg transition-all duration-200 ${
                  pathname === "/governor"
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/90 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Governor</span>
                </span>
                {pathname === "/governor" && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
