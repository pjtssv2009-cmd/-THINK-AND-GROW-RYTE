import React, { useState } from 'react';
import { Sun, CheckCircle2, XCircle, Sliders } from 'lucide-react';

export const Slide05KeyboardTrap: React.FC = () => {
  const [glareMode, setGlareMode] = useState<boolean>(false);

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          WCAG 1.4.3 • LUMINANCE MATHEMATICS
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          COLOR CONTRAST: THE FIRST LINE OF DEFENSE
        </h1>
        <p className="text-sm font-bold text-[#525252]">
          Pale gray text may look minimalist in a dark room, but it fails millions in daily use.
        </p>
      </div>

      {/* WCAG Mathematical Standards (3 High-Impact Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="bg-white border-2 border-[#171717] rounded-xl p-4 shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-black uppercase text-[#171717]">Body Copy</span>
            <span className="text-[10px] font-mono font-bold bg-[#F28C28] text-[#171717] px-2 py-0.5 rounded border border-[#171717]">
              Level AA
            </span>
          </div>
          <div className="text-3xl font-black text-[#171717] font-mono my-1">
            4.5 : 1
          </div>
          <p className="text-[11px] text-[#525252] font-medium leading-snug">
            Minimum ratio for text under 18pt (24px).
          </p>
        </div>

        <div className="bg-white border-2 border-[#171717] rounded-xl p-4 shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-black uppercase text-[#171717]">Large Headlines</span>
            <span className="text-[10px] font-mono font-bold bg-[#F28C28] text-[#171717] px-2 py-0.5 rounded border border-[#171717]">
              Level AA
            </span>
          </div>
          <div className="text-3xl font-black text-[#171717] font-mono my-1">
            3.0 : 1
          </div>
          <p className="text-[11px] text-[#525252] font-medium leading-snug">
            Required for titles ≥ 18pt or bold text ≥ 14pt.
          </p>
        </div>

        <div className="bg-white border-2 border-[#171717] rounded-xl p-4 shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-black uppercase text-[#171717]">UI Components</span>
            <span className="text-[10px] font-mono font-bold bg-[#171717] text-white px-2 py-0.5 rounded">
              WCAG 1.4.11
            </span>
          </div>
          <div className="text-3xl font-black text-[#171717] font-mono my-1">
            3.0 : 1
          </div>
          <p className="text-[11px] text-[#525252] font-medium leading-snug">
            Input field borders and active focus rings.
          </p>
        </div>
      </div>

      {/* Interactive Glare Simulator Toggle */}
      <div className="flex items-center justify-between bg-white border-2 border-[#171717] rounded-xl p-3 mb-5 shadow-[3px_3px_0px_#171717]">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-[#F28C28]" />
          <span className="text-xs font-black uppercase text-[#171717]">
            Real-World Test: Sunlight Glare Simulation
          </span>
        </div>

        <button
          type="button"
          onClick={() => setGlareMode(!glareMode)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 border-[#171717] transition-all flex items-center gap-1.5 focus-visible:outline-3 focus-visible:outline-[#F28C28] ${
            glareMode
              ? 'bg-[#F28C28] text-[#171717] shadow-[2px_2px_0px_#171717]'
              : 'bg-[#FFF8EE] text-[#171717] hover:bg-[#FFF4E5] shadow-[2px_2px_0px_#171717]'
          }`}
          aria-pressed={glareMode}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>{glareMode ? 'Sunlight Glare: ON' : 'Toggle Sunlight Glare'}</span>
        </button>
      </div>

      {/* Side-by-Side Large Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Bad Example */}
        <div className={`p-5 rounded-2xl border-2 border-[#B91C1C] relative overflow-hidden transition-all shadow-[4px_4px_0px_#B91C1C] ${
          glareMode ? 'bg-white brightness-125 opacity-60 contrast-50' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b-2 border-red-200 mb-3">
            <span className="text-xs font-black uppercase text-[#B91C1C] flex items-center gap-1.5">
              <XCircle className="w-4 h-4" />
              <span>AI Default (Low Contrast)</span>
            </span>
            <span className="text-xs font-mono font-black text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
              1.8 : 1 (FAILS AA)
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-[#A0AEC0]">
              Account Authentication Credentials
            </h3>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              Please enter your corporate single sign-on address and security token to synchronize your session logs.
            </p>
          </div>

          <div className="mt-4 pt-2.5 border-t border-red-100 text-[11px] font-bold text-red-700 bg-red-50 p-2 rounded">
            ❌ Fails WCAG AA. Disappears under ambient sunlight.
          </div>
        </div>

        {/* Corrected Example */}
        <div className={`p-5 rounded-2xl border-2 border-[#15803D] relative overflow-hidden transition-all shadow-[4px_4px_0px_#15803D] ${
          glareMode ? 'bg-white brightness-110 opacity-95' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b-2 border-emerald-200 mb-3">
            <span className="text-xs font-black uppercase text-[#15803D] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Standard (Accessible)</span>
            </span>
            <span className="text-xs font-mono font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              16.1 : 1 (PASSES AAA)
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-black text-[#171717]">
              Account Authentication Credentials
            </h3>
            <p className="text-xs text-[#171717] font-medium leading-relaxed">
              Please enter your corporate single sign-on address and security token to synchronize your session logs.
            </p>
          </div>

          <div className="mt-4 pt-2.5 border-t border-emerald-100 text-[11px] font-bold text-emerald-800 bg-emerald-50 p-2 rounded">
            ✓ Exceeds WCAG AAA. Remains crystal-clear across all screen types.
          </div>
        </div>

      </div>

    </div>
  );
};
