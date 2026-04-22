import { useState } from "react";
import Stepper from "./components/Stepper";
import StepOne from "./steps/BusinessDetails";
import StepTwo from "./steps/ContactVerification";
import ellipse2 from "../../assets/icons/svgs/ellipse2.svg";
import ellipse1 from "../../assets/icons/svgs/ellipse1.svg";
import StepThree from "./steps/AccountSetup";
import { post } from "../../api/apiHelpers";
import { toast } from "react-toastify";

const STEPS = ["Business Details", "Contact Verification", "Account Setup"];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1 - Business Details
    companyName: "",
    gstNumber: "",
    state: "",
    erpType: "",
    // Step 2 - Contact Verification
    email: "",
    phone: "",
    // Step 3 - Account Setup
    erpSerial: "",
    rmId: "",
    password: "",
    confirmPassword: "",
    consentTerms: false,
    consentDataSharing: false,
  });

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () =>
    setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    const payload = {
      legal_name: formData.companyName,
      mobile: formData.phone,
      password: formData.password,
      confirm_password: formData.confirmPassword,
      email: formData.email,
      product_type: formData.erpType,
      serial_number: formData.erpSerial,
      state: formData.state,
      register_type: "DIRECT",
      partner_id: "",
      employee_id: formData.rmId,
      gst_number: formData.gstNumber,
    };
    try {
      const res = await post("register", payload);
      console.log(res);
      if (res?.status === "200") {
        toast.success(res?.msg);
        window.location.href = "https://www.bankplugin.com";
      } else if (res?.status === "201") {
        toast.error(res?.msg[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderStep = () => {
    const props = {
      formData,
      updateFormData,
      onNext: nextStep,
      onBack: prevStep,
    };
    switch (currentStep) {
      case 0:
        return <StepOne {...props} />;
      case 1:
        return <StepTwo {...props} />;
      case 2:
        return <StepThree {...props} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-65px)] bg-white flex justify-center items-center px-4 py-12">
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
      <div className="bg-white rounded-xl px-3 sm:px-5 py-10 w-full max-w-[520px] shadow-[0px_4px_24px_0px_#00000014]">
        <h1 className="text-[25px] sm:text-3xl font-black text-[#1E2939] mb-2">
          Register for Bank Plugin
        </h1>
        <p className="text-[16px] text-[#6A7282] mb-7 leading-relaxed">
          Connect your ERP with ICICI Bank to automate accounting and bank
          reconciliation.
        </p>
        <Stepper steps={STEPS} currentStep={currentStep} />
        <div className="mt-8">{renderStep()}</div>
      </div>
    </div>
  );
}
