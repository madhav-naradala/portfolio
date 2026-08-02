'use client';

import { AnimatePresence, motion } from 'framer-motion';

import Home from './home';
import Cave from './cave/cave';
import {
  CaveProvider,
  useCaveMode,
} from './cave/context';

function ExperienceContent() {
  const { isCaveMode } = useCaveMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isCaveMode ? (
        <Cave key="cave" />
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.45,
          }}
        >
          <Home />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Experience() {
  return (
    <CaveProvider>
      <ExperienceContent />
    </CaveProvider>
  );
}