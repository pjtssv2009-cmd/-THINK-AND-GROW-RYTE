import React, { useState } from 'react';
import { usePresentation } from '../../context/GameStateContext';
import { Bug } from 'lucide-react';

interface BugMarker {
  id: number;
  label: string;
  name: string;
  wcag: string;
  problem: string;
  fix: string;
  positionClass: string;
}

export const Slide03BugLab: React.FC = () => {
  const { markItemExplored } = usePresentation();

  const [activeBugId, setActiveBugId] = useState<number | null>(1); // Default open 1st bug for immediate clarity
  const [revealAll, setRevealAll] = useState(false);

  const bugMarkers: BugMarker[] = [
    {
      id: 1,
      label: 'Bug 01',
      name: 'Unassociated Label',
      wcag: 'WCAG 1.3.1 (Level A)',
      problem: 'Rendered as a styled <span> instead of a semantic <label for="fullName">. Screen readers cannot announce the field name.',
      fix: 'Use <label htmlFor="fullName"> and assign id="fullName" to the input.',
      positionClass: 'top-[75px] right-4'
    },
    {
      id: 2,
      label: 'Bug 02',
      name: 'Faint 1.8:1 Contrast',
      wcag: 'WCAG 1.4.3 (Level AA)',
      problem: 'Helper copy is set to #CBD5E1 on white (1.8:1 ratio), completely unreadable under sunlight or for users with low vision.',
      fix: 'Change token to #475569 to reach a compliant 5.4:1 contrast ratio.',
      positionClass: 'top-[160px] right-4'
    },
    {
      id: 3,
      label: 'Bug 03',
      name: 'Vague Error Text',
      wcag: 'WCAG 3.3.1 & 3.3.3',
      problem: 'Generic "Invalid input" error provides zero actionable advice on what is wrong or how to recover.',
      fix: 'Provide descriptive error instructions linked via aria-describedby.',
      positionClass: 'top-[240px] right-4'
    },
    {
      id: 4,
      label: 'Bug 04',
      name: 'Color-Only Error',
      wcag: 'WCAG 1.4.1 (Level A)',
      problem: 'Error state signaled solely by a red border without an icon or text explanation, failing colorblind users.',
      fix: 'Pair color with an alert icon, bold text label, and role="alert".',
      positionClass: 'top-[315px] right-4'
    },
    {
      id: 5,
      label: 'Bug 05',
      name: 'Vanished Focus Ring',
      wcag: 'WCAG 2.4.7 (Level AA)',
      problem: 'CSS applies "outline: none" to the submit button. Keyboard navigators lose track of their position.',
      fix: 'Implement custom high-contrast :focus-visible rings with 2px offset.',
      positionClass: 'bottom-4 right-4'
    }
  ];

  const handleSelectBug = (id: number) => {
    setActiveBugId(id === activeBugId ? null : id);
    markItemExplored(`buglab-${id}`);
  };

  const activeBug = bugMarkers.find(b => b.id === activeBugId);

  return (
    <div className="w-full max-w-6xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5B5CE2] bg-[#EEF0FD] px-3 py-1 rounded-full border border-[#5B5CE2]/20">
            INSPECTION LAB • THE 5 FLAWS
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#172033] tracking-tight mt-1.5 uppercase">
            FIVE BUGS. ONE INTERFACE.
          </h1>
          <p className="text-xs sm:text-sm text-[#667085]">
            Click any pin to inspect how AI prompt defaults create silent compliance barriers.
          </p>
        </div>

        {/* Toggle Reveal All button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRevealAll(prev => !prev)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white border border-[#E4E7EC] text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
          >
            {revealAll ? 'Focus Single Pin' : 'Show All Annotations'}
          </button>
        </div>
      </div>

      {/* Main Workspace: Form Mockup + Interactive Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Realistic Contact Form Browser Mockup with floating pins */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E4E7EC] shadow-card overflow-hidden">
          
          {/* Browser Bar */}
          <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">
                contact-form.component.tsx
              </span>
            </div>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
              5 Defect Markers
            </span>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-7 space-y-4">
            
            {/* Field 1: Missing Label */}
            <div className={`p-2.5 rounded-2xl border transition-all ${
              activeBugId === 1 || revealAll ? 'border-red-400 bg-red-50/20 ring-2 ring-red-100' : 'border-transparent'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">
                  Full Name (styled &lt;span&gt;)
                </span>
                <button
                  type="button"
                  onClick={() => handleSelectBug(1)}
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all ${
                    activeBugId === 1 
                      ? 'bg-red-600 text-white border-red-600 shadow-xs' 
                      : 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200'
                  }`}
                >
                  Pin #1: Label
                </button>
              </div>
              <input
                type="text"
                defaultValue="Jordan Lee"
                readOnly
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
              />
            </div>

            {/* Field 2: Low Contrast Helper */}
            <div className={`p-2.5 rounded-2xl border transition-all ${
              activeBugId === 2 || revealAll ? 'border-amber-400 bg-amber-50/20 ring-2 ring-amber-100' : 'border-transparent'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">Work Email</span>
                <button
                  type="button"
                  onClick={() => handleSelectBug(2)}
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all ${
                    activeBugId === 2 
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs' 
                      : 'bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200'
                  }`}
                >
                  Pin #2: Contrast
                </button>
              </div>
              <input
                type="email"
                defaultValue="jordan@company.com"
                readOnly
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50/50"
              />
              <p className="text-[11px] text-[#CBD5E1] mt-1 font-medium select-none">
                We'll only notify you about product release notes. (1.8:1)
              </p>
            </div>

            {/* Field 3: Vague Error */}
            <div className={`p-2.5 rounded-2xl border transition-all ${
              activeBugId === 3 || revealAll ? 'border-red-400 bg-red-50/20 ring-2 ring-red-100' : 'border-transparent'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">Target Region</span>
                <button
                  type="button"
                  onClick={() => handleSelectBug(3)}
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all ${
                    activeBugId === 3 
                      ? 'bg-red-600 text-white border-red-600 shadow-xs' 
                      : 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200'
                  }`}
                >
                  Pin #3: Vague Error
                </button>
              </div>
              <div className="px-3 py-2 rounded-xl border border-red-400 text-xs bg-white text-slate-700">
                US-East (Virginia)
              </div>
              <span className="text-[10px] font-medium text-red-500 mt-1 block">
                Invalid input.
              </span>
            </div>

            {/* Field 4: Color-Only Error */}
            <div className={`p-2.5 rounded-2xl border transition-all ${
              activeBugId === 4 || revealAll ? 'border-red-400 bg-red-50/20 ring-2 ring-red-100' : 'border-transparent'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-700">Detailed Message</span>
                <button
                  type="button"
                  onClick={() => handleSelectBug(4)}
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all ${
                    activeBugId === 4 
                      ? 'bg-red-600 text-white border-red-600 shadow-xs' 
                      : 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200'
                  }`}
                >
                  Pin #4: Color Only
                </button>
              </div>
              <textarea
                rows={2}
                defaultValue="System alert occurred during sync..."
                readOnly
                className="w-full px-3 py-2 rounded-xl border-2 border-red-500 text-xs bg-white resize-none"
              />
            </div>

            {/* Field 5: Vanished Focus Outline on Button */}
            <div className={`p-2.5 rounded-2xl border transition-all ${
              activeBugId === 5 || revealAll ? 'border-[#5B5CE2] bg-indigo-50/20 ring-2 ring-indigo-100' : 'border-transparent'
            }`}>
              <div className="flex items-center justify-between">
                <div className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xs">
                  Submit Feedback (outline: none)
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectBug(5)}
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all ${
                    activeBugId === 5 
                      ? 'bg-[#5B5CE2] text-white border-[#5B5CE2] shadow-xs' 
                      : 'bg-indigo-100 text-[#5B5CE2] border-indigo-200 hover:bg-indigo-200'
                  }`}
                >
                  Pin #5: Focus Ring
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Right: Inspection Card (Progressively Reveals Explanations) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-card p-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Pin Inspector
              </span>
              {activeBug && (
                <span className="text-[11px] font-mono text-[#5B5CE2] font-semibold bg-[#EEF0FD] px-2 py-0.5 rounded">
                  {activeBug.wcag}
                </span>
              )}
            </div>

            {activeBug ? (
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono font-bold text-red-600 uppercase mb-0.5">
                    {activeBug.label}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {activeBug.name}
                  </h3>
                </div>

                <div className="bg-red-50/60 p-3.5 rounded-2xl border border-red-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-800 block mb-1">
                    The Hidden Failure
                  </span>
                  <p className="text-xs text-red-950 leading-relaxed">
                    {activeBug.problem}
                  </p>
                </div>

                <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                    The Accessible Fix
                  </span>
                  <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                    {activeBug.fix}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 italic">
                  💡 Select another pin to inspect other defects.
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-slate-400 space-y-2">
                <Bug className="w-8 h-8 mx-auto text-slate-300" />
                <p className="text-xs">Click any numbered pin on the left to inspect its root cause.</p>
              </div>
            )}
          </div>

          {/* Quick Summary Pill Bar */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-800 block mb-1">Presenter Key Insight:</strong>
            None of these 5 flaws trigger TypeScript or ESLint errors. Without manual scrutiny, they deploy directly into user workflows.
          </div>

        </div>

      </div>

    </div>
  );
};
