import React, { useState } from 'react';
import { usePresentation } from '../../context/GameStateContext';
import { BRANDING } from '../../constants/branding';
import { 
  Trophy, 
  Copy, 
  Check, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export const Slide10TheTakeaway: React.FC = () => {
  const { presenterName, goToSlide } = usePresentation();
  const [copied, setCopied] = useState(false);

  const checklist = [
    {
      id: 1,
      title: '1. Test Keyboard Navigation',
      description: 'Disconnect the mouse. Ensure Tab moves forward, Shift+Tab backward, Enter/Space triggers actions, and focus rings remain distinct.'
    },
    {
      id: 2,
      title: '2. Check Form Labels & Instructions',
      description: 'Verify that every <input> is bound with an explicit <label for="id"> and helper text uses aria-describedby.'
    },
    {
      id: 3,
      title: '3. Verify Text Contrast',
      description: 'Ensure normal body copy meets 4.5:1 minimum contrast, and large titles/UI controls maintain 3.0:1.'
    },
    {
      id: 4,
      title: '4. Test Error Handling',
      description: 'Never convey errors by red border alone. Always pair color with an icon, clear instructional copy, and role="alert".'
    },
    {
      id: 5,
      title: '5. Combine Automated & Manual Testing',
      description: 'Integrate axe-core or Lighthouse in CI, and pair it with a 60-second manual keyboard check before approving pull requests.'
    }
  ];

  const handleCopyChecklist = () => {
    const text = `THINK AND GROW RYTE — 5-POINT ACCESSIBILITY CHECKLIST:\n\n` +
      checklist.map(item => `${item.title}\n${item.description}`).join('\n\n') +
      `\n\nBuild fast. Test thoughtfully. Design for everyone.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col items-center animate-slide-in">
      
      {/* Official Company Logo and Program Branding */}
      <div className="flex items-center gap-3 mb-5 bg-white px-5 py-2.5 rounded-full border border-[#E4E7EC] shadow-2xs">
        <img 
          src={BRANDING.LOGO_SRC} 
          alt={BRANDING.LOGO_ALT}
          className="w-7 h-7 object-contain rounded-md"
        />
        <div className="flex flex-col text-left">
          <span className="font-black text-xs text-[#172033] tracking-tight uppercase">
            {BRANDING.PROGRAM_NAME}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">
            {BRANDING.SUBTITLE}
          </span>
        </div>
      </div>

      {/* Main Closing Headline */}
      <div className="text-center max-w-3xl mb-2">
        <h1 className="text-3xl sm:text-5xl font-black text-[#172033] tracking-tight uppercase">
          {BRANDING.CLOSING_HEADLINE}
        </h1>
      </div>

      {/* Closing Motto */}
      <p className="text-base sm:text-xl font-bold text-[#5B5CE2] text-center mb-8 max-w-2xl leading-snug">
        "{BRANDING.CLOSING_MOTTO}"
      </p>

      {/* Achievement Screen Card & 5-Point Checklist */}
      <div className="w-full bg-white rounded-3xl border border-[#E4E7EC] shadow-float p-6 sm:p-8 mb-6 relative overflow-hidden bg-grid-dots">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B5CE2] via-[#3B82F6] to-[#16A34A]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Achievement Emblem */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50/80 rounded-3xl border border-slate-200 text-center">
            
            <div className="w-20 h-20 rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center shadow-lg mb-4 animate-float-soft">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACCESSIBILITY CHAMPION</span>
            </div>

            <h3 className="text-sm font-bold text-slate-900">
              Quest Complete
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
              Equipped to discover, diagnose, and fix hidden flaws in AI-generated interfaces.
            </p>

            <div className="mt-4 pt-3 border-t border-slate-200/80 w-full text-[11px] text-slate-500">
              Session presented by: <strong className="text-slate-800">{presenterName}</strong>
            </div>

          </div>

          {/* Right: Reusable 5-Point Checklist */}
          <div className="md:col-span-7 space-y-4">
            
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5B5CE2]" />
                <span>The 5-Point Engineering Checklist</span>
              </h2>

              <button
                type="button"
                onClick={handleCopyChecklist}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white flex items-center gap-1.5 transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-indigo-300 active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Checklist'}</span>
              </button>
            </div>

            <div className="space-y-2 text-xs">
              {checklist.map((item, idx) => (
                <div key={item.id} className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-[#5B5CE2] font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-bold text-xs">{item.title}</strong>
                    <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Thank You & Q&A Prompt */}
      <div className="w-full bg-[#172033] text-white rounded-3xl p-6 sm:p-7 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
            Questions & Answers
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">
            Thank you for participating in Think and Grow RYTE!
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
            Let's harness AI to ship features faster than ever — while ensuring every user can seamlessly experience our products.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => goToSlide(0)}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart Presentation</span>
          </button>
        </div>
      </div>

    </div>
  );
};
