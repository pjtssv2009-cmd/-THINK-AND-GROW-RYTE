import React, { useState } from 'react';
import { 
  Sun, 
  CheckCircle2, 
  XCircle
} from 'lucide-react';

export const Slide06ContrastProblem: React.FC = () => {
  const [isGlareSimulated, setIsGlareSimulated] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
          BUG 03 DEEP DIVE • CONTRAST & LUMINANCE
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#172033] tracking-tight mt-2 mb-2 uppercase">
          CAN YOU ACTUALLY READ THIS?
        </h1>
        <p className="text-xs sm:text-sm text-[#667085]">
          AI models favor muted, ethereal gray tones for modern cards. But when lighting is bright or vision is impaired, text vanishes.
        </p>
      </div>

      {/* Interactive Glare / Lighting Simulation Toggle */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => setIsGlareSimulated(prev => !prev)}
          className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 border transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
            isGlareSimulated 
              ? 'bg-amber-400 text-slate-900 border-amber-400 ring-2 ring-amber-200' 
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Sun className={`w-4 h-4 ${isGlareSimulated ? 'animate-spin' : 'text-amber-500'}`} />
          <span>{isGlareSimulated ? 'Glare Simulation Active (Bright Sunlight)' : 'Simulate Direct Sunlight / Screen Glare'}</span>
        </button>
      </div>

      {/* Main Side-by-Side Typographic Contrast Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Left: Low-Contrast Failure (1.8:1) */}
        <div className={`rounded-3xl border-2 border-red-200 shadow-card p-6 sm:p-8 transition-all relative overflow-hidden ${
          isGlareSimulated ? 'bg-amber-50/70 opacity-40 blur-[0.7px]' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-red-100 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 font-mono">
              Faint AI Token (#CBD5E1)
            </span>
            <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
              Ratio: ~1.8:1 (FAIL)
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-1">
                Account Status
              </span>
              <p className="text-sm text-[#CBD5E1] font-medium leading-relaxed select-none">
                "Your subscription is scheduled to renew on the 15th of next month unless auto-pay is disabled."
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="text-xs font-bold text-slate-700 block mb-1">
                Helper Instructions
              </span>
              <p className="text-[#94A3B8] text-xs">
                Enter your 10-digit tax registration number without dashes or spaces.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-red-700 font-medium">
            <span className="flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-red-500" />
              <span>Fails WCAG 1.4.3 AA</span>
            </span>
            <span className="text-[11px] text-slate-400">
              Threshold: 4.5:1 required
            </span>
          </div>
        </div>

        {/* Right: Accessible Contrast (5.4:1) */}
        <div className={`rounded-3xl border-2 border-emerald-400 shadow-card p-6 sm:p-8 transition-all relative overflow-hidden ${
          isGlareSimulated ? 'bg-amber-50/40' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
              Accessible Token (#475569)
            </span>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              Ratio: 5.4:1 (PASS)
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-1">
                Account Status
              </span>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                "Your subscription is scheduled to renew on the 15th of next month unless auto-pay is disabled."
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <span className="text-xs font-bold text-slate-800 block mb-1">
                Helper Instructions
              </span>
              <p className="text-slate-600 text-xs font-medium">
                Enter your 10-digit tax registration number without dashes or spaces.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-bold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>WCAG AA Exceeded</span>
            </span>
            <span className="text-[11px] text-emerald-700 font-mono">
              Legible under all conditions
            </span>
          </div>
        </div>

      </div>

      {/* WCAG Guidelines Explanation Bar */}
      <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-2xs p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
            Normal Body Copy
          </div>
          <div className="text-lg font-black text-slate-900">
            4.5 : 1 Minimum
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Applies to text under 18pt (24px) or bold text under 14pt (18.66px).
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
            Large Text & Headings
          </div>
          <div className="text-lg font-black text-slate-900">
            3.0 : 1 Minimum
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Applies to text 18pt+ (24px) or bold text 14pt+ (18.66px).
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100">
          <div className="text-[10px] font-mono font-bold uppercase text-[#5B5CE2] mb-1">
            UI Components & Icons
          </div>
          <div className="text-lg font-black text-indigo-950">
            3.0 : 1 Graphical
          </div>
          <p className="text-[11px] text-indigo-900 mt-0.5">
            Input boundaries, active checkboxes, and state icons must also meet 3:1.
          </p>
        </div>

      </div>

    </div>
  );
};
