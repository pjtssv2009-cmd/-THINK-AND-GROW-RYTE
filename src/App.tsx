import React, { useEffect } from 'react';
import { PresentationProvider, usePresentation } from './context/GameStateContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PresenterNotes } from './components/PresenterNotes';

import { Slide01Opening } from './components/slides/Slide01Opening';
import { Slide02RealityCheck } from './components/slides/Slide02RealityCheck';
import { Slide03BugLab } from './components/slides/Slide03BugLab';
import { Slide04InvisibleLabel } from './components/slides/Slide04InvisibleLabel';
import { Slide05KeyboardTrap } from './components/slides/Slide05KeyboardTrap';
import { Slide06ContrastProblem } from './components/slides/Slide06ContrastProblem';
import { Slide07DetectiveDesk } from './components/slides/Slide07DetectiveDesk';
import { Slide08RepairStation } from './components/slides/Slide08RepairStation';
import { Slide09TheProof } from './components/slides/Slide09TheProof';
import { Slide10TheTakeaway } from './components/slides/Slide10TheTakeaway';

const PresentationShell: React.FC = () => {
  const { 
    currentSlideIndex, 
    goToNextSlide, 
    goToPrevSlide, 
    togglePresenterNotes 
  } = usePresentation();

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

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'p' || e.key === 'P') {
        togglePresenterNotes();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, togglePresenterNotes]);

  // Render the current slide (1 of 10)
  const renderSlide = () => {
    switch (currentSlideIndex) {
      case 0:
        return <Slide01Opening />;
      case 1:
        return <Slide02RealityCheck />;
      case 2:
        return <Slide03BugLab />;
      case 3:
        return <Slide04InvisibleLabel />;
      case 4:
        return <Slide05KeyboardTrap />;
      case 5:
        return <Slide06ContrastProblem />;
      case 6:
        return <Slide07DetectiveDesk />;
      case 7:
        return <Slide08RepairStation />;
      case 8:
        return <Slide09TheProof />;
      case 9:
        return <Slide10TheTakeaway />;
      default:
        return <Slide01Opening />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FC] text-[#172033] antialiased selection:bg-[#5B5CE2] selection:text-white">
      
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
        className="flex-1 flex flex-col justify-center px-2 sm:px-6 py-4 focus:outline-none"
      >
        <div className="w-full">
          {renderSlide()}
        </div>
      </main>

      {/* Presentation Bottom Navigation */}
      <Footer />

      {/* Discreet Presenter Notes Overlay */}
      <PresenterNotes />

    </div>
  );
};

export default function App() {
  return (
    <PresentationProvider>
      <PresentationShell />
    </PresentationProvider>
  );
}
