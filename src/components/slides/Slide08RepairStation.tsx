import React from 'react';
import { Cpu, UserCheck, ShieldAlert } from 'lucide-react';

export const Slide08RepairStation: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          QUALITY TOOLCHAIN • THE 40 / 60 REALITY
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          ACCESSIBILITY TESTING: THE TWO HALVES
        </h1>
        <p className="text-sm font-bold text-[#525252]">
          Passing an automated scan is necessary, but automation alone cannot guarantee complete accessibility.
        </p>
      </div>

      {/* The Two Halves Split (50/50 Large Visual Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        
        {/* Left Half: Automated Testing */}
        <div className="p-6 rounded-2xl border-2 border-[#171717] bg-white shadow-[5px_5px_0px_#171717] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#171717] mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#FFF8EE] rounded-lg border border-[#171717]">
                  <Cpu className="w-5 h-5 text-[#F28C28]" />
                </div>
                <div>
                  <h3 className="font-black text-base uppercase text-[#171717]">
                    1. Automated CI Audits
                  </h3>
                  <span className="text-xs text-[#525252] font-semibold">Chrome Lighthouse & axe DevTools</span>
                </div>
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-1 rounded bg-[#FFF4E5] border border-[#171717]">
                ~40% Coverage
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block text-[#171717] font-bold mb-1">What It Excels At:</strong>
                <p className="text-[#525252] leading-relaxed">
                  Mathematical contrast calculations, detecting missing <code>alt</code> attributes, checking duplicate IDs, and catching invalid ARIA syntax.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <strong className="block text-amber-900 font-bold mb-1">The Critical Limitation:</strong>
                <p className="text-amber-800 leading-relaxed">
                  Cannot determine if tab order is logical, if error messages are helpful, or if a modal traps keyboard focus.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-[#171717]">
            ⚡ Run automatically in every pull request and build pipeline.
          </div>
        </div>

        {/* Right Half: Manual Human Testing */}
        <div className="p-6 rounded-2xl border-2 border-[#171717] bg-white shadow-[5px_5px_0px_#171717] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#171717] mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#FFF8EE] rounded-lg border border-[#171717]">
                  <UserCheck className="w-5 h-5 text-[#15803D]" />
                </div>
                <div>
                  <h3 className="font-black text-base uppercase text-[#171717]">
                    2. Manual Verification
                  </h3>
                  <span className="text-xs text-[#525252] font-semibold">The 60-Second Keyboard Smoke Test</span>
                </div>
              </div>
              <span className="text-xs font-mono font-black px-2.5 py-1 rounded bg-[#F0FDF4] border border-[#15803D] text-[#15803D]">
                ~60% Coverage
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                <strong className="block text-emerald-950 font-bold mb-1">What It Verifies:</strong>
                <p className="text-emerald-900 leading-relaxed">
                  Disconnect the mouse for 60 seconds: Can you see your focus ring? Can you tab through forms, hit Enter, and close modals with Escape?
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block text-[#171717] font-bold mb-1">Screen Reader Smoke Check:</strong>
                <p className="text-[#525252] leading-relaxed">
                  Turn on VoiceOver (macOS / iOS) or NVDA (Windows) for 2 minutes to confirm natural speech announcements on critical flows.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-[#15803D]">
            ✓ Done by engineers and QA analysts before approving pull requests.
          </div>
        </div>

      </div>

      {/* The 40/60 Golden Rule Banner */}
      <div className="bg-[#FFF4E5] border-2 border-[#171717] rounded-xl p-3.5 shadow-[3px_3px_0px_#171717] flex items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-[#F28C28] shrink-0" />
        <p className="text-xs sm:text-sm font-black text-[#171717]">
          The Golden Rule: Automated tests are your baseline guardrails. Manual keyboard testing guarantees human usability.
        </p>
      </div>

    </div>
  );
};
