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
      title: '1. Disconnect the Mouse (60-Second Tab Check)',
      description: 'Tab through the entire user flow. Ensure focus is never lost and buttons trigger via Space/Enter.'
    },
    {
      id: 2,
      title: '2. Check Form Labels & Instructions',
      description: 'Ensure every <input> is bound to a programmatic <label for="id">. Never rely on placeholder text.'
    },
    {
      id: 3,
      title: '3. Verify Color Contrast Mathematics',
      description: 'Check that body copy meets 4.5:1 and UI boundaries/icons meet 3.0:1 against adjacent backgrounds.'
    },
    {
      id: 4,
      title: '4. Test Error Handling Multi-Modally',
      description: 'Never convey errors by red border alone. Always pair color with an icon, explicit text, and role="alert".'
    },
    {
      id: 5,
      title: '5. Combine Automated CI with Manual Verification',
      description: 'Run axe-core in pull request CI pipelines, and manually tab through new components before shipping.'
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
    <div className="w-full max-w-4xl mx-auto py-5 sm:py-8 px-4 flex flex-col items-center animate-slide-in">
      
      {/* Branding Badge */}
      <div className="flex items-center gap-2.5 mb-4 bg-white px-4 py-1.5 rounded-lg border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
        <img 
          src={BRANDING.LOGO_SRC} 
          alt={BRANDING.LOGO_ALT}
          className="w-6 h-6 object-contain"
        />
        <span className="font-black text-xs text-[#171717] tracking-tight uppercase">
          {BRANDING.PROGRAM_NAME} • KEYNOTE WRAP-UP
        </span>
      </div>

      {/* Main Closing Headline */}
      <div className="text-center max-w-2xl mb-2">
        <h1 className="text-3xl sm:text-5xl font-black text-[#171717] tracking-tight uppercase">
          {BRANDING.CLOSING_HEADLINE}
        </h1>
      </div>

      {/* Closing Motto */}
      <p className="text-sm sm:text-lg font-black text-[#F28C28] text-center mb-5 max-w-xl bg-white px-4 py-1.5 rounded-lg border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
        "{BRANDING.CLOSING_MOTTO}"
      </p>

      {/* 5-Point Checklist Card */}
      <div className="w-full bg-white border-2 border-[#171717] rounded-2xl shadow-[5px_5px_0px_#171717] p-5 sm:p-6 mb-5 relative overflow-hidden bg-grid-neo">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#171717] mb-3 gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F28C28]" />
            <h2 className="text-sm sm:text-base font-black uppercase text-[#171717]">
              The 5-Point Engineering Checklist
            </h2>
          </div>

          <button
            type="button"
            onClick={handleCopyChecklist}
            className="px-3.5 py-1.5 rounded-lg text-xs font-black bg-[#F28C28] hover:bg-[#DF7A1B] text-[#171717] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-1.5 transition-all focus-visible:outline-3 focus-visible:outline-[#171717]"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Checklist to Clipboard'}</span>
          </button>
        </div>

        <div className="space-y-2 text-xs">
          {checklist.map((item, idx) => (
            <div key={item.id} className="p-2.5 rounded-xl bg-[#FFF8EE] border-2 border-[#171717] flex items-start gap-2.5">
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

        <div className="mt-3 pt-2.5 border-t-2 border-[#171717] flex items-center justify-between text-[11px] text-[#525252] font-semibold">
          <span>Presented by: <strong className="text-[#171717]">{presenterName}</strong></span>
          <span className="font-mono text-[10px] text-slate-500">DIGIRYTE TECH TALK</span>
        </div>

      </div>

      {/* Thank You & Restart Bar */}
      <div className="w-full bg-[#171717] text-white rounded-2xl p-4 sm:p-5 border-2 border-[#171717] shadow-[4px_4px_0px_#F28C28] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-[10px] font-mono font-black uppercase text-[#F28C28] block mb-0.5">
            Questions & Discussion
          </span>
          <h3 className="text-base sm:text-lg font-black">
            Thank you for participating in Think and Grow RYTE!
          </h3>
        </div>

        <button
          type="button"
          onClick={() => goToSlide(0)}
          className="px-4 py-2 rounded-lg text-xs font-black bg-white hover:bg-[#FFF4E5] text-[#171717] border-2 border-[#F28C28] shadow-[2px_2px_0px_#F28C28] flex items-center gap-1.5 transition-all focus-visible:outline-2 focus-visible:outline-white shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#171717]" />
          <span>Restart Presentation</span>
        </button>
      </div>

    </div>
  );
};
