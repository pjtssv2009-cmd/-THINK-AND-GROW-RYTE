import React, { useState } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  MousePointer, 
  Keyboard, 
  Info
} from 'lucide-react';

export const SlideChallenge: React.FC = () => {
  const { awardPoints, isItemSolved } = useGameState();

  const [activeCard, setActiveCard] = useState<'tech' | 'fails' | 'verify' | null>('tech');
  const [testScenarioStep, setTestScenarioStep] = useState<'idle' | 'mouse_tested' | 'keyboard_tested'>('idle');

  const handleCardClick = (card: 'tech' | 'fails' | 'verify') => {
    setActiveCard(card);
    if (!isItemSolved(`challenge-${card}`)) {
      awardPoints(5, `Explored "${card.toUpperCase()}" insight!`, `challenge-${card}`);
    }
  };

  const handleTestMouse = () => {
    setTestScenarioStep('mouse_tested');
  };

  const handleTestKeyboard = () => {
    setTestScenarioStep('keyboard_tested');
    if (!isItemSolved('scenario-keyboard-tested')) {
      awardPoints(10, 'Discovered keyboard barrier in the scenario!', 'scenario-keyboard-tested');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6 md:py-8 px-4 flex flex-col">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#5B5CE2] bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
          The AI Paradox
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#172033] tracking-tight mt-3 mb-2">
          Functional Code ≠ Accessible Software
        </h1>
        <p className="text-sm sm:text-base text-[#64748B]">
          AI models output code that compiles and passes basic smoke tests. But who is silently left out?
        </p>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        
        {/* Card 1: Works Technically */}
        <button
          type="button"
          onClick={() => handleCardClick('tech')}
          className={`text-left p-5 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden focus-visible:ring-4 focus-visible:ring-indigo-300 ${
            activeCard === 'tech'
              ? 'bg-white border-emerald-500 shadow-lg scale-[1.02]'
              : 'bg-white/80 border-[#E2E8F0] hover:border-emerald-300 hover:bg-white shadow-xs'
          }`}
          aria-pressed={activeCard === 'tech'}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
            <CheckCircle className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-[#172033] mb-1 flex items-center justify-between">
            <span>1. Works Technically</span>
            {activeCard === 'tech' && <span className="text-xs text-emerald-600 font-semibold">Active</span>}
          </h2>
          <p className="text-xs text-[#64748B] leading-relaxed">
            TypeScript compiles, React renders without console errors, and the layout looks modern on the developer's laptop.
          </p>

          {activeCard === 'tech' && (
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-emerald-900 bg-emerald-50/70 p-3 rounded-xl animate-pop">
              <strong className="block font-semibold mb-1">What the prompt delivered:</strong>
              Clean Tailwind classes, fast render speed, and sleek design. On paper, it looks like a 10/10 deliverable.
            </div>
          )}
        </button>

        {/* Card 2: Fails Some Users */}
        <button
          type="button"
          onClick={() => handleCardClick('fails')}
          className={`text-left p-5 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden focus-visible:ring-4 focus-visible:ring-indigo-300 ${
            activeCard === 'fails'
              ? 'bg-white border-red-500 shadow-lg scale-[1.02]'
              : 'bg-white/80 border-[#E2E8F0] hover:border-red-300 hover:bg-white shadow-xs'
          }`}
          aria-pressed={activeCard === 'fails'}
        >
          <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-3">
            <XCircle className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-[#172033] mb-1 flex items-center justify-between">
            <span>2. Fails Some Users</span>
            {activeCard === 'fails' && <span className="text-xs text-red-600 font-semibold">Active</span>}
          </h2>
          <p className="text-xs text-[#64748B] leading-relaxed">
            Screen reader users hear "edit text blank" without field names; keyboard users lose focus indicator; text is unreadable in sunlight.
          </p>

          {activeCard === 'fails' && (
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-red-900 bg-red-50/70 p-3 rounded-xl animate-pop">
              <strong className="block font-semibold mb-1">The Invisible Wall:</strong>
              15% of the global population lives with some form of disability. Removing keyboard support or color contrast turns a feature into a blocker.
            </div>
          )}
        </button>

        {/* Card 3: Needs Verification */}
        <button
          type="button"
          onClick={() => handleCardClick('verify')}
          className={`text-left p-5 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden focus-visible:ring-4 focus-visible:ring-indigo-300 ${
            activeCard === 'verify'
              ? 'bg-white border-amber-500 shadow-lg scale-[1.02]'
              : 'bg-white/80 border-[#E2E8F0] hover:border-amber-300 hover:bg-white shadow-xs'
          }`}
          aria-pressed={activeCard === 'verify'}
        >
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-[#172033] mb-1 flex items-center justify-between">
            <span>3. Needs Verification</span>
            {activeCard === 'verify' && <span className="text-xs text-amber-600 font-semibold">Active</span>}
          </h2>
          <p className="text-xs text-[#64748B] leading-relaxed">
            Automated linters catch ~30% of problems. Human engineering verification is essential to ensure real-world usability.
          </p>

          {activeCard === 'verify' && (
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-amber-900 bg-amber-50/70 p-3 rounded-xl animate-pop">
              <strong className="block font-semibold mb-1">Engineering Takeaway:</strong>
              Vibe coding creates prototypes instantly. Our job as senior engineers and product builders is auditing what the model forgot.
            </div>
          )}
        </button>

      </div>

      {/* Interactive Scenario Section */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-md p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Interactive Micro-Scenario
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              "The form works with a mouse. What happens when someone uses only a keyboard?"
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleTestMouse}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                testScenarioStep === 'mouse_tested'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <MousePointer className="w-3.5 h-3.5" />
              <span>Simulate Mouse Click</span>
            </button>
            <button
              type="button"
              onClick={handleTestKeyboard}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                testScenarioStep === 'keyboard_tested'
                  ? 'bg-red-50 border-red-300 text-red-800 font-bold ring-2 ring-red-400'
                  : 'bg-indigo-50 border-indigo-200 text-[#5B5CE2] hover:bg-indigo-100'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>Simulate Tab Key</span>
            </button>
          </div>
        </div>

        {/* Simulation Sandbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Left: Simulated Form Snippet */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
            <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
              <span>AI-Generated Action Component</span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200">div onClick</span>
            </div>

            {/* Simulated button made with div onClick */}
            <div 
              role="presentation"
              className={`p-3 rounded-xl border text-center transition-all ${
                testScenarioStep === 'mouse_tested'
                  ? 'bg-emerald-100/60 border-emerald-400 text-emerald-900 shadow-sm'
                  : testScenarioStep === 'keyboard_tested'
                  ? 'border-dashed border-red-300 bg-red-50/50 text-slate-400'
                  : 'bg-white border-slate-300 text-slate-700'
              }`}
            >
              <div className="text-sm font-semibold">
                Submit Feedback (Div)
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {`<div onClick={handleSubmit}>...</div>`}
              </div>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Click the simulation buttons above to test user interaction modes.</span>
            </div>
          </div>

          {/* Right: Diagnosis Result */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200">
            {testScenarioStep === 'idle' && (
              <div className="text-center py-6 text-slate-500">
                <MousePointer className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs">
                  Select either "Simulate Mouse Click" or "Simulate Tab Key" to inspect behavior.
                </p>
              </div>
            )}

            {testScenarioStep === 'mouse_tested' && (
              <div className="space-y-2 animate-pop">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Mouse Cursor: Form Submitted!</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The click handler fired immediately. The engineer concludes: <em>"Looks good to me, ready to deploy!"</em>
                </p>
                <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  ⚠️ Danger: The developer only tested with a pointer device. They have zero visibility into keyboard accessibility.
                </div>
              </div>
            )}

            {testScenarioStep === 'keyboard_tested' && (
              <div className="space-y-2 animate-pop">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <span>Keyboard Navigator: Completely Trapped & Skipped!</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Because a <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-red-600">&lt;div&gt;</code> was used without <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">tabIndex="0"</code> or Enter key listeners, the browser skips it completely.
                </p>
                <div className="text-xs text-indigo-900 bg-indigo-50 p-2.5 rounded-lg border border-indigo-200 font-medium">
                  🎯 <strong>The Golden Rule:</strong> If it performs an action, use a semantic <code className="font-mono font-bold">&lt;button&gt;</code>. You get keyboard focus, Enter/Space activation, and screen reader roles automatically!
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
