import flashIcon from "../../assets/icons/flash-icon.png";
import rightOrange from "../../assets/icons/orange-arrow.png";
import rightWhite from "../../assets/icons/white-arrow.png";
import timeLeft from "../../assets/icons/time-left.png";
import tallyLogo from "../../assets/icons/tally-logo.png";
import busyLogo from "../../assets/icons/busy-logo.png";
import checkIcon from "../../assets/icons/check-icon.png";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#DB620A1A] overflow-hidden">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(#e3c7b5_1px,transparent_1px),linear-gradient(90deg,#e3c7b5_1px,transparent_1px)] bg-[size:97px_67px]" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[70px] py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="border border-[#DB620A33] text-[12px] sm:text-[14px] font-semibold inline-block bg-white bg-[linear-gradient(0deg,_rgba(219,98,10,0.17),_rgba(219,98,10,0.17))] text-[#DB620A] px-3 py-2 rounded-full mb-3">
              <span className="flex items-center gap-2">
                <img src={flashIcon} alt="icon" className="w-4 h-4" />
                Trusted By 10,000+ Businesses Across India
              </span>
            </p>

            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-black leading-tight tracking-tight text-black">
              Accounting Made Easy <br /> With{" "}
              <span className="text-[#DB620A]">Bank Plugin</span>
            </h1>

            <p className="text-[#00000099] text-[14px] sm:text-[16px] md:text-[18px] mt-4 max-w-[645px] leading-[22px] md:leading-[26px]">
              Introducing Industry’s First Revolutionized Product 'Bank Plugin'
              Enabling Desktop Based Accounting Software Users Experience
              Seamless Banking & Accounting Within Platform. Bank Plugin Allows
              Users To Initiate Payments With Auto Reconciliation From Desktop
              Based Accounting ERP Platforms
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {/* REGISTER */}
              <button className="w-full sm:w-auto bg-[#DB620A] flex justify-center items-center gap-2.5 border border-orange-500 text-white px-6 sm:px-10 lg:px-[60px] py-[10px] rounded-[8px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium transition-opacity duration-300 hover:opacity-80">
                Register
                <img src={rightWhite} alt="arrow" width={20} />
              </button>

              {/* LOGIN */}
              <button className="group relative w-full sm:w-auto flex justify-center items-center gap-2.5 border border-orange-500 text-orange-500 px-6 sm:px-10 lg:px-[60px] py-[10px] rounded-[8px] text-[14px] sm:text-[16px] lg:text-[18px] font-medium transition-all duration-300 hover:bg-[#DB620A] hover:text-white">
                Login

                <span className="relative w-[20px] h-[20px]">
                  {/* Default */}
                  <img
                    src={rightOrange}
                    alt="arrow"
                    className="absolute inset-0 w-full h-full transition-all duration-300 opacity-100 group-hover:opacity-0"
                  />

                  {/* Hover */}
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
        </div>

        {/* DEMO STRIP */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[70px] flex justify-center mb-20">
          <div className="w-full md:w-[90%] lg:w-[80%] bg-white shadow-[0px_1px_21.1px_0px_rgba(0,0,0,0.25)] rounded-xl px-4 sm:px-6 md:px-8 py-6 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left translate-y-8">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-2xl">
              Get Hands-On: Schedule Your Personalized Product Demo!
            </p>
            <button className="bg-[#1f3f68] text-white px-6 py-4 text-sm sm:text-base md:text-lg lg:text-[20px] font-bold rounded-lg flex items-center gap-2.5">
              Watch Demo <img src={timeLeft} alt="" width={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== ERP SECTION ===== */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-[70px] pt-24 pb-16 max-w-[1400px] mx-auto">
        <div className="text-center">
          <p className="inline-block bg-[#DB620A1A] text-[#DB620A] px-4 py-2 rounded-full text-[13px] sm:text-[13px] font-bold mb-4">
            ● SEAMLESS INTEGRATIONS
          </p>

          <h2 className="text-[28px] sm:text-[34px] md:text-[48px] lg:text-[48px] font-black text-[#DB620A]">
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

              <h3 className="text-[20px] font-semibold mb-2">
                Tally Integration
              </h3>

              <p className="text-[#00000080] text-[13px] font-semibold mb-4">
                SUPPORTED VERSIONS
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 bg-[#F7F3EF] px-4 py-3 rounded-[10px]">
                  <img src={checkIcon} alt="" width={20} />
                  Tally Prime (2.1 and above)
                </div>
                <div className="flex items-center gap-3 bg-[#F7F3EF] px-4 py-3 rounded-[10px]">
                  <img src={checkIcon} alt="" width={20} />
                  Tally ERP 9 (v6.6.3+)
                </div>
              </div>
            </div>

            <button className="w-full bg-[#DB620A] hover:bg-[#ac4d09] text-white py-3 rounded-[10px] flex items-center justify-center gap-2">
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

              <h3 className="text-[20px] font-semibold mb-2">
                Busy Integration
              </h3>

              <p className="text-[#00000080] text-[13px] font-semibold mb-4">
                SUPPORTED VERSIONS
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 bg-[#F7F3EF] px-4 py-3 rounded-[10px]">
                  <img src={checkIcon} alt="" width={20} />
                  Busy version 2.1 and above
                </div>
                <div className="flex items-center gap-3 bg-[#F7F3EF] px-4 py-3 rounded-[10px]">
                  <img src={checkIcon} alt="" width={20} />
                  Busy version 2.1 and above
                </div>
              </div>
            </div>

            <button className="w-full bg-[#DB620A] hover:bg-[#ac4d09] text-white py-3 rounded-[10px] flex items-center justify-center gap-2">
              Busy Bank Plugin
              <img src={rightWhite} alt="" width={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}