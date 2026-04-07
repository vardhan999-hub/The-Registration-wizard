import { useMultiStepForm } from "../hooks/useMultiStepForm";

const Success = () => {
  const { formData, resetForm } = useMultiStepForm();

  return (
    <div className="success-screen">
      <div className="success-animation">
        <div className="success-ring" />
        <div className="success-checkmark">✓</div>
      </div>

      <h2 className="success-title">Welcome aboard!</h2>
      <p className="success-subtitle">
        Account created for <strong>{formData.firstName} {formData.lastName}</strong>
      </p>
      <p className="success-email">{formData.email}</p>

      <button className="btn-restart" onClick={resetForm}>
        ↩ Start Over
      </button>
    </div>
  );
};

export default Success;