export default function Stepper({ steps, currentStep }) {
  return (
    <div className="flex items-start">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] transition-colors
                ${index < currentStep ? "bg-[#DB620A] text-white"
                : index === currentStep ? "bg-[#DB620A] text-white"
                : "bg-[#E5E7EB] text-[#999]"}`}
            >
              {index < currentStep ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span
              className={`text-xs mt-1.5 whitespace-nowrap font-semibold
                ${index <= currentStep ? "text-[#DB620A]" : "text-[#aaa]"}`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mt-5 mx-1 transition-colors
                ${index < currentStep ? "bg-[#DB620A]" : "bg-[#E5E7EB]"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}