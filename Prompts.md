# Prompts.md — Registration Wizard (Week 7)

## Project
Multi-Step Registration Wizard — Level 3 (React Hook Form + Zod)

## AI Prompts Used

### Prompt 1 — Full Project Scaffold
> Build a Level 3 multi-step registration wizard in React with the following file structure:
> src/components/ (Step1, Step2, Step3, Success, ProgressBar),
> src/schemas/formSchema.js, src/context/FormContext.jsx,
> src/hooks/useMultiStepForm.js, App.jsx.
> Use react-hook-form for form state, zod for schema validation,
> React Context for global form data, and a custom hook to expose
> wizard navigation logic. Include real-time validation, show/hide
> password toggle, disabled Next button, and a progress bar.

### What I learned
- `useForm` from react-hook-form replaces controlled `useState` per field,
  giving better performance by avoiding re-renders on every keystroke.
- `zodResolver` connects zod schemas directly to RHF's validation pipeline.
- React Context lets child step components read/write shared form data
  without prop drilling through every layer.
- The `defaultValues` in `useForm` + `reset()` on mount is what makes
  the "Back button retains data" behaviour work correctly.
- `mode: "onChange"` triggers validation on every keystroke so errors
  appear in real-time and the Next button disables/enables live.

## Libraries Used
- react-hook-form ^7.54
- @hookform/resolvers ^3.9
- zod ^3.23
