import { useState, useRef } from "react";
import arrowIcon from '../../../assets/icons/svgs/arrow.svg'
import {post} from '../../../api/apiHelpers'

export default function ContactVerification({
  formData,
  updateFormData,
  onNext,
}) {
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState({ phone: false, email: false });
  const [phoneOtp, setPhoneOtp] = useState(["", "", "", "", "", ""]);
  const [phoneOtpFromApi, setPhoneOtpFromApi] = useState("");
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef([]);
  const timerRef = useRef(null);
  
  const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  const [emailOtpFromApi, setEmailOtpFromApi] = useState("");
  const [emailCountdown, setEmailCountdown] = useState(0);
  const emailOtpRefs = useRef([]);
  const emailTimerRef = useRef(null);

  const phoneOtpComplete = phoneOtp.every((d) => d !== "") && phoneOtp.join("") === phoneOtpFromApi;
  const emailOtpComplete = emailOtp.every((d) => d !== "") && emailOtp.join("") === emailOtpFromApi;

  const phoneFieldDisabled = otpSent.email && !emailOtpComplete;
  const emailFieldDisabled = otpSent.phone && !phoneOtpComplete;

  const startCountdown = () => {
    setCountdown(27);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const startEmailCountdown = () => {
    setEmailCountdown(27);
    clearInterval(emailTimerRef.current);
    emailTimerRef.current = setInterval(() => {
      setEmailCountdown((prev) => {
        if (prev <= 1) { clearInterval(emailTimerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOtpChange = (index, value) => {
  if (!/^\d?$/.test(value)) return;
  const updated = [...phoneOtp];
  updated[index] = value;
  setPhoneOtp(updated);
  if (value && index < 5) otpRefs.current[index + 1]?.focus();

  const enteredOtp = updated.join("");
  if (enteredOtp.length === 6 && enteredOtp !== phoneOtpFromApi) {
    setErrors((prev) => ({ ...prev, phone: "Incorrect OTP, please try again" }));
  } else {
    setErrors((prev) => ({ ...prev, phone: undefined }));
  }
};

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !phoneOtp[index] && index > 0)
      otpRefs.current[index - 1]?.focus();
  };

  const handleEmailOtpChange = (index, value) => {
  if (!/^\d?$/.test(value)) return;
  const updated = [...emailOtp];
  updated[index] = value;
  setEmailOtp(updated);
  if (value && index < 5) emailOtpRefs.current[index + 1]?.focus();

  const enteredOtp = updated.join("");
  if (enteredOtp.length === 6 && enteredOtp !== emailOtpFromApi) {
    setErrors((prev) => ({ ...prev, email: "Incorrect OTP, please try again" }));
  } else {
    setErrors((prev) => ({ ...prev, email: undefined }));
  }
};

  const handleEmailOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !emailOtp[index] && index > 0)
      emailOtpRefs.current[index - 1]?.focus();
  };

  const isFormValid = formData.email.trim() && formData.phone.trim() && phoneOtpComplete && emailOtpComplete;

  const validate = () => {
    const newErrors = {};
    if (!formData.phone.trim())
      newErrors.phone = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit mobile number";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = (field) => {
  const newErrors = {};
  if (field === "phone") {
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    } else {
      setOtpSent((prev) => ({ ...prev, phone: true }));
      setPhoneOtp(["", "", "", "", "", ""]);
      startCountdown();
      sendOtp("phone");
    }
  }
  if (field === "email") {
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    } else {
      setOtpSent((prev) => ({ ...prev, email: true }));
      setEmailOtp(["", "", "", "", "", ""]);
      startEmailCountdown();
      sendOtp("email");
    }
  }
  setErrors((prev) => ({ ...prev, ...newErrors }));
};

  const handleNext = () => {
    if (!phoneOtpComplete || !emailOtpComplete) return;
    if (validate()) onNext();
  };

const sendOtp = async (field) => {
  const payload = field === "phone"
    ? { type: "mobile_no", mobile_no: formData.phone }
    : { type: "email", email: formData.email };

  try {
    const res = await post("sendOtp", payload);
    console.log('res', res)
    if (field === "phone") setPhoneOtpFromApi(String(res.otp));
    else setEmailOtpFromApi(String(res.otp));
  } catch (error) {
    console.log("error", error);
  }
};

  return (
    <div className="flex flex-col gap-5">
      {/* Mobile Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#1E2939] mb-1.5">
          Mobile Number<span className="text-red-500">*</span>
        </label>
        <div className={`flex border rounded-lg overflow-hidden transition-colors focus-within:border-[#e67e22]
          ${phoneFieldDisabled ? "bg-[#f5f5f5] opacity-60" : "bg-[#fafafa]"}
          ${errors.phone ? "border-red-400" : "border-[#e0e0e0]"}`}>
          <span className="flex items-center px-3.5 text-sm font-medium text-[#1E2939] border-r border-[#e0e0e0] bg-[#f0f0f0] select-none whitespace-nowrap">
            +91
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            placeholder="9876543210"
            maxLength={10}
            disabled={phoneFieldDisabled}
            className="flex-1 pl-3.5 sm:px-3.5 py-[11px] text-sm bg-transparent outline-none disabled:cursor-not-allowed"
          />
          {phoneOtpComplete && otpSent.phone ? (
            <span className="flex items-center px-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px] text-[#4bae4f]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          ) : (
            <button
              type="button"
              onClick={() => handleSendOtp("phone")}
              disabled={phoneFieldDisabled}
              className="pr-3.5 sm:px-3.5 text-sm font-semibold text-[#e67e22] hover:text-[#c96a0a] transition-colors whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {otpSent.phone ? "" : "Send OTP"}
            </button>
          )}
        </div>
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
        )}

        {/* OTP Section — hidden once complete */}
        {otpSent.phone && !phoneOtpComplete && (
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-xs text-[#6A7282]">
              OTP sent to +91 {formData.phone.slice(0, 7)}***
            </p>
            <label className="text-sm font-semibold text-[#1E2939]">Enter OTP</label>
            <div className="flex gap-2">
              {phoneOtp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (otpRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className="w-10 h-10 text-center text-sm font-semibold border border-[#e0e0e0] rounded-lg bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors"
                />
              ))}
            </div>
            <p className="text-xs text-[#6A7282]">
              {countdown > 0 ? (
                <>Resend OTP in <span className="font-medium">{countdown}s</span></>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSendOtp("phone")}
                  className="text-[#e67e22] font-semibold hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#1E2939] mb-1.5">
          Email Address<span className="text-red-500">*</span>
        </label>
        <div className={`flex border rounded-lg overflow-hidden transition-colors focus-within:border-[#e67e22]
          ${emailFieldDisabled ? "bg-[#f5f5f5] opacity-60" : "bg-[#fafafa]"}
          ${errors.email ? "border-red-400" : "border-[#e0e0e0]"}`}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            placeholder="your.email@company.com"
            disabled={emailFieldDisabled}
            className="flex-1 px-3.5 py-[11px] text-sm bg-transparent outline-none disabled:cursor-not-allowed"
          />
          {emailOtpComplete && otpSent.email ? (
            <span className="flex items-center px-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          ) : (
            <button
              type="button"
              onClick={() => handleSendOtp("email")}
              disabled={emailFieldDisabled}
              className="px-3.5 text-sm font-semibold text-[#e67e22] hover:text-[#c96a0a] transition-colors whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {otpSent.email ? "" : "Send OTP"}
            </button>
          )}
        </div>
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
        )}

        {/* OTP Section — hidden once complete */}
        {otpSent.email && !emailOtpComplete && (
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-xs text-[#6A7282]">
              OTP sent to {formData.email.replace(/(.{3}).*(@.*)/, "$1***$2")}
            </p>
            <label className="text-sm font-semibold text-[#1E2939]">Enter OTP</label>
            <div className="flex gap-2">
              {emailOtp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (emailOtpRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleEmailOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleEmailOtpKeyDown(i, e)}
                  className="w-10 h-10 text-center text-sm font-semibold border border-[#e0e0e0] rounded-lg bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors"
                />
              ))}
            </div>
            <p className="text-xs text-[#6A7282]">
              {emailCountdown > 0 ? (
                <>Resend OTP in <span className="font-medium">{emailCountdown}s</span></>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSendOtp("email")}
                  className="text-[#e67e22] font-semibold hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Button */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleNext}
          className={`flex-1 active:scale-[0.99] transition-all rounded-lg py-[15px] text-base font-semibold text-white flex items-center justify-center gap-2.5 mt-2 ${
            !isFormValid
              ? "bg-[#f0a07a] cursor-not-allowed"
              : "bg-[linear-gradient(180deg,#DB620A_0%,#DD6513_10%,#DF6719_20%,#E16A1F_30%,#E36D24_40%,#E67028_50%,#E8722D_60%,#EA7531_70%,#EC7835_80%,#EE7A38_90%,#F07D3C_100%)] cursor-pointer"
          }`}
          disabled={!isFormValid}
        >
          Continue <img src={arrowIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
}