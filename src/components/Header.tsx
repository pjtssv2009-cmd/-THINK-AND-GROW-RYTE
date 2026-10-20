import React, { useState } from 'react';
import { usePresentation } from '../context/GameStateContext';
import { BRANDING } from '../constants/branding';
import { SLIDES } from '../constants/slides';
import { 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  FileText, 
  ChevronDown,
  Layers
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentSlide,
    currentSlideIndex,
    totalSlides,
    soundEnabled,
    toggleSound,
    isPresenterNotesOpen,
    togglePresenterNotes,
    isFullscreen,
    toggleFullscreen,
    goToSlide,
  } = usePresentation();

  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <header 
      role="banner" 
      className="sticky top-0 z-40 bg-white border-b-2 border-[#171717] px-4 lg:px-8 py-2.5 shadow-[0_2px_0px_#171717]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Official Company Logo, Program Name, and Tag */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0 flex items-center justify-center p-1 bg-white border-2 border-[#171717] rounded-md shadow-[2px_2px_0px_#171717]">
            <img 
              src={BRANDING.LOGO_SRC} 
              alt={BRANDING.LOGO_ALT}
              className="w-7 h-7 object-contain"
              width={28}
              height={28}
              loading="eager"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm md:text-base tracking-tight text-[#171717] uppercase truncate">
                {BRANDING.PROGRAM_NAME}
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black bg-[#F28C28] text-[#171717] border-2 border-[#171717] shadow-[1.5px_1.5px_0px_#171717] uppercase tracking-wider">
                Tech Session
              </span>
            </div>
            <p className="text-[11px] text-[#525252] font-semibold hidden xs:block truncate">
              {BRANDING.PRESENTATION_SUBTITLE}
            </p>
          </div>
        </div>

        {/* Center: Slide indicator & stage */}
        <div className="hidden md:flex items-center gap-2.5 bg-[#FFF4E5] border-2 border-[#171717] px-3.5 py-1 rounded-lg shadow-[2px_2px_0px_#171717]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F28C28] border border-[#171717]" />
          <span className="text-xs font-mono font-black text-[#171717]">
            SLIDE {currentSlide.slideNumber} <span className="text-slate-400">/ {totalSlides}</span>
          </span>
          <span className="w-1 h-3 bg-[#171717]/20" />
          <span className="text-xs font-bold text-[#171717] truncate max-w-[240px]">
            {currentSlide.title}
          </span>
        </div>

        {/* Right: Slide Menu, Presenter Notes, Sound, Fullscreen */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Quick Slide Navigation Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNavMenu(prev => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#171717] bg-white hover:bg-[#FFF4E5] rounded-lg border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#171717] transition-all focus-visible:outline-3 focus-visible:outline-[#F28C28]"
              aria-expanded={showNavMenu}
              aria-haspopup="true"
              aria-label="Jump to slide"
            >
              <Layers className="w-3.5 h-3.5 text-[#171717]" />
              <span className="hidden sm:inline font-bold">Slide:</span>
              <span className="font-mono font-black text-[#F28C28] bg-[#171717] text-white px-1.5 py-0.2 rounded text-[11px]">
                {currentSlide.slideNumber}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#171717] transition-transform ${showNavMenu ? 'rotate-180' : ''}`} />
            </button>

            {showNavMenu && (
              <div 
                className="absolute right-0 mt-2 w-72 bg-white rounded-lg border-2 border-[#171717] shadow-[5px_5px_0px_#171717] py-2 z-50 animate-slide-in max-h-96 overflow-y-auto"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="px-3.5 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 border-b-2 border-[#171717] mb-1 bg-[#FFF8EE]">
                  Jump to Slide (1 - 10)
                </div>
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      goToSlide(idx);
                      setShowNavMenu(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-[#FFF4E5] transition-colors ${
                      idx === currentSlideIndex 
                        ? 'font-black text-[#171717] bg-[#F28C28]/20 border-l-4 border-[#F28C28]' 
                        : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono font-bold text-[11px] text-[#171717] w-5">
                        {slide.slideNumber}
                      </span>
                      <span className="truncate">{slide.title}</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-[#171717] bg-white text-[#171717] shrink-0 ml-2">
                      {slide.durationMin}m
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Presenter Notes Button */}
          <button
            type="button"
            onClick={togglePresenterNotes}
            className={`p-2 rounded-lg border-2 border-[#171717] transition-all focus-visible:outline-3 focus-visible:outline-[#F28C28] ${
              isPresenterNotesOpen 
                ? 'bg-[#F28C28] text-[#171717] shadow-[1px_1px_0px_#171717] translate-x-[1px] translate-y-[1px]' 
                : 'bg-white text-[#171717] hover:bg-[#FFF4E5] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px]'
            }`}
            title="Toggle Presenter Notes (Press P)"
            aria-label="Toggle Presenter Notes"
            aria-pressed={isPresenterNotesOpen}
          >
            <FileText className="w-4 h-4" />
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            className="p-2 text-[#171717] bg-white hover:bg-[#FFF4E5] rounded-lg border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] transition-all focus-visible:outline-3 focus-visible:outline-[#F28C28]"
            title={soundEnabled ? 'Mute sound cues' : 'Unmute sound cues'}
            aria-label={soundEnabled ? 'Mute sound cues' : 'Unmute sound cues'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#171717]" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 text-[#171717] bg-white hover:bg-[#FFF4E5] rounded-lg border-2 border-[#171717] shadow-[2px_2px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] transition-all focus-visible:outline-3 focus-visible:outline-[#F28C28] hidden sm:inline-flex"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
