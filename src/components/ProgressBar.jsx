import { useMultiStepForm } from "../hooks/useMultiStepForm";

const ProgressBar = () => {
  const { currentStep, totalSteps, progressPercent, stepTitles } =
    useMultiStepForm();

  return (
    <div className="progress-wrapper">
      <div className="step-labels">
        {stepTitles.map((title, i) => {
          const step = i + 1;
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;
          return (
            <div
              key={step}
              className={`step-label ${isActive ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
            >
              <div className="step-bubble">
                {isCompleted ? (
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span className="step-name">{title}</span>
            </div>
          );
        })}
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="step-counter">
        Step {currentStep} of {totalSteps} — <em>{stepTitles[currentStep - 1]}</em>
      </p>
    </div>
  );
};

export default ProgressBar;