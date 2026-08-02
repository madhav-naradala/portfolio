'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Artifacts() {
  return (
    <div className="relative z-10 grid w-full gap-8 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link
          href="/photography"
          className="
            cave-artifact
            group
            relative
            flex
            min-h-[340px]
            flex-col
            justify-end
            overflow-hidden
            rounded-[46%_54%_45%_55%/54%_42%_58%_46%]
            border
            border-amber-100/[0.08]
            bg-[#1a0f08]/35
            p-8
            transition-all
            duration-700

            hover:-translate-y-1
            hover:border-amber-200/20
          "
        >
          <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40">
            <svg
              viewBox="0 0 600 400"
              className="h-full w-full"
              aria-hidden="true"
            >
              <path
                d="
                  M105 228
                  C129 158 196 125 283 146
                  C338 114 420 129 456 181
                  C479 215 472 264 441 285
                  C403 311 344 294 316 267
                  L293 326
                  L270 326
                  L268 258
                  C233 273 197 272 166 260
                  L145 326
                  L120 326
                  L126 249
                  C112 244 102 237 105 228
                  Z
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-200"
              />

              <path
                d="M433 170 C454 143 477 148 490 168"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                className="text-amber-200"
              />

              <path
                d="M180 144 C159 123 149 102 158 83"
                fill="none"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="round"
                className="text-amber-200"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100/30">
              Images preserved
            </p>

            <h2 className="mt-3 text-4xl tracking-[-0.04em] text-amber-50/80 sm:text-5xl">
              Photography
            </h2>

            <p className="mt-5 max-w-md leading-7 text-amber-100/35">
              Places, people, details, and moments captured through
              my perspective.
            </p>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.7,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link
          href="/writing"
          className="
            cave-artifact
            group
            relative
            flex
            min-h-[340px]
            flex-col
            justify-end
            overflow-hidden
            rounded-[55%_45%_57%_43%/44%_56%_44%_56%]
            border
            border-amber-100/[0.08]
            bg-[#1a0f08]/35
            p-8
            transition-all
            duration-700

            hover:-translate-y-1
            hover:border-amber-200/20
          "
        >
          <div className="absolute inset-0 flex items-center justify-center text-6xl tracking-[0.35em] text-amber-200/15 transition-colors duration-700 group-hover:text-amber-200/30 sm:text-7xl">
            <span aria-hidden="true">𐤀 𐤁 𐤌</span>
          </div>

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100/30">
              Thoughts inscribed
            </p>

            <h2 className="mt-3 text-4xl tracking-[-0.04em] text-amber-50/80 sm:text-5xl">
              Writing
            </h2>

            <p className="mt-5 max-w-md leading-7 text-amber-100/35">
              Technical notes, observations, lessons, and stories
              gathered along the way.
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}