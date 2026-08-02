'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

interface CaveContextValue {
  isCaveMode: boolean;
  enterCave: () => void;
  exitCave: () => void;
}

const CaveContext = createContext<CaveContextValue | null>(null);

interface CaveProviderProps {
  children: ReactNode;
}

export function CaveProvider({ children }: CaveProviderProps) {
  const [isCaveMode, setIsCaveMode] = useState(false);

  const enterCave = useCallback(() => {
    setIsCaveMode(true);
  }, []);

  const exitCave = useCallback(() => {
    setIsCaveMode(false);
  }, []);

  useEffect(() => {
    if (!isCaveMode) {
      document.body.classList.remove('cave-mode-active');
      return;
    }

    document.body.classList.add('cave-mode-active');

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        exitCave();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('cave-mode-active');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [exitCave, isCaveMode]);

  const value = useMemo(
    () => ({
      isCaveMode,
      enterCave,
      exitCave,
    }),
    [enterCave, exitCave, isCaveMode],
  );

  return (
    <CaveContext.Provider value={value}>
      {children}
    </CaveContext.Provider>
  );
}

export function useCaveMode() {
  const context = useContext(CaveContext);

  if (!context) {
    throw new Error('useCaveMode must be used inside CaveProvider.');
  }

  return context;
}