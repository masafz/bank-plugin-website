import { useState } from "react";
import TncModal from "../components/TncModal";

export default function AccountSetup({ formData, updateFormData, onSubmit }) {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTnc, setShowTnc] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.erpSerial?.trim())
      newErrors.erpSerial = "ERP serial number is required";

    if (!formData.password?.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword?.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.consentTerms)
      newErrors.consentTerms = "You must agree to the Terms and Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onSubmit();
  };

  return (
    <div className="flex flex-col gap-5">
      {/* ERP Serial */}
      <div>
        <label
          htmlFor="erp_serial"
          className="block text-sm font-semibold text-[#1E2939] mb-1.5"
        >
          ERP Serial / License Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="erp_serial"
          name="erpSerial"
          value={formData.erpSerial}
          onChange={(e) => updateFormData({ erpSerial: e.target.value })}
          placeholder="Enter your ERP serial number"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.erpSerial ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        {errors.erpSerial && (
          <p className="text-xs text-red-500 mt-1">{errors.erpSerial}</p>
        )}
      </div>

      {/* RM ID */}
      <div>
        <label
          htmlFor="rm_id"
          className="block text-sm font-semibold text-[#1E2939] mb-1.5"
        >
          RM ID <span className="text-[#6A7282]">(Optional)</span>
        </label>
        <input
          type="text"
          id="rm_id"
          name="rmId"
          value={formData.rmId}
          onChange={(e) => updateFormData({ rmId: e.target.value })}
          placeholder="Enter relationship manager ID"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.rmId ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        {errors.rmId && (
          <p className="text-xs text-red-500 mt-1">{errors.rmId}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-[#1E2939] mb-1.5"
        >
          Password<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => updateFormData({ password: e.target.value })}
            placeholder="Create a strong password"
            className={`w-full border rounded-lg px-3.5 py-[11px] pr-10 text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
              ${errors.password ? "border-red-400" : "border-[#e0e0e0]"}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              // Eye-off icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              // Eye icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs text-red-500 mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirm_password"
          className="block text-sm font-semibold text-[#1E2939] mb-1.5"
        >
          Confirm Password<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              updateFormData({ confirmPassword: e.target.value })
            }
            placeholder="Re-enter your password"
            className={`w-full border rounded-lg px-3.5 py-[11px] pr-10 text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
              ${errors.confirmPassword ? "border-red-400" : "border-[#e0e0e0]"}`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            tabIndex={-1}
          >
            {showConfirmPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Legal Consent */}
      <div className="flex flex-col gap-3">
        <p className="text-[16px] font-semibold text-[#1E2939]">
          Legal Consent
        </p>

        <div
          className="flex items-start gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            setShowTnc(true);
          }}
        >
          <input
            type="checkbox"
            id="consent_terms"
            readOnly
            checked={!!formData.consentTerms}
            onChange={(e) => {
              if (!e.target.checked) {
                updateFormData({ consentTerms: false });
              }
            }}
            onClick={(e) => e.stopPropagation()}
            className="mt-0.5 w-4 h-4 accent-[#e67e22] cursor-pointer shrink-0"
          />
          <label
            htmlFor="consent_terms"
            className="text-sm font-medium text-[#1E2939] leading-snug cursor-pointer"
          >
            I have read &amp; agree to the Terms and Conditions - Bank Plugin on
            ERP Platform
            <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.consentTerms && (
          <p className="text-xs text-red-500 -mt-1">{errors.consentTerms}</p>
        )}

        <div className="flex items-start gap-2.5">
          <input
            type="checkbox"
            id="consentDataSharing"
            checked={!!formData.consentDataSharing}
            onChange={(e) =>
              updateFormData({ consentDataSharing: e.target.checked })
            }
            className="mt-0.5 w-4 h-4 accent-[#e67e22] cursor-pointer shrink-0"
          />
          <label
            htmlFor="consentDataSharing"
            className="text-sm font-medium text-[#1E2939] leading-snug cursor-pointer"
          >
            I consent to data sharing with ERP integration partners
          </label>
        </div>
      </div>

      {/* Button */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleSubmit}
          className="flex-1 active:scale-[0.99] transition-all rounded-lg py-[15px] text-base font-bold text-white cursor-pointer bg-[linear-gradient(180deg,#DB620A_0%,#DD6513_10%,#DF6719_20%,#E16A1F_30%,#E36D24_40%,#E67028_50%,#E8722D_60%,#EA7531_70%,#EC7835_80%,#EE7A38_90%,#F07D3C_100%)]"
        >
          Create Account
        </button>
      </div>

      {/* Already have an account */}
      <p className="text-sm text-center text-[#1E2939]">
        Already have an account?{" "}
        <a href="#" className="text-[#e67e22] font-medium hover:underline">
          Login
        </a>
      </p>

      {/* T&C Modal */}
      <TncModal
        isOpen={showTnc}
        onAgree={() => {
          updateFormData({ consentTerms: true });
          setShowTnc(false);
        }}
        onClose={() => setShowTnc(false)}
      />
    </div>
  );
}
