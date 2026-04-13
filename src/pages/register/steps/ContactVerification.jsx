import { useState } from "react";

export default function ContactVerification({
  formData,
  updateFormData,
  onNext,
}) {
  const [errors, setErrors] = useState({});

  const isFormValid = formData.email.trim() && formData.phone.trim();

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          placeholder="10-digit mobile number"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.phone ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>
      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="you@example.com"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.email ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
        )}
      </div>
      {/* Button */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleNext}
          className={`flex-1 active:scale-[0.99] transition-all rounded-lg py-[15px] text-base font-semibold text-white ${!isFormValid ? "bg-[#f0a07a] hover:bg-[#e8906a]" : "bg-[#DB620A] cursor-pointer"}`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
