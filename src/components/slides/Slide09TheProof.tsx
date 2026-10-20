import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle,
  Activity
} from 'lucide-react';

export const Slide09TheProof: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  const stages = [
    {
      id: 1,
      number: '01',
      title: 'Generate with AI',
      subtitle: 'Fast Initial Scaffolding',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      detail: 'Use AI models to generate complex boilerplate, responsive CSS layouts, and business logic in seconds.',
      metrics: 'Time saved: ~70%',
      risk: 'Generates visual-only tags and removes keyboard outlines.'
    },
    {
      id: 2,
      number: '02',
      title: 'Automated + Manual Test',
      subtitle: 'The 60-Second Quality Gate',
      icon: <Search className="w-5 h-5 text-[#3B82F6]" />,
      detail: 'Run axe-core or Lighthouse in CI, then disconnect your mouse for 60 seconds to execute a manual Tab/Shift+Tab keyboard audit.',
      metrics: 'Covers ~95% of real-world barriers',
      risk: 'Skipping manual keyboard test allows focus traps to escape.'
    },
    {
      id: 3,
      number: '03',
      title: 'Fix & Verify in AOM',
      subtitle: 'Ship with Confidence',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      detail: 'Bind htmlFor/id pairs, add high-contrast :focus-visible rings, and confirm node announcements in browser accessibility tree.',
      metrics: '100% accessible to assistive devices',
      risk: 'Zero regressions deployed to production.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
          ENGINEERING PROCESS • THE 3-STAGE LOOP
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#172033] tracking-tight mt-2 mb-2 uppercase">
          BUILD. TEST. VERIFY.
        </h1>
        <p className="text-xs sm:text-sm text-[#667085]">
          A resilient engineering lifecycle bridges the speed of AI generation with the discipline of human accessibility verification.
        </p>
      </div>

      {/* 3-Stage Process Path */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stages.map((stage) => {
          const isSelected = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStage(stage.id)}
              className={`text-left p-5 rounded-3xl border-2 transition-all relative overflow-hidden focus-visible:ring-4 focus-visible:ring-indigo-300 ${
                isSelected 
                  ? 'bg-white border-[#5B5CE2] shadow-float scale-[1.02]' 
                  : 'bg-white border-[#E4E7EC] hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-black text-slate-400">
                  STAGE {stage.number}
                </span>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                  {stage.icon}
                </div>
              </div>

              <h2 className="text-base font-bold text-slate-900 mb-0.5">
                {stage.title}
              </h2>
              <div className="text-xs text-[#5B5CE2] font-semibold mb-2">
                {stage.subtitle}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {stage.detail}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="font-bold text-slate-700">{stage.metrics}</span>
                <span className="text-indigo-600 font-semibold">{isSelected ? 'Inspecting' : 'Click to inspect'}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Illustrated Audit Evidence Comparison */}
      <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-card p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#5B5CE2]" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Audit Result Verification (Before vs After)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Simulated demonstration comparing raw AI code against the refactored interface.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 font-bold">
              Before: 74/100
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
              After: 100/100
            </span>
          </div>
        </div>

        {/* Verification Checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
              Check 1: Semantics
            </span>
            <div className="font-bold text-slate-900">
              100% Labels Bound
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Zero unassociated input fields in the accessibility tree.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
              Check 2: Keyboard Nav
            </span>
            <div className="font-bold text-slate-900">
              100% Controls Reachable
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Tab sequence travels cleanly with visible 2px outlines.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
              Check 3: Contrast
            </span>
            <div className="font-bold text-slate-900">
              5.4:1 Body Luminance
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Exceeds WCAG AA 4.5:1 minimums across all color tokens.
            </p>
          </div>
        </div>

        {/* Highlight Core Principle Banner */}
        <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#5B5CE2] shrink-0 mt-0.5" />
          <div className="text-xs text-indigo-950 leading-relaxed">
            <strong className="text-[#172033] block font-bold text-sm mb-0.5">
              Core Engineering Principle:
            </strong>
            "Passing an automated audit does not guarantee complete accessibility." Automation is necessary, but intentional human verification ensures genuine inclusivity.
          </div>
        </div>

      </div>

    </div>
  );
};
