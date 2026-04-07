import { FormProvider } from "./context/FormContext";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";
import "./index.css";

const WizardContent = () => {
  const { currentStep, isSubmitted } = useMultiStepForm();

  if (isSubmitted) return <Success />;

  return (
    <div className="wizard-card">
      <ProgressBar />
      <div className="step-container">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <FormProvider>
      <div className="app-root">
        <div className="bg-grid" />
        <header className="app-header">
          <div className="logo-mark">⬡</div>
          <span className="logo-text">Onboard<em>Pro</em></span>
        </header>
        <main className="app-main">
          <WizardContent />
        </main>
        <footer className="app-footer">
  © 2026 OnboardPro · All rights reserved
</footer>
      </div>
    </FormProvider>
  );
};


export default App;