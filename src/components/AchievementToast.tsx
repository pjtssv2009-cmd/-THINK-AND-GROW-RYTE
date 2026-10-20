import React from 'react';
import { useGameState } from '../context/GameStateContext';
import { Sparkles, Trophy, X } from 'lucide-react';

export const AchievementToast: React.FC = () => {
  const { activeToast, clearToast } = useGameState();

  if (!activeToast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#172033] text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 animate-pop max-w-md w-[90%]"
    >
      <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm animate-pulse-subtle">
        {activeToast.points > 0 ? (
          <Sparkles className="w-5 h-5 text-slate-950" />
        ) : (
          <Trophy className="w-5 h-5 text-slate-950" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        {activeToast.points > 0 ? (
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-extrabold text-sm">
              +{activeToast.points} PTS!
            </span>
            <span className="text-xs text-slate-300 font-medium truncate">
              {activeToast.message}
            </span>
          </div>
        ) : (
          <div className="text-xs text-slate-200 font-semibold truncate">
            {activeToast.message}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={clearToast}
        className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-amber-400"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
