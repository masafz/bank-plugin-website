import { useState } from "react";
import Stepper from "./components/Stepper";
import StepOne from "./steps/BusinessDetails";
import StepTwo from "./steps/ContactVerification";
import StepThree from "./steps/AccountSetup";

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
    try {
      // await api.register(formData);
      console.log("formData", formData);
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
    <div className="min-h-[calc(100vh-65px)] bg-white flex justify-center items-center px-4 py-12">
      <div className="bg-white rounded-xl px-3 sm:px-5 sm:px-10 py-10 w-full max-w-[520px] shadow-[0px_4px_24px_0px_#00000014]">
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
