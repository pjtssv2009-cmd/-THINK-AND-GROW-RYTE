import type { SlideMeta } from '../types/presentation';

export const SLIDES: SlideMeta[] = [
  {
    id: 'slide-01',
    index: 0,
    slideNumber: '01',
    title: 'Cinematic Opening',
    stageName: 'Mission Brief',
    durationMin: 1,
    headline: 'AI CAN BUILD IT. BUT CAN EVERYONE USE IT?',
    description: 'The hidden accessibility bugs in AI-generated interfaces.',
    talkingPoints: [
      'Welcome to Think and Grow RYTE. Today we are exploring modern AI and engineering craftsmanship.',
      'AI tools like Claude, Copilot, and Cursor allow any engineer to generate complete interfaces in seconds.',
      'The code compiles, runs fast, and looks visually stunning. But is it genuinely usable by everyone?',
      'Over the next 15 minutes, we will unpack the hidden accessibility flaws in AI code and learn how to fix them.'
    ]
  },
  {
    id: 'slide-02',
    index: 1,
    slideNumber: '02',
    title: 'The Reality Check',
    stageName: 'Analysis',
    durationMin: 1.5,
    headline: "FUNCTIONAL DOESN'T MEAN USABLE.",
    description: 'Comparing visual completion against real-world accessibility failures.',
    talkingPoints: [
      'Here is a realistic side-by-side comparison of an AI-prompted SaaS interface.',
      'On the left: It looks correct and functions seamlessly under a standard trackpad or mouse.',
      'On the right: What happens when tested with assistive technology or keyboard-only navigation.',
      'Over 96% of the top 1 million homepages fail basic WCAG standards — and AI is trained on those exact pages.'
    ]
  },
  {
    id: 'slide-03',
    index: 2,
    slideNumber: '03',
    title: 'Enter The Bug Lab',
    stageName: 'Inspection',
    durationMin: 2,
    headline: 'FIVE BUGS. ONE INTERFACE.',
    description: 'Anatomy of an AI-generated contact form with five critical failure points.',
    talkingPoints: [
      'We asked a standard LLM to generate a minimal modern contact form.',
      'It contains five distinct traps: contrast, missing labels, vanished focus, vague errors, and color-only states.',
      'Notice how each flaw is virtually invisible to a visual reviewer during a quick code review.',
      'Click on any marker to reveal the underlying failure mode.'
    ]
  },
  {
    id: 'slide-04',
    index: 3,
    slideNumber: '04',
    title: 'Bug 01: The Invisible Label',
    stageName: 'Deep Dive',
    durationMin: 1.5,
    headline: "THE FIELD EXISTS. THE MEANING DOESN'T.",
    description: 'Why visual labels without programmatic association leave screen reader users in the dark.',
    talkingPoints: [
      'AI models love styling <span>Full Name</span> instead of proper semantic <label for="name">.',
      'A sighted user sees the text right above the box.',
      'A blind engineer using VoiceOver hears only: "Edit text, blank" — with zero indication of what to type.',
      'The fix is simple: always bind your label with htmlFor and matching input id.'
    ]
  },
  {
    id: 'slide-05',
    index: 4,
    slideNumber: '05',
    title: 'Bug 02: The Keyboard Trap',
    stageName: 'Deep Dive',
    durationMin: 2,
    headline: 'NO MOUSE. NOW WHAT?',
    description: 'Tracing keyboard focus paths across native buttons vs clickable divs.',
    talkingPoints: [
      'AI styling presets often add "outline: none" or generate <div onClick={...}> instead of native <button>.',
      'Pressing Tab moves through the form until it hits the custom button — and disappears into a black hole.',
      'Users with tremors, motor disabilities, or power keyboard users are completely blocked from submitting.',
      'Let us trace the focus path together and observe where the indicator vanishes.'
    ]
  },
  {
    id: 'slide-06',
    index: 5,
    slideNumber: '06',
    title: 'Bug 03: The Contrast Problem',
    stageName: 'Deep Dive',
    durationMin: 1.5,
    headline: 'CAN YOU ACTUALLY READ THIS?',
    description: 'Evaluating color luminance ratios and the modern pale aesthetic trap.',
    talkingPoints: [
      'Generative design favors subtle low-contrast gray text on white cards for a "sleek" look.',
      'At 1.8:1 or 2.5:1, text washes out entirely in sunlight, on laptop glare, or for users with low vision.',
      'WCAG AA requires 4.5:1 for body copy and 3:1 for large headlines and UI boundaries.',
      'Notice how adjusting the token to 5.4:1 preserves the modern design without sacrificing legibility.'
    ]
  },
  {
    id: 'slide-07',
    index: 6,
    slideNumber: '07',
    title: 'The Detective Desk',
    stageName: 'Audit Workspace',
    durationMin: 2,
    headline: 'FIND WHAT THE EYE MISSES.',
    description: 'The critical difference between automated linters and human manual testing.',
    talkingPoints: [
      'Engineers often ask: "If my Lighthouse accessibility score is 95, are we good to ship?"',
      'Automated audits (axe-core, Lighthouse) can only algorithmically test ~30-40% of WCAG criteria.',
      'Automation cannot evaluate if the tab order makes logical sense or if error messages are comprehensible.',
      'A holistic audit combines automated CI linting with 5 minutes of keyboard navigation testing.'
    ]
  },
  {
    id: 'slide-08',
    index: 7,
    slideNumber: '08',
    title: 'The Repair Station',
    stageName: 'Refactoring',
    durationMin: 2,
    headline: "LET'S FIX THE EXPERIENCE.",
    description: 'Side-by-side code diffs demonstrating accessible HTML & CSS enhancements.',
    talkingPoints: [
      'Here is the complete refactoring in action.',
      'We apply three concrete changes: label bindings, high-contrast :focus-visible rings, and multi-modal error cues.',
      'Notice that the accessible interface looks every bit as premium as the original AI draft.',
      'Accessibility is not a constraint on aesthetics — it is a commitment to quality.'
    ]
  },
  {
    id: 'slide-09',
    index: 8,
    slideNumber: '09',
    title: 'The Proof',
    stageName: 'Verification',
    durationMin: 1,
    headline: 'BUILD. TEST. VERIFY.',
    description: 'A 3-stage delivery loop for AI-accelerated engineering teams.',
    talkingPoints: [
      'How do we operationalize this in our daily sprint workflow?',
      'Stage 1: Generate fast with AI prompts.',
      'Stage 2: Run automated linters and execute a 60-second keyboard audit.',
      'Stage 3: Fix defects, verify in browser accessibility tree, and ship with confidence.'
    ]
  },
  {
    id: 'slide-10',
    index: 9,
    slideNumber: '10',
    title: 'The Takeaway',
    stageName: 'Wrap-Up',
    durationMin: 1.5,
    headline: "SHIP FEATURES. DON'T SHIP BARRIERS.",
    description: 'Five actionable daily principles and session wrap-up.',
    talkingPoints: [
      'Take away this 5-point checklist for your next pull request.',
      '1. Test with a keyboard. 2. Verify form labels. 3. Check contrast math. 4. Multi-modal errors. 5. Combine auto + manual.',
      'Thank you for joining Think and Grow RYTE. Let us build fast, test thoughtfully, and design for everyone!'
    ]
  }
];
