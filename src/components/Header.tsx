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
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E4E7EC] px-4 lg:px-8 py-3 transition-colors shadow-subtle"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Official Company Logo, Program Name, and Subtitle */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img 
              src={BRANDING.LOGO_SRC} 
              alt={BRANDING.LOGO_ALT}
              className="w-8 h-8 object-contain rounded-md shadow-2xs border border-slate-100"
              width={32}
              height={32}
              loading="eager"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm md:text-base tracking-tight text-[#172033] truncate">
                {BRANDING.PROGRAM_NAME}
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EEF0FD] text-[#5B5CE2] border border-[#5B5CE2]/20 uppercase tracking-wider">
                Tech Session
              </span>
            </div>
            <p className="text-[11px] text-[#667085] font-medium hidden xs:block truncate">
              {BRANDING.SUBTITLE}
            </p>
          </div>
        </div>

        {/* Center: Slide indicator & stage */}
        <div className="hidden md:flex items-center gap-2.5 bg-slate-50 border border-[#E4E7EC] px-3.5 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#5B5CE2] animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#172033]">
            {currentSlide.slideNumber} <span className="text-slate-400">/ {totalSlides}</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-xs font-semibold text-slate-700 truncate max-w-[220px]">
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
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl border border-[#E4E7EC] transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
              aria-expanded={showNavMenu}
              aria-haspopup="true"
              aria-label="Jump to slide"
            >
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline text-slate-500 font-medium">Slide:</span>
              <span className="font-bold text-[#5B5CE2]">
                {currentSlide.slideNumber}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showNavMenu ? 'rotate-180' : ''}`} />
            </button>

            {showNavMenu && (
              <div 
                className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-panel border border-[#E4E7EC] py-2 z-50 animate-slide-in max-h-96 overflow-y-auto"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Presentation Slides
                </div>
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    role="menuitem"
                    onClick={() => {
                      goToSlide(idx);
                      setShowNavMenu(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                      idx === currentSlideIndex 
                        ? 'font-bold text-[#5B5CE2] bg-indigo-50/60' 
                        : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[11px] text-slate-400 w-5">
                        {slide.slideNumber}
                      </span>
                      <span className="truncate">{slide.title}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 shrink-0 ml-2">
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
            className={`p-2 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
              isPresenterNotesOpen 
                ? 'bg-indigo-100 text-[#5B5CE2] border border-indigo-200' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-transparent'
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
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
            title={soundEnabled ? 'Mute sound cues' : 'Unmute sound cues'}
            aria-label={soundEnabled ? 'Mute sound cues' : 'Unmute sound cues'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-slate-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2] hidden sm:inline-flex"
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
