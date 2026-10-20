import React, { useState } from 'react';
import { 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Code2, 
  Sparkles
} from 'lucide-react';

export const Slide04InvisibleLabel: React.FC = () => {
  const [mode, setMode] = useState<'broken' | 'fixed'>('broken');

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
          BUG 01 DEEP DIVE • SEMANTIC ASSOCIATION
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#172033] tracking-tight mt-2 mb-2 uppercase">
          THE FIELD EXISTS. THE MEANING DOESN'T.
        </h1>
        <p className="text-xs sm:text-sm text-[#667085]">
          A sighted developer sees a label right above the input box. But assistive technology sees an anonymous void.
        </p>
      </div>

      {/* Interactive Mode Toggle: Broken vs Fixed */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="bg-slate-100 p-1 rounded-2xl flex items-center border border-slate-200">
          <button
            type="button"
            onClick={() => setMode('broken')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              mode === 'broken'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Broken AI Implementation
          </button>
          <button
            type="button"
            onClick={() => setMode('fixed')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              mode === 'fixed'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Corrected Semantic Implementation
          </button>
        </div>
      </div>

      {/* Main Grid: Magnified Field UI + Code/Impact Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left: Magnified UI Detail */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E4E7EC] shadow-card p-6 sm:p-8 relative overflow-hidden">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
              Magnified UI View (200% Zoom)
            </span>
            <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
              mode === 'broken'
                ? 'bg-red-50 text-red-700 border-red-200'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}>
              {mode === 'broken' ? 'Orphan Input' : 'Bound Label & Input'}
            </span>
          </div>

          {/* Form Field Demo */}
          <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {mode === 'broken' ? (
              <>
                <span className="text-sm font-semibold text-slate-800 block">
                  Full Name (Rendered as &lt;span&gt;)
                </span>
                <input
                  type="text"
                  placeholder="e.g. Alex Chen"
                  defaultValue="Alex Chen"
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white shadow-2xs"
                />
                <div className="text-[11px] font-mono text-red-600 flex items-center gap-1.5 pt-1">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>No htmlFor attribute. Clicking this text does not focus the input.</span>
                </div>
              </>
            ) : (
              <>
                <label 
                  htmlFor="full-name-demo"
                  className="text-sm font-bold text-slate-900 block cursor-pointer flex items-center gap-1.5"
                >
                  <span>Full Name</span>
                  <span className="text-red-500 font-bold">*</span>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-auto">
                    &lt;label htmlFor="full-name-demo"&gt;
                  </span>
                </label>
                <input
                  id="full-name-demo"
                  type="text"
                  placeholder="e.g. Alex Chen"
                  defaultValue="Alex Chen"
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-500 text-sm bg-white shadow-2xs focus:ring-4 focus:ring-emerald-100"
                />
                <div className="text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Programmatically linked. Clicking the label focuses the field.</span>
                </div>
              </>
            )}
          </div>

          {/* Simulated Screen Reader Audio Bubble */}
          <div className="mt-6 bg-[#172033] text-white p-4 rounded-2xl flex items-start gap-3 shadow-md">
            <div className={`p-2 rounded-xl shrink-0 ${
              mode === 'broken' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
            }`}>
              <Volume2 className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Screen Reader Voice Announcement (VoiceOver / NVDA)
              </span>
              <p className="text-xs font-mono font-bold text-slate-100">
                {mode === 'broken' 
                  ? '🔊 "Edit text, blank."' 
                  : '🔊 "Full Name, required, edit text. Alex Chen."'}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {mode === 'broken' 
                  ? 'The user has zero context regarding what information is requested in this field.' 
                  : 'The accessible name is spoken clearly upon keyboard focus or swipe gesture.'}
              </p>
            </div>
          </div>

        </div>

        {/* Right: Code Snippets & Engineering Explanations */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* HTML Snippet Comparison */}
          <div className="bg-[#172033] rounded-3xl p-6 text-white shadow-card">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#5B5CE2]" />
                <span className="text-xs font-mono font-bold text-slate-300">
                  {mode === 'broken' ? 'AI Generated (Broken)' : 'Semantic Fix (Accessible)'}
                </span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                mode === 'broken' ? 'bg-red-950 text-red-300' : 'bg-emerald-950 text-emerald-300'
              }`}>
                {mode === 'broken' ? '❌ Anti-pattern' : '✓ WCAG AA Compliant'}
              </span>
            </div>

            {mode === 'broken' ? (
              <pre className="text-xs font-mono text-red-300/90 overflow-x-auto leading-relaxed bg-slate-950/70 p-3.5 rounded-xl border border-red-500/30">
{`<!-- AI Output: Visual only, zero AOM association -->
<span class="text-sm font-semibold">Full Name</span>
<input type="text" placeholder="Alex Chen" />`}
              </pre>
            ) : (
              <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed bg-slate-950/70 p-3.5 rounded-xl border border-emerald-500/30">
{`<!-- Accessible Standard: Explicit programmatic link -->
<label for="fullName" class="text-sm font-bold">
  Full Name <span aria-hidden="true">*</span>
</label>
<input 
  id="fullName" 
  name="fullName" 
  type="text" 
  required 
/>`}
              </pre>
            )}
          </div>

          {/* Why It Matters Card */}
          <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5B5CE2]" />
              <span>Why This Happens in AI Prompts</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When prompt engineers ask for "clean, minimal UI", models optimize for layout tokens and often generate plain <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-red-600">&lt;span&gt;</code> tags without connecting attributes.
            </p>
            <div className="bg-indigo-50/70 p-3 rounded-2xl border border-indigo-100 text-xs text-indigo-950 font-medium">
              🎯 <strong>Engineering Takeaway:</strong> The HTML Accessibility Object Model (AOM) is invisible in visual renderers. Explicit <code className="font-mono font-bold">htmlFor</code> / <code className="font-mono font-bold">id</code> pairings are non-negotiable.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
