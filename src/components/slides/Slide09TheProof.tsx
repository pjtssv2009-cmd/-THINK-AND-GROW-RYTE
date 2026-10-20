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
      title: 'Identify Hidden Issues',
      desc: 'Pinpoint where the AI default form violates WCAG (missing label binding, outline:none, color-only validation).'
    },
    {
      id: 2,
      name: '2. Inspect',
      title: 'Inspect Raw HTML Anti-Patterns',
      desc: 'Look at the generated markup: visual <span> tags instead of <label>, <div onClick> instead of <button>.'
    },
    {
      id: 3,
      name: '3. Correct',
      title: 'Apply 4 Targeted Refactors',
      desc: 'Add htmlFor/id pairs, modern :focus-visible CSS, aria-describedby for errors, and high-contrast tokens.'
    },
    {
      id: 4,
      name: '4. Retest',
      title: 'Retest with Keyboard & AOM',
      desc: 'Disconnect mouse, Tab through controls, trigger validation, and confirm clean screen reader announcement.'
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
          PRACTICAL WORKSHOP • LIVE REFACTORING
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          LIVE DEMO: AUDIT AND FIX
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-[#525252]">
          Watch how a typical AI-generated SaaS contact form transforms from inaccessible code into a resilient, enterprise-grade interface.
        </p>
      </div>

      {/* 4 Progressive Workshop Steps Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
        {steps.map((s) => {
          const isSelected = currentStep === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentStep(s.id)}
              className={`p-2.5 rounded-lg border-2 border-[#171717] text-left transition-all ${
                isSelected
                  ? 'bg-[#F28C28] text-[#171717] shadow-[3px_3px_0px_#171717] font-black -translate-x-0.5 -translate-y-0.5'
                  : 'bg-white hover:bg-[#FFF4E5] text-[#171717] shadow-[2px_2px_0px_#171717]'
              } focus-visible:outline-3 focus-visible:outline-[#F28C28]`}
              aria-pressed={isSelected}
            >
              <span className="text-xs font-black block">{s.name}</span>
              <span className="text-[10px] font-medium text-[#525252] truncate block mt-0.5">
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Workshop Workspace Split: Left (Interactive Form) & Right (Step Context & Code) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        
        {/* Left: The Form (Interactive Demo) */}
        <div className="lg:col-span-5 bg-white border-2 border-[#171717] rounded-2xl p-5 shadow-[5px_5px_0px_#171717]">
          
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#171717] mb-4">
            <span className="text-xs font-black uppercase text-[#171717] flex items-center gap-1.5">
              <span>Contact Support Form</span>
            </span>

            {/* Toggle form state */}
            <div className="flex items-center bg-[#FFF8EE] p-0.5 rounded border border-[#171717]">
              <button
                type="button"
                onClick={() => setFormMode('broken')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                  formMode === 'broken' ? 'bg-[#B91C1C] text-white' : 'text-slate-600'
                }`}
              >
                Broken
              </button>
              <button
                type="button"
                onClick={() => setFormMode('accessible')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                  formMode === 'accessible' ? 'bg-[#15803D] text-white' : 'text-slate-600'
                }`}
              >
                Accessible
              </button>
            </div>
          </div>

          {formMode === 'broken' ? (
            /* Broken Form UI */
            <div className="space-y-3.5">
              <div className="p-2 rounded bg-red-50 border border-red-200 text-[10px] text-red-800 font-bold">
                ⚠️ Broken Mode: Visual span tags, outline:none, color-only error.
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
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 outline-none"
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
                  className="w-full px-3 py-2 rounded-lg border border-red-400 text-xs text-slate-400 outline-none"
                />
                <span className="text-[10px] text-red-500 mt-1 block">
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
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-800 font-bold">
                ✓ Accessible Mode: Semantic labels, :focus-visible, multi-modal alerts.
              </div>

              <div>
                <label 
                  htmlFor="demo-fullname" 
                  className="text-xs font-black text-[#171717] block mb-1 cursor-pointer"
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
                  className="w-full px-3 py-2 rounded-lg border-2 border-[#171717] text-xs font-bold text-[#171717] focus-visible:outline-3 focus-visible:outline-[#F28C28]"
                />
              </div>

              <div>
                <label 
                  htmlFor="demo-useremail" 
                  className="text-xs font-black text-[#171717] block mb-1 cursor-pointer"
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
                  className="w-full px-3 py-2 rounded-lg border-2 border-[#171717] text-xs font-bold text-[#171717] focus-visible:outline-3 focus-visible:outline-[#F28C28]"
                />
                <p id="email-hint" className="text-[10px] text-[#525252] font-semibold mt-1">
                  We'll only notify you about product incident updates. (5.4:1 contrast)
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
                className="w-full py-2.5 rounded-lg text-xs font-black bg-[#F28C28] hover:bg-[#DF7A1B] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] transition-all focus-visible:outline-3 focus-visible:outline-[#171717]"
              >
                Submit Form (Native Button)
              </button>
            </form>
          )}

        </div>

        {/* Right: Step Explanations & Code Solutions */}
        <div className="lg:col-span-7 bg-white border-2 border-[#171717] rounded-2xl p-5 shadow-[5px_5px_0px_#171717] flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#171717] mb-3">
              <span className="font-mono text-xs font-black uppercase text-[#F28C28]">
                WORKSHOP STEP {currentStep} OF 4
              </span>
              <span className="text-[11px] font-bold text-[#171717]">
                {steps[currentStep - 1].title}
              </span>
            </div>

            <p className="text-xs text-[#171717] font-semibold mb-4 leading-relaxed bg-[#FFF8EE] p-3 rounded-lg border border-[#171717]">
              {steps[currentStep - 1].desc}
            </p>

            {currentStep === 1 && (
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-red-50 border border-red-200">
                  <strong className="text-red-800 block font-bold mb-0.5">Defect 1: Missing htmlFor</strong>
                  <p className="text-red-700 text-[11px]">Clicking the text does not focus the input; VoiceOver announces 'blank'.</p>
                </div>
                <div className="p-2.5 rounded bg-red-50 border border-red-200">
                  <strong className="text-red-800 block font-bold mb-0.5">Defect 2: outline:none on Focus</strong>
                  <p className="text-red-700 text-[11px]">Sighted keyboard navigators lose cursor location completely.</p>
                </div>
                <div className="p-2.5 rounded bg-red-50 border border-red-200">
                  <strong className="text-red-800 block font-bold mb-0.5">Defect 3: Color-Only Error</strong>
                  <p className="text-red-700 text-[11px]">Red border alone fails users with red-green color blindness.</p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="p-3 bg-slate-950 text-white rounded-xl border-2 border-[#171717] font-mono text-[11px] space-y-1">
                <span className="text-red-400 block mb-1 font-bold">// AI Anti-Pattern DOM Tree</span>
                <span className="text-red-300 block">&lt;span class="label"&gt;Full Name&lt;/span&gt;</span>
                <span className="text-red-300 block">&lt;input type="text" placeholder="Alex Rivera" style="outline: none" /&gt;</span>
                <span className="text-slate-400 block mt-2">// No programmatic label connection</span>
                <span className="text-slate-400 block">// Focus outline destroyed for mouse aesthetics</span>
              </div>
            )}

            {currentStep === 3 && (
              <div className="p-3 bg-slate-950 text-white rounded-xl border-2 border-[#171717] font-mono text-[11px] space-y-1">
                <span className="text-emerald-400 block mb-1 font-bold">// Accessible Standards DOM Tree</span>
                <span className="text-emerald-300 block">&lt;label for="fullName"&gt;Full Name *&lt;/label&gt;</span>
                <span className="text-emerald-300 block">&lt;input id="fullName" name="fullName" required /&gt;</span>
                <span className="text-emerald-300 block">&lt;button type="submit"&gt;Submit Form&lt;/button&gt;</span>
                <span className="text-amber-300 block mt-2">/* CSS */</span>
                <span className="text-amber-200 block">:focus-visible &#123; outline: 3px solid #F28C28; &#125;</span>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-800 block font-bold mb-1">✓ Automated Pass</strong>
                  <p className="text-emerald-700 text-[11px]">axe-core and Lighthouse report 100/100: zero contrast or label violations.</p>
                </div>
                <div className="p-3 rounded bg-emerald-50 border border-emerald-200">
                  <strong className="text-emerald-800 block font-bold mb-1">✓ 60-Second Manual Verification</strong>
                  <p className="text-emerald-700 text-[11px]">Tab traverses from Name → Email → Submit Button with unmistakable 3px focus rings.</p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 border-t-2 border-[#171717] mt-3 flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-[#525252]">
              Try the form toggle on the left!
            </span>
            <button
              type="button"
              onClick={() => setCurrentStep(prev => (prev < 4 ? prev + 1 : 1))}
              className="px-3 py-1 text-xs font-black bg-[#FFF8EE] hover:bg-[#FFF4E5] text-[#171717] rounded border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px]"
            >
              {currentStep < 4 ? 'Next Step →' : 'Cycle to Step 1 ↺'}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
