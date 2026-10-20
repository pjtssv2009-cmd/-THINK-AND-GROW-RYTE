import React from 'react';
import { usePresentation } from '../context/GameStateContext';
import { X, Lightbulb, CheckCircle2 } from 'lucide-react';

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
      className="fixed bottom-16 right-4 md:right-8 w-96 max-w-[calc(100vw-2rem)] max-h-[75vh] bg-white border-2 border-[#171717] rounded-xl shadow-[6px_6px_0px_#171717] z-50 flex flex-col overflow-hidden animate-slide-in"
    >
      {/* Header */}
      <div className="bg-[#F28C28] text-[#171717] px-4 py-3 flex items-center justify-between border-b-2 border-[#171717]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#171717]" />
          <h2 className="text-xs font-black uppercase tracking-wider text-[#171717]">
            Presenter Notes (Press P)
          </h2>
        </div>
        <button
          type="button"
          onClick={togglePresenterNotes}
          className="text-[#171717] bg-white hover:bg-[#FFF4E5] p-1 rounded border-2 border-[#171717] shadow-[1px_1px_0px_#171717] transition-all focus-visible:outline-2 focus-visible:outline-[#171717]"
          aria-label="Close Presenter Notes"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 overflow-y-auto space-y-3.5 text-[#171717] text-xs">
        {/* Slide Info */}
        <div className="flex items-center justify-between pb-2.5 border-b-2 border-[#171717]">
          <div>
            <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#525252]">
              SLIDE {currentSlide.slideNumber} / {totalSlides}
            </span>
            <h3 className="text-sm font-black text-[#171717] mt-0.5">
              {currentSlide.title}
            </h3>
          </div>
          <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-[#FFF4E5] text-[#171717] rounded border-2 border-[#171717] shadow-[1.5px_1.5px_0px_#171717] uppercase">
            KEYNOTE
          </span>
        </div>

        {/* Slide Goal */}
        <div className="bg-[#FFF8EE] p-3 rounded-lg border-2 border-[#171717]">
          <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#525252] block mb-1">
            Core Headline
          </span>
          <p className="font-bold text-xs text-[#171717] leading-snug">
            "{currentSlide.headline}"
          </p>
        </div>

        {/* Key Talking Points */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-black text-[#171717] mb-2 uppercase tracking-wide">
            <Lightbulb className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Presenter Talking Points</span>
          </div>
          <ul className="space-y-2">
            {currentSlide.talkingPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-[#171717]/40 leading-relaxed text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                <span className="text-[#171717] font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
