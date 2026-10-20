import React, { useState } from 'react';
import { usePresentation } from '../context/GameStateContext';
import { 
  X, 
  Lightbulb, 
  CheckCircle2, 
  Download, 
  FileText, 
  MessageSquare, 
  Check, 
  Sparkles,
  Clock
} from 'lucide-react';
import { 
  SLIDE_SCRIPTS, 
  downloadSlideScript, 
  downloadMasterScript 
} from '../constants/presentationScripts';

export const PresenterNotes: React.FC = () => {
  const {
    isPresenterNotesOpen,
    togglePresenterNotes,
    currentSlide,
    totalSlides,
  } = usePresentation();

  const [activeTab, setActiveTab] = useState<'script' | 'points'>('script');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isPresenterNotesOpen) return null;

  const currentScript = SLIDE_SCRIPTS[currentSlide.slideNumber] || SLIDE_SCRIPTS['01'];

  const handleDownloadSlide = () => {
    downloadSlideScript(currentSlide.slideNumber);
    setDownloadSuccess(`Slide ${currentSlide.slideNumber}`);
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  const handleDownloadMaster = () => {
    downloadMasterScript();
    setDownloadSuccess('All 10 Slides');
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  return (
    <aside
      role="complementary"
      aria-label="Presenter Notes"
      className="fixed bottom-16 right-4 md:right-8 w-[420px] max-w-[calc(100vw-2rem)] max-h-[80vh] bg-white border-2 border-[#171717] rounded-xl shadow-[6px_6px_0px_#171717] z-50 flex flex-col overflow-hidden animate-slide-in"
    >
      {/* Header */}
      <div className="bg-[#F28C28] text-[#171717] px-4 py-3 flex items-center justify-between border-b-2 border-[#171717]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#171717]" />
          <h2 className="text-xs font-black uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
            <span>Presenter Notes & Script</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 bg-white rounded border border-[#171717]">P</span>
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

      {/* Script Download Quick Bar */}
      <div className="bg-[#FFF8EE] px-4 py-2.5 border-b-2 border-[#171717] flex items-center justify-between gap-2">
        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#525252] flex items-center gap-1">
          <Download className="w-3 h-3 text-[#F28C28]" />
          Export Script:
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDownloadSlide}
            title={`Download Markdown script for Slide ${currentSlide.slideNumber}`}
            className="flex items-center gap-1 text-[11px] font-black px-2.5 py-1 bg-white hover:bg-[#FFF4E5] text-[#171717] rounded border-2 border-[#171717] shadow-[1.5px_1.5px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] transition-all"
          >
            {downloadSuccess === `Slide ${currentSlide.slideNumber}` ? (
              <>
                <Check className="w-3 h-3 text-[#15803D]" />
                <span className="text-[#15803D]">Saved!</span>
              </>
            ) : (
              <>
                <FileText className="w-3 h-3 text-[#F28C28]" />
                <span>This Slide</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownloadMaster}
            title="Download full 10-slide master script with Q&A notes"
            className="flex items-center gap-1 text-[11px] font-black px-2.5 py-1 bg-[#171717] hover:bg-slate-800 text-white rounded border-2 border-[#171717] shadow-[1.5px_1.5px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] transition-all"
          >
            {downloadSuccess === 'All 10 Slides' ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Master Saved!</span>
              </>
            ) : (
              <>
                <Download className="w-3 h-3 text-[#F28C28]" />
                <span>All 10 Slides</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 overflow-y-auto space-y-3.5 text-[#171717] text-xs">
        {/* Slide Info */}
        <div className="flex items-center justify-between pb-2.5 border-b-2 border-[#171717]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#525252]">
                SLIDE {currentSlide.slideNumber} / {totalSlides}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#F28C28] bg-[#171717] text-white px-1.5 py-0.2 rounded">
                <Clock className="w-2.5 h-2.5" />
                {currentScript.duration}
              </span>
            </div>
            <h3 className="text-sm font-black text-[#171717] mt-0.5">
              {currentSlide.title}
            </h3>
          </div>
          <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-[#FFF4E5] text-[#171717] rounded border-2 border-[#171717] shadow-[1.5px_1.5px_0px_#171717] uppercase">
            {currentScript.stageName}
          </span>
        </div>

        {/* Visual Cue Alert */}
        <div className="bg-[#FFF4E5] p-2.5 rounded-lg border-2 border-[#171717] flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#525252] block">
              Visual Presentation Action:
            </span>
            <p className="font-bold text-[11px] text-[#171717] leading-snug">
              {currentScript.visualAction}
            </p>
          </div>
        </div>

        {/* View Switcher: Verbatim Script vs Talking Points */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border-2 border-[#171717]">
          <button
            type="button"
            onClick={() => setActiveTab('script')}
            className={`flex-1 py-1 px-2 text-xs font-black rounded transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'script'
                ? 'bg-white text-[#171717] border border-[#171717] shadow-[1px_1px_0px_#171717]'
                : 'text-slate-600 hover:text-[#171717]'
            }`}
          >
            <MessageSquare className="w-3 h-3 text-[#F28C28]" />
            <span>Spoken Script (Word-for-Word)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('points')}
            className={`flex-1 py-1 px-2 text-xs font-black rounded transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'points'
                ? 'bg-white text-[#171717] border border-[#171717] shadow-[1px_1px_0px_#171717]'
                : 'text-slate-600 hover:text-[#171717]'
            }`}
          >
            <Lightbulb className="w-3 h-3 text-[#F28C28]" />
            <span>Bullet Points</span>
          </button>
        </div>

        {/* Verbatim Script Tab */}
        {activeTab === 'script' ? (
          <div className="space-y-2">
            <div className="bg-slate-50 p-3 rounded-lg border border-[#171717]/30 text-[11px] leading-relaxed text-[#171717] whitespace-pre-line font-medium font-sans selection:bg-[#F28C28]/30">
              {currentScript.spokenScript}
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex items-center justify-between px-1">
              <span>Advance cue:</span>
              <span className="font-bold text-[#171717]">{currentScript.actionToAdvance}</span>
            </div>
          </div>
        ) : (
          /* Bullet Points Tab */
          <div className="space-y-2">
            <ul className="space-y-2">
              {currentSlide.talkingPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-[#171717]/40 leading-relaxed text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                  <span className="text-[#171717] font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};
