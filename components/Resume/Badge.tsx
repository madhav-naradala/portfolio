'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.span
      className={`inline-block rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
        isPrimary
          ? 'border-blue-400/40 bg-blue-500/20 text-blue-200 hover:border-blue-400/60 hover:bg-blue-500/30'
          : 'border-slate-600 bg-slate-800/70 text-slate-300 hover:border-slate-500 hover:bg-slate-700/70'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.span>
  );
};
