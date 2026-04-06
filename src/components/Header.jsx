import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iciciLogo from "../assets/icons/icici-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="h-[65px] bg-gradient-to-b from-[#EF7F1A] to-[#BE2A2A]">
      <div className="w-full flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-40 h-full">
        <div className="relative">
          <img
            src={iciciLogo}
            alt="ICICI Bank"
            onClick={() => navigate("/")}
            className="h-[44px] w-auto object-contain cursor-pointer"
          />
          <span className="absolute -bottom-2 right-2 text-[20px] font-bold text-[#962A1E] translate-y-full">
            Bank Plugin
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-[#FFFFFF] text-[18px] font-semibold items-center h-full">
          <span
            onClick={() =>
              window.open(
                "https://www.bankplugin.com/support",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="cursor-pointer"
          >
            Help & Support
          </span>
          <span
            onClick={() =>
              window.open(
                "https://www.bankplugin.com",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="cursor-pointer"
          >
            Register
          </span>
        </nav>
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] h-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-[22px] h-[2px] bg-[#FFF]"></span>
          <span className="w-[22px] h-[2px] bg-[#FFF]"></span>
          <span className="w-[22px] h-[2px] bg-[#FFF]"></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <div className="flex flex-col px-6 py-4 gap-4 text-[15px] font-medium text-[#555]">
            <span
              onClick={() => {
                setIsOpen(false);
                window.open(
                  "https://www.bankplugin.com/support",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
              className="cursor-pointer"
            >
              Help & Support
            </span>
            <span
              onClick={() => {
                setIsOpen(false);
                window.open(
                  "https://www.bankplugin.com",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
              className="cursor-pointer"
            >
              Register
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
