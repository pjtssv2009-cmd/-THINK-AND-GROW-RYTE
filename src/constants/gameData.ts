import type { BugItem, InvestigationItem, FixItem, QuizQuestion } from '../types/presentation';

// Demo A: The 5 bugs in the AI-generated form
export const BUG_LAB_ITEMS: BugItem[] = [
  {
    id: 'contrast',
    name: 'Ghost Text (Low Contrast)',
    selectorLabel: 'Helper text & Placeholder',
    symptom: 'Faint gray helper text is nearly invisible in normal lighting and impossible to read for users with low vision.',
    question: 'Why is the helper text "#CBD5E1" on a white background problematic for accessibility?',
    options: [
      {
        id: 'c1',
        text: 'The contrast ratio is ~1.8:1, failing the WCAG AA minimum requirement of 4.5:1 for normal text.',
        isCorrect: true,
        explanation: 'Correct! WCAG 1.4.3 requires a minimum contrast of 4.5:1 for normal text to ensure readability for users with moderate low vision or when viewing under bright glare.'
      },
      {
        id: 'c2',
        text: 'Placeholder text is legally prohibited by international web standards in all forms.',
        isCorrect: false,
        explanation: 'Placeholders are not prohibited, but relying on them with poor contrast creates severe usability and accessibility barriers.'
      },
      {
        id: 'c3',
        text: 'The font size must always be at least 24px regardless of the contrast color.',
        isCorrect: false,
        explanation: 'WCAG does not mandate 24px for all text. For normal text (under 18pt/24px), 4.5:1 contrast ratio is required.'
      }
    ],
    wcagCriterion: 'WCAG 1.4.3 Contrast (Minimum) — Level AA'
  },
  {
    id: 'label',
    name: 'Ghost Label (Unassociated Input)',
    selectorLabel: 'Full Name Input Field',
    symptom: 'The label "Full Name" is rendered as a plain styled <span> with no <label for="..."> or id link to the input.',
    question: 'What happens when a blind engineer uses a screen reader on this input field?',
    options: [
      {
        id: 'l1',
        text: 'The screen reader announces only "Edit text, blank" without speaking the field name.',
        isCorrect: true,
        explanation: 'Exactly! Without a programmatic <label for="id"> or aria-label, assistive technology cannot reliably tell the user what data is expected in the field.'
      },
      {
        id: 'l2',
        text: 'The screen reader automatically uses computer vision AI to guess the adjacent text.',
        isCorrect: false,
        explanation: 'Screen readers rely on the semantic Accessibility Object Model (AOM), not visual proximity or guessing.'
      },
      {
        id: 'l3',
        text: 'The browser automatically throws a runtime JavaScript exception and halts rendering.',
        isCorrect: false,
        explanation: 'Browsers render unassociated inputs silently without error, which is why AI-generated code frequently misses this bug.'
      }
    ],
    wcagCriterion: 'WCAG 1.3.1 Info and Relationships & 4.1.2 Name, Role, Value — Level A'
  },
  {
    id: 'focus',
    name: 'Vanishing Focus Indicator',
    selectorLabel: 'Email Input & Submit Button',
    symptom: 'CSS uses "outline: none" without providing a custom visible focus ring, causing keyboard users to lose track of where they are.',
    question: 'Why do AI styling generators frequently write `outline: none` and why is it dangerous?',
    options: [
      {
        id: 'f1',
        text: 'It strips browser default focus rings for aesthetics, leaving sighted keyboard users navigating completely blind.',
        isCorrect: true,
        explanation: 'Spot on! AI models often mimic CSS resets that strip outlines for a "clean" look, without replacing them with accessible custom :focus-visible rings.'
      },
      {
        id: 'f2',
        text: 'Outlines cause significant performance frame drops in modern rendering engines.',
        isCorrect: false,
        explanation: 'Focus outlines have negligible performance impact; removing them is purely a visual antipattern.'
      },
      {
        id: 'f3',
        text: 'It triggers automatic CAPTCHA challenges from browser security sandboxes.',
        isCorrect: false,
        explanation: 'Outlines are purely CSS presentation properties and do not trigger CAPTCHAs.'
      }
    ],
    wcagCriterion: 'WCAG 2.4.7 Focus Visible — Level AA'
  },
  {
    id: 'error_text',
    name: 'Vague Validation Error',
    selectorLabel: 'Department Dropdown Error',
    symptom: 'The error message simply reads "Invalid input" with no explanation of what went wrong or how to fix it.',
    question: 'How should accessible error messages be structured according to WCAG guidelines?',
    options: [
      {
        id: 'e1',
        text: 'Describe the specific problem clearly, provide actionable recovery suggestions, and programmatically link with aria-describedby.',
        isCorrect: true,
        explanation: 'Correct! WCAG 3.3.1 and 3.3.3 require specific error identification and actionable suggestions so users understand how to recover.'
      },
      {
        id: 'e2',
        text: 'Display a modal dialog with a 10-second blocking alert timer.',
        isCorrect: false,
        explanation: 'Blocking modal alerts interrupt user workflow and can trap keyboard/screen reader focus.'
      },
      {
        id: 'e3',
        text: 'Vague errors are preferred to keep the user interface looking minimal and uncluttered.',
        isCorrect: false,
        explanation: 'Clarity and error recovery must never be sacrificed for visual minimalism.'
      }
    ],
    wcagCriterion: 'WCAG 3.3.1 Error Identification & 3.3.3 Error Suggestion — Level A & AA'
  },
  {
    id: 'color_only',
    name: 'Color-Only Error Indication',
    selectorLabel: 'Message Box Border',
    symptom: 'The invalid message textarea is signaled solely by turning the thin border red, with no warning icon or text message.',
    question: 'Why does relying solely on a red border fail users with protanopia or deuteranopia (red-green colorblindness)?',
    options: [
      {
        id: 'co1',
        text: 'Users who cannot perceive red hue cannot distinguish the error state from a standard gray border.',
        isCorrect: true,
        explanation: 'Exactly right! WCAG 1.4.1 mandates that color cannot be used as the only visual means of conveying information, indicating an action, or distinguishing a visual element.'
      },
      {
        id: 'co2',
        text: 'Red color wavelengths cause severe eye strain on high refresh rate displays.',
        isCorrect: false,
        explanation: 'The issue is cognitive and perceptual inclusivity for the ~8% of males with color vision deficiency, not monitor refresh rates.'
      },
      {
        id: 'co3',
        text: 'Red borders are reserved strictly for system-level operating system alerts.',
        isCorrect: false,
        explanation: 'Applications can use red, provided there is a secondary indicator like text, icon, or texture.'
      }
    ],
    wcagCriterion: 'WCAG 1.4.1 Use of Color — Level A'
  }
];

// Demo B: Accessibility Detective cards & keyboard navigation challenge
export const INVESTIGATION_CARDS: InvestigationItem[] = [
  {
    id: 'inv-keyboard',
    category: 'Keyboard Navigation',
    title: 'The "Clickable Div" Trap',
    symptom: 'Buttons and dropdowns made from <div> or <span> elements work with a mouse click, but are completely skipped by the Tab key.',
    testInstruction: 'Unplug or stop touching your mouse. Use Tab to move through the page, Enter/Space to activate, and Esc to dismiss.',
    underlyingIssue: 'AI generated <div onClick={...}> instead of native <button>. It lacks tabIndex="0", role="button", and onKeyDown handlers.',
    userImpact: 'Users with motor disabilities, repetitive strain injury (RSI), screen reader users, and power keyboard users are totally blocked from submitting.',
    remedy: 'Always use semantic HTML <button type="button"> or <a>. Native elements provide keyboard focus and space/enter activation for free.'
  },
  {
    id: 'inv-labels',
    category: 'Form Labels & AOM',
    title: 'The Invisible Context Problem',
    symptom: 'Lighthouse gives a high score because an input has a "placeholder" attribute, but the field has no persistent accessible name.',
    testInstruction: 'Turn on VoiceOver (Cmd + F5 on Mac) or inspect the browser DevTools "Accessibility" tab under Computed Properties.',
    underlyingIssue: 'Placeholders disappear upon typing and are not reliable accessible names. Missing <label htmlFor="id"> or aria-labelledby.',
    userImpact: 'Screen reader users navigating via form control shortcuts hear "Edit text, value: John" without knowing whether it is first name, last name, or company.',
    remedy: 'Pair every input with an explicit <label htmlFor="id">. Use aria-describedby for helper and error strings.'
  },
  {
    id: 'inv-contrast',
    category: 'Visual Contrast & Zoom',
    title: 'The Modern Pale Aesthetic Trap',
    symptom: 'Ultra-light gray text (#94A3B8 on #F8FAFC) looks "trendy" on an OLED monitor at 100% brightness, but washes out in everyday conditions.',
    testInstruction: 'Use Chrome DevTools color picker to inspect contrast ratios, or simulate vision deficiency in the Rendering drawer.',
    underlyingIssue: 'Style models favor low-contrast neutral palettes from Dribbble designs that ignore WCAG 4.5:1 / 3:1 luminance math.',
    userImpact: 'Users with aging eyes, low vision, cataract survivors, or anyone working outside in direct sunlight cannot read the instructions.',
    remedy: 'Test contrast ratios in your design tokens. Use #475569 or darker for secondary body text on white backgrounds.'
  }
];

// Simulated Lighthouse Accessibility report data
export const SIMULATED_LIGHTHOUSE_DATA = {
  score: 72,
  label: 'Simulated Lighthouse Audit (Educational Illustration)',
  summary: 'Automated testing flags obvious syntax gaps, but cannot test logical tab order, dynamic announcements, or error recovery.',
  audits: [
    { title: 'Form elements do not have associated labels', status: 'fail', impact: 'Serious', category: 'AOM' },
    { title: 'Background and foreground colors do not have sufficient contrast ratio', status: 'fail', impact: 'Serious', category: 'Contrast' },
    { title: 'Focusable elements are missing clear focus indicators', status: 'manual', impact: 'Requires Manual Check', category: 'Keyboard' },
    { title: 'Buttons have an accessible name', status: 'pass', impact: 'Pass', category: 'Semantics' },
    { title: 'Page contains valid heading hierarchy', status: 'pass', impact: 'Pass', category: 'Structure' }
  ]
};

// Demo C: Fix The Bugs
export const FIX_ITEMS: FixItem[] = [
  {
    id: 'fix-label',
    title: '1. Explicit Label Association',
    issueLabel: 'Unassociated Input',
    wcagCode: 'WCAG 1.3.1 (Level A)',
    badCode: `<!-- AI Generated: Broken -->\n<span class="text-sm font-medium">Full Name</span>\n<input type="text" placeholder="John Doe" />`,
    goodCode: `<!-- Accessible Fix -->\n<label for="fullName" class="text-sm font-medium text-slate-800">\n  Full Name <span aria-hidden="true" class="text-red-600">*</span>\n</label>\n<input id="fullName" name="fullName" type="text" required aria-required="true" />`,
    rationale: 'Binding label with `for` and input with `id` connects the element in the Accessibility Tree, ensuring screen readers announce the label upon focus and clicking the label focuses the input.',
    applied: false
  },
  {
    id: 'fix-focus',
    title: '2. High-Contrast Focus Ring',
    issueLabel: 'Vanishing Focus Indicator',
    wcagCode: 'WCAG 2.4.7 (Level AA)',
    badCode: `/* AI Generated: Stripped Outline */\ninput:focus, button:focus {\n  outline: none;\n  box-shadow: none;\n}`,
    goodCode: `/* Accessible Fix */\ninput:focus-visible, button:focus-visible {\n  outline: 2px solid #5B5CE2;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 4px rgba(91, 92, 226, 0.15);\n}`,
    rationale: 'Using `:focus-visible` keeps mouse clicks aesthetically clean while giving keyboard navigators an unmistakable, high-contrast 2px visual ring with offset.',
    applied: false
  },
  {
    id: 'fix-contrast',
    title: '3. Compliant Contrast Ratio',
    issueLabel: 'Faint 1.8:1 Text',
    wcagCode: 'WCAG 1.4.3 (Level AA)',
    badCode: `<!-- AI Generated: 1.8:1 Contrast -->\n<p class="text-[#CBD5E1] text-xs">\n  We will never share your personal email.\n</p>`,
    goodCode: `<!-- Accessible Fix: 5.4:1 Contrast -->\n<p id="email-hint" class="text-slate-600 text-xs font-normal">\n  We will never share your personal email.\n</p>`,
    rationale: 'Replacing faint gray with `#475569` elevates contrast from 1.8:1 to 5.4:1, exceeding the WCAG AA requirement of 4.5:1 while keeping a clean modern hierarchy.',
    applied: false
  },
  {
    id: 'fix-error-aria',
    title: '4. Programmatic Error Connection',
    issueLabel: 'Unlinked Generic Error',
    wcagCode: 'WCAG 3.3.1 & 3.3.3 (Level A/AA)',
    badCode: `<!-- AI Generated: Orphan Error Message -->\n<input type="email" value="invalid-email" />\n<div class="text-xs text-red-500">Invalid input</div>`,
    goodCode: `<!-- Accessible Fix: aria-invalid & aria-describedby -->\n<input \n  id="user-email" \n  type="email" \n  aria-invalid="true" \n  aria-describedby="email-error email-hint"\n/>\n<div id="email-error" role="alert" class="text-xs text-red-700 font-medium">\n  Please include an "@" in your email address (e.g. name@company.com).\n</div>`,
    rationale: '`aria-invalid="true"` informs assistive tech that the field is in an error state, and `aria-describedby` causes the screen reader to read the exact corrective advice automatically.',
    applied: false
  },
  {
    id: 'fix-color-plus',
    title: '5. Multi-Modal Error Feedback',
    issueLabel: 'Color-Only Red Border',
    wcagCode: 'WCAG 1.4.1 (Level A)',
    badCode: `<!-- AI Generated: Red Border Alone -->\n<textarea class="border border-red-500"></textarea>`,
    goodCode: `<!-- Accessible Fix: Icon + Text + Border + role="alert" -->\n<div class="space-y-1">\n  <textarea class="border-2 border-red-600 bg-red-50/20"></textarea>\n  <p class="flex items-center gap-1.5 text-xs text-red-700 font-medium">\n    <AlertCircleIcon class="w-4 h-4 text-red-600 shrink-0" aria-hidden="true" />\n    <span>Message cannot be blank. Please enter at least 10 characters.</span>\n  </p>\n</div>`,
    rationale: 'Pairing an alert icon, bold text, and high-contrast border ensures colorblind users, users in sunlight, and screen reader users can identify and recover from the error instantly.',
    applied: false
  }
];

// Demo D: Final Boss Rapid Quiz Questions (20s timer each)
export const BOSS_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'boss-1',
    category: 'Keyboard Accessibility',
    question: 'An engineer asks you to review an AI-generated modal dialog. When pressing Tab inside the open modal, the focus leaves the modal and highlights links behind the backdrop. What critical accessibility feature is missing?',
    options: [
      {
        id: 'b1-a',
        text: 'A keyboard focus trap (focus must loop within the modal until closed, and Esc must dismiss).',
        isCorrect: true
      },
      {
        id: 'b1-b',
        text: 'A CSS backdrop blur filter with minimum 10px radius.',
        isCorrect: false
      },
      {
        id: 'b1-c',
        text: 'A JavaScript setTimeout that closes the modal after 30 seconds.',
        isCorrect: false
      }
    ],
    explanation: 'Modals must trap keyboard focus so users do not accidentally interact with background elements they cannot see. When dismissed, focus must return to the trigger element.'
  },
  {
    id: 'boss-2',
    category: 'Accessible Labels & Icons',
    question: 'An AI generates a modern icon-only search button: `<button><svg>...</svg></button>`. Sighted users see a magnifying glass icon. What does a screen reader user experience?',
    options: [
      {
        id: 'b2-a',
        text: 'It reads "Button" or nothing at all, because there is no text content or `aria-label`.',
        isCorrect: true
      },
      {
        id: 'b2-b',
        text: 'The browser runs optical character recognition to announce "Search".',
        isCorrect: false
      },
      {
        id: 'b2-c',
        text: 'SVG icons are automatically read as their SVG filename by screen readers.',
        isCorrect: false
      }
    ],
    explanation: 'Icon-only buttons must provide an accessible name via `aria-label="Search"` or an visually hidden `<span class="sr-only">Search</span>`, with the SVG marked `aria-hidden="true"`.'
  },
  {
    id: 'boss-3',
    category: 'Automated vs Manual Testing',
    question: 'A pull request passes automated CI testing with a 100/100 Lighthouse accessibility score. Can the engineering team guarantee that everyone can use the feature?',
    options: [
      {
        id: 'b3-a',
        text: 'No. Automated audits only catch ~30-40% of WCAG criteria. Manual keyboard & screen reader tests are required.',
        isCorrect: true
      },
      {
        id: 'b3-b',
        text: 'Yes. A 100 Lighthouse score legally certifies full compliance with WCAG 2.2 AAA standards.',
        isCorrect: false
      },
      {
        id: 'b3-c',
        text: 'Yes, because AI-based browser tests can simulate every human impairment simultaneously.',
        isCorrect: false
      }
    ],
    explanation: 'Automation cannot test logical tab order, dynamic live region announcements, keyboard traps, or whether error messages make sense. Human manual testing is indispensable.'
  }
];

// Final 5-Point Takeaway Checklist
export const ACCESSIBILITY_CHECKLIST = [
  {
    id: 'chk-1',
    title: '1. Unplug the Mouse (Keyboard Testing)',
    description: 'Tab forward, Shift+Tab backward, Enter/Space to activate, Esc to dismiss modals. Ensure a visible focus ring is always present.'
  },
  {
    id: 'chk-2',
    title: '2. Check Labels & Form Instructions',
    description: 'Ensure every input has an explicit <label for="id">. Connect helper & error text with aria-describedby.'
  },
  {
    id: 'chk-3',
    title: '3. Verify Text & UI Contrast',
    description: 'Maintain minimum 4.5:1 contrast for normal body text and 3:1 for large text and interactive component borders.'
  },
  {
    id: 'chk-4',
    title: '4. Test Error Messages & Recovery',
    description: 'Never rely on color alone. Always provide an icon + clear text explaining the problem and how to recover.'
  },
  {
    id: 'chk-5',
    title: '5. Combine Automated Audits with Manual Testing',
    description: 'Use axe-core / Lighthouse in CI to catch regression syntax, but always perform manual keyboard checks before shipping.'
  }
];
