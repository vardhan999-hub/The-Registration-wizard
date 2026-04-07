import { useFormContext } from "../context/FormContext";

export const useMultiStepForm = () => {
  const {
    formData,
    updateFormData,
    currentStep,
    goNext,
    goBack,
    handleSubmit,
    isSubmitted,
    resetForm,
  } = useFormContext();

  const totalSteps = 3;
  const progressPercent = (currentStep / totalSteps) * 100;

  const stepTitles = [
    "Personal Info",
    "Account Details",
    "Review & Submit",
  ];

  return {
    formData,
    updateFormData,
    currentStep,
    totalSteps,
    progressPercent,
    stepTitles,
    goNext,
    goBack,
    handleSubmit,
    isSubmitted,
    resetForm,
  };
};