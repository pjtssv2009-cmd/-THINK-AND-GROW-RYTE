import React, { useState } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { INVESTIGATION_CARDS, SIMULATED_LIGHTHOUSE_DATA } from '../../constants/gameData';
import { 
  Search, 
  Keyboard, 
  ChevronDown, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Gauge, 
  Target
} from 'lucide-react';

export const SlideDetective: React.FC = () => {
  const { awardPoints, isItemSolved, completeMission } = useGameState();

  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({});
  const [selectedUnreachableId, setSelectedUnreachableId] = useState<string | null>(null);
  const [challengeFeedback, setChallengeFeedback] = useState<string | null>(null);

  const toggleReveal = (id: string) => {
    setRevealedCards(prev => ({ ...prev, [id]: !prev[id] }));
    if (!isItemSolved(`investigate-${id}`)) {
      awardPoints(10, `Investigated ${id.replace('inv-', '')} barrier!`, `investigate-${id}`);
    }
  };

  // Keyboard navigation challenge options
  const keyboardControls = [
    { id: 'btn-1', label: 'Primary Save Button', type: 'semantic-button', isDefective: false },
    { id: 'btn-2', label: 'Filter Dropdown (Div onClick)', type: 'div-fake-button', isDefective: true },
    { id: 'btn-3', label: 'Cancel Link', type: 'anchor', isDefective: false },
    { id: 'btn-4', label: 'Help Tooltip Button', type: 'semantic-button', isDefective: false },
  ];

  const handleSelectControl = (control: typeof keyboardControls[0]) => {
    setSelectedUnreachableId(control.id);
    if (control.isDefective) {
      setChallengeFeedback('correct');
      const awarded = awardPoints(15, 'Correctly identified unreachable <div> control!', 'detective-keyboard-challenge');
      if (awarded) {
        completeMission('demo-b', 10);
      }
    } else {
      setChallengeFeedback('incorrect');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4 md:py-6 px-4 flex flex-col">
      
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
            Mission 2 • 4 Minutes
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Demo B
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight mt-1">
          Accessibility Detective: Simulated Audit Workspace
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B]">
          Automated audits catch syntax errors, but human testing audits usability. Explore both below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: 3 Interactive Investigation Cards */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Search className="w-4 h-4 text-[#5B5CE2]" />
            <span>Interactive Diagnostic Vectors</span>
          </h2>

          <div className="space-y-3">
            {INVESTIGATION_CARDS.map((item) => {
              const isRevealed = !!revealedCards[item.id];
              const isSolved = isItemSolved(`investigate-${item.id}`);

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all shadow-xs overflow-hidden ${
                    isRevealed ? 'border-[#5B5CE2] ring-1 ring-indigo-200' : 'border-slate-200'
                  }`}
                >
                  {/* Card Header Summary */}
                  <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {item.category}
                        </span>
                        {isSolved && (
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Solved
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        <strong className="text-slate-700">Observed:</strong> {item.symptom}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleReveal(item.id)}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-indigo-50 hover:text-[#5B5CE2] text-slate-700 transition-colors shrink-0 flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-indigo-500"
                      aria-expanded={isRevealed}
                    >
                      <span>{isRevealed ? 'Collapse' : 'Investigate'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isRevealed ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Expandable Deep Diagnostic View */}
                  {isRevealed && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3 text-xs animate-pop">
                      
                      {/* Test participant can perform */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block font-semibold mb-1 flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-[#5B5CE2]" />
                          <span>How to Test for This:</span>
                        </strong>
                        <p className="text-slate-600 leading-relaxed">
                          {item.testInstruction}
                        </p>
                      </div>

                      {/* Underlying problem & impact */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <strong className="text-red-700 block font-semibold mb-1">
                            Underlying AI Bug:
                          </strong>
                          <p className="text-slate-600 leading-relaxed">
                            {item.underlyingIssue}
                          </p>
                        </div>

                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <strong className="text-indigo-900 block font-semibold mb-1">
                            Why it Matters to Real Users:
                          </strong>
                          <p className="text-slate-600 leading-relaxed">
                            {item.userImpact}
                          </p>
                        </div>
                      </div>

                      {/* Remedy */}
                      <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-emerald-950 font-medium">
                        <strong className="text-emerald-900 block font-bold mb-0.5">
                          Engineering Remedy:
                        </strong>
                        {item.remedy}
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Simulated Lighthouse Audit + Keyboard Challenge */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Simulated Lighthouse Report Panel */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-xs uppercase tracking-wider text-slate-800">
                  Lighthouse Audit
                </span>
              </div>
              <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                Simulated Illustration
              </span>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
              <div className="w-16 h-16 rounded-full border-4 border-amber-500 bg-white flex flex-col items-center justify-center shrink-0 shadow-xs">
                <span className="text-lg font-black text-slate-800 leading-none">
                  {SIMULATED_LIGHTHOUSE_DATA.score}
                </span>
                <span className="text-[8px] font-bold text-slate-400">/ 100</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Accessibility Score: Moderate
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Automated test checks passed 14 rules, but failed 2 critical criteria.
                </p>
              </div>
            </div>

            {/* Key takeaway alert */}
            <div className="bg-amber-50/70 border border-amber-200 p-3 rounded-xl text-[11px] text-amber-900 leading-relaxed mb-4 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">The Automation Trap:</strong>
                Even with a score of 100, Lighthouse cannot check whether tab focus order makes sense or if buttons can be triggered by keyboard!
              </div>
            </div>

            {/* Audit breakdown list */}
            <div className="space-y-1.5 text-xs">
              {SIMULATED_LIGHTHOUSE_DATA.audits.map((audit, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                  <span className="text-slate-700 text-[11px] truncate max-w-[210px]">
                    {audit.title}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                    audit.status === 'pass' 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : audit.status === 'fail'
                      ? 'bg-red-50 text-red-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}>
                    {audit.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Keyboard Navigation Challenge */}
          <div className="bg-white rounded-2xl border-2 border-indigo-200 shadow-md p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-[#5B5CE2] flex items-center justify-center font-bold text-xs">
                <Keyboard className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Manual Keyboard Audit Challenge
                </h3>
                <p className="text-[11px] text-slate-500">
                  One of the controls below is unreachable via Tab key. Click to diagnose which one:
                </p>
              </div>
            </div>

            {/* Controls playground */}
            <div className="grid grid-cols-2 gap-2 my-4">
              {keyboardControls.map((ctrl) => {
                const isSelected = selectedUnreachableId === ctrl.id;
                return (
                  <button
                    key={ctrl.id}
                    type="button"
                    onClick={() => handleSelectControl(ctrl)}
                    className={`p-3 rounded-xl border text-xs text-left font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
                      isSelected && ctrl.isDefective
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                        : isSelected && !ctrl.isDefective
                        ? 'bg-red-50 border-red-400 text-red-950'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-[10px] text-slate-400 font-mono mb-0.5">
                      {ctrl.type}
                    </div>
                    <div className="truncate">{ctrl.label}</div>
                  </button>
                );
              })}
            </div>

            {/* Diagnosis Result Message */}
            {challengeFeedback === 'correct' && (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 animate-pop">
                <div className="font-bold flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Brilliant Catch! +15 Points</span>
                </div>
                The "Filter Dropdown" was implemented as a <code className="bg-white px-1 py-0.5 rounded font-mono text-red-600">&lt;div onClick&gt;</code> without tabIndex or onKeyDown, making it invisible to keyboard navigators.
              </div>
            )}

            {challengeFeedback === 'incorrect' && (
              <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-xs text-red-900 animate-pop">
                <div className="font-bold flex items-center gap-1.5 mb-1">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <span>Not this one</span>
                </div>
                This control is a standard semantic element with built-in keyboard accessibility. Inspect the other controls!
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
