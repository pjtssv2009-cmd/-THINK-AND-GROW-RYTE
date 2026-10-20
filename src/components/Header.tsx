import React, { useState } from 'react';
import { useGameState } from '../context/GameStateContext';
import { BRANDING } from '../constants/branding';
import { 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  FileText, 
  RotateCcw, 
  ChevronDown
} from 'lucide-react';
import { SLIDES } from '../constants/slides';

export const Header: React.FC = () => {
  const {
    currentSlide,
    currentSlideIndex,
    totalSlides,
    score,
    soundEnabled,
    toggleSound,
    isPresenterNotesOpen,
    togglePresenterNotes,
    isFullscreen,
    toggleFullscreen,
    resetQuest,
    goToSlide,
    milestoneTitle,
    progressPercent
  } = useGameState();

  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  return (
    <>
      <header 
        role="banner" 
        className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] shadow-sm px-4 lg:px-8 py-2.5 transition-colors"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Official Company Logo, Program Name, and Subtitle */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={BRANDING.LOGO_SRC} 
                alt={BRANDING.LOGO_ALT}
                className="w-9 h-9 object-contain rounded-md shadow-xs border border-slate-100"
                width={36}
                height={36}
                loading="eager"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base md:text-lg tracking-tight text-[#172033] truncate">
                  {BRANDING.PROGRAM_NAME}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-accent-light text-[#5B5CE2] border border-[#5B5CE2]/20">
                  Interactive Quest
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-medium hidden xs:block truncate">
                {BRANDING.SUBTITLE}
              </p>
            </div>
          </div>

          {/* Right: Slide stage, Score counter, and presenter controls */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Quick Demo Navigation Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowNavMenu(prev => !prev)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-[#E2E8F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
                aria-expanded={showNavMenu}
                aria-haspopup="true"
                aria-label="Jump to slide or demo"
              >
                <span className="font-medium text-slate-500">Stage:</span>
                <span className="font-bold text-accent truncate max-w-[110px] md:max-w-none">
                  {currentSlide.stageName}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showNavMenu ? 'rotate-180' : ''}`} />
              </button>

              {showNavMenu && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E2E8F0] py-2 z-50 animate-pop"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                    Jump to Section
                  </div>
                  {SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      role="menuitem"
                      onClick={() => {
                        goToSlide(idx);
                        setShowNavMenu(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                        idx === currentSlideIndex 
                          ? 'font-bold text-[#5B5CE2] bg-indigo-50/50' 
                          : 'text-slate-700'
                      }`}
                    >
                      <span className="truncate">
                        {idx + 1}. {slide.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 ml-2 shrink-0">
                        {slide.durationMin}m
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Score & Milestone Counter */}
            <div 
              className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs"
              role="status"
              aria-live="polite"
              aria-label={`Current score: ${score} points. Milestone: ${milestoneTitle}`}
            >
              <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">
                ★
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-[#172033] leading-none">
                  {score} <span className="text-[10px] font-semibold text-slate-400">PTS</span>
                </span>
                <span className="text-[10px] font-medium text-[#5B5CE2] leading-tight hidden md:inline truncate max-w-[120px]">
                  {milestoneTitle}
                </span>
              </div>
            </div>

            {/* Slide Count indicator */}
            <div className="hidden lg:flex flex-col items-end text-right">
              <span className="text-xs font-bold text-slate-700">
                {currentSlideIndex + 1} <span className="text-slate-400">/ {totalSlides}</span>
              </span>
              <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                <div 
                  className="h-full bg-[#5B5CE2] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Utility Icon Buttons */}
            <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleSound}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
                title={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
                aria-label={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-slate-600" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {/* Presenter Notes Toggle */}
              <button
                type="button"
                onClick={togglePresenterNotes}
                className={`p-1.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2] ${
                  isPresenterNotesOpen 
                    ? 'bg-indigo-100 text-[#5B5CE2]' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
                title="Toggle Presenter Notes (Press P)"
                aria-label="Toggle Presenter Notes"
                aria-pressed={isPresenterNotesOpen}
              >
                <FileText className="w-4 h-4" />
              </button>

              {/* Fullscreen Toggle */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2] hidden sm:inline-flex"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>

              {/* Reset Confirmation Button */}
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-red-500"
                title="Restart Quest"
                aria-label="Restart Quest"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Confirmation Modal for Resetting */}
      {showResetConfirm && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-pop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-dialog-title"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 id="reset-dialog-title" className="text-lg font-bold text-slate-900 mb-2">
              Restart Accessibility Quest?
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              This will reset your current score ({score} points) and all discovered bugs back to the beginning. Are you sure you want to start over?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#5B5CE2]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  resetQuest();
                  setShowResetConfirm(false);
                }}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-red-600"
              >
                Yes, Restart Quest
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
