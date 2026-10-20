import React, { useState } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { BRANDING } from '../../constants/branding';
import { ACCESSIBILITY_CHECKLIST } from '../../constants/gameData';
import { 
  Trophy, 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw, 
  ShieldCheck
} from 'lucide-react';

export const SlideClosing: React.FC = () => {
  const { score, milestoneTitle, resetQuest, presenterName } = useGameState();
  const [copied, setCopied] = useState(false);

  const handleCopyChecklist = () => {
    const text = `THINK AND GROW RYTE — ACCESSIBILITY CHECKLIST:\n\n` +
      ACCESSIBILITY_CHECKLIST.map(item => `${item.title}\n${item.description}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6 md:py-10 px-4 flex flex-col items-center">
      
      {/* Official Company Logo and Program Branding */}
      <div className="flex items-center gap-3 mb-6 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-xs">
        <img 
          src={BRANDING.LOGO_SRC} 
          alt={BRANDING.LOGO_ALT}
          className="w-8 h-8 object-contain rounded-md"
        />
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-sm text-[#172033] tracking-tight">
            {BRANDING.PROGRAM_NAME}
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            {BRANDING.SUBTITLE}
          </span>
        </div>
      </div>

      {/* Main Closing Headline */}
      <h1 className="text-3xl sm:text-5xl font-black text-[#172033] tracking-tight text-center mb-3">
        {BRANDING.CLOSING_HEADLINE}
      </h1>

      {/* Motto */}
      <p className="text-base sm:text-2xl font-bold text-[#5B5CE2] text-center mb-8 max-w-2xl leading-snug">
        "{BRANDING.CLOSING_MOTTO}"
      </p>

      {/* Score Summary & Final Badge Showcase */}
      <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B5CE2] via-[#0EA5E9] to-[#16A34A]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Score Card */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <div className="w-20 h-20 rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center shadow-lg mb-4 animate-pop">
              <Trophy className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Final Quest Score
            </span>
            <div className="text-4xl sm:text-5xl font-black text-[#172033] my-1">
              {score} <span className="text-sm font-bold text-slate-400">PTS</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 text-[#5B5CE2] border border-indigo-200 mt-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{milestoneTitle}</span>
            </div>

            <p className="text-[11px] text-slate-500 mt-3">
              Session completed by: <strong className="text-slate-800">{presenterName}</strong>
            </p>
          </div>

          {/* Right: Key Summary & Checklist */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#5B5CE2]" />
                <span>5 Takeaways for Tomorrow's Code</span>
              </h2>
              <button
                type="button"
                onClick={handleCopyChecklist}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white flex items-center gap-1.5 transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Checklist Copied!' : 'Copy Checklist'}</span>
              </button>
            </div>

            <div className="space-y-2 text-xs">
              {ACCESSIBILITY_CHECKLIST.map((item, i) => (
                <div key={item.id} className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-[#5B5CE2] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold">{item.title}</strong>
                    <span className="text-slate-500 leading-relaxed text-[11px]">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Thank You & Q&A Prompt */}
      <div className="w-full bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
            Questions & Answers
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">
            Thank you for attending Think and Grow RYTE!
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Let's build technology that empowers everyone — whether navigating with a mouse, keyboard, screen reader, or switch device.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={resetQuest}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Replay Quest</span>
          </button>
        </div>
      </div>

    </div>
  );
};
