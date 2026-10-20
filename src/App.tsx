import React, { useEffect } from 'react';
import { GameStateProvider, useGameState } from './context/GameStateContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PresenterNotes } from './components/PresenterNotes';
import { AchievementToast } from './components/AchievementToast';

import { SlideWelcome } from './components/slides/SlideWelcome';
import { SlideChallenge } from './components/slides/SlideChallenge';
import { SlideBugLab } from './components/slides/SlideBugLab';
import { SlideDetective } from './components/slides/SlideDetective';
import { SlideFixTheBugs } from './components/slides/SlideFixTheBugs';
import { SlideFinalBoss } from './components/slides/SlideFinalBoss';
import { SlideClosing } from './components/slides/SlideClosing';

const PresentationShell: React.FC = () => {
  const { 
    currentSlideIndex, 
    goToNextSlide, 
    goToPrevSlide, 
    togglePresenterNotes 
  } = useGameState();

  // Keyboard navigation handler with input guard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent accidental slide navigation when typing in form inputs or textareas
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'p' || e.key === 'P') {
        // Toggle presenter notes
        togglePresenterNotes();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, togglePresenterNotes]);

  // Render current slide based on currentSlideIndex
  const renderSlide = () => {
    switch (currentSlideIndex) {
      case 0:
        return <SlideWelcome />;
      case 1:
        return <SlideChallenge />;
      case 2:
        return <SlideBugLab />;
      case 3:
        return <SlideDetective />;
      case 4:
        return <SlideFixTheBugs />;
      case 5:
        return <SlideFinalBoss />;
      case 6:
        return <SlideClosing />;
      default:
        return <SlideWelcome />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172033]">
      
      {/* Accessible Skip Link */}
      <a
        href="#main-presentation-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-[#5B5CE2] text-white rounded-xl font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Presentation Top Header */}
      <Header />

      {/* Main Slide Content Area */}
      <main 
        id="main-presentation-content" 
        tabIndex={-1}
        className="flex-1 flex flex-col justify-center px-2 sm:px-4 py-2 sm:py-4 focus:outline-none"
      >
        <div className="w-full">
          {renderSlide()}
        </div>
      </main>

      {/* Presentation Bottom Navigation */}
      <Footer />

      {/* Overlays and Presenter Tools */}
      <PresenterNotes />
      <AchievementToast />

    </div>
  );
};

export default function App() {
  return (
    <GameStateProvider>
      <PresentationShell />
    </GameStateProvider>
  );
}
