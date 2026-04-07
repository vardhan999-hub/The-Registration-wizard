import { useMultiStepForm } from "../hooks/useMultiStepForm";

const ReviewRow = ({ label, value, sensitive }) => (
  <div className="review-row">
    <span className="review-label">{label}</span>
    <span className="review-value">{sensitive ? "••••••••" : value || "—"}</span>
  </div>
);

const Step3 = () => {
  const { formData, goBack, handleSubmit } = useMultiStepForm();

  return (
    <div className="step-form">
      <div className="form-header">
        <div className="form-icon">✅</div>
        <h2>Review & Submit</h2>
        <p>Everything look right? Submit when you're ready.</p>
      </div>

      <div className="review-card">
        <div className="review-section">
          <h3 className="review-section-title">👤 Personal Info</h3>
          <ReviewRow label="First Name" value={formData.firstName} />
          <ReviewRow label="Last Name" value={formData.lastName} />
          <ReviewRow label="Date of Birth" value={
            formData.dob && !isNaN(new Date(formData.dob))
              ? new Date(formData.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
              : "—"
          } />
        </div>

        <div className="review-divider" />

        <div className="review-section">
          <h3 className="review-section-title">🔐 Account Details</h3>
          <ReviewRow label="Email" value={formData.email} />
          <ReviewRow label="Password" value={formData.password} sensitive />
        </div>
      </div>

      <div className="nav-buttons">
        <button type="button" onClick={goBack} className="btn-secondary">
          ← Edit
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!formData.email}
          className="btn-submit"
        >
          🚀 Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;