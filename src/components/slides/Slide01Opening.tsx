import React, { useState } from 'react';
import { usePresentation } from '../../context/GameStateContext';
import { BRANDING } from '../../constants/branding';
import { 
  Clock, 
  Target, 
  ArrowRight, 
  Search, 
  UserCheck, 
  Edit2, 
  Check, 
  Terminal
} from 'lucide-react';

export const Slide01Opening: React.FC = () => {
  const { goToNextSlide, presenterName, setPresenterName } = usePresentation();

  const [isEditingPresenter, setIsEditingPresenter] = useState(false);
  const [tempPresenter, setTempPresenter] = useState(presenterName);

  const handleSavePresenter = () => {
    if (tempPresenter.trim()) {
      setPresenterName(tempPresenter.trim());
    }
    setIsEditingPresenter(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-6 sm:py-10 px-4 flex flex-col items-center justify-center animate-slide-in">
      
      {/* Program Badge & Mission Tag */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4E7EC] shadow-2xs">
          <img 
            src={BRANDING.LOGO_SRC} 
            alt={BRANDING.LOGO_ALT}
            className="w-4 h-4 object-contain rounded"
          />
          <span className="text-xs font-black uppercase tracking-wider text-[#172033]">
            {BRANDING.PROGRAM_NAME}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-xs font-semibold text-[#667085]">
            {BRANDING.SUBTITLE}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EEF0FD] border border-[#5B5CE2]/20 text-[#5B5CE2] text-xs font-mono font-bold tracking-tight">
          <Target className="w-3.5 h-3.5" />
          <span>{BRANDING.MISSION_IDENTIFIER}</span>
        </div>
      </div>

      {/* Main Cinematic Title */}
      <div className="text-center max-w-4xl mb-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#172033] tracking-tight leading-[1.1] uppercase">
          AI CAN BUILD IT. <br />
          <span className="text-[#5B5CE2] inline-block mt-1">
            BUT CAN EVERYONE USE IT?
          </span>
        </h1>
      </div>

      {/* Editorial Subtitle */}
      <p className="text-base sm:text-xl text-[#667085] text-center max-w-2xl leading-relaxed mb-8 font-normal">
        {BRANDING.PRESENTATION_SUBTITLE}
      </p>

      {/* Presenter Name Badge */}
      <div className="flex items-center gap-2 mb-8 bg-white px-4 py-2 rounded-xl border border-[#E4E7EC] shadow-2xs text-xs sm:text-sm">
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

      {/* Elegant Browser-Interface Illustration with Hidden-Bug Indicators */}
      <div className="w-full max-w-3xl bg-white rounded-3xl border border-[#E4E7EC] shadow-float p-6 sm:p-8 mb-8 relative overflow-hidden bg-grid-dots">
        {/* Subtle accent border line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5B5CE2] via-[#3B82F6] to-[#16A34A]" />

        {/* Browser Mockup Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="text-xs font-mono text-slate-400 ml-2">
              localhost:3000/app/checkout
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-[#5B5CE2]" />
              <span>Prompt: "Modern minimal checkout form"</span>
            </span>
          </div>
        </div>

        {/* Browser Mockup Body with Subtle Radar Pins */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 space-y-4">
            {/* Form field 1 with subtle pulsing bug indicator */}
            <div className="relative p-3 rounded-2xl bg-slate-50/80 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-slate-700">Cardholder Name</span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>Unassociated &lt;span&gt;</span>
                </span>
              </div>
              <div className="h-8 bg-white border border-slate-200 rounded-lg flex items-center px-3">
                <span className="text-xs text-slate-400">Jane Doe</span>
              </div>
            </div>

            {/* Form field 2 with contrast indicator */}
            <div className="relative p-3 rounded-2xl bg-slate-50/80 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-slate-700">Billing Postal Code</span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Low Contrast: 1.8:1</span>
                </span>
              </div>
              <div className="h-8 bg-white border border-slate-200 rounded-lg flex items-center px-3">
                <span className="text-xs text-[#CBD5E1]">10001 (Faint text)</span>
              </div>
            </div>
          </div>

          {/* Right: Floating Game-inspired Mission Badge */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#5B5CE2] text-white flex items-center justify-center shadow-md mb-2 animate-float-soft">
              <Search className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-900">
              Accessibility Lens
            </div>
            <div className="text-[11px] text-slate-500 mt-1 leading-snug">
              Discover what automated LLMs overlook in generated UI code.
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <Clock className="w-3 h-3" />
              <span>15 Min Session</span>
            </div>
          </div>

        </div>

      </div>

      {/* Primary Action Button */}
      <button
        type="button"
        onClick={goToNextSlide}
        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white text-sm font-bold shadow-card hover:shadow-float transition-all active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-indigo-300"
      >
        <span>START PRESENTATION</span>
        <ArrowRight className="w-4 h-4" />
      </button>

    </div>
  );
};
