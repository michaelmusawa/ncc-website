import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
      id="services"
      className="relative py-12 md:py-20 overflow-hidden scroll-mt-16 md:scroll-mt-20 bg-gray-50"
    >
      <div>
        {" "}
        <div className="mt-16 w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50/50 rounded-full -mr-20 -mt-20 z-0"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16 z-0"></div>

            <div className="p-6 md:p-8 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Get in Touch
                </h3>
              </div>

              <p className="text-gray-600 mb-8 text-sm md:text-base max-w-3xl border-l-2 border-gray-200 pl-4 italic">
                Couldn&apos;t find what you&apos;re looking for? Our dedicated
                team is here to help with any questions about county services
                and programs.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Call Support Card */}
                <div className="bg-white rounded-lg p-5 transition-all duration-300 hover:shadow-md border border-gray-100 group hover:-translate-y-1 transform">
                  <div className="flex flex-col items-start">
                    <div className="bg-primary/10 rounded-full p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-base font-semibold text-gray-800 mb-2">
                      Call Support
                    </h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      8:00 AM - 5:00 PM, Monday to Friday
                    </p>
                    <a
                      href="tel:+254725624489"
                      className="text-primary font-medium hover:text-primary-dark inline-flex items-center text-sm mt-auto"
                    >
                      +254 725 624 489
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Email Us Card */}
                <div className="bg-white rounded-lg p-5 transition-all duration-300 hover:shadow-md border border-gray-100 group hover:-translate-y-1 transform">
                  <div className="flex flex-col items-start">
                    <div className="bg-primary/10 rounded-full p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-base font-semibold text-gray-800 mb-2">
                      Email Us
                    </h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      We typically respond within 24 hours
                    </p>
                    <a
                      href="mailto:info@nairobi.go.ke"
                      className="text-primary font-medium hover:text-primary-dark inline-flex items-center text-sm mt-auto"
                    >
                      info@nairobi.go.ke
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Visit Us Card */}
                <div className="bg-white rounded-lg p-5 transition-all duration-300 hover:shadow-md border border-gray-100 group hover:-translate-y-1 transform">
                  <div className="flex flex-col items-start">
                    <div className="bg-primary/10 rounded-full p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-base font-semibold text-gray-800 mb-2">
                      Visit Our Offices
                    </h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      City Hall, City Hall Way, Nairobi
                    </p>
                    <a
                      href="https://maps.app.goo.gl/wW1aMVGdmD3V5JDAA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:text-primary-dark inline-flex items-center text-sm mt-auto"
                    >
                      Get Directions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 pt-4 border-t border-gray-100">
                <div className="hidden md:flex items-center gap-4">
                  <div className="bg-primary/5 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800">
                      Need specific assistance?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Our team is ready to provide personalized support
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <Link
                    href="/inquiry"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg text-sm font-medium group"
                  >
                    <span className="flex items-center gap-2">
                      Submit Your Question
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </Link>
                  <p className="mt-2 text-xs text-gray-500">
                    We respond to all inquiries within 2 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
