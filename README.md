# Think and Grow RYTE: Accessibility Quest
> **"AI Can Build It. But Can Everyone Use It?"**  
> *Discover, diagnose, and fix hidden accessibility bugs in AI-generated interfaces.*

---

## 🌟 Overview

**Think and Grow RYTE** is an internal technology learning session built for engineers, QA analysts, product managers, and designers. Rather than a conventional passive lecture, this application delivers a 15-minute interactive gamified workshop where attendees discover, diagnose, and repair real-world accessibility bugs in AI-generated code.

---

## 🎨 Visual Design System & Branding

- **Program Name**: `Think and Grow RYTE`
- **Subtitle**: `Internal Knowledge Sharing`
- **Company Brand**: DigiRyte (featuring the official logo)
- **Theme**: Light mode only (Clean SaaS educational aesthetic)
- **Design Tokens**:
  - **Background**: `#F8FAFC`
  - **Surface**: `#FFFFFF`
  - **Primary Text**: `#172033`
  - **Secondary Text**: `#64748B`
  - **Primary Accent**: `#5B5CE2` (Hover: `#4C4DD0`, Light: `#EEF0FD`)
  - **Secondary Accent**: `#0EA5E9`
  - **Success**: `#16A34A`
  - **Warning**: `#D97706`
  - **Error**: `#DC2626`
  - **Borders**: `#E2E8F0`
- **Typography**: Inter with JetBrains Mono for code snippets.

---

## ⏱️ 15-Minute Session Timing Plan

| Slide / Stage | Duration | Title | Key Interaction |
| :--- | :---: | :--- | :--- |
| **Slide 1** | 1 min | **Welcome — Accessibility Quest** | Mission stats, editable presenter name, animated mission briefing modal. |
| **Slide 2** | 1 min | **The Challenge (The AI Paradox)** | 3 interactive cards & pointer vs keyboard simulation widget. |
| **Demo A** | 3 min | **The Bug Lab (Discover)** | Realistic SaaS contact form with 5 clickable bug hotspots & diagnosis quizzes. |
| **Demo B** | 4 min | **Accessibility Detective (Investigate)** | Simulated Lighthouse audit panel & manual keyboard navigation challenge. |
| **Demo C** | 4 min | **Fix the Bugs (Repair)** | Split-screen broken vs improved form, code diffs, and live keyboard tester. |
| **Demo D** | 2 min | **Final Boss (Prove Your Skills)** | 3 rapid-fire quiz questions with 20s timers, boss victory, and milestone badge. |
| **Closing** | 1 min | **Quest Complete (Wrap-Up)** | Final score, 5-point takeaway checklist, copy button, and Q&A. |

---

## 🕹️ Interactive Keyboard Shortcuts

- <kbd>→</kbd> / <kbd>Space</kbd>: Next slide (automatically disabled when typing inside input fields).
- <kbd>←</kbd>: Previous slide.
- <kbd>P</kbd>: Toggle the discreet Presenter Notes drawer (includes slide duration & talking points).
- <kbd>Esc</kbd>: Exit fullscreen or dismiss open modals/drawers.
- <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd>: Full keyboard accessibility throughout the presentation shell.

---

## 🚀 Setup & Local Execution

### Prerequisites
- Node.js `v18+` (recommended `v20` or `v24`)
- npm `v9+`

### Installation
```bash
# Navigate to the workspace directory
cd "/Users/tarun/Think and Grow "

# Install dependencies (React, Vite, TypeScript, Tailwind CSS, Lucide React, Canvas Confetti)
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🎤 Presenter Quick Guide

1. **Before the session**:
   - Open [http://localhost:5173](http://localhost:5173).
   - Click the pencil icon on Slide 1 to personalize the **Presenter Name**.
   - Press <kbd>P</kbd> to open the Presenter Notes drawer on a secondary monitor or discreetly in the corner.
   - Click the **Fullscreen** icon in the header for an immersive stage presentation.
2. **During Demo A (The Bug Lab)**:
   - Ask the audience: *"Who can spot why this gray helper text is dangerous in sunlight?"*
   - Click the hotspots to let the audience vote on multiple-choice options.
3. **During Demo B (Accessibility Detective)**:
   - Challenge the audience: *"If our CI pipeline shows 100 on Lighthouse, can we ship?"*
   - Demonstrate the manual keyboard challenge where the `<div>` button is unreachable.
4. **During Demo C (Fix The Bugs)**:
   - Click **Try Keyboard Navigation** and physically press <kbd>Tab</kbd> on your keyboard to demonstrate the high-contrast `:focus-visible` ring.
5. **During the Closing**:
   - Click **Copy Checklist** to share the 5-point checklist with the engineering team.

---

## 🛡️ WCAG Criteria Covered

- **WCAG 1.3.1**: Info and Relationships (Programmatic `<label for="...">` and `id` linking)
- **WCAG 1.4.1**: Use of Color (Never relying on color alone for error states)
- **WCAG 1.4.3**: Contrast (Minimum 4.5:1 for normal body text, 3:1 for UI components)
- **WCAG 2.1.1**: Keyboard (All controls reachable and operable without a mouse)
- **WCAG 2.4.7**: Focus Visible (Unmistakable `:focus-visible` outline indicators)
- **WCAG 3.3.1 & 3.3.3**: Error Identification & Error Suggestion (`aria-describedby` & recovery advice)
- **WCAG 4.1.2**: Name, Role, Value (Semantic elements over styled `<div>` elements)

---

## 📁 Project Structure

```
src/
├── assets/
│   └── digiryte-logo.png         # Official company logo asset
├── components/
│   ├── AchievementToast.tsx      # Polite aria-live notification toast
│   ├── Footer.tsx                # Bottom stage navigation & keyboard hints
│   ├── Header.tsx                # Branding, logo, score, and utility controls
│   ├── PresenterNotes.tsx        # Discreet drawer for timing & talking points
│   └── slides/
│       ├── SlideWelcome.tsx      # Slide 1: Welcome & Mission Briefing
│       ├── SlideChallenge.tsx    # Slide 2: The AI Paradox & mouse vs keyboard demo
│       ├── SlideBugLab.tsx       # Slide 3 (Demo A): 5 clickable bug hotspots
│       ├── SlideDetective.tsx    # Slide 4 (Demo B): Simulated audit & manual test
│       ├── SlideFixTheBugs.tsx   # Slide 5 (Demo C): Split-screen live refactor
│       ├── SlideFinalBoss.tsx    # Slide 6 (Demo D): 20s countdown rapid quiz
│       └── SlideClosing.tsx      # Slide 7: Score summary, badge, & checklist
├── constants/
│   ├── branding.ts               # Single source of truth for Think and Grow RYTE
│   ├── gameData.ts               # Diagnostic questions, bugs, fixes, and checklist
│   └── slides.ts                 # Timing and presenter talking points per slide
├── context/
│   └── GameStateContext.tsx      # Score, solved items, missions, sound, persistence
├── types/
│   └── presentation.ts           # Strong TypeScript interfaces
├── utils/
│   └── sound.ts                  # Web Audio synthesizer for accessible sound cues
├── App.tsx                       # Presentation shell & keyboard handler
├── main.tsx                      # App entry point
└── index.css                     # Tailwind directives, color tokens, animations
```

---

*Think and Grow RYTE — Build fast. Test thoughtfully. Design for everyone.*
