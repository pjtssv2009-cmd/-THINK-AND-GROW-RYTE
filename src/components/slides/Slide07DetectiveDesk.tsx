import React, { useState } from 'react';
import { Keyboard, Play, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

export const Slide07DetectiveDesk: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunningSim, setIsRunningSim] = useState<boolean>(false);

  // Focus steps: 0=start, 1=input1, 2=input2, 3=button
  const steps = [
    { id: 1, label: 'Field 1: Name' },
    { id: 2, label: 'Field 2: Email' },
    { id: 3, label: 'Button: Submit' },
  ];

  const handleSimulate = () => {
    setIsRunningSim(true);
    setActiveStep(1);

    setTimeout(() => {
      setActiveStep(2);
    }, 900);

    setTimeout(() => {
      setActiveStep(3);
    }, 1800);

    setTimeout(() => {
      setIsRunningSim(false);
    }, 2700);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsRunningSim(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          INTERACTION MECHANICS • WCAG 2.1.1 & 2.4.7
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          KEYBOARD ACCESSIBILITY: NO MOUSE REQUIRED
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-[#525252]">
          Every digital capability available through a mouse pointer must be equally accessible via keyboard alone.
        </p>
      </div>

      {/* 3 Core Rules Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="p-3 bg-white border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#171717] mb-1">
            <kbd className="px-1.5 py-0.5 bg-[#FFF4E5] border border-[#171717] rounded font-mono text-[11px]">Tab</kbd>
            <span>Logical Traversal</span>
          </div>
          <p className="text-[11px] text-[#525252] leading-relaxed">
            Moves forward through interactive controls; <kbd className="px-1 border rounded text-[10px]">Shift+Tab</kbd> moves backward.
          </p>
        </div>

        <div className="p-3 bg-white border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#171717] mb-1">
            <kbd className="px-1.5 py-0.5 bg-[#FFF4E5] border border-[#171717] rounded font-mono text-[11px]">Enter / Space</kbd>
            <span>Action Activation</span>
          </div>
          <p className="text-[11px] text-[#525252] leading-relaxed">
            Enter activates links and submits forms; Space activates buttons and checkboxes.
          </p>
        </div>

        <div className="p-3 bg-white border-2 border-[#171717] rounded-xl shadow-[3px_3px_0px_#171717]">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#171717] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#F28C28] border border-[#171717]" />
            <span>:focus-visible</span>
          </div>
          <p className="text-[11px] text-[#525252] leading-relaxed">
            Displays a crisp 2px or 3px outline exclusively for keyboard users while leaving mouse clicks clean.
          </p>
        </div>
      </div>

      {/* Interactive Tab Simulation Runner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border-2 border-[#171717] rounded-xl p-3 mb-5 shadow-[3px_3px_0px_#171717] gap-3">
        <div className="flex items-center gap-2">
          <Keyboard className="w-4 h-4 text-[#F28C28]" />
          <span className="text-xs font-black uppercase text-[#171717]">
            Focus Sequence:
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            {steps.map((s) => (
              <span
                key={s.id}
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border transition-all ${
                  activeStep === s.id
                    ? 'bg-[#F28C28] text-[#171717] border-[#171717] shadow-[1.5px_1.5px_0px_#171717] font-black scale-105'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSimulate}
            disabled={isRunningSim}
            className={`px-3 py-1.5 rounded-lg text-xs font-black border-2 border-[#171717] transition-all flex items-center gap-1.5 focus-visible:outline-3 focus-visible:outline-[#F28C28] ${
              isRunningSim
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-[#F28C28] hover:bg-[#DF7A1B] text-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px]'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isRunningSim ? 'Simulating Tab...' : 'Simulate Tab Sequence'}</span>
          </button>

          {activeStep > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 rounded-lg border-2 border-[#171717] bg-[#FFF8EE] hover:bg-[#FFF4E5] text-[#171717] shadow-[1px_1px_0px_#171717]"
              title="Reset sequence"
              aria-label="Reset sequence"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Side-by-Side Interface Demonstration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        
        {/* Broken Interface */}
        <div className="bg-white border-2 border-[#B91C1C] rounded-2xl p-5 shadow-[4px_4px_0px_#B91C1C]">
          <div className="flex items-center justify-between pb-3 border-b-2 border-red-200 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#B91C1C] flex items-center gap-1.5">
              <XCircle className="w-4 h-4" />
              <span>Broken: outline: none & DIV Button</span>
            </span>
            <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">
              Trap Loop
            </span>
          </div>

          <div className="space-y-3 pointer-events-none opacity-90">
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-1">Full Name</span>
              <div className={`px-3 py-2 rounded-lg border bg-slate-50 text-xs text-slate-800 ${
                activeStep === 1 ? 'border-transparent ring-0' : 'border-slate-300'
              }`}>
                Jordan Lee {activeStep === 1 && <span className="text-red-500 font-mono text-[10px] ml-2">(Cursor invisible!)</span>}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-700 block mb-1">Company Email</span>
              <div className={`px-3 py-2 rounded-lg border bg-slate-50 text-xs text-slate-800 ${
                activeStep === 2 ? 'border-transparent ring-0' : 'border-slate-300'
              }`}>
                jordan@company.com {activeStep === 2 && <span className="text-red-500 font-mono text-[10px] ml-2">(Cursor invisible!)</span>}
              </div>
            </div>

            {/* Clickable DIV */}
            <div className="p-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold text-center">
              Submit Ticket (Div tag - Tab skips entirely!)
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-red-100 text-[11px] font-bold text-red-700 bg-red-50 p-2 rounded">
            ❌ <strong>Fails WCAG 2.4.7:</strong> User has no visible cursor and cannot tab to or submit the button.
          </div>
        </div>

        {/* Corrected Interface */}
        <div className="bg-white border-2 border-[#15803D] rounded-2xl p-5 shadow-[4px_4px_0px_#15803D]">
          <div className="flex items-center justify-between pb-3 border-b-2 border-emerald-200 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#15803D] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Corrected: :focus-visible & Button</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Compliant
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <div>
              <label htmlFor="demo-name" className="text-xs font-black text-[#171717] block mb-1">
                Full Name *
              </label>
              <input
                id="demo-name"
                type="text"
                defaultValue="Jordan Lee"
                className={`w-full px-3 py-2 rounded-lg border-2 border-[#171717] text-xs font-medium text-[#171717] ${
                  activeStep === 1 ? 'outline-3 outline-[#F28C28] outline-offset-2 bg-[#FFF4E5]' : 'bg-white'
                }`}
              />
            </div>

            <div>
              <label htmlFor="demo-email" className="text-xs font-black text-[#171717] block mb-1">
                Company Email *
              </label>
              <input
                id="demo-email"
                type="email"
                defaultValue="jordan@company.com"
                className={`w-full px-3 py-2 rounded-lg border-2 border-[#171717] text-xs font-medium text-[#171717] ${
                  activeStep === 2 ? 'outline-3 outline-[#F28C28] outline-offset-2 bg-[#FFF4E5]' : 'bg-white'
                }`}
              />
            </div>

            {/* Native semantic button */}
            <button
              type="submit"
              className={`w-full py-2.5 rounded-lg text-xs font-black border-2 border-[#171717] transition-all ${
                activeStep === 3
                  ? 'bg-[#F28C28] text-[#171717] outline-3 outline-[#F28C28] outline-offset-2 shadow-[2px_2px_0px_#171717]'
                  : 'bg-[#171717] text-white hover:bg-slate-800'
              }`}
            >
              Submit Ticket (Native &lt;button&gt;)
            </button>
          </form>

          <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] font-bold text-emerald-800 bg-emerald-50 p-2 rounded">
            ✓ <strong>Passes WCAG 2.1.1 & 2.4.7:</strong> Crisp high-contrast focus rings and native Space/Enter execution.
          </div>
        </div>

      </div>

    </div>
  );
};
