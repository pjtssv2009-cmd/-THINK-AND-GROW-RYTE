import React, { useState } from 'react';
import { usePresentation } from '../../context/GameStateContext';
import { BRANDING } from '../../constants/branding';
import { ShieldCheck, Copy, Check, RotateCcw } from 'lucide-react';

export const Slide10TheTakeaway: React.FC = () => {
  const { presenterName, goToSlide } = usePresentation();
  const [copied, setCopied] = useState(false);

  const checklist = [
    {
      id: 1,
      title: '1. Test Keyboard Navigation (The 60s Check)',
      description: 'Disconnect the mouse. Ensure Tab moves forward logically, Shift+Tab backward, Enter/Space triggers actions, and :focus-visible rings remain unmistakably visible.'
    },
    {
      id: 2,
      title: '2. Check Form Labels & Instructions',
      description: 'Verify that every <input>, <select>, and <textarea> is bound to a programmatic <label for="id">. Never rely on placeholder text alone.'
    },
    {
      id: 3,
      title: '3. Verify Color Contrast Mathematics',
      description: 'Ensure normal body copy meets the 4.5:1 minimum contrast ratio, and large titles / active UI boundaries maintain at least 3.0:1.'
    },
    {
      id: 4,
      title: '4. Test Error Handling Multi-Modally',
      description: 'Never convey errors by red border alone. Always pair color with an icon, explicit corrective instructions, and aria-describedby with role="alert".'
    },
    {
      id: 5,
      title: '5. Combine Automated CI with Manual Verification',
      description: 'Integrate axe-core or Lighthouse into pull request CI pipelines, and require a 60-second manual keyboard smoke test before shipping to production.'
    }
  ];

  const handleCopyChecklist = () => {
    const text = `THINK AND GROW RYTE — 5-POINT ENGINEERING ACCESSIBILITY CHECKLIST:\n\n` +
      checklist.map(item => `${item.title}\n${item.description}`).join('\n\n') +
      `\n\nBuild fast. Test thoughtfully. Design for everyone.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col items-center animate-slide-in">
      
      {/* Neo-Brutalist Program Branding Badge */}
      <div className="flex items-center gap-2.5 mb-4 bg-white px-4 py-1.5 rounded-lg border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
        <img 
          src={BRANDING.LOGO_SRC} 
          alt={BRANDING.LOGO_ALT}
          className="w-6 h-6 object-contain"
        />
        <div className="flex items-center gap-2">
          <span className="font-black text-xs text-[#171717] tracking-tight uppercase">
            {BRANDING.PROGRAM_NAME}
          </span>
          <span className="text-[10px] font-mono font-bold bg-[#F28C28] text-[#171717] px-2 py-0.5 rounded border border-[#171717]">
            KEYNOTE WRAP-UP
          </span>
        </div>
      </div>

      {/* Main Closing Headline */}
      <div className="text-center max-w-3xl mb-2">
        <h1 className="text-3xl sm:text-5xl font-black text-[#171717] tracking-tight uppercase">
          {BRANDING.CLOSING_HEADLINE}
        </h1>
      </div>

      {/* Closing Motto */}
      <p className="text-base sm:text-xl font-black text-[#F28C28] text-center mb-6 max-w-2xl bg-white px-4 py-1.5 rounded-lg border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
        "{BRANDING.CLOSING_MOTTO}"
      </p>

      {/* Reusable 5-Point Checklist Card */}
      <div className="w-full bg-white border-2 border-[#171717] rounded-2xl shadow-[6px_6px_0px_#171717] p-6 sm:p-7 mb-6 relative overflow-hidden bg-grid-neo">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#171717] mb-4 gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F28C28]" />
            <h2 className="text-sm sm:text-base font-black uppercase text-[#171717]">
              The 5-Point Engineering Accessibility Checklist
            </h2>
          </div>

          <button
            type="button"
            onClick={handleCopyChecklist}
            className="px-4 py-1.5 rounded-lg text-xs font-black bg-[#F28C28] hover:bg-[#DF7A1B] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-1.5 transition-all focus-visible:outline-3 focus-visible:outline-[#171717]"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Checklist to Clipboard'}</span>
          </button>
        </div>

        <div className="space-y-2.5 text-xs">
          {checklist.map((item, idx) => (
            <div key={item.id} className="p-3 rounded-xl bg-[#FFF8EE] border-2 border-[#171717] flex items-start gap-3 shadow-[1.5px_1.5px_0px_#171717]">
              <span className="w-5 h-5 rounded bg-[#171717] text-[#F28C28] font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div>
                <strong className="text-[#171717] block font-black text-xs">{item.title}</strong>
                <p className="text-[#525252] text-[11px] font-medium leading-relaxed mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t-2 border-[#171717] flex items-center justify-between text-[11px] text-[#525252] font-semibold">
          <span>Session presented by: <strong className="text-[#171717]">{presenterName}</strong></span>
          <span className="font-mono text-[10px] text-slate-500">DIGIRYTE INTERNAL TECH TALK</span>
        </div>

      </div>

      {/* Thank You & Presentation Reset */}
      <div className="w-full bg-[#171717] text-white rounded-2xl p-5 border-2 border-[#171717] shadow-[5px_5px_0px_#F28C28] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#F28C28] block mb-1">
            Questions & Answers
          </span>
          <h3 className="text-lg sm:text-xl font-black">
            Thank you for participating in Think and Grow RYTE!
          </h3>
          <p className="text-xs text-slate-300 mt-0.5 max-w-lg leading-relaxed">
            Let's harness AI to ship features faster than ever—while guaranteeing every user can seamlessly experience our products.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => goToSlide(0)}
            className="px-4 py-2 rounded-lg text-xs font-black bg-white hover:bg-[#FFF4E5] text-[#171717] border-2 border-[#F28C28] shadow-[2px_2px_0px_#F28C28] flex items-center gap-1.5 transition-all focus-visible:outline-2 focus-visible:outline-white"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#171717]" />
            <span>Restart Presentation</span>
          </button>
        </div>
      </div>

    </div>
  );
};
