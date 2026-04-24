import { useEffect, useState } from "react";

export default function DemoPopup({ requestId = "S742403581B", onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 250);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{
        backgroundColor: visible ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)",
        transition: "background-color 250ms ease",
      }}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-[680px] px-10 py-10 flex flex-col items-center text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "scale(1) translateY(0)"
            : "scale(0.95) translateY(16px)",
          transition: "opacity 250ms ease, transform 250ms ease",
        }}
      >
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: "#FBEFE6" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #e8721c, #d94f15)" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
          Demo Request Submitted Successfully
        </h2>

        <div className="flex items-center gap-2 bg-[#FFF1EB] rounded-xl px-4 py-2 mb-6">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
            Request ID:
          </span>
          <span className="text-lg font-bold text-gray-900">{requestId}</span>
        </div>

        <div className="mb-8">
          <p className="text-lg font-extrabold text-gray-800 mb-1">
            Our executive will reach out to you at the earliest for the onboarding processs.
          </p>
          <p className="text-sm font-bold text-gray-500 leading-relaxed">
             Please note that callbacks for requests raised after 5:00 P.M. will be scheduled for next business day.
          </p>
        </div>

        <button
          onClick={handleClose}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-orange-200 hover:shadow-lg text-sm tracking-wide mt-1 cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #d94f15 0%, #e8721c 100%)",
          }}
        >
          Okay
        </button>
      </div>
    </div>
  );
}
