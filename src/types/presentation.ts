export type SlideId = 
  | 'welcome' 
  | 'challenge' 
  | 'demo-a' 
  | 'demo-b' 
  | 'demo-c' 
  | 'demo-d' 
  | 'closing';

export interface SlideMeta {
  id: SlideId;
  index: number;
  title: string;
  stageName: string;
  durationMin: number;
  description: string;
  talkingPoints: string[];
}

export type MilestoneBadge = 
  | 'Bug Spotter'
  | 'Accessibility Detective'
  | 'UX Fixer'
  | 'Accessibility Champion';

export interface GameState {
  score: number;
  completedMissions: Record<string, boolean>;
  solvedItems: Record<string, boolean>; // tracks individual bug IDs, quiz questions, etc.
  unlockedBadge: MilestoneBadge;
  soundEnabled: boolean;
  presenterName: string;
}

export interface BugItem {
  id: string;
  name: string;
  selectorLabel: string;
  symptom: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  wcagCriterion: string;
}

export interface InvestigationItem {
  id: string;
  category: string;
  title: string;
  symptom: string;
  testInstruction: string;
  underlyingIssue: string;
  userImpact: string;
  remedy: string;
}

export interface FixItem {
  id: string;
  title: string;
  issueLabel: string;
  wcagCode: string;
  badCode: string;
  goodCode: string;
  rationale: string;
  applied: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  category: string;
}
