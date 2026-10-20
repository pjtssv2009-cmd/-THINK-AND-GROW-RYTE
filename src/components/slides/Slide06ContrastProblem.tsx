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
        <h1 className="text-2xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          SEMANTIC HTML & FORM LABELS
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-[#525252]">
          Assistive technologies do not inspect CSS styles or pixel coordinates. They communicate with the browser's Accessibility Object Model (AOM).
        </p>
      </div>

      {/* Screen Reader Voice Simulation Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        <div className="bg-red-50/70 border-2 border-[#B91C1C] rounded-xl p-4 shadow-[3px_3px_0px_#B91C1C]">
          <div className="flex items-center gap-2 mb-2 text-red-800 font-black text-xs uppercase">
            <Volume2 className="w-4 h-4 text-red-600" />
            <span>VoiceOver on AI Default Code</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-red-300 font-mono text-xs text-red-950">
            🔊 "Edit text, blank."
          </div>
          <p className="text-[11px] text-red-700 mt-2 font-medium">
            ❌ The user has no idea what this field is asking for. The label is just visual paint.
          </p>
        </div>

        <div className="bg-emerald-50/70 border-2 border-[#15803D] rounded-xl p-4 shadow-[3px_3px_0px_#15803D]">
          <div className="flex items-center gap-2 mb-2 text-emerald-800 font-black text-xs uppercase">
            <Volume2 className="w-4 h-4 text-emerald-600" />
            <span>VoiceOver on Semantic Accessible Code</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-emerald-300 font-mono text-xs text-emerald-950 font-bold">
            🔊 "Full Name, required, edit text."
          </div>
          <p className="text-[11px] text-emerald-800 mt-2 font-medium">
            ✓ The screen reader announces the field name, required status, and input type immediately.
          </p>
        </div>

      </div>

      {/* Bordered Code Panels Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        
        {/* Incorrect HTML Example */}
        <div className="bg-white border-2 border-[#B91C1C] rounded-2xl shadow-[4px_4px_0px_#B91C1C] p-5">
          <div className="flex items-center justify-between pb-3 border-b-2 border-red-200 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#B91C1C]">
              <XCircle className="w-4 h-4" />
              <span>Incorrect: Visual-Only Markup</span>
            </div>
            <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">
              AI Anti-Pattern
            </span>
          </div>

          <pre className="font-mono text-xs text-red-900 bg-red-50/50 p-4 rounded-xl border border-red-200 overflow-x-auto leading-relaxed">
            <code>{`<!-- No programmatic label link -->
<span class="label">Full Name</span>
<input type="text" placeholder="Alex Chen" />

<!-- Clickable DIV is invisible to keyboards -->
<div class="submit-btn" onclick="submitForm()">
  Save Profile
</div>`}</code>
          </pre>

          <ul className="mt-4 space-y-1.5 text-[11px] text-red-800 font-medium">
            <li>• <code>&lt;span&gt;</code> has zero accessibility association with the input.</li>
            <li>• Clicking the text label does not focus the input cursor.</li>
            <li>• <code>&lt;div&gt;</code> button cannot be focused with <kbd className="px-1 border border-red-300 rounded font-mono">Tab</kbd> or activated with <kbd className="px-1 border border-red-300 rounded font-mono">Enter</kbd>.</li>
          </ul>
        </div>

        {/* Corrected HTML Example */}
        <div className="bg-white border-2 border-[#15803D] rounded-2xl shadow-[4px_4px_0px_#15803D] p-5">
          <div className="flex items-center justify-between pb-3 border-b-2 border-emerald-200 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#15803D]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Corrected: Semantic Accessible Markup</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Standard
            </span>
          </div>

          <pre className="font-mono text-xs text-emerald-950 bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 overflow-x-auto leading-relaxed">
            <code>{`<!-- Programmatic binding via for & id -->
<label for="fullName" class="label">Full Name *</label>
<input id="fullName" name="fullName" type="text" required />

<!-- Native semantic button handles keyboards -->
<button type="submit" class="submit-btn">
  Save Profile
</button>`}</code>
          </pre>

          <ul className="mt-4 space-y-1.5 text-[11px] text-emerald-800 font-medium">
            <li>• <code>for="fullName"</code> explicitly binds to <code>id="fullName"</code> in the AOM.</li>
            <li>• Clicking the label automatically activates and focuses the input.</li>
            <li>• Native <code>&lt;button&gt;</code> is reachable via Tab and triggered with Space/Enter.</li>
          </ul>
        </div>

      </div>

      {/* Summary Box */}
      <div className="bg-[#FFF4E5] border-2 border-[#171717] rounded-xl p-3.5 shadow-[2px_2px_0px_#171717] flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-[#F28C28] shrink-0" />
        <p className="text-xs text-[#171717] font-semibold leading-relaxed">
          <strong>The Golden Rule:</strong> Always use the most semantic HTML tag available before reaching for ARIA or custom div handlers.
        </p>
      </div>

    </div>
  );
};
