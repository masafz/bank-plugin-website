import { useState } from "react";

export default function AccountSetup({
  formData,
  updateFormData,
  onSubmit,
}) {
  const [errors, setErrors] = useState({});

  const isFormValid = formData.accountNumber.trim() && formData.ifsc.trim();

  const validate = () => {
    const newErrors = {};
    if (!formData.accountNumber.trim())
      newErrors.accountNumber = "Account number is required";
    if (!formData.ifsc.trim()) newErrors.ifsc = "IFSC code is required";
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
        <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          ERP Serial / License Number
        </label>
        <input
          type="text"
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
        <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          RM ID <span className="text-[#6A7282]">(Optional)</span>
        </label>
        <input
          type="text"
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
        <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => updateFormData({ ifsc: e.target.value })}
          placeholder="Create a strong password"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.ifsc ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        {errors.ifsc && (
          <p className="text-xs text-red-500 mt-1">{errors.ifsc}</p>
        )}
      </div>
      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
          placeholder="Re-enter your password"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.confirmPassword ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
        )}
      </div>
      {/* Button */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleSubmit}
          className={`flex-1 active:scale-[0.99] transition-all rounded-lg py-[15px] text-base font-semibold text-white ${!isFormValid ? "bg-[#f0a07a] hover:bg-[#e8906a]" : "bg-[#DB620A] cursor-pointer"}`}
        >
          Submit ✓
        </button>
      </div>
    </div>
  );
}
