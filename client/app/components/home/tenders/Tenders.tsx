import React from "react";

const Tenders = () => {
  return (
    <section
      id="tenders"
      className="relative py-12 md:py-20 overflow-hidden scroll-mt-16 md:scroll-mt-20 bg-gray-50"
    >
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            Active Tenders
          </h3>
          <a
            href="/resources/tenders-procurement"
            className="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1 transition-all duration-300 hover:gap-2"
          >
            View All Tenders
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Reference
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Closing Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    NCC/T/05/2025
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Supply and Installation of Traffic Management Systems
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Infrastructure
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    June 15, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Open
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="/resources/tenders/NCC-T-05-2025"
                      className="text-primary hover:text-primary-dark"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    NCC/T/06/2025
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Construction of Community Health Centers in Embakasi and
                    Kasarani
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Health
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    June 8, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Closing Soon
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="/resources/tenders/NCC-T-06-2025"
                      className="text-primary hover:text-primary-dark"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    NCC/T/07/2025
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Supply of Office Equipment and Furniture for City Hall Annex
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Supplies
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    June 20, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Open
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="/resources/tenders/NCC-T-07-2025"
                      className="text-primary hover:text-primary-dark"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenders;
