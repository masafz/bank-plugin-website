import { useState } from "react";
import supportImg from "../../assets/icons/svgs/support.svg";
import mailIcon from "../../assets/icons/svgs/mail.svg";
import phoneIcon from "../../assets/icons/svgs/phone.svg";
import { post } from "../../api/apiHelpers";
import { toast } from "react-toastify";
import SuccessPopup from "./components/SuccessPopup";

const inputBase =
  "w-full border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-orange-50/40 focus:outline-none focus:ring-2 transition-all";

const inputClass = (hasError) =>
  `${inputBase} ${
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
      : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
  }`;

const selectClass = (hasError) =>
  `w-full border rounded-xl px-4 py-3 text-sm text-gray-500 bg-white focus:outline-none focus:ring-2 transition ${
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-100"
      : "border-gray-200 focus:ring-orange-300 focus:border-orange-400"
  }`;

const FieldError = ({ msg }) =>
  msg ? <p className="text-red-500 text-xs mt-1">{msg}</p> : null;

const validateDemo = ({
  companyName,
  email,
  mobile,
  productType,
  date,
  time,
  rmPartner,
  rmPartnerId,
  rmMobile,
}) => {
  const errors = {};
  if (!companyName.trim()) errors.companyName = "Company name is required.";
  if (!email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  if (!mobile.trim()) errors.mobile = "Mobile number is required.";
  else if (!/^\d{10}$/.test(mobile))
    errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!productType.trim()) errors.productType = "Product type is required.";
  if (!date) errors.date = "Date is required.";
  if (!time) errors.time = "Time is required.";
  if (rmPartner) {
    if (!rmPartnerId.trim()) errors.rmPartnerId = "R/M Partner ID is required.";
    if (!rmMobile.trim())
      errors.rmMobile = "Partner mobile number is required.";
    else if (!/^\d{10}$/.test(rmMobile))
      errors.rmMobile = "Enter a valid 10-digit mobile number.";
  }
  return errors;
};

const validateSupport = ({ issueType, description }) => {
  const errors = {};
  if (!issueType) errors.issueType = "Please select an issue type.";
  if (!description.trim()) errors.description = "Description is required.";
  else if (description.trim().length < 10)
    errors.description = "Description must be at least 10 characters.";
  return errors;
};

export default function Support() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [rmPartner, setRmPartner] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [requestId, setRequestId] = useState("");

  const [demoForm, setDemoForm] = useState({
    companyName: "",
    email: "",
    mobile: "",
    productType: "",
    date: "",
    time: "",
    rmPartnerId: "",
    rmMobile: "",
  });
  const [demoErrors, setDemoErrors] = useState({});

  const [supportForm, setSupportForm] = useState({
    issueType: "",
    description: "",
  });
  const [supportErrors, setSupportErrors] = useState({});

  const handleChange = (e) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
    setDemoErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSupportChange = (e) => {
    setSupportForm({ ...supportForm, [e.target.name]: e.target.value });
    setSupportErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleDemoSubmit = async () => {
    const errs = validateDemo({ ...demoForm, rmPartner });
    if (Object.keys(errs).length) return setDemoErrors(errs);
    setDemoErrors({});
    // TODO: submit demo request
    const payload = {
      category: "3-request_demo",
      company_name: demoForm.companyName,
      customer_name: "Brijesh",
      email: demoForm.email,
      phone: demoForm.mobile,
      plugin_type: demoForm.productType,
      suitable_date: demoForm.date.split("-").reverse().join("-"),
      suitable_time: demoForm.time,
      rm_sm_id: demoForm.rmPartnerId,
      mobile_number: demoForm.rmMobile,
      demo: "1",
      utm_sources: "google",
    };
    try {
      const res = await post("demo-support-query", payload);
      console.log('res', res)
      if(res?.status === '200') {
        setRequestId(res?.ticket_no)
        setShowPopup(true);
      } else {
        toast.error(res?.msg)
      }
    } catch (error) {
      console.log('error', error)
    }
  };

  const handleSupportSubmit = () => {
    const errs = validateSupport(supportForm);
    if (Object.keys(errs).length) return setSupportErrors(errs);
    setSupportErrors({});
    // TODO: submit support request
  };

  console.log("demoForm", demoForm);

  return (
    <div className="min-h-[calc(100vh-65px)]">
      <div className="max-w-[1920px] mx-auto px-[75px] py-10 flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Panel */}
        <div className="w-full lg:w-[50%] bg-[#FBEFE6] rounded-2xl p-8 flex flex-col items-center text-center flex-shrink-0">
          <img src={supportImg} alt="support" />
          <h2 className="text-3xl font-black text-gray-800 mt-5 mb-3">
            We're Here to Help
          </h2>
          <p className="text-[#6A7282] text-[16px] font-medium leading-relaxed mb-7">
            Our dedicated support team is available 9AM-5PM to assist you with
            any queries or technical issues.
          </p>
          <div className="flex flex-col w-full">
            <div className="flex justify-center items-center gap-3 rounded-xl px-5 py-3">
              <span>
                <img src={phoneIcon} alt="phone" />
              </span>
              <span className="text-[#101828] font-semibold text-sm">
                1800-XXX-XXXX
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 rounded-xl px-5 py-3">
              <span>
                <img src={mailIcon} alt="mail" />
              </span>
              <span className="text-[#101828] font-semibold text-sm">
                support@bankplugin.com
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-[50%] flex-1 flex flex-col gap-5">
          {/* Demo Request Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-7 py-5 cursor-pointer"
              onClick={() => setDemoOpen((v) => !v)}
            >
              <span
                className={`${demoOpen ? "text-[#DB620A]" : "text-black"} font-bold text-lg`}
              >
                Demo Request Form
              </span>
              <span
                className={`w-8 h-8 rounded-full ${demoOpen ? "bg-[#DB620A] text-white" : "text-[#DB620A]"} flex items-center justify-center text-lg font-bold shadow`}
              >
                {demoOpen ? "×" : "+"}
              </span>
            </button>

            {demoOpen && (
              <div className="px-7 pb-7">
                <div className="grid grid-cols-1 gap-5">
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Company Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={demoForm.companyName}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className={inputClass(demoErrors.companyName)}
                    />
                    <FieldError msg={demoErrors.companyName} />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={demoForm.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={inputClass(demoErrors.email)}
                    />
                    <FieldError msg={demoErrors.email} />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Mobile Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      maxLength={10}
                      value={demoForm.mobile}
                      onChange={(e) => {
                        setDemoForm({
                          ...demoForm,
                          mobile: e.target.value.replace(/\D/g, ""),
                        });
                        setDemoErrors((prev) => ({ ...prev, mobile: "" }));
                      }}
                      placeholder="Enter your mobile number"
                      className={inputClass(demoErrors.mobile)}
                    />
                    <FieldError msg={demoErrors.mobile} />
                  </div>

                  {/* Product Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Product Type<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="productType"
                      value={demoForm.productType}
                      onChange={handleChange}
                      placeholder="Enter your product type"
                      className={inputClass(demoErrors.productType)}
                    />
                    <FieldError msg={demoErrors.productType} />
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Suitable Date For Demo
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={demoForm.date}
                        onChange={handleChange}
                        placeholder="DD-MM-YY"
                        className={inputClass(demoErrors.date)}
                      />
                      <FieldError msg={demoErrors.date} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Suitable Time For Demo
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={demoForm.time}
                        onChange={handleChange}
                        className={inputClass(demoErrors.time)}
                      />
                      <FieldError msg={demoErrors.time} />
                    </div>
                  </div>

                  {/* RM Partner Checkbox */}
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="rmPartner"
                      checked={rmPartner}
                      onChange={(e) => {
                        setRmPartner(e.target.checked);
                        if (!e.target.checked)
                          setDemoErrors((prev) => ({
                            ...prev,
                            rmPartnerId: "",
                            rmMobile: "",
                          }));
                      }}
                      className="w-4 h-4 accent-orange-500 rounded"
                    />
                    <label
                      htmlFor="rmPartner"
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      R/M Partner Details
                    </label>
                  </div>

                  {/* RM Fields */}
                  {rmPartner && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          R/M Partner ID<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="rmPartnerId"
                          value={demoForm.rmPartnerId}
                          onChange={handleChange}
                          placeholder="Enter R/M Partner ID"
                          className={inputClass(demoErrors.rmPartnerId)}
                        />
                        <FieldError msg={demoErrors.rmPartnerId} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          RM/Partner Mobile Number
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="rmMobile"
                          maxLength={10}
                          value={demoForm.rmMobile}
                          onChange={(e) => {
                            setDemoForm({
                              ...demoForm,
                              rmMobile: e.target.value.replace(/\D/g, ""),
                            });
                            setDemoErrors((prev) => ({
                              ...prev,
                              rmMobile: "",
                            }));
                          }}
                          placeholder="Enter RM/Partner Mobile Number"
                          className={inputClass(demoErrors.rmMobile)}
                        />
                        <FieldError msg={demoErrors.rmMobile} />
                      </div>
                    </>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleDemoSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-orange-200 hover:shadow-lg text-sm tracking-wide mt-1 cursor-pointer"
                  >
                    Request Demo
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Support Request Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-7 py-5 cursor-pointer"
              // onClick={() => setSupportOpen((v) => !v)}
            >
              <span
                className={`${supportOpen ? "text-[#DB620A]" : "text-black"} font-bold text-lg`}
              >
                Support Request Form
              </span>
              <span
                className={`w-8 h-8 rounded-full ${supportOpen ? "bg-[#DB620A] text-white" : "text-[#DB620A]"} flex items-center justify-center text-lg font-bold shadow`}
              >
                {supportOpen ? "×" : "+"}
              </span>
            </button>

            {supportOpen && (
              <div className="px-7 pb-7">
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Issue Type<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="issueType"
                      value={supportForm.issueType}
                      onChange={handleSupportChange}
                      className={selectClass(supportErrors.issueType)}
                    >
                      <option value="">Select issue type</option>
                      <option>Technical Issue</option>
                      <option>Account Query</option>
                      <option>Integration Help</option>
                      <option>Other</option>
                    </select>
                    <FieldError msg={supportErrors.issueType} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      value={supportForm.description}
                      onChange={handleSupportChange}
                      placeholder="Describe your issue in detail..."
                      className={`${inputClass(supportErrors.description)} resize-none`}
                    />
                    <FieldError msg={supportErrors.description} />
                  </div>
                  <button
                    onClick={handleSupportSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-orange-200 hover:shadow-lg text-sm tracking-wide"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showPopup && (
      <SuccessPopup
        requestId={requestId}
        onClose={() => setShowPopup(false)}
      />
    )}
    </div>
  );
}
