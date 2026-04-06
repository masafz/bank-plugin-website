import React from "react";

export default function SectionTwo() {
  return (
    <div className="w-full bg-[#f7f7f7] py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 tracking-wide">
          SEAMLESS INTEGRATIONS
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-10">
          ERPs Integrated in Bank Plugin
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tally Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="bg-gray-50 rounded-xl p-6 flex justify-center items-center mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Tally_Logo.png"
                  alt="Tally"
                  className="h-10 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Tally Integration
              </h3>
              <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">
                Supported Versions
              </p>

              <div className="space-y-3">
                <div className="flex items-center bg-orange-50 text-gray-700 text-sm px-3 py-2 rounded-md">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Tally Prime (2.1 and above)
                </div>
                <div className="flex items-center bg-orange-50 text-gray-700 text-sm px-3 py-2 rounded-md">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Tally ERP 9 (6.6.3+)
                </div>
              </div>
            </div>

            <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium py-2.5 rounded-lg hover:opacity-95 transition">
              Tally Bank Plugin →
            </button>
          </div>

          {/* Busy Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="bg-gray-50 rounded-xl p-6 flex justify-center items-center mb-6">
                <img
                  src="https://busy.in/wp-content/uploads/2022/06/logo.png"
                  alt="Busy"
                  className="h-10 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Busy Integration
              </h3>
              <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">
                Supported Versions
              </p>

              <div className="space-y-3">
                <div className="flex items-center bg-orange-50 text-gray-700 text-sm px-3 py-2 rounded-md">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Busy version 21 and above
                </div>
              </div>
            </div>

            <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium py-2.5 rounded-lg hover:opacity-95 transition">
              Busy Bank Plugin →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
