import React, { useState } from 'react';
import { 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  Info
} from 'lucide-react';

export const Slide07DetectiveDesk: React.FC = () => {
  const [, setAuditRun] = useState<boolean>(true);
  const [selectedAuditId, setSelectedAuditId] = useState<string>('a1');

  const auditFindings = [
    {
      id: 'a1',
      rule: 'Form elements do not have associated labels',
      type: 'Automated Catch',
      status: 'FAIL',
      impact: 'Critical',
      icon: <XCircle className="w-4 h-4 text-red-500" />,
      detail: 'The input at #fullName has neither a corresponding <label for> nor an aria-label attribute.',
      whyAutomatedCanCatch: 'Linters can parse the DOM tree and algorithmically verify if an input is linked to a label node.'
    },
    {
      id: 'a2',
      rule: 'Insufficient color contrast on helper elements',
      type: 'Automated Catch',
      status: 'FAIL',
      impact: 'Serious',
      icon: <XCircle className="w-4 h-4 text-red-500" />,
      detail: 'Expected contrast of 4.5:1, but computed contrast ratio is 1.83:1 for text color #CBD5E1.',
      whyAutomatedCanCatch: 'Mathematical luminance calculations between CSS foreground and background hex values are easily computed.'
    },
    {
      id: 'a3',
      rule: 'Logical tab order & reachable controls',
      type: 'Manual Only',
      status: 'CANNOT TEST',
      impact: 'High Risk',
      icon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
      detail: 'The filter dropdown is a <div onClick> with no tabIndex. Automated tools rated this as PASS because they cannot guess human intent.',
      whyAutomatedCanCatch: 'Algorithms cannot know whether a <div> was intended to be interactive without explicit ARIA roles.'
    },
    {
      id: 'a4',
      rule: 'Clarity & recovery of error messages',
      type: 'Manual Only',
      status: 'CANNOT TEST',
      impact: 'Moderate Risk',
      icon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
      detail: 'Message reads "Invalid input". Automation sees valid text in the DOM, but cannot judge whether the advice is helpful to a human.',
      whyAutomatedCanCatch: 'Natural language clarity and user recovery guidance require cognitive evaluation.'
    }
  ];

  const selectedFinding = auditFindings.find(f => f.id === selectedAuditId);

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
          AUDIT WORKSPACE • AUTOMATED VS MANUAL
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#172033] tracking-tight mt-2 mb-2 uppercase">
          FIND WHAT THE EYE MISSES.
        </h1>
        <p className="text-xs sm:text-sm text-[#667085]">
          Automated audits are powerful for rapid regression testing. But over 60% of critical barriers require human verification.
        </p>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Website Interface Under Investigation */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E4E7EC] shadow-card overflow-hidden">
          <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-700">
              Target Component Under Audit
            </span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Live Inspector
            </span>
          </div>

          <div className="p-5 space-y-3.5">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-700 block mb-1">
                Full Name (Inspected)
              </span>
              <input
                type="text"
                defaultValue="Sarah Jenkins"
                readOnly
                className="w-full px-3 py-2 rounded-xl border border-red-300 bg-white text-xs text-slate-800"
              />
              <span className="text-[10px] font-mono text-red-600 block mt-1">
                [Linter Alert] Missing accessible name
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-700 block mb-1">
                Helper Instructions
              </span>
              <p className="text-xs text-[#CBD5E1] font-medium">
                Include country code prefix (+1, +44).
              </p>
              <span className="text-[10px] font-mono text-amber-600 block mt-1">
                [Linter Alert] Contrast ratio 1.83:1 &lt; 4.5:1
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-700 block mb-1">
                Filter Dropdown
              </span>
              <div className="px-3 py-2 rounded-xl border border-dashed border-amber-300 bg-white text-xs text-slate-500 flex items-center justify-between">
                <span>Filter by Department</span>
                <span className="text-[10px] font-mono text-slate-400">&lt;div&gt;</span>
              </div>
              <span className="text-[10px] font-mono text-amber-600 block mt-1">
                [Manual Warning] Skipped by Tab key navigation
              </span>
            </div>
          </div>
        </div>

        {/* Right: Simulated Lighthouse Audit Report Workspace */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E4E7EC] shadow-card p-6">
          
          {/* Audit Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border-2 border-amber-400 flex items-center justify-center font-black text-base text-slate-800 shrink-0 shadow-2xs">
                74
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Lighthouse Accessibility Audit
                </h3>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-semibold">
                  Simulated Demonstration Output
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setAuditRun(prev => !prev)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Re-run Audit</span>
            </button>
          </div>

          {/* Finding Selector Tabs */}
          <div className="space-y-2 mb-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Select Audit Item to Inspect:
            </span>
            {auditFindings.map((finding) => {
              const isSelected = selectedAuditId === finding.id;
              return (
                <button
                  key={finding.id}
                  type="button"
                  onClick={() => setSelectedAuditId(finding.id)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all text-xs flex items-center justify-between gap-3 ${
                    isSelected 
                      ? 'border-[#5B5CE2] bg-indigo-50/40 ring-1 ring-[#5B5CE2]' 
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    {finding.icon}
                    <span className="font-semibold text-slate-800 truncate">
                      {finding.rule}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {finding.type}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      finding.status === 'FAIL' 
                        ? 'bg-red-50 text-red-700' 
                        : 'bg-amber-50 text-amber-800'
                    }`}>
                      {finding.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Insight Panel for Selected Finding */}
          {selectedFinding && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-slate-900 font-bold">Audit Diagnostic:</strong>
                <span className="text-[10px] font-mono text-slate-500">Impact: {selectedFinding.impact}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {selectedFinding.detail}
              </p>
              <div className="pt-2 border-t border-slate-200/70 text-[11px] text-indigo-950 font-medium">
                💡 <strong>Why:</strong> {selectedFinding.whyAutomatedCanCatch}
              </div>
            </div>
          )}

          {/* The Golden Rule */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#5B5CE2] shrink-0" />
            <span>Rule of Thumb: Automated tests catch syntax regressions; manual keyboard tests audit human usability.</span>
          </div>

        </div>

      </div>

    </div>
  );
};
