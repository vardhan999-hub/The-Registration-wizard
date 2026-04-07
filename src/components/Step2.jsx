import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../schemas/formSchema";
import { useMultiStepForm } from "../hooks/useMultiStepForm";

const EyeIcon = ({ open }) =>
  open ? (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

const Step2 = () => {
  const { formData, updateFormData, goNext, goBack } = useMultiStepForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(step2Schema),
    mode: "onChange",
    defaultValues: {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
  });

  useEffect(() => {
    reset({
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
  }, [formData]);

  const onSubmit = (data) => {
    updateFormData(data);
    goNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="step-form" noValidate>
      <div className="form-header">
        <div className="form-icon">🔐</div>
        <h2>Account Details</h2>
        <p>Secure your account with strong credentials.</p>
      </div>

      <div className="field-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className={errors.email ? "input-error" : ""}
          {...register("email")}
        />
        {errors.email && (
          <span className="error-msg">⚠ {errors.email.message}</span>
        )}
      </div>

      <div className="field-group">
        <label htmlFor="password">Password</label>
        <div className="input-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 8 chars, 1 uppercase, 1 number"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
            className={errors.password ? "input-error" : ""}
            {...register("password")}
          />
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowPassword((v) => !v)}
            aria-label="Toggle password visibility"
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
        {errors.password && (
          <span className="error-msg">⚠ {errors.password.message}</span>
        )}
      </div>

      <div className="field-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="input-wrapper">
          <input
            id="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter your password"
            autoComplete="new-password"
            aria-invalid={!!errors.confirmPassword}
            className={errors.confirmPassword ? "input-error" : ""}
            {...register("confirmPassword")}
          />
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowConfirm((v) => !v)}
            aria-label="Toggle confirm password visibility"
          >
            <EyeIcon open={showConfirm} />
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="error-msg">⚠ {errors.confirmPassword.message}</span>
        )}
      </div>

      <div className="nav-buttons">
        <button type="button" onClick={goBack} className="btn-secondary">
          ← Back
        </button>
        <button type="submit" disabled={!isValid} className="btn-primary">
          Review →
        </button>
      </div>
    </form>
  );
};

export default Step2;