import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { SlideId, MilestoneBadge, GameState } from '../types/presentation';
import { SLIDES } from '../constants/slides';
import { BRANDING } from '../constants/branding';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface ToastNotification {
  id: string;
  points: number;
  message: string;
}

interface GameStateContextType extends GameState {
  currentSlideIndex: number;
  currentSlide: (typeof SLIDES)[0];
  totalSlides: number;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  goToSlide: (index: number) => void;
  goToSlideById: (id: SlideId) => void;
  awardPoints: (amount: number, reason: string, itemId?: string) => boolean;
  isItemSolved: (itemId: string) => boolean;
  completeMission: (missionId: string, bonusPoints?: number) => void;
  isMissionCompleted: (missionId: string) => boolean;
  toggleSound: () => void;
  setPresenterName: (name: string) => void;
  resetQuest: () => void;
  activeToast: ToastNotification | null;
  clearToast: () => void;
  isPresenterNotesOpen: boolean;
  togglePresenterNotes: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  progressPercent: number;
  milestoneTitle: MilestoneBadge;
}

const STORAGE_KEY = 'think_and_grow_ryte_gamestate_v1';

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [solvedItems, setSolvedItems] = useState<Record<string, boolean>>({});
  const [completedMissions, setCompletedMissions] = useState<Record<string, boolean>>({});
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [presenterName, setPresenterNameState] = useState<string>(BRANDING.DEFAULT_PRESENTER);
  const [activeToast, setActiveToast] = useState<ToastNotification | null>(null);
  const [isPresenterNotesOpen, setIsPresenterNotesOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Load initial state from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.score === 'number') setScore(parsed.score);
        if (parsed.solvedItems) setSolvedItems(parsed.solvedItems);
        if (parsed.completedMissions) setCompletedMissions(parsed.completedMissions);
        if (typeof parsed.soundEnabled === 'boolean') setSoundEnabled(parsed.soundEnabled);
        if (parsed.presenterName) setPresenterNameState(parsed.presenterName);
      }
    } catch {
      // Local storage unreadable
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          score,
          solvedItems,
          completedMissions,
          soundEnabled,
          presenterName,
        })
      );
    } catch {
      // Local storage full or blocked
    }
  }, [score, solvedItems, completedMissions, soundEnabled, presenterName]);

  // Fullscreen event listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex] || SLIDES[0];

  // Calculate progress percentage based on slide and mission achievements
  const progressPercent = Math.min(100, Math.round(((currentSlideIndex / (totalSlides - 1)) * 40) + ((score / 120) * 60)));

  const milestoneTitle: MilestoneBadge = (() => {
    if (progressPercent >= 85 || completedMissions['demo-d']) return 'Accessibility Champion';
    if (progressPercent >= 60 || completedMissions['demo-c']) return 'UX Fixer';
    if (progressPercent >= 35 || completedMissions['demo-b']) return 'Accessibility Detective';
    return 'Bug Spotter';
  })();

  const clearToast = useCallback(() => {
    setActiveToast(null);
  }, []);

  const triggerConfetti = useCallback(() => {
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#5B5CE2', '#0EA5E9', '#16A34A', '#F59E0B']
      });
    } catch {
      // Canvas confetti not supported
    }
  }, []);

  const awardPoints = useCallback((amount: number, reason: string, itemId?: string): boolean => {
    if (itemId && solvedItems[itemId]) {
      // Already solved, prevent duplicate point exploitation
      return false;
    }

    setScore(prev => prev + amount);
    if (itemId) {
      setSolvedItems(prev => ({ ...prev, [itemId]: true }));
    }

    if (soundEnabled) {
      if (amount >= 20) {
        sound.playAchievement();
      } else {
        sound.playSuccess();
      }
    }

    const toast: ToastNotification = {
      id: Math.random().toString(36).substring(2, 9),
      points: amount,
      message: reason,
    };
    setActiveToast(toast);

    setTimeout(() => {
      setActiveToast(current => (current?.id === toast.id ? null : current));
    }, 3800);

    return true;
  }, [solvedItems, soundEnabled]);

  const isItemSolved = useCallback((itemId: string) => {
    return !!solvedItems[itemId];
  }, [solvedItems]);

  const completeMission = useCallback((missionId: string, bonusPoints: number = 10) => {
    if (completedMissions[missionId]) return;

    setCompletedMissions(prev => ({ ...prev, [missionId]: true }));
    setScore(prev => prev + bonusPoints);

    if (soundEnabled) {
      sound.playAchievement();
    }
    triggerConfetti();

    setActiveToast({
      id: Math.random().toString(36).substring(2, 9),
      points: bonusPoints,
      message: `Mission Complete! Bonus points awarded!`,
    });
  }, [completedMissions, soundEnabled, triggerConfetti]);

  const isMissionCompleted = useCallback((missionId: string) => {
    return !!completedMissions[missionId];
  }, [completedMissions]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.max(0, prev - 1));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  const goToSlideById = useCallback((id: SlideId) => {
    const idx = SLIDES.findIndex(s => s.id === id);
    if (idx !== -1) {
      setCurrentSlideIndex(idx);
    }
  }, []);

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

  const resetQuest = useCallback(() => {
    setScore(0);
    setSolvedItems({});
    setCompletedMissions({});
    setCurrentSlideIndex(0);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setActiveToast({
      id: 'reset',
      points: 0,
      message: 'Quest progress has been reset.',
    });
  }, []);

  return (
    <GameStateContext.Provider
      value={{
        score,
        completedMissions,
        solvedItems,
        unlockedBadge: milestoneTitle,
        soundEnabled,
        presenterName,
        currentSlideIndex,
        currentSlide,
        totalSlides,
        goToNextSlide,
        goToPrevSlide,
        goToSlide,
        goToSlideById,
        awardPoints,
        isItemSolved,
        completeMission,
        isMissionCompleted,
        toggleSound,
        setPresenterName,
        resetQuest,
        activeToast,
        clearToast,
        isPresenterNotesOpen,
        togglePresenterNotes,
        isFullscreen,
        toggleFullscreen,
        progressPercent,
        milestoneTitle,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = (): GameStateContextType => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};
