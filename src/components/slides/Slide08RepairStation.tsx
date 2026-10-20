import React, { useState } from 'react';
import { Search, ShieldAlert, Terminal, Cpu, UserCheck } from 'lucide-react';

export const Slide08RepairStation: React.FC = () => {
  const [filterSeverity, setFilterSeverity] = useState<'all' | 'critical' | 'serious'>('all');

  const auditFindings = [
    {
      id: 1,
      rule: 'color-contrast',
      severity: 'critical',
      element: '<span class="helper-text">',
      impact: 'Contrast ratio of 2.1:1 fails WCAG AA minimum threshold of 4.5:1.',
      tool: 'axe-core / Lighthouse'
    },
    {
      id: 2,
      rule: 'label-title-only',
      severity: 'critical',
      element: '<input type="text" id="full-name">',
      impact: 'Input element lacks an associated programmatic label (<label for="...">).',
      tool: 'axe-core'
    },
    {
      id: 3,
      rule: 'focus-order-semantics',
      severity: 'serious',
      element: '<div onclick="submit()">',
      impact: 'Interactive element not focusable via keyboard; omitted from sequential Tab order.',
      tool: 'Manual Keyboard Audit'
    },
    {
      id: 4,
      rule: 'aria-valid-attr-value',
      severity: 'serious',
      element: '<div role="err">',
      impact: 'Invalid role value "err"; screen readers will not announce dynamic error messages.',
      tool: 'axe-core'
    }
  ];

  const filtered = auditFindings.filter(f => filterSeverity === 'all' || f.severity === filterSeverity);

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          VERIFICATION TOOLCHAIN • AUTOMATED VS. MANUAL
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          ACCESSIBILITY TESTING: THE TWO HALVES
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-[#525252]">
          Passing an automated audit is a necessary prerequisite, but automated linters alone cannot guarantee a fully accessible user experience.
        </p>
      </div>

      {/* The 4 Tool Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        
        <div className="p-3.5 bg-white border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-black uppercase text-[#171717]">Chrome Lighthouse</span>
            <Cpu className="w-4 h-4 text-[#F28C28]" />
          </div>
          <span className="text-[10px] font-mono font-bold bg-[#FFF4E5] text-[#171717] px-2 py-0.5 rounded border border-[#171717] block w-max mb-1.5">
            Automated CI Baseline
          </span>
          <p className="text-[11px] text-[#525252] leading-relaxed">
            Fast, reproducible audits built into Chromium dev tools and CI/CD deployment pipelines.
          </p>
        </div>

        <div className="p-3.5 bg-white border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-black uppercase text-[#171717]">axe DevTools</span>
            <Terminal className="w-4 h-4 text-[#15803D]" />
          </div>
          <span className="text-[10px] font-mono font-bold bg-[#F0FDF4] text-[#15803D] px-2 py-0.5 rounded border border-[#15803D] block w-max mb-1.5">
            Zero False-Positive Engine
          </span>
          <p className="text-[11px] text-[#525252] leading-relaxed">
            Industry-standard AST evaluation rules by Deque Systems for component-level linting.
          </p>
        </div>

        <div className="p-3.5 bg-white border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-black uppercase text-[#171717]">Manual Keyboard Test</span>
            <UserCheck className="w-4 h-4 text-[#D97706]" />
          </div>
          <span className="text-[10px] font-mono font-bold bg-[#FFFBEB] text-[#D97706] px-2 py-0.5 rounded border border-[#D97706] block w-max mb-1.5">
            60-Second Human Check
          </span>
          <p className="text-[11px] text-[#525252] leading-relaxed">
            Disconnect the mouse. Verify Tab order, visible focus outlines, and Esc modal dismissal.
          </p>
        </div>

        <div className="p-3.5 bg-white border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-black uppercase text-[#171717]">Screen Readers</span>
            <Search className="w-4 h-4 text-[#B91C1C]" />
          </div>
          <span className="text-[10px] font-mono font-bold bg-[#FEF2F2] text-[#B91C1C] px-2 py-0.5 rounded border border-[#B91C1C] block w-max mb-1.5">
            Real Voice Verification
          </span>
          <p className="text-[11px] text-[#525252] leading-relaxed">
            Test key customer flows using VoiceOver (macOS / iOS) and NVDA (Windows).
          </p>
        </div>

      </div>

      {/* Realistic Browser Audit Inspection Workspace */}
      <div className="bg-white border-2 border-[#171717] rounded-2xl p-5 shadow-[5px_5px_0px_#171717] mb-5">
        
        {/* Workspace Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#171717] mb-4 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-[#171717]" />
            <span className="w-3 h-3 rounded-full bg-amber-400 border border-[#171717]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 border border-[#171717]" />
            <span className="font-mono text-xs font-black uppercase ml-2 text-[#171717]">
              axe-core Diagnostic Panel (Illustrative Demonstration)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterSeverity('all')}
              className={`px-2.5 py-1 rounded text-[11px] font-bold border-2 border-[#171717] ${
                filterSeverity === 'all' ? 'bg-[#F28C28] text-[#171717] font-black' : 'bg-white text-slate-700'
              }`}
            >
              All (4)
            </button>
            <button
              type="button"
              onClick={() => setFilterSeverity('critical')}
              className={`px-2.5 py-1 rounded text-[11px] font-bold border-2 border-[#171717] ${
                filterSeverity === 'critical' ? 'bg-red-500 text-white font-black' : 'bg-white text-slate-700'
              }`}
            >
              Critical
            </button>
            <button
              type="button"
              onClick={() => setFilterSeverity('serious')}
              className={`px-2.5 py-1 rounded text-[11px] font-bold border-2 border-[#171717] ${
                filterSeverity === 'serious' ? 'bg-amber-400 text-[#171717] font-black' : 'bg-white text-slate-700'
              }`}
            >
              Serious
            </button>
          </div>
        </div>

        {/* Audit Results Table */}
        <div className="space-y-2.5 text-xs">
          {filtered.map((item) => (
            <div key={item.id} className="p-3 rounded-xl border-2 border-[#171717] bg-[#FFF8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase border border-[#171717] ${
                    item.severity === 'critical' ? 'bg-red-500 text-white' : 'bg-amber-400 text-[#171717]'
                  }`}>
                    {item.severity}
                  </span>
                  <span className="font-mono font-bold text-[#171717]">rule: {item.rule}</span>
                  <span className="text-[10px] text-slate-500 font-mono bg-white px-1.5 py-0.2 rounded border border-slate-300">
                    Source: {item.tool}
                  </span>
                </div>
                <p className="text-[#171717] text-xs font-medium">{item.impact}</p>
              </div>

              <div className="font-mono text-[11px] bg-white px-2.5 py-1 rounded border border-[#171717] text-[#171717] shrink-0">
                <code>{item.element}</code>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Crucial Testing Insight */}
      <div className="p-3.5 bg-[#FFF4E5] border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717] flex items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-[#F28C28] shrink-0" />
        <p className="text-xs text-[#171717] font-semibold leading-relaxed">
          <strong>The 40 / 60 Reality:</strong> Automated audits catch roughly 30% to 40% of WCAG defects. Manual keyboard verification and semantic code reviews catch the remaining 60%.
        </p>
      </div>

    </div>
  );
};
