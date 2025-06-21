"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUsers,
  FiGlobe,
  FiShield,
  FiBriefcase,
  FiUser,
  FiStar,
  FiMenu,
  FiX,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [location, setLocation] = useState<{ hash: string } | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      setLocation({ hash: window.location.hash });
    };

    setLocation({ hash: window.location.hash });
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigation items
  const navItems = [
    { label: "Home", href: "/", icon: <FiHome className="w-5 h-5" /> },
    {
      label: "Residents",
      href: "/#services",
      icon: <FiUsers className="w-5 h-5" />,
    },
    {
      label: "Visitors",
      href: "/explore",
      icon: <FiGlobe className="w-5 h-5" />,
    },
    {
      label: "Governor",
      href: "/governor",
      icon: <FiUser className="w-5 h-5" />,
    },
    {
      label: "Public Safety",
      href: "/resources/emergency",
      icon: <FiShield className="w-5 h-5" />,
    },
    {
      label: "Careers",
      href: "https://cpsb.nairobi.go.ke/",
      icon: <FiBriefcase className="w-5 h-5" />,
      external: true,
    },
  ];

  const festivalItem = {
    label: "Nairobi Festival",
    href: "/resources/nairobi-festival",
    icon: <FiStar className="w-5 h-5 text-amber-500" />,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", damping: 25, duration: 0.5 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", damping: 25, duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start w-full"
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      <motion.header
        id="navbar"
        className={`
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "mt-3 rounded-2xl w-[95%] max-w-screen-xl"
              : "w-full rounded-none"
          }
          ${
            isScrolled
              ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-1 border border-gray-200 dark:border-gray-700"
              : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md py-1"
          }
        `}
        animate={{
          y: isScrolled ? 0 : 0,
          scale: isScrolled ? 1 : 1,
          padding: isScrolled ? "0.25rem" : "0.25rem",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-1 flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center group">
              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-full transform transition-all duration-700 group-hover:rotate-[10deg]">
                  <Image
                    src="/images/nairobi-coat-of-arms.png"
                    alt="Nairobi County Coat of Arms"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </div>
              <div className="ml-3 flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Nairobi
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  County Government
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-grow">
            <motion.div
              className="flex items-center justify-center gap-6 px-4 py-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 group"
                    >
                      <span>{item.label}</span>
                      <FiExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`group relative px-3 py-1.5 font-medium transition-all duration-300 ${
                        pathname === item.href ||
                        (pathname === "/" &&
                          item.href === "/#services" &&
                          location?.hash === "#services")
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-amber-500 dark:bg-amber-400 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX:
                            pathname === item.href ||
                            (pathname === "/" &&
                              item.href === "/#services" &&
                              location?.hash === "#services")
                              ? 1
                              : 0,
                        }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Festival highlight */}
              <motion.div variants={itemVariants}>
                <Link
                  href={festivalItem.href}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/10 to-amber-600/10 dark:from-amber-500/15 dark:to-amber-600/15 hover:from-amber-500/20 hover:to-amber-600/20 transition-all duration-300 group"
                >
                  <span className="font-medium text-amber-700 dark:text-amber-300">
                    Festival
                  </span>
                  <motion.div
                    className="w-2 h-2 bg-amber-500 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg focus:outline-none group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-800 dark:text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-800 dark:text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                className="fixed top-[72px] right-0 w-full max-w-sm h-[calc(100vh-72px)] bg-white dark:bg-gray-900 shadow-xl overflow-y-auto z-50"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div
                  className="p-5 space-y-1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[...navItems, festivalItem].map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
                            pathname === item.href
                              ? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium"
                              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          }`}
                        >
                          <div className="mr-3 text-gray-600 dark:text-gray-400">
                            {item.icon}
                          </div>
                          <span className="flex-grow">{item.label}</span>
                          <FiExternalLink className="h-4 w-4 text-gray-400" />
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
                            pathname === item.href ||
                            (pathname === "/" &&
                              item.href === "/#services" &&
                              location?.hash === "#services")
                              ? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium"
                              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="mr-3 text-gray-600 dark:text-gray-400">
                            {item.icon}
                          </div>
                          <span className="flex-grow">{item.label}</span>
                          <FiArrowRight className="h-4 w-4 text-gray-400" />
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  {/* Festival highlight */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href={festivalItem.href}
                      className="mt-4 py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-amber-600/10 dark:from-amber-500/15 dark:to-amber-600/15 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center">
                          <FiStar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <div className="font-medium text-amber-700 dark:text-amber-300">
                            Nairobi Festival
                          </div>
                          <div className="text-xs text-amber-600 dark:text-amber-400/80">
                            Celebrating our city's culture
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className="ml-auto w-2 h-2 bg-amber-500 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </motion.div>
  );
};

export default Nav;
