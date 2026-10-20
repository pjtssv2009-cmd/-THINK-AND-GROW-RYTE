import React, { useState } from 'react';
import { usePresentation } from '../../context/GameStateContext';
import { BRANDING } from '../../constants/branding';
import { ArrowRight, Edit3, Check, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Slide01Opening: React.FC = () => {
  const { presenterName, setPresenterName, goToNextSlide } = usePresentation();
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(presenterName);

  const handleSaveName = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (tempName.trim()) {
      setPresenterName(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-8 px-4 flex flex-col items-center animate-slide-in">
      
      {/* Neo-brutalist Mission & Branding Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#FFF4E5] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F28C28] border border-[#171717]" />
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717]">
          {BRANDING.PROGRAM_NAME} • {BRANDING.MISSION_IDENTIFIER}
        </span>
      </div>

      {/* Main Title Card */}
      <div className="w-full bg-white border-2 border-[#171717] rounded-2xl shadow-[6px_6px_0px_#171717] p-6 sm:p-10 mb-8 relative overflow-hidden bg-grid-neo">
        
        {/* Top Decorative Header Strip */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-[#171717] mb-6">
          <div className="flex items-center gap-2.5">
            <img 
              src={BRANDING.LOGO_SRC} 
              alt={BRANDING.LOGO_ALT}
              className="w-8 h-8 object-contain p-0.5 border-2 border-[#171717] rounded bg-white shadow-[2px_2px_0px_#171717]"
            />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#171717]">
              {BRANDING.COMPANY_NAME} KNOWLEDGE SERIES
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold bg-[#F28C28] text-[#171717] px-2 py-0.5 rounded border border-[#171717]">
              15-MINUTE SESSION
            </span>
            <span className="text-[11px] font-mono font-bold bg-[#171717] text-white px-2 py-0.5 rounded">
              WCAG 2.1 AA
            </span>
          </div>
        </div>

        {/* Main Headlines */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight leading-[1.08] uppercase">
            AI CAN BUILD IT.<br />
            <span className="text-[#F28C28] underline decoration-[#171717] decoration-4 underline-offset-4">
              BUT CAN EVERYONE USE IT?
            </span>
          </h1>

          <p className="text-base sm:text-xl font-bold text-[#525252] max-w-2xl leading-relaxed">
            {BRANDING.PRESENTATION_SUBTITLE}
          </p>
        </div>

        {/* Educational Context Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t-2 border-[#171717]">
          <div className="p-4 rounded-xl border-2 border-[#171717] bg-[#FFF8EE] shadow-[3px_3px_0px_#171717]">
            <div className="flex items-center gap-2 text-xs font-black text-[#171717] uppercase mb-1">
              <Sparkles className="w-4 h-4 text-[#F28C28]" />
              <span>Speed of Generation</span>
            </div>
            <p className="text-xs text-[#525252] leading-relaxed">
              LLMs and vibe coding generate responsive CSS and complex component layouts in seconds.
            </p>
          </div>

          <div className="p-4 rounded-xl border-2 border-[#171717] bg-[#FFF4E5] shadow-[3px_3px_0px_#171717]">
            <div className="flex items-center gap-2 text-xs font-black text-[#171717] uppercase mb-1">
              <AlertTriangle className="w-4 h-4 text-[#B91C1C]" />
              <span>Hidden Exclusion</span>
            </div>
            <p className="text-xs text-[#525252] leading-relaxed">
              Default AI prompts routinely omit programmatic labels, contrast math, and keyboard focus outlines.
            </p>
          </div>

          <div className="p-4 rounded-xl border-2 border-[#171717] bg-[#F0FDF4] shadow-[3px_3px_0px_#171717]">
            <div className="flex items-center gap-2 text-xs font-black text-[#171717] uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-[#15803D]" />
              <span>The Engineering Goal</span>
            </div>
            <p className="text-xs text-[#525252] leading-relaxed">
              Learn practical auditing, code fixes, and verification to ship accessible software at AI speed.
            </p>
          </div>
        </div>

      </div>

      {/* Presenter Attribution & Primary Start Action */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border-2 border-[#171717] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_#171717]">
        
        {/* Presenter Name Editor */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-xs font-mono font-bold uppercase text-[#525252]">Presented By:</span>
          {isEditingName ? (
            <form onSubmit={handleSaveName} className="flex items-center gap-1.5">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                autoFocus
                className="px-2.5 py-1 text-xs font-bold border-2 border-[#171717] rounded bg-[#FFF4E5] focus-visible:outline-2 focus-visible:outline-[#F28C28]"
                placeholder="Presenter name"
              />
              <button
                type="submit"
                className="p-1.5 rounded bg-[#F28C28] text-[#171717] border-2 border-[#171717] shadow-[1px_1px_0px_#171717] hover:bg-[#DF7A1B]"
                aria-label="Save presenter name"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-[#171717] bg-[#FFF8EE] px-2.5 py-1 rounded border border-[#171717]">
                {presenterName}
              </span>
              <button
                type="button"
                onClick={() => {
                  setTempName(presenterName);
                  setIsEditingName(true);
                }}
                className="p-1 text-slate-500 hover:text-[#171717] hover:bg-slate-100 rounded"
                title="Edit presenter name"
                aria-label="Edit presenter name"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Primary Start Presentation Action */}
        <button
          type="button"
          onClick={goToNextSlide}
          className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-black bg-[#F28C28] hover:bg-[#DF7A1B] text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#171717] transition-all flex items-center justify-center gap-2 focus-visible:outline-3 focus-visible:outline-[#F28C28]"
        >
          <span>START PRESENTATION</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};
