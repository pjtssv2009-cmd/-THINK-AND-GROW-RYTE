import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  MousePointer, 
  AlertTriangle
} from 'lucide-react';

export const Slide02RealityCheck: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const observations = [
    {
      id: 1,
      title: 'Looks Correct',
      tag: 'Visual Impression',
      description: 'The AI model generated polished Tailwind components with sleek borders, modern typography, and clean layout balance.',
      color: 'border-emerald-200 bg-emerald-50/50 text-emerald-900',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 2,
      title: 'Works with a Mouse',
      tag: 'Developer Bias',
      description: 'A developer clicks with a trackpad, verifies that onSubmit triggers, and closes the pull request assuming it is complete.',
      color: 'border-blue-200 bg-blue-50/50 text-blue-900',
      icon: <MousePointer className="w-4 h-4 text-[#3B82F6]" />
    },
    {
      id: 3,
      title: 'Fails in Real-World Usage',
      tag: 'Accessibility Barrier',
      description: 'Zero keyboard focus rings, unassociated input labels, and 1.8:1 faint text block screen readers and assistive devices.',
      color: 'border-red-200 bg-red-50/50 text-red-900',
      icon: <XCircle className="w-4 h-4 text-red-600" />
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
          THE REALITY CHECK • ANALYSIS
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#172033] tracking-tight mt-2.5 mb-2 uppercase">
          FUNCTIONAL DOESN'T MEAN USABLE.
        </h1>
        <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
          AI optimizes for rapid visual delivery. But what passes a trackpad test often completely fails human assistive criteria.
        </p>
      </div>

      {/* Large Split-Screen Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Left: What the Developer Sees (Looks Impressive) */}
        <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-card p-6 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Left: AI-Generated Output
              </span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
              Compiles & Looks Modern
            </span>
          </div>

          {/* Realistic Form Preview */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1">
                Project Name
              </span>
              <div className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 shadow-2xs">
                Accessibility Audit 2026
              </div>
            </div>

            <div>
              <span className="text-xs font-medium text-slate-700 block mb-1">
                Notification Channel
              </span>
              <div className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-[#CBD5E1] shadow-2xs">
                team@company.internal (faint preview)
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xs">
                Deploy Feature
              </div>
              <span className="text-[10px] text-slate-400 font-mono">
                Prompt: "Clean minimal card"
              </span>
            </div>
          </div>

          {/* Annotation note */}
          <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Passed 100% of syntactic linters and visual mock reviews.</span>
          </div>
        </div>

        {/* Right: What the Accessibility Inspection Reveals */}
        <div className="bg-white rounded-3xl border-2 border-red-200 shadow-card p-6 relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-red-100 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                Right: Accessibility Breakdown
              </span>
            </div>
            <span className="text-[10px] font-mono bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full border border-red-200 font-semibold">
              3 Silent Failures
            </span>
          </div>

          {/* Form Annotated with Callouts */}
          <div className="space-y-4">
            
            {/* Callout 1 */}
            <div 
              onMouseEnter={() => setActiveHighlight(1)}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-2.5 rounded-xl border transition-all ${
                activeHighlight === 1 ? 'border-red-500 bg-red-50/70' : 'border-red-200 bg-red-50/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">Project Name</span>
                <span className="text-[10px] font-bold text-red-600 bg-white px-2 py-0.5 rounded border border-red-300">
                  Callout #1: Missing &lt;label for&gt;
                </span>
              </div>
              <p className="text-[11px] text-red-800 leading-tight">
                Screen readers announce: <em>"Edit text, blank"</em>. The field's purpose is completely lost.
              </p>
            </div>

            {/* Callout 2 */}
            <div 
              onMouseEnter={() => setActiveHighlight(2)}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-2.5 rounded-xl border transition-all ${
                activeHighlight === 2 ? 'border-amber-500 bg-amber-50/70' : 'border-amber-200 bg-amber-50/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">Notification Channel</span>
                <span className="text-[10px] font-bold text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-300">
                  Callout #2: 1.8:1 Contrast
                </span>
              </div>
              <p className="text-[11px] text-amber-900 leading-tight">
                Fails WCAG 4.5:1 minimum contrast. Washes out under normal office or sunlight glare.
              </p>
            </div>

            {/* Callout 3 */}
            <div 
              onMouseEnter={() => setActiveHighlight(3)}
              onMouseLeave={() => setActiveHighlight(null)}
              className={`p-2.5 rounded-xl border transition-all ${
                activeHighlight === 3 ? 'border-red-500 bg-red-50/70' : 'border-red-200 bg-red-50/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">Deploy Button</span>
                <span className="text-[10px] font-bold text-red-600 bg-white px-2 py-0.5 rounded border border-red-300">
                  Callout #3: outline: none
                </span>
              </div>
              <p className="text-[11px] text-red-800 leading-tight">
                Keyboard Tab focus becomes 100% invisible. Motor-impaired and keyboard users are stuck.
              </p>
            </div>

          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-red-700 flex items-center gap-1.5 font-medium">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span>Hover over any callout above to inspect the specific failure mode.</span>
          </div>
        </div>

      </div>

      {/* 3 Concise Observations at the Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {observations.map((obs) => (
          <div 
            key={obs.id}
            className={`p-4 rounded-2xl border ${obs.color} shadow-2xs transition-all`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                {obs.icon}
                <span className="text-xs font-bold">{obs.title}</span>
              </div>
              <span className="text-[10px] font-mono uppercase font-semibold opacity-75">
                {obs.tag}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed opacity-90">
              {obs.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};
