import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext(null);

const STORAGE_KEY = "wizard_formData";

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : {
            firstName: "",
            lastName: "",
            dob: "",
            email: "",
            password: "",
            confirmPassword: "",
          };
    } catch {
      return {
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Persist formData to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    console.log("✅ Final Form Data:", formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    const empty = {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    setFormData(empty);
    localStorage.removeItem(STORAGE_KEY);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        goNext,
        goBack,
        handleSubmit,
        isSubmitted,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used within FormProvider");
  return ctx;
};