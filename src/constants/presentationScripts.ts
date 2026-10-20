/**
 * THINK AND GROW RYTE — Complete Spoken Presentation Scripts
 * Per-slide scripts, visual cues, timing, and downloadable markdown generators.
 */

export interface SlideScript {
  slideNumber: string;
  title: string;
  stageName: string;
  duration: string;
  headline: string;
  visualAction: string;
  spokenScript: string;
  actionToAdvance: string;
  talkingPoints: string[];
}

export const SLIDE_SCRIPTS: Record<string, SlideScript> = {
  '01': {
    slideNumber: '01',
    title: 'Title & Introduction',
    stageName: 'Introduction',
    duration: '1.0 Min',
    headline: 'AI CAN BUILD IT. BUT CAN EVERYONE USE IT?',
    visualAction: 'Click the pencil icon to personalize your presenter name. Press F for fullscreen.',
    spokenScript: `Good morning, everyone, and welcome to this session of Think and Grow RYTE.

Over the past year, generative AI has fundamentally transformed the way we write code. With tools like Claude, Copilot, and Cursor, any of us can prompt an entire responsive UI component—with Tailwind styles, sleek cards, and animated buttons—in about twelve seconds.

The code compiles. It renders beautifully. It looks like it belongs on Dribbble.

But that brings us to the central question of today's session: AI can build it. But can everyone actually use it?

When we look beneath the surface of AI-generated interfaces, we discover a silent epidemic: missing programmatic labels, invisible keyboard focus, color-only errors, and washed-out contrast.

Over the next fourteen minutes, we are going to explore why this happens, how assistive technology truly interacts with your DOM, and the five practical engineering habits we must adopt to build fast without shipping digital barriers.`,
    actionToAdvance: 'Click START PRESENTATION (or press →).',
    talkingPoints: [
      'Welcome to Think and Grow RYTE. Today we examine the intersection of generative AI and frontend craftsmanship.',
      'AI vibe-coding tools can scaffold responsive, visually stunning layouts in seconds.',
      'However, AI models frequently output visual-only wrappers that completely exclude assistive technology users.',
      'Over the next 15 minutes, we will explore core web accessibility principles and practical ways to make AI code accessible.'
    ]
  },
  '02': {
    slideNumber: '02',
    title: 'What Is Web Accessibility?',
    stageName: 'Foundations',
    duration: '1.5 Min',
    headline: 'WHAT IS WEB ACCESSIBILITY?',
    visualAction: 'Click through the four category tabs: Visual → Motor → Auditory → Cognitive.',
    spokenScript: `Before we talk about fixing code, let's establish what web accessibility actually means.

Accessibility—often abbreviated as a11y—is not a charity project or a compliance tax. It is the engineering discipline of ensuring that digital interfaces can be perceived, understood, navigated, and operated by people with diverse sensory, physical, and cognitive capabilities.

[Click Visual tab]
For users with visual impairments, that means screen readers like VoiceOver or NVDA, screen magnifiers, and high-contrast themes.

[Click Motor & Mobility tab]
For users with motor disabilities—tremors, paralysis, or severe repetitive strain—it means operating the entire web application using only a keyboard, sip-and-puff switches, or eye-tracking cameras. No mouse. No touch screen.

[Click Cognitive tab]
And for cognitive accessibility, it means clear visual hierarchy, plain error messages, and no disorienting motion.

Now, look at the bottom banner: The Persona Spectrum. Accessibility isn't just about permanent conditions. If you break your wrist skiing, you have a temporary motor disability. If you're using your laptop outside in bright sunlight, or holding a baby while typing with one hand, you have a situational constraint.

When you engineer for accessibility, you aren't designing for an edge case. You are designing for everyone, including your future self.`,
    actionToAdvance: 'Press → to advance to Slide 03.',
    talkingPoints: [
      'Accessibility means ensuring digital products can be used by everyone, regardless of ability or operating context.',
      'Visual: Screen readers (VoiceOver, NVDA), screen magnifiers, high-contrast modes for low vision and color blindness.',
      'Motor: Keyboard-only users, switch devices, mouth wands, eye trackers who cannot operate a fine pointing device.',
      'Auditory & Cognitive: Captions, visual status alerts, clear structure, predictable interactions, and plain language.',
      'Situational & Temporary: Accessibility benefits everyone — from someone with a broken wrist to an engineer working in bright outdoor sunlight.'
    ]
  },
  '03': {
    slideNumber: '03',
    title: 'Why Accessibility Matters',
    stageName: 'Impact & Value',
    duration: '1.5 Min',
    headline: 'WHY ACCESSIBILITY MATTERS',
    visualAction: 'Click on Pillar 2 (Usability) and Pillar 4 (Reduced Rework).',
    spokenScript: `Why should accessibility be a first-class citizen in our sprint backlogs alongside performance and security?

There are four strategic pillars:

First, Digital Equity. Software is the gateway to work, banking, healthcare, and education. When our interfaces fail assistive devices, we lock real people out of fundamental services.

Second, The Curb-Cut Effect. Sidewalk curb cuts were originally invented for wheelchair users. But who uses them every day? People with strollers, travelers with wheeled luggage, delivery drivers, and cyclists.

The exact same principle applies to software. Semantic HTML makes pages load faster, improves SEO indexation, and enables power-user keyboard shortcuts for everyone.

Third, Enterprise Standards. International benchmarks like WCAG 2.1 Level AA, the Americans with Disabilities Act, and the European Accessibility Act are strict legal requirements for enterprise clients. If our software isn't accessible, enterprise procurement deals get blocked.

And finally, Engineering Economics. [Click Pillar 4]
Adding a programmatic label and a :focus-visible ring during your initial prompt takes approximately five seconds. Discovering that an entire component library fails accessibility right before a production release costs weeks of refactoring. Shift-left quality always wins.`,
    actionToAdvance: 'Press → to advance to Slide 04.',
    talkingPoints: [
      'Inclusive Experiences: Technology should open doors, not build digital barriers for millions of users worldwide.',
      'Usability for Everyone: Semantic, accessible code produces cleaner DOM trees, faster performance, and better UX for mouse, touch, and keyboard alike.',
      'Standards & Compliance: International standards such as WCAG 2.1 / 2.2 AA, ADA Title III, and Section 508 define strict expectations.',
      'Cost of Rework: Catching accessibility issues during initial generation takes seconds; retrofitting production apps costs weeks.'
    ]
  },
  '04': {
    slideNumber: '04',
    title: 'Five Common Accessibility Problems',
    stageName: 'Failure Modes',
    duration: '2.0 Min',
    headline: 'FIVE COMMON ACCESSIBILITY DEFECTS',
    visualAction: 'Walk through tabs 01 to 05, highlighting the What, Why, and Prevention columns.',
    spokenScript: `Now let's look at the pathology of AI vibe coding. When an LLM generates a form or a dashboard, what does it consistently get wrong?

Over 90% of automated accessibility failures in AI code trace back to these five recurring traps:

[Click 01: Insufficient Color Contrast]
Number one: Insufficient Color Contrast. AI models love pale slate text #94A3B8 on clean white backgrounds. It looks sleek on a designer's calibrated OLED monitor in a dark room. But in the real world, it washes out completely.

[Click 02: Missing Form Labels]
Number two: Missing Form Labels. AI models almost always wrap field titles in generic <span> tags or rely exclusively on placeholder text. Sighted users see it. Screen readers hear nothing.

[Click 03: Poor Keyboard Navigation]
Number three: Poor Keyboard Navigation. LLMs frequently output outline: none to remove default browser rings, or generate clickable <div onClick={...}> elements instead of <button> tags. Keyboard users are trapped immediately.

[Click 04: Inaccessible Error Messages]
Number four: Inaccessible Validation Errors. The form fails, red text pops up visually, but there's no aria-describedby or role="alert". A blind user submits the form, hears silence, and assumes the system froze.

[Click 05: Color-Only Communication]
And number five: Conveying Information by Color Alone. Over 300 million people have red-green color blindness. A red border without an error icon or explicit text copy is completely invisible to them.

Let's deep-dive into the two most critical ones: Contrast and Semantics.`,
    actionToAdvance: 'Press → to advance to Slide 05.',
    talkingPoints: [
      '1. Insufficient Color Contrast: Aesthetic pale grays that wash out and fail WCAG luminance ratios.',
      '2. Missing Form Labels: Visual <span> text that leaves screen readers announcing "Edit text, blank".',
      '3. Poor Keyboard Navigation: outline:none and clickable <div> buttons that trap or skip keyboard users.',
      '4. Inaccessible Error Messages: Errors that appear visually but are never wired to aria-describedby or role="alert".',
      '5. Information Communicated Through Color Alone: Red borders that convey nothing to users with red-green color blindness.'
    ]
  },
  '05': {
    slideNumber: '05',
    title: 'Color Contrast: First Line of Defense',
    stageName: 'Visual Standard',
    duration: '1.5 Min',
    headline: 'COLOR CONTRAST: THE FIRST LINE OF DEFENSE',
    visualAction: 'Point out the 4.5:1 ratio box. Click "Enable Sunlight Glare" to run live simulation.',
    spokenScript: `Let's talk about the mathematics of luminance.

Under WCAG Level AA, standard body text requires a minimum contrast ratio of 4.5 to 1 against its background. Large text—defined as 18-point regular or 14-point bold—requires a minimum of 3 to 1, as do interactive UI boundaries like input borders.

Look at the side-by-side comparison on screen.

On the left, we have the classic AI default: gray text with a 1.8 to 1 ratio. On the right, we have high-contrast text at 16.1 to 1.

Now watch what happens when we take both into the real world.

[Click "Enable Sunlight Glare"]

Look at the left card. The text has completely dissolved into the background noise. If an engineer is reviewing a production incident on a laptop while sitting near an office window or commuting on a train, they literally cannot read the helper token.

Meanwhile, the right card—meeting WCAG standards—remains completely legible.

You don't have to sacrifice modern design to achieve contrast. You just have to respect the math.`,
    actionToAdvance: 'Press → to advance to Slide 06.',
    talkingPoints: [
      'WCAG Level AA requires a 4.5:1 minimum contrast ratio for normal body text against its background.',
      'Large text (18pt / 24px, or 14pt / 18.5px bold) and active UI controls require a minimum 3.0:1 ratio.',
      'AI models love subtle pale text (#94A3B8 on #FFFFFF is 2.3:1) which fails dramatically in outdoor glare or on budget screens.',
      'Switching to #171717 or #475569 restores 7.0:1+ contrast while maintaining high-end editorial aesthetics.'
    ]
  },
  '06': {
    slideNumber: '06',
    title: 'Semantic HTML & Form Labels',
    stageName: 'Structure',
    duration: '1.5 Min',
    headline: 'SEMANTIC HTML & FORM LABELS',
    visualAction: 'Direct attention to the VoiceOver readout audio comparison boxes, then compare code blocks.',
    spokenScript: `Here is the fundamental concept every frontend and AI engineer must understand:

Assistive devices do not look at your CSS.

When VoiceOver or NVDA inspects your page, it interacts with the browser's Accessibility Object Model (AOM).

Look at the top left box. When an LLM generates a <span> above an <input>, the browser treats them as completely separate, unrelated nodes. When a blind colleague tabs into that field, VoiceOver announces:

"Edit text, blank."

Imagine trying to fill out an internal expense report or an AWS IAM form when every field announces: 'Edit text, blank. Edit text, blank.' It's an unusable guessing game.

Now look at the right box. By simply replacing that <span> with a proper <label for="fullName"> and matching the input's id, VoiceOver announces:

"Full Name, required, edit text."

Furthermore, when you use a semantic <label>, clicking the text with a mouse automatically focuses the input, expanding the click target for users with motor tremors. And when you use a native <button>, you get Tab focus, Enter key triggers, and Spacebar activation for free, with zero custom JavaScript.`,
    actionToAdvance: 'Press → to advance to Slide 07.',
    talkingPoints: [
      'Assistive devices do not see pixels; they query the browser Accessibility Object Model (AOM).',
      'A <span class="label"> is invisible to screen readers without an explicit <label for="id"> connection.',
      'Using native <button> gives focusability, Enter/Space activation, and keyboard navigation automatically.',
      'Replacing <div onClick> with native elements eliminates dozens of lines of redundant keyboard listener code.'
    ]
  },
  '07': {
    slideNumber: '07',
    title: 'Keyboard Accessibility: No Mouse Required',
    stageName: 'Navigation',
    duration: '1.5 Min',
    headline: 'KEYBOARD ACCESSIBILITY: NO MOUSE REQUIRED',
    visualAction: 'Click "Simulate Tab Sequence" and observe focus indicator traveling through the controls.',
    spokenScript: `Let's talk about the keyboard.

Many software engineers are power keyboard users. We use Vim keybindings, Spotlight, and IDE hotkeys all day. Yet when we generate web UI, keyboard accessibility is often the first thing that breaks.

Every interactive control must follow three rules:
1. It must be reachable via Tab in a logical visual reading order.
2. It must be activatable with Enter or Space.
3. It must have an unmistakably visible focus indicator.

The single most destructive line of CSS on the internet is outline: none or * { outline: 0 }.

Why do developers add it? Because they dislike the blue outline on mouse click.

But the modern CSS specification solved this years ago with the :focus-visible pseudo-class. :focus-visible shows the focus ring only when navigating via keyboard, leaving mouse clicks completely clean.

Let's run the simulation.

[Click "Simulate Tab Sequence"]

Notice how the focus ring highlights Field 1, advances to Field 2, and lands squarely on the submit button. On the broken version, the cursor vanishes into thin air, and the custom <div> button is completely skipped.

If a user can't tab to your button, they can't submit your form.`,
    actionToAdvance: 'Press → to advance to Slide 08.',
    talkingPoints: [
      'Every action achievable with a mouse must be equally achievable with a keyboard alone.',
      'Pressing Tab must advance through interactive controls in a logical reading order; Shift+Tab moves backward.',
      'The single most damaging CSS line is "outline: none" or "* { outline: 0 }".',
      'Use modern :focus-visible to provide a prominent 2px or 3px ring only when keyboard navigation is active.'
    ]
  },
  '08': {
    slideNumber: '08',
    title: 'Accessibility Testing: The Two Halves',
    stageName: 'Quality Suite',
    duration: '1.5 Min',
    headline: 'ACCESSIBILITY TESTING: THE TWO HALVES',
    visualAction: 'Click on the "Critical" and "Serious" filter buttons in the diagnostic table.',
    spokenScript: `A question I often hear from engineering teams is:

"If we add axe-core or Google Lighthouse to our CI pipeline and it scores 100%, are we fully accessible?"

The answer is: No.

Look at the callout on this slide: The 40 / 60 Reality.

Automated audit tools like Chrome Lighthouse and axe DevTools are fantastic. They are fast, reproducible, and catch low-hanging fruit: color contrast, missing alt attributes, duplicate IDs, and invalid ARIA attributes.

[Filter to Critical]
But automated linters only catch about 30 to 40 percent of real-world defects.

An automated tool cannot tell you if your tab order makes logical sense. It cannot tell you if your error message actually explains how to resolve the issue. And it cannot tell you if your custom modal traps a user's keyboard.

That's why high-performing engineering teams pair automated CI tests with The 60-Second Manual Keyboard Check.

Before you submit a pull request, unplug your mouse for sixty seconds. Tab through the component. If you can complete the flow with your eyes on the screen and your hands on the keyboard, you're ready to ship.`,
    actionToAdvance: 'Press → to advance to Slide 09.',
    talkingPoints: [
      'Chrome Lighthouse & axe DevTools are vital CI gates for catching contrast, missing IDs, and syntax errors.',
      'Crucial Reality: Automated tools only catch 30% to 40% of real-world accessibility defects.',
      'Manual Keyboard Testing: Disconnect the mouse for 60 seconds. Can you tab through the entire modal? Can you hit Escape to close it?',
      'Screen-Reader Verification: Test critical checkout or onboarding flows with VoiceOver (macOS) or NVDA (Windows).'
    ]
  },
  '09': {
    slideNumber: '09',
    title: 'Live Demo: Audit & Fix',
    stageName: 'Hands-on Demo',
    duration: '2.0 Min',
    headline: 'LIVE DEMO: AUDIT AND FIX',
    visualAction: 'Toggle form between "Broken" and "Accessible". Click "Submit Form" on accessible version to verify.',
    spokenScript: `Now let's bring everything together in a live refactoring workshop.

On the left is an exact clone of a contact support form generated by an LLM prompt.

[Click "Broken" toggle]
Look at the broken implementation.
- Step 1: We identify the issues. The label is a visual <span>. There is no focus ring. The email error is signaled solely by a red border. And the submit button is a styled <div>.

[Click Step 2: Inspect]
Step 2: We inspect the underlying DOM. Notice the complete absence of for, id, aria-describedby, and semantic button tags.

[Click Step 3: Correct, then toggle form to "Accessible"]
Step 3: We apply four surgical code corrections:
1. We bind <label for="demo-fullname"> to <input id="demo-fullname">.
2. We add :focus-visible: outline: 3px solid #F28C28.
3. We wire aria-describedby="email-hint email-status" to the email input.
4. We replace the <div> with a native <button type="submit">.

[Click "Submit Form" on the form]
Now look at the result. When I submit, the validation message appears with both a green checkmark icon and explicit text, announced dynamically through role="alert".

The accessible version doesn't look clunky or retro. It looks sleek, professional, and refined.

Accessibility elevates software quality.`,
    actionToAdvance: 'Press → to advance to Slide 10.',
    talkingPoints: [
      'Step 1: Identify — Notice the unlabeled input, the 1.8:1 text, the vanished focus ring, and the color-only error.',
      'Step 2: Inspect — View the raw HTML anti-patterns generated by default AI prompts.',
      'Step 3: Correct — Bind htmlFor, restore :focus-visible, and attach aria-describedby with helper text.',
      'Step 4: Retest — Verify keyboard tab traversal and multi-modal error recovery in real-time.'
    ]
  },
  '10': {
    slideNumber: '10',
    title: 'Checklist & Conclusion',
    stageName: 'Takeaways',
    duration: '1.5 Min',
    headline: 'SHIP FEATURES. DON\'T SHIP BARRIERS.',
    visualAction: 'Click "Copy Checklist to Clipboard" button. Point to the closing motto.',
    spokenScript: `As we wrap up today's session, I want to leave you with something actionable you can apply in your very next sprint.

Here is the Think and Grow RYTE 5-Point Engineering Checklist:

1. Disconnect the Mouse: Spend sixty seconds tabbing through your feature. Ensure focus is never lost.
2. Check Form Labels: Make sure every input has an explicit <label for="id">. Placeholders do not count.
3. Verify Contrast Math: Check body text for 4.5:1 and UI boundaries for 3:1.
4. Multi-Modal Errors: Never rely on a red border alone. Always pair color with an icon and clear corrective text.
5. Combine Automation with Manual Verification: Run axe-core in CI, and manually tab before approving pull requests.

[Click "Copy Checklist to Clipboard"]

I've just copied the entire checklist to the clipboard so we can drop it right into our team Slack channel.

AI allows us to build faster than at any point in human history. But our true craftsmanship is judged not just by how fast we ship, but by who can participate in what we build.

Let's adopt our program motto:

"Build fast. Test thoughtfully. Design for everyone."

Thank you all for your time, and I'd love to open the floor for any questions!`,
    actionToAdvance: 'End of presentation. Invite questions from engineering, product, and QA colleagues.',
    talkingPoints: [
      '1. Disconnect the Mouse: Tab through the entire flow. Is focus always visible and logical?',
      '2. Check Form Labels: Does every input have a programmatic <label for="id">?',
      '3. Verify Contrast: Do body text and UI controls meet 4.5:1 and 3.0:1 minimums?',
      '4. Test Error Handling: Are error messages visible, textual, and paired with role="alert"?',
      '5. Combine Automation with 60s Manual Check: Run axe-core in CI, and manually tab before approval.',
      'Closing motto: "Build fast. Test thoughtfully. Design for everyone."'
    ]
  }
};

/**
 * Generate Markdown content for a single slide script
 */
export function generateSlideScriptMarkdown(slideNumber: string): string {
  const script = SLIDE_SCRIPTS[slideNumber] || SLIDE_SCRIPTS['01'];
  
  return `# Think and Grow RYTE — Slide ${script.slideNumber} Script
## ${script.title}
**Target Duration:** ${script.duration} | **Stage:** ${script.stageName}

---

### 📌 Slide Headline
> **"${script.headline}"**

### 🎬 Visual Presentation Cue
${script.visualAction}

---

### 🎙️ Word-for-Word Spoken Script
${script.spokenScript}

---

### 💡 Core Talking Points
${script.talkingPoints.map(point => `- ${point}`).join('\n')}

---

### ⏭️ Action to Advance
${script.actionToAdvance}
`;
}

/**
 * Generate the complete 10-slide Master Presentation Script in Markdown
 */
export function generateMasterScriptMarkdown(): string {
  let markdown = `# THINK AND GROW RYTE — PRESENTER'S MASTER SCRIPT
## "AI Can Build It. But Can Everyone Use It?"
**Target Duration:** 15 Minutes | **Audience:** AI, Software Engineering, QA & Product Teams | **Theme:** Light Neo-Brutalist

---

### ⏱️ Session Timekeeper Cheat-Sheet
`;

  Object.values(SLIDE_SCRIPTS).forEach((s) => {
    markdown += `* **Slide ${s.slideNumber}**: ${s.title} *(${s.duration})*\n`;
  });

  markdown += `\n---\n\n`;

  Object.values(SLIDE_SCRIPTS).forEach((s) => {
    markdown += `## SLIDE ${s.slideNumber} — ${s.title} (${s.duration})
**Headline:** ${s.headline}  
**Visual Action:** ${s.visualAction}  

#### 🎙️ Spoken Script:
${s.spokenScript.split('\n\n').map(p => `> ${p}`).join('\n>\n')}

**Action to advance:** ${s.actionToAdvance}

---

`;
  });

  markdown += `### 💡 Presenter Defense: Handling Audience Questions

* **Q: "Doesn't adding high-contrast borders and focus rings ruin minimalist UI design?"**  
  *Answer:* "Not at all. By using modern \`:focus-visible\`, mouse users never see the focus ring—it only appears when navigating via keyboard. And high-contrast text actually makes minimalist design look sharper and more premium across all screen types."

* **Q: "Can't we just prompt the AI with 'make it accessible'?"**  
  *Answer:* "Adding 'ensure WCAG 2.1 AA compliance with semantic labels and keyboard navigation' to your prompt helps significantly, but LLMs still hallucinate ARIA attributes and omit focus styles. That's why the 60-second manual keyboard check remains mandatory."

* **Q: "Are automated tools really only 40% effective?"**  
  *Answer:* "Yes, verified by UK Government Digital Service (GDS) and WebAIM studies. Automated linters can check if an \`alt\` attribute exists, but they can't tell you if the alt text actually describes the image accurately or if a focus trap blocks modal exit."
`;

  return markdown;
}

/**
 * Trigger browser file download using standard Blob URL
 */
export function triggerFileDownload(filename: string, content: string, mimeType = 'text/markdown;charset=utf-8;'): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', filename);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

/**
 * Download single slide script
 */
export function downloadSlideScript(slideNumber: string): void {
  const markdown = generateSlideScriptMarkdown(slideNumber);
  const filename = `Slide_${slideNumber}_Script.md`;
  triggerFileDownload(filename, markdown);
}

/**
 * Download master script
 */
export function downloadMasterScript(): void {
  const markdown = generateMasterScriptMarkdown();
  const filename = 'Think_And_Grow_RYTE_Master_Script.md';
  triggerFileDownload(filename, markdown);
}
