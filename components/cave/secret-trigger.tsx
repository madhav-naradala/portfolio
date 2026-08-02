'use client';

import { useEffect, useRef, useState } from 'react';

import { useCaveMode } from './context';
import StoneSymbol from './stone-symbol';

const HOLD_DURATION = 900;
const AWAKENING_DURATION = 1900;

const dustParticles = [
  { left: '26%', delay: '0ms', duration: '850ms' },
  { left: '39%', delay: '110ms', duration: '1050ms' },
  { left: '50%', delay: '40ms', duration: '900ms' },
  { left: '61%', delay: '180ms', duration: '1150ms' },
  { left: '73%', delay: '80ms', duration: '970ms' },
  { left: '45%', delay: '260ms', duration: '1080ms' },
];

export default function SecretTrigger() {
  const { enterCave } = useCaveMode();

  const [isHolding, setIsHolding] = useState(false);
  const [isAwakening, setIsAwakening] = useState(false);

  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const awakeningTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoldTimer = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }

    if (!isAwakening) {
      setIsHolding(false);
    }
  };

  const beginAwakening = () => {
    if (isAwakening) {
      return;
    }

    clearHoldTimer();
    setIsHolding(false);
    setIsAwakening(true);

    awakeningTimer.current = setTimeout(() => {
      enterCave();
    }, AWAKENING_DURATION);
  };

  const beginHold = () => {
    if (isAwakening) {
      return;
    }

    clearHoldTimer();
    setIsHolding(true);

    holdTimer.current = setTimeout(() => {
      beginAwakening();
    }, HOLD_DURATION);
  };

  useEffect(() => {
    return () => {
      if (holdTimer.current) {
        clearTimeout(holdTimer.current);
      }

      if (awakeningTimer.current) {
        clearTimeout(awakeningTimer.current);
      }
    };
  }, []);

  return (
    <div className="secret-cave-wrapper">
      <button
        type="button"
        onDoubleClick={beginAwakening}
        onPointerDown={beginHold}
        onPointerUp={clearHoldTimer}
        onPointerCancel={clearHoldTimer}
        onPointerLeave={clearHoldTimer}
        disabled={isAwakening}
        className={`
          secret-cave-trigger
          ${isHolding ? 'secret-cave-trigger-holding' : ''}
          ${isAwakening ? 'secret-cave-trigger-awakening' : ''}
        `}
        aria-label="Hidden entrance"
      >
        <StoneSymbol
          className="h-7 w-7"
          isAwakening={isAwakening}
        />

        <span
          aria-hidden="true"
          className={`
            secret-cave-hold-ring
            ${isHolding ? 'secret-cave-hold-ring-active' : ''}
          `}
        />
      </button>

      {isAwakening && (
        <div className="stone-dust" aria-hidden="true">
          {dustParticles.map((particle, index) => (
            <span
              key={index}
              className="stone-dust-particle"
              style={{
                left: particle.left,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      )}

      {isAwakening && (
        <div
          className="cave-entry-fade"
          aria-hidden="true"
        />
      )}
    </div>
  );
}