import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Slide09TheProof: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formMode, setFormMode] = useState<'broken' | 'accessible'>('accessible');
  const [nameVal, setNameVal] = useState('Alex Rivera');
  const [emailVal, setEmailVal] = useState('alex@company.com');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const steps = [
    {
      id: 1,
      name: '1. Identify',
      title: 'Spot the Defects',
      summary: 'Missing label binding, outline:none on focus, and color-only error state.'
    },
    {
      id: 2,
      name: '2. Inspect',
      title: 'Inspect Raw HTML',
      summary: 'AI output uses visual <span> tags instead of <label>, and a <div> instead of <button>.'
    },
    {
      id: 3,
      name: '3. Correct',
      title: 'Apply 4 Fixes',
      summary: 'Bind htmlFor to id, add :focus-visible ring, wire aria-describedby, and use native <button>.'
    },
    {
      id: 4,
      name: '4. Verify',
      title: '60s Keyboard Test',
      summary: 'Tab traverses cleanly, focus is distinct, and validation error announces via role="alert".'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          PRACTICAL DEMO • LIVE REFACTORING
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          LIVE DEMO: AUDIT AND FIX
        </h1>
        <p className="text-sm font-bold text-[#525252]">
          Watch a typical AI contact form transform from inaccessible code into an accessible standard.
        </p>
      </div>

      {/* 4 Step Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {steps.map((s) => {
          const isSelected = currentStep === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentStep(s.id)}
              className={`p-2.5 rounded-xl border-2 border-[#171717] text-left transition-all ${
                isSelected
                  ? 'bg-[#F28C28] text-[#171717] shadow-[3px_3px_0px_#171717] font-black -translate-x-0.5 -translate-y-0.5'
                  : 'bg-white hover:bg-[#FFF4E5] text-[#171717] shadow-[2px_2px_0px_#171717]'
              } focus-visible:outline-3 focus-visible:outline-[#F28C28]`}
              aria-pressed={isSelected}
            >
              <span className="text-xs font-black block">{s.name}</span>
              <span className="text-[10px] text-[#525252] truncate block mt-0.5">{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Split Demo: Form on Left, Concise Walkthrough on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left: The Form Component */}
        <div className="lg:col-span-5 bg-white border-2 border-[#171717] rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#171717]">
          
          <div className="flex items-center justify-between pb-2.5 border-b-2 border-[#171717] mb-3">
            <span className="text-xs font-black uppercase text-[#171717]">
              Contact Support Form
            </span>

            {/* Toggle form state */}
            <div className="flex items-center bg-[#FFF8EE] p-0.5 rounded border-2 border-[#171717]">
              <button
                type="button"
                onClick={() => setFormMode('broken')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                  formMode === 'broken' ? 'bg-[#B91C1C] text-white font-black' : 'text-slate-600'
                }`}
              >
                Broken
              </button>
              <button
                type="button"
                onClick={() => setFormMode('accessible')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                  formMode === 'accessible' ? 'bg-[#15803D] text-white font-black' : 'text-slate-600'
                }`}
              >
                Accessible
              </button>
            </div>
          </div>

          {formMode === 'broken' ? (
            /* Broken Form UI */
            <div className="space-y-3">
              <div className="p-2 rounded bg-red-50 border border-red-200 text-[10px] text-red-800 font-bold">
                ⚠️ Broken: Span label, outline:none, color-only error.
              </div>

              <div>
                <span className="text-xs font-medium text-slate-700 block mb-1">
                  Full Name (Span tag)
                </span>
                <input
                  type="text"
                  value={nameVal}
                  onChange={(e) => setNameVal(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800 outline-none"
                />
              </div>

              <div>
                <span className="text-xs font-medium text-slate-700 block mb-1">
                  Corporate Email
                </span>
                <input
                  type="text"
                  value={emailVal}
                  onChange={(e) => setEmailVal(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-red-400 text-xs text-slate-400 outline-none"
                />
                <span className="text-[10px] text-red-500 mt-0.5 block">
                  Invalid email (Color only!)
                </span>
              </div>

              <div
                onClick={() => setHasSubmitted(true)}
                className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold text-center cursor-pointer select-none"
              >
                Submit Form (Clickable Div)
              </div>
            </div>
          ) : (
            /* Accessible Form UI */
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-800 font-bold">
                ✓ Accessible: Semantic labels, :focus-visible, alert error.
              </div>

              <div>
                <label 
                  htmlFor="demo-fullname" 
                  className="text-xs font-black text-[#171717] block mb-0.5 cursor-pointer"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="demo-fullname"
                  name="fullName"
                  type="text"
                  required
                  value={nameVal}
                  onChange={(e) => setNameVal(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border-2 border-[#171717] text-xs font-bold text-[#171717] focus-visible:outline-3 focus-visible:outline-[#F28C28]"
                />
              </div>

              <div>
                <label 
                  htmlFor="demo-useremail" 
                  className="text-xs font-black text-[#171717] block mb-0.5 cursor-pointer"
                >
                  Corporate Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="demo-useremail"
                  name="userEmail"
                  type="email"
                  required
                  aria-describedby="email-hint email-status"
                  value={emailVal}
                  onChange={(e) => setEmailVal(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border-2 border-[#171717] text-xs font-bold text-[#171717] focus-visible:outline-3 focus-visible:outline-[#F28C28]"
                />
                <p id="email-hint" className="text-[10px] text-[#525252] font-semibold mt-0.5">
                  We only send release notices. (5.4:1 contrast)
                </p>
                {hasSubmitted && (
                  <div id="email-status" role="alert" className="flex items-center gap-1.5 text-xs text-[#15803D] font-bold mt-1 bg-emerald-50 p-1.5 rounded border border-emerald-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Valid corporate address verified.</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg text-xs font-black bg-[#F28C28] hover:bg-[#DF7A1B] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] transition-all focus-visible:outline-3 focus-visible:outline-[#171717]"
              >
                Submit Form (Native Button)
              </button>
            </form>
          )}

        </div>

        {/* Right: Step Context & Code Solution */}
        <div className="lg:col-span-7 bg-white border-2 border-[#171717] rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#171717] flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#171717] mb-3">
              <span className="font-mono text-xs font-black uppercase text-[#F28C28]">
                STEP {currentStep} OF 4: {steps[currentStep - 1].title}
              </span>
              <span className="text-[11px] font-mono font-bold bg-[#FFF4E5] px-2 py-0.5 rounded border border-[#171717]">
                Refactoring Guide
              </span>
            </div>

            <p className="text-xs text-[#171717] font-semibold mb-3 leading-relaxed bg-[#FFF8EE] p-2.5 rounded-lg border border-[#171717]">
              {steps[currentStep - 1].summary}
            </p>

            {currentStep === 1 && (
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-red-50 border border-red-200">
                  <strong className="text-red-900 block font-bold mb-0.5">1. Missing Programmatic Label:</strong>
                  <p className="text-red-800 text-[11px]">Clicking the text does not focus the input; VoiceOver announces 'blank'.</p>
                </div>
                <div className="p-2 rounded bg-red-50 border border-red-200">
                  <strong className="text-red-900 block font-bold mb-0.5">2. outline:none on Focus:</strong>
                  <p className="text-red-800 text-[11px]">Sighted keyboard navigators lose their cursor location completely.</p>
                </div>
                <div className="p-2 rounded bg-red-50 border border-red-200">
                  <strong className="text-red-900 block font-bold mb-0.5">3. Color-Only Error:</strong>
                  <p className="text-red-800 text-[11px]">Red border alone fails users with red-green color blindness.</p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="p-3 bg-slate-950 text-white rounded-xl border-2 border-[#171717] font-mono text-[11px] space-y-1">
                <span className="text-red-400 block mb-1 font-bold">// AI Anti-Pattern DOM Tree</span>
                <span className="text-red-300 block">&lt;span class="label"&gt;Full Name&lt;/span&gt;</span>
                <span className="text-red-300 block">&lt;input type="text" style="outline: none" /&gt;</span>
                <span className="text-slate-400 block mt-2">// No programmatic label connection</span>
                <span className="text-slate-400 block">// Focus outline destroyed for mouse aesthetic</span>
              </div>
            )}

            {currentStep === 3 && (
              <div className="p-3 bg-slate-950 text-white rounded-xl border-2 border-[#171717] font-mono text-[11px] space-y-1">
                <span className="text-emerald-400 block mb-1 font-bold">// Accessible Standards DOM Tree</span>
                <span className="text-emerald-300 block">&lt;label for="name"&gt;Full Name *&lt;/label&gt;</span>
                <span className="text-emerald-300 block">&lt;input id="name" required /&gt;</span>
                <span className="text-emerald-300 block">&lt;button type="submit"&gt;Submit&lt;/button&gt;</span>
                <span className="text-amber-300 block mt-2">/* CSS */</span>
                <span className="text-amber-200 block">:focus-visible &#123; outline: 3px solid #F28C28; &#125;</span>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-900 block font-bold mb-0.5">✓ Automated Check Passed</strong>
                  <p className="text-emerald-800 text-[11px]">axe-core and Lighthouse report zero contrast or label violations.</p>
                </div>
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-900 block font-bold mb-0.5">✓ 60-Second Manual Verification Passed</strong>
                  <p className="text-emerald-800 text-[11px]">Tab key travels Name → Email → Submit with bold 3px focus rings.</p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 border-t-2 border-[#171717] mt-3 flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-[#525252]">
              Toggle form on the left!
            </span>
            <button
              type="button"
              onClick={() => setCurrentStep(prev => (prev < 4 ? prev + 1 : 1))}
              className="px-3 py-1 text-xs font-black bg-[#FFF8EE] hover:bg-[#FFF4E5] text-[#171717] rounded border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px]"
            >
              {currentStep < 4 ? 'Next Step →' : 'Start Over ↺'}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
