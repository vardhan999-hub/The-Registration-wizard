# 🚀 Registration Wizard

A modern, production-ready **multi-step registration form** built with React, focusing on performance, validation, and seamless user experience.

🔗 **Live Demo:** https://the-registration-wizard-eight.vercel.app/
📂 **GitHub Repository:** https://github.com/vardhan999-hub/The-Registration-wizard

---

## 📌 Overview

This project demonstrates how to build a **scalable, user-friendly onboarding flow** using modern React practices.
Instead of a long single-page form, the input process is broken into multiple steps, improving usability and reducing friction.

---

## 💡 Why This Project?

Large forms often lead to poor user experience and increased drop-offs.
This project solves that by breaking the form into manageable steps, providing real-time validation, and ensuring users never lose their progress.

It reflects how real-world onboarding systems are built in modern web applications.

---

## ✨ Features

* 🧩 Multi-step form (3 steps)
* ⚡ Real-time validation using Zod
* 🎯 Optimized form handling with React Hook Form
* 🔒 Password strength & confirmation validation
* 👁 Show / Hide password toggle
* 🔁 Data persistence using localStorage
* 🔙 Back navigation with preserved inputs
* 📊 Progress bar with step indicator
* 📋 Review screen before submission
* 🎉 Success screen with reset functionality
* 📱 Fully responsive design
* ♿ Accessibility improvements (`aria-invalid`)

---

## 🛠 Tech Stack

| Technology          | Purpose                          |
| ------------------- | -------------------------------- |
| React 18            | UI framework                     |
| Vite                | Build tool and dev server        |
| React Hook Form     | Optimized form state management  |
| Zod                 | Schema-based validation          |
| @hookform/resolvers | Connects Zod to React Hook Form  |
| CSS Variables       | Custom theming and design system |

---

## 📂 Project Structure

```bash id="9f0v7p"
src/
├── components/
│   ├── Step1.jsx         # Personal Info — First Name, Last Name, DOB
│   ├── Step2.jsx         # Account Details — Email, Password, Confirm Password
│   ├── Step3.jsx         # Review & Submit — read-only data review
│   ├── ProgressBar.jsx   # Animated step progress bar
│   └── Success.jsx       # Post-submission success screen
│
├── context/
│   └── FormContext.jsx   # Global form state, navigation, localStorage
│
├── hooks/
│   └── useMultiStepForm.js  # Custom hook wrapping context
│
├── schemas/
│   └── formSchema.js     # Zod validation schemas for Step 1 and Step 2
│
├── App.jsx               # Root component, wizard orchestration
├── main.jsx              # React entry point
└── index.css             # Design system, CSS variables, animations
```

---

## ⚙️ Installation & Setup

```bash id="ojk4vw"
# Clone the repository
git clone https://github.com/vardhan999-hub/The-Registration-wizard.git

# Navigate to project
cd The-Registration-wizard

# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:5173 in your browser.

---

## ⚙️ How It Works

### 1️⃣ Step-Based Navigation

The form is divided into 3 steps:

* **Step 1** — Personal Info (First Name, Last Name, Date of Birth)
* **Step 2** — Account Details (Email, Password, Confirm Password)
* **Step 3** — Review & Submit

### 2️⃣ Validation (Zod)

* Each step has its own dedicated Zod schema
* `mode: "onChange"` ensures real-time feedback on every keystroke
* Password match is validated using `.refine()` (cross-field validation)
* Age validation is accurate (month/day aware)

### 3️⃣ State Management

* Global state handled via React Context API
* Custom `useMultiStepForm` hook simplifies logic access
* Data persists across steps — Back button never loses input

### 4️⃣ Persistence

* Data is stored in `localStorage`
* Refreshing the page does not reset the form
* Storage is cleared on successful submission

---

## 🎯 Key Highlights

* Implements schema-driven validation (Zod) for scalable form logic
* Avoids unnecessary re-renders using React Hook Form
* Clean architecture with separation of concerns
* Designed to mimic real-world SaaS onboarding flows
* Accessibility support using `aria-invalid`
* Prevents runtime crashes using date validation guards
* Handles browser autofill issues with `autoComplete="new-password"`

---

## Validation Rules

### Step 1 — Personal Info

| Field         | Rule                             |
| ------------- | -------------------------------- |
| First Name    | Min 2 characters, letters only   |
| Last Name     | Min 2 characters, letters only   |
| Date of Birth | Must be between 13–120 years old |

---

### Step 2 — Account Details

| Field            | Rule                                           |
| ---------------- | ---------------------------------------------- |
| Email            | Must be valid format (includes `@` and domain) |
| Password         | Min 8 characters, 1 uppercase, 1 number        |
| Confirm Password | Must exactly match password                    |

---

## 🙌 Acknowledgment

This project was built as part of an internship assignment.
AI tools were used for conceptual guidance, while implementation, debugging, and improvements were done independently.

---

## 📬 Contact

**Tadigadapa Harshavardhan**
🔗 https://github.com/vardhan999-hub
Feel free to connect or reach out for feedback!
