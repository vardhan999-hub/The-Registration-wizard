import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../schemas/formSchema";
import { useMultiStepForm } from "../hooks/useMultiStepForm";

const Step1 = () => {
  const { formData, updateFormData, goNext } = useMultiStepForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(step1Schema),
    mode: "onChange",
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
    },
  });

  useEffect(() => {
    reset({
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
    });
  }, [formData]);

  const onSubmit = (data) => {
    updateFormData(data);
    goNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="step-form" noValidate>
      <div className="form-header">
        <div className="form-icon">👤</div>
        <h2>Personal Information</h2>
        <p>Let's start with who you are.</p>
      </div>

      <div className="field-row">
        <div className="field-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="e.g. Riya"
            aria-invalid={!!errors.firstName}
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="error-msg">⚠ {errors.firstName.message}</span>
          )}
        </div>

        <div className="field-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="e.g. Sharma"
            aria-invalid={!!errors.lastName}
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="error-msg">⚠ {errors.lastName.message}</span>
          )}
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          aria-invalid={!!errors.dob}
          className={errors.dob ? "input-error" : ""}
          {...register("dob")}
        />
        {errors.dob && (
          <span className="error-msg">⚠ {errors.dob.message}</span>
        )}
      </div>

      <div className="nav-buttons">
        <div />
        <button type="submit" disabled={!isValid} className="btn-primary">
          Next Step →
        </button>
      </div>
    </form>
  );
};

export default Step1;