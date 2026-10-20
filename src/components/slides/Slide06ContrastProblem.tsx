import React from 'react';
import { Volume2, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

export const Slide06ContrastProblem: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          DOM ARCHITECTURE • ACCESSIBILITY TREE (AOM)
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          SEMANTIC HTML & FORM LABELS
        </h1>
        <p className="text-sm font-bold text-[#525252]">
          Assistive technology reads the Accessibility Object Model (AOM), not your CSS.
        </p>
      </div>

      {/* Screen Reader Voice Simulation (High-Impact Visual Contrast) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        
        <div className="bg-red-50 border-2 border-[#B91C1C] rounded-xl p-4 shadow-[3px_3px_0px_#B91C1C]">
          <div className="flex items-center gap-2 mb-1.5 text-red-800 font-black text-xs uppercase">
            <Volume2 className="w-4 h-4 text-red-600" />
            <span>VoiceOver on AI Default Code</span>
          </div>
          <div className="bg-white p-3 rounded-lg border-2 border-red-300 font-mono text-sm font-bold text-red-950">
            🔊 "Edit text, blank."
          </div>
          <p className="text-[11px] text-red-700 mt-2 font-semibold">
            ❌ No label connection. The user has no idea what to type.
          </p>
        </div>

        <div className="bg-emerald-50 border-2 border-[#15803D] rounded-xl p-4 shadow-[3px_3px_0px_#15803D]">
          <div className="flex items-center gap-2 mb-1.5 text-emerald-800 font-black text-xs uppercase">
            <Volume2 className="w-4 h-4 text-emerald-600" />
            <span>VoiceOver on Semantic Code</span>
          </div>
          <div className="bg-white p-3 rounded-lg border-2 border-emerald-300 font-mono text-sm font-bold text-emerald-950">
            🔊 "Full Name, required, edit text."
          </div>
          <p className="text-[11px] text-emerald-800 mt-2 font-semibold">
            ✓ Screen reader announces field name, purpose, and required state.
          </p>
        </div>

      </div>

      {/* Bordered Code Panels Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        
        {/* Incorrect HTML Example */}
        <div className="bg-white border-2 border-[#B91C1C] rounded-2xl shadow-[4px_4px_0px_#B91C1C] p-4 sm:p-5">
          <div className="flex items-center justify-between pb-2 border-b-2 border-red-200 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#B91C1C]">
              <XCircle className="w-4 h-4" />
              <span>AI Anti-Pattern (Visual Only)</span>
            </div>
            <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">
              Broken
            </span>
          </div>

          <pre className="font-mono text-xs text-red-900 bg-red-50/50 p-3 rounded-xl border border-red-200 overflow-x-auto leading-relaxed">
            <code>{`<!-- No programmatic label link -->
<span class="label">Full Name</span>
<input type="text" placeholder="Alex" />

<!-- DIV button is ignored by Tab key -->
<div class="btn" onclick="submit()">
  Save Profile
</div>`}</code>
          </pre>

          <p className="text-[11px] text-red-700 font-bold mt-2">
            • Clicking the label text does NOT focus the input.<br />
            • The button cannot be focused or pressed with Space/Enter.
          </p>
        </div>

        {/* Corrected HTML Example */}
        <div className="bg-white border-2 border-[#15803D] rounded-2xl shadow-[4px_4px_0px_#15803D] p-4 sm:p-5">
          <div className="flex items-center justify-between pb-2 border-b-2 border-emerald-200 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#15803D]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Standard (Semantic & Accessible)</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Standard
            </span>
          </div>

          <pre className="font-mono text-xs text-emerald-950 bg-emerald-50/50 p-3 rounded-xl border border-emerald-200 overflow-x-auto leading-relaxed">
            <code>{`<!-- Explicit htmlFor to id binding -->
<label for="fullName">Full Name *</label>
<input id="fullName" name="fullName" required />

<!-- Native button handles keyboards for free -->
<button type="submit" class="btn">
  Save Profile
</button>`}</code>
          </pre>

          <p className="text-[11px] text-emerald-800 font-bold mt-2">
            • Clicking the label expands touch target and focuses input.<br />
            • Native button automatically supports Tab focus & Space/Enter.
          </p>
        </div>

      </div>

      {/* Summary Box */}
      <div className="bg-[#FFF4E5] border-2 border-[#171717] rounded-xl p-3 shadow-[2px_2px_0px_#171717] flex items-center gap-2.5">
        <ShieldCheck className="w-5 h-5 text-[#F28C28] shrink-0" />
        <p className="text-xs text-[#171717] font-black">
          Engineering Rule: Use semantic HTML tags first. They provide keyboard and screen reader accessibility for free.
        </p>
      </div>

    </div>
  );
};
