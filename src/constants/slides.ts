import type { SlideMeta } from '../types/presentation';

export const SLIDES: SlideMeta[] = [
  {
    id: 'welcome',
    index: 0,
    title: 'Welcome — Accessibility Quest',
    stageName: 'Introduction',
    durationMin: 1,
    description: 'Welcome to Think and Grow RYTE: AI Can Build It. But Can Everyone Use It?',
    talkingPoints: [
      'Welcome everyone to Think and Grow RYTE! Today is an active, hands-on quest.',
      'We all use AI and vibe coding daily to spin up full UIs in seconds.',
      'AI writes syntactically valid code that looks gorgeous, but who gets locked out?',
      'Over the next 15 minutes, you will discover, diagnose, and repair real hidden accessibility bugs.',
      'Aim for 100+ points and earn the title of Accessibility Champion!'
    ]
  },
  {
    id: 'challenge',
    index: 1,
    title: 'The Challenge',
    stageName: 'The AI Paradox',
    durationMin: 1,
    description: 'Functional code does not equal usable or accessible software.',
    talkingPoints: [
      'Generative AI models are trained heavily on existing web codebases — which are historically 96%+ inaccessible (WebAIM Million).',
      'LLMs optimize for visual completion and token economy: omitting labels, aria attributes, and keyboard traps.',
      'The mouse trap: When a developer tests with only their trackpad, they miss 50% of critical user blockers.',
      'Ask the audience: "When was the last time you unplugged your mouse and filled out your own feature?"'
    ]
  },
  {
    id: 'demo-a',
    index: 2,
    title: 'Demo A: THE BUG LAB',
    stageName: 'Mission 1: Discover',
    durationMin: 3,
    description: 'Find 5 hidden accessibility flaws in an AI-generated SaaS contact form.',
    talkingPoints: [
      'Welcome to the Bug Lab! We gave an AI prompt: "Create a modern contact form with clean minimal styling".',
      'The result looks like a sleek modern SaaS form, but contains 5 major accessibility traps.',
      'Invite the audience to spot the anomalies: contrast, label association, focus indicators, error messaging.',
      'Each correct discovery earns 10 points on the first try!'
    ]
  },
  {
    id: 'demo-b',
    index: 3,
    title: 'Demo B: ACCESSIBILITY DETECTIVE',
    stageName: 'Mission 2: Investigate',
    durationMin: 4,
    description: 'Audit workspace: inspect automated Lighthouse reports vs manual keyboard barriers.',
    talkingPoints: [
      'Automated testing myth: "My Lighthouse accessibility score is 95, so we are 100% compliant!"',
      'Automated tools (like axe-core or Lighthouse) can only algorithmically detect ~30-40% of WCAG criteria.',
      'Examine the three core investigation vectors: Keyboard navigation, Programmatic labeling, and Color/Contrast.',
      'Engage audience in the live keyboard navigation audit challenge on the simulated audit workspace.'
    ]
  },
  {
    id: 'demo-c',
    index: 4,
    title: 'Demo C: FIX THE BUGS',
    stageName: 'Mission 3: Repair',
    durationMin: 4,
    description: 'Side-by-side interactive code & UI refactoring to make AI code accessible.',
    talkingPoints: [
      'Now let us fix each flaw in real time using best practices.',
      'Split screen: On the left is the broken AI version; on the right is our progressively enhanced version.',
      'Show the actual HTML/CSS code diffs: explicit for/id, :focus-visible rings, color independence, aria-describedby.',
      'Notice how fixing accessibility does NOT compromise visual elegance — it actually enhances user experience for everyone!'
    ]
  },
  {
    id: 'demo-d',
    index: 5,
    title: 'Demo D: FINAL BOSS',
    stageName: 'Mission 4: Boss Battle',
    durationMin: 2,
    description: 'Rapid-fire 20s challenge testing core accessibility principles under pressure.',
    talkingPoints: [
      'Final Boss challenge: 3 rapid questions with a 20-second countdown!',
      'Encourage the audience to vote or shout out the answers before the timer runs out.',
      'Emphasize key takeaways: keyboard first, clear labels, and never rely on automation alone.'
    ]
  },
  {
    id: 'closing',
    index: 6,
    title: 'Quest Complete: Think and Grow RYTE',
    stageName: 'Wrap-Up',
    durationMin: 1,
    description: 'Celebration, badge unlock, and the 5-Point Accessibility Checklist.',
    talkingPoints: [
      'Congratulations! Celebrate the high scores and title of Accessibility Champion.',
      'Share the 5-Point Takeaway Checklist that every engineer and product designer can use tomorrow morning.',
      'Have everyone copy the checklist to their clipboard.',
      'Open the floor for questions and thank the team for attending Think and Grow RYTE!'
    ]
  }
];
