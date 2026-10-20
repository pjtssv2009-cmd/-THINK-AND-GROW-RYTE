import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { SlideId } from '../types/presentation';
import { SLIDES } from '../constants/slides';
import { BRANDING } from '../constants/branding';
import { sound } from '../utils/sound';

interface PresentationContextType {
  currentSlideIndex: number;
  currentSlide: (typeof SLIDES)[0];
  totalSlides: number;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  goToSlide: (index: number) => void;
  goToSlideById: (id: SlideId) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  presenterName: string;
  setPresenterName: (name: string) => void;
  isPresenterNotesOpen: boolean;
  togglePresenterNotes: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  exploredItems: Record<string, boolean>;
  markItemExplored: (id: string) => void;
}

const STORAGE_KEY = 'think_and_grow_ryte_presentation_v2';

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [presenterName, setPresenterNameState] = useState<string>(BRANDING.DEFAULT_PRESENTER);
  const [isPresenterNotesOpen, setIsPresenterNotesOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [exploredItems, setExploredItems] = useState<Record<string, boolean>>({});

  // Restore saved state
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.soundEnabled === 'boolean') setSoundEnabled(parsed.soundEnabled);
        if (parsed.presenterName) setPresenterNameState(parsed.presenterName);
        if (parsed.exploredItems) setExploredItems(parsed.exploredItems);
      }
    } catch {
      // Local storage unreadable
    }
  }, []);

  // Save state
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          soundEnabled,
          presenterName,
          exploredItems,
        })
      );
    } catch {
      // Local storage full
    }
  }, [soundEnabled, presenterName, exploredItems]);

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex] || SLIDES[0];

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex(prev => {
      if (prev < totalSlides - 1) {
        if (soundEnabled) sound.playSuccess();
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides, soundEnabled]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex(prev => {
      if (prev > 0) {
        if (soundEnabled) sound.playSuccess();
        return prev - 1;
      }
      return prev;
    });
  }, [soundEnabled]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      if (soundEnabled) sound.playSuccess();
      setCurrentSlideIndex(index);
    }
  }, [totalSlides, soundEnabled]);

  const goToSlideById = useCallback((id: SlideId) => {
    const idx = SLIDES.findIndex(s => s.id === id);
    if (idx !== -1) {
      if (soundEnabled) sound.playSuccess();
      setCurrentSlideIndex(idx);
    }
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  const setPresenterName = useCallback((name: string) => {
    setPresenterNameState(name);
  }, []);

  const togglePresenterNotes = useCallback(() => {
    setIsPresenterNotesOpen(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  const markItemExplored = useCallback((id: string) => {
    setExploredItems(prev => ({ ...prev, [id]: true }));
  }, []);

  return (
    <PresentationContext.Provider
      value={{
        currentSlideIndex,
        currentSlide,
        totalSlides,
        goToNextSlide,
        goToPrevSlide,
        goToSlide,
        goToSlideById,
        soundEnabled,
        toggleSound,
        presenterName,
        setPresenterName,
        isPresenterNotesOpen,
        togglePresenterNotes,
        isFullscreen,
        toggleFullscreen,
        exploredItems,
        markItemExplored,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = (): PresentationContextType => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
};
