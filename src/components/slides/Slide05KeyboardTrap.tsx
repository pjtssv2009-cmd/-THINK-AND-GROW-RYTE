import React, { useState } from 'react';
import { 
  Keyboard, 
  ArrowRight, 
  RotateCcw
} from 'lucide-react';

export const Slide05KeyboardTrap: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isBrokenMode, setIsBrokenMode] = useState<boolean>(true);

  // Focus sequence steps across the controls
  const focusSteps = [
    { id: 0, label: 'Start (Unfocused)' },
    { id: 1, label: 'Field 1: Name Input' },
    { id: 2, label: 'Field 2: Email Input' },
    { id: 3, label: 'Control 3: Filter (Div or Button)' },
    { id: 4, label: 'Control 4: Submit Button' },
  ];

  const handleNextTab = () => {
    setCurrentStep(prev => (prev < 4 ? prev + 1 : 0));
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
          BUG 02 DEEP DIVE • KEYBOARD ACCESSIBILITY
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#172033] tracking-tight mt-2 mb-2 uppercase">
          NO MOUSE. NOW WHAT?
        </h1>
        <p className="text-xs sm:text-sm text-[#667085]">
          A visual interface can look flawless with a mouse. But when navigation relies solely on the keyboard, stripped outlines leave users stranded.
        </p>
      </div>

      {/* Mode Selector and Interactive Stepper */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-3.5 rounded-2xl border border-[#E4E7EC] shadow-2xs">
        
        {/* Toggle Broken vs Fixed Mode */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
            Navigation Mode:
          </span>
          <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
            <button
              type="button"
              onClick={() => { setIsBrokenMode(true); setCurrentStep(0); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                isBrokenMode 
                  ? 'bg-red-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Broken AI (outline: none)
            </button>
            <button
              type="button"
              onClick={() => { setIsBrokenMode(false); setCurrentStep(0); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                !isBrokenMode 
                  ? 'bg-emerald-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fixed (:focus-visible)
            </button>
          </div>
        </div>

        {/* Presenter Step Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            <span>Step {currentStep} / 4:</span>
            <span className="font-bold text-[#5B5CE2]">
              {focusSteps[currentStep].label}
            </span>
          </div>

          <button
            type="button"
            onClick={handleNextTab}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white text-xs font-bold shadow-xs active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] font-mono">TAB</span>
            <span>Simulate Tab Step</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            title="Reset focus simulation"
            aria-label="Reset focus simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Main Focus Simulation Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive Interface with Animated Focus Sequence */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E4E7EC] shadow-card p-6 sm:p-7 relative overflow-hidden">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
            <div className="flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-[#5B5CE2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Live Focus Path Simulator
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
              <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-bold text-slate-700">TAB</kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-bold text-slate-700">ENTER</kbd>
            </div>
          </div>

          {/* Simulated Controls with Dynamic Focus Styles */}
          <div className="space-y-4">
            
            {/* Control 1: Name Input */}
            <div className="relative">
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                1. Full Name
              </label>
              <div 
                className={`w-full px-4 py-2.5 rounded-xl border text-xs transition-all ${
                  currentStep === 1
                    ? isBrokenMode
                      ? 'border-slate-300 bg-white ring-0 shadow-none' // outline: none! Invisible!
                      : 'border-[#5B5CE2] bg-indigo-50/20 ring-4 ring-indigo-200 shadow-sm' // High-contrast ring
                    : 'border-slate-200 bg-white'
                }`}
              >
                Alex Chen
              </div>
              {currentStep === 1 && (
                <div className={`mt-1 text-[10px] font-mono flex items-center gap-1 ${
                  isBrokenMode ? 'text-red-600' : 'text-emerald-700 font-bold'
                }`}>
                  {isBrokenMode ? '⚠️ Focus is here, but outline is completely invisible!' : '✓ High contrast 2px focus ring clearly visible'}
                </div>
              )}
            </div>

            {/* Control 2: Email Input */}
            <div className="relative">
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                2. Email Address
              </label>
              <div 
                className={`w-full px-4 py-2.5 rounded-xl border text-xs transition-all ${
                  currentStep === 2
                    ? isBrokenMode
                      ? 'border-slate-300 bg-white ring-0 shadow-none' // outline: none!
                      : 'border-[#5B5CE2] bg-indigo-50/20 ring-4 ring-indigo-200 shadow-sm'
                    : 'border-slate-200 bg-white'
                }`}
              >
                alex.chen@company.com
              </div>
              {currentStep === 2 && (
                <div className={`mt-1 text-[10px] font-mono flex items-center gap-1 ${
                  isBrokenMode ? 'text-red-600' : 'text-emerald-700 font-bold'
                }`}>
                  {isBrokenMode ? '⚠️ Tab moved, but user has no clue which field has focus.' : '✓ Custom ring with 2px offset guides the user'}
                </div>
              )}
            </div>

            {/* Control 3: Dropdown / Filter (Div vs Semantic Button) */}
            <div className="relative">
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                3. Priority Level (Custom Component)
              </label>
              <div 
                className={`w-full px-4 py-2.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                  currentStep === 3
                    ? isBrokenMode
                      ? 'border-dashed border-red-300 bg-red-50/40 text-slate-400' // SKIPPED because it's a div!
                      : 'border-[#5B5CE2] bg-indigo-50/20 ring-4 ring-indigo-200 font-bold'
                    : 'border-slate-200 bg-white text-slate-700'
                }`}
              >
                <span>Medium Priority</span>
                <span className="text-[10px] font-mono text-slate-400">
                  {isBrokenMode ? '<div onClick>' : '<button type="button">'}
                </span>
              </div>
              {currentStep === 3 && (
                <div className={`mt-1 text-[10px] font-mono flex items-center gap-1 ${
                  isBrokenMode ? 'text-red-600 font-bold' : 'text-emerald-700 font-bold'
                }`}>
                  {isBrokenMode 
                    ? '🚫 SKIPPED! Built as a <div> with no tabIndex or keydown listeners.' 
                    : '✓ Semantic <button> safely receives Tab focus & Enter activation.'}
                </div>
              )}
            </div>

            {/* Control 4: Submit Button */}
            <div className="pt-2 flex items-center justify-between">
              <div 
                className={`px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-all ${
                  currentStep === 4
                    ? isBrokenMode
                      ? 'bg-slate-900' // Invisible focus
                      : 'bg-[#5B5CE2] ring-4 ring-indigo-300 shadow-md'
                    : 'bg-slate-900'
                }`}
              >
                Submit Form
              </div>

              {currentStep === 4 && (
                <div className={`text-[10px] font-mono flex items-center gap-1 ${
                  isBrokenMode ? 'text-red-600 font-bold' : 'text-emerald-700 font-bold'
                }`}>
                  {isBrokenMode ? '❌ outline: none applied' : '✓ :focus-visible activated'}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Right: Technical Explanation & CSS Rules */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-[#172033] rounded-3xl p-6 text-white shadow-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-300">
                CSS Best Practice
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                WCAG 2.4.7
              </span>
            </div>

            <pre className="text-xs font-mono text-emerald-300 leading-relaxed bg-slate-950/70 p-3.5 rounded-xl border border-emerald-500/30 overflow-x-auto">
{`/* Accessible focus-visible pattern */
button:focus-visible,
input:focus-visible {
  outline: 2px solid #5B5CE2;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(91, 92, 226, 0.15);
}`}
            </pre>

            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block mb-0.5">The Beauty of :focus-visible:</strong>
              Mouse clicks stay aesthetically pristine (no rings), but keyboard Tab navigation immediately illuminates the control with an unmistakable ring.
            </p>
          </div>

          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <strong className="text-amber-900 block font-bold mb-1">
              Why AI Prompts Get This Wrong:
            </strong>
            Many training datasets contain CSS resets with <code className="font-mono bg-white px-1 py-0.5 rounded text-red-600">* &#123; outline: none !important; &#125;</code> copied from legacy Dribbble templates.
          </div>

        </div>

      </div>

    </div>
  );
};
