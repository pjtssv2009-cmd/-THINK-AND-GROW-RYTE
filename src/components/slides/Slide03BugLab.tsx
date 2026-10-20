import React, { useState } from 'react';
import { Users, Sparkles, Scale, DollarSign, Check, Code } from 'lucide-react';

export const Slide03BugLab: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(1);

  const pillars = [
    {
      id: 1,
      title: '1. Inclusive User Experiences',
      subtitle: 'Digital Equity as a Core Ethos',
      icon: <Users className="w-5 h-5 text-[#F28C28]" />,
      summary: 'Software is the primary interface to modern society—work, banking, government, and education.',
      bullets: [
        'Over 1 billion people worldwide experience some form of disability.',
        'Digital exclusion denies people independent access to fundamental everyday services.',
        'Accessible engineering is a commitment to dignity, autonomy, and equal opportunity.'
      ],
      aiContext: 'When engineers vibe-code features without accessibility checks, they unintentionally build digital walls.'
    },
    {
      id: 2,
      title: '2. Usability Improvements for All',
      subtitle: 'The "Curb-Cut Effect" in Software',
      icon: <Sparkles className="w-5 h-5 text-[#15803D]" />,
      summary: 'Solving for edge cases invariably improves the baseline user experience for every single customer.',
      bullets: [
        'High-contrast tokens prevent eye fatigue and maintain legibility under harsh sunlight.',
        'Semantic HTML provides better page parsing, instant keyboard shortcuts, and faster search engine indexation.',
        'Clear error recovery and explicit labels reduce user drop-off across all checkout and signup flows.'
      ],
      aiContext: 'Accessible interfaces feel snappier, more predictable, and distinctly more premium.'
    },
    {
      id: 3,
      title: '3. Legal & Standards Compliance',
      subtitle: 'Global Regulations & Standards',
      icon: <Scale className="w-5 h-5 text-[#171717]" />,
      summary: 'Digital accessibility is increasingly codified into international standards and public procurement.',
      bullets: [
        'WCAG (Web Content Accessibility Guidelines) 2.1 and 2.2 at Level AA define the technical consensus.',
        'Americans with Disabilities Act (ADA Title III) applies accessibility mandates to public digital commerce.',
        'European Accessibility Act (EAA / EN 301 549) enforces strict accessibility across EU products and services.'
      ],
      aiContext: 'Enterprise clients mandate WCAG compliance audits before signing vendor contracts.'
    },
    {
      id: 4,
      title: '4. Reduced Engineering Rework',
      subtitle: 'Shift-Left Quality & Architecture',
      icon: <DollarSign className="w-5 h-5 text-[#B91C1C]" />,
      summary: 'Addressing accessibility at code generation time is dramatically cheaper than retroactive fixes.',
      bullets: [
        'Adding a <label for="id"> and :focus-visible ring during initial prompting takes seconds.',
        'Fixing inaccessible component libraries months after release requires massive refactoring.',
        'Semantic HTML drastically simplifies unit testing with testing-library queries (getByRole, getByLabelText).'
      ],
      aiContext: 'AI speed without accessibility rigor generates massive downstream technical debt.'
    }
  ];

  const current = pillars.find(p => p.id === activePillar) || pillars[0];

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          STRATEGY & VALUE • THE CASE FOR ACCESSIBILITY
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          WHY ACCESSIBILITY MATTERS
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-[#525252]">
          Accessibility is not a charitable afterthought or a tedious checklist—it is the foundation of high-quality, resilient, and enterprise-grade software.
        </p>
      </div>

      {/* 4 Pillars Grid Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {pillars.map((p) => {
          const isSelected = activePillar === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePillar(p.id)}
              className={`p-4 rounded-xl border-2 border-[#171717] text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#F28C28] text-[#171717] shadow-[3px_3px_0px_#171717] -translate-x-0.5 -translate-y-0.5 font-bold'
                  : 'bg-white hover:bg-[#FFF4E5] text-[#171717] shadow-[2px_2px_0px_#171717]'
              } focus-visible:outline-3 focus-visible:outline-[#F28C28]`}
              aria-pressed={isSelected}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded bg-white border border-[#171717]">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-white border border-[#171717]">
                    0{p.id}
                  </span>
                </div>
                <h3 className="font-black text-xs uppercase leading-tight mb-1">
                  {p.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#171717]/80 mt-2">
                {isSelected ? 'Inspecting' : 'Click to inspect'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Card */}
      <div className="bg-white border-2 border-[#171717] rounded-2xl shadow-[5px_5px_0px_#171717] p-5 sm:p-7 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#171717] mb-4 gap-2">
          <div>
            <h2 className="text-base sm:text-xl font-black text-[#171717] uppercase">
              {current.title}
            </h2>
            <p className="text-xs font-bold text-[#F28C28]">
              {current.subtitle}
            </p>
          </div>
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-[#FFF8EE] border border-[#171717] rounded shrink-0">
            STRATEGIC IMPACT
          </span>
        </div>

        <p className="text-xs font-semibold text-[#171717] mb-4 leading-relaxed bg-[#FFF8EE] p-3 rounded-lg border border-[#171717]">
          {current.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-black uppercase text-[#525252] block">
              Core Principles & Evidence
            </span>
            {current.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-[#171717]/30">
                <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                <span className="text-[#171717] font-medium leading-relaxed">{b}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#FFF4E5] border-2 border-[#171717] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#171717] mb-2">
                <Code className="w-4 h-4 text-[#F28C28]" />
                <span>The AI Engineering Connection</span>
              </div>
              <p className="text-xs text-[#171717] font-medium leading-relaxed mb-3">
                {current.aiContext}
              </p>
            </div>
            
            <div className="p-2.5 rounded bg-white border border-[#171717] text-[11px] font-mono text-[#525252]">
              💡 <strong>Engineering Takeaway:</strong> Clean semantics make code easier to test, maintain, and scale.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
