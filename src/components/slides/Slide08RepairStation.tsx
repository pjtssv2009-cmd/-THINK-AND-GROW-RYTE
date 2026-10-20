import React, { useState } from 'react';
import { 
  Code2, 
  Check, 
  Sliders,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const Slide08RepairStation: React.FC = () => {
  const [selectedFix, setSelectedFix] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'both' | 'broken' | 'fixed'>('both');

  const fixes = [
    {
      id: 1,
      title: '1. Associate Labels with Inputs',
      wcag: 'WCAG 1.3.1 (Level A)',
      badCode: `<span class="label">Full Name</span>\n<input type="text" placeholder="Alex" />`,
      goodCode: `<label for="fullName" class="label">Full Name *</label>\n<input id="fullName" name="fullName" type="text" required />`,
      impact: 'Enables screen readers to speak the field name and enlarges the click target.'
    },
    {
      id: 2,
      title: '2. Add Visible Keyboard Focus',
      wcag: 'WCAG 2.4.7 (Level AA)',
      badCode: `button:focus, input:focus {\n  outline: none;\n}`,
      goodCode: `button:focus-visible, input:focus-visible {\n  outline: 2px solid #5B5CE2;\n  outline-offset: 2px;\n}`,
      impact: 'Allows sighted keyboard and switch users to trace their active cursor position without ruining mouse aesthetics.'
    },
    {
      id: 3,
      title: '3. Provide Clear Validation Errors',
      wcag: 'WCAG 3.3.1 & 3.3.3',
      badCode: `<!-- Color only error -->\n<input class="border-red-500" />\n<span>Invalid input</span>`,
      goodCode: `<input aria-invalid="true" aria-describedby="err-msg" />\n<div id="err-msg" role="alert" class="error flex gap-1">\n  <Icon /> Enter a valid corporate email.\n</div>`,
      impact: 'Screen readers read the error automatically upon focus, and colorblind users see the explanatory icon.'
    }
  ];

  const currentFix = fixes.find(f => f.id === selectedFix) || fixes[0];

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
          REFACTORING WORKSHOP • LIVE REPAIRS
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#172033] tracking-tight mt-2 mb-2 uppercase">
          LET'S FIX THE EXPERIENCE.
        </h1>
        <p className="text-xs sm:text-sm text-[#667085]">
          Aesthetics and accessibility are partners, not rivals. Here is how three targeted code changes transform the user journey.
        </p>
      </div>

      {/* Controls Bar: Fix Selector & View Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
        {/* Fix Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
          {fixes.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFix(f.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border whitespace-nowrap ${
                selectedFix === f.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{f.title}</span>
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
          <button
            type="button"
            onClick={() => setViewMode('both')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'both'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Split View</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('broken')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'broken'
                ? 'bg-red-50 text-red-700 shadow-2xs border border-red-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
            <span>Broken Only</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('fixed')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'fixed'
                ? 'bg-emerald-50 text-emerald-800 shadow-2xs border border-emerald-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fixed Only</span>
          </button>
        </div>
      </div>

      {/* Interface Comparison Container */}
      <div className={`grid gap-6 mb-6 ${
        viewMode === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto w-full'
      }`}>
        
        {/* Left: Broken Form Interface */}
        {(viewMode === 'both' || viewMode === 'broken') && (
        <div className="bg-white rounded-3xl border-2 border-red-200 shadow-card p-6 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-red-100 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span>Before: AI Default Form</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">Untested Output</span>
          </div>

          <div className="space-y-4 select-none opacity-80 pointer-events-none">
            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1">
                Full Name (Span tag)
              </span>
              <div className="px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-800">
                Jordan Lee
              </div>
            </div>

            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1">
                Company Email
              </span>
              <div className="px-3.5 py-2.5 rounded-xl border border-red-400 bg-slate-50 text-xs text-[#CBD5E1]">
                jordan@company.com (1.8:1 contrast)
              </div>
              <span className="text-[10px] text-red-500 mt-0.5 block">Invalid input</span>
            </div>

            <div className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold w-max">
              Submit Ticket (outline: none)
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-red-700 font-medium bg-red-50/50 p-2.5 rounded-xl">
            ❌ <strong>Fails:</strong> Keyboard navigators lose cursor, screen readers cannot identify fields, error text is ambiguous.
          </div>
        </div>
        )}

        {/* Right: Accessible Working Interface */}
        {(viewMode === 'both' || viewMode === 'fixed') && (
        <div className="bg-white rounded-3xl border-2 border-emerald-400 shadow-card p-6 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>After: Accessible Working Form</span>
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Interactive & Semantic
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label 
                htmlFor="repaired-name"
                className="text-xs font-bold text-slate-900 block mb-1 cursor-pointer flex items-center gap-1"
              >
                <span>Full Name</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                id="repaired-name"
                type="text"
                defaultValue="Jordan Lee"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus-visible:outline-2 focus-visible:outline-[#5B5CE2] focus-visible:outline-offset-2"
              />
            </div>

            <div>
              <label 
                htmlFor="repaired-email"
                className="text-xs font-bold text-slate-900 block mb-1 cursor-pointer flex items-center gap-1"
              >
                <span>Company Email</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                id="repaired-email"
                type="email"
                defaultValue="jordan@company.com"
                aria-describedby="email-hint-repaired email-err-repaired"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus-visible:outline-2 focus-visible:outline-[#5B5CE2] focus-visible:outline-offset-2"
              />
              <p id="email-hint-repaired" className="text-[11px] text-slate-600 font-medium mt-1">
                We'll only notify you about product release notes. (5.4:1 contrast)
              </p>
              <div id="email-err-repaired" role="status" className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mt-1 bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Valid corporate email verified.</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white text-xs font-bold shadow-xs focus-visible:outline-2 focus-visible:outline-[#5B5CE2] focus-visible:outline-offset-2 transition-all"
              >
                Submit Form
              </button>
              <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                Try Tab navigation!
              </span>
            </div>
          </form>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-800 font-medium bg-emerald-50/50 p-2.5 rounded-xl">
            ✓ <strong>Benefits:</strong> Clear accessible labels, high-contrast focus rings, and multi-modal error recovery.
          </div>
        </div>
        )}

      </div>

      {/* Code Snippet Comparison */}
      <div className="bg-[#172033] rounded-3xl p-6 text-white shadow-card">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#5B5CE2]" />
            <h3 className="text-sm font-bold text-white">
              Code Diff: {currentFix.title}
            </h3>
          </div>
          <span className="text-xs font-mono text-amber-400 font-bold">
            {currentFix.wcag}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-red-500/30">
            <span className="text-[10px] font-mono text-red-400 block mb-1">
              AI Output (Broken Anti-Pattern)
            </span>
            <pre className="text-xs font-mono text-red-300/80 overflow-x-auto leading-relaxed">
              <code>{currentFix.badCode}</code>
            </pre>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-emerald-500/30">
            <span className="text-[10px] font-mono text-emerald-400 block mb-1">
              Engineered Fix (Accessible Standard)
            </span>
            <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
              <code>{currentFix.goodCode}</code>
            </pre>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-white">Why it works:</strong> {currentFix.impact}
        </p>
      </div>

    </div>
  );
};
