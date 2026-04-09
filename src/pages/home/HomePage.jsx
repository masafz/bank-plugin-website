import { useState, useEffect } from "react";
import spiralImg from "../../assets/icons/circle.png";
import timeLeft from "../../assets/icons/time-left.png";
import flashIcon from "../../assets/icons/flash-icon.png";
import tallyLogo from "../../assets/icons/tally-logo.png";
import checkWhite from "../../assets/icons/check-white.png";
import rightOrange from "../../assets/icons/orange-arrow.png";
import checkOrange from "../../assets/icons/check-orange.png";
import rightWhite from "../../assets/icons/white-arrow.png";
import checkBlack from "../../assets/icons/check-black.png";
import checkIcon from "../../assets/icons/check-icon.png";
import busyLogo from "../../assets/icons/busy-logo.png";
import heroGif from "../../assets/icons/hero-gif.gif";
import regStep1 from "../../assets/images/home/step1.png";
import regStep2 from "../../assets/images/home/step2.png";
import regStep3 from "../../assets/images/home/step3.png";
import regStep4 from "../../assets/images/home/step4.png";
import regStep5 from "../../assets/images/home/step5.png";
import regStep6 from "../../assets/images/home/step6.png";
import { tabData } from "../../utils/constant";

const steps = [regStep1, regStep2, regStep3, regStep4, regStep5, regStep6];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("payments");
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const delay = visibleCount >= steps.length ? 4000 : 2000;

    const timer = setTimeout(() => {
      if (visibleCount >= steps.length) {
        setVisibleCount(1);
      } else {
        setVisibleCount((c) => c + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full">
        <section className="relative w-full pb-[40px] sm:pb-[44px]">
          <svg
            className="pointer-events-none absolute top-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 0 }}
          >
            <defs>
              <pattern
                id="grid"
                width="97"
                height="67"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 97 0 L 0 0 0 67"
                  fill="none"
                  stroke="#e3c7b5"
                  strokeWidth="1"
                  opacity="0.7"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="rgba(219,98,10,0.10)" />
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* CONTENT */}
          <div
            className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[70px] py-12 md:py-16 lg:py-[40px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            style={{ zIndex: 1 }}
          >
            {/* LEFT CONTENT */}
            <div>
              <p className="border border-[#DB620A33] text-[12px] sm:text-[14px] font-semibold inline-block bg-white bg-[linear-gradient(0deg,_rgba(219,98,10,0.17),_rgba(219,98,10,0.17))] text-[#DB620A] px-3 py-2 rounded-full mb-3">
                <span className="flex items-center gap-2">
                  <img src={flashIcon} alt="icon" className="w-4 h-4" />
                  Trusted By 10,000+ Businesses Across India
                </span>
              </p>
              <h1 className="text-[28px] sm:text-[36px] md:text-[42px] min-[768px]:!text-[29px] min-[1257px]:!text-[49px] lg:text-[50px] font-black leading-tight tracking-tight text-black">
                Accounting Made Easy <br /> With{" "}
                <span className="text-[#DB620A]">Bank Plugin</span>
              </h1>
              <p className="text-[#00000099] text-[14px] sm:text-[16px] md:text-[17px] mt-4 max-w-[645px] leading-[22px] md:leading-[26px]">
                Introducing Industry's First Revolutionized Product 'Bank
                Plugin' Enabling Desktop Based Accounting Software Users
                Experience Seamless Banking & Accounting Within Platform. Bank
                Plugin Allows Users To Initiate Payments With Auto
                Reconciliation From Desktop Based Accounting ERP Platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="w-full sm:w-auto bg-[#DB620A] flex justify-center items-center gap-2.5 border border-[#DB620A] text-white px-6 sm:px-10 lg:px-[60px] py-[10px] rounded-[8px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium transition-opacity duration-300 hover:opacity-80">
                  Register
                  <img src={rightWhite} alt="arrow" width={20} />
                </button>
                <button className="group relative w-full sm:w-auto flex justify-center items-center gap-2.5 border border-[#DB620A] bg-white text-[#DB620A] px-6 sm:px-10 lg:px-[60px] py-[10px] rounded-[8px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium transition-all duration-300 hover:bg-[#DB620A] hover:text-white">
                  Login
                  <span className="relative w-[20px] h-[20px]">
                    <img
                      src={rightOrange}
                      alt="arrow"
                      className="absolute inset-0 w-full h-full transition-all duration-300 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={rightWhite}
                      alt="arrow"
                      className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative w-full max-w-[552px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[517px] mx-auto">
              <img
                src={spiralImg}
                alt=""
                className="w-full h-full object-contain"
              />
              <img
                src={heroGif}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] object-contain"
              />
            </div>
          </div>
        </section>

        <div
          className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[70px] flex justify-center -mt-[40px] sm:-mt-[44px]"
          style={{ zIndex: 2 }}
        >
          <div className="w-full sm:w-[90%] lg:w-[80%] bg-white shadow-[0px_1px_21.1px_0px_rgba(0,0,0,0.25)] rounded-xl px-5 sm:px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 text-center sm:text-left">
            <p className="text-[#808080] text-sm sm:text-base md:text-lg lg:text-2xl min-[3840px]:!text-[40px] leading-snug">
              Get Hands-On: Schedule Your Personalized Product Demo!
            </p>
            <button className="w-full sm:w-auto shrink-0 bg-[#153C69] text-white px-6 py-[14px] text-sm sm:text-base md:text-lg lg:text-[20px] font-bold rounded-lg flex items-center justify-center gap-2.5">
              Watch Demo <img src={timeLeft} alt="" width={18} />
            </button>
          </div>
        </div>
      </div>
      {/* ===== ERP SECTION ===== */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-[70px] pt-16 pb-16 max-w-[1920px] mx-auto">
        <div className="text-center">
          <p className="inline-block bg-[linear-gradient(90deg,_#FFEDD4_0%,_#FFF7ED_100%)] text-[#DB620A] px-4 py-2 rounded-full text-[13px] sm:text-[13px] font-bold mb-4">
            ● SEAMLESS INTEGRATIONS
          </p>
          <h2
            className="text-[28px] sm:text-[34px] md:text-[48px] lg:text-[48px] font-black"
            style={{
              background: "linear-gradient(180deg, #DB620A 0%, #F07D3C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ERPs Integrated in Bank Plugin
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 md:max-w-[70%] mx-auto">
          {/* TALLY */}
          <div className="bg-white rounded-[20px] border border-[#E5E5E5] p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="bg-[#F9F9F9] rounded-[12px] h-[100px] flex items-center justify-center mb-6">
                <img src={tallyLogo} alt="tally" width={180} />
              </div>
              <h3 className="text-[26px] font-bold text-[#101828] mb-2">
                Tally Integration
              </h3>
              <p className="text-[#6A7282] text-[14px] font-medium mb-4">
                SUPPORTED VERSIONS
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 bg-[#FFF7ED80] text-[#1E2939] text-[15px] font-semibold px-4 py-3 rounded-[10px]">
                  <img src={checkIcon} alt="" width={20} />
                  Tally Prime (2.1 and above)
                </div>
                <div className="flex items-center gap-3 bg-[#FFF7ED80] text-[#1E2939] text-[15px] font-semibold px-4 py-3 rounded-[10px]">
                  <img src={checkIcon} alt="" width={20} />
                  Tally ERP 9 (v6.6.3+)
                </div>
              </div>
            </div>
            <button className="w-full bg-[linear-gradient(180deg,#DB620A_0%,#F07D3C_100%)] hover:bg-[#ac4d09] text-white py-3 rounded-[10px] flex items-center justify-center gap-2">
              Tally Bank Plugin
              <img src={rightWhite} alt="" width={18} />
            </button>
          </div>
          {/* BUSY */}
          <div className="bg-white rounded-[20px] border border-[#E5E5E5] p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="bg-[#F9F9F9] rounded-[12px] h-[100px] flex items-center justify-center mb-6">
                <img src={busyLogo} alt="tally" width={180} />
              </div>
              <h3 className="text-[26px] font-bold text-[#101828] mb-2">
                Busy Integration
              </h3>
              <p className="text-[#6A7282] text-[14px] font-medium mb-4">
                SUPPORTED VERSIONS
              </p>
              <div className="space-y-3 mb-6 h-[440px">
                <div className="flex items-center gap-3 bg-[#FFF7ED80] text-[#1E2939] text-[15px] font-semibold px-4 py-3 rounded-[10px]">
                  <img src={checkIcon} alt="" width={20} />
                  Busy version 2.1 and above
                </div>
              </div>
            </div>
            <button className="w-full bg-[linear-gradient(180deg,#DB620A_0%,#F07D3C_100%)] hover:bg-[#ac4d09] text-white py-3 rounded-[10px] flex items-center justify-center gap-2">
              Busy Bank Plugin
              <img src={rightWhite} alt="" width={18} />
            </button>
          </div>
        </div>
      </section>
      {/* ================= FEATURES ================= */}
      <section className="w-full mx-auto px-4 py-16 bg-[#DB620A12] text-center">
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
        <div className="flex flex-wrap gap-6 justify-center max-w-[1920px] mx-auto">
          {tabData[activeTab].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-6 text-left transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] h-[260px] flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              {/* Top Content */}
              <div>
                <div className="w-8 h-8 flex items-center justify-center bg-[#DB620A26] rounded-md mb-4">
                  <img src={checkOrange} alt="" width={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-[#000000B2] text-sm font-medium">
                  {card.desc}
                </p>
              </div>

              {/* Button pinned bottom-left */}
              <button className="mt-auto bg-[#E9742F] text-white text-sm px-4 py-2 rounded-md hover:scale-105 active:scale-95 self-start transition-opacity duration-300 hover:opacity-80">
                Watch Demo
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="bg-[linear-gradient(105.4deg,rgba(219,98,10,0.38)_0.41%,rgba(219,98,10,0.1)_49.41%,rgba(219,98,10,0.38)_98.41%)] py-16 px-4">
        <div className="max-w-[1920px] mx-auto">
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
                <div className="w-[67px] h-[68px] flex-shrink-0 flex items-center justify-center rounded-[45px] border border-r-0 border-[#DB620A] shadow-[-1px_0px_4px_0px_#39393959] text-[#DB620A] font-bold text-[22px] p-[20px]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <p className="text-[#000000D9] text-[22px] font-semibold leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 flex flex-col items-center text-center">
        {/* Top Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#DB620A] py-2">
          SIMPLE SETUP
        </h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-black leading-tight">
          How It Works?
        </h1>
        <h4 className="text-sm sm:text-base md:text-[16px] font-medium text-[#000000B2] max-w-[90%] sm:max-w-[600px]">
          Stages of Onboarding in Bank Plugin
        </h4>
        <div className="flex flex-col w-full max-w-[750px] mr-[20px]">
          {steps.slice(0, visibleCount).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Step ${i + 1}`}
              className="w-full"
              style={{
                animation: "fadeIn 0.5s ease forwards",
              }}
            />
          ))}

          <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
        </div>
        {/* CTA Card */}
        <div className="w-full bg-[#FEF9F5] rounded-[20px] md:rounded-[28px] px-4 sm:px-8 md:px-16 py-10 md:py-14 mt-6 sm:mt-8 md:mt-10">
          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold leading-snug md:leading-normal max-w-[900px] mx-auto">
            I am ready to organise my transactions & reconciliation{" "}
            <br className="hidden sm:block" />
            benefits with Bank Plugin
          </h2>
          {/* Logos + Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 md:mt-10">
            {/* Tally */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={tallyLogo}
                alt="Tally"
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
              <button className="bg-[#DB620A] text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-opacity duration-300 hover:opacity-80">
                Tally Bank Plugin
              </button>
            </div>
            {/* Busy */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={busyLogo}
                alt="Busy"
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
              <button className="border border-[#DB620A] text-[#DB620A] hover:bg-[#E36A0A] hover:text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300">
                Busy Bank Plugin
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
