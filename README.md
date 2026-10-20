# Think and Grow RYTE: Interactive Keynote Presentation
> **"AI Can Build It. But Can Everyone Use It?"**  
> *The hidden accessibility bugs in AI-generated interfaces.*

---

## 🌟 Overview

**Think and Grow RYTE** is an internal technology learning session built for engineers, QA analysts, product managers, and designers.

This presentation has been redesigned into an **AAA game-inspired, modern SaaS presentation experience** in strict light mode. Rather than behaving like a quiz app or a dashboard, it delivers 10 visually distinct, interactive slides that explain and demonstrate real-world accessibility failures in AI-generated code.

---

## 🎨 Visual Design System & Branding

- **Program Name**: `THINK AND GROW RYTE`
- **Presentation Title**: `AI CAN BUILD IT. BUT CAN EVERYONE USE IT?`
- **Subtitle**: `The hidden accessibility bugs in AI-generated interfaces.`
- **Closing Motto**: *"Build fast. Test thoughtfully. Design for everyone."*
- **Company Brand**: DigiRyte (featuring the official logo asset at `/digiryte-logo.png`)
- **Theme**: Light mode only (Clean SaaS + Game UI aesthetic)
- **Design Tokens**:
  - **Background**: `#F7F8FC`
  - **Main Surface**: `#FFFFFF`
  - **Primary Text**: `#172033`
  - **Secondary Text**: `#667085`
  - **Primary Accent**: `#5B5CE2` (Hover: `#4C4DD0`, Light: `#EEF0FD`)
  - **Blue Accent**: `#3B82F6`
  - **Success**: `#16A34A`
  - **Warning**: `#D97706`
  - **Error**: `#DC2626`
  - **Border**: `#E4E7EC`
- **Typography**: Inter with JetBrains Mono for code snippets and technical callouts.

---

## ⏱️ 15-Minute 10-Slide Structure

| Slide | Duration | Title | Headline | Key Visual & Interactive Demonstration |
| :---: | :---: | :--- | :--- | :--- |
| **01** | 1.0 min | **Cinematic Opening** | *"AI CAN BUILD IT. BUT CAN EVERYONE USE IT?"* | AAA game title card in light mode, DigiRyte logo, mission tag, interactive start button, presenter name editor. |
| **02** | 1.5 min | **The Reality Check** | *"FUNCTIONAL DOESN'T MEAN USABLE."* | Split-screen visual comparison: AI visual completion vs. real-world accessibility breakdown with 3 core observations. |
| **03** | 2.0 min | **Enter the Bug Lab** | *"FIVE BUGS. ONE INTERFACE."* | Realistic SaaS contact form with 5 floating bug pins that progressively reveal defect diagnoses without quiz gates. |
| **04** | 1.5 min | **Bug 01: Invisible Label** | *"THE FIELD EXISTS. THE MEANING DOESN'T."* | Magnified form input, VoiceOver audio announcement simulation, and HTML before-and-after `<label for="...">` snippet. |
| **05** | 1.5 min | **Bug 02: Keyboard Trap** | *"NO MOUSE. NOW WHAT?"* | Animated Tab focus path simulation across form controls, `<kbd>` visualizer, and CSS `:focus-visible` guide. |
| **06** | 1.5 min | **Bug 03: Contrast Problem** | *"CAN YOU ACTUALLY READ THIS?"* | Contrast ratio comparisons (1.8:1 vs 4.5:1 vs 7.1:1), sunlight glare simulator, and WCAG AA vs AAA guidance. |
| **07** | 2.0 min | **The Detective Desk** | *"FIND WHAT THE EYE MISSES."* | Browser inspection workspace with interactive audit scanner, finding severity badges, and automated vs manual explanation. |
| **08** | 1.5 min | **The Repair Station** | *"LET'S FIX THE EXPERIENCE."* | Split-screen Before & After form comparison, working toggle between broken & fixed examples, and 3 targeted code diffs. |
| **09** | 1.5 min | **The Proof** | *"BUILD. TEST. VERIFY."* | 3-stage engineering loop (Generate, Test, Verify), audit score verification (74 to 100), and core automated testing caveat. |
| **10** | 1.0 min | **The Takeaway** | *"SHIP FEATURES. DON'T SHIP BARRIERS."* | Achievement emblem (Accessibility Champion), copyable 5-point engineering checklist, and restart presentation control. |

---

## 🕹️ Presentation Navigation & Keyboard Shortcuts

- <kbd>→</kbd> / <kbd>Space</kbd>: Next slide (automatically guarded when editing input fields).
- <kbd>←</kbd>: Previous slide.
- <kbd>P</kbd>: Toggle the discreet **Presenter Notes** drawer (includes talking points and time allocation per slide).
- <kbd>F</kbd> or Header Button: Toggle **Fullscreen Mode**.
- <kbd>Esc</kbd>: Exit fullscreen or dismiss dropdown menus.
- **Slide Jump**: Click the **Slide:** dropdown in the top header or the bottom progress stepper to jump directly to any slide.

---

## 🚀 Setup & Local Execution

### Prerequisites
- Node.js `v18+` (recommended `v20` or `v24`)
- npm `v9+`

### Installation
```bash
# Navigate to workspace
cd "/Users/tarun/Think and Grow "

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

---

## 🎤 Presenter Quick Guide

1. **Before the session**:
   - Open [http://localhost:5173](http://localhost:5173).
   - Click the pencil icon on Slide 1 to customize the **Presenter Name**.
   - Press <kbd>P</kbd> to open the Presenter Notes drawer.
   - Click the **Fullscreen** button in the header.
2. **Slide 03 (Bug Lab)**:
   - Click each bug hotspot pin to progressively reveal the 5 hidden flaws.
3. **Slide 05 (Keyboard Trap)**:
   - Click **Simulate Tab Focus Sequence** to watch how focus travels (and where it gets trapped).
4. **Slide 06 (Contrast Problem)**:
   - Click **Simulate Sunlight Glare** to demonstrate how low-contrast text washes out in outdoor environments.
5. **Slide 07 (Detective Desk)**:
   - Click **Run Automated Audit Scan** to populate the simulated Lighthouse findings table.
6. **Slide 08 (Repair Station)**:
   - Use the **Split View**, **Broken Only**, and **Fixed Only** buttons to switch views and demonstrate the working high-contrast `:focus-visible` form.
7. **Slide 10 (Takeaway)**:
   - Click **Copy Checklist** to place the 5-point engineering checklist onto your clipboard for attendees.

---

## 🛡️ WCAG Criteria Covered

- **WCAG 1.3.1**: Info and Relationships (Programmatic `<label for="...">` and `id` linking)
- **WCAG 1.4.1**: Use of Color (Never relying on color alone for error states)
- **WCAG 1.4.3**: Contrast (Minimum 4.5:1 for normal body text, 3:1 for UI components)
- **WCAG 2.1.1**: Keyboard Accessible (All controls reachable and operable without a mouse)
- **WCAG 2.4.7**: Focus Visible (Unmistakable `:focus-visible` outline indicators)
- **WCAG 3.3.1 & 3.3.3**: Error Identification & Error Suggestion (`aria-describedby` & recovery advice)
- **WCAG 4.1.2**: Name, Role, Value (Semantic elements over unannounced styled tags)

---

## 📁 Project Structure

```
src/
├── assets/
│   └── digiryte-logo.png         # Official company logo asset
├── components/
│   ├── Footer.tsx                # Presentation stage footer & slide navigation
│   ├── Header.tsx                # Program branding, slide indicator, sound, fullscreen
│   ├── PresenterNotes.tsx        # Presenter drawer with timing & talking points (P key)
│   └── slides/
│       ├── Slide01Opening.tsx        # Slide 01: Cinematic title & mission briefing
│       ├── Slide02RealityCheck.tsx   # Slide 02: Split-screen visual vs reality
│       ├── Slide03BugLab.tsx         # Slide 03: 5 bug pins on SaaS contact form
│       ├── Slide04InvisibleLabel.tsx # Slide 04: Missing label magnified inspection
│       ├── Slide05KeyboardTrap.tsx   # Slide 05: Animated Tab sequence & focus path
│       ├── Slide06ContrastProblem.tsx# Slide 06: Luminance ratio & sunlight simulation
│       ├── Slide07DetectiveDesk.tsx  # Slide 07: Browser inspection workspace & audit
│       ├── Slide08RepairStation.tsx  # Slide 08: Split before/after & toggleable repair
│       ├── Slide09TheProof.tsx       # Slide 09: 3-stage process & audit verification
│       └── Slide10TheTakeaway.tsx    # Slide 10: Achievement emblem & 5-point checklist
├── constants/
│   ├── branding.ts               # Centralized branding (THINK AND GROW RYTE)
│   └── slides.ts                 # Metadata, 15m durations, talking points per slide
├── context/
│   └── GameStateContext.tsx      # Presentation state provider & usePresentation hook
├── types/
│   └── presentation.ts           # SlideMeta & SlideId TypeScript types
├── utils/
│   └── sound.ts                  # Subtle Web Audio feedback synthesizer
├── App.tsx                       # Slide router, keyboard navigation (<kbd>→</kbd>, <kbd>←</kbd>, <kbd>P</kbd>)
├── main.tsx                      # Vite React entry point
└── index.css                     # Design system, dot grid background, custom utilities
```

---

*THINK AND GROW RYTE — "Build fast. Test thoughtfully. Design for everyone."*
