'use client';

import { motion } from 'framer-motion';
import Artifacts from './artifacts';

interface WallProps {
  lightX: number;
  lightY: number;
}

export default function Wall({ lightX, lightY }: WallProps) {
  return (
    <motion.div
      className="cave-wall"
      style={
        {
          '--cave-light-x': `${lightX}px`,
          '--cave-light-y': `${lightY}px`,
        } as React.CSSProperties
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 1.1,
      }}
    >
      <div className="cave-wall-texture" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-28 sm:px-10">
        <div className="w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-14 max-w-4xl"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-amber-100/25">
              A chamber behind the surface
            </p>

            <h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] text-amber-50/75 sm:text-7xl lg:text-8xl">
              Moments and notes,
              <span className="block text-amber-100/20">
                left on the wall.
              </span>
            </h1>
          </motion.div>

          <Artifacts />
        </div>
      </div>
    </motion.div>
  );
}