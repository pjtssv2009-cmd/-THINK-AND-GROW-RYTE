import React from 'react';
import { useGameState } from '../context/GameStateContext';
import { SLIDES } from '../constants/slides';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    currentSlideIndex,
    totalSlides,
    goToNextSlide,
    goToPrevSlide,
    goToSlide,
  } = useGameState();

  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  return (
    <footer 
      role="contentinfo" 
      className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-xs border-t border-[#E2E8F0] px-4 lg:px-8 py-3"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left: Interactive Stage Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            const isPassed = idx < currentSlideIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
                  isActive
                    ? 'bg-[#5B5CE2] text-white shadow-xs'
                    : isPassed
                    ? 'bg-indigo-50 text-[#5B5CE2] hover:bg-indigo-100'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold bg-white/20">
                  {idx + 1}
                </span>
                <span className="hidden md:inline truncate max-w-[100px]">
                  {slide.stageName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Center / Right: Keyboard hints & Nav buttons */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          
          {/* Keyboard navigation hint */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 font-medium select-none">
            <Keyboard className="w-3.5 h-3.5 text-slate-400" />
            <span>Use <kbd className="px-1.5 py-0.5 text-[11px] bg-slate-100 border border-slate-200 rounded font-mono text-slate-600">←</kbd> and <kbd className="px-1.5 py-0.5 text-[11px] bg-slate-100 border border-slate-200 rounded font-mono text-slate-600">→</kbd> to navigate</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevSlide}
              disabled={isFirstSlide}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
                isFirstSlide
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs active:scale-[0.98]'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
              disabled={isLastSlide}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
                isLastSlide
                  ? 'border border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50'
                  : 'bg-[#5B5CE2] hover:bg-[#4C4DD0] text-white shadow-sm hover:shadow-md active:scale-[0.98]'
              }`}
              aria-label={isLastSlide ? 'End of Presentation' : 'Next slide'}
            >
              <span>{isFirstSlide ? 'Start Quest' : isLastSlide ? 'Finished' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
