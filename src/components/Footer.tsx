import React from 'react';
import { usePresentation } from '../context/GameStateContext';
import { SLIDES } from '../constants/slides';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    currentSlideIndex,
    totalSlides,
    goToNextSlide,
    goToPrevSlide,
    goToSlide,
  } = usePresentation();

  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  return (
    <footer 
      role="contentinfo" 
      className="sticky bottom-0 z-30 bg-white border-t-2 border-[#171717] px-4 lg:px-8 py-2.5 shadow-[0_-2px_0px_#171717]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left: Neo-brutalist slide progress stepper */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-0.5">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            const isPassed = idx < currentSlideIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold transition-all shrink-0 border-2 border-[#171717] focus-visible:outline-3 focus-visible:outline-[#F28C28] ${
                  isActive
                    ? 'bg-[#F28C28] text-[#171717] shadow-[2px_2px_0px_#171717] font-black'
                    : isPassed
                    ? 'bg-[#FFF4E5] text-[#171717] hover:bg-[#FFE8CC]'
                    : 'bg-white text-slate-500 hover:bg-slate-50'
                }`}
                aria-label={`Go to slide ${slide.slideNumber}: ${slide.title}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="font-mono text-[11px] font-bold">
                  {slide.slideNumber}
                </span>
                <span className="hidden xl:inline text-[11px] truncate max-w-[110px]">
                  {slide.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Keyboard navigation helper and Next/Previous controls */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#525252] font-semibold select-none">
            <Keyboard className="w-3.5 h-3.5 text-[#171717]" />
            <span>Navigate with <kbd className="px-1.5 py-0.5 text-[10px] bg-white border-2 border-[#171717] rounded shadow-[1px_1px_0px_#171717] font-mono text-[#171717] font-black">←</kbd> and <kbd className="px-1.5 py-0.5 text-[10px] bg-white border-2 border-[#171717] rounded shadow-[1px_1px_0px_#171717] font-mono text-[#171717] font-black">→</kbd></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevSlide}
              disabled={isFirstSlide}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-black border-2 transition-all focus-visible:outline-3 focus-visible:outline-[#F28C28] ${
                isFirstSlide
                  ? 'border-slate-300 text-slate-400 cursor-not-allowed bg-slate-100'
                  : 'border-[#171717] text-[#171717] bg-white hover:bg-[#FFF4E5] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
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
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-black border-2 transition-all focus-visible:outline-3 focus-visible:outline-[#F28C28] ${
                isLastSlide
                  ? 'border-slate-300 text-slate-400 cursor-not-allowed bg-slate-100'
                  : 'border-[#171717] bg-[#F28C28] hover:bg-[#DF7A1B] text-[#171717] shadow-[3px_3px_0px_#171717] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#171717]'
              }`}
              aria-label={isLastSlide ? 'End of Presentation' : 'Next slide'}
            >
              <span>{isFirstSlide ? 'Start Presentation' : isLastSlide ? 'Completed' : 'Next Slide'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
