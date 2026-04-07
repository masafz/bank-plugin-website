import takneekiLogo from "../assets/icons/takneeki-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#DB620A] px-4 sm:px-6 md:px-10 lg:px-16 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p className="text-white text-xs sm:text-sm md:text-[23px] text-center sm:text-left">
          Copyright © 2026 Takneeki Inc | Powered by Takneeki Inc
        </p>
        <img
          src={takneekiLogo}
          alt="Takneeki Logo"
          className="h-6 sm:h-7 md:h-8 object-contain"
        />
      </div>
    </footer>
  );
}
