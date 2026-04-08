# Prompts.md — Registration Wizard Development Notes

**Project:** Registration Wizard
**Week:** 7
**Intern:** Tadigadapa Harshavardhan

---

## Overview

This document summarizes how I used AI tools as a *reference* while building the Registration Wizard project.
The primary focus was on understanding multi-step form architecture, implementing validation using Zod, and improving the application through manual testing, debugging, and iteration.

AI was used for guidance and concept clarification, while all implementation, customization, and problem-solving were done independently.

---

## Prompt 1 — Project Structure

**Prompt Used:**
Guidance on structuring a scalable multi-step form.

**What I Implemented:**

* Designed a clean and modular folder structure:

  * `components/`, `schemas/`, `context/`, `hooks/`
* Created separate components for each step:

  * Step1, Step2, Step3
* Isolated Success screen into its own component
* Kept `App.jsx` focused only on layout and rendering logic

---

## Prompt 2 — Global Form State (Context API)

**Prompt Used:**
Using Context API for shared state across steps.

**What I Implemented:**

* Built `FormContext` using `createContext` and `useContext`
* Stored all form inputs inside a single centralized state object
* Created `updateFormData` to merge partial updates efficiently
* Implemented navigation logic:

  * `goNext`, `goBack`, `resetForm`
* Added **localStorage persistence**:

  * Saves data on every change
  * Restores data on refresh
  * Clears storage on reset

---

## Prompt 3 — Custom Hook (useMultiStepForm)

**Prompt Used:**
Abstracting context logic into a reusable hook.

**What I Implemented:**

* Created `useMultiStepForm` to simplify access to global state
* Exposed:

  * `currentStep`, `totalSteps`
  * `progressPercent`
  * `stepTitles`
* Improved code readability by avoiding direct context usage in components

---

## Prompt 4 — Schema Validation (Zod)

**Prompt Used:**
Defining validation schemas with Zod.

**What I Implemented:**

* Created `step1Schema`:

  * Name validation using regex (letters only)
  * Age validation using `.refine()` with accurate date logic
* Created `step2Schema`:

  * Email format validation
  * Password strength rules:

    * Minimum 8 characters
    * At least one uppercase letter
    * At least one number
* Implemented cross-field validation:

  * Confirm password must match password

---

## Prompt 5 — Step 1 (Personal Info)

**Prompt Used:**
Integrating react-hook-form with schema validation.

**What I Implemented:**

* Used `useForm` with `zodResolver(step1Schema)`
* Enabled real-time validation using `mode: "onChange"`
* Synced form data using `reset()` with `useEffect`
* Fixed dependency issue by using `[formData]`
* Added accessibility improvements:

  * `aria-invalid` attributes
* Disabled Next button until form is valid

---

## Prompt 6 — Step 2 (Account Details)

**Prompt Used:**
Password handling and validation.

**What I Implemented:**

* Built custom password visibility toggle (SVG icons)
* Managed visibility using React state
* Prevented autofill issues using `autoComplete="new-password"`
* Implemented real-time validation feedback
* Ensured data persistence when navigating back

---

## Prompt 7 — Step 3 (Review & Submit)

**Prompt Used:**
Displaying collected data before submission.

**What I Implemented:**

* Created reusable `ReviewRow` component
* Masked password for security
* Safely formatted Date of Birth with validation check
* Disabled Submit button if required data is missing
* Logged final data on submission for verification

---

## Prompt 8 — Progress Bar

**Prompt Used:**
Step-based progress indicator.

**What I Implemented:**

* Built animated progress bar using CSS transitions
* Added step indicators with:

  * Active state
  * Completed state (✓ checkmark)
* Displayed dynamic step information:

  * “Step X of Y”

---

## Prompt 9 — Success Screen

**Prompt Used:**
User confirmation UI after submission.

**What I Implemented:**

* Designed animated success indicator using CSS keyframes
* Displayed user-specific data (name and email)
* Added reset functionality:

  * Clears state
  * Clears localStorage

---

## Prompt 10 — UI Design & Styling

**Prompt Used:**
Guidance for modern dark UI design.

**What I Implemented:**

* Built a consistent dark theme using CSS variables
* Used typography system:

  * Syne (headings)
  * DM Sans (body)
* Added:

  * Grid background
  * Glow effects
  * Smooth transitions
* Designed responsive layout for mobile screens
* Implemented error styling tied to validation state

---

## Additional Work Done Independently

* Improved age calculation with precise month/day logic
* Added accessibility enhancements using `aria-invalid`
* Prevented runtime errors using date validation guards
* Implemented submit-level validation checks
* Maintained clean separation of concerns:

  * UI → Components
  * Logic → Hooks & Context
  * Validation → Schemas

---

## Final Reflection

AI was used strictly as a supporting tool for understanding concepts and best practices.
The entire project was manually implemented, debugged, and refined.

This project helped me gain hands-on experience in:

* Building scalable multi-step forms
* Managing shared state using React Context
* Implementing schema-based validation with Zod
* Improving user experience with real-time feedback and accessibility

Overall, it strengthened my understanding of modern React development practices and production-level form handling.
