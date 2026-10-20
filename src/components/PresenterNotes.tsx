import React from 'react';
import { usePresentation } from '../context/GameStateContext';
import { X, Clock, CheckCircle2, Lightbulb } from 'lucide-react';

export const PresenterNotes: React.FC = () => {
  const {
    isPresenterNotesOpen,
    togglePresenterNotes,
    currentSlide,
    totalSlides,
  } = usePresentation();

  if (!isPresenterNotesOpen) return null;

  return (
    <aside
      role="complementary"
      aria-label="Presenter Notes"
      className="fixed bottom-16 right-4 md:right-8 w-96 max-w-[calc(100vw-2rem)] max-h-[75vh] bg-white rounded-3xl shadow-panel border border-[#E4E7EC] z-50 flex flex-col overflow-hidden animate-slide-in"
    >
      {/* Header */}
      <div className="bg-[#172033] text-white px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Presenter Notes (Press P)
          </h2>
        </div>
        <button
          type="button"
          onClick={togglePresenterNotes}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Close Presenter Notes"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-5 overflow-y-auto space-y-4 text-slate-800 text-xs">
        {/* Slide Info & Timing */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
              SLIDE {currentSlide.slideNumber} / {totalSlides}
            </span>
            <h3 className="text-sm font-bold text-slate-900 mt-0.5">
              {currentSlide.title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-800 rounded-lg border border-amber-200 font-semibold shrink-0">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{currentSlide.durationMin}m</span>
          </div>
        </div>

        {/* Slide Goal */}
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Slide Concept
          </span>
          <p className="font-semibold text-slate-800 leading-snug">
            {currentSlide.headline}
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            {currentSlide.description}
          </p>
        </div>

        {/* Talking points */}
        <div>
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B5CE2]" />
            <span>Key Talking Points</span>
          </h4>
          <ul className="space-y-2">
            {currentSlide.talkingPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-600 leading-relaxed text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B5CE2] mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Presentation Delivery Tip */}
        <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-[#5B5CE2] shrink-0 mt-0.5" />
          <div className="text-[11px] text-slate-600 leading-relaxed">
            <strong className="text-indigo-900 block font-semibold mb-0.5">Delivery Tip:</strong>
            Use the interactive elements on this slide to demonstrate concepts visually rather than merely reading the text.
          </div>
        </div>
      </div>
    </aside>
  );
};
