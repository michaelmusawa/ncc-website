"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLink,
  FiShare2,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiExternalLink,
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FiFacebook className="h-5 w-5" />,
      url: "https://www.facebook.com/NairobiCountyGovernment",
      label: "Facebook",
    },
    {
      icon: <FiTwitter className="h-5 w-5" />,
      url: "https://twitter.com/NairobiCountyGov",
      label: "Twitter",
    },
    {
      icon: <FiInstagram className="h-5 w-5" />,
      url: "https://www.instagram.com/nairobicountygov/",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources" },
    { name: "Explore Nairobi", href: "/explore" },
    { name: "Contact Us", href: "/inquiry" },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative text-white py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#012518] to-[#014a2f]">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-green-600/10 to-transparent rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-green-500/10 to-transparent rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0v100M100 0v100M0 50h100M50 0v100M0 25h100M0 75h100M25 0v100M75 0v100' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* County Logo & Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-xl font-bold text-accent">N</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Nairobi City County
              </h3>
            </div>
            <p className="text-gray-200 mb-6">
              The official website of Nairobi City County Government
            </p>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://nairobiservices.go.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300"
            >
              <span>E-Services Portal</span>
              <FiExternalLink className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/20 p-2 rounded-lg">
                <FiLink className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="group-hover:underline">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/20 p-2 rounded-lg">
                <FiShare2 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white">Connect With Us</h3>
            </div>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    {social.icon}
                  </div>
                  <span className="group-hover:underline">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/20 p-2 rounded-lg">
                <FiMail className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white">Contact Us</h3>
            </div>
            <ul className="space-y-4">
              <motion.li
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="bg-accent/20 p-2 rounded-lg mt-0.5">
                  <FiMapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="text-gray-200">
                  Nairobi City Hall
                  <br />
                  City Hall Way
                  <br />
                  P.O. Box 30075-00100
                  <br />
                  Nairobi, Kenya
                </div>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="bg-accent/20 p-2 rounded-lg">
                  <FiPhone className="h-5 w-5 text-accent" />
                </div>
                <span className="text-gray-200">+254 725 624 489</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="bg-accent/20 p-2 rounded-lg">
                  <FiMail className="h-5 w-5 text-accent" />
                </div>
                <span className="text-gray-200">info@nairobi.go.ke</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright and Back to Top */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-300 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Nairobi City County Government.
              All rights reserved.
            </p>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300"
          >
            <span>Back to Top</span>
            <FiArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
