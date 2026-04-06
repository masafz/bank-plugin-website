import { useState } from "react";
import checkWhite from "../assets/icons/check-white.png";
import checkOrange from "../assets/icons/check-orange.png";
import checkBlack from "../assets/icons/check-black.png";
import { tabData } from "../utils/constant";

export default function BankPluginSection() {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <div className="w-full bg-[#DB620A12]">
      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-[45px] font-black text-[#DB620A] mb-6">
          Features Of Bank Plugin
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {[
            { key: "payments", label: "PAYMENTS" },
            { key: "account", label: "ACCOUNT" },
            { key: "user", label: "USER MANAGEMENT" },
          ].map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full text-[16px] font-bold bg-white flex justify-center items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-[linear-gradient(93.85deg,rgba(219,98,10,0.9)_11.21%,rgba(219,98,10,0.504)_84.98%)] text-white shadow-md"
                    : ""
                }`}
              >
                <img
                  src={isActive ? checkWhite : checkBlack}
                  alt=""
                  width={20}
                />{" "}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {tabData[activeTab].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] h-[260px] flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              {/* Top Content */}
              <div>
                <div className="w-8 h-8 flex items-center justify-center bg-[#DB620A26] rounded-md mb-4">
                  <img src={checkOrange} alt="" width={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.desc}</p>
              </div>

              {/* Button pinned bottom-left */}
              <button className="mt-auto bg-[#d65a00] text-white text-sm px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#b94d00] hover:scale-105 active:scale-95 self-start">
                Watch Demo
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="bg-[linear-gradient(105.4deg,rgba(219,98,10,0.38)_0.41%,rgba(219,98,10,0.1)_49.41%,rgba(219,98,10,0.38)_98.41%)] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Top Label */}
          <p className="text-center text-[#d65a00] text-[22px] font-bold mb-3">
            Advantages
          </p>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-[50px] font-black mb-14 leading-tight">
            <span className="text-[#DB620A]">Advantages</span>{" "}
            <span className="text-black">Of Bank Plugin</span>
          </h2>

          {/* List */}
          <div className="flex flex-col items-center space-y-8">
            {[
              "Manage Accounting And Banking From One Single Platform",
              "Quick 'Do It Yourself' Integration Process",
              "Secured Transaction Through OTP And Token Verification",
              "Save Time Cost And Effort With Hassle Free Accounting",
              "Seamless End To End Banking Reconciliation",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-6 w-full max-w-3xl"
              >
                {/* Number Circle */}
                <div className="w-[67px] h-[68px] flex-shrink-0 flex items-center justify-center rounded-[45px] border border-r-0 border-[#DB620A] shadow-[-1px_0px_4px_0px_#39393959] text-[#d65a00] font-semibold text-sm p-[20px]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <p className="text-gray-900 text-[22px] font-semibold leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
