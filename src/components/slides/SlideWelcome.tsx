import React, { useState } from 'react';
import { useGameState } from '../../context/GameStateContext';
import { BRANDING } from '../../constants/branding';
import { 
  Clock, 
  Target, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Bug, 
  Search, 
  Wrench, 
  Zap, 
  UserCheck, 
  CheckCircle2,
  Edit2,
  Check
} from 'lucide-react';

export const SlideWelcome: React.FC = () => {
  const { 
    goToNextSlide, 
    presenterName, 
    setPresenterName
  } = useGameState();

  const [isEditingPresenter, setIsEditingPresenter] = useState(false);
  const [tempPresenter, setTempPresenter] = useState(presenterName);
  const [showBriefingModal, setShowBriefingModal] = useState(false);

  const handleSavePresenter = () => {
    if (tempPresenter.trim()) {
      setPresenterName(tempPresenter.trim());
    }
    setIsEditingPresenter(false);
  };

  const handleStartMission = () => {
    setShowBriefingModal(false);
    goToNextSlide();
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6 md:py-10 px-4 flex flex-col items-center">
      
      {/* Top Program Pill */}
      <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-xs mb-6">
        <img 
          src={BRANDING.LOGO_SRC} 
          alt={BRANDING.LOGO_ALT}
          className="w-5 h-5 object-contain rounded"
        />
        <span className="text-xs font-bold uppercase tracking-wider text-[#172033]">
          {BRANDING.PROGRAM_NAME}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#5B5CE2]" />
        <span className="text-xs text-[#64748B] font-medium">
          {BRANDING.SUBTITLE}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#172033] tracking-tight text-center max-w-4xl leading-tight mb-4">
        AI Can Build It. <br className="hidden sm:block" />
        <span className="text-[#5B5CE2]">But Can Everyone Use It?</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-[#64748B] text-center max-w-2xl leading-relaxed mb-8">
        {BRANDING.PRESENTATION_SUBTITLE}
      </p>

      {/* Presenter Attribution Bar with inline edit */}
      <div className="flex items-center gap-2 mb-8 bg-white px-4 py-2 rounded-xl border border-[#E2E8F0] shadow-xs text-xs sm:text-sm">
        <UserCheck className="w-4 h-4 text-[#5B5CE2] shrink-0" />
        <span className="text-slate-500 font-medium">Presenter:</span>
        {isEditingPresenter ? (
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={tempPresenter}
              onChange={(e) => setTempPresenter(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSavePresenter();
                if (e.key === 'Escape') setIsEditingPresenter(false);
              }}
              className="px-2 py-0.5 border border-[#5B5CE2] rounded font-semibold text-slate-800 text-xs focus:outline-none"
              autoFocus
            />
            <button
              type="button"
              onClick={handleSavePresenter}
              className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"
              aria-label="Save presenter name"
            >
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">{presenterName}</span>
            <button
              type="button"
              onClick={() => {
                setTempPresenter(presenterName);
                setIsEditingPresenter(true);
              }}
              className="text-slate-400 hover:text-[#5B5CE2] p-0.5 rounded transition-colors"
              title="Edit presenter name"
              aria-label="Edit presenter name"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* Illustrated Mission Hero Card */}
      <div className="w-full bg-white rounded-3xl border border-[#E2E8F0] shadow-xl p-6 sm:p-8 mb-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B5CE2] via-[#0EA5E9] to-[#16A34A]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Mission Stats */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Clock className="w-3.5 h-3.5" />
                {BRANDING.SESSION_DURATION} Session
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-[#5B5CE2] border border-indigo-200">
                <Target className="w-3.5 h-3.5" />
                4 Active Missions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                <Award className="w-3.5 h-3.5" />
                100+ Points Available
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#172033]">
                Your Mission Brief
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Modern AI code generators create production-looking web components in seconds. 
                Yet over <strong className="text-slate-800">96% of AI-generated forms</strong> silently violate accessibility standards. 
                Step inside the lab, diagnose critical failure points, and prove your engineering craftsmanship.
              </p>
            </div>

            {/* 4 Mission Milestones Preview */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Bug className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800">Demo A</div>
                  <div className="text-[11px] text-slate-500 truncate">The Bug Lab</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Search className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800">Demo B</div>
                  <div className="text-[11px] text-slate-500 truncate">A11y Detective</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#5B5CE2] flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800">Demo C</div>
                  <div className="text-[11px] text-slate-500 truncate">Fix The Bugs</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800">Demo D</div>
                  <div className="text-[11px] text-slate-500 truncate">Final Boss</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowBriefingModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white text-base font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-indigo-300"
              >
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                <span>Start Quest</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Modern Educational Illustration of website + magnifying glass + bug */}
          <div className="md:col-span-5 flex items-center justify-center p-4">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border border-indigo-100 p-6 flex flex-col justify-between shadow-inner">
              
              {/* Simulated UI Window */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">form.component.tsx</span>
                </div>

                <div className="space-y-2">
                  <div className="h-3 w-1/3 bg-slate-200 rounded" />
                  <div className="h-7 w-full bg-slate-50 border border-slate-200 rounded-lg flex items-center px-2">
                    <span className="text-[10px] text-slate-300">Placeholder (1.8:1)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="h-6 w-16 bg-slate-200 rounded-md" />
                  <span className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                    <Bug className="w-3 h-3" /> 5 Bugs Hidden
                  </span>
                </div>
              </div>

              {/* Magnifying Glass Overlap Badge */}
              <div className="self-center bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-indigo-200 shadow-xl flex items-center gap-3 animate-float-soft">
                <div className="w-10 h-10 rounded-xl bg-[#5B5CE2] text-white flex items-center justify-center shadow-md">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Accessibility Lens</div>
                  <div className="text-[11px] text-slate-500">Uncover what AI missed</div>
                </div>
              </div>

              {/* Bottom decorative stats */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 font-medium">
                <span>Think and Grow RYTE</span>
                <span className="text-[#5B5CE2] font-semibold">15 Min Hands-on</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Mission Briefing Modal */}
      {showBriefingModal && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-pop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="briefing-title"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-[#5B5CE2] flex items-center justify-center shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B5CE2]">
                  {BRANDING.PROGRAM_NAME}
                </span>
                <h3 id="briefing-title" className="text-xl font-bold text-[#172033]">
                  Mission Directive Initialized
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              You are about to embark on an interactive journey through an AI-generated application. 
              Your objectives:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-800 block">Spot 5 Hidden Flaws</strong>
                  Investigate contrast, labels, focus rings, and errors in Demo A.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-800 block">Investigate Automated Audit Limits</strong>
                  Learn why 100% Lighthouse is not 100% accessible in Demo B.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#5B5CE2] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-800 block">Apply Code Fixes in Real Time</strong>
                  Observe live side-by-side accessible transformations in Demo C.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleStartMission}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 focus-visible:ring-4 focus-visible:ring-indigo-300"
            >
              <span>Begin Quest Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
