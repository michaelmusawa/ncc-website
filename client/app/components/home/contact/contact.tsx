"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";

const Contact = () => {
  const contactOptions = [
    {
      icon: <FiPhone className="h-6 w-6 text-white" />,
      title: "Call Support",
      description: "8:00 AM - 5:00 PM, Monday to Friday",
      action: "tel:+254725624489",
      label: "+254 725 624 489",
    },
    {
      icon: <FiMail className="h-6 w-6 text-white" />,
      title: "Email Us",
      description: "We typically respond within 24 hours",
      action: "mailto:info@nairobi.go.ke",
      label: "info@nairobi.go.ke",
    },
    {
      icon: <FiMapPin className="h-6 w-6 text-white" />,
      title: "Visit Our Offices",
      description: "City Hall, City Hall Way, Nairobi",
      action: "https://maps.app.goo.gl/wW1aMVGdmD3V5JDAA",
      label: "Get Directions",
    },
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
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 rotate-45 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full -translate-x-1/3 rotate-12 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-300 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Couldn't find what you're looking for? Our dedicated team is here
              to help with any questions about county services and programs.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col items-start">
                    <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {option.description}
                    </p>
                    <a
                      href={option.action}
                      target={
                        option.action.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center font-medium text-primary dark:text-blue-400 group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors"
                    >
                      {option.label}
                      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1 duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-primary/10 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800"
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-4">
                  <FiMessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Need specific assistance?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team is ready to provide personalized support
                  </p>
                </div>
              </div>

              <div className="text-center md:text-right">
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-3.5 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-base font-medium group"
                >
                  <span className="flex items-center gap-2">
                    Submit Your Question
                    <FiArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  We respond to all inquiries within 2 business days
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
