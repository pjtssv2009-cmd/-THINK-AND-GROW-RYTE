# Think and Grow RYTE: Interactive Keynote Presentation
> **"AI Can Build It. But Can Everyone Use It?"**  
> *Understanding accessibility in AI-generated interfaces.*

---

## 🌟 Overview

**Think and Grow RYTE** is an internal technology learning session built for engineers, QA analysts, product managers, and designers.

This presentation has been redesigned into a **Light Neo-Brutalist presentation experience**. Rather than a quiz app or game, it delivers a 10-slide, 15-minute educational keynote that explains web accessibility, demonstrates real-world failure modes in AI vibe-coded interfaces, and provides actionable code refactors and checklists.

---

## 🎨 Visual Design System & Branding

- **Program Name**: `THINK AND GROW RYTE`
- **Presentation Title**: `AI CAN BUILD IT. BUT CAN EVERYONE USE IT?`
- **Subtitle**: `Understanding accessibility in AI-generated interfaces.`
- **Closing Motto**: *"Build fast. Test thoughtfully. Design for everyone."*
- **Company Brand**: DigiRyte (featuring the official logo asset at `/digiryte-logo.png`)
- **Aesthetic**: Light Neo-Brutalism (Clean white surfaces, warm paper background `#FFF8EE`, 2px solid `#171717` black borders, and hard offset shadows).
- **Color System**:
  - **Primary Brand Orange**: `#F28C28` (official DigiRyte brand accent)
  - **Primary Hover**: `#DF7A1B`
  - **Primary Light / Background Tint**: `#FFF4E5`
  - **Black Outlines & Headings**: `#171717`
  - **Canvas Background**: `#FFF8EE`
  - **Card Surfaces**: `#FFFFFF`
  - **Secondary Text**: `#525252`
  - **Success**: `#15803D` (surface: `#F0FDF4`)
  - **Warning**: `#D97706` (surface: `#FFFBEB`)
  - **Error**: `#B91C1C` (surface: `#FEF2F2`)
- **Typography**: Bold Inter / Space Grotesk headlines, readable body text, and JetBrains Mono for code snippets.
- **Neo-Brutalist Shadows**:
  - Small / Badge: `2px 2px 0px #171717`
  - Standard Card / Button: `3px 3px 0px #171717` / `4px 4px 0px #171717`
  - Large Panel: `5px 5px 0px #171717`
  - Tactile Pressed State: `translate-x-[2px] translate-y-[2px] shadow-[1px_1px_0px_#171717]`

---

## ⏱️ 15-Minute 10-Slide Structure

| Slide | Duration | Title | Headline | Key Visual & Educational Content |
| :---: | :---: | :--- | :--- | :--- |
| **01** | 1.0 min | **Title & Introduction** | *"AI CAN BUILD IT. BUT CAN EVERYONE USE IT?"* | Light neo-brutalist title card, DigiRyte logo, mission tag, editable presenter name, and orange **START PRESENTATION** primary CTA. |
| **02** | 1.5 min | **What Is Web Accessibility?** | *"WHAT IS WEB ACCESSIBILITY?"* | 4 interaction models (Visual, Motor, Auditory, Cognitive), assistive technologies, and the Persona Spectrum (Permanent, Temporary, Situational). |
| **03** | 1.5 min | **Why It Matters** | *"WHY ACCESSIBILITY MATTERS"* | 4 strategic pillars: Inclusive User Experiences, Usability Improvements for All, Legal & Standards (WCAG AA, ADA, EAA), and Lower Engineering Rework. |
| **04** | 2.0 min | **Five Common Problems** | *"FIVE COMMON ACCESSIBILITY DEFECTS"* | Numbered panels with annotated examples: Contrast, Labels, Keyboard Nav, Error Messages, and Color-Only communication. |
| **05** | 1.5 min | **Color Contrast** | *"COLOR CONTRAST: THE FIRST LINE OF DEFENSE"* | WCAG AA math (4.5:1 body, 3.0:1 large/UI), bad (1.8:1) vs. corrected (16.1:1) comparison, and interactive Sunlight Glare Simulator. |
| **06** | 1.5 min | **Semantic HTML & Labels** | *"SEMANTIC HTML & FORM LABELS"* | Accessibility Object Model (AOM), VoiceOver audio readout simulation, and bordered code panels comparing `<span class="label">` vs `<label for="id">`. |
| **07** | 1.5 min | **Keyboard Accessibility** | *"KEYBOARD ACCESSIBILITY: NO MOUSE REQUIRED"* | Tab sequence rules, Enter/Space activation, `:focus-visible` guide, and an interactive **Simulate Tab Sequence** runner. |
| **08** | 1.5 min | **Accessibility Testing** | *"ACCESSIBILITY TESTING: THE TWO HALVES"* | Tool suite (Lighthouse, axe DevTools, 60s Manual Keyboard Test, Screen Readers), the 40/60 reality, and simulated diagnostic workspace. |
| **09** | 2.0 min | **Live Demo: Audit & Fix** | *"LIVE DEMO: AUDIT AND FIX"* | 4-step progressive workshop (Identify → Inspect → Correct → Retest) with an interactive Broken vs. Accessible form toggle. |
| **10** | 1.0 min | **Checklist & Conclusion** | *"PRACTICAL CHECKLIST & CONCLUSION"* | Reusable 5-point engineering checklist, working **Copy to Clipboard** button, and closing motto: *"Build fast. Test thoughtfully. Design for everyone."* |

---

## 🕹️ Presentation Navigation & Presenter Controls

- <kbd>→</kbd> / <kbd>Space</kbd>: Next slide (automatically disabled when typing inside input fields).
- <kbd>←</kbd>: Previous slide.
- <kbd>P</kbd>: Toggle the discreet **Presenter Notes** drawer (includes talking points and time allocation per slide).
- <kbd>F</kbd> or Header Button: Toggle **Fullscreen Mode**.
- <kbd>Esc</kbd>: Exit fullscreen or dismiss dropdown menus.
- **Slide Jump**: Click the **Slide:** dropdown in the top header or the bottom progress stepper to jump directly to any slide.

---

## 🛡️ Complete Button & Control Audit

All interactive buttons and navigation controls have been audited and verified:
1. **Next & Previous Buttons**: Properly advance and retreat slides; bound to slide boundaries (Previous disabled on Slide 1; Next shows "Completed" and disables on Slide 10).
2. **Start Presentation**: Seamlessly transitions from Slide 1 to Slide 2.
3. **Presenter Notes Drawer**: Toggles smoothly via header button or <kbd>P</kbd> key; displays slide index, allocated duration, headline, and talking points.
4. **Quick Slide Jumper**: Dropdown menu in header with 10 jump targets; auto-closes upon selection.
5. **Interactive Demonstrations**:
   - Slide 02: 4 interactive disability category tabs with instant state inspection.
   - Slide 03: 4 strategic pillar tabs.
   - Slide 04: 5 defect tabs (What, Why, Prevention, Code diff).
   - Slide 05: Sunlight Glare simulation toggle button.
   - Slide 07: Tab Focus sequence runner and reset button.
   - Slide 08: Severity filter buttons (`All`, `Critical`, `Serious`).
   - Slide 09: 4 workshop step buttons and live form mode switcher (`Broken` vs `Accessible`).
   - Slide 10: Copy checklist button with clipboard API feedback and restart presentation button.

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
Generates optimized static assets in the `dist/` directory with zero errors.

---

*THINK AND GROW RYTE — "Build fast. Test thoughtfully. Design for everyone."*
