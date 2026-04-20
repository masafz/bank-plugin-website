import { useState, useRef, useEffect } from "react";

export default function ConsentModal({ isOpen = false, onAgree, onClose }) {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [shake, setShake] = useState(false);
  const scrollRef = useRef(null);

  const handleBackdropClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  useEffect(() => {
    if (isOpen) setScrolledToBottom(false);
  }, [isOpen]);

  const handleScroll = (e) => {
    const el = e.target;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 40) {
      setScrolledToBottom(true);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15%  { transform: translateX(-8px); }
          30%  { transform: translateX(8px); }
          45%  { transform: translateX(-6px); }
          60%  { transform: translateX(6px); }
          75%  { transform: translateX(-3px); }
          90%  { transform: translateX(3px); }
        }
      `}</style>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-6"
        onClick={handleBackdropClick}
      >
        <div
          className="w-full max-w-3xl bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
          style={shake ? { animation: "shake 0.5s ease" } : {}}
        >
          {/* Scrollable body */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 text-sm text-gray-700 leading-relaxed"
          >
            <h2 className="text-center text-xl font-bold text-gray-900 mb-2">
              ICICI Bank Ltd.
            </h2>
            <h3 className="text-center text-sm font-semibold underline text-gray-800 mb-5 tracking-wide">
              PERSONAL DATA CONSENT – BANK PLUGIN
            </h3>

            {/* Clause 1 */}
            <SectionTitle>1. Consent for Disclosure of Information</SectionTitle>
            <p className="mb-4 text-justify text-[13px] text-gray-700 leading-6">
              I/We hereby expressly authorize ICICI Bank to, disclose, transfer or part with any of my/our
              information (including my/our sensitive personal information, location etc.) or any other device
              information when ICICI Bank considers such disclosure as necessary, with:
            </p>

            <ol className="list-[lower-alpha] pl-6 mb-4 space-y-1.5 text-[13px] text-gray-700">
              <li>Agents of ICICI Bank in any jurisdiction;</li>
              <li>Auditors, credit rating agencies/credit bureaus, statutory/regulatory authorities,
                governmental/administrative authorities, Central Know Your Customer (C-KYC) registry or SEBI
                Know Your Client registration agency, having jurisdiction over ICICI Bank;</li>
              <li>Service providers, professional advisors;</li>
            </ol>

            <p className="mb-3 text-[13px] text-gray-700 italic">
              (Collectively referred to as <strong>"Permitted Persons"</strong>) For the purpose of:
            </p>

            <ol className="list-[lower-alpha] pl-6 mb-6 space-y-1.5 text-[13px] text-gray-700">
              <li>Provision of the Bank Plugin facility (including various modules therein), completion of
                on-boarding formalities and servicing;</li>
              <li>Complying with KYC/customer due diligence requirements, anti-money laundering checks;</li>
              <li>Compliance with applicable laws or any order (judicial or otherwise),
                statutory/regulatory/legal requirement, including disclosure to information utilities;</li>
              <li>Review of facilities availed;</li>
              <li>Authentication or verification;</li>
              <li>Research or analysis, credit reporting &amp; scoring, risk management, participation in any
                service-related communication;</li>
              <li>Electronic clearing network and for use or processing of the said information/data;</li>
              <li>Disclosing any default in payment;</li>
              <li>Recovering any and all interest and other charges.</li>
            </ol>

            {/* Clause 2 */}
            <SectionTitle>2. Consent to ICICI Bank's Privacy Commitment</SectionTitle>
            <p className="mb-6 text-justify text-[13px] text-gray-700 leading-6">
              I/We confirm having read and understood ICICI Bank's 'Privacy Commitment' available at{" "}
              <a
                href="https://www.icicibank.in/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                https://www.icicibank.in/privacy
              </a>
              . I/We acknowledge that the same shall be subject to changes by ICICI Bank from time to time at
              its sole discretion and I/we agree to keep myself/ourselves updated with the same.
            </p>

            {/* Clause 3 */}
            <SectionTitle>3. Consent for linking of ICICI Bank account with ERP Platform</SectionTitle>
            <p className="mb-4 text-justify text-[13px] text-gray-700 leading-6">
              I/We hereby confirm and expressly authorize ICICI Bank to:
            </p>

            <ol className="list-[lower-alpha] pl-6 mb-6 space-y-1.5 text-[13px] text-gray-700">
              <li>Link my/our ICICI Bank current account with ERP Platform;</li>
              <li>Allow ERP Software Provider and its third-party service providers to store, use and process
                current account details, corporate banking ID (Corp ID and User ID), bank statement, bank
                balance, transaction data including transaction status, beneficiary details for account linking,
                fetching of account statements, execute transaction instructions, and reconciliation services;</li>
            </ol>

            {/* Clause 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-[13px] text-gray-700 leading-6 text-justify">
              <strong>4.</strong> I/We understand and acknowledge that the handling of above shared data will be
              subject to the privacy policy and data protection standards of the ERP Platform and its service
              providers.
            </div>

            <div className="h-2" />
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400 text-center sm:text-left">
              {scrolledToBottom
                ? "You have read the personal data consent."
                : "Please scroll to the bottom before accepting."}
            </p>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-2 border rounded bg-white text-[#DB620A] text-sm font-medium transition-colors"
              >
                Close
              </button>
              <button
                onClick={scrolledToBottom ? onAgree : undefined}
                disabled={!scrolledToBottom}
                className={`flex-1 sm:flex-none px-6 py-2 rounded bg-[#DB620A] text-white text-sm font-medium transition-colors ${
                  scrolledToBottom ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                }`}
              >
                I Agree ✓
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionTitle({ children }) {
  return (
    <h4 className="text-[13px] font-bold text-[#DB620A] mt-4 mb-2 tracking-wide">
      {children}
    </h4>
  );
}