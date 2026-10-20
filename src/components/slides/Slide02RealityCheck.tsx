import React, { useState } from 'react';
import { Eye, MousePointer, Volume2, Brain, Sun } from 'lucide-react';

export const Slide02RealityCheck: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'visual' | 'motor' | 'auditory' | 'cognitive'>('visual');

  const categories = [
    {
      id: 'visual' as const,
      title: 'Visual',
      icon: <Eye className="w-5 h-5 text-[#F28C28]" />,
      assistiveTech: 'Screen readers (NVDA, VoiceOver, JAWS), Screen magnifiers, High-contrast OS themes.',
      barriers: 'Missing programmatic labels, images without alt text, low-contrast text, color-only state indicators.',
      aiRisk: 'AI scaffolding defaults to visual-only <span> tags and low-contrast pale gray text.'
    },
    {
      id: 'motor' as const,
      title: 'Motor & Mobility',
      icon: <MousePointer className="w-5 h-5 text-[#15803D]" />,
      assistiveTech: 'Keyboard-only, Sip-and-puff switches, Head pointers, Eye-tracking cameras, Voice dictation.',
      barriers: 'Interactive elements without keyboard focus rings, clickable <div> elements, trap loops.',
      aiRisk: 'AI frequently inserts "outline: none" or fails to bind Enter/Space keyboard handlers on custom buttons.'
    },
    {
      id: 'auditory' as const,
      title: 'Auditory',
      icon: <Volume2 className="w-5 h-5 text-[#D97706]" />,
      assistiveTech: 'Synchronized captions, Transcripts, Visual flash alerts, Haptic notifications.',
      barriers: 'Audio-only notifications, video without captions, audio CAPTCHAs without visual fallbacks.',
      aiRisk: 'Audio cues generated without visual status messages (role="status" or visual badges).'
    },
    {
      id: 'cognitive' as const,
      title: 'Cognitive',
      icon: <Brain className="w-5 h-5 text-[#B91C1C]" />,
      assistiveTech: 'Reading modes, Spell checkers, Text-to-speech, Focus highlighting, Consistent nav cues.',
      barriers: 'Flashing animations, disorienting transitions, strict unforgiving timers, cryptic validation errors.',
      aiRisk: 'Ambiguous error states ("Invalid input") without specific instructions on how to correct the error.'
    }
  ];

  const activeCategory = categories.find(c => c.id === selectedCategory) || categories[0];

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          FOUNDATIONS • BEYOND THE MOUSE
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          WHAT IS WEB ACCESSIBILITY?
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-[#525252]">
          Web accessibility (a11y) ensures that everyone—regardless of hardware, sensory ability, motor control, or context—can perceive, understand, navigate, and interact with the web.
        </p>
      </div>

      {/* 4 Interaction Models Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-3.5 rounded-xl border-2 border-[#171717] text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#F28C28] text-[#171717] shadow-[3px_3px_0px_#171717] -translate-x-0.5 -translate-y-0.5'
                  : 'bg-white hover:bg-[#FFF4E5] text-[#171717] shadow-[2px_2px_0px_#171717]'
              } focus-visible:outline-3 focus-visible:outline-[#F28C28]`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="font-black text-sm uppercase">{cat.title}</span>
                <div className="p-1.5 rounded bg-white border border-[#171717]">
                  {cat.icon}
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#171717]/80">
                {isSelected ? 'Active View' : 'Click to inspect'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Inspection Panel for Selected Category */}
      <div className="bg-white border-2 border-[#171717] rounded-2xl shadow-[5px_5px_0px_#171717] p-5 sm:p-7 mb-6">
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#171717] mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#FFF4E5] border-2 border-[#171717] shadow-[1.5px_1.5px_0px_#171717]">
              {activeCategory.icon}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[#171717] uppercase">
                {activeCategory.title} Disabilities & Interaction
              </h2>
              <p className="text-xs text-[#525252]">How assistive tools interface with your frontend code</p>
            </div>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono font-bold px-2.5 py-1 bg-[#171717] text-white rounded">
            WCAG 2.1 PRINCIPLE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#FFF8EE] border-2 border-[#171717]">
            <span className="text-[10px] font-mono font-black uppercase text-[#F28C28] block mb-1">
              Assistive Technologies
            </span>
            <p className="text-[#171717] font-medium leading-relaxed">
              {activeCategory.assistiveTech}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FEF2F2] border-2 border-[#171717]">
            <span className="text-[10px] font-mono font-black uppercase text-[#B91C1C] block mb-1">
              Common Web Barriers
            </span>
            <p className="text-[#171717] font-medium leading-relaxed">
              {activeCategory.barriers}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FFF4E5] border-2 border-[#171717]">
            <span className="text-[10px] font-mono font-black uppercase text-[#171717] block mb-1">
              AI Code Vulnerability
            </span>
            <p className="text-[#171717] font-medium leading-relaxed">
              {activeCategory.aiRisk}
            </p>
          </div>
        </div>
      </div>

      {/* The Disability Spectrum Banner */}
      <div className="bg-[#FFF8EE] border-2 border-[#171717] rounded-xl p-4 sm:p-5 shadow-[3px_3px_0px_#171717]">
        <div className="flex items-center gap-2 mb-2">
          <Sun className="w-4 h-4 text-[#F28C28]" />
          <h3 className="text-xs font-black uppercase tracking-wider text-[#171717]">
            The Persona Spectrum: Accessibility Benefits Everyone
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-white rounded-lg border border-[#171717]">
            <strong className="block text-[#171717] font-black text-xs mb-0.5">1. Permanent</strong>
            <p className="text-[#525252] text-[11px] leading-relaxed">
              Deafness, low vision, paralysis, or neurological conditions. Assistive technologies are essential daily tools.
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#171717]">
            <strong className="block text-[#171717] font-black text-xs mb-0.5">2. Temporary</strong>
            <p className="text-[#525252] text-[11px] leading-relaxed">
              A broken dominant arm, eye dilation surgery, or ear infection. Relies on keyboard navigation and high contrast.
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#171717]">
            <strong className="block text-[#171717] font-black text-xs mb-0.5">3. Situational</strong>
            <p className="text-[#525252] text-[11px] leading-relaxed">
              Holding a child with one hand, severe sunlight glare on a laptop screen, or working in a loud café without earbuds.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
