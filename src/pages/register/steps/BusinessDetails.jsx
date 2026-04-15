import { useState } from "react";
import tallyLogo from "../../../assets/icons/tally-logo.png";
import tooltipIcon from "../../../assets/icons/svgs/warning.svg";
import arrowIcon from "../../../assets/icons/svgs/arrow.svg";
import { useLocation } from "react-router-dom";

export default function BusinessDetails({ formData, updateFormData, onNext }) {
  const [errors, setErrors] = useState({});
  const location = useLocation()
  const state = location.state

  const isFormValid =
    formData.companyName.trim() &&
    formData.gstNumber.trim() &&
    formData.state.trim() &&
    (formData.erpType || state);

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.gstNumber.trim())
      newErrors.gstNumber = "GST number is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.erpType && !state) newErrors.erpType = "Please select an ERP type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Company Name */}
      <div>
        <label htmlFor="company_name" className="block text-sm font-semibold text-[#1E2939] mb-1.5">
          Company Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company_name"
          name="companyName"
          value={formData.companyName}
          onChange={(e) => updateFormData({ companyName: e.target.value })}
          placeholder="Enter your company name"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.companyName ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        {errors.companyName && (
          <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>
        )}
      </div>
      {/* GST Number */}
      <div>
        <label htmlFor="gst_number" className="block text-sm font-semibold text-[#1E2939] mb-1.5">
          GST Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="gst_number"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={(e) => updateFormData({ gstNumber: e.target.value })}
          placeholder="29ABCDE1234F1Z5"
          className={`w-full border rounded-lg px-3.5 py-[11px] text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors
            ${errors.gstNumber ? "border-red-400" : "border-[#e0e0e0]"}`}
        />
        <p className="text-xs text-[#6A7282] mt-1">
          Enter GST to auto-fetch company details
        </p>
        {errors.gstNumber && (
          <p className="text-xs text-red-500 mt-1">{errors.gstNumber}</p>
        )}
      </div>
      {/* State */}
      <div>
        <label htmlFor="state" className="block text-sm font-semibold text-[#1E2939] mb-1.5">
          State<span className="text-red-500">*</span>
        </label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={(e) => updateFormData({ state: e.target.value })}
          className={`w-full border rounded-lg px-3.5 py-[11px] pr-16 text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors appearance-none cursor-pointer
              ${errors.state ? "border-red-400" : "border-[#e0e0e0]"}`}
        >
          <option value="">Select state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
          {/* Union Territories */}
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Dadra and Nagar Haveli and Daman and Diu">
            Dadra and Nagar Haveli and Daman and Diu
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Ladakh">Ladakh</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
        </select>
        {errors.state && (
          <p className="text-xs text-red-500 mt-1">{errors.state}</p>
        )}
      </div>
      {/* ERP Type */}
      <div>
        <label htmlFor="erp_type" className="flex items-center gap-1.5 text-sm font-semibold text-[#1E2939] mb-1.5">
          ERP Type
          <img src={tooltipIcon} alt="icon" />
        </label>
        <div className="relative">
          <select
            id="erp_type"
            name="erpType"
            value={formData.erpType = state || formData.erpType}
            onChange={(e) => updateFormData({ erpType: e.target.value })}
            disabled={state}
            className={`w-full border rounded-lg px-3.5 py-[11px] pr-16 text-sm bg-[#fafafa] outline-none focus:border-[#e67e22] transition-colors appearance-none cursor-pointer
              ${errors.erpType ? "border-red-400" : "border-[#e0e0e0]"} ${state ? 'opacity-60' : ''}`}
          >
            <option value="">Select ERP type</option>
            <option value="tally">Tally</option>
            <option value="busy">Busy</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={tallyLogo}
              alt="tally"
              className="h-[26px] object-contain"
            />
          </div>
        </div>
        {errors.erpType && (
          <p className="text-xs text-red-500 mt-1">{errors.erpType}</p>
        )}
      </div>
      {/* Continue */}
      <button
        onClick={handleNext}
        className={`w-full active:scale-[0.99] transition-all rounded-lg py-[15px] text-base font-semibold text-white flex items-center justify-center gap-2.5 mt-2
    ${!isFormValid ? "bg-[#f0a07a] hover:bg-[#e8906a]" : "bg-[#DB620A] cursor-pointer"}`}
      >
        Continue <img src={arrowIcon} alt="icon" />
      </button>
    </div>
  );
}
