import { useState } from "react";
import { post } from "../../api/apiHelpers";
import ellipse1 from "../../assets/icons/svgs/ellipse1.svg";
import ellipse2 from "../../assets/icons/svgs/ellipse2.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const inputBase =
  "w-full border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-orange-50/40 focus:outline-none focus:ring-2 transition-all";

const inputClass = (hasError) =>
  `${inputBase} ${
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
      : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
  }`;

const validate = ({ mobile, password }) => {
  const errors = {};
  if (!mobile.trim()) errors.mobile = "Mobile number is required.";
  else if (mobile.length !== 10)
    errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!password.trim()) errors.password = "Password is required.";
  else if (password.length < 6)
    errors.password = "Password must be at least 6 characters.";
  return errors;
};

const FieldError = ({ msg }) =>
  msg ? <p className="text-red-500 text-xs mt-1">{msg}</p> : null;

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const login = async () => {
    const errs = validate({ mobile, password });
    if (Object.keys(errs).length) return setErrors(errs);
    setErrors({});
    try {
      const res = await post("login", { mobile, password });
      if (res.status === 200) {
        toast.success(res.msg);
      } else {
        toast.error(res.msg || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("login error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col relative overflow-hidden">
      <img
        src={ellipse1}
        alt="icon"
        className="absolute top-0 right-0 overflow-hidden opacity-5 w-64 h-64"
      />
      <img
        src={ellipse2}
        alt="icon"
        className="absolute bottom-0 left-0 overflow-hidden opacity-5 w-64 h-64"
      />

      {/* Login Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="rounded-2xl shadow-[0px_4px_39.8px_3px_#E5E7EB] border border-orange-100 w-full max-w-md px-10 py-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Login</h1>
          <p className="text-gray-500 text-sm mb-8">
            Sign in to your account to continue.
          </p>

          {/* Mobile Number */}
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
              placeholder="10 digits Mobile Number"
              className={inputClass(errors.mobile)}
            />
            <FieldError msg={errors.mobile} />
          </div>

          {/* Password */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-semibold text-gray-700">
                Password<span className="text-red-500">*</span>
              </label>
              <span
                onClick={() => navigate("/reset-password")}
                className="text-xs text-orange-600 font-medium hover:underline cursor-pointer"
              >
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              placeholder="Password"
              className={inputClass(errors.password)}
            />
            <FieldError msg={errors.password} />
          </div>

          {/* Sign In Button */}
          <button
            className="w-full text-white font-semibold py-3.5 rounded-xl text-sm tracking-wide shadow-md hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #d94f15 0%, #e8721c 100%)",
            }}
            onClick={login}
          >
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}
