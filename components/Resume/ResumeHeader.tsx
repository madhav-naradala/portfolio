'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import type { ResumeData } from '@/data/resume';

interface ResumeHeaderProps {
  personal: ResumeData['personal'];
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({ personal }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="mb-12 rounded-lg border border-blue-400/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="mb-2 text-4xl font-bold text-white md:text-5xl"
        variants={itemVariants}
      >
        {personal.name}
      </motion.h1>

      <motion.p
        className="mb-6 text-lg leading-relaxed text-slate-300"
        variants={itemVariants}
      >
        {personal.summary}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-6"
        variants={containerVariants}
      >
        <motion.a
          href={`mailto:${personal.email}`}
          className="group flex items-center gap-2 text-slate-300 transition-colors hover:text-blue-300"
          variants={itemVariants}
          whileHover={{ x: 5 }}
          aria-label={`Email ${personal.name}`}
        >
          <Mail className="h-5 w-5 transition-colors group-hover:text-blue-300" />
          <span className="truncate">{personal.email}</span>
        </motion.a>

        <motion.div
          className="flex items-center gap-2 text-slate-300"
          variants={itemVariants}
        >
          <MapPin className="h-5 w-5 text-blue-300" />
          <span>{personal.location}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
