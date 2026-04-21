import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/icons/svgs/arrow.svg";
import { post } from "../../api/apiHelpers";
import { toast } from "react-toastify";

const inputBase =
  "w-full border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-orange-50/40 focus:outline-none focus:ring-2 transition-all";

const inputClass = (hasError) =>
  `${inputBase} ${
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
      : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
  }`;

const ContinueButton = ({ onClick }) => (
  <button
    className="w-full flex justify-center items-center gap-0.5 text-white font-semibold py-3.5 rounded-xl text-sm tracking-wide shadow-md hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all"
    style={{ background: "linear-gradient(90deg, #d94f15 0%, #e8721c 100%)" }}
    onClick={onClick}
  >
    Continue <img src={arrowIcon} alt="icon" />
  </button>
);

const FieldError = ({ msg }) =>
  msg ? <p className="text-red-500 text-xs mt-1">{msg}</p> : null;

const validateStep0 = ({ mobile }) => {
  const errors = {};
  if (!mobile.trim()) errors.mobile = "Mobile number is required.";
  else if (mobile.length !== 10)
    errors.mobile = "Enter a valid 10-digit mobile number.";
  return errors;
};

const validateStep1 = ({ password, otp }) => {
  const errors = {};
  if (!password.trim()) errors.password = "Password is required.";
  else if (password.length < 6)
    errors.password = "Password must be at least 6 characters.";
  if (!otp.trim()) errors.otp = "OTP is required.";
  else if (otp.length < 4) errors.otp = "Enter a valid OTP.";
  return errors;
};

export default function ResetPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [txnId, setTxnId] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const getOtp = async () => {
    const errs = validateStep0({ mobile });
    if (Object.keys(errs).length) return setErrors(errs);
    setErrors({});
    try {
      const res = await post("send-forget-otp", { mobile });
      if (res.status === 200) {
        setTxnId(res.txn_id);
        setStep((prev) => prev + 1);
      } else if (res.status === 400) {
        toast.error(res.msg || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("getOtp error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const resetPass = async () => {
    const errs = validateStep1({ password, otp });
    if (Object.keys(errs).length) return setErrors(errs);
    setErrors({});
    try {
      const res = await post("validate-reset-password", {
        mobile,
        password,
        otp,
        txn_id: txnId,
      });
      if (res.status === 200) {
        toast.success(res.msg);
        navigate("/login");
      } else if (res.status === 400) {
        toast.error(res.msg[0]);
      }
    } catch (error) {
      console.error("resetPass error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-200/30 -translate-x-1/4 translate-y-1/4 blur-2xl" />
      <div className="absolute top-20 right-0 w-44 h-44 rounded-full bg-orange-300/20 translate-x-1/4 blur-2xl" />

      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="rounded-2xl shadow-[0px_4px_39.8px_3px_#E5E7EB] border border-orange-100 w-full max-w-md px-10 py-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Password Reset
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Enter your mobile number below to proceed.
          </p>

          {/* Step 0 — Mobile */}
          {step === 0 && (
            <>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value.replace(/\D/, ""));
                    setErrors((prev) => ({ ...prev, mobile: "" }));
                  }}
                  placeholder="10 digit Mobile Number"
                  className={inputClass(errors.mobile)}
                />
                <FieldError msg={errors.mobile} />
              </div>
              <ContinueButton onClick={getOtp} />
            </>
          )}

          {/* Step 1 — Password + OTP */}
          {step === 1 && (
            <>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  New Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: "" }));
                  }}
                  placeholder="Enter Password"
                  className={inputClass(errors.password)}
                />
                <FieldError msg={errors.password} />
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-semibold text-gray-700">
                    OTP<span className="text-red-500">*</span>
                  </label>
                  <span className="text-xs text-orange-600 font-medium hover:underline cursor-pointer">
                    Resend OTP
                  </span>
                </div>
                <input
                  type="password"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setErrors((prev) => ({ ...prev, otp: "" }));
                  }}
                  placeholder="******"
                  className={inputClass(errors.otp)}
                />
                <FieldError msg={errors.otp} />
              </div>

              <ContinueButton onClick={resetPass} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
