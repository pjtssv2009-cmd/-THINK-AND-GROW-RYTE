import React, { useState, useEffect } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { BOSS_QUIZ_QUESTIONS, ACCESSIBILITY_CHECKLIST } from '../../constants/gameData';
import { 
  Trophy, 
  Timer, 
  Zap, 
  ArrowRight, 
  Copy, 
  Check, 
  ShieldCheck
} from 'lucide-react';

export const SlideFinalBoss: React.FC = () => {
  const { awardPoints, completeMission, goToNextSlide } = useGameState();

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isBossBeaten, setIsBossBeaten] = useState<boolean>(false);
  const [copiedChecklist, setCopiedChecklist] = useState<boolean>(false);

  const currentQ = BOSS_QUIZ_QUESTIONS[questionIndex];
  const isLastQuestion = questionIndex === BOSS_QUIZ_QUESTIONS.length - 1;

  // Countdown timer logic (20 seconds per question)
  useEffect(() => {
    if (isAnswerSubmitted || isBossBeaten || isTimerPaused) return;

    if (timeLeft <= 0) {
      // Time expired - allow accessible continuation
      setIsAnswerSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswerSubmitted, isBossBeaten, isTimerPaused]);

  const handleSelectAnswer = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
    setIsAnswerSubmitted(true);

    const isCorrect = currentQ.options.find(o => o.id === optionId)?.isCorrect;
    if (isCorrect) {
      awardPoints(10, `Boss Quiz Q${questionIndex + 1} Correct!`, `boss-q-${currentQ.id}`);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setIsBossBeaten(true);
      completeMission('demo-d', 20); // Bonus +20 for conquering boss!
    } else {
      setQuestionIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
      setTimeLeft(20);
    }
  };

  const handleCopyChecklist = () => {
    const text = ACCESSIBILITY_CHECKLIST.map(item => `${item.title}\n${item.description}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedChecklist(true);
    setTimeout(() => setCopiedChecklist(false), 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-4 md:py-6 px-4 flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
              Mission 4 • 2 Minutes
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Demo D
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight mt-1 flex items-center gap-2">
            <span>FINAL BOSS: Prove Your Skills</span>
            <Zap className="w-6 h-6 text-amber-500 fill-amber-400" />
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Three rapid-fire questions testing real-world engineering intuition under a 20-second countdown.
          </p>
        </div>

        {/* Question Counter & Timer */}
        {!isBossBeaten && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsTimerPaused(prev => !prev)}
              className="text-xs text-slate-500 hover:text-slate-800 underline focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
              aria-label={isTimerPaused ? 'Resume countdown timer' : 'Pause countdown timer'}
            >
              {isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
            </button>

            <div className={`px-4 py-2 rounded-2xl border flex items-center gap-2.5 shadow-xs transition-colors ${
              timeLeft <= 5 
                ? 'bg-red-50 border-red-300 text-red-600 animate-pulse' 
                : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <Timer className="w-4 h-4" />
              <span className="font-mono font-bold text-sm">
                00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Main Boss Battle Arena */}
      {!isBossBeaten ? (
        <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-xl p-6 sm:p-8">
          
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-2">
            <span>QUESTION {questionIndex + 1} OF {BOSS_QUIZ_QUESTIONS.length}</span>
            <span className="text-amber-600">{currentQ.category}</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full bg-amber-500 transition-all duration-300"
              style={{ width: `${((questionIndex + 1) / BOSS_QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Headline */}
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
            {currentQ.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectAnswer(opt.id)}
                  className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
                    isAnswerSubmitted && opt.isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs'
                      : isAnswerSubmitted && isSelected && !opt.isCorrect
                      ? 'bg-red-50 border-red-500 text-red-950 font-bold shadow-xs'
                      : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isAnswerSubmitted && opt.isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isAnswerSubmitted && isSelected && !opt.isCorrect
                        ? 'bg-red-600 text-white'
                        : 'bg-white border border-slate-300 text-slate-700'
                    }`}>
                      {opt.id.slice(-1).toUpperCase()}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation if submitted or timeout */}
          {isAnswerSubmitted && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 mb-6 animate-pop">
              <strong className="text-slate-900 block font-semibold mb-1">
                Engineering Insight:
              </strong>
              {currentQ.explanation}
            </div>
          )}

          {/* Next / Continue button */}
          <div className="flex items-center justify-end">
            {isAnswerSubmitted ? (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-6 py-3 rounded-2xl bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center gap-2 focus-visible:ring-4 focus-visible:ring-indigo-300"
              >
                <span>{isLastQuestion ? 'Complete Boss Battle!' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs text-slate-400 font-medium">
                Select an answer before time expires!
              </span>
            )}
          </div>

        </div>
      ) : (
        /* Boss Victory Celebration & Checklist Card */
        <div className="bg-white rounded-3xl border-2 border-emerald-400 shadow-xl p-6 sm:p-8 animate-pop">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100 mb-6">
            <div className="w-20 h-20 rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center font-extrabold shadow-lg shrink-0 animate-bounce">
              <Trophy className="w-10 h-10" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1 border border-emerald-200">
                Quest Victory Unlocked
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
                Title Awarded: Accessibility Champion!
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                You mastered keyboard navigation, programmatic labeling, contrast math, and manual audit strategies!
              </p>
            </div>
          </div>

          {/* 5-Point Practical Accessibility Checklist */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5B5CE2]" />
                <span>The 5-Point Daily Engineering Checklist</span>
              </h3>
              <button
                type="button"
                onClick={handleCopyChecklist}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-[#5B5CE2] border border-indigo-200 flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
              >
                {copiedChecklist ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedChecklist ? 'Copied to Clipboard!' : 'Copy Checklist'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ACCESSIBILITY_CHECKLIST.map((chk) => (
                <div key={chk.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <strong className="text-slate-900 block font-bold mb-1">
                    {chk.title}
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    {chk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation to Wrap-Up Slide */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={goToNextSlide}
              className="px-6 py-3.5 rounded-2xl bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center gap-2 focus-visible:ring-4 focus-visible:ring-indigo-300"
            >
              <span>Proceed to Closing Wrap-Up</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
