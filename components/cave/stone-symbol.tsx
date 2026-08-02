'use client';

interface StoneSymbolProps {
  className?: string;
  isAwakening?: boolean;
}

export default function StoneSymbol({
  className = '',
  isAwakening = false,
}: StoneSymbolProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={`stone-symbol ${className} ${
        isAwakening ? 'stone-symbol-awakening' : ''
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="stone-fill"
          x1="10"
          y1="8"
          x2="54"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stopColor="currentColor"
            stopOpacity="0.95"
          />

          <stop
            offset="55%"
            stopColor="currentColor"
            stopOpacity="0.56"
          />

          <stop
            offset="100%"
            stopColor="currentColor"
            stopOpacity="0.25"
          />
        </linearGradient>

        <filter
          id="stone-inner-glow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="1.8" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="stone-body">
        <path
          d="
            M31.7 5.5
            C39.4 5.2 47.1 9.1 52.2 15.6
            C57.4 22.2 59.2 31.3 56.8 39.4
            C54.3 47.8 47.7 54.8 39.4 57.5
            C31.2 60.2 21.8 58.8 15.1 53.3
            C8.5 47.9 5.1 39.6 6.1 31.2
            C7.1 22.8 12.5 15.1 20 10.8
            C23.7 8.7 27.7 5.8 31.7 5.5
            Z
          "
          fill="url(#stone-fill)"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />

        <path
          d="
            M32 17
            L42 31
            L32 47
            L22 31
            Z
          "
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.72"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />

        <path
          d="M32 23 L32 41"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <circle
          cx="18"
          cy="24"
          r="1.3"
          fill="currentColor"
          opacity="0.34"
        />

        <circle
          cx="45"
          cy="20"
          r="1.1"
          fill="currentColor"
          opacity="0.28"
        />

        <circle
          cx="46"
          cy="43"
          r="1.4"
          fill="currentColor"
          opacity="0.26"
        />
      </g>

      <g
        className="stone-cracks"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        filter="url(#stone-inner-glow)"
      >
        <path
          className="stone-crack stone-crack-one"
          d="M31.5 7 L29 18 L34 24 L30 31"
          strokeWidth="1.4"
        />

        <path
          className="stone-crack stone-crack-two"
          d="M54 27 L43 30 L38 36 L31 35"
          strokeWidth="1.25"
        />

        <path
          className="stone-crack stone-crack-three"
          d="M19 50 L24 42 L22 35 L29 31"
          strokeWidth="1.25"
        />

        <path
          className="stone-crack stone-crack-four"
          d="M32 34 L36 41 L34 49 L39 57"
          strokeWidth="1.15"
        />
      </g>
    </svg>
  );
}