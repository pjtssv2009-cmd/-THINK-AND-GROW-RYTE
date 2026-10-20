import React, { useState, useRef } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { FIX_ITEMS } from '../../constants/gameData';
import type { FixItem } from '../../types/presentation';
import { 
  CheckCircle2, 
  Keyboard, 
  Sparkles, 
  Info,
  Check
} from 'lucide-react';

export const SlideFixTheBugs: React.FC = () => {
  const { awardPoints, completeMission } = useGameState();

  const [activeFixIndex, setActiveFixIndex] = useState<number>(0);
  const [appliedFixes, setAppliedFixes] = useState<Record<string, boolean>>({
    'fix-label': true, // Start with first fix applied for immediate visual delight
  });

  const formInputRef = useRef<HTMLInputElement>(null);

  const currentFix = FIX_ITEMS[activeFixIndex];

  const handleToggleFix = (fix: FixItem) => {
    const isNowApplied = !appliedFixes[fix.id];
    setAppliedFixes(prev => ({ ...prev, [fix.id]: isNowApplied }));

    if (isNowApplied) {
      awardPoints(10, `Applied Fix: ${fix.title}!`, `fix-${fix.id}`);
      
      // Check if all 5 fixes have been applied
      const totalApplied = FIX_ITEMS.filter(f => (f.id === fix.id ? isNowApplied : appliedFixes[f.id])).length;
      if (totalApplied === FIX_ITEMS.length) {
        completeMission('demo-c', 10);
      }
    }
  };

  const handleTryKeyboard = () => {
    if (formInputRef.current) {
      formInputRef.current.focus();
    }
  };

  const appliedCount = FIX_ITEMS.filter(f => appliedFixes[f.id]).length;

  return (
    <div className="w-full max-w-6xl mx-auto py-4 md:py-6 px-4 flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B5CE2] bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
              Mission 3 • 4 Minutes
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Demo C
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight mt-1">
            Fix the Bugs: Live Accessible Refactoring
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Apply modern accessibility patterns to transform the AI-generated form into a resilient experience.
          </p>
        </div>

        {/* Counter and Keyboard tester */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleTryKeyboard}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-[#5B5CE2] border border-indigo-200 flex items-center gap-1.5 transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
          >
            <Keyboard className="w-4 h-4" />
            <span>Try Keyboard Navigation</span>
          </button>

          <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2">
            <span className="text-xs font-bold text-slate-800">
              {appliedCount} / {FIX_ITEMS.length} Fixes Applied
            </span>
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
              ✓
            </div>
          </div>
        </div>
      </div>

      {/* Fix Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4">
        {FIX_ITEMS.map((item, idx) => {
          const isSelected = activeFixIndex === idx;
          const isApplied = appliedFixes[item.id];
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveFixIndex(idx)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 border transition-all focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : isApplied
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                isApplied ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {isApplied ? '✓' : idx + 1}
              </span>
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Split-Screen: Broken vs Improved Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Left: Broken AI-Generated Interface */}
        <div className="bg-white rounded-3xl border-2 border-red-200 shadow-sm p-6 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-red-100 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span>Before: Broken AI Interface</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400">Untested Output</span>
          </div>

          {/* Broken Form Preview */}
          <div className="space-y-4 opacity-85 select-none pointer-events-none">
            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1">
                Full Name (Span only)
              </span>
              <input 
                type="text" 
                defaultValue="Alex Rivera"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-slate-50"
                readOnly
              />
            </div>

            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1">
                Email Address
              </span>
              <input 
                type="text" 
                defaultValue="invalid-format"
                className="w-full px-3 py-2 rounded-lg border border-red-400 text-xs bg-slate-50"
                readOnly
              />
              <p className="text-[11px] text-[#CBD5E1] mt-1">
                Faint placeholder helper text (1.8:1 contrast)
              </p>
              <div className="text-[10px] text-red-500 mt-0.5">
                Invalid input
              </div>
            </div>

            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1">
                Message (Color-only error)
              </span>
              <textarea 
                rows={2}
                defaultValue="Error indicated only by red border"
                className="w-full px-3 py-2 rounded-lg border-2 border-red-500 text-xs bg-slate-50"
                readOnly
              />
            </div>

            <button 
              type="button" 
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              tabIndex={-1}
            >
              Submit Ticket (outline: none)
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-red-600 bg-red-50/50 p-2.5 rounded-xl">
            🚫 <strong>Symptom:</strong> Keyboard navigators get trapped, screen readers cannot name fields, and low-vision users cannot read helper text.
          </div>
        </div>

        {/* Right: Live Improved Accessible Interface */}
        <div className="bg-white rounded-3xl border-2 border-emerald-400 shadow-md p-6 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>After: Accessible Working Interface</span>
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Interactive Form
            </span>
          </div>

          {/* Working Progressive Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            {/* Field 1: Full Name with programmatic Label association */}
            <div className={`p-2 rounded-xl transition-colors ${
              currentFix.id === 'fix-label' ? 'bg-indigo-50/50 ring-2 ring-[#5B5CE2]' : ''
            }`}>
              {appliedFixes['fix-label'] ? (
                <label 
                  htmlFor="accessible-name" 
                  className="text-xs font-bold text-slate-900 block mb-1 cursor-pointer"
                >
                  Full Name <span aria-hidden="true" className="text-red-600">*</span>
                </label>
              ) : (
                <span className="text-xs font-medium text-slate-700 block mb-1">
                  Full Name (Unassociated Span)
                </span>
              )}

              <input
                ref={formInputRef}
                id={appliedFixes['fix-label'] ? 'accessible-name' : undefined}
                type="text"
                defaultValue="Alex Rivera"
                className={`w-full px-3.5 py-2 rounded-xl border text-xs text-slate-800 transition-all ${
                  appliedFixes['fix-focus']
                    ? 'border-slate-300 focus-visible:outline-2 focus-visible:outline-[#5B5CE2] focus-visible:outline-offset-2'
                    : 'border-slate-300 outline-none'
                }`}
                required
              />
              {appliedFixes['fix-label'] && (
                <span className="text-[10px] font-medium text-emerald-700 block mt-0.5">
                  ✓ Programmatically bound: &lt;label htmlFor="accessible-name"&gt;
                </span>
              )}
            </div>

            {/* Field 2: Email Address with Contrast & aria-describedby */}
            <div className={`p-2 rounded-xl transition-colors ${
              currentFix.id === 'fix-contrast' || currentFix.id === 'fix-error-aria' 
                ? 'bg-indigo-50/50 ring-2 ring-[#5B5CE2]' 
                : ''
            }`}>
              <label 
                htmlFor="accessible-email" 
                className="text-xs font-bold text-slate-900 block mb-1 cursor-pointer"
              >
                Work Email <span aria-hidden="true" className="text-red-600">*</span>
              </label>

              <input
                id="accessible-email"
                type="email"
                defaultValue="alex.rivera@digiryte.com"
                aria-describedby="email-help-text email-error-feedback"
                aria-invalid={!appliedFixes['fix-error-aria'] ? undefined : 'false'}
                className={`w-full px-3.5 py-2 rounded-xl border text-xs text-slate-800 transition-all ${
                  appliedFixes['fix-focus']
                    ? 'border-slate-300 focus-visible:outline-2 focus-visible:outline-[#5B5CE2] focus-visible:outline-offset-2'
                    : 'border-slate-300 outline-none'
                }`}
              />

              {/* Helper text with compliant contrast */}
              <p 
                id="email-help-text" 
                className={`text-[11px] mt-1 transition-colors ${
                  appliedFixes['fix-contrast'] 
                    ? 'text-slate-600 font-medium' // 5.4:1 contrast ratio!
                    : 'text-[#CBD5E1]' // 1.8:1 contrast
                }`}
              >
                {appliedFixes['fix-contrast'] 
                  ? '✓ High contrast helper text (5.4:1 ratio — WCAG AA compliant)' 
                  : 'Faint helper text (1.8:1 ratio)'}
              </p>

              {/* Connected descriptive error advice */}
              {appliedFixes['fix-error-aria'] && (
                <div 
                  id="email-error-feedback"
                  role="status"
                  className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mt-1 bg-emerald-50/80 p-2 rounded-lg border border-emerald-200"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Valid corporate email format confirmed.</span>
                </div>
              )}
            </div>

            {/* Field 3: Problem Description with Multi-Modal Error Feedback */}
            <div className={`p-2 rounded-xl transition-colors ${
              currentFix.id === 'fix-color-plus' ? 'bg-indigo-50/50 ring-2 ring-[#5B5CE2]' : ''
            }`}>
              <label 
                htmlFor="accessible-msg" 
                className="text-xs font-bold text-slate-900 block mb-1 cursor-pointer"
              >
                Message <span aria-hidden="true" className="text-red-600">*</span>
              </label>

              <textarea
                id="accessible-msg"
                rows={2}
                defaultValue="Need SSO onboarding assistance for our frontend engineering pod."
                className={`w-full px-3.5 py-2 rounded-xl border text-xs text-slate-800 transition-all ${
                  appliedFixes['fix-focus']
                    ? 'border-slate-300 focus-visible:outline-2 focus-visible:outline-[#5B5CE2] focus-visible:outline-offset-2'
                    : 'border-slate-300 outline-none'
                }`}
              />

              {appliedFixes['fix-color-plus'] ? (
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Multi-modal feedback enabled (Icon + text + visible state).</span>
                </div>
              ) : (
                <span className="text-[10px] text-red-500 block mt-1 font-mono">
                  Color only state active
                </span>
              )}
            </div>

            {/* Submit button with custom high-contrast focus ring */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className={`px-5 py-2.5 rounded-xl font-bold text-xs text-white transition-all ${
                  appliedFixes['fix-focus']
                    ? 'bg-[#5B5CE2] hover:bg-[#4C4DD0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B5CE2] shadow-sm'
                    : 'bg-slate-900 outline-none'
                }`}
              >
                Submit Form
              </button>

              <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded">
                Try pressing Tab key to test!
              </span>
            </div>

          </form>

        </div>

      </div>

      {/* Code Inspector & Live Fix Controller */}
      <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                {currentFix.wcagCode}
              </span>
              <span className="text-xs text-slate-400">
                • {currentFix.issueLabel}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {currentFix.title}
            </h3>
          </div>

          {/* Toggle Fix Button */}
          <button
            type="button"
            onClick={() => handleToggleFix(currentFix)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-indigo-400 ${
              appliedFixes[currentFix.id]
                ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black'
                : 'bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{appliedFixes[currentFix.id] ? '✓ Fix Applied (+10 Pts)' : 'Apply This Fix (+10 Pts)'}</span>
          </button>
        </div>

        {/* Code Diff Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          
          {/* Bad AI code */}
          <div className="bg-slate-950/80 rounded-2xl p-4 border border-red-500/30">
            <div className="flex items-center justify-between text-xs text-red-400 font-mono mb-2">
              <span>AI Generated (Broken)</span>
              <span>❌ Anti-pattern</span>
            </div>
            <pre className="text-[11px] font-mono text-red-200/80 overflow-x-auto leading-relaxed">
              <code>{currentFix.badCode}</code>
            </pre>
          </div>

          {/* Good Accessible code */}
          <div className="bg-slate-950/80 rounded-2xl p-4 border border-emerald-500/30">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-2">
              <span>Accessible Engineering Fix</span>
              <span>✓ Best Practice</span>
            </div>
            <pre className="text-[11px] font-mono text-emerald-200 overflow-x-auto leading-relaxed">
              <code>{currentFix.goodCode}</code>
            </pre>
          </div>

        </div>

        {/* Engineering Rationale */}
        <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#5B5CE2] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-semibold mb-0.5">Engineering Rationale:</strong>
            {currentFix.rationale}
          </div>
        </div>

        {/* Important WCAG Disclaimer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>
            ℹ️ <strong>Educational Note:</strong> While these fixes resolve severe barriers, no single form can be claimed "100% WCAG compliant" without comprehensive manual testing with diverse assistive technology users.
          </span>
        </div>
      </div>

    </div>
  );
};
