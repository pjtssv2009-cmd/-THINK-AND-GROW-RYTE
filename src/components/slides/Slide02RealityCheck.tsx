import React, { useState } from 'react';
import { Eye, MousePointer, Volume2, Brain, Sparkles } from 'lucide-react';

export const Slide02RealityCheck: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: 'Visual',
      who: 'Blindness, low vision, color blindness',
      tech: 'Screen readers (NVDA, VoiceOver), screen magnifiers',
      trap: 'AI uses visual <span> tags instead of <label>, and pale low-contrast grays.',
      icon: <Eye className="w-5 h-5 text-[#F28C28]" />
    },
    {
      title: 'Motor & Mobility',
      who: 'Tremors, paralysis, RSI, one-handed use',
      tech: 'Keyboard-only, switch devices, head pointers, eye tracking',
      trap: 'AI inserts "outline: none" or clickable <div> buttons that Tab skips.',
      icon: <MousePointer className="w-5 h-5 text-[#15803D]" />
    },
    {
      title: 'Auditory',
      who: 'Deafness, hard of hearing, loud environments',
      tech: 'Synchronized captions, transcripts, visual status alerts',
      trap: 'Audio-only notifications with zero visual status cues.',
      icon: <Volume2 className="w-5 h-5 text-[#D97706]" />
    },
    {
      title: 'Cognitive',
      who: 'ADHD, dyslexia, distraction, cognitive overload',
      tech: 'Clear layout hierarchy, plain language, predictable navigation',
      trap: 'Cryptic error messages ("Invalid") without instructions on how to fix.',
      icon: <Brain className="w-5 h-5 text-[#B91C1C]" />
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          FOUNDATIONS • BEYOND THE MOUSE
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          WHAT IS WEB ACCESSIBILITY?
        </h1>
        <p className="text-sm font-bold text-[#525252]">
          Ensuring digital products can be perceived, navigated, and operated by everyone.
        </p>
      </div>

      {/* 4 Clean Visual Pillars (2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {pillars.map((p, idx) => (
          <div 
            key={idx}
            className={`p-5 rounded-2xl border-2 border-[#171717] transition-all bg-white shadow-[4px_4px_0px_#171717] ${
              activeTab === idx ? 'ring-2 ring-[#F28C28]' : ''
            }`}
            onClick={() => setActiveTab(idx)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#FFF8EE] rounded-lg border-2 border-[#171717] shadow-[1.5px_1.5px_0px_#171717]">
                  {p.icon}
                </div>
                <h3 className="font-black text-base text-[#171717] uppercase">
                  {p.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#525252] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                A11Y PILLAR
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#525252] uppercase block">Navigation:</span>
                <p className="text-[#171717] font-semibold">{p.tech}</p>
              </div>

              <div className="p-2 rounded bg-[#FFF4E5] border border-[#171717]/30">
                <span className="text-[10px] font-mono font-bold text-[#B91C1C] uppercase block mb-0.5">⚠️ The AI Pitfall:</span>
                <p className="text-[#171717] text-[11px] font-medium leading-snug">{p.trap}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Persona Spectrum: Minimalist Banner */}
      <div className="bg-[#FFF8EE] border-2 border-[#171717] rounded-xl p-4 shadow-[3px_3px_0px_#171717]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F28C28] shrink-0" />
            <strong className="text-xs font-black uppercase text-[#171717]">
              The Persona Spectrum:
            </strong>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
            <span className="bg-white px-2.5 py-1 rounded border border-[#171717] text-center font-bold text-[11px] text-[#171717]">
              1. Permanent <span className="font-normal text-slate-500">(Low Vision)</span>
            </span>
            <span className="bg-white px-2.5 py-1 rounded border border-[#171717] text-center font-bold text-[11px] text-[#171717]">
              2. Temporary <span className="font-normal text-slate-500">(Broken Arm)</span>
            </span>
            <span className="bg-white px-2.5 py-1 rounded border border-[#171717] text-center font-bold text-[11px] text-[#171717]">
              3. Situational <span className="font-normal text-slate-500">(Sunlight Glare)</span>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
