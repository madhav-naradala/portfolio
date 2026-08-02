'use client';

import type { CSSProperties } from 'react';

interface TorchProps {
  x: number;
  y: number;
}

export default function Torch({ x, y }: TorchProps) {
  const style: CSSProperties = {
    left: x,
    top: y,
  };

  return (
    <div
      className="cave-torch"
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 88 210"
        className="h-full w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="cave-handle"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#d6b57e" />
            <stop offset="42%" stopColor="#8b6038" />
            <stop offset="100%" stopColor="#2e1a0f" />
          </linearGradient>

          <linearGradient
            id="cave-crown"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#c59a62" />
            <stop offset="48%" stopColor="#684226" />
            <stop offset="100%" stopColor="#24130b" />
          </linearGradient>

          <radialGradient id="cave-flame-core">
            <stop offset="0%" stopColor="#fffbe6" />
            <stop offset="32%" stopColor="#ffe17c" />
            <stop offset="66%" stopColor="#ff8a1f" />
            <stop offset="100%" stopColor="#c72c0b" />
          </radialGradient>

          <filter
            id="cave-flame-glow"
            x="-200%"
            y="-200%"
            width="400%"
            height="400%"
          >
            <feGaussianBlur stdDeviation="7" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="cave-flame cave-flame-outer"
          d="
            M44 3
            C22 30 20 49 29 65
            C17 56 10 76 19 91
            C27 104 38 107 47 102
            C63 100 72 84 66 69
            C61 58 57 48 58 37
            C53 47 49 53 44 56
            C49 40 49 20 44 3
            Z
          "
          fill="#ff6417"
          filter="url(#cave-flame-glow)"
        />

        <path
          className="cave-flame cave-flame-inner"
          d="
            M45 33
            C32 48 31 64 37 74
            C31 72 29 82 34 90
            C39 98 51 98 57 89
            C64 77 54 66 52 57
            C49 65 46 68 42 71
            C46 58 48 44 45 33
            Z
          "
          fill="url(#cave-flame-core)"
        />

        <path
          d="M20 95 Q44 84 68 95 L62 114 Q44 106 26 114 Z"
          fill="#3b2112"
        />

        <path
          d="M25 102 L63 102 L57 128 L31 128 Z"
          fill="url(#cave-crown)"
        />

        <path
          d="M34 124 L54 124 L49 198 Q44 207 39 198 Z"
          fill="url(#cave-handle)"
        />

        {[139, 154, 169, 184].map((lineY) => (
          <path
            key={lineY}
            d={`M36 ${lineY} L51 ${lineY}`}
            stroke="#28150c"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}