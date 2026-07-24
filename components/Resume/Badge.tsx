'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary' }) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.span
      className={`
        inline-block px-3 py-1.5 rounded-full text-xs font-semibold
        transition-all duration-300
        ${
          isPrimary
            ? 'bg-accent/20 text-accent-light border border-accent/40 hover:bg-accent/30 hover:border-accent/60'
            : 'bg-primary/30 text-gray-300 border border-accent/20 hover:bg-primary/50 hover:border-accent/40'
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.span>
  );
};
